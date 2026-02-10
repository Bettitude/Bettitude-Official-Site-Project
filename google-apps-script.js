// ============================================================
// BETTITUDE - Google Apps Script for Form Handling
// ============================================================
// This file is NOT part of the React app.
// Copy this entire code into Google Apps Script Editor.
// See setup instructions at the bottom of this file.
// ============================================================

// ==================== CONFIGURATION ==========================
const CONFIG = {
  ADMIN_EMAIL: "hellobetitude@gmail.com",
  BUSINESS_NAME: "Bettitude",
};

// Each form has its OWN separate Google Sheet
const SPREADSHEET_IDS = {
  contact:     "1U1A1zHCJOTWc1WcSCDyYFGIdK7dPbYrY65NgJFjKkbk",
  appointment: "1e97iCgSHSaisF5N-FfW6tLHp-HebobPCvGXhy8H3N9U",
  feedback:    "1ptcY6DhR89VSYevUt3_rUqJpwJot4fNNIjS-CHs88tA",
  partnership: "1MsFf2hNHDmN5ISwQLZQJQPo8gYEXNJdKq_AclT_GLOA",
  advertisement: "1HGVCGlzUfCR07De_0AZf2C-XSTYngSh6I9lgs3D8CNo",  
  sponsorship:   "1sehLc_Q8nRIgjf8K21q13P9GxnK_pn8M_VFyTuoFgQo",
};
// =============================================================

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const formType = data.formType || "contact";

    // 1. Save to Google Sheet
    saveToSheet(formType, data);

    // 2. Send confirmation email to user
    sendUserEmail(formType, data);

    // 3. Send notification email to admin
    sendAdminEmail(formType, data);

    return ContentService.createTextOutput(
      JSON.stringify({ status: "success", message: "Form processed successfully" })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: "error", message: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// ==================== SAVE TO SHEET ==========================
function saveToSheet(formType, data) {
  const spreadsheetId = SPREADSHEET_IDS[formType] || SPREADSHEET_IDS.contact;
  const ss = SpreadsheetApp.openById(spreadsheetId);

  // Use the first sheet in the spreadsheet (Sheet1)
  let sheet = ss.getSheets()[0];

  // Add headers if the sheet is empty
  if (sheet.getLastRow() === 0) {
    const headers = getHeaders(formType);
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold");
    sheet.getRange(1, 1, 1, headers.length).setBackground("#0057B8");
    sheet.getRange(1, 1, 1, headers.length).setFontColor("#FFFFFF");
  }

  const row = getRowData(formType, data);
  sheet.appendRow(row);
}

function getHeaders(formType) {
  switch (formType) {
    case "contact":
      return ["Timestamp", "Name", "Email", "Message"];
    case "appointment":
      return ["Timestamp", "Name", "Email", "Phone", "Service", "Date", "Time", "Message"];
    case "feedback":
      return ["Timestamp", "Name", "Email", "Category", "Area", "Feedback"];
    case "partnership":
      return ["Timestamp", "Name", "Email", "Company", "Phone", "Partnership Type", "Message"];
    case "advertisement":
      return ["Timestamp", "Name", "Email", "Company", "Phone", "Ad Type", "Budget", "Message"];
    case "sponsorship":
      return ["Timestamp", "Name", "Email", "Company", "Phone", "Sponsorship Type", "Message"];
    default:
      return ["Timestamp", "Name", "Email", "Message"];
  }
}

function getRowData(formType, data) {
  const timestamp = new Date().toLocaleString("en-AU", { timeZone: "Australia/Hobart" });

  switch (formType) {
    case "contact":
      return [timestamp, data.name, data.email, data.message];
    case "appointment":
      return [timestamp, data.name, data.email, data.phone, data.service, data.date, data.time, data.message];
    case "feedback":
      return [timestamp, data.name, data.email, data.category, data.area, data.feedback];
    case "partnership":
      return [timestamp, data.name, data.email, data.company, data.phone, data.partnershipType, data.message];
    case "advertisement":
      return [timestamp, data.name, data.email, data.company, data.phone, data.adType, data.budget, data.message];
    case "sponsorship":
      return [timestamp, data.name, data.email, data.company, data.phone, data.sponsorshipType, data.message];
    default:
      return [timestamp, data.name, data.email, data.message];
  }
}

// ==================== USER CONFIRMATION EMAIL =================
function sendUserEmail(formType, data) {
  if (!data.email) return;

  const subject = getUserEmailSubject(formType);
  const htmlBody = getUserEmailBody(formType, data);

  GmailApp.sendEmail(data.email, subject, "", {
    htmlBody: htmlBody,
    name: CONFIG.BUSINESS_NAME,
    replyTo: CONFIG.ADMIN_EMAIL,
  });
}

function getUserEmailSubject(formType) {
  switch (formType) {
    case "contact":
      return "We received your message - Bettitude";
    case "appointment":
      return "Appointment Request Confirmed - Bettitude";
    case "feedback":
      return "Thank you for your feedback - Bettitude";
    case "partnership":
      return "Partnership Inquiry Received - Bettitude";
    case "advertisement":
      return "Advertising Inquiry Received - Bettitude";
    case "sponsorship":
      return "Sponsorship Inquiry Received - Bettitude";
    default:
      return "We received your submission - Bettitude";
  }
}

function getUserEmailBody(formType, data) {
  const formDetails = getFormDetailsHTML(formType, data);
  const greeting = data.name ? `Hi ${data.name},` : "Hello,";

  let mainMessage = "";
  switch (formType) {
    case "contact":
      mainMessage = "Thank you for reaching out to us! We have received your message and our team will get back to you within 24 hours.";
      break;
    case "appointment":
      mainMessage = "Thank you for booking an appointment with us! We have received your request and will send you a confirmation with meeting details shortly.";
      break;
    case "feedback":
      mainMessage = "Thank you for taking the time to share your feedback! Your input is invaluable in helping us improve Bettitude. Our team reviews every submission carefully.";
      break;
    case "partnership":
      mainMessage = "Thank you for your interest in partnering with Bettitude! Our partnership team will review your inquiry and get back to you within 24-48 business hours.";
      break;
    case "advertisement":
      mainMessage = "Thank you for your interest in advertising with Bettitude! Our advertising team will review your inquiry and contact you within 24 hours to discuss your campaign.";
      break;
    case "sponsorship":
      mainMessage = "Thank you for your interest in sponsoring Bettitude! Our sponsorship team will review your inquiry and reach out within 48 hours to discuss partnership opportunities.";
      break;
  }

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin:0;padding:0;background-color:#0B0F19;font-family:Arial,Helvetica,sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0B0F19;padding:40px 20px;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

              <!-- Header -->
              <tr>
                <td style="background:linear-gradient(135deg,#0057B8,#003d82);padding:40px 30px;border-radius:16px 16px 0 0;text-align:center;">
                  <h1 style="color:#FFC527;margin:0;font-size:28px;font-weight:900;letter-spacing:1px;">BETTITUDE</h1>
                  <p style="color:#E0E0E0;margin:10px 0 0;font-size:14px;">Sports Data & Analytics</p>
                </td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="background-color:#111827;padding:40px 30px;">
                  <h2 style="color:#FFFFFF;margin:0 0 20px;font-size:22px;">${greeting}</h2>
                  <p style="color:#D1D5DB;font-size:16px;line-height:1.6;margin:0 0 25px;">${mainMessage}</p>

                  <!-- Submission Details -->
                  <div style="background-color:#1F2937;border:1px solid #374151;border-radius:12px;padding:25px;margin:25px 0;">
                    <h3 style="color:#FFC527;margin:0 0 15px;font-size:16px;text-transform:uppercase;letter-spacing:1px;">Your Submission Details</h3>
                    ${formDetails}
                  </div>

                  <p style="color:#9CA3AF;font-size:14px;line-height:1.5;margin:20px 0 0;">
                    If you have any questions, feel free to reply to this email or contact us at
                    <a href="mailto:${CONFIG.ADMIN_EMAIL}" style="color:#FFC527;text-decoration:none;">${CONFIG.ADMIN_EMAIL}</a>.
                  </p>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background-color:#0D1117;padding:30px;border-radius:0 0 16px 16px;text-align:center;">
                  <p style="color:#6B7280;font-size:12px;margin:0 0 10px;">
                    &copy; ${new Date().getFullYear()} Bettitude. All rights reserved.
                  </p>
                  <p style="color:#4B5563;font-size:11px;margin:0;">
                    25 Ladbroke Avenue, Burnie, Tas 7320, Australia
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}

// ==================== ADMIN NOTIFICATION EMAIL =================
function sendAdminEmail(formType, data) {
  const formLabel = formType.charAt(0).toUpperCase() + formType.slice(1);
  const subject = `New ${formLabel} Submission from ${data.name || data.email || "Anonymous"} - Bettitude`;
  const formDetails = getFormDetailsHTML(formType, data);

  const htmlBody = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin:0;padding:0;background-color:#0B0F19;font-family:Arial,Helvetica,sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0B0F19;padding:40px 20px;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

              <!-- Header -->
              <tr>
                <td style="background:linear-gradient(135deg,#FFC527,#ffb700);padding:30px;border-radius:16px 16px 0 0;text-align:center;">
                  <h1 style="color:#0B0F19;margin:0;font-size:22px;font-weight:900;">NEW ${formLabel.toUpperCase()} SUBMISSION</h1>
                  <p style="color:#0B0F19;margin:8px 0 0;font-size:14px;opacity:0.8;">
                    ${new Date().toLocaleString("en-AU", { timeZone: "Australia/Hobart" })}
                  </p>
                </td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="background-color:#111827;padding:35px 30px;">
                  <p style="color:#D1D5DB;font-size:16px;line-height:1.6;margin:0 0 20px;">
                    A new <strong style="color:#FFC527;">${formLabel}</strong> form has been submitted on the Bettitude website.
                  </p>

                  <!-- Submission Details -->
                  <div style="background-color:#1F2937;border:1px solid #374151;border-radius:12px;padding:25px;">
                    <h3 style="color:#FFC527;margin:0 0 15px;font-size:16px;text-transform:uppercase;letter-spacing:1px;">Submission Details</h3>
                    ${formDetails}
                  </div>

                  ${data.email ? `
                  <div style="margin-top:25px;text-align:center;">
                    <a href="mailto:${data.email}" style="display:inline-block;background:linear-gradient(135deg,#0057B8,#003d82);color:#FFFFFF;text-decoration:none;padding:12px 30px;border-radius:8px;font-weight:bold;font-size:14px;">
                      Reply to ${data.name || data.email}
                    </a>
                  </div>
                  ` : ""}
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background-color:#0D1117;padding:25px;border-radius:0 0 16px 16px;text-align:center;">
                  <p style="color:#6B7280;font-size:12px;margin:0;">
                    Bettitude Admin Notification System
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  GmailApp.sendEmail(CONFIG.ADMIN_EMAIL, subject, "", {
    htmlBody: htmlBody,
    name: "Bettitude Forms",
    replyTo: data.email || CONFIG.ADMIN_EMAIL,
  });
}

// ==================== SHARED HTML HELPERS =====================
function getFormDetailsHTML(formType, data) {
  let rows = "";

  const addRow = (label, value) => {
    if (value) {
      rows += `
        <tr>
          <td style="color:#9CA3AF;font-size:13px;padding:8px 10px;border-bottom:1px solid #374151;white-space:nowrap;vertical-align:top;font-weight:600;">${label}</td>
          <td style="color:#FFFFFF;font-size:14px;padding:8px 10px;border-bottom:1px solid #374151;vertical-align:top;">${value}</td>
        </tr>
      `;
    }
  };

  switch (formType) {
    case "contact":
      addRow("Name", data.name);
      addRow("Email", data.email);
      addRow("Message", data.message);
      break;
    case "appointment":
      addRow("Name", data.name);
      addRow("Email", data.email);
      addRow("Phone", data.phone);
      addRow("Service", data.service);
      addRow("Date", data.date);
      addRow("Time", data.time);
      addRow("Message", data.message);
      break;
    case "feedback":
      addRow("Name", data.name);
      addRow("Email", data.email);
      addRow("Category", data.category);
      addRow("Area", data.area);
      addRow("Feedback", data.feedback);
      break;
    case "partnership":
      addRow("Name", data.name);
      addRow("Email", data.email);
      addRow("Company", data.company);
      addRow("Phone", data.phone);
      addRow("Partnership Type", data.partnershipType);
      addRow("Message", data.message);
      break;
    case "advertisement":
      addRow("Name", data.name);
      addRow("Email", data.email);
      addRow("Company", data.company);
      addRow("Phone", data.phone);
      addRow("Ad Type", data.adType);
      addRow("Budget", data.budget);
      addRow("Message", data.message);
      break;
    case "sponsorship":
      addRow("Name", data.name);
      addRow("Email", data.email);
      addRow("Company", data.company);
      addRow("Phone", data.phone);
      addRow("Sponsorship Type", data.sponsorshipType);
      addRow("Message", data.message);
      break;
  }

  return `<table width="100%" cellpadding="0" cellspacing="0">${rows}</table>`;
}

// ==================== TEST FUNCTION ==========================
// Run this in Apps Script to test the setup works
function testSetup() {
  try {
    const ss = SpreadsheetApp.openById(SPREADSHEET_IDS.contact);
    Logger.log("Contact spreadsheet connected: " + ss.getName());

    // Test with a dummy contact submission
    const testData = {
      formType: "contact",
      name: "Test User",
      email: CONFIG.ADMIN_EMAIL,
      message: "This is a test submission to verify the setup works.",
    };

    saveToSheet("contact", testData);
    Logger.log("Sheet write successful");

    sendUserEmail("contact", testData);
    Logger.log("User email sent");

    sendAdminEmail("contact", testData);
    Logger.log("Admin email sent");

    Logger.log("ALL TESTS PASSED - Setup is working correctly!");
  } catch (error) {
    Logger.log("ERROR: " + error.toString());
  }
}


// ============================================================
// SETUP INSTRUCTIONS
// ============================================================
//
// STEP 1: Create 4 Google Sheets (one per form)
//   - Go to https://sheets.google.com
//   - Create 4 separate spreadsheets:
//     1. "Bettitude - Contact"
//     2. "Bettitude - Appointments"
//     3. "Bettitude - Feedback"
//     4. "Bettitude - Partnership"
//   - For each spreadsheet, copy its ID from the URL:
//     https://docs.google.com/spreadsheets/d/THIS_IS_THE_ID/edit
//   - Paste each ID into the SPREADSHEET_IDS object above
//
// STEP 2: Open Apps Script
//   - Go to https://script.google.com and create a new project
//   - Name it "Bettitude Forms Handler"
//   - Delete all existing code in the editor
//   - Paste this entire file's code there
//   - Update CONFIG.ADMIN_EMAIL with your Gmail address
//   - Update all 4 SPREADSHEET_IDS with your Sheet IDs
//   - Click Save (Ctrl+S)
//
// STEP 3: Deploy as Web App
//   - Click "Deploy" > "New deployment"
//   - Click the gear icon and select "Web app"
//   - Set "Execute as" to "Me"
//   - Set "Who has access" to "Anyone"
//   - Click "Deploy"
//   - Authorize the app when prompted (click through the warnings)
//   - Copy the Web App URL
//
// STEP 4: Update React App
//   - Open Frontend/src/utils/formSubmit.js
//   - Replace GOOGLE_SCRIPT_URL with your Web App URL
//
// STEP 5: Test
//   - In Apps Script editor, select "testSetup" function
//   - Click "Run" to verify everything works
//   - Check your email for test messages
//   - Check your "Bettitude - Contact" sheet for the test row
//
// ============================================================
