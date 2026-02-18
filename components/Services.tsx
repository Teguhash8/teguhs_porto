"use client";

import { motion } from "framer-motion";

const services = [
    {
        title: "UI/UX Design",
        description: "Crafting intuitive and high-fidelity interfaces that delight users.",
        tags: ["Figma", "Prototyping", "Design Systems"]
    },
    {
        title: "Front-end Dev",
        description: "Transforming designs into pixel-perfect, animated reality.",
        tags: ["React", "Next.js", "Tailwind CSS"]
    },
    {
        title: "Motion Design",
        description: "Adding 'soul' to the web through purposeful interactions.",
        tags: ["Framer Motion", "GSAP", "Lottie"]
    }
];

export default function Services() {
    return (
        <section id="services" className="py-24 px-6 md:px-12 bg-[#0A0A0A] text-[#F5F5F7]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-1">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-serif font-light mb-8 sticky top-24"
                    >
                        Expertise & <br /> <span className="font-sans font-bold">Services</span>
                    </motion.h2>
                </div>

                <div className="lg:col-span-2 space-y-16">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border-t border-gray-800 pt-8 group"
                        >
                            <h3 className="text-3xl font-sans font-bold mb-4 flex items-center justify-between">
                                {service.title}
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xl">↗</span>
                            </h3>
                            <p className="text-lg text-gray-400 mb-6 font-light max-w-lg">
                                {service.description}
                            </p>
                            <div className="flex gap-4 flex-wrap">
                                {service.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 border border-gray-700 rounded-full text-xs uppercase tracking-wider text-gray-400">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
