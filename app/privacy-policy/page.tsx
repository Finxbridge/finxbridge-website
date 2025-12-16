import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy - Finxbridge | Data Protection & Privacy',
  description: 'Learn how Finxbridge collects, uses, and protects your personal information. Our privacy policy outlines our commitment to data security and transparency.',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-slate to-primary-aqua text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Privacy Policy
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto animate-slide-up">
              Your privacy and data security are our top priorities
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-light p-6 rounded-xl mb-8">
              <p className="text-dark-light leading-relaxed mb-0">
                This Privacy Policy describes how <strong>Finxbridge LLP</strong> (referred to as "Finxbridge", "we", "us", or "our")
                collects, uses, stores, and discloses personal information when you visit our website{' '}
                <a href="https://www.finxbridge.com" className="text-primary hover:underline">www.finxbridge.com</a>{' '}
                (the "Site") or interact with our products, platforms, APIs, services, or communications.
              </p>
              <p className="text-dark-light leading-relaxed mt-4 mb-0">
                Finxbridge operates in the areas of fintech platforms, digital lending enablement, co-lending technology,
                data analytics, compliance solutions, API integrations, and enterprise technology services.
              </p>
            </div>
            {/* Section 1 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">1</span>
                Collecting Personal Information
              </h2>
              <p className="text-dark-light leading-relaxed">
                When you visit or interact with our Site or services, we collect certain information related to your device,
                usage, and business interaction with Finxbridge. In this Privacy Policy, <strong>"Personal Information"</strong> refers
                to any information that identifies or can reasonably be linked to an individual.
              </p>
            </div>
            {/* Section 2 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-6 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">2</span>
                Categories of Personal Information We Collect
              </h2>
              {/* Subsection A */}
              <div className="bg-light p-6 rounded-xl mb-6">
                <h3 className="text-2xl font-bold text-dark mb-4">A. Device & Usage Information</h3>
                <h4 className="text-lg font-semibold text-dark mb-3">Examples of Personal Information Collected</h4>
                <ul className="list-disc pl-6 mb-4 text-dark-light space-y-1">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Device type, operating system</li>
                  <li>Time zone and location (approximate)</li>
                  <li>Cookies and session data</li>
                  <li>Pages visited, links clicked, referral URLs</li>
                  <li>Interaction logs and access timestamps</li>
                </ul>
                <h4 className="text-lg font-semibold text-dark mb-3">Purpose of Collection</h4>
                <ul className="list-disc pl-6 mb-4 text-dark-light space-y-1">
                  <li>To operate, secure, and optimize our website</li>
                  <li>To analyze site traffic and improve user experience</li>
                  <li>To monitor performance, security, and fraud prevention</li>
                </ul>
                <h4 className="text-lg font-semibold text-dark mb-3">Source of Collection</h4>
                <p className="text-dark-light mb-4">
                  Automatically collected through cookies, log files, analytics tools, and similar technologies when you access the Site
                </p>
                <h4 className="text-lg font-semibold text-dark mb-3">Disclosure for Business Purpose</h4>
                <p className="text-dark-light mb-0">
                  Shared with trusted analytics, cloud, and security service providers
                </p>
              </div>
              {/* Subsection B */}
              <div className="bg-light p-6 rounded-xl mb-6">
                <h3 className="text-2xl font-bold text-dark mb-4">B. Business & Contact Information</h3>
                <h4 className="text-lg font-semibold text-dark mb-3">Examples of Personal Information Collected</h4>
                <ul className="list-disc pl-6 mb-4 text-dark-light space-y-1">
                  <li>Name</li>
                  <li>Company name</li>
                  <li>Business email address</li>
                  <li>Phone number & OTP</li>
                  <li>Designation</li>
                  <li>Organization details</li>
                </ul>
                <h4 className="text-lg font-semibold text-dark mb-3">Purpose of Collection</h4>
                <ul className="list-disc pl-6 mb-4 text-dark-light space-y-1">
                  <li>To respond to enquiries, demos, proposals, and partnership discussions</li>
                  <li>To communicate about Finxbridge services, products, or events</li>
                  <li>To manage client, vendor, and partner relationships</li>
                </ul>
                <h4 className="text-lg font-semibold text-dark mb-3">Source of Collection</h4>
                <p className="text-dark-light mb-4">
                  Directly collected from you via website forms, emails, calls, or meetings
                </p>
                <h4 className="text-lg font-semibold text-dark mb-3">Disclosure for Business Purpose</h4>
                <p className="text-dark-light mb-0">
                  Shared internally and with authorized service providers strictly on a need-to-know basis
                </p>
              </div>
              {/* Subsection C */}
              <div className="bg-light p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-dark mb-4">C. Client, Platform & Integration Information</h3>
                <h4 className="text-lg font-semibold text-dark mb-3">Examples of Personal Information Collected</h4>
                <ul className="list-disc pl-6 mb-4 text-dark-light space-y-1">
                  <li>API access logs</li>
                  <li>Platform usage metadata</li>
                  <li>Technical identifiers</li>
                  <li>Configuration and integration details</li>
                  <li>Audit and compliance logs</li>
                </ul>
                <h4 className="text-lg font-semibold text-dark mb-3">Purpose of Collection</h4>
                <ul className="list-disc pl-6 mb-4 text-dark-light space-y-1">
                  <li>To deliver fintech platforms, APIs, dashboards, analytics, and integrations</li>
                  <li>To ensure regulatory compliance, security monitoring, and audit readiness</li>
                  <li>To improve service reliability and performance</li>
                </ul>
                <h4 className="text-lg font-semibold text-dark mb-3">Source of Collection</h4>
                <p className="text-dark-light mb-4">
                  Generated through use of Finxbridge platforms and systems
                </p>
                <h4 className="text-lg font-semibold text-dark mb-3">Disclosure for Business Purpose</h4>
                <p className="text-dark-light mb-0">
                  Shared with regulated financial institutions, auditors, regulators, and infrastructure partners as required by law or contract
                </p>
              </div>
            </div>
            {/* Section 3 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">3</span>
                Sharing of Personal Information
              </h2>
              <p className="text-dark-light leading-relaxed mb-3">
                We share personal information only where necessary and lawful, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-dark-light space-y-2">
                <li>With cloud infrastructure, analytics, monitoring, and security providers</li>
                <li>With banks, NBFCs, regulated entities, and partners for service delivery</li>
                <li>To comply with applicable laws, RBI guidelines, court orders, or regulatory requirements</li>
                <li>To protect the rights, property, security, and integrity of Finxbridge and its stakeholders</li>
              </ul>
              <p className="text-dark font-semibold">
                We do not sell personal data.
              </p>
            </div>
            {/* Section 4 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">4</span>
                Analytics & Communications
              </h2>
              <p className="text-dark-light leading-relaxed mb-3">
                We use analytics tools (such as Google Analytics or equivalent) to understand how visitors interact with our Site and services.
              </p>
              <ul className="list-disc pl-6 text-dark-light space-y-2">
                <li>These tools may collect IP address, usage patterns, and browser data</li>
                <li>You can opt out of Google Analytics using tools provided by Google</li>
                <li>Communications may include service updates, regulatory notices, or business communications</li>
              </ul>
            </div>
            {/* Section 5 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">5</span>
                Cookies & Tracking Technologies
              </h2>
              <p className="text-dark-light leading-relaxed mb-4">
                Cookies are small data files stored on your device to enhance website functionality and performance.
              </p>

              <div className="bg-light p-6 rounded-xl mb-4">
                <h3 className="text-xl font-bold text-dark mb-3">Types of Cookies We Use</h3>
                <ul className="list-disc pl-6 text-dark-light space-y-2">
                  <li><strong>Functional Cookies</strong> – essential for site operation</li>
                  <li><strong>Performance & Analytics Cookies</strong> – to understand usage trends</li>
                  <li><strong>Security Cookies</strong> – to protect against unauthorized access</li>
                </ul>
              </div>
              <p className="text-dark-light mb-3">Cookies help us:</p>
              <ul className="list-disc pl-6 mb-4 text-dark-light space-y-1">
                <li>Maintain session integrity</li>
                <li>Improve website performance</li>
                <li>Understand visitor behaviour</li>
              </ul>

              <p className="text-dark-light">
                You may control cookies through your browser settings. Disabling cookies may affect certain site features.
              </p>
            </div>
            {/* Section 6 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">6</span>
                Data Retention
              </h2>
              <p className="text-dark-light leading-relaxed mb-3">
                We retain personal information only for as long as necessary:
              </p>
              <ul className="list-disc pl-6 text-dark-light space-y-2">
                <li>To fulfill business and contractual obligations</li>
                <li>To comply with regulatory and legal requirements</li>
                <li>For audit, security, and dispute-resolution purposes</li>
              </ul>
            </div>
            {/* Section 7 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">7</span>
                Data Security
              </h2>
              <p className="text-dark-light leading-relaxed mb-3">
                Finxbridge implements industry-standard security practices, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-dark-light space-y-2">
                <li>Access controls</li>
                <li>Encryption</li>
                <li>Secure cloud infrastructure</li>
                <li>Audit logging</li>
                <li>Periodic security assessments</li>
              </ul>
              <p className="text-dark-light">
                While no system is completely secure, we continuously improve our safeguards.
              </p>
            </div>
            {/* Section 8 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">8</span>
                Do Not Track
              </h2>
              <p className="text-dark-light leading-relaxed">
                Currently, there is no uniform standard for responding to "Do Not Track" signals. Accordingly, our data practices
                do not change based on such signals.
              </p>
            </div>
            {/* Section 9 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">9</span>
                Changes to This Privacy Policy
              </h2>
              <p className="text-dark-light leading-relaxed mb-3">
                We may update this Privacy Policy periodically to reflect:
              </p>
              <ul className="list-disc pl-6 mb-4 text-dark-light space-y-2">
                <li>Changes in services</li>
                <li>Legal or regulatory updates</li>
                <li>Operational improvements</li>
              </ul>
              <p className="text-dark-light">
                The updated version will be posted on this page with a revised "Last Updated" date.
              </p>
            </div>
            {/* Section 10 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">10</span>
                Contact Information
              </h2>
              <p className="text-dark-light leading-relaxed mb-4">
                If you have questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us at:
              </p>
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl">
                <p className="text-dark-light mb-0">
                  <strong className="text-dark">Email:</strong> info@finxbridge.com
                </p>
              </div>
            </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary via-primary-slate to-primary-aqua text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Have Questions About Our Privacy Policy?</h2>
          <p className="text-xl text-white/90 mb-8">
            We're here to help. Reach out to us for any privacy-related queries.
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-light transition-colors inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
}
