'use client';

import React from 'react';
import { Utensils } from 'lucide-react';
import { PizzaDoodle, MomoDoodle, BeverageDoodle } from './Doodles';

const TESTIMONIALS = [
    {
        id: 1,
        name: "Sneha G.",
        text: "The cheese burst pizza was absolutely loaded! Can't believe it's without onion and garlic. Tastes amazing!",
        rating: 5
    },
    {
        id: 2,
        name: "Amit K.",
        text: "Best mojitos in Indirapuram. The Kiwi Mojito is a must-try. Refreshing and pure.",
        rating: 5
    },
    {
        id: 3,
        name: "Rahul Verma",
        text: "Finally a hygienic cloud kitchen that respects sattvik dietary needs without compromising on taste.",
        rating: 4
    }
];

export const Testimonials = () => {
    return (
        <section className="py-20 bg-white/5 relative overflow-hidden">
            {/* Background Doodles */}
            <div className="absolute inset-0 pointer-events-none opacity-5">
                <div className="w-40 h-40 absolute -top-10 -right-10 text-yellow-500 rotate-[-12deg]">
                    <MomoDoodle />
                </div>
                <div className="w-32 h-32 absolute bottom-0 left-0 text-orange-500 rotate-12">
                    <PizzaDoodle />
                </div>
                <Utensils className="absolute top-20 left-10 text-blue-400 w-16 h-16 rotate-45 opacity-50" />
            </div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <h2 className="text-3xl font-display font-bold text-center mb-12 text-white">
                    What our Customers Say
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((t) => (
                        <div key={t.id} className="bg-card p-8 rounded-2xl border border-white/5 relative">
                            <div className="text-primary text-4xl font-serif absolute top-4 left-6 opacity-30">"</div>
                            <p className="text-gray-300 italic mb-6 relative z-10">{t.text}</p>
                            <div>
                                <h4 className="font-bold text-white">{t.name}</h4>
                                <div className="flex text-yellow-500 text-sm">
                                    {"★".repeat(t.rating)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
