import { Metadata } from 'next'
import Link from 'next/link'
import { loadContent } from '@/lib/content'

interface EcommerceContent {
  metadata: { title: string; description: string };
  hero: { title: string; subtitle: string };
  capabilitiesSection: { title: string; subtitle: string };
  capabilities: Array<{
    title: string;
    icon: string;
    description: string;
    features: string[];
  }>;
  products: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
      features: string[];
    }>;
  };
  integrations: {
    title: string;
    subtitle: string;
    categories: Array<{
      category: string;
      platforms: string[];
    }>;
  };
  benefits: {
    title: string;
    subtitle: string;
    items: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
  stats: Array<{ number: string; label: string }>;
  cta: {
    title: string;
    description: string;
    primaryButton: { text: string; href: string };
    secondaryButton: { text: string; href: string };
  };
}

export const metadata: Metadata = {
  title: 'Ecommerce Capabilities - Finxbridge | Financial Ecommerce Solutions',
  description: 'Explore Finxbridge ecommerce capabilities including payment processing, digital commerce, and financial technology solutions for online businesses.',
}

export default async function EcommercePage() {
  const content = await loadContent<EcommerceContent>('ecommerce-capabilities.json')

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

      {/* Capabilities Grid */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">{content.capabilitiesSection.title}</h2>
            <p className="text-xl text-dark-light max-w-3xl mx-auto">
              {content.capabilitiesSection.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {content.capabilities.map((capability, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-8">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={capability.icon} />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-dark mb-3">{capability.title}</h3>
                    <p className="text-dark-light mb-6">{capability.description}</p>
                    <ul className="space-y-2">
                      {capability.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-dark-light">
                          <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">{content.products.title}</h2>
            <p className="text-xl text-dark-light max-w-3xl mx-auto">
              {content.products.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.products.items.map((product, index) => (
              <div key={index} className="bg-light p-6 rounded-xl hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-dark mb-3">{product.title}</h3>
                <p className="text-dark-light text-sm mb-4">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-dark-light">
                      <svg className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
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
            {content.integrations.categories.map((integration, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-dark mb-6 text-center">{integration.category}</h3>
                <ul className="space-y-3">
                  {integration.platforms.map((platform, idx) => (
                    <li key={idx} className="flex items-center text-dark-light">
                      <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {platform}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">{content.benefits.title}</h2>
            <p className="text-xl text-dark-light max-w-3xl mx-auto">
              {content.benefits.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.benefits.items.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-light rounded-xl hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">{benefit.title}</h3>
                <p className="text-dark-light text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {content.stats.map((stat, index) => (
              <div key={index}>
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
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
