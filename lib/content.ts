import { promises as fs } from 'fs';
import path from 'path';

// ============================================
// Content Types
// ============================================

/**
 * Hero section content for the homepage
 */
export interface HeroContent {
  headline: string;
  highlightedText: string;
  description: string;
  primaryButton: { text: string; href: string };
  secondaryButton: { text: string; href: string };
  scrollIndicatorText: string;
}

/**
 * Service item used in homepage and services page
 */
export interface ServiceItem {
  title: string;
  icon: string; // SVG path
  description: string;
  features?: string[];
}

/**
 * Feature item for homepage features section
 */
export interface FeatureItem {
  title: string;
  description: string;
  stat: string;
  label: string;
}

/**
 * Stat item for statistics display
 */
export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

/**
 * Testimonial item for client testimonials
 */
export interface TestimonialItem {
  name: string;
  position: string;
  content: string;
  avatar: string;
  rating?: number;
}

/**
 * About page content structure
 */
export interface AboutContent {
  hero: { title: string; subtitle: string };
  mission: { title: string; description: string; icon: string };
  vision: { title: string; description: string; icon: string };
  story: { title: string; paragraphs: string[] };
  coreValues: Array<{ title: string; description: string; icon: string }>;
  whyChooseUs: Array<{ title: string; description: string }>;
  cta: {
    title: string;
    description: string;
    primaryButton: { text: string; href: string };
    secondaryButton: { text: string; href: string };
  };
}

/**
 * Solution item for solutions page
 */
export interface SolutionItem {
  title: string;
  category: string;
  description: string;
  features: string[];
  benefits: string[];
}

/**
 * Case study item for case studies page
 */
export interface CaseStudyItem {
  title: string;
  client: string;
  category: string;
  challenge: string;
  solution: string;
  results: string[];
  duration: string;
  impact: string;
}

/**
 * Job position item for careers page
 */
export interface JobPositionItem {
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
}

/**
 * Benefit item for benefits/perks display
 */
export interface BenefitItem {
  icon: string;
  title: string;
  description: string;
}

/**
 * Contact info item for contact page
 */
export interface ContactInfoItem {
  icon: string;
  title: string;
  details: string[];
  subtext: string;
}

/**
 * Social link item for footer/contact
 */
export interface SocialLinkItem {
  name: string;
  href: string;
  icon: string;
}

/**
 * Menu item type for header/footer navigation
 */
export interface MenuItemType {
  label: string;
  href: string;
  dropdown?: Array<{ label: string; href: string }>;
}

/**
 * Footer links structure
 */
export interface FooterLinks {
  company: Array<{ label: string; href: string }>;
  services: Array<{ label: string; href: string }>;
  legal: Array<{ label: string; href: string }>;
}

/**
 * Capability item for capabilities pages
 */
export interface CapabilityItem {
  title: string;
  icon: string;
  description: string;
  features: string[];
}

/**
 * Product item for products display
 */
export interface ProductItem {
  title: string;
  description: string;
  features: string[];
}

/**
 * Integration category for integrations display
 */
export interface IntegrationCategory {
  category: string;
  platforms: string[];
}

/**
 * Tech stack category for technology display
 */
export interface TechStackCategory {
  category: string;
  items: string[];
}

/**
 * Process step item for process/methodology display
 */
export interface ProcessStepItem {
  step: string;
  title: string;
  description: string;
}

/**
 * Page metadata for SEO
 */
export interface PageMetadata {
  title: string;
  description: string;
}

/**
 * Generic page hero section
 */
export interface PageHero {
  title: string;
  subtitle: string;
}

/**
 * CTA section content
 */
export interface CTASection {
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
}

// ============================================
// Content Loading Utilities
// ============================================

/**
 * Loads content from a JSON file in the content directory.
 * This function is designed for use with Next.js server components.
 *
 * @param filename - The name of the JSON file (e.g., 'hero.json')
 * @returns Promise resolving to the typed content
 * @throws Error if the file cannot be read or parsed
 *
 * @example
 * ```typescript
 * const heroContent = await loadContent<HeroContent>('hero.json');
 * ```
 */
export async function loadContent<T>(filename: string): Promise<T> {
  try {
    const contentPath = path.join(process.cwd(), 'content', filename);
    const fileContent = await fs.readFile(contentPath, 'utf-8');
    return JSON.parse(fileContent) as T;
  } catch (error) {
    console.error(`Error loading content from ${filename}:`, error);
    throw new Error(`Failed to load content: ${filename}`);
  }
}

/**
 * Loads content synchronously from a JSON file in the content directory.
 * This function can be used in contexts where async/await is not available.
 * Note: This uses dynamic require which works in Node.js environments.
 *
 * @param filename - The name of the JSON file (e.g., 'hero.json')
 * @returns The typed content
 * @throws Error if the file cannot be read or parsed
 *
 * @example
 * ```typescript
 * const heroContent = loadContentSync<HeroContent>('hero.json');
 * ```
 */
export function loadContentSync<T>(filename: string): T {
  try {
    const contentPath = path.join(process.cwd(), 'content', filename);
    // Using fs.readFileSync for synchronous loading
    const fsSync = require('fs');
    const fileContent = fsSync.readFileSync(contentPath, 'utf-8');
    return JSON.parse(fileContent) as T;
  } catch (error) {
    console.error(`Error loading content from ${filename}:`, error);
    throw new Error(`Failed to load content: ${filename}`);
  }
}

/**
 * Safely loads content with a fallback value if the file is missing or invalid.
 * Useful for optional content that may not always exist.
 *
 * @param filename - The name of the JSON file
 * @param fallback - The fallback value to return on error
 * @returns Promise resolving to the content or fallback value
 *
 * @example
 * ```typescript
 * const testimonials = await loadContentSafe<TestimonialItem[]>('testimonials.json', []);
 * ```
 */
export async function loadContentSafe<T>(filename: string, fallback: T): Promise<T> {
  try {
    return await loadContent<T>(filename);
  } catch {
    console.warn(`Using fallback for ${filename}`);
    return fallback;
  }
}

/**
 * Loads multiple content files in parallel.
 * Useful when a page needs content from multiple JSON files.
 *
 * @param files - Object mapping keys to filenames
 * @returns Promise resolving to object with loaded content
 *
 * @example
 * ```typescript
 * const content = await loadMultipleContent({
 *   hero: 'hero.json',
 *   services: 'services.json',
 * });
 * ```
 */
export async function loadMultipleContent<T extends Record<string, unknown>>(
  files: Record<keyof T, string>
): Promise<T> {
  const entries = Object.entries(files);
  const results = await Promise.all(
    entries.map(async ([key, filename]) => {
      const content = await loadContent(filename as string);
      return [key, content];
    })
  );
  return Object.fromEntries(results) as T;
}

/**
 * Checks if a content file exists in the content directory.
 *
 * @param filename - The name of the JSON file
 * @returns Promise resolving to boolean indicating file existence
 */
export async function contentExists(filename: string): Promise<boolean> {
  try {
    const contentPath = path.join(process.cwd(), 'content', filename);
    await fs.access(contentPath);
    return true;
  } catch {
    return false;
  }
}
