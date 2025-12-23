"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";

const equipmentTypes = [
    "Excavators",
    "Cranes",
    "Bulldozers",
    "Loaders",
    "Dump Trucks",
];

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-charcoal-dark)] via-[var(--color-charcoal)] to-[var(--color-charcoal-dark)]">
                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)
            `,
                        backgroundSize: "50px 50px",
                    }}
                />

                {/* Gradient orbs */}
                <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-[var(--color-orange)]/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-[var(--color-steel)]/10 rounded-full blur-[150px]" />
            </div>

            {/* Content */}
            <div className="container-custom relative z-10 pt-32 pb-20">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Left Column - Text Content */}
                    <div className="text-center lg:text-left">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-orange)]/10 border border-[var(--color-orange)]/20 mb-6"
                        >
                            <span className="w-2 h-2 rounded-full bg-[var(--color-orange)] animate-pulse" />
                            <span className="text-sm font-medium text-[var(--color-orange)]">
                                200+ Equipment Units Ready
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] mb-6"
                        >
                            <span className="text-white">HEXA Rent is your</span>
                            <br />
                            <span className="text-gradient">heavy-duty</span>
                            <br />
                            <span className="text-white">equipment partner</span>
                        </motion.h1>

                        {/* Equipment Types */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8"
                        >
                            {equipmentTypes.map((type, index) => (
                                <span
                                    key={type}
                                    className="px-3 py-1 text-sm text-[var(--foreground-muted)] bg-white/5 rounded-full border border-white/10"
                                >
                                    {type}
                                </span>
                            ))}
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-lg text-[var(--foreground-muted)] max-w-xl mx-auto lg:mx-0 mb-8"
                        >
                            From excavators to cranes, we provide reliable heavy machinery for
                            construction projects of all sizes. 24/7 support with certified
                            operators available.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <Link href="/equipment">
                                <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                                    Browse Equipment
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button variant="secondary" size="lg">
                                    Get Quote
                                </Button>
                            </Link>
                        </motion.div>

                        {/* Trust Indicators */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="flex flex-wrap items-center justify-center lg:justify-start gap-8 mt-12 pt-8 border-t border-white/10"
                        >
                            <div className="text-center lg:text-left">
                                <div className="text-3xl font-black text-white">500+</div>
                                <div className="text-sm text-[var(--foreground-muted)]">
                                    Projects Completed
                                </div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-3xl font-black text-white">24/7</div>
                                <div className="text-sm text-[var(--foreground-muted)]">
                                    Support Available
                                </div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-3xl font-black text-white">50+</div>
                                <div className="text-sm text-[var(--foreground-muted)]">
                                    Equipment Types
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column - Equipment Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative hidden lg:block"
                    >
                        {/* Main Equipment Image Container */}
                        <div className="relative aspect-square max-w-[600px] mx-auto">
                            {/* Rotating ring */}
                            <div className="absolute inset-0 rounded-full border-2 border-dashed border-[var(--color-orange)]/20 animate-[spin_30s_linear_infinite]" />
                            <div className="absolute inset-4 rounded-full border-2 border-dashed border-[var(--color-steel)]/20 animate-[spin_20s_linear_infinite_reverse]" />

                            {/* Center glow */}
                            <div className="absolute inset-1/4 rounded-full bg-gradient-to-br from-[var(--color-orange)]/20 to-transparent blur-2xl" />

                            {/* Equipment placeholder with SVG */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-4/5 h-4/5 relative">
                                    {/* Excavator SVG Illustration */}
                                    <svg
                                        viewBox="0 0 400 300"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-full h-full drop-shadow-2xl"
                                    >
                                        {/* Track/Base */}
                                        <ellipse
                                            cx="200"
                                            cy="260"
                                            rx="120"
                                            ry="20"
                                            fill="url(#shadow)"
                                        />
                                        <rect
                                            x="80"
                                            y="220"
                                            width="180"
                                            height="40"
                                            rx="10"
                                            fill="#2d2d2d"
                                            stroke="#FF6B00"
                                            strokeWidth="2"
                                        />
                                        {/* Track wheels */}
                                        <circle cx="110" cy="240" r="15" fill="#1a1a1a" stroke="#FFB800" strokeWidth="2" />
                                        <circle cx="230" cy="240" r="15" fill="#1a1a1a" stroke="#FFB800" strokeWidth="2" />
                                        <circle cx="170" cy="240" r="12" fill="#1a1a1a" stroke="#FFB800" strokeWidth="2" />

                                        {/* Body */}
                                        <rect
                                            x="100"
                                            y="160"
                                            width="140"
                                            height="60"
                                            rx="8"
                                            fill="url(#bodyGradient)"
                                            stroke="#FF6B00"
                                            strokeWidth="2"
                                        />

                                        {/* Cabin */}
                                        <rect
                                            x="110"
                                            y="120"
                                            width="70"
                                            height="50"
                                            rx="5"
                                            fill="#2d2d2d"
                                            stroke="#FF6B00"
                                            strokeWidth="2"
                                        />
                                        {/* Window */}
                                        <rect
                                            x="118"
                                            y="128"
                                            width="50"
                                            height="30"
                                            rx="3"
                                            fill="#2C5F8D"
                                            opacity="0.6"
                                        />

                                        {/* Arm Section 1 */}
                                        <rect
                                            x="185"
                                            y="100"
                                            width="100"
                                            height="25"
                                            rx="5"
                                            fill="url(#armGradient)"
                                            stroke="#FFB800"
                                            strokeWidth="2"
                                            transform="rotate(-30 185 100)"
                                        />

                                        {/* Arm Section 2 */}
                                        <rect
                                            x="260"
                                            y="40"
                                            width="80"
                                            height="20"
                                            rx="4"
                                            fill="url(#armGradient)"
                                            stroke="#FFB800"
                                            strokeWidth="2"
                                            transform="rotate(20 260 40)"
                                        />

                                        {/* Bucket */}
                                        <path
                                            d="M340 100 L370 90 L380 120 L360 140 L330 130 Z"
                                            fill="#2d2d2d"
                                            stroke="#FF6B00"
                                            strokeWidth="2"
                                        />
                                        {/* Bucket teeth */}
                                        <path d="M365 140 L368 155 M355 138 L358 153 M345 135 L348 150" stroke="#FFB800" strokeWidth="3" strokeLinecap="round" />

                                        {/* Hydraulic cylinders */}
                                        <line x1="200" y1="140" x2="250" y2="70" stroke="#FFB800" strokeWidth="4" strokeLinecap="round" />
                                        <line x1="280" y1="60" x2="330" y2="100" stroke="#FFB800" strokeWidth="4" strokeLinecap="round" />

                                        {/* Pivot points */}
                                        <circle cx="185" cy="130" r="8" fill="#1a1a1a" stroke="#FF6B00" strokeWidth="2" />
                                        <circle cx="260" cy="80" r="6" fill="#1a1a1a" stroke="#FF6B00" strokeWidth="2" />
                                        <circle cx="330" cy="115" r="6" fill="#1a1a1a" stroke="#FF6B00" strokeWidth="2" />

                                        <defs>
                                            <linearGradient id="bodyGradient" x1="100" y1="160" x2="240" y2="220">
                                                <stop offset="0%" stopColor="#FF6B00" />
                                                <stop offset="100%" stopColor="#FF8533" />
                                            </linearGradient>
                                            <linearGradient id="armGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#FFB800" />
                                                <stop offset="100%" stopColor="#FF6B00" />
                                            </linearGradient>
                                            <radialGradient id="shadow">
                                                <stop offset="0%" stopColor="rgba(0,0,0,0.3)" />
                                                <stop offset="100%" stopColor="transparent" />
                                            </radialGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>

                            {/* Floating badges */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-10 right-10 px-4 py-2 rounded-xl bg-[var(--color-charcoal-light)] border border-white/10 shadow-xl"
                            >
                                <div className="text-sm font-medium text-white">CAT 320</div>
                                <div className="text-xs text-[var(--color-orange)]">Available</div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1,
                                }}
                                className="absolute bottom-20 left-0 px-4 py-2 rounded-xl bg-[var(--color-charcoal-light)] border border-white/10 shadow-xl"
                            >
                                <div className="text-sm font-medium text-white">20 Tons</div>
                                <div className="text-xs text-[var(--foreground-muted)]">Capacity</div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{
                                    duration: 3.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.5,
                                }}
                                className="absolute top-1/3 -left-4 px-4 py-2 rounded-xl bg-[var(--color-orange)] shadow-xl"
                            >
                                <div className="text-sm font-bold text-[var(--color-charcoal)]">
                                    From $350/day
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="flex flex-col items-center gap-2 text-[var(--foreground-muted)]"
                >
                    <span className="text-xs uppercase tracking-widest">Scroll</span>
                    <ChevronDown className="w-5 h-5" />
                </motion.div>
            </motion.div>
        </section>
    );
}
