'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { navigationLinks } from '@/lib/seo'

export function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden relative z-50 inline-flex items-center justify-center rounded-lg p-2 text-foreground hover:bg-[#7B68EE]/10 transition-all duration-300"
        aria-label="Toggle menu"
      >
        <div className="relative w-6 h-6">
          {isOpen ? (
            <X className="w-6 h-6 text-[#FF6B35] absolute inset-0 transform transition-all duration-300" />
          ) : (
            <Menu className="w-6 h-6 absolute inset-0 transform transition-all duration-300" />
          )}
        </div>
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden transition-opacity duration-300"
          onClick={closeMenu}
          style={{
            animation: 'fadeIn 0.3s ease-out',
          }}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-16 bottom-0 w-72 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] border-r border-[#7B68EE]/20 shadow-2xl z-40 md:hidden transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{
          willChange: 'transform',
        }}
      >
        {/* Decorative gradient line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6B35] via-[#FFD93D] via-[#00B4D8] to-[#7B68EE]" />

        {/* Header section */}
        <div className="px-6 py-6 border-b border-[#7B68EE]/10">
          <h3 className="text-sm font-semibold text-[#7B68EE] uppercase tracking-wider">Navigation</h3>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-2 p-6">
          {navigationLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="px-4 py-3 rounded-lg text-base font-medium text-foreground hover:bg-[#FF6B35]/20 hover:text-[#FF6B35] transition-all duration-300 relative group overflow-hidden"
              style={{
                animation: isOpen ? `slideIn 0.5s ease-out ${index * 0.08}s both` : 'none',
              }}
            >
              {/* Animated background */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/0 via-[#FF6B35]/10 to-[#FF6B35]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Accent bar */}
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-full bg-gradient-to-b from-[#FF6B35] to-[#7B68EE] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Text */}
              <span className="relative">{link.label}</span>
            </Link>
          ))}
        </nav>

        {/* Divider */}
        <div className="mx-6 h-px bg-gradient-to-r from-transparent via-[#7B68EE]/20 to-transparent" />

        {/* CTA Button and Footer */}
        <div className="flex flex-col gap-4 p-6">
          <Link
            href="/contact"
            onClick={closeMenu}
            className="block w-full rounded-lg bg-gradient-to-r from-[#FF6B35] to-[#7B68EE] px-4 py-3 text-center font-medium text-white hover:shadow-lg hover:shadow-[#FF6B35]/50 transition-all duration-300 transform hover:scale-105"
            style={{
              animation: isOpen ? 'slideUp 0.5s ease-out 0.3s both' : 'none',
            }}
          >
            Get Started
          </Link>

          {/* Footer info */}
          <div className="text-center text-xs text-muted-foreground">
            <p>Ready to grow?</p>
            <p className="text-[#FF6B35] font-semibold mt-1">Let's talk</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  )
}
