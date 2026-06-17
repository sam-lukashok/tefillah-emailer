# Daily Tefillah Email — Claude Code Build Instructions

## What this project does

Sends a daily email every morning that teaches one blessing (bracha) from Shacharit (the morning prayer service). The email rotates through the blessings of the Shmonah Esrei in order, one per day, cycling back to the first after the last. Each email contains the Hebrew text, an English translation, and a short learning section explaining the meaning and significance of each phrase within that bracha.

The user davens (prays) daily and wants to invest in understanding what the words actually mean. The email should feel like a short daily Torah learning session, not a newsletter. No transliteration — Hebrew and English only.

---

## Tech stack

This project extends an existing automated email pipeline. The user already has:
- **GitHub Actions** for scheduled automation (cron jobs)
- **Resend** for transactional email delivery (API key already in GitHub secrets as `RESEND_API_KEY`)
- A working Node.js/JavaScript environment

Use the same stack: Node.js, Resend SDK, GitHub Actions. Do not introduce new dependencies unless absolutely necessary.

---

## Data: The Shmonah Esrei blessings of Shacharit

The 19 blessings of the Shmonah Esrei, in order. Each bracha needs:
- A name (English and Hebrew)
- The full Hebrew text (broken into meaningful phrases/clauses)
- English translation for each phrase
- Learning content: what the bracha is about, key themes, insights from commentators

### The 19 brachot in order:
1. Avot (אבות) — Forefathers
2. Gevurot (גבורות) — God's Might / Resurrection
3. Kedushah/Atah Kadosh (קדושת ה׳) — Sanctification of God
4. Binah/Atah Chonen (בינה) — Wisdom and Understanding
5. Teshuvah (תשובה) — Repentance
6. Selichah (סליחה) — Forgiveness
7. Geulah (גאולה) — Redemption
8. Refuah (רפואה) — Healing
9. Birkat HaShanim (ברכת השנים) — Prosperity / Blessing of the Years
10. Kibbutz Galuyot (קיבוץ גלויות) — Ingathering of Exiles
11. Mishpat (משפט) — Justice / Restoration of Justice
12. Birkat HaMinim (ברכת המינים) — Against Heresy
13. Tzaddikim (צדיקים) — The Righteous
14. Binyan Yerushalayim (בניין ירושלים) — Rebuilding Jerusalem
15. Malchut Beit David (מלכות בית דוד) — Kingdom of David / Mashiach
16. Shema Koleinu (שמע קולנו) — Hear Our Voice
17. Avodah (עבודה) — Temple Service / Restoration of Worship
18. Hoda'ah/Modim (הודאה) — Thanksgiving
19. Shalom (שלום) — Peace

Store all bracha content as structured data (JSON file or JS module). Each bracha object should include:
- `id`: number 1–19
- `name_hebrew`: Hebrew name
- `name_english`: English name
- `theme`: one-sentence summary of what the bracha is about
- `sections`: array of phrase objects, each with:
  - `hebrew`: the Hebrew text of this phrase
  - `translation`: English translation
  - `explanation`: 2–4 sentences explaining meaning, significance, sources
- `closing_insight`: a short paragraph (3–5 sentences) with a broader takeaway or practical kavvanah (intention) for davening this bracha

---

## Rotation logic

- Track which bracha to send next using a simple persistent counter
- **Option A (recommended):** Store the current bracha index in a JSON file committed to the repo (e.g., `state/current_bracha.json`). The GitHub Action reads it, sends the email, increments it (wrapping at 19 back to 1), and commits the updated file back to the repo.
- After bracha 19, cycle back to bracha 1
- The rotation should be deterministic — no randomness

---

## Email format

The email must render correctly across Gmail, Apple Mail, and Outlook. This means:
- **Table-based layout only** — no flexbox, no CSS grid
- **Inline styles only** — no `<style>` blocks (Outlook strips them)
- **No JavaScript** — email clients block all JS
- No external fonts — use system font stack: `Georgia, 'Times New Roman', serif` for Hebrew and body text

