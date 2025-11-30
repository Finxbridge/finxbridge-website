// Email Configuration Test Script
require('dotenv').config({ path: '.env.local' })

console.log('\n=== EMAIL CONFIGURATION TEST ===\n')

// Check environment variables
console.log('1. Checking environment variables:')
console.log(`   SMTP_HOST: ${process.env.SMTP_HOST ? '✓ Set' : '✗ Missing'}`)
console.log(`   SMTP_PORT: ${process.env.SMTP_PORT ? '✓ Set' : '✗ Missing'}`)
console.log(`   SMTP_SECURE: ${process.env.SMTP_SECURE ? '✓ Set' : '✗ Missing'}`)
console.log(`   SMTP_USER: ${process.env.SMTP_USER ? '✓ Set' : '✗ Missing'}`)
console.log(`   SMTP_PASS: ${process.env.SMTP_PASS ? '✓ Set' : '✗ Missing'}`)
console.log(`   CONTACT_EMAIL: ${process.env.CONTACT_EMAIL ? '✓ Set' : '✗ Missing'}`)

console.log('\n2. Configuration values (sanitized):')
console.log(`   Host: ${process.env.SMTP_HOST}`)
console.log(`   Port: ${process.env.SMTP_PORT}`)
console.log(`   Secure: ${process.env.SMTP_SECURE}`)
console.log(`   User: ${process.env.SMTP_USER}`)
console.log(`   Pass: ${process.env.SMTP_PASS ? process.env.SMTP_PASS.substring(0, 4) + '****' : 'Not set'}`)
console.log(`   Contact: ${process.env.CONTACT_EMAIL}`)

console.log('\n3. Testing SMTP connection...\n')

const nodemailer = require('nodemailer').default || require('nodemailer')

const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  debug: true, // Enable debug output
  logger: true // Log to console
})

// Verify connection
transporter.verify(function (error, success) {
  if (error) {
    console.error('❌ SMTP Connection FAILED:')
    console.error('   Error:', error.message)
    console.error('\nCommon fixes:')
    console.error('   - Check SMTP_USER is correct email address')
    console.error('   - Verify SMTP_PASS is App Password (not regular password)')
    console.error('   - For Gmail: Enable 2FA and generate App Password')
    console.error('   - Check SMTP_HOST and SMTP_PORT are correct')
    console.error('   - Restart development server after changing .env.local')
  } else {
    console.log('✅ SMTP Connection SUCCESSFUL!')
    console.log('   Server is ready to send emails\n')

    // Send test email
    console.log('4. Sending test email...\n')

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      subject: 'Test Email from Finxbridge Contact Form',
      html: `
        <h2>Test Email</h2>
        <p>If you're seeing this, your email configuration is working correctly!</p>
        <p>Sent at: ${new Date().toLocaleString()}</p>
      `,
      text: `Test Email\n\nIf you're seeing this, your email configuration is working correctly!\n\nSent at: ${new Date().toLocaleString()}`
    }

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('❌ Test email FAILED:')
        console.error('   Error:', error.message)
      } else {
        console.log('✅ Test email SENT successfully!')
        console.log('   Message ID:', info.messageId)
        console.log('   Preview URL:', nodemailer.getTestMessageUrl(info))
        console.log('\n   Check your inbox:', process.env.CONTACT_EMAIL || process.env.SMTP_USER)
      }

      console.log('\n=== TEST COMPLETE ===\n')
      process.exit(error ? 1 : 0)
    })
  }
})
