# Bettitude News Management - Setup Guide

## Overview
This system fetches news articles from Google Sheets and displays them on your website with category filtering and delete functionality.

---

## 📋 Step 1: Create Your Google Sheet

1. **Create a new Google Sheet** or use an existing one
2. **Name the sheet tab**: `News` (or customize `SHEET_NAME` in the script)
3. **Add these column headers** in Row 1:

| Column | Header | Description | Example |
|--------|--------|-------------|---------|
| A | ID | Unique article ID (auto-increment) | 1, 2, 3... |
| B | Title | Article headline | "Champions League: City Advances" |
| C | Excerpt | Short description/summary | "An impressive display sees City..." |
| D | Image URL | Full URL to article image | https://images.unsplash.com/... |
| E | Category | Article category for filtering | Premier League, Transfers, etc. |
| F | Author | Article author name | John Smith |
| G | Date | Publication date (YYYY-MM-DD) | 2024-01-15 |
| H | Read Time | Estimated reading time | 5 min read |

4. **Add your news articles** starting from Row 2

### Example Google Sheet Data:

```
ID | Title                              | Excerpt                    | Image URL           | Category       | Author      | Date       | Read Time
---|------------------------------------|----------------------------|---------------------|----------------|-------------|------------|----------
1  | Champions League: City Advances... | An impressive display...   | https://unsplash... | Champions Lea. | John Smith  | 2024-01-15 | 5 min read
2  | Transfer Window Opens...           | Top clubs prepare...       | https://unsplash... | Transfers      | Sarah Jones | 2024-01-14 | 4 min read
3  | Premier League: Title Race...      | Three teams battle...      | https://unsplash... | Premier League | Mike Brown  | 2024-01-13 | 6 min read
```

---

## 🔧 Step 2: Managing Your News

### Adding News:
- Simply add new rows to your Google Sheet
- The website will automatically fetch and display them

### Editing News:
- Edit any cell in your Google Sheet
- Changes will appear on the website on next page load

### Deleting News:
- **Delete rows directly in your Google Sheet**
- Right-click on the row number and select "Delete row"
- The article will be removed from the website automatically

**Note**: All news management happens directly in Google Sheets - no complicated setup needed!

---

## 🌐 Step 3: Configure Your Frontend

### A. Get Your Google Sheet ID

Your Sheet ID is in the URL:
```
https://docs.google.com/spreadsheets/d/[THIS_IS_YOUR_SHEET_ID]/edit
```

Example:
```
https://docs.google.com/spreadsheets/d/1ABC123xyz456/edit
                                      ^^^^^^^^^^^^^^^^
                                      This is your Sheet ID
```

### B. Update `newsService.js`

1. Open: `Frontend/src/utils/newsService.js`
2. **Replace line 9** with your Google Sheet ID:
   ```javascript
   const GOOGLE_SHEET_ID = "YOUR_SHEET_ID_HERE";
   ```
   becomes:
   ```javascript
   const GOOGLE_SHEET_ID = "1ABC123xyz456";
   ```

3. **Replace line 59** with your Apps Script Web App URL:
   ```javascript
   const DELETE_URL = "https://script.google.com/macros/s/YOUR_DELETE_SCRIPT_ID/exec";
   ```
   becomes:
   ```javascript
   const DELETE_URL = "https://script.google.com/macros/s/AKfycby.../exec";
   ```

### C. Update App Routes (if needed)

If you want to replace the iframe News page:

1. Open: `Frontend/src/App.jsx` (or your routes file)
2. Find the route for `/news`
3. Replace:
   ```jsx
   import News from './Pages/News';
   ```
   with:
   ```jsx
   import NewsPage from './Pages/NewsPage';
   ```
4. Update the route:
   ```jsx
   <Route path="/news" element={<NewsPage />} />
   ```

---

## 🎨 Step 4: Customize Categories

Open `Frontend/src/Pages/NewsPage.jsx` and edit the `categories` array (around line 15):

```javascript
const categories = [
  'All',
  'Premier League',
  'Champions League',
  'La Liga',
  'Serie A',
  'Bundesliga',
  'World Cup',
  'Transfers',
  'Women\'s Football',
  'General'
];
```

**Important**: Make sure your Google Sheet uses the same category names!

---

## 🚀 Step 5: Test Everything

### Test Fetching News:
1. Add some test articles to your Google Sheet
2. Visit your homepage - you should see the **last 4 articles** in the NewsHome section
3. Visit `/news` - you should see all articles with category tabs

### Test Delete Function:
1. Hover over any article card
2. You should see a **red trash icon** in the top-right
3. Click it and confirm deletion
4. The article should be removed from both the website and Google Sheet

---

## 📝 Important Notes

### Security Considerations:
- **Delete button is visible to everyone by default**
- In production, add authentication to restrict delete access to admins only
- Consider adding password protection or OAuth for sensitive operations

### Data Format:
- **Dates**: Use `YYYY-MM-DD` format (e.g., `2024-01-15`)
- **Image URLs**: Must be full URLs starting with `https://`
- **Categories**: Must match exactly (case-sensitive)

### Troubleshooting:
- If news doesn't load, check browser console for errors
- Verify your Sheet ID is correct in `newsService.js`
- Make sure the Google Sheet is published/shared properly
- Check that Apps Script deployment is set to "Anyone" access

---

## 🎯 Quick Checklist

- [ ] Google Sheet created with correct columns
- [ ] Sample news articles added
- [ ] Apps Script code copied and saved
- [ ] Web App deployed with "Anyone" access
- [ ] Sheet ID added to `newsService.js`
- [ ] Apps Script URL added to `newsService.js`
- [ ] Categories customized in `NewsPage.jsx`
- [ ] Routes updated (if replacing iframe)
- [ ] Tested fetching news on homepage
- [ ] Tested category filtering on news page
- [ ] Tested delete functionality

---

## 🆘 Need Help?

If you encounter issues:
1. Check browser console for error messages
2. Verify all URLs are correct and properly formatted
3. Test the Apps Script directly by visiting the URL
4. Ensure Google Sheet permissions allow public access

---

## 🎉 You're Done!

Your news system should now be fully functional with:
- ✅ Real-time news from Google Sheets
- ✅ Category filtering with tabs
- ✅ Latest 4 articles on homepage
- ✅ Delete functionality for admins
- ✅ Responsive design
- ✅ Loading skeletons
