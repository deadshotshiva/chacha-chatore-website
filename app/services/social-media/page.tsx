import Link from 'next/link'
import { generatePageMetadata } from '@/lib/seo'
import { ArrowRight, CheckCircle } from 'lucide-react'

export const metadata = generatePageMetadata(
  'Social Media Marketing Services',
  'Strategic social media marketing for brand growth, engagement, and sales. We manage content, community, and paid social across all major platforms.',
  '/services/social-media',
  ['social media marketing', 'social media management', 'Instagram marketing', 'TikTok marketing', 'social media advertising']
)

export default function SocialMediaPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-background px-4 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6 text-balance">
              Social Media Marketing for Brand Growth
            </h1>
            <p className="text-xl text-muted-foreground text-balance leading-relaxed">
              Build engaged communities, drive brand awareness, and convert followers into customers with our strategic social media approach.
            </p>
          </div>
          
          <Link
            href="/contact"
            className="mx-auto flex w-fit items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Get Free Social Media Audit
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            The Power of Strategic Social Media
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Social media has evolved from a communication tool into one of the most powerful marketing channels available. With billions of active users globally, social platforms provide unparalleled opportunities to reach, engage, and convert your target audience.
            </p>
            
            <p>
              However, success on social media requires more than posting content. It demands a strategic approach combining organic community building, paid promotion, content excellence, and consistent engagement.
            </p>
            
            <p>
              We handle all aspects of your social media presence—from strategy and content creation to community management and paid advertising—to build a cohesive brand presence that drives business results.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-balance">
            Our Social Media Strategy
          </h2>
          
          <div className="space-y-6">
            {[
              {
                title: 'Platform Selection & Strategy',
                description: 'Not every platform is right for every business. We identify which platforms your audience uses and develop platform-specific strategies that align with your goals.'
              },
              {
                title: 'Content Calendar & Creation',
                description: 'Consistent, high-quality content is the foundation of social media success. We develop content calendars that tell your brand story and engage your audience regularly.'
              },
              {
                title: 'Community Management & Engagement',
                description: 'Social media is two-way communication. We actively engage with your audience, respond to comments, build relationships, and foster a loyal community around your brand.'
              },
              {
                title: 'Paid Social Advertising',
                description: 'Organic reach has limitations. We complement organic content with targeted paid campaigns that amplify your message and drive specific business objectives.'
              },
              {
                title: 'Analytics & Reporting',
                description: 'We track engagement, reach, conversions, and other key metrics. Regular reporting shows you exactly how social media is contributing to business goals.'
              },
              {
                title: 'Influencer & Partnership Strategy',
                description: 'When appropriate, we develop partnerships with relevant influencers and complementary brands to expand reach and credibility.'
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

      {/* Platforms We Manage Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
            Social Media Platforms We Manage
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: 'Instagram',
                description: 'Visual platform perfect for B2C brands. We create engaging feed posts, Stories, Reels, and run targeted advertising campaigns.'
              },
              {
                name: 'Facebook',
                description: 'Largest social network with sophisticated targeting. Excellent for community building, events, and targeted paid campaigns across age groups.'
              },
              {
                name: 'TikTok',
                description: 'Fast-growing platform with younger audiences. We create viral-worthy short-form video content and leverage TikTok\'s powerful algorithm.'
              },
              {
                name: 'LinkedIn',
                description: 'B2B powerhouse for professional services, SaaS, and recruitment. We build thought leadership and generate qualified B2B leads.'
              },
              {
                name: 'YouTube',
                description: 'Video platform with massive reach. We develop video content strategies and run YouTube advertising campaigns.'
              },
              {
                name: 'Pinterest',
                description: 'Visual discovery platform ideal for retail, home, fashion, and lifestyle brands. We drive traffic and sales through strategic pinning.'
              }
            ].map((platform, index) => (
              <div key={index} className="rounded-lg border border-border bg-background p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">{platform.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Strategy Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
            Content Types We Create
          </h2>
          
          <div className="space-y-4">
            {[
              'Engaging carousel posts and graphics',
              'Short-form video content and Reels',
              'Behind-the-scenes and team content',
              'Educational and how-to content',
              'Customer testimonials and case studies',
              'User-generated content campaigns',
              'Stories and temporary content',
              'Interactive polls, quizzes, and questions'
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg border border-border">
                <div className="h-2 w-2 bg-primary rounded-full flex-shrink-0"></div>
                <p className="text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
            Results You Can Expect
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { metric: 'Engagement Rate Increase', value: 'Up to 300%' },
              { metric: 'Follower Growth', value: '150-300% annually' },
              { metric: 'Cost Per Conversion', value: 'Reduced 40-60%' },
              { metric: 'Website Traffic from Social', value: 'Increased 200%+' },
              { metric: 'Brand Awareness', value: 'Measurable lift in brand recall' },
              { metric: 'Community Loyalty', value: 'Stronger customer relationships' }
            ].map((item, index) => (
              <div key={index} className="rounded-lg border border-border bg-background p-6">
                <p className="text-sm text-muted-foreground mb-2">{item.metric}</p>
                <p className="text-2xl font-bold text-primary">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {[
              {
                q: 'How often should we post on social media?',
                a: 'Posting frequency depends on the platform and your audience. Generally, we recommend: Instagram 3-5 times/week, Facebook 1-2 times/day, TikTok daily or multiple times daily, LinkedIn 3-5 times/week.'
              },
              {
                q: 'Can you grow our followers organically?',
                a: 'Absolutely. While paid ads amplify reach, organic growth comes from consistent, quality content and active community engagement. Most of our clients see 150-300% annual follower growth.'
              },
              {
                q: 'How do you measure social media success?',
                a: 'We track metrics aligned with your goals: reach, engagement, follower growth, click-through rates, conversions, revenue attributed to social, and more. We provide regular reports with insights.'
              },
              {
                q: 'What if we\'re just starting with social media?',
                a: 'Perfect! We help businesses start from scratch. We develop strategy, create your accounts, set up branding, develop initial content, and build momentum from day one.'
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
            Ready to Build a Strong Social Presence?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
            Let's develop a social media strategy that grows your audience and drives business results.
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
