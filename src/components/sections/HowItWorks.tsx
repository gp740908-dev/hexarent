"use client";

import { motion } from "framer-motion";
import {
    Search,
    FileText,
    Calendar,
    Truck,
    CheckCircle,
    ArrowRight,
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Link from "next/link";

const steps = [
    {
        number: "01",
        title: "Browse Equipment",
        description:
            "Explore our comprehensive catalog of heavy machinery. Filter by category, capacity, and availability.",
        icon: Search,
        color: "from-orange-500 to-amber-500",
    },
    {
        number: "02",
        title: "Get Quote",
        description:
            "Submit your requirements and receive a detailed quote within hours. No hidden fees.",
        icon: FileText,
        color: "from-blue-500 to-cyan-500",
    },
    {
        number: "03",
        title: "Schedule Delivery",
        description:
            "Choose your preferred delivery date and location. We handle all logistics.",
        icon: Calendar,
        color: "from-purple-500 to-pink-500",
    },
    {
        number: "04",
        title: "Start Working",
        description:
            "Equipment arrives on-site, fully inspected and ready for operation.",
        icon: Truck,
        color: "from-emerald-500 to-teal-500",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1],
        },
    },
};

export default function HowItWorks() {
    return (
        <section className="py-24 lg:py-32 bg-[var(--color-charcoal-dark)] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `linear-gradient(to right, white 1px, transparent 1px),
                             linear-gradient(to bottom, white 1px, transparent 1px)`,
                        backgroundSize: "60px 60px",
                    }}
                />

                {/* Gradient orb */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-orange)]/5 rounded-full blur-[150px]" />
            </div>

            <div className="container-custom relative">
                {/* Section Header */}
                <ScrollReveal className="text-center mb-16 lg:mb-24">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-orange)]/10 border border-[var(--color-orange)]/20 text-[var(--color-orange)] text-sm font-medium mb-4">
                        Simple Process
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
                        How It{" "}
                        <span className="text-gradient">Works</span>
                    </h2>
                    <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
                        Getting your equipment is simple. Follow these four easy steps and
                        have machinery on your site in no time.
                    </p>
                </ScrollReveal>

                {/* Steps */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
                >
                    {/* Connecting line (desktop only) */}
                    <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-0.5">
                        <div className="h-full bg-gradient-to-r from-[var(--color-orange)]/50 via-[var(--color-steel)]/50 to-[var(--color-orange)]/50" />
                        <div className="absolute inset-0 h-full bg-gradient-to-r from-[var(--color-orange)] via-[var(--color-steel)] to-[var(--color-orange)] animate-pulse opacity-50" />
                    </div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            variants={itemVariants}
                            className="relative"
                        >
                            {/* Step Card */}
                            <div className="relative text-center group">
                                {/* Number & Icon */}
                                <div className="relative inline-block mb-6">
                                    {/* Animated ring */}
                                    <motion.div
                                        className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} opacity-20`}
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            opacity: [0.2, 0.3, 0.2],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            delay: index * 0.5,
                                        }}
                                    />

                                    {/* Icon container */}
                                    <div
                                        className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        <step.icon className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Step number */}
                                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[var(--color-charcoal)] border-2 border-[var(--color-orange)] flex items-center justify-center">
                                        <span className="text-xs font-bold text-[var(--color-orange)]">
                                            {step.number}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--color-orange)] transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-[var(--foreground-muted)] text-sm leading-relaxed">
                                    {step.description}
                                </p>

                                {/* Arrow to next (mobile/tablet) */}
                                {index < steps.length - 1 && (
                                    <div className="lg:hidden flex justify-center mt-6">
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                                            <ArrowRight className="w-4 h-4 text-[var(--foreground-muted)] rotate-90 md:rotate-0" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA */}
                <ScrollReveal delay={0.6} className="text-center mt-16">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-[var(--background-secondary)] border border-white/5">
                        <div className="flex items-center gap-2 text-[var(--color-success)]">
                            <CheckCircle className="w-5 h-5" />
                            <span className="text-sm font-medium text-white">
                                No credit check required
                            </span>
                        </div>
                        <div className="hidden sm:block w-px h-6 bg-white/10" />
                        <Link href="/contact" className="btn btn-primary">
                            Start Your Quote
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
