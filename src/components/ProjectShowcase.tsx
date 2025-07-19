import Image from "next/image";

const ProjectShowcase = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Modern building with orange accent */}
                    <div className="aspect-[4/5] relative group">
                        <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-gray-900/0 transition-all duration-300"></div>
                        <Image
                            src="/images/project_show.png"
                            alt="Modern architectural building with orange accent"
                            fill
                            className="object-cover rounded-lg shadow-lg"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                            priority
                        />
                    </div>

                    {/* White geometric building */}
                    <div className="aspect-[4/5] relative group">
                        <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-gray-900/0 transition-all duration-300"></div>
                        <Image
                            src="/images/project_show1.png"
                            alt="White geometric modern building"
                            fill
                            className="object-cover rounded-lg shadow-lg"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                        />
                    </div>

                    {/* Flatiron style building */}
                    <div className="aspect-[4/5] relative group">
                        <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-gray-900/0 transition-all duration-300"></div>
                        <Image
                            src="/images/project_show2.png"
                            alt="Historic flatiron style building"
                            fill
                            className="object-cover rounded-lg shadow-lg"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectShowcase;