"use client";

import { useState } from "react";
import { Metadata } from "next";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Send,
    Check,
    ChevronRight,
    MessageCircle,
    ArrowRight,
    HelpCircle,
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

const contactMethods = [
    {
        icon: Phone,
        title: "Phone",
        description: "24/7 Emergency Hotline",
        value: "+1 (234) 567-890",
        href: "tel:+1234567890",
        color: "from-orange-500 to-amber-500",
    },
    {
        icon: Mail,
        title: "Email",
        description: "General Inquiries",
        value: "info@hexarent.com",
        href: "mailto:info@hexarent.com",
        color: "from-blue-500 to-cyan-500",
    },
    {
        icon: MessageCircle,
        title: "WhatsApp",
        description: "Quick Response",
        value: "Chat with us",
        href: "https://wa.me/1234567890",
        color: "from-green-500 to-emerald-500",
    },
    {
        icon: MapPin,
        title: "Visit Us",
        description: "Headquarters",
        value: "1234 Industrial Blvd, Houston",
        href: "https://maps.google.com",
        color: "from-purple-500 to-pink-500",
    },
];

const faqData = [
    {
        question: "What is the minimum rental period?",
        answer: "Our minimum rental period is one day. However, we offer better rates for weekly and monthly rentals.",
    },
    {
        question: "Do you provide equipment operators?",
        answer: "Yes! We offer certified operators for all our equipment. Operators are experienced, licensed, and trained on safety protocols.",
    },
    {
        question: "What areas do you serve?",
        answer: "We serve Texas, Louisiana, Oklahoma, Arkansas, and New Mexico. Contact us for deliveries outside these regions.",
    },
    {
        question: "What if equipment breaks down?",
        answer: "We provide 24/7 emergency support. If equipment cannot be repaired on-site within 4 hours, we'll swap it with a replacement at no extra cost.",
    },
];

type FormStep = 1 | 2 | 3;

interface FormData {
    // Step 1 - Equipment
    equipmentNeeded: string[];
    projectType: string;
    // Step 2 - Project Details
    projectLocation: string;
    startDate: string;
    duration: string;
    additionalServices: string[];
    // Step 3 - Contact
    name: string;
    email: string;
    phone: string;
    company: string;
    message: string;
}

