/**
 * Builds the HTML email for a given prayer and its Claude-generated content.
 *
 * @param {object} prayer  - Entry from data/prayers.js
 * @param {object} content - { sections: [{hebrew, translation, explanation}], closing_insight }
 * @param {number} dayNum  - Current day number (1-based index into the rotation)
 * @param {number} total   - Total number of prayers in the rotation
 * @returns {{ subject: string, html: string }}
 */
export function buildEmail(prayer, content, dayNum, total) {
  const subject = `[Day ${dayNum}/${total}] Shacharit: ${prayer.name_english} — ${prayer.name_hebrew}`;

  const sectionRows = content.sections
    .map(
      (s, i) => `
      <tr>
        <td style="padding: 24px 36px 20px;">
          <!-- Hebrew phrase -->
          <p style="margin: 0 0 10px; font-size: 22px; line-height: 1.7; color: #1a1a1a; text-align: right; direction: rtl; font-family: Georgia, 'Times New Roman', serif;">${s.hebrew}</p>
          <!-- Translation -->
          <p style="margin: 0 0 10px; font-size: 15px; line-height: 1.5; color: #1a1a1a; font-weight: bold; font-family: Georgia, 'Times New Roman', serif;">${s.translation}</p>
          <!-- Explanation -->
          <p style="margin: 0; font-size: 14px; line-height: 1.8; color: #555555; font-family: Georgia, 'Times New Roman', serif;">${s.explanation}</p>
        </td>
      </tr>
      ${
        i < content.sections.length - 1
          ? `<tr><td style="padding: 0 36px;"><hr style="border: none; border-top: 1px solid #e8dfd0; margin: 0;"></td></tr>`
          : ''
      }`
    )
    .join('');

  const html = `<!DOCTYPE html>
<html lang="he" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>${subject}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f1eb;">

  <!-- Outer wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f4f1eb;">
    <tr>
      <td align="center" style="padding: 32px 16px;">

        <!-- Card -->
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background-color: #ffffff; border-radius: 4px;">

          <!-- ── Header ── -->
          <tr>
            <td style="padding: 24px 36px 20px; border-bottom: 2px solid #c9b99a;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <p style="margin: 0; font-size: 11px; color: #aaaaaa; text-transform: uppercase; letter-spacing: 2.5px; font-family: Georgia, 'Times New Roman', serif;">Daily Tefillah Learning</p>
                    <p style="margin: 4px 0 0; font-size: 11px; color: #c9b99a; font-family: Georgia, 'Times New Roman', serif;">${prayer.section}</p>
                  </td>
                  <td align="right">
                    <p style="margin: 0; font-size: 11px; color: #cccccc; font-family: Georgia, 'Times New Roman', serif;">${dayNum} / ${total}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ── Title block ── -->
          <tr>
            <td style="padding: 32px 36px 24px;">
              <!-- Hebrew name — large, RTL -->
              <p style="margin: 0 0 8px; font-size: 36px; line-height: 1.3; color: #1a1a1a; text-align: right; direction: rtl; font-family: Georgia, 'Times New Roman', serif;">${prayer.name_hebrew}</p>
              <!-- English name -->
              <p style="margin: 0 0 10px; font-size: 20px; color: #1a1a1a; font-weight: bold; font-family: Georgia, 'Times New Roman', serif;">${prayer.name_english}</p>
              <!-- Theme / context -->
              <p style="margin: 0; font-size: 14px; color: #888888; font-style: italic; line-height: 1.6; font-family: Georgia, 'Times New Roman', serif;">${content.theme || prayer.context}</p>
            </td>
          </tr>

          <!-- ── Divider ── -->
          <tr>
            <td style="padding: 0 36px;">
              <hr style="border: none; border-top: 2px solid #c9b99a; margin: 0;">
            </td>
          </tr>

          <!-- ── Prayer sections ── -->
          ${sectionRows}

          <!-- ── Spacer before insight ── -->
          <tr>
            <td style="padding: 0 36px;">
              <hr style="border: none; border-top: 2px solid #c9b99a; margin: 0;">
            </td>
          </tr>

          <!-- ── Closing insight ── -->
          <tr>
            <td style="padding: 28px 36px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="background-color: #f9f6f0; padding: 22px 24px; border-left: 3px solid #c9b99a;">
                    <p style="margin: 0 0 10px; font-size: 10px; color: #aaaaaa; text-transform: uppercase; letter-spacing: 2px; font-family: Georgia, 'Times New Roman', serif;">Kavvanah for Today</p>
                    <p style="margin: 0; font-size: 14px; color: #333333; line-height: 1.9; font-family: Georgia, 'Times New Roman', serif;">${content.closing_insight}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ── Footer ── -->
          <tr>
            <td style="padding: 20px 36px 28px; border-top: 1px solid #e8dfd0;">
              <p style="margin: 0; font-size: 11px; color: #bbbbbb; line-height: 1.7; font-family: Georgia, 'Times New Roman', serif;">
                You are receiving this because you set it up. Sent each morning before davening.<br>
                To pause, stop the GitHub Actions workflow in your repository.
              </p>
            </td>
          </tr>

        </table>
        <!-- /Card -->

      </td>
    </tr>
  </table>

</body>
</html>`;

  return { subject, html };
}
