import Link from 'next/link'
import { generatePageMetadata } from '@/lib/seo'
import { ArrowRight, CheckCircle } from 'lucide-react'

export const metadata = generatePageMetadata(
  'Video Production Services',
  'Professional video production for marketing campaigns, YouTube, social media, and ads. From concept to final edit, we create compelling video content.',
  '/services/video-production',
  ['video production', 'commercial video', 'marketing video', 'video marketing', 'video advertising']
)

export default function VideoProductionPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-background px-4 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6 text-balance">
              Professional Video Production for Marketing
            </h1>
            <p className="text-xl text-muted-foreground text-balance leading-relaxed">
              From concept and scriptwriting to filming and editing, we create compelling video content that tells your story and drives engagement.
            </p>
          </div>
          
          <Link
            href="/contact"
            className="mx-auto flex w-fit items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Get Video Production Quote
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Why Video Matters Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Why Video is Essential for Marketing
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Video has become the dominant form of content consumption. Research shows that people are more likely to engage with, share, and remember video content compared to text or static images.
            </p>
            
            <p>
              Video marketing isn't just popular—it's effective. Videos increase conversion rates, improve SEO rankings, and boost social media engagement significantly. The investment in quality video production delivers measurable returns.
            </p>
            
            <p>
              Whether you need a short social media clip, a product demonstration, customer testimonial, or a full brand documentary, professional video production elevates your marketing message.
            </p>
          </div>
        </div>
      </section>

      {/* Video Types Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
            Video Types We Produce
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: 'Product Demo Videos',
                description: 'Showcase how your product works, its key features, and the value it delivers. Perfect for sales pages and email campaigns.'
              },
              {
                name: 'Customer Testimonials',
                description: 'Real customers sharing their success stories build trust and credibility. More persuasive than any sales pitch.'
              },
              {
                name: 'Explainer Videos',
                description: 'Simplify complex concepts through animated or live-action explanations. Great for SaaS, education, and technical products.'
              },
              {
                name: 'Social Media Videos',
                description: 'Short-form vertical videos optimized for TikTok, Instagram Reels, YouTube Shorts, and Facebook. Designed to stop the scroll.'
              },
              {
                name: 'Commercial Ads',
                description: 'Professional TV, YouTube, or streaming platform ads that tell your brand story and drive action.'
              },
              {
                name: 'Brand Documentaries',
                description: 'Longer-form content that tells your company\'s story, values, and impact. Builds emotional connection with audiences.'
              },
              {
                name: 'Event Coverage',
                description: 'Professional filming and editing of conferences, product launches, webinars, and other events.'
              },
              {
                name: 'Training & Educational Videos',
                description: 'Internal training materials, course content, or educational resources that engage and inform viewers.'
              }
            ].map((video, index) => (
              <div key={index} className="rounded-lg border border-border bg-background p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">{video.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{video.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
            Our Video Production Process
          </h2>
          
          <div className="space-y-8">
            {[
              {
                title: 'Concept & Strategy',
                description: 'We discuss your goals, target audience, and message. We develop a concept that resonates and aligns with your marketing objectives.'
              },
              {
                title: 'Scriptwriting',
                description: 'Compelling scripts are the foundation of great video. We write scripts that engage viewers, communicate your message, and drive action.'
              },
              {
                title: 'Pre-Production Planning',
                description: 'We plan every detail—storyboards, location scouting, talent selection, equipment needs, and shooting schedule.'
              },
              {
                title: 'Filming & Production',
                description: 'Our production team captures high-quality footage using professional equipment and techniques. Whether on-location or in-studio, we deliver excellent production value.'
              },
              {
                title: 'Post-Production & Editing',
                description: 'Our editors craft the raw footage into a polished final product. This includes color grading, sound design, motion graphics, and final effects.'
              },
              {
                title: 'Delivery & Optimization',
                description: 'We deliver your video in formats optimized for your platforms—YouTube, Instagram, TikTok, website, etc.'
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
            Why Choose CC Production for Video
          </h2>
          
          <div className="space-y-6">
            {[
              {
                title: 'Marketing-First Approach',
                description: 'We don\'t just make pretty videos—we create videos that drive conversions. Every video is strategically designed for your marketing goals.'
              },
              {
                title: 'Full In-House Team',
                description: 'We handle everything in-house: scriptwriting, filming, editing, animation, and optimization. This ensures quality control and efficiency.'
              },
              {
                title: 'Professional Equipment',
                description: 'We invest in professional-grade cameras, lighting, audio equipment, and editing software to ensure broadcast-quality results.'
              },
              {
                title: 'Creative Excellence',
                description: 'Our team includes award-winning videographers, editors, and creatives with experience across industries and video types.'
              },
              {
                title: 'Affordable Packages',
                description: 'Professional video doesn\'t require an enterprise budget. We offer flexible packages starting from $2,500 to accommodate any size business.'
              },
              {
                title: 'Fast Turnaround',
                description: 'From concept to delivery, we typically complete videos in 2-4 weeks depending on complexity and your feedback timeline.'
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

      {/* Pricing Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
            Video Production Packages
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Starter',
                price: '$2,500',
                includes: [
                  'Up to 30-second video',
                  'Basic scriptwriting',
                  'Filming (up to 4 hours)',
                  'Professional editing',
                  '1 round of revisions'
                ]
              },
              {
                name: 'Professional',
                price: '$7,500',
                includes: [
                  'Up to 2-minute video',
                  'Custom scriptwriting & storyboards',
                  'Filming (up to 16 hours)',
                  'Professional editing with color grading',
                  'Motion graphics & animations',
                  '2 rounds of revisions'
                ]
              },
              {
                name: 'Premium',
                price: '$15,000+',
                includes: [
                  'Custom length video',
                  'Concept development & creative direction',
                  'Unlimited filming days',
                  'Multi-location shooting',
                  'Professional editing & post-production',
                  'Motion graphics & special effects',
                  'Sound design & music licensing',
                  'Multiple format deliverables'
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
            All packages include unlimited communication, revision rounds, and format optimization. Custom pricing available for larger projects.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
            Video Production FAQ
          </h2>
          
          <div className="space-y-6">
            {[
              {
                q: 'How long does video production take?',
                a: 'Typically 2-4 weeks from concept approval to final delivery. Simpler projects might be faster; more complex productions with multiple revisions may take longer.'
              },
              {
                q: 'Can you produce videos on a tight timeline?',
                a: 'Yes, we can often expedite production for an additional rush fee. Contact us with your deadline and we\'ll let you know if we can accommodate it.'
              },
              {
                q: 'Do you do animations and motion graphics?',
                a: 'Absolutely. Many of our videos include custom animations, animated text, lower thirds, and other motion graphics to enhance the visual quality.'
              },
              {
                q: 'What if we need revisions?',
                a: 'Revision rounds are included in all packages. We work with you until you\'re happy with the final product. Most clients need 1-2 revision rounds.'
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
            Ready to Tell Your Story?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
            Let's create a video that showcases your business and drives results.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-primary-foreground px-8 py-3 text-base font-medium text-primary hover:opacity-90 transition-opacity"
          >
            Get Video Production Quote
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
