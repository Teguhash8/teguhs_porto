"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";
import Image from "next/image";

interface HeroProps {
    loaderDone?: boolean;
}

const ease = [0.16, 1, 0.3, 1] as const;

// Words that reveal images on hover
const hoverImages: Record<string, string> = {
    DEVELOPER: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600",
    DESIGNER: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600",
    INDONESIA: "https://images.unsplash.com/photo-1555899434-94d1368aa7af?auto=format&fit=crop&q=80&w=600",
    EXPERIENCES: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
};

function HoverWord({
    children,
    imageKey,
    className = "",
    loaderDone,
    delay,
}: {
    children: string;
    imageKey: string;
    className?: string;
    loaderDone: boolean;
    delay: number;
}) {
    const [hovered, setHovered] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouse = useCallback((e: React.MouseEvent) => {
        setMousePos({ x: e.clientX, y: e.clientY });
    }, []);

    return (
        <>
            <motion.span
                className={`inline-block cursor-pointer relative transition-colors duration-300 ${hovered ? "text-lime-400" : ""} ${className}`}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onMouseMove={handleMouse}
                initial={{ y: "110%", opacity: 0 }}
                animate={loaderDone ? { y: "0%", opacity: 1 } : {}}
                transition={{ duration: 1.4, delay, ease }}
            >
                {children}
            </motion.span>

            {/* Floating image on hover */}
            <AnimatePresence>
                {hovered && hoverImages[imageKey] && (
                    <motion.div
                        className="fixed z-[999] pointer-events-none w-[280px] h-[370px] md:w-[320px] md:h-[420px] rounded-sm overflow-hidden shadow-2xl"
                        style={{
                            left: mousePos.x + 20,
                            top: mousePos.y - 200,
                        }}
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <Image
                            src={hoverImages[imageKey]}
                            alt={imageKey}
                            fill
                            className="object-cover"
                            sizes="320px"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default function Hero({ loaderDone = true }: HeroProps) {
    return (
        <section className="relative min-h-screen bg-[#050505] overflow-hidden text-white">
            {/* Grain */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.06] z-30"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />

            <div className="relative z-10 h-screen flex flex-col justify-between px-6 md:px-12 py-12 md:py-16">

                {/* Top Bar Labels */}
                <motion.div
                    className="flex justify-between items-start text-[10px] font-sans font-medium uppercase tracking-[0.2em] text-white/25"
                    initial={{ opacity: 0 }}
                    animate={loaderDone ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <span>[ Teguh Ashidiqie ]</span>
                    <span className="hidden md:inline">[ Creative Developer, Designer ]</span>
                    <span>[ Indonesia ]</span>
                </motion.div>

                {/* Main Typography Block */}
                <div className="max-w-7xl w-full mx-auto flex-1 flex flex-col justify-center">

                    {/* Category label */}
                    <motion.p
                        className="text-[10px] font-sans font-medium uppercase tracking-[0.3em] text-white/25 mb-8 md:mb-10"
                        initial={{ opacity: 0 }}
                        animate={loaderDone ? { opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        [ Code, Design, Motion ]
                    </motion.p>

                    {/* Line 1: A CREATIVE */}
                    <div className="overflow-hidden">
                        <div className="flex items-baseline gap-3 md:gap-5 flex-wrap">
                            <motion.span
                                className="text-[2.8rem] md:text-[5.5rem] lg:text-[7.5rem] font-sans font-black tracking-tighter leading-[0.9] uppercase"
                                initial={{ y: "110%" }}
                                animate={loaderDone ? { y: "0%" } : {}}
                                transition={{ duration: 1.4, delay: 0.1, ease }}
                            >
                                A Creative
                            </motion.span>
                        </div>
                    </div>

                    {/* Line 2: DEVELOPER / */}
                    <div className="overflow-hidden">
                        <div className="flex items-baseline gap-3 md:gap-5 flex-wrap">
                            <HoverWord imageKey="DEVELOPER" loaderDone={loaderDone} delay={0.2}
                                className="text-[2.8rem] md:text-[5.5rem] lg:text-[7.5rem] font-sans font-black tracking-tighter leading-[0.9] uppercase"
                            >
                                Developer
                            </HoverWord>
                            <motion.span
                                className="text-[2.8rem] md:text-[5.5rem] lg:text-[7.5rem] font-sans font-thin tracking-tighter leading-[0.9] text-white/30"
                                initial={{ y: "110%", opacity: 0 }}
                                animate={loaderDone ? { y: "0%", opacity: 1 } : {}}
                                transition={{ duration: 1.4, delay: 0.25, ease }}
                            >
                                /
                            </motion.span>
                        </div>
                    </div>

                    {/* Line 3: DESIGNER BORN */}
                    <div className="overflow-hidden">
                        <div className="flex items-baseline gap-3 md:gap-5 flex-wrap">
                            <HoverWord imageKey="DESIGNER" loaderDone={loaderDone} delay={0.3}
                                className="text-[2.8rem] md:text-[5.5rem] lg:text-[7.5rem] font-sans font-black tracking-tighter leading-[0.9] uppercase"
                            >
                                Designer
                            </HoverWord>
                            <motion.span
                                className="text-[2rem] md:text-[4rem] lg:text-[5rem] font-sans font-light tracking-tighter leading-[0.9] uppercase text-white/60"
                                initial={{ y: "110%", opacity: 0 }}
                                animate={loaderDone ? { y: "0%", opacity: 1 } : {}}
                                transition={{ duration: 1.4, delay: 0.35, ease }}
                            >
                                Born
                            </motion.span>
                            <motion.span
                                className="text-[2rem] md:text-[4rem] lg:text-[5rem] font-serif italic font-normal tracking-tight leading-[0.9] text-lime-400"
                                initial={{ y: "110%", opacity: 0 }}
                                animate={loaderDone ? { y: "0%", opacity: 1 } : {}}
                                transition={{ duration: 1.4, delay: 0.38, ease }}
                            >
                                &amp;
                            </motion.span>
                            <motion.span
                                className="text-[2rem] md:text-[4rem] lg:text-[5rem] font-sans font-light tracking-tighter leading-[0.9] uppercase text-white/60"
                                initial={{ y: "110%", opacity: 0 }}
                                animate={loaderDone ? { y: "0%", opacity: 1 } : {}}
                                transition={{ duration: 1.4, delay: 0.4, ease }}
                            >
                                raised
                            </motion.span>
                        </div>
                    </div>

                    {/* Line 4: CRAFTING DIGITAL */}
                    <div className="overflow-hidden">
                        <div className="flex items-baseline gap-3 md:gap-5 flex-wrap">
                            <motion.span
                                className="text-[2.8rem] md:text-[5.5rem] lg:text-[7.5rem] font-sans font-black tracking-tighter leading-[0.9] uppercase"
                                initial={{ y: "110%" }}
                                animate={loaderDone ? { y: "0%" } : {}}
                                transition={{ duration: 1.4, delay: 0.45, ease }}
                            >
                                Crafting
                            </motion.span>
                        </div>
                    </div>

                    {/* Line 5: EXPERIENCES */}
                    <div className="overflow-hidden">
                        <div className="flex items-baseline gap-3 md:gap-5 flex-wrap pl-0 md:pl-24 lg:pl-48">
                            <HoverWord imageKey="EXPERIENCES" loaderDone={loaderDone} delay={0.5}
                                className="text-[2.8rem] md:text-[5.5rem] lg:text-[7.5rem] font-sans font-black tracking-tighter leading-[0.9] uppercase"
                            >
                                Experiences.
                            </HoverWord>
                        </div>
                    </div>

                    {/* Editorial labels + description row */}
                    <div className="flex flex-col md:flex-row items-start justify-between gap-8 mt-12 md:mt-16">
                        {/* Small description */}
                        <motion.div
                            className="max-w-xs"
                            initial={{ opacity: 0, y: 20 }}
                            animate={loaderDone ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1, delay: 0.8, ease }}
                        >
                            <p className="text-[11px] font-sans font-normal leading-[1.8] text-white/35">
                                I seek to find the connection between
                                logic and beautiful interfaces, blending code with
                                creativity in an effort to build
                                digital products that feel alive and purposeful.
                            </p>
                        </motion.div>

                        {/* Small label */}
                        <motion.p
                            className="text-[10px] font-sans font-medium uppercase tracking-[0.2em] text-white/20"
                            initial={{ opacity: 0 }}
                            animate={loaderDone ? { opacity: 1 } : {}}
                            transition={{ duration: 0.8, delay: 0.9 }}
                        >
                            [ Creative<br />Development ]
                        </motion.p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    className="flex justify-between items-end text-[10px] font-sans font-medium uppercase tracking-[0.2em] text-white/20 pb-2"
                    initial={{ opacity: 0 }}
                    animate={loaderDone ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <span>[ Back ]</span>
                    <span>[ .About ]</span>
                    <span>[ Works ]</span>
                </motion.div>
            </div>
        </section>
    );
}
