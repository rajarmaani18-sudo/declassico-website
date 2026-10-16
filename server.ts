import express from 'express';
import { createServer as createViteServer } from 'vite';
import { Resend } from 'resend';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());
  app.use(express.static(path.join(__dirname, 'public')));

  // Contact Us email endpoint using Resend
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, phone, query } = req.body;
      if (!name || !email || !phone || !query) {
        return res.status(400).json({
          error: 'Please fill in all required fields (Name, Email ID, Contact Number, and Query).',
        });
      }

      const resendApiKey = process.env.RESEND_API_KEY;
      if (!resendApiKey) {
        console.error('[Resend Error]: RESEND_API_KEY environment variable is not configured.');
        return res.status(500).json({
          error: 'Email service configuration error. Please ensure RESEND_API_KEY is configured.',
        });
      }

      const recipient = 'officialdeclassico@gmail.com';
      const subject = 'New Contact Us Query – DeClassico';

      // Resend default onboarding sender or configured domain sender
      const fromSender = process.env.RESEND_FROM_EMAIL || 'DeClassico Website <onboarding@resend.dev>';

      const now = new Date();
      const submittedAt = now.toLocaleString('en-IN', {
        dateStyle: 'full',
        timeStyle: 'medium',
        timeZone: 'Asia/Kolkata',
      });

      const textContent = `You Have Received a New Query

A customer has submitted a query through the DeClassico website.

Customer Details

Name: ${name}
Contact Number: ${phone}
Email ID: ${email}

Query:
${query}

Submitted:
${submittedAt}

DeClassico Website Enquiry`;

      const htmlContent = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Contact Us Query – DeClassico</title>
</head>
<body style="margin: 0; padding: 24px 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 14px rgba(0,0,0,0.06);">
    <!-- Header banner -->
    <div style="background-color: #0066FF; padding: 28px 24px; text-align: left;">
      <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.02em;">
        You Have Received a New Query
      </h1>
      <p style="color: #dbeafe; margin: 8px 0 0 0; font-size: 14px; line-height: 1.4;">
        A customer has submitted a query through the DeClassico website.
      </p>
    </div>

    <!-- Main Content -->
    <div style="padding: 28px 24px;">
      <h2 style="font-size: 15px; font-weight: 700; color: #0066FF; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 16px 0; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">
        Customer Details
      </h2>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
        <tbody>
          <tr>
            <td style="padding: 10px 0; font-weight: 600; color: #64748b; width: 140px; font-size: 14px; border-bottom: 1px solid #f8fafc;">Name:</td>
            <td style="padding: 10px 0; color: #0f172a; font-weight: 700; font-size: 14px; border-bottom: 1px solid #f8fafc;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: 600; color: #64748b; font-size: 14px; border-bottom: 1px solid #f8fafc;">Contact Number:</td>
            <td style="padding: 10px 0; color: #0f172a; font-weight: 600; font-size: 14px; border-bottom: 1px solid #f8fafc;">
              <a href="tel:${phone}" style="color: #0066FF; text-decoration: none;">${phone}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: 600; color: #64748b; font-size: 14px;">Email ID:</td>
            <td style="padding: 10px 0; color: #0f172a; font-weight: 600; font-size: 14px;">
              <a href="mailto:${email}" style="color: #0066FF; text-decoration: none;">${email}</a>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 style="font-size: 15px; font-weight: 700; color: #0066FF; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 10px 0;">
        Query:
      </h2>
      <div style="background-color: #f8fafd; border-left: 4px solid #0066FF; border-radius: 6px; padding: 16px; color: #1e293b; font-size: 14px; line-height: 1.6; margin-bottom: 24px; white-space: pre-wrap;">${query}</div>

      <!-- Footer Info -->
      <div style="margin-top: 24px; padding-top: 18px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; line-height: 1.5;">
        <p style="margin: 0 0 6px 0;"><strong>Submitted:</strong> ${submittedAt}</p>
        <p style="margin: 0; font-weight: 700; color: #0066FF; font-size: 13px;">DeClassico Website Enquiry</p>
      </div>
    </div>
  </div>
