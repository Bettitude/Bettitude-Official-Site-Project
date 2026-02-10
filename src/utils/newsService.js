// ============================================================
// Bettitude - News Service Utility
// ============================================================
// Handles fetching and deleting news from Google Sheets
// ============================================================

// Google Sheet ID for Bettitude News
const GOOGLE_SHEET_ID = "1LSp2dgfRhgvrHGrkFlMzSgGdE-9CnmG2_JD_Ih-eYM4";
const GOOGLE_SCRIPT_URL = `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/gviz/tq?tqx=out:json`;

// Alternative: If using Google Apps Script Web App
// const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";

/**
 * Fetch all news from Google Sheets
 * @returns {Promise<Array>} Array of news articles
 */
export async function fetchNews() {
  try {
    const response = await fetch(GOOGLE_SCRIPT_URL);
    const text = await response.text();

    // Remove the callback wrapper to get pure JSON
    const json = JSON.parse(text.substr(47).slice(0, -2));

    const rows = json.table.rows;
    const news = rows.map((row, index) => {
      const cells = row.c;
      return {
        id: cells[0]?.v || index + 1, // ID
        title: cells[1]?.v || "",
        excerpt: cells[2]?.v || "",
        image: cells[3]?.v || "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80",
        category: cells[4]?.v || "General",
        author: cells[5]?.v || "Bettitude",
        date: cells[6]?.v || new Date().toISOString(),
        readTime: cells[7]?.v || "5 min read",
      };
    });

    // Sort by date (newest first)
    return news.sort((a, b) => new Date(b.date) - new Date(a.date));
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
