import Image from "next/image";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import { BarChart3, Building2, Scale } from "lucide-react";
import { services } from "../data/services";
import { ServiceFeature } from "@/components/ServiceFeature";

export default function ServicesPage() {
    return (
        <main className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center">
                <Image
                    src="/images/4.png"
                    alt="Services Background"
                    fill
                    className="object-cover brightness-50"
                    priority
                />
                <div className="relative z-10 container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row justify-between gap-12">
                        {/* Left Side - Hero Content */}
                        <div className="lg:w-1/2 mt-16 md:mt-0">
                            <h1 className="text-3xl md:text-5xl lg:text-6xl text-white font-serif font-bold mb-6">
                                Our Construction Services
                            </h1>
                            <p className="text-base md:text-lg lg:text-xl text-white max-w-2xl mb-8">
                                From the onset till now, our mission remains centered on delivering
                                projects of superior quality, always on schedule.
                            </p>
                            <button className="bg-emerald-600 text-white px-6 py-4 text-lg hover:bg-emerald-700 transition-colors">
                                Book Consultation
                            </button>
                        </div>

                        {/* Right Side - What We Do */}
                        <div className="lg:w-1/2">
                            <h2 className="text-emerald-400 text-2xl md:text-3xl font-serif mb-10">
                                What We Do
                            </h2>

                            <div className="space-y-8">
                                {/* Converting features to links */}
                                <Link href="/services/construction" className="block hover:opacity-80 transition-opacity">
                                    <ServiceFeature
                                        icon={<Building2 className="text-emerald-400" size={32} />}
                                        title="Property Development and Contract"
                                        description="We offer reliable solutions for clients seeking to develop or contract properties"
                                    />
                                </Link>

                                <Link href="/services/planning" className="block hover:opacity-80 transition-opacity">
                                    <ServiceFeature
                                        icon={<BarChart3 className="text-emerald-400" size={32} />}
                                        title="Real Estate Development"
                                        description="We excel in real estate development, delivering exceptional projects that meet the highest standards of quality and innovation."
                                    />
                                </Link>

                                <Link href="/services/consulting" className="block hover:opacity-80 transition-opacity">
                                    <ServiceFeature
                                        icon={<Scale className="text-emerald-400" size={32} />}
                                        title="Premium Land Sales in Nigeria"
                                        description="Sinocle Nigeria Limited offers premium land sales throughout Nigeria."
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 px-6">
                <div className="container mx-auto">
                    <div className="flex flex-col space-y-20">
                        {services.map((service, index) => (
                            <Link
                                key={service.id}
                                href={`/services/${service.id}`}
                                className="block hover:opacity-90 transition-opacity"
                            >
                                <ServiceCard
                                    service={service}
                                    imagePosition={index % 2 === 0 ? 'left' : 'right'}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}