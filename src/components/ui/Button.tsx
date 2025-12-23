"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface ButtonProps {
    variant?: "primary" | "secondary" | "ghost" | "outline";
    size?: "sm" | "md" | "lg";
    children: ReactNode;
    isLoading?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    fullWidth?: boolean;
    as?: "button" | "a";
    href?: string;
    className?: string;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
}

export default function Button({
    variant = "primary",
    size = "md",
    children,
    isLoading = false,
    leftIcon,
    rightIcon,
    fullWidth = false,
    className,
    disabled,
    as = "button",
    href,
    type = "button",
    onClick,
}: ButtonProps) {
    const baseStyles = `
    inline-flex items-center justify-center gap-2
    font-semibold rounded-xl
    transition-all duration-300
    disabled:opacity-50 disabled:cursor-not-allowed
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--color-charcoal)]
  `;

    const variants = {
        primary: `
      bg-gradient-to-r from-[var(--color-orange)] to-[var(--color-orange-light)]
      text-[var(--color-charcoal)] font-bold
      shadow-lg shadow-orange-500/25
      hover:shadow-xl hover:shadow-orange-500/30
      hover:-translate-y-0.5
      focus:ring-[var(--color-orange)]
    `,
        secondary: `
      bg-transparent
      text-white
      border-2 border-[var(--color-orange)]
      hover:bg-[var(--color-orange)] hover:text-[var(--color-charcoal)]
      hover:-translate-y-0.5
      focus:ring-[var(--color-orange)]
    `,
        ghost: `
      bg-transparent
      text-white
      border border-white/20
      hover:bg-white/10 hover:border-white/30
      focus:ring-white/50
    `,
        outline: `
      bg-transparent
      text-[var(--color-orange)]
      border-2 border-[var(--color-orange)]
      hover:bg-[var(--color-orange)]/10
      focus:ring-[var(--color-orange)]
    `,
    };

    const sizes = {
        sm: "px-4 py-2.5 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    const buttonClasses = clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className
    );

    const content = (
        <>
            {isLoading ? (
                <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    />
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                </svg>
            ) : (
                leftIcon
            )}
            {children}
            {!isLoading && rightIcon}
        </>
    );

    if (as === "a" && href) {
        return (
            <motion.a
                href={href}
                className={buttonClasses}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                {content}
            </motion.a>
        );
    }

    return (
        <motion.button
            type={type}
            className={buttonClasses}
            disabled={disabled || isLoading}
            onClick={onClick}
            whileHover={!disabled && !isLoading ? { scale: 1.02 } : undefined}
            whileTap={!disabled && !isLoading ? { scale: 0.98 } : undefined}
        >
            {content}
        </motion.button>
    );
}
