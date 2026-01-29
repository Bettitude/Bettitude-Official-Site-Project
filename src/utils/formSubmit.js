// ============================================================
// Bettitude - Form Submission Utility
// ============================================================
// Handles AJAX submission to Google Apps Script for all forms.
// Replace the URL below with your deployed Web App URL.
// ============================================================

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwogi4PG3Kzy_igqk8C6BeRTXcyJN2l7CKvjyyUNZCePilUnq7Kb-DsdjPkkUcITt8T/exec";

/**
 * Submit form data to Google Apps Script.
 * Saves to Google Sheets + sends emails (user confirmation + admin notification).
 *
 * @param {string} formType - "contact" | "appointment" | "feedback" | "partnership"
 * @param {object} formData - The form field values
 * @returns {Promise<{status: string, message: string}>}
 */
export async function submitForm(formType, formData) {
  const payload = {
    formType,
    ...formData,
  };

  const response = await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const result = await response.json();

  if (result.status !== "success") {
    throw new Error(result.message || "Submission failed");
  }

  return result;
}
