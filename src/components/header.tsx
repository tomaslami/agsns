import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center">
        <div className="flex items-center justify-start space-x-2 basis-[25%]">
          <div className="w-12 h-8 bg-gray-300 rounded"></div>
        </div>

        <nav className="hidden md:flex items-center justify-center basis-[45%] space-x-8 mx-4">
          <Link href="#inicio" className="text-gray-700 hover:text-gray-900 font-medium">
            Inicio
          </Link>
          <Link href="#servicios" className="text-gray-700 hover:text-gray-900 font-medium">
            Servicios
          </Link>
          <Link href="#galeria" className="text-gray-700 hover:text-gray-900 font-medium">
            Galería
          </Link>
          <Link href="#contacto" className="text-gray-700 hover:text-gray-900 font-medium">
            Contacto
          </Link>
        </nav>

        <div className="basis-[30%] flex justify-end">
          <Button className="bg-[#CA8A04] hover:bg-[#CA8A04]/90 text-white px-6 py-2 rounded-md font-medium">
            Contáctanos
          </Button>
        </div>
      </div>
    </header>
  )
}
