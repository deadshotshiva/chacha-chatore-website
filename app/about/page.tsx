import Link from 'next/link'
import { generatePageMetadata } from '@/lib/seo'
import { ArrowRight, CheckCircle, Users, Zap, Target, Award } from 'lucide-react'

export const metadata = generatePageMetadata(
  'About Us',
  'Learn about CC Production, our mission, team, and approach to performance marketing and creative production. We\'re results-focused partners for your business growth.',
  '/about',
  ['about CC Production', 'marketing agency team', 'digital marketing experts']
)

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-background px-4 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6 text-balance">
            About CC Production
          </h1>
          <p className="text-xl text-muted-foreground text-balance leading-relaxed">
            We're a performance marketing and creative production agency dedicated to driving measurable results for ambitious businesses.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Our Story
          </h2>
          
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              CC Production was founded on a simple belief: great marketing requires both creative excellence and data-driven strategy. We've seen too many talented creatives ignore performance metrics, and too many performance marketers create boring, ineffective ads. We decided there had to be a better way.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Since our founding, we've worked with dozens of businesses across industries—from e-commerce and SaaS to consulting and healthcare. We've managed ad budgets ranging from $5,000 to $500,000+ monthly, consistently delivering results that exceed expectations.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              But it's not just about the numbers. We genuinely care about the success of our clients. We treat your business like our own, thinking long-term partnerships instead of short-term campaigns. Your growth is our success.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the most trusted performance marketing and creative production partner for ambitious businesses looking to scale through data-driven strategy and creative excellence.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A world where every business has access to world-class marketing expertise, regardless of size. Where creative beauty and performance metrics work hand-in-hand.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-foreground mb-12">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Target,
                title: 'Results-Focused',
                description: 'Everything we do is focused on your business objectives. We measure success by your success.'
              },
              {
                icon: Award,
                title: 'Excellence',
                description: 'We bring world-class expertise and attention to detail to every project, no matter the size.'
              },
              {
                icon: Users,
                title: 'Partnership',
                description: 'We\'re not vendors; we\'re partners in your growth. Your challenges become our challenges.'
              },
              {
                icon: Zap,
                title: 'Innovation',
                description: 'We stay ahead of trends, test new strategies, and constantly evolve our approach.'
              }
            ].map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="rounded-lg border border-border bg-background p-6">
                  <Icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
            Our Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                category: 'Performance Marketing',
                skills: ['Meta Ads', 'Google Ads', 'YouTube Ads', 'TikTok Ads', 'Programmatic Advertising', 'Retargeting Campaigns']
              },
              {
                category: 'Social Media',
                skills: ['Instagram Marketing', 'Facebook Marketing', 'LinkedIn Marketing', 'TikTok Strategy', 'Community Management', 'Social Paid Ads']
              },
              {
                category: 'Creative Production',
                skills: ['Copywriting', 'Video Production', 'Graphic Design', 'Motion Graphics', 'Photography', 'Brand Strategy']
              },
              {
                category: 'Strategy & Optimization',
                skills: ['Campaign Strategy', 'A/B Testing', 'Landing Page Optimization', 'Conversion Rate Optimization', 'Analytics', 'Reporting']
              }
            ].map((expertise, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-foreground mb-4">{expertise.category}</h3>
                <ul className="space-y-2">
                  {expertise.skills.map((skill, i) => (
                    <li key={i} className="flex items-center gap-2 text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            By The Numbers
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '50+', label: 'Clients Served' },
              { number: '$25M+', label: 'Ad Spend Managed' },
              { number: '3.5x', label: 'Average ROAS' },
              { number: '5', label: 'Years Experience' },
              { number: '47%', label: 'Avg CPC Reduction' },
              { number: '200%', label: 'Avg Lead Growth' },
              { number: '15+', label: 'Team Members' },
              { number: '10', label: 'Industries Served' }
            ].map((stat, index) => (
              <div key={index} className="rounded-lg border border-border bg-card p-6 text-center">
                <p className="text-3xl font-bold text-primary mb-2">{stat.number}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
            How We Work With Clients
          </h2>
          
          <div className="space-y-8">
            {[
              {
                title: 'Deep Dive Discovery',
                description: 'We start by understanding your business, goals, audience, and current challenges. This foundation informs everything we do.'
              },
              {
                title: 'Strategic Planning',
                description: 'We develop a comprehensive strategy that aligns with your goals. We\'re transparent about what\'s possible and realistic about timelines.'
              },
              {
                title: 'Rapid Execution',
                description: 'We move fast without sacrificing quality. Most strategies are live within 2-3 weeks, with continuous optimization from day one.'
              },
              {
                title: 'Continuous Optimization',
                description: 'Marketing never stops. We monitor performance daily, test new approaches, and continuously refine our strategy.'
              },
              {
                title: 'Transparent Reporting',
                description: 'You get regular reports showing performance, insights, and actions we\'re taking. No smoke and mirrors—just results.'
              },
              {
                title: 'Long-Term Partnership',
                description: 'We measure success over months and years, not days. We\'re invested in your long-term growth.'
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

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
            Why Businesses Choose CC Production
          </h2>
          
          <div className="space-y-4">
            {[
              'Proven track record of results across industries',
              'Full-service approach—creative, strategy, and optimization in one place',
              'Team of certified experts and award-winning creatives',
              'Transparent communication and regular reporting',
              'Flexible engagement models from project-based to ongoing partnerships',
              'Commitment to your long-term growth, not short-term metrics',
              'Fast turnaround without sacrificing quality',
              'Accessible expert knowledge regardless of your team size or budget'
            ].map((reason, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg border border-border">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-foreground">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6 text-balance">
            Ready to Work With Us?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
            Let's schedule a call to discuss how we can help your business grow.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-primary-foreground px-8 py-3 text-base font-medium text-primary hover:opacity-90 transition-opacity"
          >
            Schedule a Call
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
