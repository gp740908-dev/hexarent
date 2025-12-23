"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Truck, Building2, HardHat, Wrench } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Card from "@/components/ui/Card";

const categories = [
    {
        name: "Excavators",
        description: "Hydraulic excavators from 5 to 90 tons",
        count: "20+",
        models: "Models Available",
        icon: Truck,
        href: "/equipment?category=excavators",
        gradient: "from-orange-500 to-amber-500",
        features: ["Mini Excavators", "Medium Range", "Heavy Duty"],
    },
    {
        name: "Cranes",
        description: "Mobile and tower cranes for any height",
        count: "200",
        models: "Tons Max Capacity",
        icon: Building2,
        href: "/equipment?category=cranes",
        gradient: "from-blue-500 to-cyan-500",
        features: ["Mobile Cranes", "Tower Cranes", "Crawler Cranes"],
    },
    {
        name: "Bulldozers",
        description: "Powerful dozers for earthmoving",
        count: "15+",
        models: "Units Available",
        icon: HardHat,
        href: "/equipment?category=bulldozers",
        gradient: "from-yellow-500 to-orange-500",
        features: ["CAT", "Komatsu", "Hitachi"],
    },
    {
        name: "Loaders",
        description: "Wheel and track loaders for efficiency",
        count: "25+",
        models: "Models in Fleet",
        icon: Wrench,
        href: "/equipment?category=loaders",
        gradient: "from-emerald-500 to-teal-500",
        features: ["Wheel Loaders", "Track Loaders", "Skid Steer"],
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1],
        },
    },
};

export default function EquipmentShowcase() {
    return (
        <section className="py-24 lg:py-32 bg-[var(--color-charcoal-dark)] relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-orange)]/30 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-orange)]/30 to-transparent" />

            <div className="container-custom relative">
                {/* Section Header */}
                <ScrollReveal className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-orange)]/10 border border-[var(--color-orange)]/20 text-[var(--color-orange)] text-sm font-medium mb-4">
                        Our Fleet
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
                        Equipment{" "}
                        <span className="text-gradient">Categories</span>
                    </h2>
                    <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
                        Browse our comprehensive range of heavy equipment, all maintained to
                        the highest standards and ready for your project.
                    </p>
                </ScrollReveal>

                {/* Equipment Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {categories.map((category, index) => (
                        <motion.div key={category.name} variants={itemVariants}>
                            <Link href={category.href}>
                                <Card
                                    className="h-full group"
                                    padding="lg"
                                    hover={true}
                                >
                                    {/* Icon */}
                                    <div
                                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        <category.icon className="w-7 h-7 text-white" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--color-orange)] transition-colors">
                                        {category.name}
                                    </h3>
                                    <p className="text-sm text-[var(--foreground-muted)] mb-4">
                                        {category.description}
                                    </p>

                                    {/* Stats */}
                                    <div className="flex items-baseline gap-2 mb-4">
                                        <span className="text-3xl font-black text-white">
                                            {category.count}
                                        </span>
                                        <span className="text-sm text-[var(--foreground-muted)]">
                                            {category.models}
                                        </span>
                                    </div>

                                    {/* Features */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {category.features.map((feature) => (
                                            <span
                                                key={feature}
                                                className="px-2 py-1 text-xs bg-white/5 rounded-md text-[var(--foreground-muted)]"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    <div className="flex items-center gap-2 text-[var(--color-orange)] font-medium group-hover:gap-3 transition-all">
                                        <span>View Equipment</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View All Button */}
                <ScrollReveal delay={0.4} className="text-center mt-12">
                    <Link
                        href="/equipment"
                        className="btn btn-secondary inline-flex items-center gap-2"
                    >
                        View All Equipment
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </ScrollReveal>
            </div>
        </section>
    );
}
