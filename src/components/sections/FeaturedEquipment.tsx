"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play, Eye } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

const featuredEquipment = [
    {
        id: 1,
        name: "CAT 320 Excavator",
        category: "Excavator",
        brand: "Caterpillar",
        capacity: "20 tons",
        dailyRate: 350,
        weeklyRate: 2100,
        availability: "available" as const,
        image: "/equipment/excavator-1.jpg",
        specs: ["20 tons", "Diesel", "GPS Equipped"],
    },
    {
        id: 2,
        name: "Liebherr LTM 1100",
        category: "Crane",
        brand: "Liebherr",
        capacity: "100 tons",
        dailyRate: 850,
        weeklyRate: 5100,
        availability: "available" as const,
        image: "/equipment/crane-1.jpg",
        specs: ["100 tons", "Mobile", "All-terrain"],
    },
    {
        id: 3,
        name: "Komatsu D65 Bulldozer",
        category: "Bulldozer",
        brand: "Komatsu",
        capacity: "18 tons",
        dailyRate: 400,
        weeklyRate: 2400,
        availability: "limited" as const,
        image: "/equipment/bulldozer-1.jpg",
        specs: ["18 tons", "Diesel", "Ripper Equipped"],
    },
    {
        id: 4,
        name: "Volvo L220H Loader",
        category: "Loader",
        brand: "Volvo",
        capacity: "22 tons",
        dailyRate: 380,
        weeklyRate: 2280,
        availability: "available" as const,
        image: "/equipment/loader-1.jpg",
        specs: ["22 tons", "Wheel", "High Lift"],
    },
];

export default function FeaturedEquipment() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <section className="py-24 lg:py-32 bg-[var(--color-charcoal)] relative overflow-hidden">
            {/* Background pattern */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                }}
            />

            <div className="container-custom relative">
                {/* Section Header */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
                    <ScrollReveal>
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-orange)]/10 border border-[var(--color-orange)]/20 text-[var(--color-orange)] text-sm font-medium mb-4">
                            Featured
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
                            Top{" "}
                            <span className="text-gradient">Equipment</span>
                        </h2>
                        <p className="text-lg text-[var(--foreground-muted)] max-w-xl">
                            Our most popular equipment, ready for immediate deployment to your
                            project site.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <Link
                            href="/equipment"
                            className="inline-flex items-center gap-2 text-[var(--color-orange)] font-medium hover:gap-3 transition-all group"
                        >
                            <span>View All Equipment</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </ScrollReveal>
                </div>

                {/* Equipment Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredEquipment.map((equipment, index) => (
                        <ScrollReveal key={equipment.id} delay={index * 0.1}>
                            <Link href={`/equipment/${equipment.id}`}>
                                <motion.div
                                    className="group relative h-full"
                                    onMouseEnter={() => setHoveredId(equipment.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                    whileHover={{ y: -8 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Card
                                        className="h-full overflow-hidden"
                                        padding="none"
                                        hover={false}
                                    >
                                        {/* Image Container */}
                                        <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-charcoal-dark)]">
                                            {/* Placeholder gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-orange)]/20 to-[var(--color-steel)]/20" />

                                            {/* Equipment SVG placeholder */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <svg
                                                    viewBox="0 0 100 80"
                                                    className="w-3/4 h-3/4 opacity-30"
                                                    fill="none"
                                                >
                                                    <rect
                                                        x="10"
                                                        y="50"
                                                        width="80"
                                                        height="20"
                                                        rx="4"
                                                        fill="currentColor"
                                                        className="text-[var(--color-orange)]"
                                                    />
                                                    <rect
                                                        x="20"
                                                        y="30"
                                                        width="40"
                                                        height="25"
                                                        rx="3"
                                                        fill="currentColor"
                                                        className="text-[var(--color-orange)]"
                                                    />
                                                    <path
                                                        d="M60 35 L90 20 L95 30 L65 50"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                        className="text-[var(--color-yellow)]"
                                                    />
                                                </svg>
                                            </div>

                                            {/* Overlay on hover */}
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: hoveredId === equipment.id ? 1 : 0 }}
                                                className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)] via-transparent to-transparent"
                                            />

                                            {/* Quick view button */}
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{
                                                    opacity: hoveredId === equipment.id ? 1 : 0,
                                                    scale: hoveredId === equipment.id ? 1 : 0.8,
                                                }}
                                                className="absolute top-4 right-4"
                                            >
                                                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                                                    <Eye className="w-5 h-5 text-white" />
                                                </div>
                                            </motion.div>

                                            {/* Badge */}
                                            <div className="absolute top-4 left-4">
                                                <Badge
                                                    variant={equipment.availability}
                                                    dot
                                                >
                                                    {equipment.availability}
                                                </Badge>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-5">
                                            {/* Category */}
                                            <div className="text-xs font-medium text-[var(--color-orange)] mb-2">
                                                {equipment.category} • {equipment.brand}
                                            </div>

                                            {/* Name */}
                                            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[var(--color-orange)] transition-colors">
                                                {equipment.name}
                                            </h3>

                                            {/* Specs */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {equipment.specs.map((spec) => (
                                                    <span
                                                        key={spec}
                                                        className="px-2 py-1 text-xs bg-white/5 rounded text-[var(--foreground-muted)]"
                                                    >
                                                        {spec}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Price */}
                                            <div className="flex items-baseline gap-2 pt-4 border-t border-white/10">
                                                <span className="text-2xl font-black text-white">
                                                    ${equipment.dailyRate}
                                                </span>
                                                <span className="text-sm text-[var(--foreground-muted)]">
                                                    / day
                                                </span>
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            </Link>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
