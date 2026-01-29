import Link from "next/link"
import { ArrowRight } from 'lucide-react'
import { AnimatedHero } from '@/components/animated-hero'
import { ServicesGrid } from '@/components/services-grid'
import { ProcessTimeline } from '@/components/process-timeline'
import { StatsCounter } from '@/components/stats-counter'
import { FeatureShowcase } from '@/components/feature-showcase'
import { generatePageMetadata, servicePages } from '@/lib/seo'

export const metadata = generatePageMetadata(
  'Home',
  'Performance Marketing & Creative Production Agency - CC Production specializes in Meta Ads, Google Ads, social media marketing, and creative design.',
  '/',
  ['performance marketing agency', 'creative production', 'digital marketing']
)

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <AnimatedHero />

      {/* Services Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for all your performance marketing and creative production needs
            </p>
          </div>

          <ServicesGrid services={servicePages} />
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-center text-balance">
            Our Process
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            A data-driven approach to delivering results
          </p>

          <ProcessTimeline
            steps={[
              {
                number: '01',
                title: 'Discovery & Strategy',
                description: 'We analyze your business, market, and competition to develop a tailored strategy aligned with your goals.',
                color: '#FF6B35'
              },
              {
                number: '02',
                title: 'Creative Development',
                description: 'Our team creates compelling creatives and messaging designed to resonate with your target audience.',
                color: '#FFD93D'
              },
              {
                number: '03',
                title: 'Campaign Launch',
                description: 'We launch campaigns with meticulous attention to setup, targeting, and initial optimization.',
                color: '#00B4D8'
              },
              {
                number: '04',
                title: 'Continuous Optimization',
                description: 'Regular monitoring, testing, and refinement to improve performance and maximize your ROI.',
                color: '#7B68EE'
              }
            ]}
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <StatsCounter
            stats={[
              { value: 500, label: 'Projects Completed', suffix: '+' },
              { value: 95, label: 'Client Satisfaction Rate', suffix: '%' },
              { value: 50, label: 'Revenue Generated for Clients', suffix: 'M+' },
            ]}
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FeatureShowcase
            title="Why Choose CC Production?"
            subtitle="Industry-leading expertise meets creative innovation"
            features={[
              {
                title: 'Data-Driven Strategy',
                description: 'Every campaign is backed by deep analytics and market insights to ensure maximum ROI.',
                icon: '📊',
                color: '[#FF6B35]'
              },
              {
                title: 'Creative Excellence',
                description: 'Our award-winning creative team produces compelling content that stands out.',
                icon: '🎨',
                color: '[#FFD93D]'
              },
              {
                title: 'Full-Service Solutions',
                description: 'From ads management to video production, we handle your entire marketing strategy.',
                icon: '🚀',
                color: '[#00B4D8]'
              },
              {
                title: 'Transparent Reporting',
                description: 'Real-time dashboards and regular updates keep you informed every step of the way.',
                icon: '📈',
                color: '[#7B68EE]'
              },
              {
                title: 'Dedicated Support',
                description: 'Your success is our priority. We provide ongoing optimization and support.',
                icon: '🤝',
                color: '[#52B69A]'
              },
              {
                title: 'Proven Track Record',
                description: 'Our clients see an average of 3-5x ROAS within the first 90 days.',
                icon: '✨',
                color: '[#4A90E2]'
              }
            ]}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1a1a1a] via-[#0a0a0a] to-[#1a1a1a]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[#FF6B35]/20 to-[#7B68EE]/20 rounded-full blur-3xl opacity-40 animate-float"></div>
        
        <div className="mx-auto max-w-2xl text-center relative z-10 animate-scale-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
            Ready to Grow Your Business?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Schedule a free strategy call with our team to discuss your performance marketing goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#FF6B35] to-[#FFD93D] px-8 py-3 text-base font-medium text-[#0a0a0a] hover:shadow-2xl hover:shadow-[#FF6B35]/50 transition-all duration-300 transform hover:scale-110"
          >
            Get Free Strategy Call
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
