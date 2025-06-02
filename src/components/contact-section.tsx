"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    correo: "",
    mensaje: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contacto" className="py-20 bg-[#F2ECDF] scroll-m-10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-start mb-12">
            <div className="inline-block bg-[#CA8A04] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              Contacto
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Conectemos para potenciar <span className="text-[#CA8A04]">tu taller</span>
            </h2>

            <p className="text-xl text-gray-700">Consultanos sobre nuestros sistemas y soluciones técnicas</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Input
                  type="text"
                  name="nombre"
                  placeholder="Nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="bg-white border-gray-300 py-4 px-4 text-lg"
                  required
                />
              </div>
              <div>
                <Input
                  type="text"
                  name="empresa"
                  placeholder="Empresa / Taller"
                  value={formData.empresa}
                  onChange={handleChange}
                  className="bg-white border-gray-300 py-4 px-4 text-lg"
                  required
                />
              </div>
            </div>

            <div>
              <Input
                type="email"
                name="correo"
                placeholder="Correo electrónico"
                value={formData.correo}
                onChange={handleChange}
                className="bg-white border-gray-300 py-4 px-4 text-lg"
                required
              />
            </div>

            <div>
              <Textarea
                name="mensaje"
                placeholder="Mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                className="bg-white border-gray-300 py-4 px-4 text-lg min-h-32"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#CA8A04] hover:bg-[#CA8A04]/90 text-white py-4 text-lg font-medium"
            >
              Enviar consulta
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
