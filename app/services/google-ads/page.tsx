import Link from 'next/link'
import { generatePageMetadata } from '@/lib/seo'
import { ArrowRight, CheckCircle } from 'lucide-react'

export const metadata = generatePageMetadata(
  'Google Ads Services',
  'Expert Google Ads management for search, display, and shopping campaigns. Maximize your ROI with our certified Google Ads specialists.',
  '/services/google-ads',
  ['Google Ads', 'PPC', 'Google Search Ads', 'Google Display Ads', 'performance advertising']
)

export default function GoogleAdsPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-background px-4 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6 text-balance">
              Google Ads Management & Optimization
            </h1>
            <p className="text-xl text-muted-foreground text-balance leading-relaxed">
              Reach high-intent customers actively searching for your products or services. We optimize every aspect of your Google Ads campaigns for maximum ROI.
            </p>
          </div>
          
          <Link
            href="/contact"
            className="mx-auto flex w-fit items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Get Free Google Ads Audit
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* What Are Google Ads Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            What Are Google Ads?
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Google Ads is the world's leading paid search advertising platform, allowing businesses to display ads to people actively searching for their products or services. With 8.5 billion daily searches, Google Ads connects you with high-intent customers at the exact moment they're looking for solutions.
            </p>
            
            <p>
              Google Ads encompasses multiple campaign types including Search Ads (appearing in search results), Display Ads (on websites across the Google Network), Shopping Ads (for e-commerce), YouTube Ads, and App Promotion campaigns.
            </p>
            
            <p>
              What makes Google Ads unique is its focus on intent. Unlike other platforms that rely on interest targeting, Google Ads reaches people who are actively looking for what you offer—typically resulting in higher conversion rates and better ROI.
            </p>
          </div>
        </div>
      </section>

      {/* Why Google Ads Work Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-balance">
            Why Google Ads Are Essential for Performance Marketing
          </h2>
          
          <div className="space-y-6">
            {[
              {
                title: 'Capture High-Intent Traffic',
                description: 'Users searching for your keywords have already expressed intent to buy. You\'re not trying to convince someone—you\'re providing the solution they\'re actively seeking.'
              },
              {
                title: 'Measurable ROI',
                description: 'Every click, conversion, and dollar spent is tracked. Google Ads provides detailed conversion data so you know exactly which keywords and ads are driving results.'
              },
              {
                title: 'Rapid Scaling',
                description: 'Unlike organic search which takes months, Google Ads gets immediate traffic. Identify winning keywords and scale them quickly to drive business growth.'
              },
              {
                title: 'Multiple Campaign Types',
                description: 'From search campaigns targeting specific keywords to display ads for brand awareness, shopping campaigns for e-commerce, and YouTube ads for video marketing.'
              },
              {
                title: 'Smart Bidding & Automation',
                description: 'Google\'s AI automatically optimizes bids for conversions, helping you get maximum results from your budget. Smart bidding strategies adapt to market changes in real-time.'
              },
              {
                title: 'Flexible Budget Control',
                description: 'Start with a small budget and scale as you see positive ROI. Pause underperforming keywords instantly. Complete control over your spending.'
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

      {/* Our Strategy Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
            Our Google Ads Strategy
          </h2>
          
          <div className="space-y-8">
            {[
              {
                title: 'Keyword Research & Strategy',
                description: 'We identify high-intent keywords with commercial value. Our research focuses on keywords driven by actual customer behavior and search volume.'
              },
              {
                title: 'Campaign Structure & Organization',
                description: 'Properly organized campaigns allow for better quality scores and control. We structure campaigns by product line, customer intent, or other relevant segments.'
              },
              {
                title: 'Ad Copy Optimization',
                description: 'Compelling ad copy is critical. We test multiple ad variations to find messaging that resonates and drives clicks from the right audience.'
              },
              {
                title: 'Landing Page Optimization',
                description: 'The click is just the beginning. We ensure your landing pages are optimized for the keywords and ads driving traffic to maximize conversion rates.'
              },
              {
                title: 'Bid Management & Smart Bidding',
                description: 'We leverage Google\'s automation while maintaining strategic oversight. Smart bidding strategies are fine-tuned to your specific business goals.'
              },
              {
                title: 'Continuous Testing & Optimization',
                description: 'Google Ads success requires ongoing optimization. We regularly test new keywords, ad variations, and bidding strategies to improve performance.'
              }
            ].map((item, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="inline-block h-2 w-2 bg-primary rounded-full"></span>
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Types Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
            Google Ads Campaign Types We Manage
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: 'Search Ads',
                description: 'Text ads appearing in Google search results for specific keywords. Perfect for capturing high-intent customers actively searching for your products or services.'
              },
              {
                name: 'Display Ads',
                description: 'Visual ads displayed on websites within the Google Display Network. Great for brand awareness and remarketing to website visitors.'
              },
              {
                name: 'Shopping Ads',
                description: 'Product-specific ads with images and pricing. Ideal for e-commerce businesses looking to drive online sales and generate product interest.'
              },
              {
                name: 'YouTube Ads',
                description: 'Video ads displayed before, during, or after YouTube content. Perfect for storytelling and reaching users during content consumption.'
              },
              {
                name: 'App Campaigns',
                description: 'Automated campaigns to promote mobile app installations and in-app actions. Reaches users across Google\'s entire ecosystem.'
              },
              {
                name: 'Performance Max',
                description: 'AI-driven campaigns that automatically optimize across all Google channels using a single feed. Ideal for businesses wanting Google to manage optimization.'
              }
            ].map((campaign, index) => (
              <div key={index} className="rounded-lg border border-border bg-background p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">{campaign.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{campaign.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
            Google Ads FAQ
          </h2>
          
          <div className="space-y-6">
            {[
              {
                q: 'What\'s a realistic budget for Google Ads?',
                a: 'It depends on your industry and competitiveness of keywords. We typically recommend starting with $1,500-3,000/month for search campaigns. We can work with any budget and help you maximize your specific investment.'
              },
              {
                q: 'How long until we see results?',
                a: 'You\'ll get clicks immediately, but meaningful conversion data takes 2-4 weeks to accumulate. That\'s why patience and consistent optimization are key to Google Ads success.'
              },
              {
                q: 'What\'s a good Quality Score?',
                a: 'Quality Score rates from 1-10 and affects your ad costs. A score of 7+ is generally good; 9-10 is excellent. We optimize ad relevance, landing pages, and CTR to improve Quality Scores.'
              },
              {
                q: 'Can you improve our existing Google Ads account?',
                a: 'Yes! We regularly audit underperforming accounts and identify improvements. We\'ve helped many businesses reduce costs and increase conversions from poorly optimized accounts.'
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
            Ready to Dominate Google Search?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
            Let's discuss how Google Ads can drive qualified leads and sales for your business.
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
