"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, Network, Brain, Lock, Globe, Users } from 'lucide-react'

const expertiseAreas = [
  {
    icon: Database,
    title: "Cloud Computing",
    description: "Infrastructure cloud sécurisée et évolutive"
  },
  {
    icon: Network,
    title: "Réseaux",
    description: "Solutions réseaux nouvelle génération"
  },
  {
    icon: Brain,
    title: "Intelligence Artificielle",
    description: "Solutions IA pour optimiser vos processus"
  },
  {
    icon: Lock,
    title: "Cybersécurité",
    description: "Protection avancée de vos données"
  },
  {
    icon: Globe,
    title: "Digital Workplace",
    description: "Environnement de travail collaboratif"
  },
  {
    icon: Users,
    title: "Conseil",
    description: "Accompagnement stratégique personnalisé"
  }
]

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Notre Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une expertise complète pour accompagner votre transformation numérique
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <area.icon className="h-8 w-8 text-orange-600" />
                    <CardTitle className="text-xl">{area.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{area.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