</body>
</html>`;

      const resend = new Resend(resendApiKey);

      const { data, error } = await resend.emails.send({
        from: fromSender,
        to: [recipient],
        replyTo: email,
        subject,
        text: textContent,
        html: htmlContent,
      });

      if (error) {
        console.error('[Resend API Error]:', error);
        return res.status(500).json({
          error: error.message || 'Resend was unable to process the email. Please try again.',
        });
      }

      console.log('[Resend Success]: Email accepted by Resend with ID:', data?.id);
      return res.status(200).json({
        success: true,
        id: data?.id,
        message: 'Enquiry successfully sent to officialdeclassico@gmail.com.',
      });
    } catch (err: unknown) {
      console.error('[Contact Form Exception]:', err);
      const errorMessage =
        err instanceof Error ? err.message : 'Unable to send email at this time.';
      return res.status(500).json({
        error: `Could not send email: ${errorMessage}`,
      });
    }
  });

  // Get Your Custom Bottle / Quote request email endpoint using Resend
  app.post('/api/quote', async (req, res) => {
    try {
      const {
        name,
        company,
        email,
        phone,
        bottleSize,
        quantity,
        bottleRequirement,
        requirementFor,
        location,
        additional,
      } = req.body;

      if (!name || !email || !phone) {
        return res.status(400).json({
          error: 'Please fill in all required fields (Name, Email ID, and Contact Number).',
        });
      }

      const resendApiKey = process.env.RESEND_API_KEY;
      if (!resendApiKey) {
        console.error('[Resend Error]: RESEND_API_KEY environment variable is not configured.');
        return res.status(500).json({
          error: 'Email service configuration error. Please ensure RESEND_API_KEY is configured.',
        });
      }

      const recipient = 'officialdeclassico@gmail.com';
      const subject = 'New Custom Bottle Quote Request – DeClassico';
      const fromSender = process.env.RESEND_FROM_EMAIL || 'DeClassico Website <onboarding@resend.dev>';

      const now = new Date();
      const submittedAt = now.toLocaleString('en-IN', {
        dateStyle: 'full',
        timeStyle: 'medium',
        timeZone: 'Asia/Kolkata',
      });

      const textContent = `You Have Received a New Quote Request

A customer has submitted a custom bottle requirement through the DeClassico website.

CUSTOMER DETAILS

Name: ${name}
Company / Restaurant Name: ${company || 'N/A'}
Email ID: ${email}
Contact Number: ${phone}

BOTTLE REQUIREMENTS

Bottle Size: ${bottleSize || 'Not specified'}
Quantity Required: ${quantity || 'Not specified'}
Bottle Requirement: ${bottleRequirement || 'Not specified'}
Requirement For: ${requirementFor || 'Not specified'}
Delivery Location: ${location || 'Not specified'}

ADDITIONAL REQUIREMENTS

${additional || 'None specified'}

Submitted:
${submittedAt}

