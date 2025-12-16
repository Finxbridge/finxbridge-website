import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Disclaimer Policy - Finxbridge | Terms of Use',
  description: 'Important disclaimer and legal information about using Finxbridge services and website. Understand the limitations and proper use of our platform.',
}

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-slate to-primary-aqua text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Disclaimer Policy
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto animate-slide-up">
              Important information about using our services
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
                The information contained on this website{' '}
                <a href="https://www.finxbridge.com" className="text-primary hover:underline">www.finxbridge.com</a>{' '}
                is provided by <strong>Finxbridge LLP</strong> ("Finxbridge", "we", "us", or "our") for general informational purposes only.
              </p>
              <p className="text-dark-light leading-relaxed mt-4 mb-0">
                While we endeavor to keep the information accurate, current, and relevant, Finxbridge makes no representations or
                warranties of any kind, express or implied, regarding the completeness, accuracy, reliability, suitability, availability,
                or timeliness of the information, content, services, platforms, APIs, or related materials contained on this website.
              </p>
              <p className="text-dark font-semibold mt-4 mb-0">
                Any reliance you place on such information is strictly at your own risk.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-6">No Professional or Regulatory Advice</h2>

              <p className="text-dark-light leading-relaxed mb-4">
                Nothing on this website constitutes:
              </p>

              <div className="bg-light border-l-4 border-primary p-6 rounded-r-xl mb-4">
                <ul className="list-disc pl-6 text-dark-light space-y-2 mb-0">
                  <li>Financial advice</li>
                  <li>Legal advice</li>
                  <li>Investment advice</li>
                  <li>Credit, lending, or underwriting advice</li>
                  <li>Regulatory or compliance advice</li>
                </ul>
              </div>

              <p className="text-dark-light leading-relaxed">
                Finxbridge is a technology and systems-integration provider and does not directly offer consumer financial products
                or make credit decisions. All services are subject to separate contractual agreements.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-6">Limitation of Liability</h2>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-4">
                <p className="text-dark-light leading-relaxed mb-0">
                  <strong className="text-dark">Important:</strong> To the fullest extent permitted by applicable law, Finxbridge
                  shall not be liable for any loss or damage, including but not limited to:
                </p>
              </div>

              <ul className="list-disc pl-6 text-dark-light space-y-2 mb-4">
                <li>Indirect or consequential loss or damage</li>
                <li>Loss of data, business, revenue, or profits</li>
                <li>Business interruption</li>
                <li>System downtime or service disruption</li>
              </ul>

              <p className="text-dark-light leading-relaxed">
                arising out of, or in connection with, the use of this website or reliance on any information contained herein.
              </p>
            </div>

            {/* Section 3 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-6">Third-Party Links</h2>

              <p className="text-dark-light leading-relaxed mb-4">
                This website may contain links to third-party websites that are not under the control of Finxbridge.
              </p>

              <div className="bg-light p-6 rounded-xl">
                <h3 className="text-xl font-bold text-dark mb-3">Finxbridge:</h3>
                <ul className="list-disc pl-6 text-dark-light space-y-2 mb-0">
                  <li>Has no control over the nature, content, or availability of such websites</li>
                  <li>Does not endorse or recommend any third-party views, products, or services</li>
                  <li>Assumes no responsibility for third-party content or practices</li>
                </ul>
              </div>

              <p className="text-dark font-semibold mt-4">
                Access to third-party links is at your own discretion and risk.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-6">Website Availability</h2>

              <p className="text-dark-light leading-relaxed mb-4">
                While we take reasonable efforts to keep the website operational, Finxbridge does not guarantee uninterrupted availability.
              </p>

              <p className="text-dark-light leading-relaxed mb-3">
                We shall not be liable for temporary unavailability of the website due to:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-light p-4 rounded-xl">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-dark mb-1">Technical Issues</h4>
                      <p className="text-dark-light text-sm mb-0">System failures or bugs</p>
                    </div>
                  </div>
                </div>

                <div className="bg-light p-4 rounded-xl">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-dark mb-1">Maintenance Activities</h4>
                      <p className="text-dark-light text-sm mb-0">Scheduled updates</p>
                    </div>
                  </div>
                </div>

                <div className="bg-light p-4 rounded-xl">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-dark mb-1">System Upgrades</h4>
                      <p className="text-dark-light text-sm mb-0">Infrastructure improvements</p>
                    </div>
                  </div>
                </div>

                <div className="bg-light p-4 rounded-xl">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-dark mb-1">Force Majeure Events</h4>
                      <p className="text-dark-light text-sm mb-0">Beyond our control</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-6">Changes to Content</h2>

              <p className="text-dark-light leading-relaxed">
                Finxbridge reserves the right to modify, update, or remove website content at any time without prior notice.
              </p>
            </div>

            {/* Important Notice */}
            <div className="bg-primary/5 border-2 border-primary rounded-xl p-8 text-center">
              <svg className="w-16 h-16 text-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl font-bold text-dark mb-3">Important Notice</h3>
              <p className="text-dark-light leading-relaxed max-w-2xl mx-auto">
                By using this website, you acknowledge that you have read, understood, and agree to be bound by this Disclaimer Policy.
                If you do not agree with any part of this disclaimer, please do not use our website.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary via-primary-slate to-primary-aqua text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Questions About Our Services?</h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us to learn more about how Finxbridge can help your organization.
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-light transition-colors inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  )
}
