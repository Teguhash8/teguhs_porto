"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Introduction() {
    const containerRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center overflow-hidden"
        >
            {/* Full-width Background Image with Parallax */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{ y: bgY, scale: 1.2 }}
            >
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'url("/assets/Pict/Artistic Motion Portrait (1).png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
            </motion.div>

            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/55 z-[1]" />

            {/* Grain texture */}
            <div
                className="absolute inset-0 pointer-events-none opacity-10 z-[2]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />

            {/* Content */}
            <div className="relative z-10 w-full px-6 md:px-12 py-24 md:py-32">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">

                    {/* Left: Label */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-3"
                    >
                        <h2 className="text-base md:text-lg font-sans font-medium text-white/80">
                            Our philosophy
                        </h2>
                    </motion.div>

                    {/* Right: Large Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, delay: 0.15 }}
                        className="lg:col-span-9"
                    >
                        <p className="text-xl md:text-2xl lg:text-[2rem] font-sans font-medium leading-[1.5] text-white">
                            A creative developer built on
                            {" "}<span className="font-serif italic font-normal text-white/90">instinct</span>,
                            energy, and intent. I started
                            this journey to make work that moves,
                            that feels{" "}
                            <span className="font-serif italic font-normal text-white/90">alive</span>,
                            sharp, and built to{" "}
                            <span className="font-serif italic font-normal text-white/90">last</span>.
                        </p>
                    </motion.div>
                </div>

                {/* Bottom indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="max-w-7xl mx-auto mt-24 md:mt-32 flex justify-end"
                >
                    <span className="text-sm font-sans text-white/40 tracking-wide">(scroll down)</span>
                </motion.div>
            </div>
        </section>
    );
}
