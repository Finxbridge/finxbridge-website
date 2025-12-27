import { Metadata } from 'next'
import { loadContent } from '@/lib/content'
import ContactForm from './ContactForm'

interface ContactPageContent {
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    title: string;
    subtitle: string;
  };
  form: {
    title: string;
    subtitle: string;
    fields: {
      name: { label: string; placeholder: string };
      email: { label: string; placeholder: string };
      phone: { label: string; placeholder: string; hint: string };
      company: { label: string; placeholder: string };
      subject: {
        label: string;
        placeholder: string;
        options: Array<{ value: string; label: string }>;
      };
      message: { label: string; placeholder: string };
    };
    submitButton: string;
    submittingButton: string;
    successMessage: string;
  };
  contactInfo: {
    title: string;
    subtitle: string;
    items: Array<{
      icon: string;
      title: string;
      details: string[];
      subtext: string;
    }>;
  };
  socialMedia: {
    title: string;
    links: Array<{
      name: string;
      href: string;
      icon: string;
    }>;
  };
  map: {
    title: string;
    subtitle: string;
    placeholder: string;
    address: string;
  };
  cta: {
    title: string;
    description: string;
    button: { text: string; href: string };
  };
}

export const metadata: Metadata = {
  title: 'Contact Us - Finxbridge | Get in Touch',
  description: 'Contact Finxbridge for fintech solutions, digital transformation consulting, and financial technology services. Reach out to discuss your project.',
}

export default async function ContactPage() {
  const content = await loadContent<ContactPageContent>('contact.json');

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

      {/* Contact Section */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm content={{
            form: content.form,
            contactInfo: content.contactInfo,
            socialMedia: content.socialMedia,
          }} />
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-dark mb-4">{content.map.title}</h2>
            <p className="text-xl text-dark-light">{content.map.subtitle}</p>
          </div>

          <div className="bg-light rounded-2xl overflow-hidden shadow-lg" style={{ height: '400px' }}>
            <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary-dark/10 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 text-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-dark-light">{content.map.placeholder}</p>
                <p className="text-sm text-dark-light/70 mt-2">{content.map.address}</p>
              </div>
            </div>
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
          <a
            href={content.cta.button.href}
            className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-light transition-colors inline-block"
          >
            {content.cta.button.text}
          </a>
        </div>
      </section>
    </main>
  )
}
