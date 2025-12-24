// Prismic Slice Components
// This file exports all available slices for the SliceZone

import dynamic from "next/dynamic";

// Dynamic imports for slices (code-splitting)
const HeroSection = dynamic(() => import("./HeroSection"));

/**
 * Map of slice types to their components
 * Add new slices here as they are created
 */
export const sliceComponents = {
    hero_section: HeroSection,
    // Add more slices here:
    // equipment_showcase: dynamic(() => import("./EquipmentShowcase")),
    // stats_section: dynamic(() => import("./StatsSection")),
    // featured_equipment: dynamic(() => import("./FeaturedEquipment")),
    // how_it_works: dynamic(() => import("./HowItWorks")),
    // cta_section: dynamic(() => import("./CTASection")),
    // testimonials: dynamic(() => import("./Testimonials")),
};

// Export individual slices
export { HeroSection };
