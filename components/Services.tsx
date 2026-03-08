"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const services = [
    {
        title: "UI/UX DESIGN",
        description: "Crafting intuitive and high-fidelity interfaces that delight users.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80",
    },
    {
        title: "FRONT-END DEV",
        description: "Transforming designs into pixel-perfect, animated reality.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80",
    },
    {
        title: "MOTION DESIGN",
        description: "Adding 'soul' to the web through purposeful interactions.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80",
    },
    {
        title: "BRAND IDENTITY",
        description: "Creating aesthetic systems that resonate with minimalist luxury.",
        image: "https://images.unsplash.com/photo-1600100397608-f010f36f6d62?auto=format&fit=crop&q=80",
    },
    {
        title: "WEBGL & 3D",
        description: "Exploring spatial interfaces and immersive visual computing.",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80",
    }
];

export default function Services() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section id="services" className="relative py-32 md:py-48 px-6 md:px-12 bg-[#050505] text-[#F5F5F7] min-h-screen flex flex-col justify-center overflow-hidden">

            {/* Global background image reveal based on hover */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-30 z-0">
                {services.map((service, index) => (
                    <motion.img
                        key={index}
                        src={service.image}
                        alt={service.title}
                        className="absolute w-[60%] lg:w-[40%] object-cover block mx-auto aspect-video rounded-lg"
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{
                            opacity: hoveredIndex === index ? 1 : 0,
                            scale: hoveredIndex === index ? 1 : 0.8,
                            rotate: hoveredIndex === index ? 0 : (index % 2 === 0 ? 5 : -5)
                        }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto flex flex-col relative z-10 w-full">

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-xs tracking-[0.3em] font-sans font-bold uppercase text-white/50 mb-16 md:mb-24"
                >
                    Expertise & Services
                </motion.h2>

                <div className="flex flex-col w-full border-t border-white/10">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative flex flex-col md:flex-row md:items-center justify-between py-8 md:py-12 border-b border-white/10 cursor-pointer"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <h3 className="text-4xl md:text-6xl lg:text-[7rem] font-sans font-bold tracking-tighter leading-none text-white/30 group-hover:text-white transition-colors duration-500 uppercase m-0 z-10 mix-blend-difference">
                                {service.title}
                            </h3>

                            {/* Hover reveal description */}
                            <div className="md:w-1/3 flex justify-end mt-4 md:mt-0 z-10">
                                <p className="text-sm md:text-base font-sans font-medium text-white/0 group-hover:text-white/80 transition-colors duration-500 max-w-xs text-left md:text-right mix-blend-difference">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
