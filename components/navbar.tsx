"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <img
                className="h-8 w-auto"
                src="/orange-business-logo.svg"
                alt="Orange Business"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="#services" className="text-gray-700 hover:text-orange-600">
              Services
            </Link>
            <Link href="#expertise" className="text-gray-700 hover:text-orange-600">
              Expertise
            </Link>
            <Link href="#case-studies" className="text-gray-700 hover:text-orange-600">
              Réalisations
            </Link>
            <Link href="#sustainability" className="text-gray-700 hover:text-orange-600">
              RSE
            </Link>
            <Button variant="default" className="bg-orange-600 hover:bg-orange-700">
              Contactez-nous
            </Button>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden", isOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="#services"
            className="block px-3 py-2 text-gray-700 hover:text-orange-600"
          >
            Services
          </Link>
          <Link
            href="#expertise"
            className="block px-3 py-2 text-gray-700 hover:text-orange-600"
          >
            Expertise
          </Link>
          <Link
            href="#case-studies"
            className="block px-3 py-2 text-gray-700 hover:text-orange-600"
          >
            Réalisations
          </Link>
          <Link
            href="#sustainability"
            className="block px-3 py-2 text-gray-700 hover:text-orange-600"
          >
            RSE
          </Link>
          <Button variant="default" className="w-full bg-orange-600 hover:bg-orange-700 mt-4">
            Contactez-nous
          </Button>
        </div>
      </div>
    </nav>
  )
}

