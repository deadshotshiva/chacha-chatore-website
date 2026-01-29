'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function AnimatedHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="relative min-h-screen overflow-hidden px-4 py-24 sm:px-6 lg:px-8 flex items-center">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-gradient-to-br from-[#FF6B35]/30 to-[#FFD93D]/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float"></div>
        <div className="absolute top-40 -right-4 w-72 h-72 bg-gradient-to-br from-[#7B68EE]/30 to-[#00B4D8]/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float" style={{ animationDelay: '-2s' }}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-br from-[#52B69A]/30 to-[#4A90E2]/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float" style={{ animationDelay: '-4s' }}></div>

        {/* Grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,_107,_53,_0.02)_1px,_transparent_1px),linear-gradient(90deg,_rgba(255,_107,_53,_0.02)_1px,_transparent_1px)] bg-[50px_50px]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex">
            <div className="group inline-flex items-center space-x-2 rounded-full border border-[#FF6B35]/30 bg-[#FF6B35]/5 px-4 py-2 hover:border-[#FF6B35]/60 hover:bg-[#FF6B35]/10 transition-all duration-300">
              <span className="inline-block h-2 w-2 rounded-full bg-[#FF6B35] animate-pulse"></span>
              <span className="text-sm font-medium text-foreground">Now Accepting New Clients</span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight text-balance">
              <span className="gradient-text">Performance Marketing</span> & Creative Production
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            We combine data-driven performance marketing with creative excellence to deliver measurable results. From Meta Ads to video production, we handle your entire digital strategy.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#FF6B35] to-[#FFD93D] px-8 py-4 text-base font-semibold text-[#0a0a0a] overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF6B35]/50"
            >
              <span className="relative z-10 flex items-center">
                Get Free Strategy Call
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFD93D] to-[#FF6B35] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            <Link
              href="/case-studies"
              className="group relative inline-flex items-center justify-center rounded-lg border-2 border-[#7B68EE]/50 bg-transparent px-8 py-4 text-base font-semibold text-foreground hover:border-[#7B68EE] hover:bg-[#7B68EE]/10 hover:shadow-lg hover:shadow-[#7B68EE]/20 transition-all duration-300"
            >
              View Case Studies
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 pt-8"
          >
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '95%', label: 'Client Satisfaction' },
              { number: '$50M+', label: 'Revenue Generated' },
            ].map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 rounded-lg border border-[#7B68EE]/20 bg-[#7B68EE]/5 p-4 hover:border-[#FF6B35]/50 hover:bg-[#FF6B35]/5 transition-all duration-300"
              >
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#FF6B35] to-[#7B68EE] bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground text-center">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
