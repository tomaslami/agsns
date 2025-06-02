import { Button } from "@/components/ui/button"
import Image from "next/image"

const services = [
  {
    title: "Sobre nosotros",
    description:
      "Recubrimientos metálicos abrió hace en el 2010 ofreciendo una variedad de productos galvánicos garantizados, diseñados para satisfacer las necesidades de pequeñas empresas y talleres que buscan agregar valor y durabilidad a sus productos. Nuestras formulaciones están para proporcionar resultados óptimos y consistentes en una variedad de aplicaciones.",
    icon: "/icons/Users.png",
  },
  {
    title: "Alta pureza",
    description:
      "Formulaciones con ingredientes de gran pureza que garantizan acabados confiables, estables y de alta calidad.",
    icon: "/icons/Lightning.png",
  },
  {
    title: "Sistemas compactos",
    description:
      "Mini sistemas de baño galvánico con agitación, calentadores eléctricos para espacios reducidos y producción controlada.",
    icon: "/icons/Medal.png",
  },
  {
    title: "Seguridad",
    description:
      "Productos seguros y fáciles de usar, con instrucciones claras que minimizan riesgos y optimizan la producción.",
    icon: "/icons/ShieldCheck.png",
  },
  {
    title: "Formación internacional",
    description: "Tutoriales y recursos educativos sobre galvanoplastia, pensados especialmente para el artesano.",
    icon: "/icons/GraduationCap.png",
  },
]

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-12 bg-[#F8F3E9] scroll-m-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <div className="inline-block bg-[#CA8A04] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
            Servicios
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Excelencia en <span className="text-[#CA8A04]">recubrimientos metálicos</span>
          </h2>

          <p className="text-base text-gray-700">
            Soluciones técnicas especializadas para el sector joyero y talleres artesanales
          </p>
        </div>

        <div className="flex justify-between items-stretch w-full gap-6 mb-6">
          <div className="bg-white p-8 rounded-lg shadow-sm relative min-h-[400px] w-2/3 flex flex-col">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">{services[0].title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-12 w-1/2">{services[0].description}</p>
            <div className="absolute bottom-0 right-0 p-8">
              <div className="w-72 h-72">
                <Image
                  src={services[0].icon || "/placeholder.svg"}
                  alt=""
                  width={192}
                  height={192}
                  className="w-full h-full object-contain "
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm relative w-1/3 min-h-[400px] flex flex-col">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">{services[1].title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-12">{services[1].description}</p>
            <div className="flex flex-1 items-center justify-center">
              <div className="w-48 h-48">
                <Image
                  src={services[1].icon || "/placeholder.svg"}
                  alt=""
                  width={192}
                  height={192}
                  className="w-full h-full object-contain "
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {services.slice(2).map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm relative min-h-[400px] flex flex-col">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">{service.description}</p>
              <div className="flex justify-center items-end">
                <div className="w-48 h-48">
                  <Image
                    src={service.icon || "/placeholder.svg"}
                    alt=""
                    width={192}
                    height={192}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-[#CA8A04] hover:bg-[#B7820A] text-white px-6 py-2 rounded-md font-medium text-sm">
            Contáctanos
            <span className="ml-2">→</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
