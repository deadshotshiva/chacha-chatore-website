'use client'

import React from "react"

import { useState } from 'react'
import { generatePageMetadata } from '@/lib/seo'
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react'

// Note: For production, you'll want to handle form submission server-side
export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, send this to your backend or email service
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-background px-4 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6 text-balance">
            Let's Talk About Your Goals
          </h1>
          <p className="text-xl text-muted-foreground text-balance leading-relaxed">
            Ready to grow your business? We'd love to hear about your marketing challenges and goals.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="rounded-lg border border-border bg-card p-8 sm:p-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
                  Get In Touch
                </h2>

                {submitted ? (
                  <div className="rounded-lg bg-primary/10 p-6 text-center">
                    <p className="text-lg font-semibold text-primary mb-2">
                      Thank you for reaching out!
                    </p>
                    <p className="text-muted-foreground">
                      We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Tell Us About Your Project *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        placeholder="Tell us about your marketing goals, current challenges, and what you're looking to achieve..."
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="w-full rounded-lg bg-primary px-6 py-3 text-base font-medium text-primary-foreground hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                      >
                        Send Message
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>

                    <p className="text-sm text-muted-foreground text-center">
                      We'll get back to you within 24 hours. No spam, just genuine interest in your success.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Email */}
                <div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">Email</h3>
                      <a
                        href="mailto:hello@ccproduction.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        hello@ccproduction.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">Phone</h3>
                      <a
                        href="tel:+15551234567"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">Location</h3>
                      <p className="text-muted-foreground">
                        Remote First<br />
                        Serving clients worldwide
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">Response Time</h3>
                      <p className="text-muted-foreground">
                        Within 24 hours<br />
                        Monday - Friday
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="rounded-lg border border-border bg-card p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
                  <ul className="space-y-3">
                    <li>
                      <a href="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                        View Services
                      </a>
                    </li>
                    <li>
                      <a href="/case-studies" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                        See Case Studies
                      </a>
                    </li>
                    <li>
                      <a href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                        Learn About Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {[
              {
                q: 'How quickly will you respond to my inquiry?',
                a: 'We typically respond within 24 hours during business hours. For urgent matters, feel free to call us directly.'
              },
              {
                q: 'Do you offer free consultations?',
                a: 'Yes! We offer a free initial strategy call to discuss your goals, challenges, and how we might be able to help.'
              },
              {
                q: 'What if I\'m not ready to commit to a long-term partnership?',
                a: 'We offer flexible engagement models. You can start with a project-based engagement, and many clients transition to ongoing partnerships as they see results.'
              },
              {
                q: 'Do you require a long-term contract?',
                a: 'We typically prefer 3+ month partnerships for meaningful optimization and results. However, we\'re happy to discuss arrangements that work for your situation.'
              },
              {
                q: 'How do you handle clients in different time zones?',
                a: 'We\'re remote-first and work with clients worldwide. We use asynchronous communication, regular async updates, and schedule calls at times convenient for your team.'
              },
              {
                q: 'What\'s your typical project timeline?',
                a: 'Strategy and setup typically takes 1-2 weeks. Meaningful results usually start showing within 2-4 weeks. We optimize continuously from there.'
              }
            ].map((item, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-foreground mb-3">{item.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6 text-balance">
            Let's Build Something Great Together
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
            Whether you're just exploring or ready to get started, we'd love to hear from you. Fill out the form above or reach out directly.
          </p>
        </div>
      </section>
    </div>
  )
}
