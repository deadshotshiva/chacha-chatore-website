import Link from 'next/link'
import { generatePageMetadata, servicePages } from '@/lib/seo'
import { ArrowRight, BarChart3, Zap, Video, Palette, Share2 } from 'lucide-react'

export const metadata = generatePageMetadata(
  'Services',
  'Performance marketing and creative production services. Meta Ads, Google Ads, social media marketing, video production, and creative design.',
  '/services',
  ['marketing services', 'advertising services', 'creative services']
)

const serviceIcons = {
  'meta-ads': BarChart3,
  'google-ads': Zap,
  'social-media': Share2,
  'video-production': Video,
  'creative-design': Palette,
}

export default function ServicesPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-background px-4 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6 text-balance">
            Our Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance">
            We provide comprehensive performance marketing and creative production services designed to drive measurable results for your business.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicePages.map((service) => {
              const Icon = serviceIcons[service.slug as keyof typeof serviceIcons]
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group relative rounded-lg border border-border bg-card p-8 hover:border-primary hover:shadow-lg transition-all duration-300"
                >
                  <div className="absolute top-0 right-0 h-32 w-32 -mr-8 -mt-8 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300" />
                  
                  <div className="relative z-10">
                    <div className="inline-block p-3 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center text-primary font-medium text-sm">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center text-balance">
            Our Approach to Performance Marketing
          </h2>
          
          <div className="prose prose-invert max-w-none">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Data-Driven Strategy
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every campaign begins with thorough analysis of your market, audience, and competition. We develop strategies grounded in data that align with your business objectives and ensure maximum ROI.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Creative + Performance Synergy
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We believe great performance marketing starts with great creative. Our team combines award-winning design and copywriting with performance optimization to create ads that not only look great but convert at scale.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Continuous Optimization
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  The digital landscape never stops changing, and neither do we. We monitor, test, and refine campaigns continuously to improve performance and adapt to market shifts.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Transparent Reporting
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  You'll have clear visibility into campaign performance with regular reports and direct access to your account data. We explain the metrics that matter and what we're doing to improve them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center text-balance">
            Industries We Serve
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'E-commerce',
              'SaaS',
              'Healthcare',
              'Financial Services',
              'Real Estate',
              'Education',
              'Technology',
              'Consumer Goods',
              'Hospitality'
            ].map((industry) => (
              <div key={industry} className="rounded-lg border border-border bg-card p-4 text-center">
                <p className="font-medium text-foreground">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6 text-balance">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
            Let's discuss which services are right for your business goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-primary-foreground px-8 py-3 text-base font-medium text-primary hover:opacity-90 transition-opacity"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
