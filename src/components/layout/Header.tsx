"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    Menu,
    X,
    Phone,
    ChevronDown,
    Truck,
    Wrench,
    Building2,
    Users,
    FileText,
    MessageCircle,
} from "lucide-react";

const navigation = [
    { name: "Home", href: "/" },
    {
        name: "Equipment",
        href: "/equipment",
        hasDropdown: true,
        items: [
            { name: "Excavators", href: "/equipment?category=excavators", icon: Truck },
            { name: "Cranes", href: "/equipment?category=cranes", icon: Truck },
            { name: "Bulldozers", href: "/equipment?category=bulldozers", icon: Truck },
            { name: "Loaders", href: "/equipment?category=loaders", icon: Truck },
            { name: "All Equipment", href: "/equipment", icon: Truck },
        ],
    },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-[var(--z-sticky)] transition-all duration-300 ${isScrolled
                        ? "bg-[rgba(26,26,26,0.95)] backdrop-blur-xl shadow-lg py-3"
                        : "bg-transparent py-5"
                    }`}
            >
                <div className="container-custom">
                    <nav className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="relative">
                                <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-orange)] to-[var(--color-yellow)] rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform">
                                    <span className="text-[var(--color-charcoal)] font-black text-xl">
                                        H
                                    </span>
                                </div>
                                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[var(--color-steel)] rounded-full" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-black tracking-tight text-white">
                                    HEXA<span className="text-[var(--color-orange)]">Rent</span>
                                </span>
                                <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--foreground-muted)]">
                                    Heavy Equipment
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-8">
                            {navigation.map((item) => (
                                <div
                                    key={item.name}
                                    className="relative"
                                    onMouseEnter={() =>
                                        item.hasDropdown && setActiveDropdown(item.name)
                                    }
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <Link
                                        href={item.href}
                                        className="flex items-center gap-1.5 text-sm font-medium text-[var(--foreground-muted)] hover:text-white transition-colors py-2"
                                    >
                                        {item.name}
                                        {item.hasDropdown && (
                                            <ChevronDown
                                                className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? "rotate-180" : ""
                                                    }`}
                                            />
                                        )}
                                    </Link>

                                    {/* Dropdown Menu */}
                                    <AnimatePresence>
                                        {item.hasDropdown && activeDropdown === item.name && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-0 mt-2 w-56 bg-[var(--color-charcoal-light)] rounded-xl border border-white/10 shadow-2xl overflow-hidden"
                                            >
                                                <div className="p-2">
                                                    {item.items?.map((subItem) => (
                                                        <Link
                                                            key={subItem.name}
                                                            href={subItem.href}
                                                            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-[var(--foreground-muted)] hover:text-white hover:bg-white/5 transition-colors"
                                                        >
                                                            <subItem.icon className="w-4 h-4 text-[var(--color-orange)]" />
                                                            {subItem.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="hidden lg:flex items-center gap-4">
                            <a
                                href="tel:+1234567890"
                                className="flex items-center gap-2 text-sm font-medium text-[var(--foreground-muted)] hover:text-white transition-colors"
                            >
                                <Phone className="w-4 h-4" />
                                <span className="hidden xl:inline">24/7 Hotline</span>
                            </a>
                            <Link href="/contact" className="btn btn-primary btn-sm">
                                Get Quote
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 text-white hover:text-[var(--color-orange)] transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </nav>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[var(--z-modal-backdrop)] lg:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-md bg-[var(--color-charcoal)] z-[var(--z-modal)] lg:hidden overflow-y-auto"
                        >
                            <div className="p-6">
                                {/* Close Button */}
                                <div className="flex justify-end mb-8">
                                    <button
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="p-2 text-[var(--foreground-muted)] hover:text-white transition-colors"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>

                                {/* Navigation Links */}
                                <nav className="space-y-2">
                                    {navigation.map((item, index) => (
                                        <motion.div
                                            key={item.name}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="flex items-center justify-between px-4 py-4 text-lg font-medium text-white hover:text-[var(--color-orange)] hover:bg-white/5 rounded-xl transition-colors"
                                            >
                                                {item.name}
                                                {item.hasDropdown && (
                                                    <ChevronDown className="w-5 h-5" />
                                                )}
                                            </Link>

                                            {/* Mobile Dropdown */}
                                            {item.hasDropdown && (
                                                <div className="pl-4 space-y-1 mt-1">
                                                    {item.items?.map((subItem) => (
                                                        <Link
                                                            key={subItem.name}
                                                            href={subItem.href}
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                            className="flex items-center gap-3 px-4 py-3 text-sm text-[var(--foreground-muted)] hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                                                        >
                                                            <subItem.icon className="w-4 h-4 text-[var(--color-orange)]" />
                                                            {subItem.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </motion.div>
                                    ))}
                                </nav>

                                {/* Mobile CTA */}
                                <div className="mt-8 space-y-4">
                                    <a
                                        href="tel:+1234567890"
                                        className="flex items-center gap-3 px-4 py-4 bg-white/5 rounded-xl text-white"
                                    >
                                        <Phone className="w-5 h-5 text-[var(--color-orange)]" />
                                        <div>
                                            <div className="text-sm text-[var(--foreground-muted)]">
                                                24/7 Emergency Line
                                            </div>
                                            <div className="font-semibold">+1 234 567 890</div>
                                        </div>
                                    </a>

                                    <Link
                                        href="/contact"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="btn btn-primary w-full"
                                    >
                                        Get a Quote
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
