import { Metadata } from 'next'
import Link from 'next/link'
import { loadContent } from '@/lib/content'

interface TermsContent {
  metadata: { title: string; description: string };
  hero: { title: string; subtitle: string };
  intro: { paragraphs: string[]; warning: string };
  sections: Array<{
    number: string;
    title: string;
    content?: string;
    items?: string[];
    itemsLeft?: string[];
    itemsRight?: string[];
    note?: string;
    warning?: string;
    definitions?: Array<{ term: string; definition: string }>;
    contact?: { email: string };
  }>;
  acceptance: { title: string; content: string };
  cta: {
    title: string;
    description: string;
    primaryButton: { text: string; href: string };
    secondaryButton: { text: string; href: string };
  };
}

export const metadata: Metadata = {
  title: 'Terms & Conditions - Finxbridge | Legal Agreement',
  description: 'Review the terms and conditions governing the use of Finxbridge website and services. Legal agreements and user responsibilities.',
}

export default async function TermsPage() {
  const legalContent = await loadContent<{ terms: TermsContent }>('legal.json')
  const content = legalContent.terms

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

            {/* Section 1 - Definitions */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">{content.sections[0].number}</span>
                {content.sections[0].title}
              </h2>
              <div className="bg-light p-6 rounded-xl">
                <ul className="space-y-3 mb-0">
                  {content.sections[0].definitions!.map((def, index) => (
                    <li key={index} className="text-dark-light">
                      <strong className="text-dark">{def.term}</strong> {def.definition}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Section 2 - Use of the Website */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">{content.sections[1].number}</span>
                {content.sections[1].title}
              </h2>
              <p className="text-dark-light leading-relaxed mb-4">
                {content.sections[1].content}
              </p>
              <ul className="list-disc pl-6 text-dark-light space-y-2 mb-4">
                {content.sections[1].items!.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="text-dark-light leading-relaxed">
                {content.sections[1].note}
              </p>
            </div>

            {/* Section 3 - No Offer or Advice */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">{content.sections[2].number}</span>
                {content.sections[2].title}
              </h2>
              <p className="text-dark-light leading-relaxed mb-4">
                {content.sections[2].content}
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                <ul className="list-disc pl-6 text-dark-light space-y-2 mb-0">
                  {content.sections[2].items!.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <p className="text-dark-light leading-relaxed mt-4">
                {content.sections[2].note}
              </p>
            </div>

            {/* Section 4 - Intellectual Property Rights */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">{content.sections[3].number}</span>
                {content.sections[3].title}
              </h2>
              <p className="text-dark-light leading-relaxed mb-4">
                {content.sections[3].content}
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-light p-4 rounded-xl">
                  <ul className="list-disc pl-6 text-dark-light space-y-1 mb-0">
                    {content.sections[3].itemsLeft!.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-light p-4 rounded-xl">
                  <ul className="list-disc pl-6 text-dark-light space-y-1 mb-0">
                    {content.sections[3].itemsRight!.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="text-dark-light leading-relaxed mb-4">
                {content.sections[3].note}
              </p>
              <p className="text-dark font-semibold">
                {content.sections[3].warning}
              </p>
            </div>

            {/* Section 5 - Trademarks */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">{content.sections[4].number}</span>
                {content.sections[4].title}
              </h2>
              <p className="text-dark-light leading-relaxed mb-4">
                {content.sections[4].content}
              </p>
              <p className="text-dark-light leading-relaxed">
                {content.sections[4].note}
              </p>
            </div>

            {/* Section 6 - Prohibited Use */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">{content.sections[5].number}</span>
                {content.sections[5].title}
              </h2>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-4">
                <p className="text-dark font-semibold mb-3">{content.sections[5].content}</p>
                <ul className="list-disc pl-6 text-dark-light space-y-2 mb-0">
                  {content.sections[5].items!.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <p className="text-dark font-semibold">
                {content.sections[5].warning}
              </p>
            </div>

            {/* Section 7 - Third-Party Links */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">{content.sections[6].number}</span>
                {content.sections[6].title}
              </h2>
              <p className="text-dark-light leading-relaxed mb-4">
                {content.sections[6].content}
              </p>
              <div className="bg-light p-6 rounded-xl mb-4">
                <h3 className="text-xl font-bold text-dark mb-3">Finxbridge:</h3>
                <ul className="list-disc pl-6 text-dark-light space-y-2 mb-0">
                  {content.sections[6].items!.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <p className="text-dark font-semibold">
                {content.sections[6].warning}
              </p>
            </div>

            {/* Section 8 - Limitation of Liability */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">{content.sections[7].number}</span>
                {content.sections[7].title}
              </h2>
              <p className="text-dark-light leading-relaxed mb-4">
                {content.sections[7].content}
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {content.sections[7].items!.map((item, index) => (
                  <div key={index} className="bg-light p-4 rounded-xl">
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <div>
                        <p className="text-dark-light mb-0">{item}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 9 - Website Availability */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">{content.sections[8].number}</span>
                {content.sections[8].title}
              </h2>
              <p className="text-dark-light leading-relaxed mb-4">
                {content.sections[8].content}
              </p>
              <p className="text-dark-light leading-relaxed mb-3">
                We shall not be liable for downtime due to:
              </p>
              <ul className="list-disc pl-6 text-dark-light space-y-2">
                {content.sections[8].items!.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Section 10 - Linking Policy */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">{content.sections[9].number}</span>
                {content.sections[9].title}
              </h2>
              <p className="text-dark-light leading-relaxed">
                {content.sections[9].content}
              </p>
            </div>

            {/* Section 11 - Governing Law & Jurisdiction */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">{content.sections[10].number}</span>
                {content.sections[10].title}
              </h2>
              <div className="bg-light p-6 rounded-xl">
                <p className="text-dark-light leading-relaxed mb-4">
                  {content.sections[10].content}
                </p>
                <p className="text-dark-light leading-relaxed mb-0">
                  {content.sections[10].note}
                </p>
              </div>
            </div>

            {/* Section 12 - Changes to Terms */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">{content.sections[11].number}</span>
                {content.sections[11].title}
              </h2>
              <p className="text-dark-light leading-relaxed mb-4">
                {content.sections[11].content}
              </p>
              <p className="text-dark font-semibold">
                {content.sections[11].warning}
              </p>
            </div>

            {/* Section 13 - Contact Information */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">{content.sections[12].number}</span>
                {content.sections[12].title}
              </h2>
              <p className="text-dark-light leading-relaxed mb-4">
                {content.sections[12].content}
              </p>
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl">
                <p className="text-dark-light mb-0">
                  <strong className="text-dark">Email:</strong> {content.sections[12].contact!.email}
                </p>
              </div>
            </div>

            {/* Acceptance Notice */}
            <div className="bg-primary/5 border-2 border-primary rounded-xl p-8 text-center">
              <svg className="w-16 h-16 text-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl font-bold text-dark mb-3">{content.acceptance.title}</h3>
              <p className="text-dark-light leading-relaxed max-w-2xl mx-auto">
                {content.acceptance.content}
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={content.cta.primaryButton.href}
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-light transition-colors inline-block"
            >
              {content.cta.primaryButton.text}
            </Link>
            <Link
              href={content.cta.secondaryButton.href}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-block"
            >
              {content.cta.secondaryButton.text}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
