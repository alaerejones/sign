"use client";
import Image from "next/image";
import SlideInSection from "@/components/SlideInSection";
import ClientReviews from "@/components/ClientReviews";

const projects = [
  {
    image: "/images/rp1.png",
    title: "Service Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, et egesind bibendum adipiscing et est, fermentum.",
  },
  {
    image: "/images/rp2.png",
    title: "Service Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, et egesind bibendum adipiscing et est, fermentum.",
  },
  {
    image: "/images/rp3.png",
    title: "Service Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, et egesind bibendum adipiscing et est, fermentum.",
  },
];

export default function Projects() {
  return (
    <main className="w-full min-h-screen bg-[#F5F5F5] text-black font-serif overflow-hidden dark:text-white">
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="/images/pro1.png"
          alt="About Background"
          fill
          className="absolute object-cover"
          priority
        />
        <div className="relative h-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="absolute top-1/2 -translate-y-1/2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-bold">
              Toscana Hotel <br /> Project
            </h1>
            <p className="text-sm sm:text-xl lg:text-xl text-white mt-4">
              From the onset till now, our mission remains centered on
              delivering <br />
              projects of superior quality, always on schedule.
            </p>
          </div>
        </div>
      </section>

      {/* About Project Section */}
      <SlideInSection direction="down" className="">
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              About this Project
            </h2>
            <div className="w-12 h-1 bg-[#0D8C6D] mt-2 mb-4"></div>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.{" "}
              <br />
              Proin cursus, dolor a mollis consectetur, risus dolor fermentum{" "}
              <br />
              massa, a commodo elit dui sit amet risus.
            </p>
            <ul className="text-gray-600 mt-4 space-y-1 text-sm md:text-base">
              <li>• Maecenas ornare nisl</li>
              <li>• A tortor ultrices bibendum</li>
              <li>• Nulla fermentum</li>
              <li>• Metus quis</li>
              <li>• Sodales tristique</li>
            </ul>

            {/* Project Image */}
            <div className="w-full py-12 aspect-[16/9] relative">
              <Image
                src="/images/pr.png"
                alt="Modern architectural home"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Split Content Section */}
            <SlideInSection direction="down" className="">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 py-16">
                <div className="w-full md:w-1/2 relative aspect-[4/3]">
                  <Image
                    src="/images/pr1.png"
                    alt="Modern architectural design"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit consectetur adipiscing elit. Nullam
                    lectus erat, consectetur eu sapien eget rhoncus consectetur
                    sem. Proin cursus, dolor a mollis consectetur, risus dolor
                    fermentum massa, a commodo elit dui sit amet risus. Maecenas
                    ornare nisl a tortor ultrices bibendum.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Lectus erat, consectetur eu sapien eget rhoncus consectetur
                    sem. Proin cursus, dolor a mollis consectetur, risus dolor
                    fermentum massa, a commodo elit dui sit amet risus. Maecenas
                    ornare nisl a tortor ultrices bibendum.
                  </p>
                </div>
              </div>
            </SlideInSection>
          </div>
        </section>
      </SlideInSection>

      {/* Related Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <SlideInSection direction="down" className="">
              <h2 className="text-3xl text-black font-bold mb-2">
                Related Projects
              </h2>
            </SlideInSection>
            <div className="w-24 h-0.5 bg-[#0D8C6D] mx-auto"></div>
          </div>

          <SlideInSection direction="up" className="">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-white shadow-md">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {project.description}
                    </p>
                    <button className="text-black border border-black px-6 py-2 text-sm hover:bg-black hover:text-white transition-colors">
                      LEARN MORE
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </SlideInSection>
          <div className="text-center mt-12">
            <button className="inline-flex items-center text-black border border-black px-8 py-3 hover:bg-black hover:text-white transition-colors">
              View All
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <SlideInSection direction="down" className="">
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <ClientReviews />
          </div>
        </section>
      </SlideInSection>
    </main>
  );
}