### Email structure (top to bottom):

1. **Subject line:** `[Day N/19] Shmonah Esrei: [Bracha Name English] (ברכת [Bracha Name Hebrew])`
   Example: `[Day 2/19] Shmonah Esrei: God's Might (ברכת גבורות)`

2. **Header:** Simple text header — "Daily Tefillah Learning" — muted, not loud

3. **Bracha title block:**
   - Large Hebrew name (right-aligned, RTL)
   - English name below it
   - Theme sentence in italics

4. **For each section/phrase:**
   - Hebrew text: right-aligned, larger font (~20px), RTL direction, serif font
   - English translation: left-aligned, bold, 15px
   - Explanation: left-aligned, regular weight, 14px, muted color (#555)
   - Thin horizontal rule between sections

5. **Closing insight block:** Lightly shaded background (#f9f6f0 or similar warm cream), the broader takeaway paragraph

6. **Footer:** "You are receiving this because you set it up. To pause, [instructions]." Keep minimal.

### Color palette (warm, not clinical):
- Background: #ffffff
- Section background (insight box): #f9f6f0
- Hebrew text: #1a1a1a
- Translation text: #1a1a1a (bold)
- Explanation text: #555555
- Accent / divider: #c9b99a (warm tan)
- Header text: #888888 (muted)

---

## File structure to build

```
tefillah-email/
├── data/
│   └── brachot.js          # All 19 brachot as structured JS/JSON data
├── state/
│   └── current_bracha.json # Tracks which bracha is next { "current": 1 }
├── templates/
│   └── email.js            # HTML email template builder function
├── send.js                 # Main script: reads state, builds email, sends via Resend, updates state
├── package.json
└── .github/
    └── workflows/
        └── daily-tefillah.yml  # GitHub Actions cron job
```

---

## GitHub Actions workflow

```yaml
name: Daily Tefillah Email
on:
  schedule:
    - cron: '0 10 * * *'  # 10am UTC = 6am ET — before morning davening
  workflow_dispatch:        # Allow manual trigger for testing
```

The workflow should:
1. Checkout the repo (with write permissions so it can commit state back)
2. Install dependencies (`npm ci`)
3. Run `node send.js`
4. Commit and push `state/current_bracha.json` with message `chore: advance tefillah bracha to N`

Use the `RESEND_API_KEY` secret already in the repo. The recipient email address should be stored as a GitHub secret `TEFILLAH_EMAIL_RECIPIENT` or hardcoded as a constant in `send.js` — user's preference.

---

## Resend configuration

```javascript
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'Tefillah Learning <tefillah@[your-verified-domain]>',
  to: [process.env.TEFILLAH_EMAIL_RECIPIENT],
  subject: subjectLine,
  html: emailHtml,
});
```

The user already has a verified domain with Resend from the existing podcast briefing pipeline — use the same domain.

---

## Content notes

- No transliteration anywhere — Hebrew script and English only
- Learning content should draw on classical sources: Rambam, Vilna Gaon, Maharal, Sfat Emet, Tur, Avudraham, relevant Gemara citations where natural
- Tone: scholarly but warm, like a knowledgeable chavruta partner, not a textbook
- Keep explanations tight — this is a morning email, not a shiur. Each phrase explanation should be 2–4 sentences max
- The closing insight should give the reader one concrete thing to have in mind (kavvanah) when they daven that bracha today

---

## Testing

Before scheduling, test by running `node send.js` locally (with `RESEND_API_KEY` and `RESEND_EMAIL_RECIPIENT` set as env vars). Confirm:
- Email arrives and renders correctly in Gmail
- Hebrew text is RTL and readable
- State file increments correctly
- On bracha 19, next run resets to 1

Also add a `--preview` flag to `send.js` that prints the HTML to stdout without sending, so the template can be inspected without burning an API call.
