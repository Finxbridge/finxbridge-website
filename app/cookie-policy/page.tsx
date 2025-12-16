import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cookie Policy - Finxbridge | Cookie Usage & Management',
  description: 'Learn about how Finxbridge uses cookies and similar technologies on our website. Understand what cookies we use and how to manage your preferences.',
}

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-slate to-primary-aqua text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Cookie Policy
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto animate-slide-up">
              Understanding how we use cookies to improve your experience
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
                This Cookie Policy explains how <strong>Finxbridge LLP</strong> ("Finxbridge", "we", "us", or "our") uses cookies
                and similar technologies when you visit our website{' '}
                <a href="https://www.finxbridge.com" className="text-primary hover:underline">www.finxbridge.com</a>{' '}
                (the "Website").
              </p>
              <p className="text-dark-light leading-relaxed mt-4 mb-0">
                This policy provides you with clear and comprehensive information about the cookies we use and the purposes for using them.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">1</span>
                What Are Cookies?
              </h2>
              <p className="text-dark-light leading-relaxed mb-4">
                Cookies are small text files that are placed on your device (computer, smartphone, tablet, etc.) when you visit a website.
                They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
              <div className="bg-light p-6 rounded-xl">
                <h3 className="text-xl font-bold text-dark mb-3">Key Characteristics of Cookies:</h3>
                <ul className="list-disc pl-6 text-dark-light space-y-2 mb-0">
                  <li>Store small amounts of data on your device</li>
                  <li>Help websites remember your preferences and actions</li>
                  <li>Improve your browsing experience</li>
                  <li>Enable websites to function properly</li>
                  <li>Provide analytics and performance data</li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-6 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">2</span>
                Types of Cookies We Use
              </h2>

              {/* Strictly Necessary Cookies */}
              <div className="bg-light p-6 rounded-xl mb-6">
                <div className="flex items-start mb-3">
                  <svg className="w-8 h-8 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div>
                    <h3 className="text-2xl font-bold text-dark mb-2">Strictly Necessary Cookies</h3>
                    <p className="text-dark-light mb-3">
                      These cookies are essential for the Website to function properly. They enable basic functions like page navigation,
                      access to secure areas, and form submissions.
                    </p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-sm text-dark font-semibold mb-2">Examples:</p>
                      <ul className="list-disc pl-6 text-dark-light text-sm space-y-1 mb-0">
                        <li>Session management cookies</li>
                        <li>Security and authentication cookies</li>
                        <li>Load balancing cookies</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Cookies */}
              <div className="bg-light p-6 rounded-xl mb-6">
                <div className="flex items-start mb-3">
                  <svg className="w-8 h-8 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <div>
                    <h3 className="text-2xl font-bold text-dark mb-2">Performance & Analytics Cookies</h3>
                    <p className="text-dark-light mb-3">
                      These cookies collect information about how visitors use our Website, such as which pages are visited most often
                      and whether error messages are received. This helps us improve the Website's performance.
                    </p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-sm text-dark font-semibold mb-2">Examples:</p>
                      <ul className="list-disc pl-6 text-dark-light text-sm space-y-1 mb-0">
                        <li>Google Analytics cookies</li>
                        <li>Page visit tracking cookies</li>
                        <li>Error tracking cookies</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Functional Cookies */}
              <div className="bg-light p-6 rounded-xl mb-6">
                <div className="flex items-start mb-3">
                  <svg className="w-8 h-8 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h3 className="text-2xl font-bold text-dark mb-2">Functional Cookies</h3>
                    <p className="text-dark-light mb-3">
                      These cookies enable the Website to remember choices you make (such as language preferences or region) and
                      provide enhanced, more personalized features.
                    </p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-sm text-dark font-semibold mb-2">Examples:</p>
                      <ul className="list-disc pl-6 text-dark-light text-sm space-y-1 mb-0">
                        <li>Language preference cookies</li>
                        <li>User interface customization cookies</li>
                        <li>Remember me functionality cookies</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Targeting Cookies */}
              <div className="bg-light p-6 rounded-xl">
                <div className="flex items-start mb-3">
                  <svg className="w-8 h-8 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                  </svg>
                  <div>
                    <h3 className="text-2xl font-bold text-dark mb-2">Targeting & Marketing Cookies</h3>
                    <p className="text-dark-light mb-3">
                      These cookies may be set through our site by our marketing partners. They may be used to build a profile of your
                      interests and show you relevant content on other sites.
                    </p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-sm text-dark font-semibold mb-2">Examples:</p>
                      <ul className="list-disc pl-6 text-dark-light text-sm space-y-1 mb-0">
                        <li>Remarketing cookies</li>
                        <li>Advertising network cookies</li>
                        <li>Social media cookies</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">3</span>
                Third-Party Cookies
              </h2>
              <p className="text-dark-light leading-relaxed mb-4">
                In addition to our own cookies, we may use various third-party cookies to report usage statistics and deliver
                advertising on and through the Website.
              </p>
              <div className="bg-light p-6 rounded-xl">
                <h3 className="text-xl font-bold text-dark mb-3">Common Third-Party Services:</h3>
                <ul className="list-disc pl-6 text-dark-light space-y-2 mb-0">
                  <li><strong>Google Analytics:</strong> For website traffic analysis and user behavior insights</li>
                  <li><strong>Social Media Platforms:</strong> For social sharing and engagement features</li>
                  <li><strong>Marketing Tools:</strong> For targeted advertising and remarketing campaigns</li>
                </ul>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">4</span>
                How to Manage Cookies
              </h2>
              <p className="text-dark-light leading-relaxed mb-4">
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting
                your preferences in your browser settings.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-light p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-dark mb-3 flex items-center">
                    <svg className="w-6 h-6 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                    Browser Settings
                  </h3>
                  <p className="text-dark-light text-sm">
                    Most browsers allow you to control cookies through their settings preferences. You can set your browser to
                    refuse cookies or delete certain cookies.
                  </p>
                </div>

                <div className="bg-light p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-dark mb-3 flex items-center">
                    <svg className="w-6 h-6 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Opt-Out Tools
                  </h3>
                  <p className="text-dark-light text-sm">
                    You can opt out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on or through
                    Google's Ads Settings.
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                <p className="text-dark font-semibold mb-2">Please Note:</p>
                <p className="text-dark-light mb-0">
                  If you choose to block or delete cookies, some features of the Website may not function properly, and your user
                  experience may be affected.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">5</span>
                Browser-Specific Cookie Management
              </h2>

              <div className="space-y-4">
                <div className="bg-light p-5 rounded-xl">
                  <h4 className="font-bold text-dark mb-2 flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.667c5.155 0 9.333 4.178 9.333 9.333s-4.178 9.333-9.333 9.333-9.333-4.178-9.333-9.333S6.845 2.667 12 2.667z"/>
                    </svg>
                    Google Chrome
                  </h4>
                  <p className="text-dark-light text-sm">
                    Settings → Privacy and Security → Cookies and other site data
                  </p>
                </div>

                <div className="bg-light p-5 rounded-xl">
                  <h4 className="font-bold text-dark mb-2 flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.667c5.155 0 9.333 4.178 9.333 9.333s-4.178 9.333-9.333 9.333-9.333-4.178-9.333-9.333S6.845 2.667 12 2.667z"/>
                    </svg>
                    Mozilla Firefox
                  </h4>
                  <p className="text-dark-light text-sm">
                    Options → Privacy & Security → Cookies and Site Data
                  </p>
                </div>

                <div className="bg-light p-5 rounded-xl">
                  <h4 className="font-bold text-dark mb-2 flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.667c5.155 0 9.333 4.178 9.333 9.333s-4.178 9.333-9.333 9.333-9.333-4.178-9.333-9.333S6.845 2.667 12 2.667z"/>
                    </svg>
                    Safari
                  </h4>
                  <p className="text-dark-light text-sm">
                    Preferences → Privacy → Manage Website Data
                  </p>
                </div>

                <div className="bg-light p-5 rounded-xl">
                  <h4 className="font-bold text-dark mb-2 flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.667c5.155 0 9.333 4.178 9.333 9.333s-4.178 9.333-9.333 9.333-9.333-4.178-9.333-9.333S6.845 2.667 12 2.667z"/>
                    </svg>
                    Microsoft Edge
                  </h4>
                  <p className="text-dark-light text-sm">
                    Settings → Cookies and site permissions → Manage and delete cookies
                  </p>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">6</span>
                Updates to This Cookie Policy
              </h2>
              <p className="text-dark-light leading-relaxed mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, operational,
                or regulatory reasons.
              </p>
              <p className="text-dark-light leading-relaxed">
                We encourage you to review this page periodically for the latest information on our cookie practices.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">7</span>
                Contact Us
              </h2>
              <p className="text-dark-light leading-relaxed mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl">
                <p className="text-dark-light mb-0">
                  <strong className="text-dark">Email:</strong> info@finxbridge.com
                </p>
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-8">
              <div className="flex items-start">
                <svg className="w-12 h-12 text-blue-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="text-xl font-bold text-dark mb-3">Your Privacy Matters</h3>
                  <p className="text-dark-light leading-relaxed mb-0">
                    At Finxbridge, we respect your privacy and are committed to transparency about how we use cookies and other
                    technologies. We use cookies to enhance your experience, analyze site usage, and assist in our marketing efforts.
                    You can manage your cookie preferences at any time through your browser settings.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary via-primary-slate to-primary-aqua text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Questions About Cookies?</h2>
          <p className="text-xl text-white/90 mb-8">
            We're here to help you understand how we use cookies and protect your privacy.
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
