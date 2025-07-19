"use client";
import Image from "next/image";
import SlideInSection from "@/components/SlideInSection";
import Link from "next/link";

export default function Projects() {
  const image = "/images/project.png";

  return (
    <main className="w-full min-h-screen bg-[#F5F5F5] flex flex-col items-center text-black font-serif overflow-hidden dark:text-white">
      {/* Background Image */}
      <section className="relative w-full h-screen flex items-center justify-center font-serif">
        <Image
          src={image}
          alt="About Background"
          fill
          className="absolute object-cover"
          priority
        />

        {/* Hero Text */}
        <div className="relative text-center max-w-4xl px-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-bold">
            Our Construction <br /> Project
          </h1>
          <p className="text-sm sm:text-xl lg:text-xl text-white mt-4">
            From the onset till now, our mission remains centered on delivering
            projects of superior quality, always on schedule.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <SlideInSection direction="down" className="w-full">
        <section className="py-16 px-6 bg-gray-100 w-full flex justify-center">
          <div className="max-w-6xl w-full">
            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Cards */}
              {[
                {
                  title: "Property Development",
                  desc: "We offer reliable solutions for clients seeking to develop or contract properties.",
                  img: "/images/p1.png",
                  link: "/project1",
                },
                {
                  title: "Real Estate Development",
                  desc: "We excel in real estate development, delivering exceptional projects with quality and innovation.",
                  img: "/images/r2.png",
                  link: "/project1",
                },

                {
                  title: "Premium Land Sales",
                  desc: "Sinocle Nigeria Limited offers premium land sales throughout Nigeria.",
                  img: "/images/r1.png",
                  link: "/project1",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center text-center"
                >
                  {/* Image */}
                  <SlideInSection direction="left" className="w-full">
                    <Image
                      src={service.img}
                      alt={service.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover"
                    />
                  </SlideInSection>
                  {/* Content */}
                  <SlideInSection
                    direction="right"
                    className="w-full p-6 flex flex-col items-center"
                  >
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                    <p className="text-gray-600 mt-2">{service.desc}</p>
                    <Link href={service.link || "#"}>
                      <button className="mt-4 border text-black border-black px-4 py-2 text-sm">
                        LEARN MORE
                      </button>
                    </Link>
                  </SlideInSection>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SlideInSection>
    </main>
  );
}
