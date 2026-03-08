"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stackImages = [
    "/assets/Pict/Abstract Glowing Pattern.png",
    "/assets/Pict/Abstract Web Network.png",
    "/assets/Pict/Dot Matrix Figure.png",
    "/assets/Pict/Egrets in Flight.png",
    "/assets/Pict/Ethereal Cityscape Glow.png",
    "/assets/Pict/Surreal Character Art.png",
    "/assets/Pict/Surreal Ocean Portal.png",
];

interface LoaderProps {
    onComplete?: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showImages, setShowImages] = useState(true);

    useEffect(() => {
        if (showImages) {
            const interval = setInterval(() => {
                setCurrentImageIndex(prev => {
                    if (prev >= stackImages.length - 1) {
                        clearInterval(interval);
                        setShowImages(false);
                        return prev;
                    }
                    return prev + 1;
                });
            }, 150);
            return () => clearInterval(interval);
        }
    }, [showImages]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            // Notify parent that loading is done
            setTimeout(() => {
                onComplete?.();
            }, 800); // after exit animation
        }, 3000);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isLoading ? 1 : 0, pointerEvents: isLoading ? "auto" : "none" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] text-white overflow-hidden"
        >
            {/* IMAGE STACK EFFECT */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0">
                {stackImages.map((src, index) => {
                    // Deterministic rotations to avoid hydration mismatch (Math.random() differs server vs client)
                    const rotations = [-5, 3, -8, 6, -2, 7, -4];
                    return (
                        <motion.img
                            key={index}
                            src={src}
                            initial={{ opacity: 0, scale: 0.8, rotate: rotations[index % rotations.length] }}
                            animate={{
                                opacity: showImages && index <= currentImageIndex ? 1 : 0,
                                scale: showImages && index <= currentImageIndex ? 1.05 : 0.8,
                                zIndex: index
                            }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute w-[80vw] md:w-[40vw] max-w-lg aspect-[4/5] md:aspect-video object-cover rounded-lg shadow-2xl mix-blend-screen"
                        />
                    );
                })}
            </div>

            {/* MINIMAL LOGO AND LOADER */}
            <motion.div
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: showImages ? 0 : 1, filter: showImages ? "blur(10px)" : "blur(0px)" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 flex flex-col items-center justify-center gap-8"
            >
                <div className="flex items-center gap-3">
                    <motion.div
                        initial={{ scale: 0, opacity: 0, x: -20 }}
                        animate={{ scale: showImages ? 0 : 1, opacity: showImages ? 0 : 1, x: showImages ? -20 : 0 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                        className="w-4 h-4 rounded-r-full bg-white"
                    />
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: showImages ? 0 : 1, opacity: showImages ? 0 : 1 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
                        className="w-4 h-4 rounded-l-full bg-white opacity-80"
                    />
                    <motion.div
                        initial={{ scale: 0, opacity: 0, x: 20 }}
                        animate={{ scale: showImages ? 0 : 1, opacity: showImages ? 0 : 1, x: showImages ? 20 : 0 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
                        className="w-4 h-4 rounded-full bg-white"
                    />
                </div>

                {/* Thin Loading Bar */}
                <div className="w-32 h-[1px] bg-white/20 overflow-hidden relative">
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: "0%" }}
                        transition={{ duration: 2.2, ease: [0.76, 0, 0.24, 1] }}
                        className="absolute inset-0 bg-white"
                    />
                </div>
            </motion.div>
        </motion.div>
    );
}
