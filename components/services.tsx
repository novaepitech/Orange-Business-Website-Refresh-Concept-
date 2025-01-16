"use client"

import { motion } from "framer-motion"
import { Cloud, Shield, Cpu, LineChart } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description: "Solutions cloud sécurisées et évolutives adaptées à vos besoins"
  },
  {
    icon: Shield,
    title: "Cybersécurité",
    description: "Protection complète de vos données et systèmes d'information"
  },
  {
    icon: Cpu,
    title: "Intelligence Artificielle",
    description: "Solutions IA innovantes pour optimiser vos processus"
  },
  {
    icon: LineChart,
    title: "Transformation Digitale",
    description: "Accompagnement personnalisé dans votre évolution numérique"
  }
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des services numériques innovants pour répondre aux enjeux de votre entreprise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-orange-600 mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

