"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    Search,
    Filter,
    Grid3X3,
    List,
    X,
    ChevronDown,
    SlidersHorizontal,
} from "lucide-react";
import { equipmentData, categoryLabels, EquipmentCategory } from "@/lib/data";
import ScrollReveal from "@/components/animations/ScrollReveal";
import EquipmentCard from "@/components/equipment/EquipmentCard";
import Button from "@/components/ui/Button";

const categories: { value: EquipmentCategory | "all"; label: string }[] = [
    { value: "all", label: "All Equipment" },
    { value: "excavators", label: "Excavators" },
    { value: "cranes", label: "Cranes" },
    { value: "bulldozers", label: "Bulldozers" },
    { value: "loaders", label: "Loaders" },
    { value: "dump-trucks", label: "Dump Trucks" },
];

const brands = ["All Brands", "Caterpillar", "Komatsu", "Hitachi", "Volvo", "Liebherr", "Terex"];

const availabilityOptions = [
    { value: "all", label: "All Availability" },
    { value: "available", label: "Available Now" },
    { value: "limited", label: "Limited" },
];

export default function EquipmentPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<EquipmentCategory | "all">("all");
    const [selectedBrand, setSelectedBrand] = useState("All Brands");
    const [selectedAvailability, setSelectedAvailability] = useState("all");
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    const [showFilters, setShowFilters] = useState(false);
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);

    const filteredEquipment = useMemo(() => {
        return equipmentData.filter((equipment) => {
            // Search filter
            if (searchQuery) {
                const query = searchQuery.toLowerCase();
                const matchesSearch =
                    equipment.name.toLowerCase().includes(query) ||
                    equipment.brand.toLowerCase().includes(query) ||
                    equipment.model.toLowerCase().includes(query) ||
                    equipment.category.toLowerCase().includes(query);
                if (!matchesSearch) return false;
            }

            // Category filter
            if (selectedCategory !== "all" && equipment.category !== selectedCategory) {
                return false;
            }

            // Brand filter
            if (selectedBrand !== "All Brands" && equipment.brand !== selectedBrand) {
                return false;
            }

            // Availability filter
            if (selectedAvailability !== "all" && equipment.availability !== selectedAvailability) {
                return false;
            }

            // Price filter
            if (equipment.dailyRate < priceRange[0] || equipment.dailyRate > priceRange[1]) {
                return false;
            }

            return true;
        });
    }, [searchQuery, selectedCategory, selectedBrand, selectedAvailability, priceRange]);

    const clearFilters = () => {
        setSearchQuery("");
        setSelectedCategory("all");
        setSelectedBrand("All Brands");
        setSelectedAvailability("all");
        setPriceRange([0, 1000]);
    };

    const hasActiveFilters =
        searchQuery ||
        selectedCategory !== "all" ||
        selectedBrand !== "All Brands" ||
        selectedAvailability !== "all";

    return (
        <div className="min-h-screen bg-[var(--color-charcoal)]">
            {/* Hero Section */}
            <section className="pt-32 pb-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-charcoal-dark)] to-[var(--color-charcoal)]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[var(--color-orange)]/5 rounded-full blur-[100px]" />

                <div className="container-custom relative">
                    <ScrollReveal>
                        <div className="text-center max-w-3xl mx-auto">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-orange)]/10 border border-[var(--color-orange)]/20 text-[var(--color-orange)] text-sm font-medium mb-4">
                                200+ Equipment Units
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                                Equipment <span className="text-gradient">Catalog</span>
                            </h1>
                            <p className="text-lg text-[var(--foreground-muted)]">
                                Browse our comprehensive range of heavy equipment. All machinery is
                                regularly maintained and ready for deployment.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Search and Filters */}
            <section className="py-8 border-y border-white/5 bg-[var(--color-charcoal-dark)]/50 sticky top-[72px] z-[var(--z-sticky)] backdrop-blur-xl">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
                        {/* Search Bar */}
                        <div className="relative flex-1 max-w-xl">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--foreground-muted)]" />
                            <input
                                type="text"
                                placeholder="Search equipment by name, brand, or model..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="input pl-12 pr-4"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-[var(--foreground-muted)] hover:text-white"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            )}
                        </div>

                        {/* Filter Controls */}
                        <div className="flex items-center gap-3">
                            {/* Category Dropdown */}
                            <div className="relative">
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value as EquipmentCategory | "all")}
                                    className="input appearance-none pr-10 min-w-[160px]"
                                >
                                    {categories.map((cat) => (
                                        <option key={cat.value} value={cat.value}>
                                            {cat.label}
                                        </option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--foreground-muted)] pointer-events-none" />
                            </div>

                            {/* More Filters Button */}
                            <Button
                                variant="ghost"
                                onClick={() => setShowFilters(!showFilters)}
                                leftIcon={<SlidersHorizontal className="w-4 h-4" />}
                            >
                                Filters
                                {hasActiveFilters && (
                                    <span className="w-2 h-2 rounded-full bg-[var(--color-orange)]" />
                                )}
                            </Button>

                            {/* View Mode Toggle */}
                            <div className="hidden md:flex items-center gap-1 p-1 rounded-lg bg-white/5">
                                <button
                                    onClick={() => setViewMode("grid")}
                                    className={`p-2 rounded-md transition-colors ${viewMode === "grid"
                                            ? "bg-[var(--color-orange)] text-[var(--color-charcoal)]"
                                            : "text-[var(--foreground-muted)] hover:text-white"
                                        }`}
                                >
                                    <Grid3X3 className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => setViewMode("list")}
                                    className={`p-2 rounded-md transition-colors ${viewMode === "list"
                                            ? "bg-[var(--color-orange)] text-[var(--color-charcoal)]"
                                            : "text-[var(--foreground-muted)] hover:text-white"
                                        }`}
                                >
                                    <List className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Expanded Filters */}
                    <AnimatePresence>
                        {showFilters && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="pt-6 mt-6 border-t border-white/5 grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {/* Brand Filter */}
                                    <div>
                                        <label className="block text-sm font-medium text-white mb-2">
                                            Brand
                                        </label>
                                        <select
                                            value={selectedBrand}
                                            onChange={(e) => setSelectedBrand(e.target.value)}
                                            className="input appearance-none"
                                        >
                                            {brands.map((brand) => (
                                                <option key={brand} value={brand}>
                                                    {brand}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Availability Filter */}
                                    <div>
                                        <label className="block text-sm font-medium text-white mb-2">
                                            Availability
                                        </label>
                                        <select
                                            value={selectedAvailability}
                                            onChange={(e) => setSelectedAvailability(e.target.value)}
                                            className="input appearance-none"
                                        >
                                            {availabilityOptions.map((opt) => (
                                                <option key={opt.value} value={opt.value}>
                                                    {opt.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Price Range */}
                                    <div>
                                        <label className="block text-sm font-medium text-white mb-2">
                                            Daily Rate: ${priceRange[0]} - ${priceRange[1]}+
                                        </label>
                                        <input
                                            type="range"
                                            min="0"
                                            max="1000"
                                            step="50"
                                            value={priceRange[1]}
                                            onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                                            className="w-full accent-[var(--color-orange)]"
                                        />
                                    </div>

                                    {/* Clear Filters */}
                                    <div className="flex items-end">
                                        <Button
                                            variant="ghost"
                                            onClick={clearFilters}
                                            className="w-full"
                                        >
                                            Clear All Filters
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            {/* Results */}
            <section className="py-12">
                <div className="container-custom">
                    {/* Results Count */}
                    <div className="flex items-center justify-between mb-8">
                        <p className="text-[var(--foreground-muted)]">
                            Showing{" "}
                            <span className="text-white font-semibold">
                                {filteredEquipment.length}
                            </span>{" "}
                            equipment
                        </p>

                        {hasActiveFilters && (
                            <button
                                onClick={clearFilters}
                                className="text-sm text-[var(--color-orange)] hover:underline"
                            >
                                Clear all filters
                            </button>
                        )}
                    </div>

                    {/* Equipment Grid/List */}
                    {filteredEquipment.length > 0 ? (
                        <motion.div
                            layout
                            className={
                                viewMode === "grid"
                                    ? "grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                                    : "flex flex-col gap-4"
                            }
                        >
                            <AnimatePresence mode="popLayout">
                                {filteredEquipment.map((equipment, index) => (
                                    <motion.div
                                        key={equipment.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <EquipmentCard
                                            equipment={equipment}
                                            viewMode={viewMode}
                                        />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    ) : (
                        <div className="text-center py-20">
                            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/5 flex items-center justify-center">
                                <Search className="w-10 h-10 text-[var(--foreground-muted)]" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">
                                No equipment found
                            </h3>
                            <p className="text-[var(--foreground-muted)] mb-6">
                                Try adjusting your search or filters
                            </p>
                            <Button onClick={clearFilters}>Clear Filters</Button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
