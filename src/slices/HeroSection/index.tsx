"use client";

import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import type { ImageField, LinkField, RichTextField, Slice } from "@prismicio/client";

// Define the slice type locally since slice-machine generates these
interface HeroSectionSliceDefault extends Slice<"hero_section", {
    headline: string;
    subheadline: string;
    description: RichTextField;
    background_image: ImageField;
    primary_cta_text: string;
    primary_cta_link: LinkField;
    secondary_cta_text: string;
    secondary_cta_link: LinkField;
}> {
    variation: "default";
}

interface HeroSectionSliceWithVideo extends Slice<"hero_section", {
    headline: string;
    subheadline: string;
    video_url: string;
    fallback_image: ImageField;
    primary_cta_text: string;
    primary_cta_link: LinkField;
}> {
    variation: "withVideo";
}

type HeroSectionSlice = HeroSectionSliceDefault | HeroSectionSliceWithVideo;

export type HeroSectionProps = SliceComponentProps<HeroSectionSlice>;

const HeroSection = ({ slice }: HeroSectionProps) => {
    const isVideoVariation = slice.variation === "withVideo";

    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background */}
            {isVideoVariation && "video_url" in slice.primary && slice.primary.video_url ? (
                <div className="absolute inset-0">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src={slice.primary.video_url} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-[var(--color-charcoal)]/80" />
                </div>
            ) : (
                <div className="absolute inset-0">
                    {"background_image" in slice.primary && slice.primary.background_image?.url && (
                        <PrismicNextImage
                            field={slice.primary.background_image}
                            fill
                            className="object-cover"
                            priority
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-charcoal)] via-[var(--color-charcoal)]/90 to-[var(--color-charcoal)]" />
                </div>
            )}

            {/* Content */}
            <div className="container-custom relative z-10 py-32">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6"
                    >
                        {slice.primary.headline}
                    </motion.h1>

                    {/* Subheadline */}
                    {slice.primary.subheadline && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-xl md:text-2xl text-[var(--color-orange)] font-medium mb-6"
                        >
                            {slice.primary.subheadline}
                        </motion.p>
                    )}

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        {slice.primary.primary_cta_text && slice.primary.primary_cta_link && (
                            <PrismicNextLink
                                field={slice.primary.primary_cta_link}
                                className="btn btn-primary btn-lg"
                            >
                                {slice.primary.primary_cta_text}
                                <ArrowRight className="w-5 h-5" />
                            </PrismicNextLink>
                        )}

                        {"secondary_cta_text" in slice.primary &&
                            slice.primary.secondary_cta_text &&
                            "secondary_cta_link" in slice.primary &&
                            slice.primary.secondary_cta_link && (
                                <PrismicNextLink
                                    field={slice.primary.secondary_cta_link}
                                    className="btn btn-secondary btn-lg"
                                >
                                    <Phone className="w-5 h-5" />
                                    {slice.primary.secondary_cta_text}
                                </PrismicNextLink>
                            )}
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
                >
                    <div className="w-1 h-2 rounded-full bg-[var(--color-orange)]" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
