"use client";

import { motion } from "framer-motion";
import {
    Award,
    Clock,
    Users,
    Wrench,
    Shield,
    Truck,
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import CountUp from "@/components/animations/CountUp";

const stats = [
    {
        value: 500,
        suffix: "+",
        label: "Projects Completed",
        icon: Award,
        description: "Successful project deliveries",
    },
    {
        value: 200,
        suffix: "+",
        label: "Equipment Units",
        icon: Truck,
        description: "Ready for deployment",
    },
    {
        value: 50,
        suffix: "+",
        label: "Certified Operators",
        icon: Users,
        description: "Expert team members",
    },
    {
        value: 24,
        suffix: "/7",
        label: "Emergency Support",
        icon: Clock,
        description: "Round the clock service",
    },
];

const features = [
    {
        icon: Shield,
        title: "Safety First",
        description: "All equipment meets rigorous safety standards and certifications",
    },
    {
        icon: Wrench,
        title: "Regular Maintenance",
        description: "Fleet maintained by certified technicians with genuine parts",
    },
];

export default function StatsSection() {
    return (
        <section className="py-24 lg:py-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-charcoal)] to-[var(--color-charcoal-dark)]" />

            {/* Decorative elements */}
            <div className="absolute top-1/2 left-0 w-1/3 h-[1px] bg-gradient-to-r from-[var(--color-orange)]/50 to-transparent" />
            <div className="absolute top-1/2 right-0 w-1/3 h-[1px] bg-gradient-to-l from-[var(--color-orange)]/50 to-transparent" />

            <div className="container-custom relative">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column - Stats */}
                    <div>
                        <ScrollReveal>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-orange)]/10 border border-[var(--color-orange)]/20 text-[var(--color-orange)] text-sm font-medium mb-4">
                                Why Choose Us
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
                                Trusted by{" "}
                                <span className="text-gradient">Industry Leaders</span>
                            </h2>
                            <p className="text-lg text-[var(--foreground-muted)] mb-12">
                                With years of experience in heavy equipment rental, we&apos;ve built
                                a reputation for reliability, quality, and exceptional service.
                            </p>
                        </ScrollReveal>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat, index) => (
                                <ScrollReveal
                                    key={stat.label}
                                    delay={index * 0.1}
                                    className="relative"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className="p-6 rounded-2xl bg-[var(--background-secondary)] border border-white/5 hover:border-[var(--color-orange)]/30 transition-colors"
                                    >
                                        {/* Icon */}
                                        <div className="w-12 h-12 rounded-xl bg-[var(--color-orange)]/10 flex items-center justify-center mb-4">
                                            <stat.icon className="w-6 h-6 text-[var(--color-orange)]" />
                                        </div>

                                        {/* Value */}
                                        <div className="flex items-baseline gap-1 mb-1">
                                            <CountUp
                                                end={stat.value}
                                                className="text-4xl font-black text-white"
                                            />
                                            <span className="text-2xl font-black text-[var(--color-orange)]">
                                                {stat.suffix}
                                            </span>
                                        </div>

                                        {/* Label */}
                                        <div className="text-sm font-medium text-white mb-1">
                                            {stat.label}
                                        </div>
                                        <div className="text-xs text-[var(--foreground-muted)]">
                                            {stat.description}
                                        </div>
                                    </motion.div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Features & Visual */}
                    <div className="relative">
                        {/* Large decorative number */}
                        <div className="absolute -top-20 -right-10 text-[200px] font-black text-white/[0.02] select-none pointer-events-none">
                            #1
                        </div>

                        <ScrollReveal animation="slideInRight">
                            <div className="relative">
                                {/* Feature cards */}
                                <div className="space-y-6">
                                    {features.map((feature, index) => (
                                        <motion.div
                                            key={feature.title}
                                            initial={{ opacity: 0, x: 30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.2 }}
                                            viewport={{ once: true }}
                                            className="flex gap-5 p-6 rounded-2xl bg-[var(--background-secondary)] border border-white/5 hover:border-[var(--color-orange)]/30 transition-all hover:shadow-lg group"
                                        >
                                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-orange)] to-[var(--color-yellow)] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                                <feature.icon className="w-7 h-7 text-[var(--color-charcoal)]" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[var(--color-orange)] transition-colors">
                                                    {feature.title}
                                                </h3>
                                                <p className="text-[var(--foreground-muted)]">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Client logos placeholder */}
                                <div className="mt-12 pt-8 border-t border-white/10">
                                    <p className="text-sm text-[var(--foreground-muted)] mb-6">
                                        Trusted by leading construction companies
                                    </p>
                                    <div className="flex items-center gap-8 opacity-50">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div
                                                key={i}
                                                className="w-24 h-12 rounded-lg bg-white/10 flex items-center justify-center"
                                            >
                                                <span className="text-xs text-white/50">Logo {i}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
