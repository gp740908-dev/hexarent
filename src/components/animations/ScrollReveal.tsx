"use client";

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    animation?: "fadeInUp" | "fadeIn" | "slideInLeft" | "slideInRight" | "scaleIn";
    delay?: number;
    duration?: number;
    once?: boolean;
}

export default function ScrollReveal({
    children,
    className = "",
    animation = "fadeInUp",
    delay = 0,
    duration = 0.6,
    once = true,
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once, margin: "-100px" });

    const getAnimationStyles = () => {
        const baseStyles = {
            opacity: isInView ? 1 : 0,
            transition: `all ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
        };

        switch (animation) {
            case "fadeInUp":
                return {
                    ...baseStyles,
                    transform: isInView ? "translateY(0)" : "translateY(30px)",
                };
            case "fadeIn":
                return baseStyles;
            case "slideInLeft":
                return {
                    ...baseStyles,
                    transform: isInView ? "translateX(0)" : "translateX(-50px)",
                };
            case "slideInRight":
                return {
                    ...baseStyles,
                    transform: isInView ? "translateX(0)" : "translateX(50px)",
                };
            case "scaleIn":
                return {
                    ...baseStyles,
                    transform: isInView ? "scale(1)" : "scale(0.9)",
                };
            default:
                return baseStyles;
        }
    };

    return (
        <div ref={ref} className={className} style={getAnimationStyles()}>
            {children}
        </div>
    );
}
