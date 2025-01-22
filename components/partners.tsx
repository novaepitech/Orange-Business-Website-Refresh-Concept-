"use client"

import { motion } from "framer-motion"

const partners = [
  {
    name: "Microsoft",
    logo: "/microsoft-logo.svg"
  },
  {
    name: "AWS",
    logo: "/aws-logo.svg"
  },
  {
    name: "Google Cloud",
    logo: "/google-cloud-logo.svg"
  },
  {
    name: "Cisco",
    logo: "/cisco-logo.svg"
  },
  {
    name: "SAP",
    logo: "/sap-logo.svg"
  },
  {
    name: "IBM",
    logo: "/ibm-logo.svg"
  }
]

export default function Partners() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos Partenaires Technologiques
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des alliances stratégiques pour vous offrir les meilleures solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

