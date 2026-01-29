'use client'

import Link from 'next/link'
import { navigationLinks } from '@/lib/seo'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#7B68EE]/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-gradient-to-br from-[#FF6B35] to-[#7B68EE] text-white font-bold text-sm transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#FF6B35]/50 group-hover:scale-110">
            CC
          </div>
          <span className="font-semibold text-foreground hidden sm:inline bg-gradient-to-r from-[#FF6B35] to-[#7B68EE] bg-clip-text text-transparent">CC Production</span>
        </Link>

        {/* Navigation */}
        <ul className="hidden md:flex items-center space-x-8">
          {navigationLinks.map((link, index) => (
            <li key={link.href} style={{ animationDelay: `${index * 0.05}s` }}>
              <Link
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-[#FF6B35] transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-[#FF6B35] after:to-[#7B68EE] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="rounded-lg bg-gradient-to-r from-[#FF6B35] to-[#7B68EE] px-4 py-2 text-sm font-medium text-white hover:shadow-lg hover:shadow-[#FF6B35]/50 transition-all duration-300 transform hover:scale-105"
        >
          Get Started
        </Link>
      </nav>
    </header>
  )
}
