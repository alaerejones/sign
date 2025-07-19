"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ClientReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const testimonials = [
    {
      image: "/images/t1.png",
      review:
        "Choosing Sincole was one of the best decisions we made for our company. Their expertise in building construction is unmatched, and their ability to tailor solutions to our specific needs has been instrumental. The collaborative and transparent nature of their team creates an environment of trust and innovation.",
      name: "Philip Graydon",
      position: "Lexin Movies",
    },
    {
      image: "/images/t1.png",
      review:
        "Working with Sincole has transformed our vision into reality. Their attention to detail and commitment to excellence is remarkable.",
      name: "Sarah Johnson",
      position: "Tech Solutions Inc.",
    },
    // Add more testimonials as needed
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-black font-bold mb-2">Clients Review</h2>
          <div className="w-12 h-0.5 bg-[#0D8C6D] mx-auto"></div>
        </div>

        <div className="flex items-center justify-center gap-8 lg:gap-16">
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-[#0D8C6D] hover:text-[#0D8C6D] transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="max-w-2xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 relative">
                {isMounted && (
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="absolute object-cover transition-opacity duration-1000"
                    priority={currentIndex === 0}
                  />
                )}
              </div>
              <div className="flex-1">
                <p className="text-gray-600 italic mb-4">
                  &quot;{testimonials[currentIndex].review}&quot;
                </p>
                <div className="text-sm">
                  <p className="font-semibold text-gray-800">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-gray-500">
                    {testimonials[currentIndex].position}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-[#0D8C6D] hover:text-[#0D8C6D] transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
