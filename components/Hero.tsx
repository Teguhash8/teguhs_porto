"use client";

import { motion } from "framer-motion";
import ImageTrail from "./ImageTrail";

const trailImages = [
    "/assets/Pict/Abstract Glowing Pattern.png",
    "/assets/Pict/Abstract Web Network.png",
    "/assets/Pict/Dot Matrix Figure.png",
    "/assets/Pict/Egrets in Flight.png",
    "/assets/Pict/Ethereal Cityscape Glow.png",
    "/assets/Pict/Surreal Character Art.png",
    "/assets/Pict/Surreal Ocean Portal.png",
];

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center bg-[#0A0A0A] text-[#F5F5F7] overflow-hidden">
            {/* Pass content as children to ImageTrail so mouse events bubble up correctly */}
            <ImageTrail items={trailImages} variant={5}>
                <div className="relative z-10 w-full h-full flex flex-col justify-center min-h-screen px-6 md:px-12 pointer-events-none">
                    <div className="max-w-7xl w-full mx-auto pt-20 pointer-events-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="text-6xl md:text-8xl lg:text-9xl tracking-tight leading-[0.9] text-white font-serif">
                                DESIGNER <br />
                                <span className="font-sans font-bold italic opacity-90 pl-4 md:pl-20 block text-white text-4xl md:text-6xl lg:text-7xl mt-2">
                                    BY HEART,
                                </span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="mt-8 md:mt-16 text-right"
                        >
                            <div className="text-6xl md:text-8xl lg:text-9xl tracking-tight leading-[0.9] text-white font-serif">
                                CODER <br />
                                <span className="font-sans font-bold italic opacity-90 pr-4 md:pr-20 block text-white text-4xl md:text-6xl lg:text-7xl mt-2 text-cyan-400">
                                    BY VIBE.
                                </span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="mt-16 lg:mb-20 md:mt-24 mb-0 max-w-xl text-lg md:text-xl font-sans font-light leading-relaxed text-gray-400"
                        >
                            <p>
                                Bridging the gap between complex visual aesthetics and clean code functionality.
                                Crafting digital experiences where <span className="text-white font-medium">logic meets soul</span>.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        className="absolute bottom-10 left-6 md:left-12 flex items-center gap-4 text-sm text-gray-500 font-mono pointer-events-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 1 }}
                    >

                        <div className="w-12 h-[1px] bg-gray-700" />
                    </motion.div>
                </div>
            </ImageTrail>
        </section>
    );
}