DeClassico Website – Custom Bottle Quote Request`;

      const htmlContent = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Custom Bottle Quote Request – DeClassico</title>
</head>
<body style="margin: 0; padding: 24px 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
  <div style="max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 14px rgba(0,0,0,0.06);">
    <!-- Header banner -->
    <div style="background-color: #0066FF; padding: 28px 24px; text-align: left;">
      <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.02em;">
        You Have Received a New Quote Request
      </h1>
      <p style="color: #dbeafe; margin: 8px 0 0 0; font-size: 14px; line-height: 1.4;">
        A customer has submitted a custom bottle requirement through the DeClassico website.
      </p>
    </div>

    <!-- Main Content -->
    <div style="padding: 28px 24px;">
      <!-- Customer Details Section -->
      <h2 style="font-size: 14px; font-weight: 700; color: #0066FF; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 16px 0; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">
        CUSTOMER DETAILS
      </h2>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
        <tbody>
          <tr>
            <td style="padding: 9px 0; font-weight: 600; color: #64748b; width: 170px; font-size: 14px; border-bottom: 1px solid #f8fafc;">Name:</td>
            <td style="padding: 9px 0; color: #0f172a; font-weight: 700; font-size: 14px; border-bottom: 1px solid #f8fafc;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 9px 0; font-weight: 600; color: #64748b; font-size: 14px; border-bottom: 1px solid #f8fafc;">Company / Restaurant Name:</td>
            <td style="padding: 9px 0; color: #0f172a; font-weight: 600; font-size: 14px; border-bottom: 1px solid #f8fafc;">${company || '<span style="color:#94a3b8;">N/A</span>'}</td>
          </tr>
          <tr>
            <td style="padding: 9px 0; font-weight: 600; color: #64748b; font-size: 14px; border-bottom: 1px solid #f8fafc;">Email ID:</td>
            <td style="padding: 9px 0; color: #0f172a; font-weight: 600; font-size: 14px; border-bottom: 1px solid #f8fafc;">
              <a href="mailto:${email}" style="color: #0066FF; text-decoration: none;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 9px 0; font-weight: 600; color: #64748b; font-size: 14px; border-bottom: 1px solid #f8fafc;">Contact Number:</td>
            <td style="padding: 9px 0; color: #0f172a; font-weight: 600; font-size: 14px; border-bottom: 1px solid #f8fafc;">
              <a href="tel:${phone}" style="color: #0066FF; text-decoration: none;">${phone}</a>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Bottle Requirements Section -->
      <h2 style="font-size: 14px; font-weight: 700; color: #0066FF; text-transform: uppercase; letter-spacing: 0.08em; margin: 24px 0 16px 0; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">
        BOTTLE REQUIREMENTS
      </h2>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
        <tbody>
          <tr>
            <td style="padding: 9px 0; font-weight: 600; color: #64748b; width: 170px; font-size: 14px; border-bottom: 1px solid #f8fafc;">Bottle Size:</td>
            <td style="padding: 9px 0; color: #0f172a; font-weight: 600; font-size: 14px; border-bottom: 1px solid #f8fafc;">${bottleSize || '<span style="color:#94a3b8;">Not specified</span>'}</td>
          </tr>
          <tr>
            <td style="padding: 9px 0; font-weight: 600; color: #64748b; font-size: 14px; border-bottom: 1px solid #f8fafc;">Quantity Required:</td>
            <td style="padding: 9px 0; color: #0f172a; font-weight: 600; font-size: 14px; border-bottom: 1px solid #f8fafc;">${quantity || '<span style="color:#94a3b8;">Not specified</span>'}</td>
          </tr>
          <tr>
            <td style="padding: 9px 0; font-weight: 600; color: #64748b; font-size: 14px; border-bottom: 1px solid #f8fafc;">Bottle Requirement:</td>
            <td style="padding: 9px 0; color: #0f172a; font-weight: 600; font-size: 14px; border-bottom: 1px solid #f8fafc;">${bottleRequirement || '<span style="color:#94a3b8;">Not specified</span>'}</td>
          </tr>
          <tr>
            <td style="padding: 9px 0; font-weight: 600; color: #64748b; font-size: 14px; border-bottom: 1px solid #f8fafc;">Requirement For:</td>
            <td style="padding: 9px 0; color: #0f172a; font-weight: 600; font-size: 14px; border-bottom: 1px solid #f8fafc;">${requirementFor || '<span style="color:#94a3b8;">Not specified</span>'}</td>
          </tr>
          <tr>
            <td style="padding: 9px 0; font-weight: 600; color: #64748b; font-size: 14px; border-bottom: 1px solid #f8fafc;">Delivery Location:</td>
            <td style="padding: 9px 0; color: #0f172a; font-weight: 600; font-size: 14px; border-bottom: 1px solid #f8fafc;">${location || '<span style="color:#94a3b8;">Not specified</span>'}</td>
          </tr>
        </tbody>
      </table>

      <!-- Additional Requirements Section -->
      <h2 style="font-size: 14px; font-weight: 700; color: #0066FF; text-transform: uppercase; letter-spacing: 0.08em; margin: 24px 0 10px 0;">
        ADDITIONAL REQUIREMENTS
      </h2>
      <div style="background-color: #f8fafd; border-left: 4px solid #0066FF; border-radius: 6px; padding: 14px 16px; color: #1e293b; font-size: 14px; line-height: 1.6; margin-bottom: 24px; white-space: pre-wrap;">${additional || 'None specified'}</div>

      <!-- Footer Info -->
      <div style="margin-top: 24px; padding-top: 18px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; line-height: 1.5;">
        <p style="margin: 0 0 6px 0;"><strong>Submitted:</strong> ${submittedAt}</p>
        <p style="margin: 0; font-weight: 700; color: #0066FF; font-size: 13px;">DeClassico Website – Custom Bottle Quote Request</p>
      </div>
    </div>
  </div>
</body>
</html>`;

      const resend = new Resend(resendApiKey);

      const { data, error } = await resend.emails.send({
        from: fromSender,
        to: [recipient],
        replyTo: email,
        subject,
        text: textContent,
        html: htmlContent,
      });

      if (error) {
        console.error('[Resend Quote API Error]:', error);
        return res.status(500).json({
          error: error.message || 'Resend was unable to process the quote request. Please try again.',
        });
      }

      console.log('[Resend Success]: Quote request accepted by Resend with ID:', data?.id);
      return res.status(200).json({
        success: true,
        id: data?.id,
        message: 'Quote request successfully sent to officialdeclassico@gmail.com.',
      });
    } catch (err: unknown) {
      console.error('[Quote Form Exception]:', err);
      const errorMessage =
        err instanceof Error ? err.message : 'Unable to send quote request at this time.';
      return res.status(500).json({
        error: `Could not send quote request: ${errorMessage}`,
      });
    }
  });

  // Environment mode
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Server failed to start:', err);
});
