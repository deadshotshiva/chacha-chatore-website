import Link from 'next/link'
import { navigationLinks, servicePages } from '@/lib/seo'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[#7B68EE]/30 bg-gradient-to-b from-background via-[#0a0a0a] to-[#000000]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="animate-fade-in">
            <h3 className="flex items-center space-x-2 font-bold text-lg">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-gradient-to-br from-[#FF6B35] to-[#7B68EE] text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#FF6B35]/50 hover:scale-110">
                CC
              </div>
              <span className="bg-gradient-to-r from-[#FF6B35] to-[#7B68EE] bg-clip-text text-transparent">CC Production</span>
            </h3>
            <p className="mt-2 text-sm opacity-90">
              Performance marketing and creative production agency.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h4 className="font-semibold text-base mb-4 bg-gradient-to-r from-[#FFD93D] to-[#00B4D8] bg-clip-text text-transparent">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="opacity-90 hover:opacity-100 hover:text-[#FF6B35] transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className="font-semibold text-base mb-4 bg-gradient-to-r from-[#52B69A] to-[#4A90E2] bg-clip-text text-transparent">Services</h4>
            <ul className="space-y-2 text-sm">
              {servicePages.slice(0, 3).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="opacity-90 hover:opacity-100 hover:text-[#00B4D8] transition-all duration-300"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h4 className="font-semibold text-base mb-4 bg-gradient-to-r from-[#FF6B35] to-[#7B68EE] bg-clip-text text-transparent">Contact</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="mailto:hello@ccproduction.com" className="hover:opacity-100 hover:text-[#FFD93D] transition-all duration-300">
                  hello@ccproduction.com
                </a>
              </li>
              <li>
                <a href="tel:+1-555-123-4567" className="hover:opacity-100 hover:text-[#FFD93D] transition-all duration-300">
                  +1 (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-[#7B68EE]/20 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm opacity-90">
          <p>&copy; {currentYear} CC Production. All rights reserved.</p>
          <div className="mt-4 sm:mt-0 flex space-x-6">
            <a href="#" className="hover:opacity-100 hover:text-[#FF6B35] transition-all duration-300">Privacy</a>
            <a href="#" className="hover:opacity-100 hover:text-[#FF6B35] transition-all duration-300">Terms</a>
            <a href="#" className="hover:opacity-100 hover:text-[#FF6B35] transition-all duration-300">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
