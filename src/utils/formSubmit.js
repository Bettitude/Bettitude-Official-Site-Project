// ============================================================
// Bettitude - Form Submission Utility
// ============================================================
// Handles AJAX submission to Google Apps Script for all forms.
// Replace the URL below with your deployed Web App URL.
// ============================================================

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyN5rwDUO3YGJ1WrXLl8DcWw31dWg-IfJwtjXEiqYq8E7LsYx66tH0jz5jfiYeSLYd_rA/exec";
// const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwogi4PG3Kzy_igqk8C6BeRTXcyJN2l7CKvjyyUNZCePilUnq7Kb-DsdjPkkUcITt8T/exec";

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

  await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain" },
    body: JSON.stringify(payload),
  });

  // no-cors returns an opaque response — if fetch didn't throw, the request reached Google
  return { status: "success", message: "Form submitted successfully" };
}
