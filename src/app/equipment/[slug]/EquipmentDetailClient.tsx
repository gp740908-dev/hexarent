"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowLeft,
    Calendar,
    Check,
    ChevronRight,
    Clock,
    Download,
    Fuel,
    Info,
    MapPin,
    Phone,
    Share2,
    Star,
    Truck,
    Weight,
    Zap,
} from "lucide-react";
import { Equipment } from "@/lib/data";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import ScrollReveal from "@/components/animations/ScrollReveal";
import EquipmentCard from "@/components/equipment/EquipmentCard";

interface EquipmentDetailClientProps {
    equipment: Equipment;
    relatedEquipment: Equipment[];
}

export default function EquipmentDetailClient({
    equipment,
    relatedEquipment,
}: EquipmentDetailClientProps) {
    const [rentalDays, setRentalDays] = useState(1);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const calculatePrice = () => {
        if (rentalDays >= 30) {
            return equipment.monthlyRate;
        } else if (rentalDays >= 7) {
            return Math.ceil(rentalDays / 7) * equipment.weeklyRate;
        }
        return rentalDays * equipment.dailyRate;
    };

    return (
        <div className="min-h-screen bg-[var(--color-charcoal)]">
            {/* Breadcrumb */}
            <div className="pt-24 pb-4">
                <div className="container-custom">
                    <nav className="flex items-center gap-2 text-sm text-[var(--foreground-muted)]">
                        <Link href="/" className="hover:text-white transition-colors">
                            Home
                        </Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/equipment" className="hover:text-white transition-colors">
                            Equipment
                        </Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-white">{equipment.name}</span>
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <section className="py-8">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-12 gap-8">
                        {/* Left Column - Images */}
                        <div className="lg:col-span-7">
                            <ScrollReveal>
                                {/* Main Image */}
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[var(--color-charcoal-dark)] mb-4">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-orange)]/20 to-[var(--color-steel)]/20" />

                                    {/* Placeholder Equipment Illustration */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <svg
                                            viewBox="0 0 400 300"
                                            className="w-3/4 h-3/4 opacity-40"
                                            fill="none"
                                        >
                                            <rect
                                                x="80"
                                                y="200"
                                                width="200"
                                                height="50"
                                                rx="10"
                                                fill="currentColor"
                                                className="text-[var(--color-charcoal-light)]"
                                            />
                                            <rect
                                                x="100"
                                                y="130"
                                                width="140"
                                                height="80"
                                                rx="8"
                                                fill="url(#detailGradient)"
                                            />
                                            <rect
                                                x="110"
                                                y="100"
                                                width="80"
                                                height="40"
                                                rx="5"
                                                fill="currentColor"
                                                className="text-[var(--color-charcoal-light)]"
                                            />
                                            <rect
                                                x="118"
                                                y="108"
                                                width="60"
                                                height="24"
                                                rx="3"
                                                fill="currentColor"
                                                className="text-[var(--color-steel)]"
                                                opacity="0.6"
                                            />
                                            <path
                                                d="M240 120 L340 70 L350 90 L260 150"
                                                stroke="currentColor"
                                                strokeWidth="12"
                                                strokeLinecap="round"
                                                className="text-[var(--color-yellow)]"
                                            />
                                            <circle
                                                cx="120"
                                                cy="225"
                                                r="20"
                                                fill="currentColor"
                                                className="text-[var(--color-charcoal-dark)]"
                                            />
                                            <circle
                                                cx="240"
                                                cy="225"
                                                r="20"
                                                fill="currentColor"
                                                className="text-[var(--color-charcoal-dark)]"
                                            />
                                            <defs>
                                                <linearGradient id="detailGradient" x1="100" y1="130" x2="240" y2="210">
                                                    <stop offset="0%" stopColor="#FF6B00" />
                                                    <stop offset="100%" stopColor="#FF8533" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>

                                    {/* Badge */}
                                    <div className="absolute top-6 left-6">
                                        <Badge variant={equipment.availability} dot size="md">
                                            {equipment.availability}
                                        </Badge>
                                    </div>

                                    {/* Share Button */}
                                    <button className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                                        <Share2 className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Thumbnail Gallery */}
                                <div className="flex gap-3 overflow-x-auto pb-2">
                                    {[0, 1, 2, 3].map((index) => (
                                        <button
                                            key={index}
                                            onClick={() => setActiveImageIndex(index)}
                                            className={`shrink-0 w-24 h-20 rounded-lg overflow-hidden border-2 transition-colors ${activeImageIndex === index
                                                    ? "border-[var(--color-orange)]"
                                                    : "border-transparent"
                                                }`}
                                        >
                                            <div className="w-full h-full bg-[var(--color-charcoal-dark)] flex items-center justify-center">
                                                <Truck className="w-8 h-8 text-[var(--color-orange)]/30" />
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Right Column - Details */}
                        <div className="lg:col-span-5">
                            <ScrollReveal animation="slideInRight">
                                {/* Header */}
                                <div className="mb-6">
                                    <div className="flex items-center gap-2 text-sm text-[var(--color-orange)] mb-2">
                                        <span>{equipment.brand}</span>
                                        <span>•</span>
                                        <span>{equipment.model}</span>
                                        <span>•</span>
                                        <span>{equipment.yearManufactured}</span>
                                    </div>
                                    <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
                                        {equipment.name}
                                    </h1>
                                    <p className="text-[var(--foreground-muted)]">
                                        {equipment.description}
                                    </p>
                                </div>

                                {/* Quick Specs */}
                                <div className="grid grid-cols-3 gap-4 mb-6">
                                    <div className="p-4 rounded-xl bg-white/5 text-center">
                                        <Weight className="w-5 h-5 text-[var(--color-orange)] mx-auto mb-2" />
                                        <div className="text-lg font-bold text-white">
                                            {(equipment.weight / 1000).toFixed(0)}t
                                        </div>
                                        <div className="text-xs text-[var(--foreground-muted)]">Weight</div>
                                    </div>
                                    <div className="p-4 rounded-xl bg-white/5 text-center">
                                        <Zap className="w-5 h-5 text-[var(--color-orange)] mx-auto mb-2" />
                                        <div className="text-lg font-bold text-white">
                                            {equipment.capacity}t
                                        </div>
                                        <div className="text-xs text-[var(--foreground-muted)]">Capacity</div>
                                    </div>
                                    <div className="p-4 rounded-xl bg-white/5 text-center">
                                        <Fuel className="w-5 h-5 text-[var(--color-orange)] mx-auto mb-2" />
                                        <div className="text-lg font-bold text-white">
                                            {equipment.fuelType}
                                        </div>
                                        <div className="text-xs text-[var(--foreground-muted)]">Fuel</div>
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="mb-6">
                                    <h3 className="text-sm font-semibold text-white mb-3">Features</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {equipment.features.map((feature) => (
                                            <div
                                                key={feature}
                                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--color-orange)]/10 text-[var(--color-orange)] text-sm"
                                            >
                                                <Check className="w-3.5 h-3.5" />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Pricing Card */}
                                <Card className="mb-6" padding="lg" variant="glass">
                                    <h3 className="text-lg font-bold text-white mb-4">Rental Pricing</h3>

                                    {/* Rate Options */}
                                    <div className="grid grid-cols-3 gap-3 mb-6">
                                        <div
                                            className={`p-3 rounded-xl border text-center cursor-pointer transition-colors ${rentalDays < 7
                                                    ? "border-[var(--color-orange)] bg-[var(--color-orange)]/10"
                                                    : "border-white/10 hover:border-white/20"
                                                }`}
                                            onClick={() => setRentalDays(1)}
                                        >
                                            <div className="text-xl font-bold text-white">
                                                ${equipment.dailyRate}
                                            </div>
                                            <div className="text-xs text-[var(--foreground-muted)]">per day</div>
                                        </div>
                                        <div
                                            className={`p-3 rounded-xl border text-center cursor-pointer transition-colors ${rentalDays >= 7 && rentalDays < 30
                                                    ? "border-[var(--color-orange)] bg-[var(--color-orange)]/10"
                                                    : "border-white/10 hover:border-white/20"
                                                }`}
                                            onClick={() => setRentalDays(7)}
                                        >
                                            <div className="text-xl font-bold text-white">
                                                ${equipment.weeklyRate}
                                            </div>
                                            <div className="text-xs text-[var(--foreground-muted)]">per week</div>
                                        </div>
                                        <div
                                            className={`p-3 rounded-xl border text-center cursor-pointer transition-colors ${rentalDays >= 30
                                                    ? "border-[var(--color-orange)] bg-[var(--color-orange)]/10"
                                                    : "border-white/10 hover:border-white/20"
                                                }`}
                                            onClick={() => setRentalDays(30)}
                                        >
                                            <div className="text-xl font-bold text-white">
                                                ${equipment.monthlyRate}
                                            </div>
                                            <div className="text-xs text-[var(--foreground-muted)]">per month</div>
                                        </div>
                                    </div>

                                    {/* Duration Selector */}
                                    <div className="mb-6">
                                        <label className="block text-sm font-medium text-white mb-2">
                                            Rental Duration: {rentalDays} day{rentalDays > 1 ? "s" : ""}
                                        </label>
                                        <input
                                            type="range"
                                            min="1"
                                            max="60"
                                            value={rentalDays}
                                            onChange={(e) => setRentalDays(parseInt(e.target.value))}
                                            className="w-full accent-[var(--color-orange)]"
                                        />
                                        <div className="flex justify-between text-xs text-[var(--foreground-muted)] mt-1">
                                            <span>1 day</span>
                                            <span>60 days</span>
                                        </div>
                                    </div>

                                    {/* Total */}
                                    <div className="flex items-baseline justify-between p-4 rounded-xl bg-[var(--color-orange)]/10 mb-6">
                                        <span className="text-sm text-white">Estimated Total:</span>
                                        <span className="text-3xl font-black text-[var(--color-orange)]">
                                            ${calculatePrice().toLocaleString()}
                                        </span>
                                    </div>

                                    {/* CTA Buttons */}
                                    <div className="space-y-3">
                                        <Link href="/contact">
                                            <Button fullWidth size="lg">
                                                Get Quote
                                            </Button>
                                        </Link>
                                        <a href="tel:+1234567890">
                                            <Button variant="secondary" fullWidth leftIcon={<Phone className="w-5 h-5" />}>
                                                Call Now
                                            </Button>
                                        </a>
                                    </div>
                                </Card>

                                {/* Additional Info */}
                                <div className="flex items-center gap-6 text-sm text-[var(--foreground-muted)]">
                                    <div className="flex items-center gap-2">
                                        <Truck className="w-4 h-4" />
                                        <span>Delivery Available</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4" />
                                        <span>24/7 Support</span>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Specifications */}
            <section className="py-16 bg-[var(--color-charcoal-dark)]">
                <div className="container-custom">
                    <ScrollReveal>
                        <h2 className="text-2xl md:text-3xl font-black text-white mb-8">
                            Technical Specifications
                        </h2>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {equipment.specifications.map((spec, index) => (
                            <ScrollReveal key={spec.name} delay={index * 0.05}>
                                <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                                    <span className="text-[var(--foreground-muted)]">{spec.name}</span>
                                    <span className="text-white font-semibold">
                                        {spec.value}
                                        {spec.unit && (
                                            <span className="text-[var(--foreground-muted)] text-sm ml-1">
                                                {spec.unit}
                                            </span>
                                        )}
                                    </span>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related Equipment */}
            {relatedEquipment.length > 0 && (
                <section className="py-16">
                    <div className="container-custom">
                        <ScrollReveal>
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-2xl md:text-3xl font-black text-white">
                                    Related Equipment
                                </h2>
                                <Link
                                    href="/equipment"
                                    className="text-[var(--color-orange)] hover:underline"
                                >
                                    View All
                                </Link>
                            </div>
                        </ScrollReveal>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {relatedEquipment.map((item, index) => (
                                <ScrollReveal key={item.id} delay={index * 0.1}>
                                    <EquipmentCard equipment={item} />
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Back Button */}
            <div className="pb-16">
                <div className="container-custom">
                    <Link
                        href="/equipment"
                        className="inline-flex items-center gap-2 text-[var(--foreground-muted)] hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to Equipment Catalog
                    </Link>
                </div>
            </div>
        </div>
    );
}
