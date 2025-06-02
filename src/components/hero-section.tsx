import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="inicio" className="min-h-screen bg-gray-200 flex items-center justify-center scroll-m-10">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-block bg-[#CA8A04] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            ACEROS
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Recubrimientos de precisión
            <br />
            para <span className="text-[#CA8A04]">JOYEROS EXIGENTES</span>
          </h1>

          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Durabilidad, estética y seguridad técnica en cada producto
          </p>

          <Button className="bg-[#CA8A04] hover:bg-[#CA8A04]/90 text-white px-8 py-4 rounded-md font-medium text-lg inline-flex items-center gap-2">
            Conoce nuestros sistemas
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

    </section>
  )
}
