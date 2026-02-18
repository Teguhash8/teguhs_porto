"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
    {
        title: "Design",
        items: ["User Interface (UI)", "User Experience (UX)", "Design Systems", "Prototyping", "Wireframing"]
    },
    {
        title: "Development",
        items: ["Front-end Development", "React / Next.js", "Tailwind CSS", "CMS Integration", "Performance Optimization"]
    },
    {
        title: "Strategy",
        items: ["Brand Identity", "Digital Strategy", "Content Direction", "SEO Best Practices"]
    }
];

export default function ServicesPage() {
    return (
        <main className="bg-[#F5F5F7] min-h-screen text-[#0A0A0A]">
            <Header />
            {/* Note: Header needs adjustment for light mode or mix-blend-mode handling */}

            <section className="pt-40 pb-20 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl md:text-8xl font-serif font-medium mb-12"
                    >
                        Capabilities
                    </motion.h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="border-t border-gray-300 pt-8"
                            >
                                <h3 className="text-3xl font-bold mb-8">{service.title}</h3>
                                <ul className="space-y-4">
                                    {service.items.map((item, i) => (
                                        <li key={i} className="text-xl text-gray-600 font-light border-b border-gray-200 pb-2 flex items-center justify-between group cursor-default">
                                            <span>{item}</span>
                                            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-sm">→</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mt-32 p-12 bg-[#0A0A0A] text-[#F5F5F7]"
                    >
                        <h3 className="text-4xl font-serif mb-6">Process</h3>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 font-mono text-sm leading-relaxed text-gray-400">
                            <div>
                                <span className="block text-white mb-2">01. DISCOVER</span>
                                Understanding your brand, goals, and audience to build a solid foundation.
                            </div>
                            <div>
                                <span className="block text-white mb-2">02. DESIGN</span>
                                Crafting visual languages that communicate your message with clarity and style.
                            </div>
                            <div>
                                <span className="block text-white mb-2">03. DEVELOP</span>
                                Building robust, scalable, and performant digital solutions.
                            </div>
                            <div>
                                <span className="block text-white mb-2">04. DELIVER</span>
                                Testing, launching, and ensuring your product succeeds in the wild.
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
