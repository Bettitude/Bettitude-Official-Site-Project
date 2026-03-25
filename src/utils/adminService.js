// ============================================================
// Bettitude Admin Service
// Handles all writes to Google Sheets via Apps Script
// and Claude API markdown conversion
// ============================================================

// ── LocalStorage helpers ─────────────────────────────────────

export const getAppsScriptUrl  = () => localStorage.getItem('bettitude_apps_script_url') || '';
export const getClaudeKey      = () => localStorage.getItem('bettitude_claude_key') || '';
export const setAppsScriptUrl  = (v) => localStorage.setItem('bettitude_apps_script_url', v);
export const setClaudeKey      = (v) => localStorage.setItem('bettitude_claude_key', v);
export const getAdminPassword  = () => localStorage.getItem('bettitude_admin_pw') || 'bettitude2025';
export const setAdminPassword  = (v) => localStorage.setItem('bettitude_admin_pw', v);
export const isAuthenticated   = () => localStorage.getItem('bettitude_admin_authed') === 'true';
export const authenticate      = () => localStorage.setItem('bettitude_admin_authed', 'true');
export const logout            = () => localStorage.removeItem('bettitude_admin_authed');

// ── Sheet write via Apps Script ───────────────────────────────
// Uses no-cors because Apps Script doesn't return CORS headers.
// The data IS written to the sheet — we just can't read the response.

export async function writeToSheet(sheet, action, payload, id = null) {
  const url = getAppsScriptUrl();
  if (!url) throw new Error('Apps Script URL not set. Go to Settings first.');

  await fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ sheet, action, payload, id }),
  });
  // no-cors → opaque response → assume success
}

// Convenience wrappers
export const appendRow     = (sheet, payload)        => writeToSheet(sheet, 'append',     payload, null);
export const updateRow     = (sheet, payload, id)    => writeToSheet(sheet, 'update',     payload, id);
export const deleteRow     = (sheet, id)             => writeToSheet(sheet, 'delete',     null,    id);
export const updateSlot    = (sheet, slot, imageUrl) => writeToSheet(sheet, 'updateSlot', { slot, imageUrl }, null);

// ── Claude API — plain text → Markdown ───────────────────────

export async function convertToMarkdown(plainText) {
  const key = getClaudeKey();
  if (!key) throw new Error('Claude API key not set. Go to Settings first.');

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': key,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 4096,
      messages: [{
        role: 'user',
        content: `You are a sports content editor for Bettitude, a sports media platform.
Convert the following plain text article into well-formatted Markdown suitable for a sports news site.

Formatting rules:
- Use ## for section headings, ### for sub-headings
- **Bold** for team names, stats, product names (ProBetPicks, BettiScores, etc.)
- *Italic* for player names and emphasis
- > blockquote for key quotes or standout facts
- Bullet points for lists of stats, features, or multiple items
- --- for major section breaks
- Keep the tone professional, engaging and sports-focused
- Do NOT add a title at the top (the title is handled separately)
- Return ONLY the formatted Markdown — no explanation, no code fences

Plain text article:
${plainText}`,
      }],
    }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err?.error?.message || `Claude API error ${res.status}`);
  }

  const data = await res.json();
  return data.content?.[0]?.text || '';
}

// ── Auto-generate ID ──────────────────────────────────────────
export const genId = () => Date.now();

// ── Format today's date ───────────────────────────────────────
export const todayStr = () =>
  new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

// ── Estimate read time ────────────────────────────────────────
export const estimateReadTime = (text) => {
  const words = text.trim().split(/\s+/).length;
  const mins  = Math.max(1, Math.round(words / 200));
  return `${mins} min read`;
};
