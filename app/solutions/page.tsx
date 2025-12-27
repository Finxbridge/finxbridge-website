import { Metadata } from 'next'
import Link from 'next/link'
import { loadContent } from '@/lib/content'

interface SolutionItem {
  title: string;
  category: string;
  description: string;
  features: string[];
  benefits: string[];
}

interface TechStackCategory {
  category: string;
  items: string[];
}

interface IntegrationItem {
  title: string;
  description: string;
  icon: string;
}

interface SolutionsContent {
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    title: string;
    subtitle: string;
  };
  solutionsSection: {
    title: string;
    subtitle: string;
  };
  solutions: SolutionItem[];
  techStack: {
    title: string;
    subtitle: string;
    categories: TechStackCategory[];
  };
  integrations: {
    title: string;
    subtitle: string;
    items: IntegrationItem[];
  };
  cta: {
    title: string;
    description: string;
    primaryButton: { text: string; href: string };
    secondaryButton: { text: string; href: string };
  };
}

export const metadata: Metadata = {
  title: 'Solutions - Finxbridge | Industry-Specific Fintech Solutions',
  description: 'Discover Finxbridge industry-specific fintech solutions designed for banks, NBFCs, and financial institutions across India.',
}

export default async function SolutionsPage() {
  const content = await loadContent<SolutionsContent>('solutions.json');

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

      {/* Solutions Grid */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">{content.solutionsSection.title}</h2>
            <p className="text-xl text-dark-light max-w-3xl mx-auto">
              {content.solutionsSection.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {content.solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-primary-dark p-6">
                  <span className="inline-block bg-white/20 text-white text-sm px-4 py-1 rounded-full mb-3">
                    {solution.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{solution.title}</h3>
                </div>

                <div className="p-8">
                  <p className="text-dark-light mb-6">{solution.description}</p>

                  <div className="mb-6">
                    <h4 className="font-bold text-dark mb-3">Key Features:</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-dark-light">
                          <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="font-bold text-dark mb-3">Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.benefits.map((benefit, idx) => (
                        <span key={idx} className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">{content.techStack.title}</h2>
            <p className="text-xl text-dark-light max-w-3xl mx-auto">
              {content.techStack.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {content.techStack.categories.map((stack, index) => (
              <div key={index} className="bg-light p-6 rounded-xl">
                <h3 className="text-xl font-bold text-dark mb-4">{stack.category}</h3>
                <ul className="space-y-2">
                  {stack.items.map((item, idx) => (
                    <li key={idx} className="text-dark-light flex items-center">
                      <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">{content.integrations.title}</h2>
            <p className="text-xl text-dark-light max-w-3xl mx-auto">
              {content.integrations.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {content.integrations.items.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">{item.title}</h3>
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
