import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    console.log('=== EMAIL TEST START ===')

    // Check environment variables
    const config = {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE,
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS ? 'SET' : 'NOT SET',
      contact: process.env.CONTACT_EMAIL
    }

    console.log('Environment config:', config)

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return NextResponse.json(
        {
          error: 'SMTP credentials not configured',
          config: config
        },
        { status: 500 }
      )
    }

    // Dynamic import
    const { default: nodemailer } = await import('nodemailer')

    // Create transporter
    console.log('Creating transporter...')
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Verify connection
    console.log('Verifying SMTP connection...')
    await transporter.verify()
    console.log('SMTP connection verified!')

    // Send test email
    console.log('Sending test email...')
    const info = await transporter.sendMail({
      from: `"Finxbridge Test" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      subject: 'Test Email from Finxbridge',
      html: `
        <h2>Test Email</h2>
        <p>This is a test email from your Finxbridge contact form.</p>
        <p>If you're seeing this, your email configuration is working!</p>
        <p>Sent at: ${new Date().toLocaleString()}</p>
      `,
      text: `Test Email\n\nThis is a test email from your Finxbridge contact form.\nIf you're seeing this, your email configuration is working!\n\nSent at: ${new Date().toLocaleString()}`
    })

    console.log('Email sent successfully!')
    console.log('Message ID:', info.messageId)

    return NextResponse.json({
      success: true,
      message: 'Test email sent successfully!',
      messageId: info.messageId,
      sentTo: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      config: config
    })

  } catch (error) {
    console.error('Email test failed:', error)
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'Unknown error',
        details: error
      },
      { status: 500 }
    )
  }
}
