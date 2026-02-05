"use client";

import { motion } from "framer-motion";
import { Clock, MapPin } from "lucide-react";

export function OpeningHours() {
    return (
        <section className="py-20 bg-black text-white relative overflow-hidden">
            {/* Background ambience */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 bg-gradient-to-r from-orange-400 to-amber-200 bg-clip-text text-transparent">
                        Visit Us
                    </h2>
                    <p className="text-xl text-gray-400 font-handwriting">
                        Come for the food, stay for the vibes
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Hours Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-amber-500/30 transition-colors group"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 rounded-full bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-colors">
                                <Clock className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold font-display">Opening Hours</h3>
                        </div>

                        <div className="space-y-4 text-gray-300">
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span>Mon - Fri</span>
                                <span className="font-semibold text-white">10:00 AM - 10:00 PM</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span>Sat - Sun</span>
                                <span className="font-semibold text-white">10:00 AM - 11:00 PM</span>
                            </div>

                            <div className="mt-4 pt-4 border-t border-white/5 text-center">
                                <p className="text-amber-400 font-medium text-sm">
                                    Important Note: Closed on Ekadashi
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Location Card (Simple placeholder for context) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-orange-500/30 transition-colors group"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 rounded-full bg-orange-500/10 text-orange-500 group-hover:bg-orange-500 group-hover:text-black transition-colors">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold font-display">Location</h3>
                        </div>

                        <div className="space-y-2 text-gray-300">
                            <p className="font-semibold text-white">Prashado Cloud Kitchen</p>
                            <p>267 Gyankhand-1, Indrapuram</p>
                            <p>Ghaziabad, 201014</p>
                            <a
                                href="https://maps.app.goo.gl/fQUrkFcKVSpZasp96"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-block mt-4 text-orange-400 hover:text-orange-300 text-sm font-semibold tracking-wide uppercase transition-colors"
                            >
                                Get Directions &rarr;
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