export default function ContactPage() {
    const [currentStep, setCurrentStep] = useState<FormStep>(1);
    const [formData, setFormData] = useState<FormData>({
        equipmentNeeded: [],
        projectType: "",
        projectLocation: "",
        startDate: "",
        duration: "",
        additionalServices: [],
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

    const equipmentOptions = [
        "Excavators",
        "Cranes",
        "Bulldozers",
        "Loaders",
        "Dump Trucks",
        "Compactors",
    ];

    const projectTypes = [
        "Construction",
        "Demolition",
        "Earthmoving",
        "Road Work",
        "Mining",
        "Other",
    ];

    const additionalServiceOptions = [
        "Certified Operator",
        "Delivery & Transport",
        "Maintenance Support",
        "After-hours Support",
    ];

    const durationOptions = [
        "1-7 days",
        "1-4 weeks",
        "1-3 months",
        "3-6 months",
        "6+ months",
    ];

    const handleEquipmentToggle = (equipment: string) => {
        setFormData((prev) => ({
            ...prev,
            equipmentNeeded: prev.equipmentNeeded.includes(equipment)
                ? prev.equipmentNeeded.filter((e) => e !== equipment)
                : [...prev.equipmentNeeded, equipment],
        }));
    };

    const handleServiceToggle = (service: string) => {
        setFormData((prev) => ({
            ...prev,
            additionalServices: prev.additionalServices.includes(service)
                ? prev.additionalServices.filter((s) => s !== service)
                : [...prev.additionalServices, service],
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    const canProceed = () => {
        switch (currentStep) {
            case 1:
                return formData.equipmentNeeded.length > 0 && formData.projectType;
            case 2:
                return formData.projectLocation && formData.startDate && formData.duration;
            case 3:
                return formData.name && formData.email && formData.phone;
            default:
                return false;
        }
    };

    return (
        <div className="min-h-screen bg-[var(--color-charcoal)]">
            {/* Hero */}
            <section className="pt-32 pb-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-charcoal-dark)] to-[var(--color-charcoal)]" />
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[var(--color-orange)]/5 rounded-full blur-[150px]" />

                <div className="container-custom relative">
                    <ScrollReveal className="text-center max-w-3xl mx-auto">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-orange)]/10 border border-[var(--color-orange)]/20 text-[var(--color-orange)] text-sm font-medium mb-4">
                            Get in Touch
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                            Contact <span className="text-gradient">Us</span>
                        </h1>
                        <p className="text-lg text-[var(--foreground-muted)]">
                            Ready to start your project? Get a quote in minutes or reach out
                            to our team for personalized assistance.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Contact Methods */}
            <section className="py-8">
                <div className="container-custom">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {contactMethods.map((method, index) => (
                            <ScrollReveal key={method.title} delay={index * 0.1}>
                                <a href={method.href} target={method.title === "Visit Us" ? "_blank" : undefined}>
                                    <Card
                                        className="h-full group cursor-pointer"
                                        padding="lg"
                                        hover={true}
                                    >
                                        <div
                                            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                                        >
                                            <method.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-lg font-bold text-white mb-1">
                                            {method.title}
                                        </h3>
                                        <p className="text-xs text-[var(--foreground-muted)] mb-2">
                                            {method.description}
                                        </p>
                                        <p className="text-[var(--color-orange)] font-medium group-hover:underline">
                                            {method.value}
                                        </p>
                                    </Card>
                                </a>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-12 gap-12">
                        {/* Quote Form */}
                        <div className="lg:col-span-7">
                            <ScrollReveal>
                                <Card padding="none" className="overflow-hidden">
                                    {/* Form Header */}
                                    <div className="p-6 bg-gradient-to-r from-[var(--color-orange)]/10 to-[var(--color-steel)]/10 border-b border-white/5">
                                        <h2 className="text-2xl font-bold text-white mb-2">
                                            Request a Quote
                                        </h2>
                                        <p className="text-[var(--foreground-muted)]">
                                            Tell us about your project and we&apos;ll provide a detailed
                                            quote within 2 hours.
                                        </p>

                                        {/* Progress Steps */}
                                        {!isSubmitted && (
                                            <div className="flex items-center gap-2 mt-6">
                                                {[1, 2, 3].map((step) => (
                                                    <div key={step} className="flex items-center">
                                                        <div
                                                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${step === currentStep
                                                                    ? "bg-[var(--color-orange)] text-[var(--color-charcoal)]"
                                                                    : step < currentStep
                                                                        ? "bg-[var(--color-success)] text-white"
                                                                        : "bg-white/10 text-[var(--foreground-muted)]"
                                                                }`}
                                                        >
                                                            {step < currentStep ? (
                                                                <Check className="w-4 h-4" />
                                                            ) : (
                                                                step
                                                            )}
                                                        </div>
                                                        {step < 3 && (
                                                            <div
                                                                className={`w-12 h-0.5 mx-2 ${step < currentStep
                                                                        ? "bg-[var(--color-success)]"
                                                                        : "bg-white/10"
                                                                    }`}
                                                            />
                                                        )}
                                                    </div>
                                                ))}
                                                <span className="ml-4 text-sm text-[var(--foreground-muted)]">
                                                    {currentStep === 1 && "Equipment Selection"}
                                                    {currentStep === 2 && "Project Details"}
                                                    {currentStep === 3 && "Contact Info"}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Form Content */}
                                    <div className="p-6">
                                        {isSubmitted ? (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                className="text-center py-12"
                                            >
                                                <div className="w-20 h-20 mx-auto rounded-full bg-[var(--color-success)]/20 flex items-center justify-center mb-6">
                                                    <Check className="w-10 h-10 text-[var(--color-success)]" />
                                                </div>
                                                <h3 className="text-2xl font-bold text-white mb-2">
                                                    Quote Request Submitted!
                                                </h3>
                                                <p className="text-[var(--foreground-muted)] mb-6">
                                                    We&apos;ll review your request and get back to you within 2
                                                    hours.
                                                </p>
                                                <Button
                                                    onClick={() => {
                                                        setIsSubmitted(false);
                                                        setCurrentStep(1);
                                                        setFormData({
                                                            equipmentNeeded: [],
                                                            projectType: "",
                                                            projectLocation: "",
                                                            startDate: "",
                                                            duration: "",
                                                            additionalServices: [],
                                                            name: "",
                                                            email: "",
                                                            phone: "",
                                                            company: "",
                                                            message: "",
                                                        });
                                                    }}
                                                    variant="secondary"
                                                >
                                                    Submit Another Request
                                                </Button>
                                            </motion.div>
                                        ) : (
                                            <form onSubmit={handleSubmit}>
                                                <AnimatePresence mode="wait">
                                                    {/* Step 1: Equipment Selection */}
                                                    {currentStep === 1 && (
                                                        <motion.div
                                                            key="step1"
                                                            initial={{ opacity: 0, x: 20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            exit={{ opacity: 0, x: -20 }}
                                                            className="space-y-6"
                                                        >
                                                            <div>
                                                                <label className="block text-sm font-medium text-white mb-3">
                                                                    What equipment do you need?
                                                                </label>
                                                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                                                    {equipmentOptions.map((equipment) => (
                                                                        <button
                                                                            key={equipment}
                                                                            type="button"
                                                                            onClick={() => handleEquipmentToggle(equipment)}
                                                                            className={`p-4 rounded-xl border text-left transition-all ${formData.equipmentNeeded.includes(equipment)
                                                                                    ? "border-[var(--color-orange)] bg-[var(--color-orange)]/10"
                                                                                    : "border-white/10 hover:border-white/20"
                                                                                }`}
                                                                        >
                                                                            <div className="flex items-center justify-between">
                                                                                <span className="text-white font-medium">
                                                                                    {equipment}
                                                                                </span>
                                                                                {formData.equipmentNeeded.includes(equipment) && (
                                                                                    <Check className="w-4 h-4 text-[var(--color-orange)]" />
                                                                                )}
                                                                            </div>
                                                                        </button>
                                                                    ))}
                                                                </div>
                                                            </div>

                                                            <div>
                                                                <label className="block text-sm font-medium text-white mb-3">
                                                                    Project Type
                                                                </label>
                                                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                                                    {projectTypes.map((type) => (
                                                                        <button
                                                                            key={type}
                                                                            type="button"
                                                                            onClick={() =>
                                                                                setFormData((prev) => ({
                                                                                    ...prev,
                                                                                    projectType: type,
                                                                                }))
                                                                            }
                                                                            className={`p-3 rounded-xl border text-center transition-all ${formData.projectType === type
                                                                                    ? "border-[var(--color-orange)] bg-[var(--color-orange)]/10"
                                                                                    : "border-white/10 hover:border-white/20"
                                                                                }`}
                                                                        >
                                                                            <span className="text-white">{type}</span>
                                                                        </button>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </motion.div>
                                                    )}

                                                    {/* Step 2: Project Details */}
                                                    {currentStep === 2 && (
                                                        <motion.div
                                                            key="step2"
                                                            initial={{ opacity: 0, x: 20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            exit={{ opacity: 0, x: -20 }}
                                                            className="space-y-6"
                                                        >
                                                            <div>
                                                                <label className="block text-sm font-medium text-white mb-2">
                                                                    Project Location
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    value={formData.projectLocation}
                                                                    onChange={(e) =>
                                                                        setFormData((prev) => ({
                                                                            ...prev,
                                                                            projectLocation: e.target.value,
                                                                        }))
                                                                    }
                                                                    className="input"
                                                                    placeholder="City, State or Full Address"
                                                                />
                                                            </div>

                                                            <div className="grid md:grid-cols-2 gap-4">
                                                                <div>
                                                                    <label className="block text-sm font-medium text-white mb-2">
                                                                        Start Date
                                                                    </label>
                                                                    <input
                                                                        type="date"
                                                                        value={formData.startDate}
                                                                        onChange={(e) =>
                                                                            setFormData((prev) => ({
                                                                                ...prev,
                                                                                startDate: e.target.value,
                                                                            }))
                                                                        }
                                                                        className="input"
                                                                    />
                                                                </div>
                                                                <div>
                                                                    <label className="block text-sm font-medium text-white mb-2">
                                                                        Rental Duration
                                                                    </label>
                                                                    <select
                                                                        value={formData.duration}
                                                                        onChange={(e) =>
                                                                            setFormData((prev) => ({
                                                                                ...prev,
                                                                                duration: e.target.value,
                                                                            }))
                                                                        }
                                                                        className="input"
                                                                    >
                                                                        <option value="">Select duration</option>
                                                                        {durationOptions.map((opt) => (
                                                                            <option key={opt} value={opt}>
                                                                                {opt}
                                                                            </option>
                                                                        ))}
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div>
                                                                <label className="block text-sm font-medium text-white mb-3">
                                                                    Additional Services (Optional)
                                                                </label>
                                                                <div className="grid grid-cols-2 gap-3">
                                                                    {additionalServiceOptions.map((service) => (
                                                                        <button
                                                                            key={service}
                                                                            type="button"
                                                                            onClick={() => handleServiceToggle(service)}
                                                                            className={`p-3 rounded-xl border text-left transition-all ${formData.additionalServices.includes(service)
                                                                                    ? "border-[var(--color-orange)] bg-[var(--color-orange)]/10"
                                                                                    : "border-white/10 hover:border-white/20"
                                                                                }`}
                                                                        >
                                                                            <div className="flex items-center gap-2">
                                                                                <div
                                                                                    className={`w-4 h-4 rounded border flex items-center justify-center ${formData.additionalServices.includes(service)
                                                                                            ? "bg-[var(--color-orange)] border-[var(--color-orange)]"
                                                                                            : "border-white/30"
                                                                                        }`}
                                                                                >
                                                                                    {formData.additionalServices.includes(service) && (
                                                                                        <Check className="w-3 h-3 text-[var(--color-charcoal)]" />
                                                                                    )}
                                                                                </div>
                                                                                <span className="text-white text-sm">{service}</span>
                                                                            </div>
                                                                        </button>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </motion.div>
                                                    )}

                                                    {/* Step 3: Contact Info */}
                                                    {currentStep === 3 && (
                                                        <motion.div
                                                            key="step3"
                                                            initial={{ opacity: 0, x: 20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            exit={{ opacity: 0, x: -20 }}
                                                            className="space-y-6"
                                                        >
                                                            <div className="grid md:grid-cols-2 gap-4">
                                                                <div>
                                                                    <label className="block text-sm font-medium text-white mb-2">
                                                                        Full Name *
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        value={formData.name}
                                                                        onChange={(e) =>
                                                                            setFormData((prev) => ({
                                                                                ...prev,
                                                                                name: e.target.value,
                                                                            }))
                                                                        }
                                                                        className="input"
                                                                        placeholder="John Smith"
                                                                        required
                                                                    />
                                                                </div>
                                                                <div>
                                                                    <label className="block text-sm font-medium text-white mb-2">
                                                                        Company (Optional)
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        value={formData.company}
                                                                        onChange={(e) =>
                                                                            setFormData((prev) => ({
                                                                                ...prev,
                                                                                company: e.target.value,
                                                                            }))
                                                                        }
                                                                        className="input"
                                                                        placeholder="Company Name"
                                                                    />
                                                                </div>
                                                            </div>

                                                            <div className="grid md:grid-cols-2 gap-4">
                                                                <div>
                                                                    <label className="block text-sm font-medium text-white mb-2">
                                                                        Email *
                                                                    </label>
                                                                    <input
                                                                        type="email"
                                                                        value={formData.email}
                                                                        onChange={(e) =>
                                                                            setFormData((prev) => ({
                                                                                ...prev,
                                                                                email: e.target.value,
                                                                            }))
                                                                        }
                                                                        className="input"
                                                                        placeholder="john@company.com"
                                                                        required
                                                                    />
                                                                </div>
                                                                <div>
                                                                    <label className="block text-sm font-medium text-white mb-2">
                                                                        Phone *
                                                                    </label>
                                                                    <input
                                                                        type="tel"
                                                                        value={formData.phone}
                                                                        onChange={(e) =>
                                                                            setFormData((prev) => ({
                                                                                ...prev,
                                                                                phone: e.target.value,
                                                                            }))
                                                                        }
                                                                        className="input"
                                                                        placeholder="+1 (234) 567-890"
                                                                        required
                                                                    />
                                                                </div>
                                                            </div>

                                                            <div>
                                                                <label className="block text-sm font-medium text-white mb-2">
                                                                    Additional Notes (Optional)
                                                                </label>
                                                                <textarea
                                                                    value={formData.message}
                                                                    onChange={(e) =>
                                                                        setFormData((prev) => ({
                                                                            ...prev,
                                                                            message: e.target.value,
                                                                        }))
                                                                    }
                                                                    className="input resize-none"
                                                                    rows={4}
                                                                    placeholder="Tell us more about your project requirements..."
                                                                />
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>

                                                {/* Form Navigation */}
                                                <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
                                                    <button
                                                        type="button"
                                                        onClick={() => setCurrentStep((prev) => (prev - 1) as FormStep)}
                                                        className={`text-[var(--foreground-muted)] hover:text-white transition-colors ${currentStep === 1 ? "invisible" : ""
                                                            }`}
                                                    >
                                                        ← Previous
                                                    </button>

                                                    {currentStep < 3 ? (
                                                        <Button
                                                            type="button"
                                                            onClick={() => setCurrentStep((prev) => (prev + 1) as FormStep)}
                                                            disabled={!canProceed()}
                                                            rightIcon={<ArrowRight className="w-5 h-5" />}
                                                        >
                                                            Continue
                                                        </Button>
                                                    ) : (
                                                        <Button
                                                            type="submit"
                                                            disabled={!canProceed()}
                                                            isLoading={isSubmitting}
                                                            rightIcon={<Send className="w-5 h-5" />}
                                                        >
                                                            Submit Request
                                                        </Button>
                                                    )}
                                                </div>
                                            </form>
                                        )}
                                    </div>
                                </Card>
                            </ScrollReveal>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-5 space-y-8">
                            {/* Business Hours */}
                            <ScrollReveal delay={0.2}>
                                <Card padding="lg">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-lg bg-[var(--color-orange)]/10 flex items-center justify-center">
                                            <Clock className="w-5 h-5 text-[var(--color-orange)]" />
                                        </div>
                                        <h3 className="text-lg font-bold text-white">Business Hours</h3>
                                    </div>
                                    <div className="space-y-3 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-[var(--foreground-muted)]">Monday - Friday</span>
                                            <span className="text-white">7:00 AM - 6:00 PM</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-[var(--foreground-muted)]">Saturday</span>
                                            <span className="text-white">8:00 AM - 4:00 PM</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-[var(--foreground-muted)]">Sunday</span>
                                            <span className="text-white">Closed</span>
                                        </div>
                                        <div className="pt-3 mt-3 border-t border-white/10">
                                            <div className="flex items-center gap-2 text-[var(--color-orange)]">
                                                <span className="w-2 h-2 rounded-full bg-[var(--color-orange)] animate-pulse" />
                                                <span className="font-medium">24/7 Emergency Support Available</span>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </ScrollReveal>

                            {/* FAQ */}
                            <ScrollReveal delay={0.3}>
                                <Card padding="lg">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-lg bg-[var(--color-steel)]/20 flex items-center justify-center">
                                            <HelpCircle className="w-5 h-5 text-[var(--color-steel-light)]" />
                                        </div>
                                        <h3 className="text-lg font-bold text-white">
                                            Frequently Asked Questions
                                        </h3>
                                    </div>
                                    <div className="space-y-3">
                                        {faqData.map((faq, index) => (
                                            <div
                                                key={index}
                                                className="border border-white/5 rounded-xl overflow-hidden"
                                            >
                                                <button
                                                    onClick={() =>
                                                        setExpandedFaq(expandedFaq === index ? null : index)
                                                    }
                                                    className="w-full p-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                                                >
                                                    <span className="text-sm font-medium text-white pr-4">
                                                        {faq.question}
                                                    </span>
                                                    <ChevronRight
                                                        className={`w-4 h-4 text-[var(--foreground-muted)] transition-transform ${expandedFaq === index ? "rotate-90" : ""
                                                            }`}
                                                    />
                                                </button>
                                                <AnimatePresence>
                                                    {expandedFaq === index && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            className="overflow-hidden"
                                                        >
                                                            <p className="px-4 pb-4 text-sm text-[var(--foreground-muted)]">
                                                                {faq.answer}
                                                            </p>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ))}
                                    </div>
                                </Card>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section Placeholder */}
            <section className="py-16 bg-[var(--color-charcoal-dark)]">
                <div className="container-custom">
                    <ScrollReveal>
                        <h2 className="text-2xl font-black text-white mb-8 text-center">
                            Find Us
                        </h2>
                        <div className="aspect-[2/1] rounded-2xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center">
                            <div className="text-center">
                                <MapPin className="w-12 h-12 text-[var(--color-orange)] mx-auto mb-4" />
                                <p className="text-[var(--foreground-muted)]">
                                    Interactive map would be integrated here
                                </p>
                                <p className="text-white font-medium mt-2">
                                    1234 Industrial Blvd, Houston, TX 77001
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
