'use client'

import { motion } from 'framer-motion'

interface ProcessStep {
  number: string
  title: string
  description: string
  color: string
}

interface ProcessTimelineProps {
  steps: ProcessStep[]
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
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
      className="relative"
    >
      {/* Timeline line */}
      <div className="absolute left-6 top-12 bottom-0 w-1 bg-gradient-to-b from-[#FF6B35]/50 via-[#7B68EE]/50 to-transparent"></div>

      <div className="space-y-8 md:space-y-12">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative pl-20 md:pl-24"
          >
            {/* Animated circle */}
            <motion.div
              className="absolute -left-3 top-1 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-lg"
              style={{ backgroundColor: step.color }}
              whileHover={{ scale: 1.2, boxShadow: `0 0 25px ${step.color}80` }}
              transition={{ duration: 0.3 }}
            >
              {step.number}
            </motion.div>

            {/* Content card */}
            <motion.div
              className="rounded-xl border border-[#7B68EE]/20 bg-gradient-to-br from-card to-card p-6 hover:border-[#FF6B35]/50 transition-all duration-300"
              whileHover={{
                boxShadow: `0 0 30px ${step.color}40`,
                borderColor: step.color,
              }}
            >
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>

              {/* Accent line */}
              <motion.div
                className="mt-4 h-1 rounded-full"
                style={{ backgroundColor: step.color }}
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              ></motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
