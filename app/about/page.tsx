"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

const skills = [
    { name: "React / Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Framer Motion / GSAP", level: 85 },
    { name: "UI/UX Design", level: 90 },
    { name: "Node.js / Express", level: 80 },
];

const experiences = [
    {
        role: "Front-End Developer & Designer",
        company: "Freelance",
        period: "2024 — Present",
        description: "Creating premium digital experiences for clients worldwide, specializing in modern web applications with rich animations and luxury minimalist aesthetics."
    },
    {
        role: "Full Stack Developer",
        company: "Government Digital Services",
        period: "2023 — 2024",
        description: "Built and maintained internal dashboards, e-office systems, and public-facing web applications used across departments."
    },
    {
        role: "UI/UX Designer",
        company: "Creative Agency",
        period: "2022 — 2023",
        description: "Designed user interfaces and experiences for startups and SMBs, focusing on conversion optimization and brand identity."
    },
];

export default function About() {
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
                        About Me
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.1 }}
                        className="text-6xl md:text-8xl lg:text-9xl font-sans font-bold tracking-tighter uppercase leading-[0.9] mb-8"
                    >
                        Teguh S.<br />Ashidiqie
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="max-w-lg text-lg font-sans font-light text-white/50 leading-relaxed"
                    >
                        A multidisciplinary creator at the intersection of design and technology, crafting digital atmospheres with code and creativity.
                    </motion.p>
                </div>
            </section>

            {/* Bio + Image */}
            <section className="px-6 md:px-12 pb-24">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-5"
                    >
                        <div className="aspect-[3/4] bg-[#111] relative overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700">
                            <Image
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                                alt="Teguh S. Ashidiqie"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 40vw"
                            />
                        </div>
                    </motion.div>

                    {/* Bio Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="lg:col-span-7 space-y-8"
                    >
                        <div className="space-y-6 text-base md:text-lg font-sans font-light text-white/60 leading-relaxed">
                            <p>
                                I am a multidisciplinary creator sitting at the intersection of design and technology.
                                With a background in both fine arts and computer science, I don&apos;t just build websites;
                                I craft <span className="font-serif italic font-normal text-white">digital atmospheres</span>.
                            </p>
                            <p>
                                My philosophy is simple: <span className="text-white font-sans font-medium">Form follows function, but feeling follows form.</span> The logic of code creates the structure, but the aesthetic decisions create the experience. I aim to bring the precision of Swiss design into the interactive capabilities of the modern web.
                            </p>
                            <p>
                                When I&apos;m not coding, I&apos;m analyzing editorial layouts, exploring architecture,
                                or simplifying complex systems into <span className="font-serif italic font-normal text-white">intuitive user interfaces</span>.
                            </p>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                            <div>
                                <span className="text-3xl md:text-4xl font-sans font-bold text-white">3+</span>
                                <p className="text-xs font-sans uppercase tracking-widest text-white/30 mt-2">Years Experience</p>
                            </div>
                            <div>
                                <span className="text-3xl md:text-4xl font-sans font-bold text-white">20+</span>
                                <p className="text-xs font-sans uppercase tracking-widest text-white/30 mt-2">Projects Delivered</p>
                            </div>
                            <div>
                                <span className="text-3xl md:text-4xl font-sans font-bold text-white">10+</span>
                                <p className="text-xs font-sans uppercase tracking-widest text-white/30 mt-2">Happy Clients</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Skills */}
            <section className="px-6 md:px-12 py-24 bg-[#0A0A0A]">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-sans font-bold tracking-tighter mb-20 uppercase"
                    >
                        Skills &<br />Tools
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="border-b border-white/10 pb-6"
                            >
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-base font-sans font-medium">{skill.name}</span>
                                    <span className="text-xs font-sans font-medium text-white/30">{skill.level}%</span>
                                </div>
                                <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.2, delay: 0.2 + index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                                        className="h-full bg-lime-400 rounded-full"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience */}
            <section className="px-6 md:px-12 py-24">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-sans font-bold tracking-tighter mb-20 uppercase"
                    >
                        Experience
                    </motion.h2>
                    <div className="flex flex-col">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="border-t border-white/10 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start"
                            >
                                <div className="lg:col-span-2">
                                    <span className="text-xs font-sans font-medium text-white/30 uppercase tracking-widest">
                                        {exp.period}
                                    </span>
                                </div>
                                <div className="lg:col-span-4">
                                    <h3 className="text-xl md:text-2xl font-sans font-bold tracking-tight">{exp.role}</h3>
                                    <span className="text-sm font-sans text-lime-400 mt-1 block">{exp.company}</span>
                                </div>
                                <div className="lg:col-span-6">
                                    <p className="text-sm font-sans text-white/50 leading-relaxed">{exp.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recognition + Education */}
            <section className="px-6 md:px-12 py-24 bg-[#0A0A0A]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-sm font-sans font-medium uppercase tracking-[0.2em] text-white/30 mb-8">Recognition</h3>
                        <ul className="space-y-4">
                            {["Awwwards — SOTD Nominee", "SiteInspire Feature", "Behance Best in UI", "CSS Design Awards — Special Kudos"].map((item, i) => (
                                <li key={i} className="text-base font-sans text-white/70 border-b border-white/5 pb-4 flex items-center justify-between group">
                                    <span>{item}</span>
                                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-lime-400 text-xs">↗</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <h3 className="text-sm font-sans font-medium uppercase tracking-[0.2em] text-white/30 mb-8">Education</h3>
                        <ul className="space-y-4">
                            {[
                                { title: "BSc Computer Science", sub: "University of Technology" },
                                { title: "BFA Graphic Design", sub: "Design Academy" },
                                { title: "UX Design Certificate", sub: "Google / Coursera" },
                            ].map((item, i) => (
                                <li key={i} className="border-b border-white/5 pb-4">
                                    <span className="text-base font-sans text-white/70 block">{item.title}</span>
                                    <span className="text-xs font-sans text-white/30">{item.sub}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-6 md:px-12 py-24 border-t border-white/10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-sans font-bold tracking-tighter uppercase leading-tight">
                            Want to work<br />together?
                        </h2>
                    </motion.div>
                    <motion.a
                        href="/contact"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="group inline-flex items-center gap-3 border border-white/20 rounded-full px-8 py-4 text-base font-sans font-medium hover:bg-white hover:text-black transition-all duration-300"
                    >
                        Get in touch
                        <span className="group-hover:translate-x-1 transition-transform">↗</span>
                    </motion.a>
                </div>
            </section>

            <Footer />
        </main>
    );
}
