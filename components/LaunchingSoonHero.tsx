'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const BACKGROUND_IMAGES = [
    "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2070&auto=format&fit=crop", // Veg Pizza 1 (Safe)
    "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=2070&auto=format&fit=crop", // Fresh Mojito
    "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop", // Veg Burger
    "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=2069&auto=format&fit=crop",// Momos/Dumplings
    "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2070&auto=format&fit=crop",  // Corn Pizza (Safe)
    "/louis-hansel-vi0kZuoe0-8-unsplash.jpg"

];

export const LaunchingSoonHero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background text-foreground pt-10">

            <div className="z-10 text-center px-4 max-w-4xl w-full flex flex-col items-center gap-6">

                {/* Logo Section */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative w-48 h-48 md:w-64 md:h-64 mb-4"
                >
                    <div className="w-full h-full rounded-full flex items-center justify-center overflow-hidden relative drop-shadow-[0_0_15px_rgba(217,70,239,0.5)]">
                        <Image
                            src="/logo-2.png"
                            alt="Prashado Logo"
                            fill
                            className="object-contain" // Changed to contain to see full logo if it has its own shape
                            priority
                        />
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white drop-shadow-sm"
                    style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                >
                    Launching Soon
                </motion.h1>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-2xl md:text-4xl text-secondary mt-4"
                    style={{ fontFamily: 'var(--font-dancing), cursive' }}
                >
                    Sattvik Bites, Chill Vibes - Coming to your plate soon!
                </motion.p>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />
        </section>
    );
};
