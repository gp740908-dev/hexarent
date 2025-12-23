"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Eye } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { Equipment } from "@/lib/data";

interface EquipmentCardProps {
    equipment: Equipment;
    viewMode?: "grid" | "list";
}

export default function EquipmentCard({
    equipment,
    viewMode = "grid",
}: EquipmentCardProps) {
    if (viewMode === "list") {
        return (
            <Link href={`/equipment/${equipment.slug}`}>
                <motion.div
                    whileHover={{ x: 4 }}
                    className="group flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-[var(--background-secondary)] border border-white/5 hover:border-[var(--color-orange)]/30 transition-all"
                >
                    {/* Image */}
                    <div className="relative w-full md:w-64 aspect-video md:aspect-[4/3] rounded-xl overflow-hidden bg-[var(--color-charcoal-dark)] shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-orange)]/20 to-[var(--color-steel)]/20" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <svg viewBox="0 0 100 80" className="w-1/2 h-1/2 opacity-30" fill="none">
                                <rect x="10" y="50" width="80" height="20" rx="4" fill="currentColor" className="text-[var(--color-orange)]" />
                                <rect x="20" y="30" width="40" height="25" rx="3" fill="currentColor" className="text-[var(--color-orange)]" />
                            </svg>
                        </div>

                        <div className="absolute top-3 left-3">
                            <Badge variant={equipment.availability} dot>
                                {equipment.availability}
                            </Badge>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-2 text-sm text-[var(--color-orange)] mb-2">
                                <span>{equipment.category.charAt(0).toUpperCase() + equipment.category.slice(1)}</span>
                                <span>•</span>
                                <span>{equipment.brand}</span>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--color-orange)] transition-colors">
                                {equipment.name}
                            </h3>

                            <p className="text-[var(--foreground-muted)] text-sm mb-4 line-clamp-2">
                                {equipment.shortDescription}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {equipment.features.slice(0, 4).map((feature) => (
                                    <span
                                        key={feature}
                                        className="px-2 py-1 text-xs bg-white/5 rounded text-[var(--foreground-muted)]"
                                    >
                                        {feature}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-white/10">
                            <div className="flex items-baseline gap-2">
                                <span className="text-2xl font-black text-white">
                                    ${equipment.dailyRate}
                                </span>
                                <span className="text-sm text-[var(--foreground-muted)]">/ day</span>
                            </div>

                            <div className="flex items-center gap-2 text-[var(--color-orange)]">
                                <span className="font-medium">View Details</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </Link>
        );
    }

    return (
        <Link href={`/equipment/${equipment.slug}`}>
            <motion.div
                className="group h-full"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
            >
                <Card className="h-full overflow-hidden" padding="none" hover={false}>
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-charcoal-dark)]">
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-orange)]/20 to-[var(--color-steel)]/20" />

                        {/* Placeholder Equipment Icon */}
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
                            whileHover={{ opacity: 1 }}
                            className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)] via-transparent to-transparent"
                        />

                        {/* Quick view button */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileHover={{ opacity: 1, scale: 1 }}
                            className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                                <Eye className="w-5 h-5 text-white" />
                            </div>
                        </motion.div>

                        {/* Badge */}
                        <div className="absolute top-4 left-4">
                            <Badge variant={equipment.availability} dot>
                                {equipment.availability}
                            </Badge>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                        {/* Category */}
                        <div className="text-xs font-medium text-[var(--color-orange)] mb-2">
                            {equipment.category.charAt(0).toUpperCase() + equipment.category.slice(1)} • {equipment.brand}
                        </div>

                        {/* Name */}
                        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[var(--color-orange)] transition-colors line-clamp-1">
                            {equipment.name}
                        </h3>

                        {/* Specs */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {equipment.features.slice(0, 3).map((spec) => (
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
                            <span className="text-sm text-[var(--foreground-muted)]">/ day</span>
                        </div>
                    </div>
                </Card>
            </motion.div>
        </Link>
    );
}
