"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

interface HeaderProps {
    loaderDone?: boolean;
}

export default function Header({ loaderDone = true }: HeaderProps) {
    const [visible, setVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        // Show navbar only after scrolling past ~80% of viewport
        setVisible(latest > window.innerHeight * 0.8);
    });

    const toggleMenu = () => setIsOpen(!isOpen);

    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <motion.header
                className={`fixed top-0 left-0 right-0 z-[999] px-6 py-5 md:px-12 flex justify-between items-center transition-colors duration-500 ${isOpen ? "text-white" : "text-white mix-blend-difference"
                    }`}
                initial={{ opacity: 0, y: -40 }}
                animate={
                    loaderDone && (visible || isOpen)
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: -40, pointerEvents: "none" as const }
                }
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
                <Link href="/" className="text-xl font-bold tracking-tighter uppercase font-sans relative z-[1001]" onClick={closeMenu}>
                    Teguhash
                </Link>

                <nav className="hidden md:flex gap-8 text-sm font-sans font-medium tracking-wide uppercase relative z-[1001]">
                    <Link href="/work" className="hover:opacity-70 transition-opacity">Work</Link>
                    <Link href="/services" className="hover:opacity-70 transition-opacity">Services</Link>
                    <Link href="/about" className="hover:opacity-70 transition-opacity">About</Link>
                    <Link href="/contact" className="hover:opacity-70 transition-opacity">Contact</Link>
                </nav>

                <button
                    className="md:hidden relative z-[1001] w-8 h-8 flex flex-col justify-center items-center gap-1.5"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    <motion.span
                        animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                        className="block w-8 h-0.5 bg-current transition-transform origin-center"
                    ></motion.span>
                    <motion.span
                        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                        className="block w-8 h-0.5 bg-current transition-opacity"
                    ></motion.span>
                    <motion.span
                        animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                        className="block w-8 h-0.5 bg-current transition-transform origin-center"
                    ></motion.span>
                </button>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <motion.div
                initial={{ opacity: 0, y: "-100%" }}
                animate={isOpen ? { opacity: 1, y: "0%" } : { opacity: 0, y: "-100%" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="fixed inset-0 z-[1000] bg-[#050505] flex flex-col justify-center items-center pointer-events-none data-[open=true]:pointer-events-auto"
                data-open={isOpen}
            >
                <nav className="flex flex-col items-center gap-8 text-3xl font-sans font-bold tracking-tighter uppercase text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <Link href="/" className="hover:text-lime-400 transition-colors" onClick={closeMenu}>Home</Link>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Link href="/work" className="hover:text-lime-400 transition-colors" onClick={closeMenu}>Work</Link>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Link href="/services" className="hover:text-lime-400 transition-colors" onClick={closeMenu}>Services</Link>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <Link href="/about" className="hover:text-lime-400 transition-colors" onClick={closeMenu}>About</Link>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <Link href="/contact" className="hover:text-lime-400 transition-colors" onClick={closeMenu}>Contact</Link>
                    </motion.div>
                </nav>
            </motion.div>
        </>
    );
}
