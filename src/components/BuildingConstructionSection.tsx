import React from "react";
import { ArrowRight } from "lucide-react";

const BuildingConstructionSection = () => {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 after:content-[''] after:block after:w-24 after:h-1 after:bg-emerald-600 after:mt-6">
            Building Construction
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Content */}
          <div className="lg:w-2/3 space-y-8">
            <p className="text-gray-600 text-lg leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for
              &apos;lorem ipsum&apos; will uncover many web sites still in their
              infancy. Various versions have evolved over the years, sometimes
              by accident, sometimes on purpose (injected humour and the like).
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for
              &apos;lorem ipsum&apos; will uncover many web sites still in their
              infancy. Various versions have evolved over the years, sometimes
              by accident, sometimes on purpose (injected humour and the like).
            </p>
          </div>

          {/* Right Card */}
          <div className="lg:w-1/3">
            <div className="bg-emerald-600 text-white p-10 rounded-lg shadow-xl h-full">
              <h3 className="text-3xl font-serif mb-8">
                Get an appointment with our Expert
              </h3>

              <p className="text-lg leading-relaxed mb-12 text-gray-100">
                Cras tincidunt tellus at mi tristique rhoncus. Etiam dapibus
                rutrum leo consectetur accumsan. Vivamus viverra ante turpis.
              </p>

              <button className="flex items-center text-white text-lg font-medium group hover:opacity-90 transition-opacity">
                Book Now
                <ArrowRight
                  className="ml-3 transition-transform group-hover:translate-x-2"
                  size={24}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildingConstructionSection;
