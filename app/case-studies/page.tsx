import Link from 'next/link'
import { generatePageMetadata } from '@/lib/seo'
import { ArrowRight, TrendingUp } from 'lucide-react'

export const metadata = generatePageMetadata(
  'Case Studies',
  'Real results from real clients. See how CC Production helped businesses achieve remarkable growth through performance marketing and creative excellence.',
  '/case-studies',
  ['marketing case studies', 'advertising results', 'performance marketing ROI']
)

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      company: 'TechFlow SaaS',
      industry: 'Software as a Service',
      challenge: 'Low qualified lead generation from paid ads. Cost per lead was $150 with poor conversion rates.',
      solution: 'Restructured Meta and Google Ads campaigns, improved audience targeting, created new high-converting landing pages, and implemented pixel tracking for better optimization.',
      results: [
        { metric: 'Cost Per Lead', change: '-62%', value: '$150 → $57' },
        { metric: 'Lead Volume', change: '+180%', value: '45 → 126 leads/month' },
        { metric: 'Ad Spend ROAS', change: '3.2x', value: 'Improved from 1.8x' }
      ],
      duration: '6 months',
      services: ['Google Ads', 'Meta Ads', 'Landing Page Design']
    },
    {
      id: 2,
      company: 'Elite Coaching',
      industry: 'Online Coaching',
      challenge: 'Struggling to fill coaching program spots. Ad costs were too high relative to client lifetime value.',
      solution: 'Developed retargeting campaigns for website visitors, created compelling video testimonials, optimized sales funnel, and implemented booking funnel tracking.',
      results: [
        { metric: 'Monthly Bookings', change: '+240%', value: '8 → 27 bookings' },
        { metric: 'Cost Per Booking', change: '-71%', value: '$89 → $22' },
        { metric: 'Monthly Revenue', change: '+380%', value: 'From $4,000 → $19,200' }
      ],
      duration: '4 months',
      services: ['Meta Ads', 'Video Production', 'Funnel Optimization']
    },
    {
      id: 3,
      company: 'HomeReno E-commerce',
      industry: 'E-commerce',
      challenge: 'High ad spend but low ROAS (1.5x). Difficult to scale without losing profitability.',
      solution: 'Conducted creative audit and built new product-specific ads, optimized product feed for Shopping ads, implemented advanced audience segmentation, and created dynamic retargeting campaigns.',
      results: [
        { metric: 'ROAS', change: '3.5x', value: 'From 1.5x' },
        { metric: 'Monthly Sales', change: '+156%', value: '$85,000 → $217,000' },
        { metric: 'CPC Reduction', change: '-48%', value: 'Better targeting efficiency' }
      ],
      duration: '5 months',
      services: ['Google Ads', 'Meta Ads', 'Creative Design', 'Video Production']
    },
    {
      id: 4,
      company: 'ConsultPlus',
      industry: 'Management Consulting',
      challenge: 'Needed to build brand awareness and generate qualified B2B leads for consulting services.',
      solution: 'Developed LinkedIn advertising strategy, created thought leadership content, built lead nurture email sequences, and implemented sophisticated lead scoring.',
      results: [
        { metric: 'Qualified Leads', change: '+320%', value: '4 → 16 leads/month' },
        { metric: 'Lead Quality', change: '+85%', value: 'Higher close rate' },
        { metric: 'Brand Mentions', change: '+450%', value: 'Increased brand searches' }
      ],
      duration: '3 months',
      services: ['LinkedIn Ads', 'Content Strategy', 'Brand Design']
    },
    {
      id: 5,
      company: 'FitLife App',
      industry: 'Health & Fitness',
      challenge: 'App had great product but low user acquisition. Need to drive app installs profitably.',
      solution: 'Created viral short-form video content, optimized TikTok and Instagram Reels, ran app install campaigns, and built retention optimization.',
      results: [
        { metric: 'Monthly Installs', change: '+520%', value: '200 → 1,240 installs' },
        { metric: 'Cost Per Install', change: '-63%', value: '$3.50 → $1.30' },
        { metric: 'Day-30 Retention', change: '+40%', value: 'Improved engagement' }
      ],
      duration: '4 months',
      services: ['TikTok Ads', 'Social Media', 'Video Production']
    },
    {
      id: 6,
      company: 'Real Estate Pro',
      industry: 'Real Estate',
      challenge: 'Limited lead generation from expensive traditional advertising. Need to reach motivated buyers.',
      solution: 'Launched targeted Facebook and Instagram campaigns with neighborhood-specific ads, created video property tours, and implemented lead follow-up automation.',
      results: [
        { metric: 'Monthly Leads', change: '+275%', value: '18 → 68 leads' },
        { metric: 'Cost Per Lead', change: '-55%', value: '$125 → $56' },
        { metric: 'Closed Deals', change: '+320%', value: '3 → 12 per month' }
      ],
      duration: '6 months',
      services: ['Meta Ads', 'Video Production', 'Landing Pages']
    }
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-background px-4 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6 text-balance">
            Our Results Speak For Themselves
          </h1>
          <p className="text-xl text-muted-foreground text-balance leading-relaxed">
            Real businesses. Real results. See how we helped companies across industries achieve remarkable growth.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className={`rounded-lg border border-border overflow-hidden ${
                  index % 2 === 0 ? 'bg-card' : 'bg-background'
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  {/* Content Side */}
                  <div className="p-8 md:p-10 flex flex-col justify-between">
                    <div>
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                          {study.industry}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        {study.company}
                      </h3>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                          The Challenge
                        </h4>
                        <p className="text-foreground leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>
                      
                      <div className="mb-8">
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                          Our Solution
                        </h4>
                        <p className="text-foreground leading-relaxed">
                          {study.solution}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                          Services Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {study.services.map((service, i) => (
                            <span
                              key={i}
                              className="inline-block px-3 py-1 rounded-lg bg-muted text-muted-foreground text-sm"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 pt-8 border-t border-border">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">Timeline:</span> {study.duration}
                      </p>
                    </div>
                  </div>
                  
                  {/* Results Side */}
                  <div className={`p-8 md:p-10 flex items-center ${
                    index % 2 === 0 ? 'bg-background' : 'bg-card'
                  }`}>
                    <div className="w-full">
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-6">
                        Results Achieved
                      </h4>
                      <div className="space-y-6">
                        {study.results.map((result, i) => (
                          <div key={i}>
                            <div className="flex items-end gap-3 mb-2">
                              <span className="text-3xl md:text-4xl font-bold text-primary flex items-baseline gap-1">
                                <span>{result.change}</span>
                              </span>
                              <TrendingUp className="h-5 w-5 text-primary mb-1" />
                            </div>
                            <p className="text-muted-foreground text-sm">{result.metric}</p>
                            <p className="text-foreground text-sm font-medium mt-1">{result.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
            Aggregate Results Across All Clients
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '$25M+', label: 'Total Ad Spend Managed' },
              { number: '3.5x', label: 'Average ROAS Achieved' },
              { number: '240%', label: 'Average Conversion Improvement' }
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-4xl font-bold text-primary mb-2">{stat.number}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            What Makes Our Results Different
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Data-Driven Approach',
                description: 'Every decision is backed by data. We track metrics obsessively and optimize relentlessly.'
              },
              {
                title: 'Creative Excellence',
                description: 'We don\'t just optimize boring ads. Our award-winning creative team makes ads that win.'
              },
              {
                title: 'Full-Stack Services',
                description: 'Strategy, creative, execution, and optimization—all from one team means better coordination and results.'
              },
              {
                title: 'Industry Expertise',
                description: 'We\'ve worked across dozens of industries. We understand what works in your space.'
              },
              {
                title: 'Long-Term Thinking',
                description: 'We optimize for sustainable growth, not short-term wins. Your success is measured in months and years.'
              },
              {
                title: 'Transparent Partnership',
                description: 'You\'re not just a client. You\'re a partner. We share insights and keep you fully informed.'
              }
            ].map((item, index) => (
              <div key={index} className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6 text-balance">
            Ready to Achieve Results Like These?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
            Let's discuss how we can help your business achieve similar growth. Every business is unique, and we'd love to learn about yours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-primary-foreground px-8 py-3 text-base font-medium text-primary hover:opacity-90 transition-opacity"
          >
            Get Free Strategy Call
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
