'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface Service {
  slug: string
  title: string
  description: string
}

interface ServicesGridProps {
  services: Service[]
}

export function ServicesGrid({ services }: ServicesGridProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  const colors = [
    { border: '[#FF6B35]', bg: '[#FF6B35]', shadow: '[#FF6B35]' },
    { border: '[#FFD93D]', bg: '[#FFD93D]', shadow: '[#FFD93D]' },
    { border: '[#00B4D8]', bg: '[#00B4D8]', shadow: '[#00B4D8]' },
    { border: '[#7B68EE]', bg: '[#7B68EE]', shadow: '[#7B68EE]' },
    { border: '[#52B69A]', bg: '[#52B69A]', shadow: '[#52B69A]' },
  ]

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {services.map((service, index) => {
        const color = colors[index % colors.length]
        return (
          <motion.div key={service.slug} variants={itemVariants}>
            <Link href={`/services/${service.slug}`}>
              <div className="group relative overflow-hidden rounded-xl border border-transparent bg-gradient-to-br from-background to-background p-8 transition-all duration-500 hover:border-[#FF6B35]/50 cursor-pointer h-full">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${color.bg}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                {/* Animated border */}
                <div className={`absolute inset-0 rounded-xl border-2 border-${color.border}/0 group-hover:border-${color.border}/30 transition-all duration-500`}></div>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  {/* Icon circle */}
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-${color.bg} to-${color.bg}/80 text-white text-xl font-bold group-hover:scale-110 transition-transform duration-300`}>
                    {String.fromCharCode(65 + (index % 26))}
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-bold bg-gradient-to-r from-${color.bg} to-${color.bg}/70 bg-clip-text text-transparent group-hover:from-${color.bg} group-hover:to-${color.bg}/50 transition-all duration-300`}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <div className={`inline-flex items-center text-sm font-semibold text-${color.bg} opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300`}>
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>

                {/* Glow effect on hover */}
                <div className={`absolute -inset-1 bg-gradient-to-r from-${color.bg} to-${color.shadow} rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500 -z-10`}></div>
              </div>
            </Link>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
