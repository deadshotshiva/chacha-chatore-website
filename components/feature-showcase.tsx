'use client'

import { motion } from 'framer-motion'

interface Feature {
  title: string
  description: string
  icon: string
  color: string
}

interface FeatureShowcaseProps {
  features: Feature[]
  title?: string
  subtitle?: string
}

export function FeatureShowcase({ features, title, subtitle }: FeatureShowcaseProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
    <div className="space-y-12">
      {title && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">{title}</h2>
          {subtitle && <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
        </motion.div>
      )}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {features.map((feature, index) => (
          <motion.div key={index} variants={itemVariants}>
            <div className="group relative overflow-hidden rounded-xl border border-[#7B68EE]/20 bg-gradient-to-br from-card/50 to-background p-8 hover:border-[#FF6B35]/50 transition-all duration-300 h-full">
              {/* Hover background */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              {/* Content */}
              <div className="relative z-10 space-y-4">
                {/* Icon */}
                <motion.div
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-${feature.color} to-${feature.color}/70 text-2xl`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-foreground group-hover:text-[#FF6B35] transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Accent bar */}
                <motion.div
                  className={`h-1 rounded-full bg-gradient-to-r from-${feature.color} to-${feature.color}/50`}
                  initial={{ width: 0 }}
                  whileInView={{ width: '3rem' }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>

              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-br from-${feature.color} to-transparent rounded-xl opacity-0 group-hover:opacity-15 blur transition-opacity duration-500 -z-10`}></div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
