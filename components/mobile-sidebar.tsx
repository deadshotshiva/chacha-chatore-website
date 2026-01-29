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
        className={`fixed left-0 top-16 bottom-0 w-72 bg-black border-r border-[#7B68EE]/30 shadow-2xl z-40 md:hidden transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{
          willChange: 'transform',
        }}
      >
        {/* Decorative gradient line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF6B35] via-[#FFD93D] via-[#00B4D8] to-[#7B68EE]" />

        {/* Header section */}
        <div className="px-6 py-6 border-b border-[#7B68EE]/20">
          <h3 className="text-sm font-semibold text-[#7B68EE] uppercase tracking-wider">Navigation</h3>
        </div>

        {/* Navigation Links with Colored Badges */}
        <nav className="flex flex-col space-y-1 px-2 py-4 overflow-y-auto max-h-[calc(100vh-280px)]">
          {navigationLinks.map((link, index) => {
            const colors = ['#FFD93D', '#00B4D8', '#7B68EE', '#FF6B35', '#52B69A']
            const badgeColor = colors[index % colors.length]
            
            return (
              <div
                key={link.href}
                className="relative flex items-center group px-4 py-2 rounded-lg transition-all duration-300"
                style={{
                  animation: isOpen ? `slideIn 0.5s ease-out ${index * 0.08}s both` : 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = `${badgeColor}10`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                }}
              >
                {/* Colored Badge - positioned properly */}
                <div
                  className="relative w-10 h-10 rounded-full flex items-center justify-center text-black font-bold text-xs flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: badgeColor,
                    boxShadow: `0 0 15px ${badgeColor}50`,
                  }}
                >
                  {String(index).padStart(2, '0')}
                </div>

                {/* Link */}
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="flex-1 ml-4 py-2 text-sm font-medium text-white hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </Link>

                {/* Right accent bar */}
                <div className="w-1 h-6 rounded-full bg-gradient-to-b from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundImage: `linear-gradient(to bottom, ${badgeColor}, ${badgeColor})` }} />
              </div>
            )
          })}
        </nav>

        {/* Divider */}
        <div className="mx-4 h-px bg-gradient-to-r from-transparent via-[#7B68EE]/20 to-transparent" />

        {/* CTA Button and Footer */}
        <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-4 p-6 bg-gradient-to-t from-black to-black/50">
          <Link
            href="/contact"
            onClick={closeMenu}
            className="block w-full rounded-lg bg-gradient-to-r from-[#FF6B35] to-[#7B68EE] px-4 py-3 text-center font-medium text-white hover:shadow-lg hover:shadow-[#FF6B35]/50 transition-all duration-300 transform hover:scale-105"
            style={{
              animation: isOpen ? 'slideUp 0.5s ease-out 0.4s both' : 'none',
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
