import { Metadata } from 'next'
import Link from 'next/link'
import { loadContent } from '@/lib/content'

interface DisclaimerContent {
  metadata: { title: string; description: string };
  hero: { title: string; subtitle: string };
  intro: { paragraphs: string[]; warning: string };
  sections: Array<{
    title: string;
    content: string;
    items?: string[];
    note?: string;
    warning?: string;
    unavailabilityReasons?: Array<{ title: string; description: string }>;
  }>;
  importantNotice: { title: string; content: string };
  cta: {
    title: string;
    description: string;
    button: { text: string; href: string };
  };
}

export const metadata: Metadata = {
  title: 'Disclaimer Policy - Finxbridge | Terms of Use',
  description: 'Important disclaimer and legal information about using Finxbridge services and website. Understand the limitations and proper use of our platform.',
}

export default async function DisclaimerPage() {
  const legalContent = await loadContent<{ disclaimer: DisclaimerContent }>('legal.json')
  const content = legalContent.disclaimer

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
              <p className="text-dark font-semibold mt-4 mb-0">
                {content.intro.warning}
              </p>
            </div>

            {/* Section 1 - No Professional or Regulatory Advice */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-6">{content.sections[0].title}</h2>

              <p className="text-dark-light leading-relaxed mb-4">
                {content.sections[0].content}
              </p>

              <div className="bg-light border-l-4 border-primary p-6 rounded-r-xl mb-4">
                <ul className="list-disc pl-6 text-dark-light space-y-2 mb-0">
                  {content.sections[0].items!.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <p className="text-dark-light leading-relaxed">
                {content.sections[0].note}
              </p>
            </div>

            {/* Section 2 - Limitation of Liability */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-6">{content.sections[1].title}</h2>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-4">
                <p className="text-dark-light leading-relaxed mb-0">
                  <strong className="text-dark">Important:</strong> {content.sections[1].content}
                </p>
              </div>

              <ul className="list-disc pl-6 text-dark-light space-y-2 mb-4">
                {content.sections[1].items!.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <p className="text-dark-light leading-relaxed">
                {content.sections[1].note}
              </p>
            </div>

            {/* Section 3 - Third-Party Links */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-6">{content.sections[2].title}</h2>

              <p className="text-dark-light leading-relaxed mb-4">
                {content.sections[2].content}
              </p>

              <div className="bg-light p-6 rounded-xl">
                <h3 className="text-xl font-bold text-dark mb-3">Finxbridge:</h3>
                <ul className="list-disc pl-6 text-dark-light space-y-2 mb-0">
                  {content.sections[2].items!.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <p className="text-dark font-semibold mt-4">
                {content.sections[2].warning}
              </p>
            </div>

            {/* Section 4 - Website Availability */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-6">{content.sections[3].title}</h2>

              <p className="text-dark-light leading-relaxed mb-4">
                {content.sections[3].content}
              </p>

              <p className="text-dark-light leading-relaxed mb-3">
                We shall not be liable for temporary unavailability of the website due to:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {content.sections[3].unavailabilityReasons!.map((reason, index) => (
                  <div key={index} className="bg-light p-4 rounded-xl">
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {index === 0 && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        )}
                        {index === 1 && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        )}
                        {index === 1 && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        )}
                        {index === 2 && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        )}
                        {index === 3 && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        )}
                      </svg>
                      <div>
                        <h4 className="font-semibold text-dark mb-1">{reason.title}</h4>
                        <p className="text-dark-light text-sm mb-0">{reason.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 5 - Changes to Content */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-6">{content.sections[4].title}</h2>

              <p className="text-dark-light leading-relaxed">
                {content.sections[4].content}
              </p>
            </div>

            {/* Important Notice */}
            <div className="bg-primary/5 border-2 border-primary rounded-xl p-8 text-center">
              <svg className="w-16 h-16 text-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl font-bold text-dark mb-3">{content.importantNotice.title}</h3>
              <p className="text-dark-light leading-relaxed max-w-2xl mx-auto">
                {content.importantNotice.content}
              </p>
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
