import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    // Prevent emails during build time (Vercel sets NODE_ENV to production during build)
    const isVercelBuild = process.env.VERCEL_ENV === 'production' && process.env.CI === '1'

    const body = await request.json()
    const { name, email, company, message, phone, subject, source } = body

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields' },
        { status: 400 }
      )
    }

    // Additional validation for contact page
    if (source === 'contact-page') {
      if (!phone) {
        return NextResponse.json(
          { error: 'Phone number is required' },
          { status: 400 }
        )
      }
      if (!company) {
        return NextResponse.json(
          { error: 'Company name is required' },
          { status: 400 }
        )
      }
      // Phone number validation - must be exactly 10 digits
      const phoneRegex = /^[0-9]{10}$/
      if (!phoneRegex.test(phone)) {
        return NextResponse.json(
          { error: 'Please provide a valid 10-digit phone number' },
          { status: 400 }
        )
      }
    }

    // Email validation with length check to prevent ReDoS
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (typeof email !== 'string' || email.length > 254 || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    // Check if SMTP credentials are configured
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP credentials not configured')
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact us directly.' },
        { status: 503 }
      )
    }

    // Skip email sending during build time
    if (isVercelBuild) {
      console.log('Skipping email during build time')
      return NextResponse.json(
        { message: 'Build mode - email not sent' },
        { status: 200 }
      )
    }

    // Dynamic import to avoid webpack issues
    const { default: mailer } = await import('nodemailer')

    // Create transporter
    const transporter = mailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email content for you (the recipient)
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: source === 'contact-page'
        ? (subject ? `[Contact Page] ${subject} - ${name}` : `[Contact Page] New Inquiry from ${name}`)
        : `[Homepage] Contact Form - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #144F5D 0%, #4A6572 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #144F5D; margin-bottom: 5px; }
              .value { background: white; padding: 12px; border-radius: 4px; border-left: 3px solid #144F5D; }
              .footer { margin-top: 20px; padding-top: 20px; border-top: 2px solid #144F5D; color: #666; font-size: 12px; text-align: center; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>New Contact Form Submission</h2>
                <p>Finxbridge Website</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Name:</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>
                ${phone ? `
                <div class="field">
                  <div class="label">Phone:</div>
                  <div class="value">${phone}</div>
                </div>
                ` : ''}
                ${company ? `
                <div class="field">
                  <div class="label">Company:</div>
                  <div class="value">${company}</div>
                </div>
                ` : ''}
                ${subject ? `
                <div class="field">
                  <div class="label">Subject:</div>
                  <div class="value">${subject}</div>
                </div>
                ` : ''}
                <div class="field">
                  <div class="label">Message:</div>
                  <div class="value">${message.replace(/\n/g, '<br>')}</div>
                </div>
                <div class="footer">
                  <p>This email was sent from the Finxbridge contact form</p>
                  <p>Received: ${new Date().toLocaleString()}</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}
${company ? `Company: ${company}` : ''}
${subject ? `Subject: ${subject}` : ''}

Message:
${message}

---
This email was sent from the Finxbridge contact form
Received: ${new Date().toLocaleString()}
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Your message has been sent successfully! We will get back to you soon.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later or contact us directly via email.' },
      { status: 500 }
    )
  }
}
