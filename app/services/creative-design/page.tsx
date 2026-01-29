import Link from 'next/link'
import { generatePageMetadata } from '@/lib/seo'
import { ArrowRight, CheckCircle } from 'lucide-react'

export const metadata = generatePageMetadata(
  'Creative Design Services',
  'Custom creative design for marketing campaigns. Logos, ad creatives, graphics, and design solutions that make your brand stand out.',
  '/services/creative-design',
  ['graphic design', 'ad creative', 'logo design', 'brand design', 'marketing design']
)

export default function CreativeDesignPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-background px-4 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6 text-balance">
              Creative Design That Converts
            </h1>
            <p className="text-xl text-muted-foreground text-balance leading-relaxed">
              Award-winning creative design for ads, branding, marketing materials, and digital assets. Design that looks great and performs better.
            </p>
          </div>
          
          <Link
            href="/contact"
            className="mx-auto flex w-fit items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Get Design Quote
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Design Matters Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Why Design Matters in Marketing
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Great design isn't just about aesthetics—it's about communication and conversion. Design influences how people perceive your brand, whether they trust you, and crucially, whether they take action.
            </p>
            
            <p>
              Studies show that beautiful, professionally designed ads get more clicks, higher engagement, and better conversion rates than poorly designed alternatives. The same applies to logos, landing pages, and marketing materials.
            </p>
            
            <p>
              We create design that not only looks stunning but is strategically developed to achieve your specific marketing objectives. Every design element serves a purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Design Services Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
            Design Services We Offer
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: 'Ad Creative Design',
                description: 'Compelling designs for Facebook, Instagram, Google, TikTok, and other ad platforms. We design for both static images and video thumbnails.'
              },
              {
                name: 'Logo & Branding',
                description: 'Custom logos, brand identity systems, and style guides that establish your visual presence and differentiate you from competitors.'
              },
              {
                name: 'Landing Page Design',
                description: 'High-converting landing page designs optimized for user experience and conversions. Includes desktop and mobile designs.'
              },
              {
                name: 'Social Media Graphics',
                description: 'Custom graphics for Instagram posts, Stories, TikToks, YouTube thumbnails, and other social media platforms.'
              },
              {
                name: 'Print Design',
                description: 'Business cards, brochures, flyers, packaging, and other print materials designed for visual impact and brand consistency.'
              },
              {
                name: 'Web Design',
                description: 'Professional website designs including custom illustrations, layouts, and interactive elements. Both UI/UX design and development available.'
              },
              {
                name: 'Email Design',
                description: 'Beautiful, responsive email templates for newsletters, campaigns, and automations that increase open and click rates.'
              },
              {
                name: 'Infographic Design',
                description: 'Data visualization and infographics that make complex information easy to understand and shareable.'
              }
            ].map((service, index) => (
              <div key={index} className="rounded-lg border border-border bg-background p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">{service.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Design Process Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
            Our Design Process
          </h2>
          
          <div className="space-y-8">
            {[
              {
                title: 'Discovery & Briefing',
                description: 'We start by understanding your brand, goals, target audience, and any specific requirements or inspiration you have.'
              },
              {
                title: 'Concept Development',
                description: 'Our designers create multiple concept directions exploring different visual approaches and styles.'
              },
              {
                title: 'Feedback & Refinement',
                description: 'You provide feedback on the concepts. We refine and develop the strongest directions further.'
              },
              {
                title: 'Design Execution',
                description: 'We finalize the selected design, ensuring every detail is perfect. This includes variations and different sizes/formats if needed.'
              },
              {
                title: 'Revisions & Polish',
                description: 'We incorporate your feedback and make any necessary adjustments until you\'re fully satisfied with the final design.'
              },
              {
                title: 'Delivery & Assets',
                description: 'We deliver all design files in multiple formats suitable for your use cases. Full ownership and unlimited use included.'
              }
            ].map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary text-primary-foreground font-bold text-sm">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-balance">
            Why Choose CC Production for Design
          </h2>
          
          <div className="space-y-6">
            {[
              {
                title: 'Award-Winning Designers',
                description: 'Our design team has won industry awards and brings years of experience across industries. Your project gets top-tier talent.'
              },
              {
                title: 'Marketing-Focused Design',
                description: 'We don\'t just design for beauty—every design is strategically developed to support your marketing goals and convert viewers.'
              },
              {
                title: 'Rapid Turnaround',
                description: 'From initial concepts to final delivery, we typically deliver designs within 1-2 weeks depending on project scope.'
              },
              {
                title: 'Multiple Concepts',
                description: 'We present multiple directions so you have choices. This ensures you get exactly the style and approach you\'re looking for.'
              },
              {
                title: 'Full Creative Control',
                description: 'You own all design files and assets. Unlimited revisions until you\'re completely happy. No hidden fees or surprise costs.'
              },
              {
                title: 'Scalable Solutions',
                description: 'Whether you need a single logo or a complete brand overhaul, we scale our process to match your needs and budget.'
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Packages Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
            Design Packages
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Single Design',
                price: '$800',
                includes: [
                  '1 design project',
                  '3 concept directions',
                  'Unlimited revisions',
                  'Final files in all formats',
                  '2 week turnaround'
                ]
              },
              {
                name: 'Campaign Package',
                price: '$2,500',
                includes: [
                  'Multiple related designs',
                  'Ad variations & sizes',
                  'Social media graphics',
                  'Email templates',
                  'Unlimited revisions',
                  'All files & assets',
                  '3 week turnaround'
                ]
              },
              {
                name: 'Brand Design',
                price: '$5,000+',
                includes: [
                  'Logo design',
                  'Brand style guide',
                  'Color palette & typography',
                  'Business cards',
                  'Email signature templates',
                  'Social media templates',
                  'Unlimited revisions',
                  'All assets & guidelines',
                  '4 week turnaround'
                ]
              }
            ].map((pkg, index) => (
              <div key={index} className="rounded-lg border-2 border-border bg-background p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                <p className="text-3xl font-bold text-primary mb-6">{pkg.price}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <p className="text-center text-muted-foreground mt-8">
            Custom pricing available for retainer arrangements and ongoing design needs.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
            Design FAQ
          </h2>
          
          <div className="space-y-6">
            {[
              {
                q: 'How long does the design process take?',
                a: 'Typical turnaround is 1-2 weeks for single projects, 3 weeks for campaigns, and 4 weeks for full brand work. Rush options available for urgent projects.'
              },
              {
                q: 'Can you provide multiple design options?',
                a: 'Yes, we always present multiple concept directions. This gives you choices and ensures we find the style that\'s right for your brand.'
              },
              {
                q: 'What file formats do you deliver?',
                a: 'We deliver files in all necessary formats: PDF, PNG, JPG, SVG, PSD, AI, etc. depending on the project. You get all source files.'
              },
              {
                q: 'Do you offer unlimited revisions?',
                a: 'Yes. All our packages include unlimited revisions until you\'re completely satisfied. We won\'t stop until you\'re happy.'
              }
            ].map((item, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-foreground mb-3">{item.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6 text-balance">
            Ready to Elevate Your Design?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
            Let's create designs that look amazing and deliver results for your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-primary-foreground px-8 py-3 text-base font-medium text-primary hover:opacity-90 transition-opacity"
          >
            Get Design Quote
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
