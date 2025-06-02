import { Phone, Mail, Clock } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className=" py-12">
      <div className="container mx-auto px-4">
        <div className="flex gap-8">
          <div className="basis-[45%]">
            <div className=" rounded-lg p-6 mb-6">
              <div className="w-[70%] h-16 bg-gray-400 rounded mb-4"></div>
              <p className="text-[#CA8A04] text-sm leading-relaxed">
                Desde 2006, venimos acompañando a los recubridores metálicos con productos y talleres educativos.
                Ofrecemos las mejores soluciones para que puedas hacer crecer tu negocio.
              </p>
              <p className="text-[#CA8A04] text-sm mt-4 font-medium">Sigamos creciendo juntos!</p>
            </div>
          </div>

          <div className="basis-[20%]">
            <h3 className="font-bold text-[#CA8A04] mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2 text-gray-600">
              <Link href={"/inicio"}>
              <li className="font-semibold">Inicio</li>
              </Link>
              <Link href={"/servicios"}>
              <li className="font-semibold">Servicios</li>
              </Link>
              <Link href={"/galeria"}>
              <li className="font-semibold">Galería</li>
              </Link>
              <Link href={"/contacto"}>
              <li className="font-semibold">Contacto</li>
              </Link>
            </ul>
          </div>

          <div className="basis-[35%]">
            <h3 className="font-bold text-[#CA8A04] mb-4">Contacto</h3>
            <div className="space-y-3 text-gray-600 text-sm">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-[#CA8A04]" />
                <span>+54 11 4896 4304</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-[#CA8A04]" />
                <span>gerencia@recubrimientosaceros.com</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 text-[#CA8A04]" />
                <span>Lunes/viernes 9AM - 6PM en horario de Argentina</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-6 text-center text-gray-500 text-sm">
          © 2025 Recubrimientos ACEROS. Todos los derechos reservados. Desarrollado por <Link href="https://synera.com.ar" target="_blank" className="text-[#CA8A04] hover:text-[#A16207] font-bold">Synera</Link>
        </div>
      </div>
    </footer>
  )
}
