'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface CaseStudy {
  title: string
  description: string
  metric: string
  metricValue: string
  industry: string
  color: string
}

interface CaseStudyGridProps {
  studies: CaseStudy[]
}

export function CaseStudyGrid({ studies }: CaseStudyGridProps) {
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
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max"
    >
      {studies.map((study, index) => {
        const isWide = index % 5 === 0
        const isTall = index % 7 === 0

        return (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`${isWide ? 'md:col-span-2' : ''} ${isTall ? 'md:row-span-2' : ''}`}
          >
            <Link href="#case-study">
              <div className="group relative h-full overflow-hidden rounded-xl border border-[#7B68EE]/20 bg-gradient-to-br from-card to-background p-8 hover:border-[#FF6B35]/50 transition-all duration-300 cursor-pointer">
                {/* Background gradient on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-${study.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between space-y-6">
                  {/* Header */}
                  <div className="space-y-3">
                    <div className="inline-flex items-center rounded-full bg-[#FF6B35]/10 px-3 py-1 text-xs font-semibold text-[#FF6B35]">
                      {study.industry}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-[#FF6B35] transition-colors duration-300">
                      {study.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      {study.description}
                    </p>
                  </div>

                  {/* Metric highlight */}
                  <div className="space-y-2 rounded-lg bg-[#FF6B35]/5 p-4 border border-[#FF6B35]/20">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      {study.metric}
                    </p>
                    <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#FF6B35] to-[#7B68EE] bg-clip-text text-transparent">
                      {study.metricValue}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="inline-flex items-center text-sm font-semibold text-[#FF6B35] opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>

                {/* Glow effect */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-br from-${study.color} to-${study.color}/50 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500 -z-10`}
                ></div>
              </div>
            </Link>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
