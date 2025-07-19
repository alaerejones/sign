import BuildingConstructionSection from "@/components/BuildingConstructionSection";
import Image from "next/image";
import Link from "next/link";
import OtherServices from "@/components/OtherServices";
import ProjectShowcase from "@/components/ProjectShowcase";
import { BarChart3, Building2, Scale } from "lucide-react";
import { notFound } from "next/navigation";
import { services } from "../../data/services";
import { ServiceFeature } from "@/components/ServiceFeature";

// Updated interface for Next.js 15 page props
interface PageProps {
    params: Promise<{ id: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ServiceDetailsPage({ params }: PageProps) {
    const resolvedParams = await params;
    const service = services.find((s) => s.id === resolvedParams.id);

    if (!service) {
        notFound();
    }

    return (
        <main className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center">
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover brightness-50"
                    priority
                />
                <div className="relative z-10 container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row justify-between gap-12">
                        {/* Left Side - Hero Content */}
                        <div className="lg:w-1/2">
                            <Link
                                href="/services"
                                className="inline-flex items-center text-emerald-400 mb-6 hover:text-emerald-300 transition-colors"
                            >
                                ← Back to Services
                            </Link>
                            <h1 className="text-4xl md:text-6xl text-white font-serif font-bold mb-4">
                                {service.title}
                            </h1>
                            <p className="text-lg md:text-xl text-white max-w-2xl mb-8">
                                {service.description}
                            </p>
                            <button className="bg-emerald-600 text-white px-6 py-3 hover:bg-emerald-700 transition-colors">
                                Book Consultation
                            </button>
                        </div>

                        {/* Right Side - What We Do */}
                        <div className="lg:w-1/2">
                            <h2 className="text-emerald-400 text-3xl font-serif mb-8">
                                Key Features
                            </h2>

                            <div className="space-y-8">
                                <ServiceFeature
                                    icon={<Building2 className="text-emerald-400" size={32} />}
                                    title="Expert Team"
                                    description="Our experienced professionals ensure the highest quality standards"
                                />

                                <ServiceFeature
                                    icon={<BarChart3 className="text-emerald-400" size={32} />}
                                    title="Project Management"
                                    description="Efficient project management to deliver on time and within budget"
                                />

                                <ServiceFeature
                                    icon={<Scale className="text-emerald-400" size={32} />}
                                    title="Quality Assurance"
                                    description="Rigorous quality control processes throughout the project lifecycle"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ProjectShowcase />
            <BuildingConstructionSection />
            <OtherServices currentServiceId={service.id} />
        </main>
    );
}