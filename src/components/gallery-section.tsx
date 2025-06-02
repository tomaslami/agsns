"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function GallerySection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 5

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  return (
    <section id="galeria" className="py-20 bg-gray-100 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#CA8A04] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            Galería
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestro <span className="text-[#CA8A04]">trabajo</span> en acción
          </h2>

          <p className="text-xl text-gray-700">Procesos, resultados y conocimiento compartido</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gray-300 rounded-lg aspect-video flex items-center justify-center mb-8">
            <div className="text-gray-500 text-lg">Imagen del proceso {currentSlide + 1}</div>
          </div>

          <div className="flex items-center justify-between absolute top-1/2 -translate-y-1/2 w-full px-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="bg-white/80 hover:bg-white border-gray-300 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="bg-white/80 hover:bg-white border-gray-300 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex justify-center space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`cursor-pointer w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-[#CA8A04]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
