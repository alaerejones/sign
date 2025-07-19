"use client";
import Image from "next/image";
import Link from "next/link";
import SlideInSection from "@/components/SlideInSection";
import ClientReviews from "@/components/ClientReviews";
import { useState, useEffect, useRef } from "react";
import {
  CircleDollarSign,
  CheckCircle,
  UsersRound,
} from "lucide-react";

const images = ["/images/1.png", "/images/2.png", "/images/3.png"];

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

  const statRefs = useRef([]);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          if (!hasAnimated) {
            statRefs.current.forEach((ref, i) => {
              const end = parseInt(stats[i].value);
              let current = 0;
              const increment = () => {
                if (ref) {
                  current++;
                  ref.innerText = ${current}${stats[i].value.includes("%") ? "%" : "+"};
                  if (current < end) {
                    setTimeout(increment, 20);
                  }
                }
              };
              increment();
            });
            setHasAnimated(true);
          }
        }
      },
      { threshold: 0.6 }
    );

    statRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => observer.disconnect();
  }, [hasAnimated]);

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
              At Sinocle Nigeria Limited, we provide full-service construction,
              architectural design, real estate development, and infrastructure
              solutions <br className="hidden sm:block" />
              executed with precision, superior quality, and timely delivery.
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
        </div>
      </section>

          {/* Services Cards Section */}
      <SlideInSection direction="left" className="">
        <div className="relative -mt-[50px] px-4 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white shadow-lg relative before:absolute before:top-0 before:left-0 before:right-0 before:h-2 before:bg-[#0D8C6D]">
              <div className="grid grid-cols-1 md:grid-cols-3 relative">
                {[
                  {
                    icon: "/images/engineer.svg",
                    title: "Construction/Real Estate Development",
                    description:
                      "As a leading construction and real estate development company in Nigeria, we provide full-service solutions including site preparation, land acquisition, structural construction, property development, and finishing. Our team handles residential buildings, commercial projects, and public infrastructure across West Africa.",
                  },
                  {
                    icon: "/images/ruler.svg",
                    title: "Architectural Design",
                    description:
                      "We offer professional architectural design services in Nigeria, Lome (Togo), Ghana and other African countries, delivering functional and visually compelling building plans and designs that meet regulatory standards and client goals.",
                  },
                  {
                    icon: "/images/consultation.svg",
                    title: "Consultation",
                    description:
                      "Our construction and real estate consultation service covers project planning, building approvals, cost estimation, environmental impact checks, and investment analysis.",
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

                {/* Vertical Dividers */}
                <div className="hidden md:block absolute left-1/3 top-1/2 -translate-y-1/2 w-px h-16 bg-gray-900"></div>
                <div className="hidden md:block absolute left-2/3 top-1/2 -translate-y-1/2 w-px h-16 bg-gray-900"></div>
              </div>
            </div>
          </div>
        </div>
      </SlideInSection>

      {/* Stats Section */}
      <SlideInSection direction="down" className="">
        <section className="w-full max-w-6xl mx-auto py-20 px-4">
          <p className="text-left font-serif text-[16px] font-thin mb-10 w-[70%] text-[#999999]">
            At Sinocle, we don't just offer solutions; we craft collaborative
            roadmaps tailored to your unique needs, ensuring your buildings not
            only thrive in the present but also remain resilient in the face of
            future challenges.
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
                  <h2 className="text-4xl font-bold mb-2 text-black">
                    <span ref={(el) => (statRefs.current[index] = el)}>0</span>
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
          <ClientReviews />
        </section>
      </SlideInSection>
    </>
  );
}