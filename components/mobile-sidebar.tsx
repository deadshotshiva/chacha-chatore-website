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
        className={`fixed left-0 top-16 bottom-0 w-64 bg-gradient-to-b from-background via-background to-[#1a1a1a] border-r border-[#7B68EE]/30 shadow-xl z-40 md:hidden transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{
          willChange: 'transform',
        }}
      >
        {/* Navigation Links */}
        <nav className="flex flex-col space-y-1 p-4">
          {navigationLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="px-4 py-3 rounded-lg text-base font-medium text-foreground hover:bg-[#FF6B35]/10 hover:text-[#FF6B35] transition-all duration-300 relative group"
              style={{
                animation: isOpen ? `slideIn 0.5s ease-out ${index * 0.05}s both` : 'none',
              }}
            >
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-full bg-gradient-to-b from-[#FF6B35] to-[#7B68EE] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="absolute bottom-6 left-4 right-4">
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
