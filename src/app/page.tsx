"use client";
import Image from "next/image";
import Link from "next/link";
import SlideInSection from "@/components/SlideInSection";
import ClientReviews from "@/components/ClientReviews";
import { useState, useEffect } from "react";
import {
  Building2,
  Briefcase,
  Scale,
  ClipboardCheck,
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
              Building The Future, One <br className="hidden sm:block" />{" "}
              Project at a Time
            </h1>
            <p className="text-sm sm:text-lg lg:text-2xl text-white mt-4">
              From the onset till now, our mission remains centered on
              delivering <br className="hidden sm:block" />
              projects of superior quality, always on schedule.
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
                      description: "Quality services rendered to all planning.",
                    },
                    {
                      icon: "/images/ruler.svg",
                      title: "Architectural Design",
                      description: "Quality services rendered to all planning.",
                    },
                    {
                      icon: "/images/consultation.svg",
                      title: "Consultation",
                      description: "Quality services rendered to all planning.",
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
                    Who We are{" "}
                    <span className="inline-block w-12 h-[2px] bg-black ml-2"></span>
                  </p>
                  <h1 className="text-3xl md:text-4xl lg:text-[50px] font-bold leading-tight text-black">
                    Sincole Nigeria Limited
                  </h1>
                  <div className="space-y-4 text-black">
                    <p className="text-base md:text-lg">
                      At Sinocle Nigeria Limited, we are proud to be the leading
                      real estate company in Nigeria, offering a comprehensive
                      range of services in real estate development, property
                      development and contract, real estate consulting, and land
                      sales. With our headquarters situated in Asaba, Delta
                      State, Nigeria, we operate across the nation, serving
                      clients with professionalism, expertise, and integrity.
                    </p>
                    <p className="text-base md:text-lg">
                      At the core of our organization lies a cohesive and
                      accomplished team of professionals, brought together by a
                      shared passion for bringing dreams to life. We take
                      immense pride in our ability to transform your ideas into
                      tangible realities, crafted with precision and attention
                      to detail.
                    </p>
                  </div>
                  <Link href="/about">
                    <button className="bg-[#0D8C6D] text-white text-base md:text-lg px-6 py-2 font-medium hover:bg-[#38d1ab] transition-colors mt-6 flex items-center">
                      More About Us
                      <span className="ml-2 font-serif text-lg leading-none">
                        ↗
                      </span>
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
                    What We Do{" "}
                    <span className="inline-block w-12 h-[2px] bg-white ml-2"></span>
                  </h5>
                  <h2 className="text-4xl font-bold mt-2">Our Services</h2>
                  <p className="text-lg mt-4">
                    Our range of services is crafted to deliver strategic
                    insights and foster sustainable growth for businesses across
                    various industries.
                  </p>
                  <button className="mt-6 border border-white text-white py-2 px-6 hover:bg-white hover:text-[#0D8C6D] transition">
                    View All Services{" "}
                    <span className="ml-2 font-serif text-[16px] leading-[10px]">
                      ↗
                    </span>
                  </button>
                </div>
              </SlideInSection>

              <SlideInSection direction="left" className="">
                <div className="space-y-6">
                  {[
                    {
                      icon: (
                        <Building2
                          size={28}
                          strokeWidth={1.5}
                          className="text-white"
                        />
                      ),
                      title: "Residential",
                      desc: "Whether it's crafting custom-built homes or revitalizing existing properties.",
                    },
                    {
                      icon: (
                        <Briefcase
                          size={28}
                          strokeWidth={1.5}
                          className="text-white"
                        />
                      ),
                      title: "Commercial",
                      desc: "From sleek office complexes to bustling retail spaces.",
                    },
                    {
                      icon: (
                        <Scale
                          size={28}
                          strokeWidth={1.5}
                          className="text-white"
                        />
                      ),
                      title: "Government",
                      desc: "We tackle projects of all sizes and complexity with dedication and expertise.",
                    },
                    {
                      icon: (
                        <ClipboardCheck
                          size={28}
                          strokeWidth={1.5}
                          className="text-white"
                        />
                      ),
                      title: "Consultation",
                      desc: "Consultants assist in navigating the complexities.",
                    },
                  ].map((service, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 border-t border-white pt-4"
                    >
                      <span>{service.icon}</span>
                      <div>
                        <h4 className="text-xl font-semibold">
                          {service.title}
                        </h4>
                        <p className="text-sm">{service.desc}</p>
                      </div>
                    </div>
                  ))}
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
