import { Metadata } from 'next'
import Link from 'next/link'
import Partners from '@/components/Partners'
import { loadContent, ServiceItem, ProcessStepItem, PageMetadata, PageHero, CTASection } from '@/lib/content'

interface IndustryItem {
  title: string;
  description: string;
  icon: string;
}

interface ServicesContent {
  metadata: PageMetadata;
  hero: PageHero;
  servicesSection: {
    title: string;
    subtitle: string;
  };
  services: ServiceItem[];
  approach: {
    title: string;
    subtitle: string;
    steps: ProcessStepItem[];
  };
  industries: {
    title: string;
    subtitle: string;
    items: IndustryItem[];
  };
  cta: CTASection;
}

export async function generateMetadata(): Promise<Metadata> {
  const content = await loadContent<ServicesContent>('services.json');
  return {
    title: content.metadata.title,
    description: content.metadata.description,
  };
}

export default async function ServicesPage() {
  const content = await loadContent<ServicesContent>('services.json');

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

      {/* Services Grid */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">{content.servicesSection.title}</h2>
            <p className="text-xl text-dark-light max-w-3xl mx-auto">
              {content.servicesSection.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {content.services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-8 hover:-translate-y-1">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-dark mb-3">{service.title}</h3>
                    <p className="text-dark-light mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features?.map((feature, idx) => (
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

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">{content.approach.title}</h2>
            <p className="text-xl text-dark-light max-w-3xl mx-auto">
              {content.approach.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {content.approach.steps.map((item, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-primary/10 mb-4">{item.step}</div>
                <h3 className="text-2xl font-bold text-dark mb-3">{item.title}</h3>
                <p className="text-dark-light">{item.description}</p>
                {index < content.approach.steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise Section */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">{content.industries.title}</h2>
            <p className="text-xl text-dark-light max-w-3xl mx-auto">
              {content.industries.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {content.industries.items.map((industry, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={industry.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-dark mb-3">{industry.title}</h3>
                <p className="text-dark-light">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <Partners />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-slate to-primary-aqua text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">{content.cta.title}</h2>
          <p className="text-xl text-white/90 mb-8">
            {content.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {content.cta.primaryButton && (
              <Link
                href={content.cta.primaryButton.href}
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-light transition-colors inline-block"
              >
                {content.cta.primaryButton.text}
              </Link>
            )}
            {content.cta.secondaryButton && (
              <Link
                href={content.cta.secondaryButton.href}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-block"
              >
                {content.cta.secondaryButton.text}
              </Link>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
