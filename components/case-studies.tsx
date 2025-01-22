"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const caseStudies = [
  {
    title: "Transformation Cloud",
    client: "Grande Distribution",
    description: "Migration complète vers le cloud et modernisation des applications",
    image: "/case-study-1.jpg"
  },
  {
    title: "IA & Analytics",
    client: "Industrie Manufacturière",
    description: "Optimisation de la production grâce à l'intelligence artificielle",
    image: "/case-study-2.jpg"
  },
  {
    title: "Digitalisation",
    client: "Services Financiers",
    description: "Création d'une plateforme digitale innovante",
    image: "/case-study-3.jpg"
  }
]

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos Réalisations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment nous accompagnons nos clients dans leur transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{study.title}</CardTitle>
                  <CardDescription className="text-orange-600 font-medium">
                    {study.client}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{study.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

