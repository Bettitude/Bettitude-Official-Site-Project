// ============================================================
// Bettitude - Image Service Utility
// ============================================================
// Each data source is its own Google Spreadsheet.
// Falls back to the original hardcoded URL if the sheet is
// empty, missing, or unreachable.
// ============================================================

const SHEET_IDS = {
  hero:     '1tlNH509j_lwUkDtr1-YHQlbiR7xlLTr-u7EoNp4Vso0',
  pages:    '1CPuLt8UKuqlc89L0301EO9C9FVp61oMWO4GSEbt0x_s',
  team:     '1zt7lT_h0CzKdy3ZZq6kcLxyvHj5bvYTv7ZFjCY6qArg',
  misc:     '1JvGk8Hg9PkRpGyreFYpNBG1nkR1eGRRhh26kNf8TDHU',
  partners: '1MMD9wqUPELi6ogvNaVBEAK5O8-jqTRlS1hbzNz6DkUs',
};

// ── Hardcoded fallback URLs ──────────────────────────────────

const HERO_FALLBACKS = {
  carousel_1:    'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1920&q=80',
  carousel_2:    'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&q=80',
  carousel_3:    'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=1920&q=80',
  carousel_4:    'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1920&q=80',
  carousel_5:    'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1920&q=80',
  feature_card_1:'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=90',
  feature_card_2:'https://www.channelstv.com/wp-content/uploads/2019/06/Megan-Rapinoe.jpg',
  feature_card_3:'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=90',
};

const PAGES_FALLBACKS = {
  about_hero:         'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1920&q=80',
  contact_hero:       'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80',
  advertisement_hero: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80',
  services_hero:      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80',
  service_hero:       'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1920&q=80',
  bettisports_bg:     'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1920&q=80',
  probetpicks_bg:     'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1920&q=80',
  bettiscores_bg:     'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&q=80',
  sportsdisanddat_bg: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1920&q=80',
  team_hero:          'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80',
  sponsorship_hero:   'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80',
  partner_hero:       'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1920&q=80',
  whatwedo_bg:        'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1920&q=80',
  careerhome_bg:      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80',
  support_hero_1:     'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&q=80',
  support_hero_2:     'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80',
  footer_service_bg:  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80',
  sitemap_hero:       'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80',
};

const MISC_FALLBACKS = {
  news_fallback: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80',
};

// ── Core GViz fetch ──────────────────────────────────────────

async function gvizFetch(sheetId) {
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json`;
  const res = await fetch(url);
  const text = await res.text();
  const match = text.match(/google\.visualization\.Query\.setResponse\(([\s\S]*?)\);\s*$/);
  if (!match) throw new Error('Unexpected GViz response');
  return JSON.parse(match[1]);
}

// ── Slot-map fetch (col A = slot_name, col B = image_url) ────

async function fetchSlotMap(sheetId) {
  try {
    const json = await gvizFetch(sheetId);
    const rows = json.table?.rows;
    if (!rows) return {};
    return rows.reduce((acc, row) => {
      const cells = row.c;
      const slot     = cells?.[0]?.v;
      const imageUrl = cells?.[1]?.v;
      if (slot && imageUrl) acc[String(slot).trim()] = String(imageUrl).trim();
      return acc;
    }, {});
  } catch {
    return {};
  }
}

// ── Team rows fetch ──────────────────────────────────────────

async function fetchTeamRows(sheetId) {
  try {
    const json = await gvizFetch(sheetId);
    const rows = json.table?.rows;
    if (!rows) return [];
    return rows.map((row) => {
      const c = row.c;
      return {
        id:          c?.[0]?.v ?? null,
        name:        String(c?.[1]?.v || ''),
        role:        String(c?.[2]?.v || ''),
        bio:         String(c?.[3]?.v || ''),
        image_url:   c?.[4]?.v ? String(c[4].v).trim() : null,
        current_url: c?.[5]?.v ? String(c[5].v).trim() : null,
      };
    }).filter(r => r.name);
  } catch {
    return [];
  }
}

// ── Partner rows fetch ───────────────────────────────────────

async function fetchPartnerRows(sheetId) {
  try {
    const json = await gvizFetch(sheetId);
    const rows = json.table?.rows;
    if (!rows) return {};
    return rows.reduce((acc, row) => {
      const c       = row.c;
      const name    = c?.[1]?.v ? String(c[1].v).trim() : null;
      const logoUrl = c?.[2]?.v ? String(c[2].v).trim() : null;
      const fallback= c?.[4]?.v ? String(c[4].v).trim() : null;
      if (name) acc[name] = logoUrl || fallback || null;
      return acc;
    }, {});
  } catch {
    return {};
  }
}

// ── Public API ───────────────────────────────────────────────

/**
 * Hero carousel + feature card images (Hero.jsx).
 */
export async function fetchHeroImages() {
  const sheet = await fetchSlotMap(SHEET_IDS.hero);
  const result = {};
  for (const [slot, fallback] of Object.entries(HERO_FALLBACKS)) {
    result[slot] = (sheet[slot] && sheet[slot].length > 0) ? sheet[slot] : fallback;
  }
  return result;
}

/**
 * All page hero / background images.
 */
export async function fetchPageImages() {
  const sheet = await fetchSlotMap(SHEET_IDS.pages);
  const result = {};
  for (const [slot, fallback] of Object.entries(PAGES_FALLBACKS)) {
    result[slot] = (sheet[slot] && sheet[slot].length > 0) ? sheet[slot] : fallback;
  }
  return result;
}

/**
 * Team member rows: { id, name, role, bio, image_url, current_url }
 * Returns [] on failure — caller keeps its own hardcoded data.
 */
export async function fetchTeamImages() {
  return fetchTeamRows(SHEET_IDS.team);
}

/**
 * Partner name → logo_url map.
 * Returns {} on failure — caller keeps its own hardcoded logos.
 */
export async function fetchPartnerImages() {
  return fetchPartnerRows(SHEET_IDS.partners);
}

/**
 * Misc image slots (e.g. news article fallback thumbnail).
 */
export async function fetchMiscImages() {
  const sheet = await fetchSlotMap(SHEET_IDS.misc);
  const result = {};
  for (const [slot, fallback] of Object.entries(MISC_FALLBACKS)) {
    result[slot] = (sheet[slot] && sheet[slot].length > 0) ? sheet[slot] : fallback;
  }
  return result;
}
