import { Metadata } from "next";
import Link from "next/link";
import {
    Award,
    Shield,
    Users,
    Truck,
    MapPin,
    Clock,
    ArrowRight,
    Check,
    Target,
    Heart,
    Zap,
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import CountUp from "@/components/animations/CountUp";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
    title: "About Us",
    description:
        "Learn about HEXA Rent - your trusted partner for heavy equipment rental with 10+ years of experience and 200+ equipment units.",
};

const timeline = [
    {
        year: "2014",
        title: "Company Founded",
        description: "Started with just 10 pieces of equipment and a vision to transform heavy equipment rental.",
    },
    {
        year: "2017",
        title: "Regional Expansion",
        description: "Expanded operations to cover the entire Gulf Coast region with new service centers.",
    },
    {
        year: "2020",
        title: "Fleet Modernization",
        description: "Major investment in latest-generation equipment with GPS tracking and telematics.",
    },
    {
        year: "2023",
        title: "200+ Equipment Units",
        description: "Reached milestone of 200+ equipment units across all categories.",
    },
    {
        year: "2024",
        title: "Digital Transformation",
        description: "Launched new digital platform for seamless booking and real-time availability.",
    },
];

const values = [
    {
        icon: Shield,
        title: "Safety First",
        description: "Every decision we make prioritizes the safety of our customers and their teams.",
    },
    {
        icon: Target,
        title: "Reliability",
        description: "We deliver on our promises - equipment arrives on time, every time.",
    },
    {
        icon: Heart,
        title: "Customer Focus",
        description: "Your project's success is our success. We go above and beyond.",
    },
    {
        icon: Zap,
        title: "Innovation",
        description: "Continuously improving our fleet and services with the latest technology.",
    },
];

