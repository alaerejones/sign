"use client";
import Image from "next/image";
import React, { useState } from "react";
import SlideInSection from "@/components/SlideInSection";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";

const ContactPage = () => {
    const heroImage = "/images/p1.png";
    const faqImage = "/images/faq.png";
    const [formData, setFormData] = React.useState({
        fullName: "",
        email: "",
        phone: "",
        message: "",
    });

    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const faqs = [
        {
            question: "What services do you offer?",
            answer: "We offer a comprehensive range of construction services including residential construction, commercial buildings, renovations, infrastructure development, and project management. Our expertise covers everything from initial planning to final execution."
        },
        {
            question: "How do I get an estimate for my project?",
            answer: "To get an estimate, simply fill out our contact form with your project details or call us directly. Our team will review your requirements and schedule a consultation to provide a detailed estimate within 48-72 hours."
        },
        {
            question: "What is the typical timeline for a construction project?",
            answer: "Project timelines vary based on scope and complexity. Small renovations might take 2-3 months, while larger commercial projects can take 6-18 months. We'll provide a detailed timeline during the initial consultation."
        },
        {
            question: "What type of warranty do you offer on your work?",
            answer: "We offer a comprehensive warranty package that includes a 1-year warranty on workmanship and longer warranties on specific materials and systems. All warranties are clearly detailed in our contract."
        },
        {
            question: "How do you ensure the safety of the construction site?",
            answer: "We maintain strict safety protocols, including regular safety training, proper equipment maintenance, site supervision, and adherence to all local and national safety regulations. Our sites are regularly inspected and monitored."
        },
        {
            question: "How do you handle budget overruns?",
            answer: "We maintain transparent communication about costs throughout the project. Any potential overruns are discussed immediately with detailed explanations and options. We work proactively to prevent unexpected costs through careful planning."
        }
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const message = `New Contact Request:\nName: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
        const phoneNumber = "2348104064868";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <main className="w-full text-black">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-start font-serif">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <Image
                    src={heroImage}
                    alt="Contact Background"
                    fill
                    className="absolute object-cover"
                    priority
                />
                <div className="relative z-20 text-white pl-6 md:pl-12 lg:pl-24">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                        Contact Us
                    </h1>
                    <p className="text-sm sm:text-xl lg:text-xl mt-4 max-w-2xl">
                        From the onset till now, our mission remains centered on delivering
                        projects of superior quality, always on schedule.
                    </p>
                    <button
                        className="mt-8 bg-emerald-600 text-white px-8 py-3 rounded hover:bg-emerald-700 transition-colors"
                    >
                        Send Message
                    </button>
                </div>
            </section>

            {/* Contact Form Section */}
            <SlideInSection direction="up" className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-serif mb-4">Get In Touch</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Form */}
                        <div>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full p-3 border border-gray-300 rounded"
                                        value={formData.fullName}
                                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full p-3 border border-gray-300 rounded"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Phone number"
                                        className="w-full p-3 border border-gray-300 rounded"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        required
                                    />
                                </div>
                                <div>
                                    <textarea
                                        placeholder="Message"
                                        rows={6}
                                        className="w-full p-3 border border-gray-300 rounded"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="bg-emerald-600 text-white px-8 py-3 rounded hover:bg-emerald-700 transition-colors"
                                >
                                    Send Message via WhatsApp
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-6">
                            <div>
                                <p className="text-gray-600 mb-4">
                                    Your gateway to personalized assistance and expert guidance.
                                    Whether you have inquiries about our services.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold mb-2">Address:</h3>
                                <p className="text-gray-600">Oshimili South, Asaba, Delta State</p>
                            </div>
                            <div>
                                <h3 className="font-bold mb-2">Email:</h3>
                                <p className="text-gray-600">sinoclelmtc@gmail.com</p>
                            </div>
                            <div>
                                <h3 className="font-bold mb-2">Phone:</h3>
                                <p className="text-gray-600">(234) 8104-064-868</p>
                            </div>
                            <div className="flex gap-4 mt-6">
                                <a
                                    href="#facebook"
                                    className="text-gray-600 hover:text-blue-600 transition-colors"
                                >
                                    <FaFacebook size={24} />
                                </a>
                                <a
                                    href="#instagram"
                                    className="text-gray-600 hover:text-pink-600 transition-colors"
                                    style={{ background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                                >
                                    <FaInstagram size={24} />
                                </a>
                                <a
                                    href="#twitter"
                                    className="text-gray-600 hover:text-blue-400 transition-colors"
                                >
                                    <FaTwitter size={24} />
                                </a>
                                <a
                                    href="#youtube"
                                    className="text-gray-600 hover:text-red-600 transition-colors"
                                >
                                    <FaYoutube size={24} />
                                </a>
                                <a
                                    href="#whatsapp"
                                    className="text-gray-600 hover:text-green-500 transition-colors"
                                >
                                    <FaWhatsapp size={24} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </SlideInSection>

            {/* FAQ Section */}
            <SlideInSection direction="up" className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-serif mb-8">Frequently Asked Questions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* FAQ Image */}
                        <div className="relative w-full h-[600px] rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src={faqImage}
                                alt="FAQ Section Image"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* FAQ Questions */}
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
                                >
                                    <button
                                        className="w-full p-4 text-left font-medium flex justify-between items-center"
                                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    >
                                        <span className="flex-1 pr-4">{faq.question}</span>
                                        <span className="text-gray-500 flex-shrink-0">
                                            {openFaq === index ? (
                                                <ChevronUp className="h-5 w-5" />
                                            ) : (
                                                <ChevronDown className="h-5 w-5" />
                                            )}
                                        </span>
                                    </button>
                                    {openFaq === index && (
                                        <div className="p-4 pt-0 border-t">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </SlideInSection>
        </main>
    );
};

export default ContactPage;