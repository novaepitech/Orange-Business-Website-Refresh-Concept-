"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Recycle, Battery, Sun } from 'lucide-react'

const initiatives = [
  {
    icon: Leaf,
    title: "Réduction CO2",
    description: "Engagement pour la neutralité carbone d'ici 2040"
  },
  {
    icon: Recycle,
    title: "Économie circulaire",
    description: "Recyclage et reconditionnement des équipements"
  },
  {
    icon: Battery,
    title: "Efficacité énergétique",
    description: "Optimisation de la consommation d'énergie"
  },
  {
    icon: Sun,
    title: "Énergies renouvelables",
    description: "Utilisation croissante d'énergies vertes"
  }
]

export default function Sustainability() {
  return (
    <section id="sustainability" className="py-24 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Notre Engagement RSE
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Agir pour un numérique responsable et durable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <initiative.icon className="h-12 w-12 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">{initiative.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{initiative.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

