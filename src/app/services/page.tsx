import { Metadata } from "next";
import Link from "next/link";
import {
    Truck,
    Users,
    MapPin,
    Wrench,
    ClipboardCheck,
    ArrowRight,
    Check,
    Phone,
    Shield,
    Clock,
    Award,
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Card from "@/components/ui/Card";
import { servicesData } from "@/lib/data";

export const metadata: Metadata = {
    title: "Services",
    description:
        "Comprehensive heavy equipment rental services including operated equipment, transport, maintenance, and project consultation.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Truck,
    Users,
    MapPin,
    Wrench,
    ClipboardCheck,
};

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-[var(--color-charcoal)]">
            {/* Hero */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-charcoal-dark)] to-[var(--color-charcoal)]" />
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--color-orange)]/5 rounded-full blur-[150px]" />

                <div className="container-custom relative">
                    <ScrollReveal className="text-center max-w-3xl mx-auto">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-orange)]/10 border border-[var(--color-orange)]/20 text-[var(--color-orange)] text-sm font-medium mb-4">
                            What We Offer
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                            Our <span className="text-gradient">Services</span>
                        </h1>
                        <p className="text-lg text-[var(--foreground-muted)]">
                            From equipment rental to full project support, we provide
                            comprehensive solutions for your construction needs.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16">
                <div className="container-custom">
                    <div className="grid gap-8">
                        {servicesData.map((service, index) => {
                            const IconComponent = iconMap[service.icon] || Truck;
                            const isEven = index % 2 === 0;

                            return (
                                <ScrollReveal
                                    key={service.id}
                                    animation={isEven ? "slideInLeft" : "slideInRight"}
                                    delay={index * 0.1}
                                >
                                    <div
                                        id={service.slug}
                                        className="scroll-mt-32"
                                    >
                                        <Card
                                            className="overflow-hidden"
                                            padding="none"
                                            hover={true}
                                        >
                                            <div className={`grid lg:grid-cols-2 ${isEven ? "" : "lg:flex-row-reverse"}`}>
                                                {/* Visual Side */}
                                                <div
                                                    className={`relative p-12 flex items-center justify-center bg-gradient-to-br from-[var(--color-orange)]/10 to-[var(--color-steel)]/10 ${isEven ? "" : "lg:order-2"
                                                        }`}
                                                >
                                                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[var(--color-orange)] to-[var(--color-yellow)] flex items-center justify-center">
                                                        <IconComponent className="w-16 h-16 text-[var(--color-charcoal)]" />
                                                    </div>

                                                    {/* Decorative elements */}
                                                    <div className="absolute top-8 right-8 w-20 h-20 rounded-full border border-[var(--color-orange)]/20" />
                                                    <div className="absolute bottom-12 left-12 w-32 h-32 rounded-full border border-[var(--color-steel)]/10" />
                                                </div>

                                                {/* Content Side */}
                                                <div className="p-8 lg:p-12">
                                                    <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
                                                        {service.name}
                                                    </h2>
                                                    <p className="text-[var(--foreground-muted)] mb-6 text-lg">
                                                        {service.description}
                                                    </p>

                                                    {/* Features List */}
                                                    <ul className="space-y-3 mb-8">
                                                        {service.features.map((feature) => (
                                                            <li
                                                                key={feature}
                                                                className="flex items-center gap-3 text-white"
                                                            >
                                                                <div className="w-5 h-5 rounded-full bg-[var(--color-orange)]/20 flex items-center justify-center shrink-0">
                                                                    <Check className="w-3 h-3 text-[var(--color-orange)]" />
                                                                </div>
                                                                {feature}
                                                            </li>
                                                        ))}
                                                    </ul>

                                                    {/* Pricing & CTA */}
                                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                                        <div className="px-4 py-2 rounded-lg bg-[var(--color-orange)]/10 text-[var(--color-orange)] font-semibold">
                                                            {service.pricingInfo}
                                                        </div>
                                                        <Link
                                                            href="/contact"
                                                            className="inline-flex items-center gap-2 text-[var(--color-orange)] font-medium hover:gap-3 transition-all"
                                                        >
                                                            Get Started
                                                            <ArrowRight className="w-4 h-4" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    </div>
                                </ScrollReveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-[var(--color-charcoal-dark)]">
                <div className="container-custom">
                    <ScrollReveal className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                            Why Choose <span className="text-gradient">HEXA Rent</span>
                        </h2>
                        <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
                            We&apos;re committed to providing the best equipment and service in
                            the industry.
                        </p>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: Shield,
                                title: "Safety First",
                                description:
                                    "All equipment meets strict safety standards and undergoes regular inspections.",
                            },
                            {
                                icon: Clock,
                                title: "24/7 Support",
                                description:
                                    "Round-the-clock support for emergencies and technical assistance.",
                            },
                            {
                                icon: Award,
                                title: "Quality Equipment",
                                description:
                                    "Latest models from top manufacturers, regularly maintained.",
                            },
                            {
                                icon: Users,
                                title: "Expert Team",
                                description:
                                    "Certified operators and technicians with years of experience.",
                            },
                        ].map((item, index) => (
                            <ScrollReveal key={item.title} delay={index * 0.1}>
                                <Card className="text-center h-full" padding="lg">
                                    <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-[var(--color-orange)] to-[var(--color-yellow)] flex items-center justify-center mb-4">
                                        <item.icon className="w-7 h-7 text-[var(--color-charcoal)]" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-[var(--foreground-muted)] text-sm">
                                        {item.description}
                                    </p>
                                </Card>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="container-custom">
                    <ScrollReveal>
                        <div className="relative p-12 rounded-3xl bg-gradient-to-r from-[var(--color-orange)] to-[var(--color-yellow)] text-center overflow-hidden">
                            {/* Pattern */}
                            <div
                                className="absolute inset-0 opacity-10"
                                style={{
                                    backgroundImage: `radial-gradient(circle at 2px 2px, black 1px, transparent 1px)`,
                                    backgroundSize: "20px 20px",
                                }}
                            />

                            <div className="relative">
                                <h2 className="text-3xl md:text-4xl font-black text-[var(--color-charcoal)] mb-4">
                                    Ready to Get Started?
                                </h2>
                                <p className="text-[var(--color-charcoal)]/80 mb-8 max-w-xl mx-auto">
                                    Contact our team today for a free consultation and quote.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[var(--color-charcoal)] text-white font-bold hover:bg-[var(--color-charcoal-dark)] transition-colors"
                                    >
                                        Contact Us
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                    <a
                                        href="tel:+1234567890"
                                        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-transparent border-2 border-[var(--color-charcoal)] text-[var(--color-charcoal)] font-bold hover:bg-[var(--color-charcoal)]/10 transition-colors"
                                    >
                                        <Phone className="w-5 h-5" />
                                        Call Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
