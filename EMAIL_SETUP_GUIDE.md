# Contact Form Email Setup Guide

This guide will help you configure the contact form to send emails successfully.

## Table of Contents
1. [Quick Setup (Gmail)](#quick-setup-gmail)
2. [Alternative Email Providers](#alternative-email-providers)
3. [Environment Variables Explained](#environment-variables-explained)
4. [Testing the Setup](#testing-the-setup)
5. [Troubleshooting](#troubleshooting)
6. [Production Deployment](#production-deployment)

---

## Quick Setup (Gmail)

### Step 1: Enable 2-Factor Authentication

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Click on **"2-Step Verification"**
3. Follow the setup wizard to enable 2FA (you'll need your phone)

### Step 2: Generate an App Password

1. Go to [App Passwords](https://myaccount.google.com/apppasswords)
   - Or: Google Account → Security → 2-Step Verification → App passwords
2. Select **"Mail"** as the app
3. Select **"Other"** as the device and name it "Finxbridge Website"
4. Click **"Generate"**
5. **Copy the 16-digit password** (you won't see it again)

### Step 3: Create Environment File

1. In your project root (`c:\Projects\finxWebsite\`), create a file named `.env.local`
2. Copy the following content and replace with your details:

```env
# SMTP Email Configuration for Gmail
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=xxxx-xxxx-xxxx-xxxx
CONTACT_EMAIL=info@finxbridge.com
```

**Replace:**
- `your-email@gmail.com` → Your actual Gmail address
- `xxxx-xxxx-xxxx-xxxx` → The 16-digit App Password from Step 2 (remove spaces)
- `info@finxbridge.com` → Email where you want to receive contact form submissions

### Step 4: Restart Development Server

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

✅ **Done!** Your contact form should now send emails.

---

## Alternative Email Providers

### Outlook / Hotmail / Office 365

```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
CONTACT_EMAIL=info@finxbridge.com
```

**Note:** For Office 365, you may need to use `smtp.office365.com`

### Yahoo Mail

```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@yahoo.com
SMTP_PASS=your-app-password
CONTACT_EMAIL=info@finxbridge.com
```

**Note:** Yahoo also requires an App Password. Generate one at [Yahoo Account Security](https://login.yahoo.com/account/security)

### Custom Domain / cPanel / Hosting Provider

```env
SMTP_HOST=mail.yourdomain.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=noreply@yourdomain.com
SMTP_PASS=your-password
CONTACT_EMAIL=info@finxbridge.com
```

**Note:** Check your hosting provider's documentation for exact SMTP settings.

### SendGrid (Recommended for Production)

1. Sign up at [SendGrid](https://sendgrid.com)
2. Create an API key
3. Use these settings:

```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
CONTACT_EMAIL=info@finxbridge.com
```

### Mailgun

```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=postmaster@your-domain.mailgun.org
SMTP_PASS=your-mailgun-password
CONTACT_EMAIL=info@finxbridge.com
```

---

## Environment Variables Explained

| Variable | Description | Example |
|----------|-------------|---------|
| `SMTP_HOST` | SMTP server address | `smtp.gmail.com` |
| `SMTP_PORT` | SMTP port (587 for TLS, 465 for SSL) | `587` |
| `SMTP_SECURE` | Use SSL? (`true` for port 465, `false` for 587) | `false` |
| `SMTP_USER` | Your email address or SMTP username | `your-email@gmail.com` |
| `SMTP_PASS` | App password or SMTP password | `xxxx-xxxx-xxxx-xxxx` |
| `CONTACT_EMAIL` | Where form submissions should be sent | `info@finxbridge.com` |

### Security Notes:

- ✅ `.env.local` is already in `.gitignore` - your credentials are safe
- ✅ Never commit `.env.local` to GitHub
- ✅ Use App Passwords instead of your main email password
- ✅ `.env.local.example` is safe to commit (no real credentials)

---

## Testing the Setup

### 1. Start Development Server

```bash
npm run dev
```

### 2. Open Contact Form

Navigate to: `http://localhost:3001/contact` or scroll to the contact section on the homepage

### 3. Fill Out Test Form

- **Name:** Test User
- **Email:** your-test-email@example.com
- **Company:** Test Company (optional)
- **Message:** This is a test message from the contact form

### 4. Submit and Check

**Success Indicators:**
- ✅ Green success message: "Thank you! We'll get back to you soon."
- ✅ Form fields reset to empty
- ✅ Email received at `CONTACT_EMAIL` address

**Error Indicators:**
- ❌ Red error box appears
- ❌ Check browser console (F12) for errors
- ❌ Check terminal for server errors

### 5. Verify Email Content

You should receive an email with:
- Subject: "New Contact Form Submission from Test User"
- Professional Finxbridge branding
- All form fields (name, email, company, message)
- Reply-to address set to sender's email
- Timestamp

---

## Troubleshooting

### Issue: "Failed to send message"

**Solution 1:** Check credentials
```bash
# Verify your .env.local has correct values
# Common mistakes:
# - Wrong email address
# - Wrong app password (copy/paste error)
# - Spaces in app password (remove them)
```

**Solution 2:** Check 2FA is enabled (Gmail)
```
Gmail requires 2-Factor Authentication to generate App Passwords
```

**Solution 3:** Restart development server
```bash
# Stop server: Ctrl+C
npm run dev
```

### Issue: "Authentication failed"

**Cause:** Wrong SMTP credentials

**Solution:**
1. Double-check `SMTP_USER` matches your email
2. Regenerate App Password and update `SMTP_PASS`
3. For Gmail: Ensure 2FA is enabled

### Issue: "Connection timeout"

**Cause:** Blocked port or wrong SMTP host

**Solution:**
1. Verify `SMTP_HOST` is correct
2. Try port `465` with `SMTP_SECURE=true`
3. Check firewall/antivirus settings
4. Some corporate networks block SMTP ports

### Issue: Email goes to spam

**Solution:**
1. Add your `SMTP_USER` email to your contacts
2. Mark test email as "Not Spam"
3. For production: Use a professional email service (SendGrid, Mailgun)
4. Set up SPF, DKIM, DMARC records for your domain

### Issue: "Cannot find module 'nodemailer'"

**Solution:**
```bash
npm install nodemailer @types/nodemailer
```

### Issue: Changes not reflecting

**Solution:**
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

### Check Server Logs

Look at your terminal where `npm run dev` is running for error messages:

```
Contact form error: Error: Invalid login: 535-5.7.8 Username and Password not accepted
```

This tells you exactly what went wrong.

---

## Production Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect repository to Vercel
3. Go to **Project Settings → Environment Variables**
4. Add all variables from `.env.local`:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_SECURE`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `CONTACT_EMAIL`
5. Redeploy the project

### Environment Variables in Vercel

```
Name: SMTP_HOST
Value: smtp.gmail.com

Name: SMTP_PORT
Value: 587

Name: SMTP_SECURE
Value: false

Name: SMTP_USER
Value: your-email@gmail.com

Name: SMTP_PASS
Value: your-app-password

Name: CONTACT_EMAIL
Value: info@finxbridge.com
```

### Production Best Practices

1. **Use Professional Email Service**
   - SendGrid (99 emails/day free)
   - Mailgun (100 emails/day free)
   - Amazon SES (cheapest for high volume)

2. **Rate Limiting**
   - Consider adding rate limiting to prevent spam
   - Use Vercel's built-in rate limiting

3. **Email Validation**
   - Already implemented in the API route
   - Client-side validation via HTML5

4. **Monitoring**
   - Set up error tracking (Sentry, LogRocket)
   - Monitor email delivery rates

5. **Security**
   - Never expose `.env.local` in repository
   - Rotate credentials periodically
   - Use environment-specific credentials

---

## Email Template Customization

The email template is in `app/api/contact/route.ts`. You can customize:

### Colors (Lines 50-55)
```typescript
background: linear-gradient(135deg, #144F5D 0%, #4A6572 100%);  // Header gradient
border-left: 3px solid #144F5D;  // Field borders
```

### Content (Lines 60-62)
```html
<h2>New Contact Form Submission</h2>
<p>Finxbridge Website</p>
```

### Footer (Lines 83-85)
```html
<p>This email was sent from the Finxbridge contact form</p>
<p>Received: ${new Date().toLocaleString()}</p>
```

---

## Testing Checklist

- [ ] `.env.local` file created with all 6 variables
- [ ] SMTP credentials are correct
- [ ] Development server restarted
- [ ] Contact form loads without errors
- [ ] Form validation works (try submitting empty form)
- [ ] Success message appears after submission
- [ ] Email received at `CONTACT_EMAIL`
- [ ] Reply-to address is sender's email
- [ ] Form resets after successful submission
- [ ] Error message appears if SMTP fails
- [ ] Test on mobile view
- [ ] Test all form fields (including optional company field)

---

## Quick Reference: Common SMTP Ports

| Port | Protocol | Usage |
|------|----------|-------|
| 587 | STARTTLS | ✅ **Recommended** - Modern, secure |
| 465 | SSL/TLS | Older standard, still widely supported |
| 25 | Plain | ❌ Often blocked, not secure |
| 2525 | Alternative | Backup if 587 is blocked |

---

## Support

If you encounter issues:

1. Check this guide's [Troubleshooting](#troubleshooting) section
2. Review terminal errors carefully
3. Test with a different email provider
4. Verify firewall/antivirus settings
5. Check browser console for client-side errors (F12)

**Common Error Messages:**

| Error | Cause | Solution |
|-------|-------|----------|
| `Invalid login` | Wrong credentials | Check SMTP_USER and SMTP_PASS |
| `Connection timeout` | Port blocked | Try port 465 or check firewall |
| `EAUTH` | Authentication failed | Regenerate app password |
| `Self signed certificate` | SSL issue | Set `SMTP_SECURE=false` |
| `Greeting never received` | Wrong SMTP host | Verify SMTP_HOST setting |

---

## File Structure

```
finxWebsite/
├── .env.local              # ← Your SMTP credentials (CREATE THIS)
├── .env.local.example      # ← Template file (safe to commit)
├── app/
│   └── api/
│       └── contact/
│           └── route.ts    # ← Backend API (already created)
├── components/
│   └── Contact.tsx         # ← Contact form (already updated)
└── EMAIL_SETUP_GUIDE.md    # ← This guide
```

---

## Next Steps

1. ✅ Create `.env.local` with your SMTP credentials
2. ✅ Restart development server
3. ✅ Test the contact form
4. ✅ Verify email delivery
5. ✅ Deploy to production with environment variables
6. ✅ Monitor form submissions

**Your contact form is production-ready!** 🚀
