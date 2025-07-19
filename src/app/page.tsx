"use client";
import Image from "next/image";
import Link from "next/link";
import SlideInSection from "@/components/SlideInSection";
import ClientReviews from "@/components/ClientReviews";
import { useState, useEffect } from "react";
import {
  CircleDollarSign,
  CheckCircle,
  UsersRound,
} from "lucide-react";

const images = ["/images/1.png", "/images/2.png", "/images/3.png"];

const projects = [
  {
    image: "/images/r1.png",
    title: "High-Rise Construction",
    description:
      "An advanced skyscraper project focusing on innovative architecture and structural stability.",
  },
  {
    image: "/images/r2.png",
    title: "Modern Residential Complex",
    description:
      "A cutting-edge residential estate designed for sustainability and community living.",
  },
  {
    image: "/images/r3.png",
    title: "Urban Infrastructure",
    description:
      "Revitalizing city landscapes with modern bridges, roads, and eco-friendly urban planning.",
  },
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      icon: CircleDollarSign,
      value: "24+",
      description:
        "Years of collective experience in providing strategic consultancy services",
    },
    {
      icon: CheckCircle,
      value: "95%",
      description:
        "Client satisfaction rate, reflecting our commitment to exceeding expectations",
    },
    {
      icon: UsersRound,
      value: "20+",
      description:
        "A dedicated team of professionals, bringing diverse skills & expertise to innovative solutions",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Background Image Slider */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt="Background"
              fill
              className="absolute object-cover transition-opacity duration-100"
              style={{ opacity: index === currentImage ? 1 : 0 }}
              priority={index === 0}
            />
          ))}
        </div>

        {/* Hero Content Container */}
        <div className="relative h-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          {/* Hero Text */}
          <div className="absolute top-1/2 -translate-y-1/2">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white font-bold">
              Delivering Exceptional
 <br className="hidden sm:block" />{" "}
              Construction and Real Estate Solutions Across West Africa
            </h1>
            <p className="text-sm sm:text-lg lg:text-2xl text-white mt-4">
              At Sinocle Nigeria Limited, we provide full-service construction, architectural design, real estate development, and infrastructure solutions <br className="hidden sm:block" />
               executed with precision, superior quality, and timely delivery.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-row gap-3 relative">
              <button className="bg-white text-black px-4 py-2 w-32 sm:w-40 lg:w-auto font-medium hover:bg-gray-100 transition-colors">
                Get A Quote
              </button>
              <button className="border border-white text-white px-4 py-2 w-32 sm:w-40 lg:w-auto font-medium bg-[#0D8C6D] hover:bg-[#38d1ab] transition-colors">
                Contact Us
              </button>
            </div>
          </div>

          {/* Helmet Image */}
          {/* <div className="absolute top-1/2 right-0 -translate-y-1/2 hidden md:block">
            <Image
              src="/images/helmetguy.png"
              alt="Construction Professional"
              width={380}
              height={800}
            />
          </div> */}
        </div>
      </section>

      {/* Main Content */}
      <main className="bg-white">
        {/* Services Cards Section */}
        <SlideInSection direction="left" className="">
          <div className="relative -mt-[50px] px-4 mb-16">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white shadow-lg relative before:absolute before:top-0 before:left-0 before:right-0 before:h-2 before:bg-[#0D8C6D]">
                <div className="grid grid-cols-1 md:grid-cols-3 relative">
                  {/* Service Cards */}
                  {[
                    {
                      icon: "/images/engineer.svg",
                      title: "Construction/Real Estate Development",
                      description: "As a leading construction and real estate development company in Nigeria, we provide full-service solutions including site preparation, land acquisition, structural construction, property development, and finishing. Our team handles residential buildings, commercial projects, and public infrastructure across West Africa.",
                    },
                    {
                      icon: "/images/ruler.svg",
                      title: "Architectural Design",
                      description: "We offer professional architectural design services in Nigeria, Lome (Togo), Ghana and other African countries, delivering functional and visually compelling building plans and designs that meet regulatory standards and client goals. Whether for private homes, commercial complexes, public or government infrastructure projects, we ensure your vision is turned into an efficient, buildable design.",
                    },
                    {
                      icon: "/images/consultation.svg",
                      title: "Consultation",
                      description: "Our construction and real estate consultation service cover project planning, building approvals, cost estimation, environmental impact checks, and investment analysis. We guide property owners, investors, and developers across Nigeria and West Africa in making informed, profitable decisions.",
                    },
                  ].map((service, index) => (
                    <div
                      key={index}
                      className="p-8 text-center border-t md:border-t-0"
                    >
                      <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <Image
                          src={service.icon}
                          alt={service.title}
                          width={40}
                          height={40}
                        />
                      </div>
                      <h3 className="text-xl text-black font-semibold mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {service.description}
                      </p>
                    </div>
                  ))}

                  {/* Dividers */}
                  <div className="hidden md:block absolute left-1/3 top-1/2 -translate-y-1/2 w-px h-16 bg-gray-900"></div>
                  <div className="hidden md:block absolute left-2/3 top-1/2 -translate-y-1/2 w-px h-16 bg-gray-900"></div>
                </div>
              </div>
            </div>
          </div>
        </SlideInSection>

        {/* Who we are section */}
        <section className="py-16">
  <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">
      <SlideInSection direction="right" className="w-full lg:w-1/2">
        <div className="relative w-full">
          <Image
            src="/images/frame.png"
            alt="Company Overview"
            width={900}
            height={600}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </SlideInSection>

      <SlideInSection direction="left" className="w-full lg:w-1/2">
        <div className="text-left font-serif space-y-4">
          <p className="text-base text-[#0D8C6D] md:text-lg font-bold flex items-center">
            Leading Construction and Real Estate Company in Nigeria, Ghana & Togo
            <span className="inline-block w-12 h-[2px] bg-black ml-2"></span>
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[50px] font-bold leading-tight text-black">
            Sinocle Nigeria Limited
          </h1>
          <div className="space-y-4 text-black text-base md:text-lg">
            <p>
              Sinocle Nigeria Limited is a trusted construction and real estate company operating across Nigeria, Ghana, and Togo, with active projects in Lagos, Abuja, Port Harcourt, Asaba, Accra, and Lomé. Headquartered in Asaba, Delta State, we specialize in:
            </p>
            <ul className="list-disc list-inside">
              <li>Building construction (residential, commercial, and public infrastructure)</li>
              <li>Real estate development and investment projects</li>
              <li>Architectural design and structural planning</li>
              <li>Land acquisition, property consulting, and infrastructure delivery</li>
            </ul>
            <p>
              We serve private clients, real estate investors, institutions, and government bodies, helping them bring bold ideas to life with precision, professionalism, and integrity in property design and development.
            </p>
            <p>
              Whether you’re looking for a construction company, a real estate developer or an architectural design firm in Asaba, Lagos, Abuja, Lomé, Accra or other cities, Sinocle Nigeria Limited is your trusted partner across West Africa.
            </p>
            <p>
              <strong>Want to know what makes us different?</strong> 
            </p>
          </div>
          <Link href="/about">
            <button className="bg-[#0D8C6D] text-white text-base md:text-lg px-6 py-2 font-medium hover:bg-[#38d1ab] transition-colors mt-6 flex items-center">
              More About Us
              <span className="ml-2 font-serif text-lg leading-none">↗</span>
            </button>
          </Link>
        </div>
      </SlideInSection>
    </div>
  </div>
</section>

        {/* What we do Section */}
<section className="bg-[#0D8C6D] text-white py-16">
  <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
    <div className="grid md:grid-cols-2 gap-10">
      <SlideInSection direction="right" className="">
        <div>
          <h5 className="uppercase tracking-wide font-semibold">
            What We Do
            <span className="inline-block w-12 h-[2px] bg-white ml-2"></span>
          </h5>
          <h2 className="text-4xl font-bold mt-2">Our Services</h2>
          <p className="text-lg mt-4">
            Sinocle Nigeria Limited offers full-spectrum construction and real estate services in Nigeria, Ghana, and Togo — including architectural design, infrastructure development, project management, and property consulting. Our team is committed to delivering quality, innovation, and compliance across every project.
          </p>
          <Link href="/services">
            <button className="mt-6 border border-white text-white py-2 px-6 hover:bg-white hover:text-[#0D8C6D] transition">
              View All Services <span className="ml-2 font-serif">↗</span>
            </button>
          </Link>
        </div>
      </SlideInSection>

      <SlideInSection direction="left" className="">
        <div className="space-y-6">
          <div className="flex items-start gap-4 border-t border-white pt-4">
            <span className="text-2xl text-white">🏛</span>
            <div>
              <h4 className="text-xl font-semibold">Architectural Design Services</h4>
              <p className="text-sm">
                Innovative and functional architectural design solutions, including concept development, building plans, 3D visualization, and regulatory approvals.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 border-t border-white pt-4">
            <span className="text-2xl text-white">🏗</span>
            <div>
              <h4 className="text-xl font-semibold">Building Construction</h4>
              <p className="text-sm">
                Comprehensive building construction services — from foundation to finishing — for residential, commercial, and institutional projects.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 border-t border-white pt-4">
            <span className="text-2xl text-white">🏘</span>
            <div>
              <h4 className="text-xl font-semibold">Real Estate Development & Management</h4>
              <p className="text-sm">
                From land acquisition and feasibility analysis to development execution and property management, we deliver end-to-end real estate services.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 border-t border-white pt-4">
            <span className="text-2xl text-white">🛣</span>
            <div>
              <h4 className="text-xl font-semibold">Infrastructure Development</h4>
              <p className="text-sm">
                Construction of roads, drainages, erosion control systems, and other civil works — delivered with technical precision and sustainability in mind.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 border-t border-white pt-4">
            <span className="text-2xl text-white">📋</span>
            <div>
              <h4 className="text-xl font-semibold">Project Management & Supervision</h4>
              <p className="text-sm">
                End-to-end project coordination including budgeting, procurement, contractor supervision, and timeline management for successful project delivery.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 border-t border-white pt-4">
            <span className="text-2xl text-white">🧭</span>
            <div>
              <h4 className="text-xl font-semibold">Consultation & Advisory Services</h4>
              <p className="text-sm">
                Strategic advisory on construction permits, investment analysis, BOQs, planning approvals, and development regulations across West Africa.
              </p>
            </div>
          </div>

          <div className="border-t border-white pt-6">
            <h4 className="text-xl font-semibold mb-2">🛠 Specialty Services</h4>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Renovation & Remodeling</li>
              <li>BOQ Preparation & Cost Estimation</li>
              <li>Property & Facility Management</li>
              <li>Interior Design & Space Planning</li>
            </ul>
          </div>
        </div>
      </SlideInSection>
    </div>
  </div>
</section>

        {/* Recent Projects Section */}
        <SlideInSection direction="left" className="">
          <section className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900">
                  Recent Projects
                </h2>
                <div className="mt-2 flex justify-center">
                  <span className="inline-block w-12 h-[2px] bg-[#0D8C6D]"></span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-10">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-md rounded-lg overflow-hidden"
                  >
                    <div className="relative w-full h-48">
                      <Image
                        src={project.image}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                      />
                    </div>
                    <div className="p-6 text-center">
                      <h4 className="text-lg font-semibold text-gray-800">
                        {project.title}
                      </h4>
                      <p className="text-[#999999] text-sm mt-2">
                        {project.description}
                      </p>
                      <Link href="/projects">
                        <button className="mt-4 border border-gray-800 text-gray-800 py-2 px-4 hover:bg-gray-800 hover:text-white transition">
                          View Project
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-10">
                <Link href="/projects">
                  <button className="border border-gray-800 text-gray-800 py-2 px-6 hover:bg-gray-800 hover:text-white transition">
                    View All{" "}
                    <span className="ml-2 font-serif text-[16px] leading-[10px]">
                      ↗
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </SlideInSection>

        {/* Stats Section */}
        <SlideInSection direction="down" className="">
          <section className="w-full max-w-6xl mx-auto py-12 px-4 ">
            <p className="text-left font-serif text-[16px] font-thin mb-10 w-[70%] text-[#999999]">
              At Sincole, we don&apos;t just offer solutions; we craft
              collaborative roadmaps tailored to your unique needs, ensuring
              your buildings not only thrives in the present but also remains
              resilient in the face of future challenges.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="mb-4">
                      <Icon className="w-12 h-12 text-gray-600" />
                    </div>
                    <h2 className="text-4xl font-bold mb-2 text-black ">
                      {stat.value}
                    </h2>
                    <p className="text-[#999999]">{stat.description}</p>
                  </div>
                );
              })}
            </div>
          </section>
        </SlideInSection>

        {/* Client Reviews Section */}
        <SlideInSection direction="down" className="">
          <section className="py-16 bg-white">
            {/* Client Reviews Section */}
            <ClientReviews />
          </section>
        </SlideInSection>
      </main>
    </>
  );
}
