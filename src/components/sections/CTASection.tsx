"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Phone,
    Mail,
    MessageCircle,
    ArrowRight,
    Send,
    Clock,
    MapPin,
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Button from "@/components/ui/Button";

export default function CTASection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <section className="py-24 lg:py-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-charcoal)] via-[var(--color-charcoal-dark)] to-[var(--color-charcoal)]" />

            {/* Decorative gradients */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--color-orange)]/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-[var(--color-steel)]/5 to-transparent" />

            {/* Top border */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-orange)]/40 to-transparent" />

            <div className="container-custom relative">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Column - Content */}
                    <div>
                        <ScrollReveal>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-orange)]/10 border border-[var(--color-orange)]/20 text-[var(--color-orange)] text-sm font-medium mb-6">
                                Get Started Today
                            </span>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                                Need equipment for your{" "}
                                <span className="text-gradient">next project?</span>
                            </h2>

                            <p className="text-lg text-[var(--foreground-muted)] mb-8">
                                Get a personalized quote in minutes. Our team is ready to help
                                you find the right equipment for your project needs.
                            </p>
                        </ScrollReveal>

                        {/* Contact Methods */}
                        <ScrollReveal delay={0.2}>
                            <div className="space-y-4 mb-8">
                                <a
                                    href="tel:+1234567890"
                                    className="flex items-center gap-4 p-4 rounded-xl bg-[var(--background-secondary)] border border-white/5 hover:border-[var(--color-orange)]/30 transition-all group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-[var(--color-orange)] flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Phone className="w-6 h-6 text-[var(--color-charcoal)]" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-[var(--foreground-muted)]">
                                            24/7 Emergency Hotline
                                        </div>
                                        <div className="text-lg font-bold text-white group-hover:text-[var(--color-orange)] transition-colors">
                                            +1 (234) 567-890
                                        </div>
                                    </div>
                                </a>

                                <a
                                    href="mailto:info@hexarent.com"
                                    className="flex items-center gap-4 p-4 rounded-xl bg-[var(--background-secondary)] border border-white/5 hover:border-[var(--color-orange)]/30 transition-all group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-[var(--color-steel)] flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-[var(--foreground-muted)]">
                                            Email Us
                                        </div>
                                        <div className="text-lg font-bold text-white group-hover:text-[var(--color-orange)] transition-colors">
                                            info@hexarent.com
                                        </div>
                                    </div>
                                </a>

                                <a
                                    href="https://wa.me/1234567890"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-xl bg-[var(--background-secondary)] border border-white/5 hover:border-[var(--color-orange)]/30 transition-all group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <MessageCircle className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-[var(--foreground-muted)]">
                                            WhatsApp Business
                                        </div>
                                        <div className="text-lg font-bold text-white group-hover:text-[var(--color-orange)] transition-colors">
                                            Chat with us now
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </ScrollReveal>

                        {/* Business Hours */}
                        <ScrollReveal delay={0.3}>
                            <div className="flex items-center gap-3 text-[var(--foreground-muted)]">
                                <Clock className="w-5 h-5" />
                                <span>
                                    Mon-Fri: 7AM-6PM • Sat: 8AM-4PM •{" "}
                                    <span className="text-[var(--color-orange)]">
                                        24/7 Emergency Service
                                    </span>
                                </span>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Right Column - Quick Quote Form */}
                    <ScrollReveal animation="slideInRight" delay={0.2}>
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            {/* Form Card */}
                            <div className="relative p-8 lg:p-10 rounded-3xl bg-[var(--background-secondary)] border border-white/10 shadow-2xl">
                                {/* Glow effect */}
                                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[var(--color-orange)]/20 via-transparent to-[var(--color-steel)]/20 blur-xl opacity-50" />

                                <div className="relative">
                                    <h3 className="text-2xl font-bold text-white mb-2">
                                        Quick Quote Request
                                    </h3>
                                    <p className="text-[var(--foreground-muted)] mb-8">
                                        Fill out the form below and we&apos;ll get back to you within 2
                                        hours.
                                    </p>

                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="block text-sm font-medium text-white mb-2"
                                            >
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                value={formData.name}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, name: e.target.value })
                                                }
                                                className="input"
                                                placeholder="John Smith"
                                                required
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div>
                                                <label
                                                    htmlFor="email"
                                                    className="block text-sm font-medium text-white mb-2"
                                                >
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    value={formData.email}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, email: e.target.value })
                                                    }
                                                    className="input"
                                                    placeholder="john@company.com"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="phone"
                                                    className="block text-sm font-medium text-white mb-2"
                                                >
                                                    Phone
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    value={formData.phone}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, phone: e.target.value })
                                                    }
                                                    className="input"
                                                    placeholder="+1 (234) 567-890"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="message"
                                                className="block text-sm font-medium text-white mb-2"
                                            >
                                                Project Details
                                            </label>
                                            <textarea
                                                id="message"
                                                rows={4}
                                                value={formData.message}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, message: e.target.value })
                                                }
                                                className="input resize-none"
                                                placeholder="Tell us about your project and equipment needs..."
                                                required
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            fullWidth
                                            size="lg"
                                            rightIcon={<Send className="w-5 h-5" />}
                                        >
                                            Send Quote Request
                                        </Button>

                                        <p className="text-xs text-center text-[var(--foreground-muted)]">
                                            By submitting, you agree to our{" "}
                                            <Link
                                                href="/privacy"
                                                className="text-[var(--color-orange)] hover:underline"
                                            >
                                                Privacy Policy
                                            </Link>
                                        </p>
                                    </form>
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[var(--color-orange)]/10 rounded-full blur-2xl" />
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[var(--color-steel)]/10 rounded-full blur-2xl" />
                        </motion.div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
