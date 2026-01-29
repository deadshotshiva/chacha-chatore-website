'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  image?: string
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[]
}

export function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrent((prev) => (prev + newDirection + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative w-full">
      <div className="relative h-96 overflow-hidden rounded-xl border border-[#7B68EE]/20 bg-gradient-to-br from-card to-background p-8 sm:p-12">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
            }}
            className="absolute inset-0 flex flex-col justify-center space-y-6 p-8 sm:p-12"
          >
            {/* Stars */}
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-[#FFD93D] text-[#FFD93D]" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-lg sm:text-xl font-medium text-foreground leading-relaxed">
              "{testimonials[current].quote}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4 pt-4">
              {testimonials[current].image && (
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#7B68EE]"></div>
              )}
              <div>
                <p className="font-semibold text-foreground">
                  {testimonials[current].author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[current].role} at {testimonials[current].company}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={() => paginate(-1)}
          className="rounded-lg border border-[#7B68EE]/30 bg-card p-2 hover:border-[#FF6B35] hover:bg-[#FF6B35]/10 transition-all duration-300"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5 text-foreground" />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setDirection(index > current ? 1 : -1)
                setCurrent(index)
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === current
                  ? 'w-8 bg-[#FF6B35]'
                  : 'w-2 bg-[#7B68EE]/30 hover:bg-[#7B68EE]/60'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => paginate(1)}
          className="rounded-lg border border-[#7B68EE]/30 bg-card p-2 hover:border-[#FF6B35] hover:bg-[#FF6B35]/10 transition-all duration-300"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5 text-foreground" />
        </button>
      </div>
    </div>
  )
}
