"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

interface HeaderProps {
    loaderDone?: boolean;
}

export default function Header({ loaderDone = true }: HeaderProps) {
    const [visible, setVisible] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        // Show navbar only after scrolling past ~80% of viewport
        setVisible(latest > window.innerHeight * 0.8);
    });

    return (
        <motion.header
            className="fixed top-0 left-0 right-0 z-[999] px-6 py-5 md:px-12 flex justify-between items-center text-white mix-blend-difference"
            initial={{ opacity: 0, y: -40 }}
            animate={
                loaderDone && visible
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: -40, pointerEvents: "none" as const }
            }
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
            <Link href="/" className="text-xl font-bold tracking-tighter uppercase font-sans">
                Teguhash
            </Link>

            <nav className="hidden md:flex gap-8 text-sm font-sans font-medium tracking-wide uppercase">
                <Link href="/work" className="hover:opacity-70 transition-opacity">Work</Link>
                <Link href="/services" className="hover:opacity-70 transition-opacity">Services</Link>
                <Link href="/about" className="hover:opacity-70 transition-opacity">About</Link>
                <Link href="/contact" className="hover:opacity-70 transition-opacity">Contact</Link>
            </nav>

            <button className="md:hidden">
                <span className="sr-only">Menu</span>
                <div className="space-y-2">
                    <span className="block w-8 h-0.5 bg-current"></span>
                    <span className="block w-8 h-0.5 bg-current"></span>
                </div>
            </button>
        </motion.header>
    );
}
