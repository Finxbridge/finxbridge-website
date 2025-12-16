import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms & Conditions - Finxbridge | Legal Agreement',
  description: 'Review the terms and conditions governing the use of Finxbridge website and services. Legal agreements and user responsibilities.',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-slate to-primary-aqua text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Terms & Conditions
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto animate-slide-up">
              Please read these terms carefully before using our website
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <div className="bg-light p-6 rounded-xl mb-8">
              <p className="text-dark-light leading-relaxed mb-0">
                These Terms & Conditions govern your access to and use of the website{' '}
                <a href="https://www.finxbridge.com" className="text-primary hover:underline">www.finxbridge.com</a>{' '}
                (the "Website"), operated by <strong>Finxbridge LLP</strong> ("Finxbridge", "we", "us", or "our").
              </p>
              <p className="text-dark-light leading-relaxed mt-4 mb-0">
                By accessing or using this Website, you agree to comply with and be bound by these Terms & Conditions, along
                with our Privacy Policy, Disclaimer Policy, and any other policies or notices that may apply to specific sections
                of the Website.
              </p>
              <p className="text-dark font-semibold mt-4 mb-0">
                If you do not agree with these Terms, please do not use this Website.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">1</span>
                Definitions
              </h2>
              <div className="bg-light p-6 rounded-xl">
                <ul className="space-y-3 mb-0">
                  <li className="text-dark-light">
                    <strong className="text-dark">"Website"</strong> refers to www.finxbridge.com and all pages contained therein.
                  </li>
                  <li className="text-dark-light">
                    <strong className="text-dark">"User", "you", "your"</strong> refers to any visitor, client, partner, or entity accessing the Website.
                  </li>
                  <li className="text-dark-light">
                    <strong className="text-dark">"Finxbridge"</strong> refers to Finxbridge LLP, including its affiliates and permitted partners.
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">2</span>
                Use of the Website
              </h2>
              <p className="text-dark-light leading-relaxed mb-4">
                The content of this Website is provided for general informational and business purposes only.
              </p>
              <ul className="list-disc pl-6 text-dark-light space-y-2 mb-4">
                <li>Website content may be updated, modified, or removed without notice</li>
                <li>No guarantee is provided regarding accuracy, completeness, or suitability</li>
                <li>Use of any information on this Website is entirely at your own risk</li>
              </ul>
              <p className="text-dark-light leading-relaxed">
                You are responsible for ensuring that any information or services referenced meet your specific business, technical,
                or regulatory requirements.
              </p>
            </div>

            {/* Section 3 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">3</span>
                No Offer or Advice
              </h2>
              <p className="text-dark-light leading-relaxed mb-4">
                Nothing on this Website shall be construed as:
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                <ul className="list-disc pl-6 text-dark-light space-y-2 mb-0">
                  <li>An offer or solicitation to provide financial products</li>
                  <li>Financial, legal, investment, or regulatory advice</li>
                  <li>A commitment to provide services unless agreed in writing</li>
                </ul>
              </div>
              <p className="text-dark-light leading-relaxed mt-4">
                All fintech, platform, API, and systems-integration services are governed by separate written agreements.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">4</span>
                Intellectual Property Rights
              </h2>
              <p className="text-dark-light leading-relaxed mb-4">
                All content on this Website, including but not limited to:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-light p-4 rounded-xl">
                  <ul className="list-disc pl-6 text-dark-light space-y-1 mb-0">
                    <li>Text, documents, designs, layouts</li>
                    <li>Graphics and visual elements</li>
                    <li>Logos, trademarks, and branding</li>
                  </ul>
                </div>
                <div className="bg-light p-4 rounded-xl">
                  <ul className="list-disc pl-6 text-dark-light space-y-1 mb-0">
                    <li>Technical diagrams and descriptions</li>
                    <li>Software and code</li>
                    <li>All other materials</li>
                  </ul>
                </div>
              </div>
              <p className="text-dark-light leading-relaxed mb-4">
                is owned by or licensed to Finxbridge LLP and protected under applicable intellectual property laws.
              </p>
              <p className="text-dark font-semibold">
                Unauthorized reproduction, distribution, modification, or commercial use is strictly prohibited.
              </p>
            </div>

            {/* Section 5 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">5</span>
                Trademarks
              </h2>
              <p className="text-dark-light leading-relaxed mb-4">
                All trademarks displayed on the Website are the property of Finxbridge or their respective owners.
              </p>
              <p className="text-dark-light leading-relaxed">
                Nothing on this Website grants any license or right to use any trademark without prior written consent.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">6</span>
                Prohibited Use
              </h2>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-4">
                <p className="text-dark font-semibold mb-3">You must not:</p>
                <ul className="list-disc pl-6 text-dark-light space-y-2 mb-0">
                  <li>Use the Website for unlawful or fraudulent purposes</li>
                  <li>Attempt unauthorized access to systems or data</li>
                  <li>Introduce malicious code, bots, or scraping tools</li>
                  <li>Misrepresent your identity or affiliation</li>
                  <li>Copy or exploit Website content for commercial use</li>
                </ul>
              </div>
              <p className="text-dark font-semibold">
                Unauthorized use may result in legal action and/or criminal liability.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">7</span>
                Third-Party Links
              </h2>
              <p className="text-dark-light leading-relaxed mb-4">
                This Website may contain links to third-party websites for reference or convenience.
              </p>
              <div className="bg-light p-6 rounded-xl mb-4">
                <h3 className="text-xl font-bold text-dark mb-3">Finxbridge:</h3>
                <ul className="list-disc pl-6 text-dark-light space-y-2 mb-0">
                  <li>Does not control or endorse third-party websites</li>
                  <li>Is not responsible for third-party content or availability</li>
                  <li>Assumes no liability for any loss arising from third-party links</li>
                </ul>
              </div>
              <p className="text-dark font-semibold">
                Access to such websites is at your own risk.
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">8</span>
                Limitation of Liability
              </h2>
              <p className="text-dark-light leading-relaxed mb-4">
                To the maximum extent permitted by law, Finxbridge shall not be liable for:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-light p-4 rounded-xl">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <div>
                      <p className="text-dark-light mb-0">Any direct, indirect, or consequential loss or damage</p>
                    </div>
                  </div>
                </div>
                <div className="bg-light p-4 rounded-xl">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <div>
                      <p className="text-dark-light mb-0">Loss of data, profits, or business opportunity</p>
                    </div>
                  </div>
                </div>
                <div className="bg-light p-4 rounded-xl">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <div>
                      <p className="text-dark-light mb-0">Errors, omissions, or inaccuracies in Website content</p>
                    </div>
                  </div>
                </div>
                <div className="bg-light p-4 rounded-xl">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <div>
                      <p className="text-dark-light mb-0">Temporary unavailability or technical disruptions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 9 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">9</span>
                Website Availability
              </h2>
              <p className="text-dark-light leading-relaxed mb-4">
                While we make reasonable efforts to maintain availability, Finxbridge does not guarantee uninterrupted or error-free
                operation of the Website.
              </p>
              <p className="text-dark-light leading-relaxed mb-3">
                We shall not be liable for downtime due to:
              </p>
              <ul className="list-disc pl-6 text-dark-light space-y-2">
                <li>Technical or maintenance issues</li>
                <li>Network failures</li>
                <li>Force majeure events</li>
              </ul>
            </div>

            {/* Section 10 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">10</span>
                Linking Policy
              </h2>
              <p className="text-dark-light leading-relaxed">
                You may not create a link to this Website from another website or document without prior written consent from Finxbridge.
              </p>
            </div>

            {/* Section 11 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">11</span>
                Governing Law & Jurisdiction
              </h2>
              <div className="bg-light p-6 rounded-xl">
                <p className="text-dark-light leading-relaxed mb-4">
                  These Terms & Conditions shall be governed by and interpreted in accordance with the <strong className="text-dark">laws of India</strong>.
                </p>
                <p className="text-dark-light leading-relaxed mb-0">
                  Any disputes arising out of or in connection with use of this Website shall be subject to the exclusive jurisdiction
                  of courts in India.
                </p>
              </div>
            </div>

            {/* Section 12 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">12</span>
                Changes to Terms
              </h2>
              <p className="text-dark-light leading-relaxed mb-4">
                Finxbridge reserves the right to modify these Terms & Conditions at any time without prior notice.
              </p>
              <p className="text-dark font-semibold">
                Continued use of the Website constitutes acceptance of the updated Terms.
              </p>
            </div>

            {/* Section 13 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">13</span>
                Contact Information
              </h2>
              <p className="text-dark-light leading-relaxed mb-4">
                For questions regarding these Terms & Conditions, please contact:
              </p>
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl">
                <p className="text-dark-light mb-0">
                  <strong className="text-dark">Email:</strong> info@finxbridge.com
                </p>
              </div>
            </div>

            {/* Acceptance Notice */}
            <div className="bg-primary/5 border-2 border-primary rounded-xl p-8 text-center">
              <svg className="w-16 h-16 text-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl font-bold text-dark mb-3">Acceptance of Terms</h3>
              <p className="text-dark-light leading-relaxed max-w-2xl mx-auto">
                By using this Website, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary via-primary-slate to-primary-aqua text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8">
            Explore our fintech solutions and see how we can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-light transition-colors inline-block"
            >
              Contact Us
            </Link>
            <Link
              href="/services"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-block"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
