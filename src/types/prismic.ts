import type * as prismic from "@prismicio/client";

// ============================================
// Equipment Types
// ============================================
export interface PrismicEquipment {
    uid: string;
    equipment_name: string;
    category: string;
    brand: string;
    model: string;
    year_manufactured: number;
    hero_image: prismic.ImageField;
    image_gallery: Array<{
        image: prismic.ImageField;
        caption: string;
    }>;
    short_description: string;
    full_description: prismic.RichTextField;
    // Specifications
    weight: number;
    capacity: number;
    engine_power: string;
    fuel_type: string;
    fuel_consumption: string;
    dimensions: string;
    specifications: Array<{
        spec_name: string;
        spec_value: string;
    }>;
    // Pricing
    daily_rate: number;
    weekly_rate: number;
    monthly_rate: number;
    availability_status: "available" | "limited" | "unavailable";
    // Features
    features: Array<{
        feature: string;
    }>;
    related_equipment: Array<{
        equipment: prismic.ContentRelationshipField;
    }>;
    // SEO
    meta_title: string;
    meta_description: string;
    meta_image: prismic.ImageField;
}

// ============================================
// Project Types
// ============================================
export interface PrismicProject {
    uid: string;
    project_name: string;
    client_name: string;
    industry: string;
    hero_image: prismic.ImageField;
    project_date: string;
    duration: string;
    location: string;
    // Content
    challenge: prismic.RichTextField;
    solution: prismic.RichTextField;
    results: prismic.RichTextField;
    // Media
    before_image: prismic.ImageField;
    after_image: prismic.ImageField;
    project_gallery: Array<{
        image: prismic.ImageField;
        caption: string;
    }>;
    video_url: prismic.EmbedField;
    // Equipment
    equipment_used: Array<{
        equipment: prismic.ContentRelationshipField;
        quantity: number;
        duration: string;
    }>;
    // Testimonial
    testimonial_text: prismic.RichTextField;
    testimonial_author: string;
    testimonial_role: string;
    testimonial_company: string;
    // Stats
    project_stats: Array<{
        stat_label: string;
        stat_value: string;
    }>;
    // SEO
    meta_title: string;
    meta_description: string;
    meta_image: prismic.ImageField;
}

// ============================================
// Homepage Types
// ============================================
export interface PrismicHomepage {
    // Hero
    hero_headline: string;
    hero_subheadline: string;
    hero_description: prismic.RichTextField;
    hero_background_image: prismic.ImageField;
    hero_cta_primary_text: string;
    hero_cta_primary_link: prismic.LinkField;
    hero_cta_secondary_text: string;
    hero_cta_secondary_link: prismic.LinkField;
    // Equipment Showcase
    equipment_section_title: string;
    equipment_section_description: string;
    equipment_categories: Array<{
        category_name: string;
        category_description: string;
        category_icon: prismic.ImageField;
        category_link: prismic.LinkField;
    }>;
    // Stats
    stats: Array<{
        stat_number: number;
        stat_suffix: string;
        stat_label: string;
    }>;
    client_logos: Array<{
        logo: prismic.ImageField;
        client_name: string;
    }>;
    // Featured Equipment
    featured_section_title: string;
    featured_equipment: Array<{
        equipment: prismic.ContentRelationshipField;
    }>;
    // How It Works
    how_it_works_title: string;
    steps: Array<{
        step_number: string;
        step_title: string;
        step_description: string;
        step_icon: prismic.ImageField;
    }>;
    // CTA
    cta_headline: string;
    cta_description: string;
    cta_button_text: string;
    cta_button_link: prismic.LinkField;
    cta_phone: string;
    // Testimonials
    testimonials: Array<{
        quote: prismic.RichTextField;
        author_name: string;
        author_role: string;
        author_company: string;
        author_image: prismic.ImageField;
    }>;
    // SEO
    meta_title: string;
    meta_description: string;
    meta_image: prismic.ImageField;
}

// ============================================
// Settings Types
// ============================================
export interface PrismicSettings {
    // General
    site_name: string;
    site_tagline: string;
    logo_dark: prismic.ImageField;
    logo_light: prismic.ImageField;
    favicon: prismic.ImageField;
    // Contact
    contact_phone: string;
    emergency_hotline: string;
    contact_email: string;
    whatsapp_number: string;
    office_address: prismic.RichTextField;
    // Social
    social_links: Array<{
        platform: string;
        url: prismic.LinkField;
    }>;
    // Business Hours
    business_hours: Array<{
        days: string;
        hours: string;
    }>;
    emergency_note: string;
    // Navigation
    main_navigation: Array<{
        label: string;
        link: prismic.LinkField;
        has_dropdown: boolean;
    }>;
    footer_links: Array<{
        column_title: string;
        links: Array<{
            label: string;
            url: prismic.LinkField;
        }>;
    }>;
    // SEO Defaults
    default_meta_title: string;
    default_meta_description: string;
    default_og_image: prismic.ImageField;
}

// ============================================
// Services Page Types
// ============================================
export interface PrismicServicesPage {
    // Hero
    page_title: string;
    page_description: string;
    hero_image: prismic.ImageField;
    // Services
    services: Array<{
        service_name: string;
        service_slug: string;
        service_icon: prismic.ImageField;
        short_description: string;
        full_description: prismic.RichTextField;
        features: Array<{
            feature: string;
        }>;
        pricing_info: string;
    }>;
    // Why Choose Us
    why_choose_title: string;
    reasons: Array<{
        icon: prismic.ImageField;
        title: string;
        description: string;
    }>;
    // CTA
    cta_title: string;
    cta_description: string;
    cta_button_text: string;
    cta_button_link: prismic.LinkField;
    // SEO
    meta_title: string;
    meta_description: string;
    meta_image: prismic.ImageField;
}

// ============================================
// Re-export prismic types for convenience
// ============================================
export type { prismic };
