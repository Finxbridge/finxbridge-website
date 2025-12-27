import { Metadata } from 'next'
import Link from 'next/link'
import { loadContent } from '@/lib/content'

interface CookiePolicyContent {
  metadata: { title: string; description: string };
  hero: { title: string; subtitle: string };
  intro: { paragraphs: string[] };
  sections: Array<{
    number: string;
    title: string;
    content?: string;
    characteristics?: string[];
    cookieTypes?: Array<{
      name: string;
      icon: string;
      description: string;
      examples: string[];
    }>;
    services?: Array<{ name: string; purpose: string }>;
    options?: Array<{ method: string; description: string }>;
    warning?: string;
    browsers?: Array<{ name: string; path: string }>;
    note?: string;
    contact?: { email: string };
  }>;
  privacyNotice: { title: string; content: string };
  cta: {
    title: string;
    description: string;
    button: { text: string; href: string };
  };
}

export const metadata: Metadata = {
  title: 'Cookie Policy - Finxbridge | Cookie Usage & Management',
  description: 'Learn about how Finxbridge uses cookies and similar technologies on our website. Understand what cookies we use and how to manage your preferences.',
}

export default async function CookiePolicyPage() {
  const legalContent = await loadContent<{ cookiePolicy: CookiePolicyContent }>('legal.json')
  const content = legalContent.cookiePolicy

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-slate to-primary-aqua text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              {content.hero.title}
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto animate-slide-up">
              {content.hero.subtitle}
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
                {content.intro.paragraphs[0]}
              </p>
              <p className="text-dark-light leading-relaxed mt-4 mb-0">
                {content.intro.paragraphs[1]}
              </p>
            </div>

            {/* Section 1 - What Are Cookies? */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">{content.sections[0].number}</span>
                {content.sections[0].title}
              </h2>
              <p className="text-dark-light leading-relaxed mb-4">
                {content.sections[0].content}
              </p>
              <div className="bg-light p-6 rounded-xl">
                <h3 className="text-xl font-bold text-dark mb-3">Key Characteristics of Cookies:</h3>
                <ul className="list-disc pl-6 text-dark-light space-y-2 mb-0">
                  {content.sections[0].characteristics!.map((char, index) => (
                    <li key={index}>{char}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Section 2 - Types of Cookies We Use */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-6 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">{content.sections[1].number}</span>
                {content.sections[1].title}
              </h2>

              {/* Strictly Necessary Cookies */}
              <div className="bg-light p-6 rounded-xl mb-6">
                <div className="flex items-start mb-3">
                  <svg className="w-8 h-8 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div>
                    <h3 className="text-2xl font-bold text-dark mb-2">{content.sections[1].cookieTypes![0].name}</h3>
                    <p className="text-dark-light mb-3">
                      {content.sections[1].cookieTypes![0].description}
                    </p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-sm text-dark font-semibold mb-2">Examples:</p>
                      <ul className="list-disc pl-6 text-dark-light text-sm space-y-1 mb-0">
                        {content.sections[1].cookieTypes![0].examples.map((example, index) => (
                          <li key={index}>{example}</li>
                        ))}
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
                    <h3 className="text-2xl font-bold text-dark mb-2">{content.sections[1].cookieTypes![1].name}</h3>
                    <p className="text-dark-light mb-3">
                      {content.sections[1].cookieTypes![1].description}
                    </p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-sm text-dark font-semibold mb-2">Examples:</p>
                      <ul className="list-disc pl-6 text-dark-light text-sm space-y-1 mb-0">
                        {content.sections[1].cookieTypes![1].examples.map((example, index) => (
                          <li key={index}>{example}</li>
                        ))}
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
                    <h3 className="text-2xl font-bold text-dark mb-2">{content.sections[1].cookieTypes![2].name}</h3>
                    <p className="text-dark-light mb-3">
                      {content.sections[1].cookieTypes![2].description}
                    </p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-sm text-dark font-semibold mb-2">Examples:</p>
                      <ul className="list-disc pl-6 text-dark-light text-sm space-y-1 mb-0">
                        {content.sections[1].cookieTypes![2].examples.map((example, index) => (
                          <li key={index}>{example}</li>
                        ))}
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
                    <h3 className="text-2xl font-bold text-dark mb-2">{content.sections[1].cookieTypes![3].name}</h3>
                    <p className="text-dark-light mb-3">
                      {content.sections[1].cookieTypes![3].description}
                    </p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-sm text-dark font-semibold mb-2">Examples:</p>
                      <ul className="list-disc pl-6 text-dark-light text-sm space-y-1 mb-0">
                        {content.sections[1].cookieTypes![3].examples.map((example, index) => (
                          <li key={index}>{example}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 - Third-Party Cookies */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">{content.sections[2].number}</span>
                {content.sections[2].title}
              </h2>
              <p className="text-dark-light leading-relaxed mb-4">
                {content.sections[2].content}
              </p>
              <div className="bg-light p-6 rounded-xl">
                <h3 className="text-xl font-bold text-dark mb-3">Common Third-Party Services:</h3>
                <ul className="list-disc pl-6 text-dark-light space-y-2 mb-0">
                  {content.sections[2].services!.map((service, index) => (
                    <li key={index}><strong>{service.name}:</strong> {service.purpose}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Section 4 - How to Manage Cookies */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">{content.sections[3].number}</span>
                {content.sections[3].title}
              </h2>
              <p className="text-dark-light leading-relaxed mb-4">
                {content.sections[3].content}
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {content.sections[3].options!.map((option, index) => (
                  <div key={index} className="bg-light p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-dark mb-3 flex items-center">
                      <svg className="w-6 h-6 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {index === 0 ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        )}
                      </svg>
                      {option.method}
                    </h3>
                    <p className="text-dark-light text-sm">
                      {option.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                <p className="text-dark font-semibold mb-2">Please Note:</p>
                <p className="text-dark-light mb-0">
                  {content.sections[3].warning}
                </p>
              </div>
            </div>

            {/* Section 5 - Browser-Specific Cookie Management */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">{content.sections[4].number}</span>
                {content.sections[4].title}
              </h2>

              <div className="space-y-4">
                {content.sections[4].browsers!.map((browser, index) => (
                  <div key={index} className="bg-light p-5 rounded-xl">
                    <h4 className="font-bold text-dark mb-2 flex items-center">
                      <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.667c5.155 0 9.333 4.178 9.333 9.333s-4.178 9.333-9.333 9.333-9.333-4.178-9.333-9.333S6.845 2.667 12 2.667z"/>
                      </svg>
                      {browser.name}
                    </h4>
                    <p className="text-dark-light text-sm">
                      {browser.path}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 6 - Updates to This Cookie Policy */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">{content.sections[5].number}</span>
                {content.sections[5].title}
              </h2>
              <p className="text-dark-light leading-relaxed mb-4">
                {content.sections[5].content}
              </p>
              <p className="text-dark-light leading-relaxed">
                {content.sections[5].note}
              </p>
            </div>

            {/* Section 7 - Contact Us */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">{content.sections[6].number}</span>
                {content.sections[6].title}
              </h2>
              <p className="text-dark-light leading-relaxed mb-4">
                {content.sections[6].content}
              </p>
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl">
                <p className="text-dark-light mb-0">
                  <strong className="text-dark">Email:</strong> {content.sections[6].contact!.email}
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
                  <h3 className="text-xl font-bold text-dark mb-3">{content.privacyNotice.title}</h3>
                  <p className="text-dark-light leading-relaxed mb-0">
                    {content.privacyNotice.content}
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
          <h2 className="text-3xl font-bold mb-4">{content.cta.title}</h2>
          <p className="text-xl text-white/90 mb-8">
            {content.cta.description}
          </p>
          <Link
            href={content.cta.button.href}
            className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-light transition-colors inline-block"
          >
            {content.cta.button.text}
          </Link>
        </div>
      </section>
    </main>
  )
}
