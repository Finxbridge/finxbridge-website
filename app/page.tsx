import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Features from '@/components/Features'
import Stats from '@/components/Stats'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import { loadContent, HeroContent } from '@/lib/content'

interface HomeServicesContent {
  title: string
  titleHighlight: string
  description: string
  services: Array<{
    icon: string
    title: string
    description: string
  }>
}

interface HomeAboutContent {
  title: string
  titleHighlight: string
  paragraphs: string[]
  features: Array<{
    title: string
    description: string
  }>
  ctaText: string
  ctaHref: string
}

interface FeaturesContent {
  title: string
  titleHighlight: string
  description: string
  features: Array<{
    title: string
    description: string
    stat: string
    label: string
  }>
}

interface StatsContent {
  stats: Array<{
    key: string
    value: number
    suffix: string
    label: string
  }>
}

interface TestimonialsContent {
  title: string
  titleHighlight: string
  description: string
  testimonials: Array<{
    name: string
    position: string
    content: string
    avatar: string
  }>
}

interface HomeContactContent {
  title: string
  titleHighlight: string
  description: string
  contactInfo: Array<{
    type: string
    title: string
    value: string
  }>
  socialLinks: Array<{
    name: string
    href: string
  }>
  form: {
    nameLabel: string
    namePlaceholder: string
    emailLabel: string
    emailPlaceholder: string
    companyLabel: string
    companyPlaceholder: string
    messageLabel: string
    messagePlaceholder: string
    submitButton: string
    submittingButton: string
    successMessage: string
  }
}

export default async function Home() {
  const [heroContent, servicesContent, aboutContent, featuresContent, statsContent, testimonialsContent, contactContent] = await Promise.all([
    loadContent<HeroContent>('hero.json'),
    loadContent<HomeServicesContent>('home-services.json'),
    loadContent<HomeAboutContent>('home-about.json'),
    loadContent<FeaturesContent>('features.json'),
    loadContent<StatsContent>('stats.json'),
    loadContent<TestimonialsContent>('testimonials.json'),
    loadContent<HomeContactContent>('home-contact.json'),
  ])

  return (
    <>
      <Hero content={heroContent} />
      <Services content={servicesContent} />
      <Features content={featuresContent} />
      <About content={aboutContent} />
      <Stats content={statsContent} />
      <Testimonials content={testimonialsContent} />
      <Contact content={contactContent} />
    </>
  )
}
