'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle, Utensils, ChefHat, X, ChevronUp, ShoppingBag } from 'lucide-react';

import { MENU_DATA, MenuItem } from '@/data/menu';
import {
    PizzaDoodle,
    MomoDoodle,
    BeverageDoodle,
    NoodleDoodle,
    FriesDoodle,
    SpiralDoodle,
    CornDoodle,
    CelebrationDoodle
} from './Doodles';

const getDoodle = (type: string) => {
    switch (type) {
        case 'pizza': return PizzaDoodle;
        case 'momo': return MomoDoodle;
        case 'beverage': return BeverageDoodle;
        case 'noodles': return NoodleDoodle;
        case 'fries': return FriesDoodle;
        case 'spiral': return SpiralDoodle;
        case 'corn': return CornDoodle;
        default: return null;
    }
};

interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

export const MenuCatalog = () => {
    const [cart, setCart] = useState<{ [key: string]: CartItem }>({});
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addToCart = (item: MenuItem) => {
        setCart((prev) => {
            const existing = prev[item.id];
            return {
                ...prev,
                [item.id]: {
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    quantity: (existing?.quantity || 0) + 1,
                },
            };
        });
    };

    const removeFromCart = (itemId: string) => {
        setCart((prev) => {
            const existing = prev[itemId];
            if (!existing) return prev;

            const newCart = { ...prev };
            if (existing.quantity > 1) {
                newCart[itemId] = { ...existing, quantity: existing.quantity - 1 };
            } else {
                delete newCart[itemId];
            }
            return newCart;
        });
    };

    const totalItems = Object.values(cart).reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = Object.values(cart).reduce((acc, item) => acc + item.price * item.quantity, 0);

    const getWhatsAppUrl = () => {
        const itemsList = Object.values(cart)
            .map((item) => `${item.name} x ${item.quantity} - ₹${item.price * item.quantity}`)
            .join('%0A');

        const message = `*New Order Request*%0A%0A${itemsList}%0A%0A*Total Price: ₹${totalPrice}*%0A%0APlease confirm my order!`;
        return `https://wa.me/919560630891?text=${message}`;
    };

    return (
        <section className="py-20 px-4 max-w-7xl mx-auto relative overflow-hidden" id="menu">
            {/* Background Doodles */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
                <div className="w-24 h-24 absolute top-10 left-10 text-orange-500 rotate-[-15deg]">
                    <PizzaDoodle />
                </div>
                <Utensils className="absolute top-20 right-20 text-yellow-500 w-28 h-28 rotate-[10deg]" />
                <div className="w-20 h-20 absolute bottom-20 left-20 text-blue-400 rotate-[5deg]">
                    <BeverageDoodle />
                </div>
                <ChefHat className="absolute bottom-10 right-10 text-orange-500 w-24 h-24 rotate-[-10deg]" />
                <div className="w-16 h-16 absolute top-1/2 left-10 text-yellow-500">
                    <MomoDoodle />
                </div>
                <div className="w-20 h-20 absolute top-1/3 right-16 text-blue-400 rotate-[15deg]">
                    <BeverageDoodle />
                </div>
            </div>

            <div className="text-center mb-16 relative z-10">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Our Menu</h2>
                <p className="text-gray-400">Pure Sattvik preparations for your soul.</p>
            </div>

            <div className="space-y-16 relative z-10">
                {MENU_DATA.map((category) => {
                    const DoodleComponent = getDoodle(category.doodle);
                    return (
                        <div key={category.id} className="space-y-8">
                            <div className="flex items-center gap-4 border-l-4 border-primary pl-4">
                                {DoodleComponent && (
                                    <div className="w-12 h-12">
                                        <DoodleComponent />
                                    </div>
                                )}
                                <h3 className={`text-2xl md:text-3xl font-bold ${category.color}`}>
                                    {category.title}
                                </h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {category.items.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        whileHover={{ y: -5 }}
                                        className="bg-card hover:bg-card-hover border border-white/5 rounded-2xl p-4 flex gap-4 transition-colors group"
                                    >
                                        {/* Image Placeholder */}
                                        <div className="w-24 h-24 shrink-0 bg-gray-800 rounded-xl overflow-hidden relative">
                                            {/* Replace with <Image> when available */}
                                            <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-gray-500 text-xs text-center p-1 overflow-hidden">
                                                {item.image ? (
                                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                                ) : (
                                                    "No Image"
                                                )}
                                            </div>
                                        </div>

                                        <div className="flex flex-col justify-between flex-grow">
                                            <div>
                                                <h4 className="font-semibold text-lg text-white group-hover:text-primary transition-colors">
                                                    {item.name}
                                                </h4>
                                                {item.description && (
                                                    <p className="text-sm text-gray-400 line-clamp-2 mt-1">{item.description}</p>
                                                )}
                                            </div>

                                            <div className="flex items-center justify-between mt-3">
                                                <span className="font-bold text-secondary">₹{item.price}</span>

                                                <div className="flex items-center gap-2 bg-white/5 rounded-full p-1">
                                                    {cart[item.id] ? (
                                                        <>
                                                            <button
                                                                onClick={() => removeFromCart(item.id)}
                                                                className="p-1 hover:bg-white/10 rounded-full transition-colors text-red-400"
                                                                title="Remove"
                                                            >
                                                                <Minus size={16} />
                                                            </button>
                                                            <span className="text-sm font-bold text-primary min-w-[20px] text-center">
                                                                {cart[item.id].quantity}
                                                            </span>
                                                            <button
                                                                onClick={() => addToCart(item)}
                                                                className="p-1 hover:bg-white/10 rounded-full transition-colors text-green-400"
                                                                title="Add"
                                                            >
                                                                <Plus size={16} />
                                                            </button>
                                                        </>
                                                    ) : (
                                                        <button
                                                            onClick={() => addToCart(item)}
                                                            className="p-2 hover:bg-primary hover:text-white rounded-full transition-colors"
                                                            title="Add to Cart"
                                                        >
                                                            <Plus size={18} />
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Cart Summary Header/Footer */}
            <AnimatePresence>
                {totalItems > 0 && (
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        className="fixed bottom-0 left-0 right-0 z-50 p-4"
                    >
                        <div className="max-w-3xl mx-auto bg-gray-900/95 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-2xl shadow-black/50 flex items-center justify-between cursor-pointer" onClick={() => setIsCartOpen(!isCartOpen)}>
                            <div className="flex flex-col">
                                <div className="flex items-center gap-2 text-gray-400 text-sm">
                                    <ShoppingBag size={14} />
                                    <span>{totalItems} Items</span>
                                    <ChevronUp size={14} className={`transition-transform duration-300 ${isCartOpen ? 'rotate-180' : ''}`} />
                                </div>
                                <span className="text-xl font-bold text-white">Total: ₹{totalPrice}</span>
                            </div>

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    window.open(getWhatsAppUrl(), '_blank');
                                }}
                                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-bold transition-colors"
                            >
                                <span className="hidden md:inline">Order on WhatsApp</span>
                                <span className="md:hidden">Order</span>
                                <MessageCircle size={20} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Cart Detail Modal/Drawer */}
            <AnimatePresence>
                {isCartOpen && totalItems > 0 && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsCartOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[45]"
                        />
                        <motion.div
                            initial={{ y: '100%' }}
                            animate={{ y: 0 }}
                            exit={{ y: '100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="fixed bottom-0 left-0 right-0 z-50 bg-[#1a1a1a] border-t border-white/10 rounded-t-3xl max-h-[80vh] flex flex-col shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.8)]"
                        >
                            <div className="p-4 border-b border-white/5 flex items-center justify-between">
                                <h3 className="text-xl font-bold flex items-center gap-2">
                                    <ShoppingBag className="text-primary" />
                                    Your Cart
                                </h3>
                                <button
                                    onClick={() => setIsCartOpen(false)}
                                    className="p-2 hover:bg-white/5 rounded-full text-gray-400 hover:text-white"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Free Delivery Banner (In Cart) */}
                            {totalPrice > 299 && (
                                <div className="px-4 pt-4">
                                    <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-[2px] rounded-xl shadow-lg">
                                        <div className="bg-[#1a1a1a] rounded-xl p-3 flex items-center gap-3 relative overflow-hidden">
                                            <div className="w-10 h-10 shrink-0 text-yellow-400 rotate-12 animate-pulse">
                                                <CelebrationDoodle />
                                            </div>
                                            <div className="flex-1 z-10">
                                                <p className="font-bold text-sm text-glass-shine">
                                                    Yay! Free Delivery Unlocked!
                                                </p>
                                                <p className="text-xs text-gray-400">Valid for orders under 2 km radius.</p>
                                            </div>
                                            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-pink-500/20 to-transparent blur-xl rounded-full translate-x-1/2 -translate-y-1/2" />
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="overflow-y-auto p-4 space-y-4 flex-1">
                                {Object.values(cart).map((item) => (
                                    <div key={item.id} className="flex items-center justify-between bg-white/5 p-4 rounded-xl border border-white/5">
                                        <div>
                                            <h4 className="font-semibold">{item.name}</h4>
                                            <p className="text-sm text-gray-400">₹{item.price} x {item.quantity}</p>
                                        </div>
                                        <div className="flex items-center gap-3 bg-black/30 rounded-lg p-1">
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="p-1 hover:bg-white/10 rounded-md text-red-400 transition-colors"
                                            >
                                                <Minus size={18} />
                                            </button>
                                            <span className="font-bold w-6 text-center">{item.quantity}</span>
                                            <button
                                                onClick={() => addToCart({ ...item, id: item.id } as any)}
                                                className="p-1 hover:bg-white/10 rounded-md text-green-400 transition-colors"
                                            >
                                                <Plus size={18} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="p-4 border-t border-white/10 bg-[#1a1a1a] pb-8">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-gray-400">Total Amount</span>
                                    <span className="text-2xl font-bold text-primary">₹{totalPrice}</span>
                                </div>
                                <a
                                    href={getWhatsAppUrl()}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold text-lg transition-colors"
                                >
                                    Check Out on WhatsApp
                                    <MessageCircle size={24} />
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
};
