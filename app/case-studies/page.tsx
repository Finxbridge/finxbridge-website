import { Metadata } from 'next'
import Link from 'next/link'
import { loadContent, CaseStudyItem, PageMetadata, PageHero, CTASection, StatItem } from '@/lib/content'

interface TestimonialItem {
  quote: string;
  author: string;
  rating: number;
}

interface CaseStudiesContent {
  metadata: PageMetadata;
  hero: PageHero;
  stats: Array<{ number: string; label: string }>;
  caseStudies: CaseStudyItem[];
  testimonials: {
    title: string;
    subtitle: string;
    items: TestimonialItem[];
  };
  cta: CTASection;
}

export const metadata: Metadata = {
  title: 'Case Studies - Finxbridge | Success Stories & Client Testimonials',
  description: 'Explore how Finxbridge has helped banks, NBFCs, and fintechs achieve digital transformation success with our proven solutions.',
}

export default async function CaseStudiesPage() {
  const content = await loadContent<CaseStudiesContent>('case-studies.json');

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

      {/* Stats Overview */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {content.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-dark-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {content.caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden border border-gray-100">
                <div className="grid lg:grid-cols-3">
                  {/* Left Column - Overview */}
                  <div className="lg:col-span-1 bg-gradient-to-br from-primary/5 to-primary-dark/5 p-8">
                    <span className="inline-block bg-primary text-white text-sm px-4 py-1 rounded-full mb-4">
                      {study.category}
                    </span>
                    <h2 className="text-2xl font-bold text-dark mb-3">{study.title}</h2>
                    <p className="text-dark-light mb-6">{study.client}</p>

                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-dark-light mb-1">Project Duration</div>
                        <div className="font-semibold text-dark">{study.duration}</div>
                      </div>
                      <div>
                        <div className="text-sm text-dark-light mb-1">Business Impact</div>
                        <div className="font-semibold text-primary">{study.impact}</div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Details */}
                  <div className="lg:col-span-2 p-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-bold text-dark mb-2 flex items-center">
                          <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                          The Challenge
                        </h3>
                        <p className="text-dark-light">{study.challenge}</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-dark mb-2 flex items-center">
                          <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                          Our Solution
                        </h3>
                        <p className="text-dark-light">{study.solution}</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-dark mb-3 flex items-center">
                          <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                          </svg>
                          Results Achieved
                        </h3>
                        <div className="grid md:grid-cols-2 gap-3">
                          {study.results.map((result, idx) => (
                            <div key={idx} className="flex items-start bg-primary/5 p-3 rounded-lg">
                              <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-dark font-medium text-sm">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">{content.testimonials.title}</h2>
            <p className="text-xl text-dark-light max-w-3xl mx-auto">
              {content.testimonials.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {content.testimonials.items.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-dark-light italic mb-4">"{testimonial.quote}"</p>
                <p className="text-dark font-semibold">- {testimonial.author}</p>
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
