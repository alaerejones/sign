import Link from "next/link";
import { services } from "../app/data/services";
import Image from "next/image";

interface OtherServicesProps {
  currentServiceId: (typeof services)[number]["id"];
}

export default function OtherServices({
  currentServiceId,
}: OtherServicesProps) {
  const otherServices = services.filter(
    (service) => service.id !== currentServiceId
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-serif font-bold mb-12 text-center">
          Explore Our Other Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherServices.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.id}`}
              className="group block"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform group-hover:-translate-y-1">
                <div className="aspect-w-16 aspect-h-9 relative">
                  <div className="w-full h-48 relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
