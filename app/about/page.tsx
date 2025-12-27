import { Metadata } from 'next'
import Link from 'next/link'
import { loadContent } from '@/lib/content'

interface AboutPageContent {
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    title: string;
    subtitle: string;
  };
  mission: {
    title: string;
    description: string;
    icon: string;
  };
  vision: {
    title: string;
    description: string;
    icon: string;
  };
  story: {
    title: string;
    paragraphs: string[];
  };
  coreValuesSection: {
    title: string;
    subtitle: string;
  };
  coreValues: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  whyChooseUs: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  cta: {
    title: string;
    description: string;
    primaryButton: { text: string; href: string };
    secondaryButton: { text: string; href: string };
  };
}

export const metadata: Metadata = {
  title: 'About Us - Finxbridge | Expert Fintech Solutions',
  description: 'Learn about Finxbridge, our mission to empower financial innovation, and our team of fintech experts helping banks, NBFCs, and fintechs succeed.',
}

export default async function AboutPage() {
  const content = await loadContent<AboutPageContent>('about.json');

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

      {/* Mission & Vision Section */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={content.mission.icon} />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-dark mb-4">{content.mission.title}</h2>
              <p className="text-dark-light leading-relaxed">
                {content.mission.description}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {content.vision.icon.split(' M').map((pathPart, index) => (
                    <path
                      key={index}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={index === 0 ? pathPart : `M${pathPart}`}
                    />
                  ))}
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-dark mb-4">{content.vision.title}</h2>
              <p className="text-dark-light leading-relaxed">
                {content.vision.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-dark mb-6">{content.story.title}</h2>
              <div className="space-y-4 text-dark-light leading-relaxed">
                {content.story.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-primary-dark/20 rounded-2xl p-8 h-96 flex items-center justify-center">
                <svg className="w-64 h-64 text-primary/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">{content.coreValuesSection.title}</h2>
            <p className="text-xl text-dark-light max-w-3xl mx-auto">
              {content.coreValuesSection.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.coreValues.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">{value.title}</h3>
                <p className="text-dark-light">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">{content.whyChooseUs.title}</h2>
            <p className="text-xl text-dark-light max-w-3xl mx-auto">
              {content.whyChooseUs.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {content.whyChooseUs.items.map((item, index) => (
              <div key={index} className="p-6 border-l-4 border-primary bg-light hover:bg-white transition-colors">
                <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
                <p className="text-dark-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-slate to-primary-aqua text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">{content.cta.title}</h2>
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
