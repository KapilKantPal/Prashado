'use client';

import React from 'react';
import { Send, Utensils, ChefHat } from 'lucide-react';
import { PizzaDoodle, MomoDoodle, BeverageDoodle } from './Doodles';

export const ContactForm = () => {
    return (
        <section className="py-20 px-4 relative overflow-hidden">
            {/* Background Doodles */}
            <div className="absolute inset-0 pointer-events-none opacity-5">
                <div className="w-32 h-32 absolute top-10 -left-10 text-orange-500 rotate-12">
                    <PizzaDoodle />
                </div>
                <div className="w-24 h-24 absolute bottom-20 -right-5 text-blue-400 rotate-[-15deg]">
                    <BeverageDoodle />
                </div>
                <Utensils className="absolute top-1/2 right-10 text-yellow-500 w-20 h-20 rotate-45" />
                <ChefHat className="absolute bottom-10 left-10 text-orange-500 w-16 h-16 rotate-[-10deg]" />
            </div>

            <div className="max-w-2xl mx-auto bg-card p-8 rounded-3xl border border-white/10 shadow-2xl relative z-10">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-white mb-2">Have a question?</h2>
                    <p className="text-gray-400">Reach out to us for bulk orders or feedback.</p>
                </div>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                        />
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                        />
                    </div>
                    <textarea
                        rows={4}
                        placeholder="Message..."
                        className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                    />
                    <button className="w-full bg-secondary hover:bg-secondary-hover text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all">
                        Send Message <Send size={18} />
                    </button>
                </form>
            </div>
        </section>
    );
};
