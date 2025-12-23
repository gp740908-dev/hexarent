import clsx from "clsx";
import { ReactNode } from "react";

interface BadgeProps {
    variant?: "available" | "limited" | "unavailable" | "default" | "orange" | "steel";
    size?: "sm" | "md";
    children: ReactNode;
    className?: string;
    dot?: boolean;
}

export default function Badge({
    variant = "default",
    size = "md",
    children,
    className,
    dot = false,
}: BadgeProps) {
    const variants = {
        available:
            "bg-green-500/20 text-green-400 border-green-500/30",
        limited:
            "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
        unavailable:
            "bg-red-500/20 text-red-400 border-red-500/30",
        default:
            "bg-white/10 text-white border-white/20",
        orange:
            "bg-[var(--color-orange)]/20 text-[var(--color-orange)] border-[var(--color-orange)]/30",
        steel:
            "bg-[var(--color-steel)]/20 text-[var(--color-steel-light)] border-[var(--color-steel)]/30",
    };

    const sizes = {
        sm: "px-2 py-0.5 text-xs",
        md: "px-3 py-1 text-xs",
    };

    const dotColors = {
        available: "bg-green-400",
        limited: "bg-yellow-400",
        unavailable: "bg-red-400",
        default: "bg-white",
        orange: "bg-[var(--color-orange)]",
        steel: "bg-[var(--color-steel-light)]",
    };

    return (
        <span
            className={clsx(
                "inline-flex items-center gap-1.5 font-semibold uppercase tracking-wider rounded-full border",
                variants[variant],
                sizes[size],
                className
            )}
        >
            {dot && (
                <span
                    className={clsx(
                        "w-1.5 h-1.5 rounded-full animate-pulse",
                        dotColors[variant]
                    )}
                />
            )}
            {children}
        </span>
    );
}
