// ============================================================
// Bettitude - News Service Utility
// ============================================================
// Handles fetching and deleting news from Google Sheets
// ============================================================

import { fetchMiscImages } from './imageService';

// Module-level cache so we only call fetchMiscImages once
let _miscImageCache = null;
async function getMiscImages() {
  if (!_miscImageCache) _miscImageCache = fetchMiscImages();
  return _miscImageCache;
}

// Google Sheet ID for Bettitude News
const GOOGLE_SHEET_ID = "1zyIN09d47sXSuZd0PWXvs3DhD0i7Td36pYjRgGqvjnU";
const GOOGLE_SCRIPT_URL = `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/gviz/tq?tqx=out:json`;

// Alternative: If using Google Apps Script Web App
// const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";

/**
 * Generate a URL-friendly slug from a title
 * @param {string} title - Article title
 * @returns {string} URL slug
 */
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim();
}

/**
 * Parse a GViz date value into a display string and a sortable Date object.
 * GViz returns dates as "Date(year,month,day)" where month is 0-indexed.
 * Falls back to the formatted cell value (.f) if available.
 */
function parseGVizDate(cell) {
  if (!cell) return { display: '', sortable: new Date(0) };

  // Prefer the sheet's own formatted string (e.g. "March 23, 2026")
  if (cell.f) return { display: cell.f, sortable: new Date(cell.f) };

  const raw = String(cell.v || '');
  const match = raw.match(/^Date\((\d+),(\d+),(\d+)\)$/);
  if (match) {
    const d = new Date(+match[1], +match[2], +match[3]);
    const display = d.toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric',
    });
    return { display, sortable: d };
  }

  // Plain string date (e.g. "March 23, 2026" typed directly)
  const d = new Date(raw);
  return { display: raw, sortable: isNaN(d) ? new Date(0) : d };
}

/**
 * Fetch all news from Google Sheets
 * @returns {Promise<Array>} Array of news articles
 */
export async function fetchNews() {
  try {
    const miscImages = await getMiscImages();
    const newsFallback = miscImages.news_fallback || 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80';
    const response = await fetch(GOOGLE_SCRIPT_URL);
    const text = await response.text();

    // Robust parse — the prefix length can vary between responses
    const match = text.match(/google\.visualization\.Query\.setResponse\(([\s\S]*?)\);\s*$/);
    if (!match) throw new Error('Unexpected GViz response format');
    const json = JSON.parse(match[1]);

    const rows = json.table?.rows;
    if (!rows) return [];

    const seen = new Set();
    const news = rows.reduce((acc, row, index) => {
      const cells = row.c;
      if (!cells) return acc;

      const id = cells[0]?.v ?? index + 1;
      if (seen.has(id)) return acc;
      seen.add(id);

      const title = String(cells[1]?.v || '');
      if (!title) return acc; // skip empty rows

      const { display: dateDisplay, sortable: dateSort } = parseGVizDate(cells[6]);

      acc.push({
        id,
        title,
        slug: generateSlug(title),
        excerpt:  String(cells[2]?.v || ''),
        image:    String(cells[3]?.v || newsFallback),
        category: String(cells[4]?.v || 'General'),
        author:   String(cells[5]?.v || 'Bettitude'),
        date:     dateDisplay,
        _dateSort: dateSort,
        readTime: String(cells[7]?.v || '5 min read'),
        // Content: coerce to string and normalise line endings so Markdown renders correctly
        content: cells[8]?.v != null
          ? String(cells[8].v).replace(/\\n/g, '\n')
          : '',
      });
      return acc;
    }, []);

    // Sort newest first using the parsed Date object
    return news.sort((a, b) => b._dateSort - a._dateSort);
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
}

/**
 * Fetch latest N news articles
 * @param {number} limit - Number of articles to fetch
 * @returns {Promise<Array>} Array of latest news articles
 */
export async function fetchLatestNews(limit = 4) {
  const allNews = await fetchNews();
  return allNews.slice(0, limit);
}

/**
 * Fetch news by category
 * @param {string} category - Category to filter by
 * @returns {Promise<Array>} Array of news articles
 */
export async function fetchNewsByCategory(category) {
  const allNews = await fetchNews();
  if (category === "All") return allNews;
  return allNews.filter(article => article.category === category);
}

/**
 * Fetch unique categories from Google Sheets (dynamically derived from articles)
 * @returns {Promise<string[]>} Array of category strings, always starting with "All"
 */
export async function fetchCategories() {
  const allNews = await fetchNews();
  const unique = [...new Set(allNews.map(a => a.category).filter(Boolean))];
  return ['All', ...unique];
}

/**
 * Fetch a single news article by slug
 * @param {string} slug - Article slug
 * @returns {Promise<Object|null>} Article object or null if not found
 */
export async function fetchNewsBySlug(slug) {
  const allNews = await fetchNews();
  return allNews.find(article => article.slug === slug) || null;
}

/**
 * Delete a news article (requires Google Apps Script endpoint)
 * @param {number} id - Article ID to delete
 * @returns {Promise<{status: string, message: string}>}
 */
export async function deleteNews(id) {
  // TODO: Replace with your Google Apps Script Web App URL
  const DELETE_URL = "https://script.google.com/macros/s/YOUR_DELETE_SCRIPT_ID/exec";

  try {
    const response = await fetch(DELETE_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({ action: "delete", id }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();

    if (result.status !== "success") {
      throw new Error(result.message || "Delete failed");
    }

    return result;
  } catch (error) {
    console.error("Error deleting news:", error);
    throw error;
  }
}
