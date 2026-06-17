import Anthropic from '@anthropic-ai/sdk';
import { Resend } from 'resend';
import { readFileSync, writeFileSync } from 'fs';
import { prayers, totalPrayers } from './data/prayers.js';
import { buildEmail } from './templates/email.js';

const STATE_PATH = './state/current_prayer.json';
const isPreview = process.argv.includes('--preview');
const isMock = process.argv.includes('--mock');

// ── State ─────────────────────────────────────────────────────────────────────

function readState() {
  return JSON.parse(readFileSync(STATE_PATH, 'utf8'));
}

function writeState(current) {
  writeFileSync(STATE_PATH, JSON.stringify({ current }, null, 2));
}

function nextIndex(current) {
  return current >= totalPrayers ? 1 : current + 1;
}

// ── Mock content (for --mock preview without an API key) ──────────────────────

const MOCK_CONTENT = {
  theme: "The first words of the day — giving thanks before we are even halachically ready to speak God's name.",
  sections: [
    {
      hebrew: "מוֹדֶה אֲנִי לְפָנֶיךָ",
      translation: "I gratefully acknowledge before You",
      explanation: "The word מוֹדֶה encompasses both acknowledgment and gratitude — a single Hebrew concept that English needs two words to express. By placing thankfulness as the very first thought of the day, we orient everything that follows around it. The Vilna Gaon notes that the opening word of each prayer shapes the spiritual tone of all that comes after."
    },
    {
      hebrew: "מֶלֶךְ חַי וְקַיָּם",
      translation: "Living and enduring King",
      explanation: "God is called both חַי (living, dynamic) and קַיָּם (enduring, eternal) — two attributes that together address the sleeper's disorientation. The Maharal explains that חַי points to God's active involvement in each moment; קַיָּם to His unchanging constancy. The King who gave us yesterday still reigns today — nothing has shifted overnight."
    },
    {
      hebrew: "שֶׁהֶחֱזַרְתָּ בִּי נִשְׁמָתִי בְּחֶמְלָה",
      translation: "That You have returned my soul within me with compassion",
      explanation: "Sleep is called one-sixtieth of death (Berakhot 57b). Each morning is therefore a small resurrection — the neshamah, partially withdrawn during sleep, is returned בְּחֶמְלָה, with compassion, as an act of pure chesed. We did not earn this return. It was given freely."
    },
    {
      hebrew: "רַבָּה אֱמוּנָתֶךָ",
      translation: "Great is Your faithfulness",
      explanation: "These words are drawn from Lamentations 3:23 — the book of destruction — yet placed at the start of each new day. The Sfat Emet reads this as the morning's core declaration: even in exile, even after failure, God's faithfulness is not conditional on ours. We affirm His loyalty before affirming our own."
    }
  ],
  closing_insight: "Modeh Ani is said before washing hands — before one is even halachically permitted to recite God's name — because gratitude requires no prerequisite. You don't need to be ready, clean, or worthy to say thank you. When you say these words today, pause at שֶׁהֶחֱזַרְתָּ בִּי נִשְׁמָתִי: your soul was returned as an act of trust. The question Modeh Ani quietly poses each morning is the same one: what will you do with the day you've been given back?"
};

// ── Claude content generation ─────────────────────────────────────────────────

async function generateContent(prayer) {
  if (isMock) return MOCK_CONTENT;
  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  const systemPrompt = `You are a Jewish educator with deep knowledge of halacha, tefillah, Talmud, and classical commentators (Rambam, Vilna Gaon, Maharal, Sfat Emet, Tur, Avudraham, Rashi, Ramban). Your tone is scholarly but warm — like a knowledgeable chavruta partner, not a textbook. You write for a daily learner who davens every day and wants to invest in understanding what the words actually mean.`;

  const userPrompt = `Generate learning content for today's daily Tefillah email. The prayer is:

Name (Hebrew): ${prayer.name_hebrew}
Name (English): ${prayer.name_english}
Section of Shacharit: ${prayer.section}
Context: ${prayer.context}

Return ONLY a valid JSON object with this exact structure (no markdown, no code fences, raw JSON only):

{
  "theme": "One sentence describing what this prayer is about and why it matters",
  "sections": [
    {
      "hebrew": "A meaningful phrase or clause from this prayer in Hebrew (with nekudot/vowels where natural)",
      "translation": "Precise English translation of this phrase",
      "explanation": "2–4 sentences explaining the meaning, theological significance, and/or relevant classical sources (Gemara, Rambam, Vilna Gaon, Maharal, Sfat Emet, Tur, Avudraham, etc.)"
    }
  ],
  "closing_insight": "A paragraph of 3–5 sentences giving the reader one concrete kavvanah (intention) to have when davening this prayer today. Practical, personal, and grounded in the text."
}

Requirements:
- Break the prayer into 3–6 meaningful phrases or clauses. For shorter prayers (like Modeh Ani), fewer sections is fine.
- Hebrew text should be accurate. Include nekudot naturally where you know them.
- No transliteration anywhere — Hebrew and English only.
- Keep explanations tight — 2–4 sentences max per section. This is a morning email, not a shiur.
- Draw on named classical sources where genuinely relevant, not artificially inserted.
- The closing insight should give one thing to have in mind today — specific, not generic.`;

  const response = await anthropic.messages.create({
    model: 'claude-opus-4-8',
    max_tokens: 2048,
    system: systemPrompt,
    messages: [{ role: 'user', content: userPrompt }],
  });

  const raw = response.content[0].text.trim();

  try {
    return JSON.parse(raw);
  } catch {
    // Strip accidental markdown fences if the model added them
    const cleaned = raw.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '').trim();
    return JSON.parse(cleaned);
  }
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  const state = readState();
  const prayer = prayers[state.current - 1];

  console.error(`Generating content for: ${prayer.name_english} (${prayer.name_hebrew}) — Day ${state.current}/${totalPrayers}`);

  const content = await generateContent(prayer);
  const { subject, html } = buildEmail(prayer, content, state.current, totalPrayers);

  if (isPreview) {
    // Write HTML to stdout for piping to a file or browser
    process.stdout.write(html);
    console.error(`\nSubject: ${subject}`);
    return;
  }

  // ── Send email ──
  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: 'Tefillah Learning <onboarding@resend.dev>',
    to: [process.env.TEFILLAH_EMAIL_RECIPIENT],
    subject,
    html,
  });

  console.error('Email sent successfully.');

  // ── Advance state ──
  const next = nextIndex(state.current);
  writeState(next);
  console.error(`State advanced to ${next}/${totalPrayers}.`);

  // Output next prayer number for the GitHub Actions commit message
  console.log(next);
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
