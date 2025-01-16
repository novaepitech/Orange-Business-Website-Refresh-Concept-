"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "Orange Business nous a permis d'accélérer notre transformation numérique avec des solutions innovantes et un accompagnement de qualité.",
    author: "Directeur Digital",
    company: "Groupe industriel international"
  },
  {
    quote: "La expertise d'Orange Business en matière de cybersécurité nous a permis de sécuriser nos données et nos systèmes de manière optimale.",
    author: "DSI",
    company: "Leader de la distribution"
  },
  {
    quote: "L'accompagnement d'Orange Business dans notre migration cloud a été déterminant pour la réussite de notre projet.",
    author: "CTO",
    company: "Entreprise de services financiers"
  }
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les témoignages de nos clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <Quote className="h-8 w-8 text-orange-600" />
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-500">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