const certifications = [
    "ISO 9001:2015 Certified",
    "OSHA Compliant",
    "EPA Compliant",
    "DOT Registered",
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[var(--color-charcoal)]">
            {/* Hero */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-charcoal-dark)] to-[var(--color-charcoal)]" />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--color-orange)]/5 to-transparent" />

                <div className="container-custom relative">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <ScrollReveal>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-orange)]/10 border border-[var(--color-orange)]/20 text-[var(--color-orange)] text-sm font-medium mb-4">
                                Since 2014
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                                About <span className="text-gradient">HEXA Rent</span>
                            </h1>
                            <p className="text-lg text-[var(--foreground-muted)] mb-6">
                                For over a decade, HEXA Rent has been the trusted partner for
                                construction companies, contractors, and project managers who need
                                reliable heavy equipment. We&apos;ve built our reputation on quality
                                machinery, exceptional service, and unwavering commitment to our
                                customers&apos; success.
                            </p>
                            <p className="text-lg text-[var(--foreground-muted)]">
                                What started as a small equipment yard has grown into one of the
                                region&apos;s leading heavy equipment rental providers, serving
                                hundreds of projects across multiple states.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal animation="slideInRight" delay={0.2}>
                            <div className="relative">
                                {/* Stats Grid */}
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { value: 10, suffix: "+", label: "Years Experience" },
                                        { value: 200, suffix: "+", label: "Equipment Units" },
                                        { value: 500, suffix: "+", label: "Projects Completed" },
                                        { value: 50, suffix: "+", label: "Expert Team Members" },
                                    ].map((stat, index) => (
                                        <Card key={stat.label} className="text-center" padding="lg">
                                            <div className="flex items-baseline justify-center gap-1 mb-1">
                                                <CountUp
                                                    end={stat.value}
                                                    className="text-4xl font-black text-white"
                                                />
                                                <span className="text-2xl font-black text-[var(--color-orange)]">
                                                    {stat.suffix}
                                                </span>
                                            </div>
                                            <div className="text-sm text-[var(--foreground-muted)]">
                                                {stat.label}
                                            </div>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-[var(--color-charcoal-dark)]">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-8">
                        <ScrollReveal>
                            <Card padding="lg" className="h-full">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-orange)] to-[var(--color-yellow)] flex items-center justify-center mb-6">
                                    <Target className="w-7 h-7 text-[var(--color-charcoal)]" />
                                </div>
                                <h2 className="text-2xl font-black text-white mb-4">Our Mission</h2>
                                <p className="text-[var(--foreground-muted)] text-lg">
                                    To empower construction professionals with reliable, well-maintained
                                    heavy equipment and exceptional service, enabling them to complete
                                    projects safely, efficiently, and on time.
                                </p>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal delay={0.1}>
                            <Card padding="lg" className="h-full">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-steel)] to-[var(--color-steel-light)] flex items-center justify-center mb-6">
                                    <Award className="w-7 h-7 text-white" />
                                </div>
                                <h2 className="text-2xl font-black text-white mb-4">Our Vision</h2>
                                <p className="text-[var(--foreground-muted)] text-lg">
                                    To be the most trusted name in heavy equipment rental, recognized
                                    for our commitment to quality, innovation, and customer success
                                    across the nation.
                                </p>
                            </Card>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20">
                <div className="container-custom">
                    <ScrollReveal className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                            Our <span className="text-gradient">Journey</span>
                        </h2>
                        <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
                            From humble beginnings to industry leader - see how we&apos;ve grown
                            over the years.
                        </p>
                    </ScrollReveal>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-orange)] via-[var(--color-steel)] to-[var(--color-orange)] hidden lg:block" />

                        <div className="space-y-12">
                            {timeline.map((item, index) => (
                                <ScrollReveal
                                    key={item.year}
                                    animation={index % 2 === 0 ? "slideInLeft" : "slideInRight"}
                                    delay={index * 0.1}
                                >
                                    <div
                                        className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? "" : "lg:flex-row-reverse"
                                            }`}
                                    >
                                        <div
                                            className={`${index % 2 === 0 ? "lg:text-right lg:pr-12" : "lg:pl-12 lg:order-2"
                                                }`}
                                        >
                                            <div className="inline-block px-4 py-2 rounded-full bg-[var(--color-orange)]/10 text-[var(--color-orange)] font-bold mb-3">
                                                {item.year}
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-2">
                                                {item.title}
                                            </h3>
                                            <p className="text-[var(--foreground-muted)]">
                                                {item.description}
                                            </p>
                                        </div>

                                        {/* Center dot */}
                                        <div className="hidden lg:flex justify-center absolute left-1/2 -translate-x-1/2">
                                            <div className="w-4 h-4 rounded-full bg-[var(--color-orange)] border-4 border-[var(--color-charcoal)]" />
                                        </div>

                                        <div className={index % 2 === 0 ? "lg:order-2" : ""} />
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-[var(--color-charcoal-dark)]">
                <div className="container-custom">
                    <ScrollReveal className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                            Our <span className="text-gradient">Values</span>
                        </h2>
                        <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
                            The principles that guide everything we do.
                        </p>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <ScrollReveal key={value.title} delay={index * 0.1}>
                                <Card className="text-center h-full" padding="lg">
                                    <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-[var(--color-orange)] to-[var(--color-yellow)] flex items-center justify-center mb-4">
                                        <value.icon className="w-7 h-7 text-[var(--color-charcoal)]" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">
                                        {value.title}
                                    </h3>
                                    <p className="text-[var(--foreground-muted)] text-sm">
                                        {value.description}
                                    </p>
                                </Card>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications & Service Area */}
            <section className="py-20">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Certifications */}
                        <ScrollReveal>
                            <h2 className="text-2xl font-black text-white mb-6">
                                Certifications & Compliance
                            </h2>
                            <div className="grid grid-cols-2 gap-4">
                                {certifications.map((cert) => (
                                    <div
                                        key={cert}
                                        className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5"
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-[var(--color-success)]/20 flex items-center justify-center shrink-0">
                                            <Check className="w-4 h-4 text-[var(--color-success)]" />
                                        </div>
                                        <span className="text-white font-medium">{cert}</span>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>

                        {/* Service Area */}
                        <ScrollReveal delay={0.2}>
                            <h2 className="text-2xl font-black text-white mb-6">Service Area</h2>
                            <Card padding="lg">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-[var(--color-orange)]/10 flex items-center justify-center shrink-0">
                                        <MapPin className="w-6 h-6 text-[var(--color-orange)]" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1">
                                            Headquarters
                                        </h3>
                                        <p className="text-[var(--foreground-muted)]">
                                            1234 Industrial Blvd, Houston, TX 77001
                                        </p>
                                    </div>
                                </div>

                                <p className="text-[var(--foreground-muted)] mb-4">
                                    We proudly serve the following regions:
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "Texas",
                                        "Louisiana",
                                        "Oklahoma",
                                        "Arkansas",
                                        "New Mexico",
                                    ].map((state) => (
                                        <span
                                            key={state}
                                            className="px-3 py-1 rounded-full bg-[var(--color-orange)]/10 text-[var(--color-orange)] text-sm"
                                        >
                                            {state}
                                        </span>
                                    ))}
                                </div>
                            </Card>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-[var(--color-charcoal-dark)]">
                <div className="container-custom">
                    <ScrollReveal className="text-center">
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                            Ready to Work Together?
                        </h2>
                        <p className="text-lg text-[var(--foreground-muted)] max-w-xl mx-auto mb-8">
                            Let&apos;s discuss how HEXA Rent can support your next project.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact" className="btn btn-primary btn-lg">
                                Contact Us
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="/equipment" className="btn btn-secondary btn-lg">
                                Browse Equipment
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
