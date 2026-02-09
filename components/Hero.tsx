'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ShoppingBag } from 'lucide-react';

const BACKGROUND_IMAGES = [
    "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2070&auto=format&fit=crop", // Veg Pizza 1 (Safe)
    "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=2070&auto=format&fit=crop", // Fresh Mojito
    "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop", // Veg Burger
    "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=2069&auto=format&fit=crop",// Momos/Dumplings
    "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2070&auto=format&fit=crop",  // Corn Pizza (Safe)
    "/louis-hansel-vi0kZuoe0-8-unsplash.jpg"

];


export const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background text-foreground pt-10">

            {/* Background Slider */}
            <div className="absolute inset-0 z-0">
                {/* Overlay: Radial Gradient to pop the center (logo) and match theme */}
                <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,rgba(217,70,239,0.15)_0%,rgba(0,0,0,0.85)_100%)]" />
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <Image
                            src={BACKGROUND_IMAGES[currentImageIndex]}
                            alt="Background"
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

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


                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-3xl md:text-5xl text-secondary mt-4"
                    style={{ fontFamily: 'var(--font-dancing), cursive' }}
                >
                    Sattvik Bites, Chill Vibes
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="mt-12 flex flex-col sm:flex-row gap-6 w-full justify-center"
                >
                    {/* Main CTA with Gradient matching Logo */}
                    <a
                        href="https://wa.me/c/919560630891"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative px-8 py-4 rounded-full overflow-hidden shadow-[0_0_20px_rgba(217,70,239,0.4)] transition-transform hover:scale-105 bg-black flex items-center justify-center"
                    >
                        {/* Solid background behind gradient to ensure no transparency */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#9CDFF7] via-purple-500 to-secondary animate-gradient bg-[length:200%_auto] opacity-100" />
                        <div className="relative flex items-center gap-2 text-black font-bold text-lg z-10">
                            <ShoppingBag size={22} />
                            Order on WhatsApp
                        </div>
                    </a>

                    {/* Secondary CTA */}
                    <a
                        href="tel:+919560630891"
                        className="flex items-center justify-center gap-2 px-8 py-4 bg-black/40 hover:bg-black/60 text-white font-semibold rounded-full border border-white/30 backdrop-blur-md transition-all transform hover:scale-105"
                    >
                        Call to Order
                    </a>
                </motion.div>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />
        </section>
    );
};
