import { Metadata } from 'next'
import Link from 'next/link'
import { loadContent } from '@/lib/content'

interface PrivacyPolicyContent {
  metadata: { title: string; description: string };
  hero: { title: string; subtitle: string };
  intro: { paragraphs: string[] };
  sections: Array<{
    number: string;
    title: string;
    content?: string;
    items?: string[];
    note?: string;
    subsections?: Array<{
      title: string;
      examples: string[];
      purposes: string[];
      source: string;
      disclosure: string;
    }>;
    cookieTypes?: Array<{ type: string; description: string }>;
    cookieHelp?: string[];
    contact?: { email: string };
  }>;
  cta: {
    title: string;
    description: string;
    button: { text: string; href: string };
  };
}

export const metadata: Metadata = {
  title: 'Privacy Policy - Finxbridge | Data Protection & Privacy',
  description: 'Learn how Finxbridge collects, uses, and protects your personal information. Our privacy policy outlines our commitment to data security and transparency.',
}

export default async function PrivacyPolicyPage() {
  const legalContent = await loadContent<{ privacyPolicy: PrivacyPolicyContent }>('legal.json')
  const content = legalContent.privacyPolicy

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
          <div className="bg-light p-6 rounded-xl mb-8">
              <p className="text-dark-light leading-relaxed mb-0">
                {content.intro.paragraphs[0]}
              </p>
              <p className="text-dark-light leading-relaxed mt-4 mb-0">
                {content.intro.paragraphs[1]}
              </p>
            </div>
            {/* Section 1 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">{content.sections[0].number}</span>
                {content.sections[0].title}
              </h2>
              <p className="text-dark-light leading-relaxed">
                {content.sections[0].content}
              </p>
            </div>
            {/* Section 2 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-6 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">{content.sections[1].number}</span>
                {content.sections[1].title}
              </h2>
              {/* Subsection A */}
              <div className="bg-light p-6 rounded-xl mb-6">
                <h3 className="text-2xl font-bold text-dark mb-4">{content.sections[1].subsections![0].title}</h3>
                <h4 className="text-lg font-semibold text-dark mb-3">Examples of Personal Information Collected</h4>
                <ul className="list-disc pl-6 mb-4 text-dark-light space-y-1">
                  {content.sections[1].subsections![0].examples.map((example, index) => (
                    <li key={index}>{example}</li>
                  ))}
                </ul>
                <h4 className="text-lg font-semibold text-dark mb-3">Purpose of Collection</h4>
                <ul className="list-disc pl-6 mb-4 text-dark-light space-y-1">
                  {content.sections[1].subsections![0].purposes.map((purpose, index) => (
                    <li key={index}>{purpose}</li>
                  ))}
                </ul>
                <h4 className="text-lg font-semibold text-dark mb-3">Source of Collection</h4>
                <p className="text-dark-light mb-4">
                  {content.sections[1].subsections![0].source}
                </p>
                <h4 className="text-lg font-semibold text-dark mb-3">Disclosure for Business Purpose</h4>
                <p className="text-dark-light mb-0">
                  {content.sections[1].subsections![0].disclosure}
                </p>
              </div>
              {/* Subsection B */}
              <div className="bg-light p-6 rounded-xl mb-6">
                <h3 className="text-2xl font-bold text-dark mb-4">{content.sections[1].subsections![1].title}</h3>
                <h4 className="text-lg font-semibold text-dark mb-3">Examples of Personal Information Collected</h4>
                <ul className="list-disc pl-6 mb-4 text-dark-light space-y-1">
                  {content.sections[1].subsections![1].examples.map((example, index) => (
                    <li key={index}>{example}</li>
                  ))}
                </ul>
                <h4 className="text-lg font-semibold text-dark mb-3">Purpose of Collection</h4>
                <ul className="list-disc pl-6 mb-4 text-dark-light space-y-1">
                  {content.sections[1].subsections![1].purposes.map((purpose, index) => (
                    <li key={index}>{purpose}</li>
                  ))}
                </ul>
                <h4 className="text-lg font-semibold text-dark mb-3">Source of Collection</h4>
                <p className="text-dark-light mb-4">
                  {content.sections[1].subsections![1].source}
                </p>
                <h4 className="text-lg font-semibold text-dark mb-3">Disclosure for Business Purpose</h4>
                <p className="text-dark-light mb-0">
                  {content.sections[1].subsections![1].disclosure}
                </p>
              </div>
              {/* Subsection C */}
              <div className="bg-light p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-dark mb-4">{content.sections[1].subsections![2].title}</h3>
                <h4 className="text-lg font-semibold text-dark mb-3">Examples of Personal Information Collected</h4>
                <ul className="list-disc pl-6 mb-4 text-dark-light space-y-1">
                  {content.sections[1].subsections![2].examples.map((example, index) => (
                    <li key={index}>{example}</li>
                  ))}
                </ul>
                <h4 className="text-lg font-semibold text-dark mb-3">Purpose of Collection</h4>
                <ul className="list-disc pl-6 mb-4 text-dark-light space-y-1">
                  {content.sections[1].subsections![2].purposes.map((purpose, index) => (
                    <li key={index}>{purpose}</li>
                  ))}
                </ul>
                <h4 className="text-lg font-semibold text-dark mb-3">Source of Collection</h4>
                <p className="text-dark-light mb-4">
                  {content.sections[1].subsections![2].source}
                </p>
                <h4 className="text-lg font-semibold text-dark mb-3">Disclosure for Business Purpose</h4>
                <p className="text-dark-light mb-0">
                  {content.sections[1].subsections![2].disclosure}
                </p>
              </div>
            </div>
            {/* Section 3 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">{content.sections[2].number}</span>
                {content.sections[2].title}
              </h2>
              <p className="text-dark-light leading-relaxed mb-3">
                {content.sections[2].content}
              </p>
              <ul className="list-disc pl-6 mb-4 text-dark-light space-y-2">
                {content.sections[2].items!.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="text-dark font-semibold">
                {content.sections[2].note}
              </p>
            </div>
            {/* Section 4 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">{content.sections[3].number}</span>
                {content.sections[3].title}
              </h2>
              <p className="text-dark-light leading-relaxed mb-3">
                {content.sections[3].content}
              </p>
              <ul className="list-disc pl-6 text-dark-light space-y-2">
                {content.sections[3].items!.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            {/* Section 5 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">{content.sections[4].number}</span>
                {content.sections[4].title}
              </h2>
              <p className="text-dark-light leading-relaxed mb-4">
                {content.sections[4].content}
              </p>

              <div className="bg-light p-6 rounded-xl mb-4">
                <h3 className="text-xl font-bold text-dark mb-3">Types of Cookies We Use</h3>
                <ul className="list-disc pl-6 text-dark-light space-y-2">
                  {content.sections[4].cookieTypes!.map((cookie, index) => (
                    <li key={index}><strong>{cookie.type}</strong> – {cookie.description}</li>
                  ))}
                </ul>
              </div>
              <p className="text-dark-light mb-3">Cookies help us:</p>
              <ul className="list-disc pl-6 mb-4 text-dark-light space-y-1">
                {content.sections[4].cookieHelp!.map((help, index) => (
                  <li key={index}>{help}</li>
                ))}
              </ul>

              <p className="text-dark-light">
                {content.sections[4].note}
              </p>
            </div>
            {/* Section 6 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">{content.sections[5].number}</span>
                {content.sections[5].title}
              </h2>
              <p className="text-dark-light leading-relaxed mb-3">
                {content.sections[5].content}
              </p>
              <ul className="list-disc pl-6 text-dark-light space-y-2">
                {content.sections[5].items!.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            {/* Section 7 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">{content.sections[6].number}</span>
                {content.sections[6].title}
              </h2>
              <p className="text-dark-light leading-relaxed mb-3">
                {content.sections[6].content}
              </p>
              <ul className="list-disc pl-6 mb-4 text-dark-light space-y-2">
                {content.sections[6].items!.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="text-dark-light">
                {content.sections[6].note}
              </p>
            </div>
            {/* Section 8 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">{content.sections[7].number}</span>
                {content.sections[7].title}
              </h2>
              <p className="text-dark-light leading-relaxed">
                {content.sections[7].content}
              </p>
            </div>
            {/* Section 9 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">{content.sections[8].number}</span>
                {content.sections[8].title}
              </h2>
              <p className="text-dark-light leading-relaxed mb-3">
                {content.sections[8].content}
              </p>
              <ul className="list-disc pl-6 mb-4 text-dark-light space-y-2">
                {content.sections[8].items!.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="text-dark-light">
                {content.sections[8].note}
              </p>
            </div>
            {/* Section 10 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">{content.sections[9].number}</span>
                {content.sections[9].title}
              </h2>
              <p className="text-dark-light leading-relaxed mb-4">
                {content.sections[9].content}
              </p>
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl">
                <p className="text-dark-light mb-0">
                  <strong className="text-dark">Email:</strong> {content.sections[9].contact!.email}
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
