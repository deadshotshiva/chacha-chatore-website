import Link from 'next/link'
import { generatePageMetadata } from '@/lib/seo'
import { ArrowRight, CheckCircle, Target, TrendingUp } from 'lucide-react'

export const metadata = generatePageMetadata(
  'Meta Ads Services',
  'Expert Meta Ads management for lead generation and sales. We specialize in Facebook and Instagram advertising with proven strategies for scaling businesses.',
  '/services/meta-ads',
  ['Meta Ads', 'Facebook Ads', 'Instagram Ads', 'Meta advertising', 'lead generation ads']
)

export default function MetaAdsPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-background px-4 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6 text-balance">
              Meta Ads Agency for Lead Generation & Sales
            </h1>
            <p className="text-xl text-muted-foreground text-balance leading-relaxed">
              Scale your business with expert Facebook and Instagram advertising strategies designed to drive qualified leads and increase sales.
            </p>
          </div>
          
          <Link
            href="/contact"
            className="mx-auto flex w-fit items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Get Free Meta Ads Audit
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* What Are Meta Ads Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            What Are Meta Ads?
          </h2>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Meta Ads are paid advertisements displayed on Facebook, Instagram, and the Audience Network. They're one of the most powerful advertising platforms available, reaching over 3 billion monthly active users with precision targeting capabilities.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Unlike traditional advertising, Meta Ads allow you to target users based on detailed demographics, interests, behaviors, and even their interactions with your business. This precision targeting means your ad budget goes directly to people most likely to be interested in your products or services.
            </p>
          </div>
        </div>
      </section>

      {/* Why Meta Ads Work Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-balance">
            Why Meta Ads Work for Your Business
          </h2>
          
          <div className="space-y-6">
            {[
              {
                title: 'Precise Audience Targeting',
                description: 'Reach your ideal customers with laser-focused targeting based on demographics, interests, behaviors, and purchase history. Minimize wasted ad spend on unqualified prospects.'
              },
              {
                title: 'Visual Storytelling Power',
                description: 'Facebook and Instagram are visual-first platforms. Our creatives are designed to stop the scroll and drive engagement. Video content, carousels, and interactive ads perform exceptionally well.'
              },
              {
                title: 'Remarketing & Retargeting',
                description: 'Keep your brand top-of-mind with powerful retargeting campaigns. Reach website visitors, cart abandoners, and previous customers to drive conversions at lower costs.'
              },
              {
                title: 'Cost-Effective Scaling',
                description: 'Start small and scale proven winners. Meta Ads platforms provide excellent cost-per-result metrics, allowing you to optimize budget allocation in real-time.'
              },
              {
                title: 'Detailed Analytics',
                description: 'Track every conversion, click, and impression. Meta Ads provides granular data to understand what works, what doesn\'t, and where to optimize for maximum ROI.'
              },
              {
                title: 'Integration with Facebook Pixel',
                description: 'Our pixel implementation captures crucial conversion data, enabling sophisticated audience building and optimization based on actual user behavior on your site.'
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

      {/* Our Meta Ads Strategy Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
            CC Production's Meta Ads Strategy
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="inline-block h-2 w-2 bg-primary rounded-full"></span>
                Audience Development & Segmentation
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We build custom audiences based on your customer data, website visitors, and lookalike audiences of your best customers. Segmentation ensures each audience receives highly relevant messaging.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="inline-block h-2 w-2 bg-primary rounded-full"></span>
                Creative Testing & Optimization
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We create multiple creative variations and test them rigorously to identify top performers. A/B testing on copy, visuals, headlines, and CTAs ensures we continuously improve performance.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="inline-block h-2 w-2 bg-primary rounded-full"></span>
                Campaign Structure & Scaling
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We build scalable campaign structures that allow us to identify winners early and scale them efficiently. Budget allocation is data-driven and continuously optimized based on performance.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="inline-block h-2 w-2 bg-primary rounded-full"></span>
                Conversion Optimization
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Beyond the click, we optimize your entire funnel. We implement proper pixel tracking, analyze conversion paths, and work with your team to improve landing page performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries & Use Cases */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
            Industries We've Scaled with Meta Ads
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { industry: 'E-commerce', result: 'Increased ROAS from 2.5x to 5.2x within 3 months' },
              { industry: 'SaaS', result: 'Reduced cost per qualified lead by 47%' },
              { industry: 'Real Estate', result: 'Generated 200+ qualified leads per month' },
              { industry: 'Financial Services', result: 'Achieved 8:1 return on ad spend' },
              { industry: 'Consulting', result: 'Scaled client acquisition budget 3x' },
              { industry: 'Coaching', result: 'Reduced booking cost from $89 to $22' }
            ].map((item, index) => (
              <div key={index} className="rounded-lg border border-border bg-background p-6">
                <p className="font-semibold text-foreground mb-2">{item.industry}</p>
                <p className="text-sm text-muted-foreground">{item.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {[
              {
                q: 'How much should I budget for Meta Ads?',
                a: 'There\'s no minimum, but we typically recommend starting with $1,000-2,000/month to generate meaningful data for optimization. Larger budgets allow for better testing and scaling.'
              },
              {
                q: 'How long before we see results?',
                a: 'Most campaigns start generating leads or sales within the first week. However, optimization takes time. We typically need 2-4 weeks to build enough data for significant improvements.'
              },
              {
                q: 'What makes your Meta Ads approach different?',
                a: 'We combine strategic audience development with creative excellence. Many agencies focus only on optimization; we ensure your creative is compelling first.'
              },
              {
                q: 'Can you help with an existing Meta Ads account?',
                a: 'Absolutely. We audit existing accounts, identify underperforming elements, and implement improvements. We\'ve often improved ROI significantly by restructuring poorly set up accounts.'
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
            Ready to Scale with Meta Ads?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
            Schedule a free Meta Ads strategy call to discuss your goals and how we can help.
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
