'use client'

import { useEffect } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface Stat {
  value: number
  label: string
  suffix?: string
}

interface StatsCounterProps {
  stats: Stat[]
}

function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const motionValue = useMotionValue(0)
  const displayValue = useTransform(motionValue, (latest) => {
    return Math.floor(latest).toString()
  })
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true })

  useEffect(() => {
    if (inView) {
      motionValue.set(value)
    }
  }, [inView, motionValue, value])

  return (
    <span ref={ref} className="text-4xl sm:text-5xl font-bold">
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  )
}

export function StatsCounter({ stats }: StatsCounterProps) {
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

  const colors = [
    { bg: 'from-[#FF6B35]', text: 'text-[#FF6B35]' },
    { bg: 'from-[#FFD93D]', text: 'text-[#FFD93D]' },
    { bg: 'from-[#00B4D8]', text: 'text-[#00B4D8]' },
  ]

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="grid grid-cols-1 md:grid-cols-3 gap-8"
    >
      {stats.map((stat, index) => {
        const color = colors[index % colors.length]
        return (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative"
            whileHover={{ scale: 1.05 }}
          >
            {/* Background glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${color.bg} to-transparent opacity-10 rounded-xl blur-lg`}></div>

            {/* Card */}
            <div className="relative z-10 rounded-xl border border-[#7B68EE]/20 bg-gradient-to-br from-card to-background p-8 text-center hover:border-[#FF6B35]/50 transition-all duration-300">
              <div className={`inline-block bg-gradient-to-br ${color.bg} to-[#7B68EE] bg-clip-text text-transparent mb-4`}>
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-muted-foreground text-lg font-medium">{stat.label}</p>
            </div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
