"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

const services = [
    {
        title: "UI/UX Design",
        number: "01",
        description: "Crafting intuitive, high-fidelity interfaces that delight users and drive engagement. From wireframes to polished prototypes.",
        items: ["User Interface Design", "User Experience Research", "Design Systems", "Interactive Prototyping", "Wireframing & Flows"],
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Front-End Development",
        number: "02",
        description: "Transforming designs into pixel-perfect, performant web applications with modern frameworks and best practices.",
        items: ["React / Next.js", "TypeScript", "Tailwind CSS", "Framer Motion Animations", "Performance Optimization"],
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Motion & Interaction Design",
        number: "03",
        description: "Adding soul to the web through purposeful micro-interactions, page transitions, and scroll-driven animations.",
        items: ["Micro-interactions", "Page Transitions", "Scroll Animations", "GSAP / Framer Motion", "WebGL Effects"],
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Brand Identity & Strategy",
        number: "04",
        description: "Creating cohesive aesthetic systems that resonate with minimalist luxury and stand out in a crowded digital landscape.",
        items: ["Visual Identity", "Brand Guidelines", "Digital Strategy", "Content Direction", "SEO & Analytics"],
        image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&q=80&w=800",
    },
];

const process = [
    { step: "01", title: "DISCOVER", desc: "Understanding your brand, goals, and audience to build a solid foundation for every decision." },
    { step: "02", title: "DESIGN", desc: "Crafting visual languages that communicate your message with clarity, beauty, and intentional style." },
    { step: "03", title: "DEVELOP", desc: "Building robust, scalable, and beautifully performant digital solutions from the ground up." },
    { step: "04", title: "DELIVER", desc: "Testing, iterating, launching, and ensuring your product succeeds and thrives in the real world." },
];

const clients = [
    "CODEWAVE SOLUTIONS",
    "PIXELCRAFT DEVELOPERS",
    "NEXTGEN CODERS",
    "BYTELOGIC SYSTEMS",
    "DIGITAL HORIZON",
];

export default function ServicesPage() {
    return (
        <main className="bg-[#050505] min-h-screen text-[#F5F5F7]">
            <Header />

            {/* Hero */}
            <section className="pt-40 pb-20 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-sm font-sans font-medium uppercase tracking-[0.3em] text-white/40 mb-6"
                    >
                        What I Do
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.1 }}
                        className="text-6xl md:text-8xl lg:text-9xl font-sans font-bold tracking-tighter mb-8 uppercase leading-[0.9]"
                    >
                        Capabilities
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="max-w-lg text-lg font-sans font-light text-white/50 leading-relaxed"
                    >
                        Every project we deliver is a reflection of our commitment to quality, designed to inspire and drive success.
                    </motion.p>
                </div>
            </section>

            {/* Services List */}
            <section className="px-6 md:px-12 pb-24">
                <div className="max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: index * 0.05 }}
                            className="border-t border-white/10 py-16 md:py-20"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                                {/* Number + Title */}
                                <div className="lg:col-span-4">
                                    <span className="text-sm font-sans font-medium text-white/30 uppercase tracking-widest block mb-4">
                                        ({service.number})
                                    </span>
                                    <h3 className="text-3xl md:text-5xl font-sans font-bold tracking-tight uppercase leading-tight">
                                        {service.title}
                                    </h3>
                                </div>

                                {/* Description + Items */}
                                <div className="lg:col-span-4">
                                    <p className="text-base font-sans text-white/50 leading-relaxed mb-8">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-3">
                                        {service.items.map((item, i) => (
                                            <li key={i} className="text-sm font-sans text-white/70 flex items-center justify-between border-b border-white/5 pb-3 group cursor-default">
                                                <span>{item}</span>
                                                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs text-cyan-400">→</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Image */}
                                <div className="lg:col-span-4">
                                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-white/5">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Client / Partners List (inspired by Olive reference) */}
            <section className="px-6 md:px-12 py-20 border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        <div className="lg:col-span-5">
                            <p className="text-base font-sans font-light text-white/50 leading-relaxed max-w-sm">
                                Teguhash Studio brings your vision to life with stunning designs that reverberate through time, creating waves of creativity and success for your brand.
                            </p>
                            <a href="/contact" className="inline-flex items-center gap-2 mt-8 border border-white/20 rounded-full px-5 py-2 text-sm font-sans font-medium hover:bg-white hover:text-black transition-colors duration-300">
                                Let&apos;s discuss <span>↗</span>
                            </a>
                        </div>
                        <div className="lg:col-span-7">
                            {clients.map((client, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="flex items-center justify-between py-5 border-b border-white/10 group cursor-pointer"
                                >
                                    <span className="text-sm md:text-base font-sans font-bold tracking-wider uppercase">{client}</span>
                                    <span className="text-xs font-sans font-medium text-white/40 group-hover:text-cyan-400 transition-colors">
                                        Read More ↗
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="px-6 md:px-12 py-24 bg-[#0A0A0A]">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-sans font-bold tracking-tighter mb-20 uppercase"
                    >
                        Process
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {process.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="border-t border-white/10 pt-8"
                            >
                                <span className="text-xs font-sans font-medium text-white/30 block mb-4">{item.step}</span>
                                <h3 className="text-lg font-sans font-bold tracking-wide uppercase mb-4">{item.title}</h3>
                                <p className="text-sm font-sans text-white/40 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Work CTA */}
            <section className="px-6 md:px-12 py-24">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-6xl md:text-8xl font-sans font-bold tracking-tighter uppercase leading-[0.9]"
                        >
                            FEATURED<br />WORK
                        </motion.h2>
                    </div>
                    <div className="flex flex-col items-start lg:items-end gap-6">
                        <p className="max-w-sm text-sm font-sans text-white/50 leading-relaxed text-left lg:text-right">
                            As a front end developer using modern ideas, simplicity design and universal visual identification tailored to dedicated and current market.
                        </p>
                        <a href="/work" className="inline-flex items-center gap-2 border border-white/20 rounded-full px-5 py-2 text-sm font-sans font-medium hover:bg-white hover:text-black transition-colors duration-300">
                            Let&apos;s discuss <span>↗</span>
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
