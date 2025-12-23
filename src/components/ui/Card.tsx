"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface CardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
    padding?: "none" | "sm" | "md" | "lg";
    variant?: "default" | "glass" | "outline";
    onClick?: () => void;
}

export default function Card({
    children,
    className,
    hover = true,
    padding = "md",
    variant = "default",
    onClick,
}: CardProps) {
    const variants = {
        default: "bg-[var(--background-secondary)] border-white/5",
        glass: "bg-[rgba(45,45,45,0.5)] backdrop-blur-xl border-white/10",
        outline: "bg-transparent border-white/10",
    };

    const paddings = {
        none: "",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
    };

    return (
        <motion.div
            className={clsx(
                "rounded-2xl border overflow-hidden transition-all duration-300",
                variants[variant],
                paddings[padding],
                hover && "hover:border-[var(--color-orange)]/30 hover:shadow-2xl",
                onClick && "cursor-pointer",
                className
            )}
            whileHover={hover ? { y: -4, scale: 1.01 } : {}}
            onClick={onClick}
        >
            {children}
        </motion.div>
    );
}

// Card Header Component
interface CardHeaderProps {
    children: ReactNode;
    className?: string;
}

export function CardHeader({ children, className }: CardHeaderProps) {
    return (
        <div className={clsx("mb-4", className)}>
            {children}
        </div>
    );
}

// Card Title Component
interface CardTitleProps {
    children: ReactNode;
    className?: string;
}

export function CardTitle({ children, className }: CardTitleProps) {
    return (
        <h3 className={clsx("text-xl font-bold text-white", className)}>
            {children}
        </h3>
    );
}

// Card Description Component
interface CardDescriptionProps {
    children: ReactNode;
    className?: string;
}

export function CardDescription({ children, className }: CardDescriptionProps) {
    return (
        <p className={clsx("text-[var(--foreground-muted)] mt-1", className)}>
            {children}
        </p>
    );
}

// Card Content Component
interface CardContentProps {
    children: ReactNode;
    className?: string;
}

export function CardContent({ children, className }: CardContentProps) {
    return <div className={clsx("", className)}>{children}</div>;
}

// Card Footer Component
interface CardFooterProps {
    children: ReactNode;
    className?: string;
}

export function CardFooter({ children, className }: CardFooterProps) {
    return (
        <div
            className={clsx(
                "mt-4 pt-4 border-t border-white/10 flex items-center justify-between",
                className
            )}
        >
            {children}
        </div>
    );
}
