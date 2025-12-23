import { Metadata } from "next";
import Link from "next/link";
import {
    ArrowRight,
    Calendar,
    MapPin,
    Building2,
    Truck,
    Quote,
} from "lucide-react";
import { projectsData, getEquipmentById } from "@/lib/data";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
    title: "Projects",
    description:
        "Explore our portfolio of successful heavy equipment rental projects across construction, infrastructure, and renewable energy sectors.",
};

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-[var(--color-charcoal)]">
            {/* Hero */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-charcoal-dark)] to-[var(--color-charcoal)]" />
                <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[var(--color-steel)]/5 rounded-full blur-[150px]" />

                <div className="container-custom relative">
                    <ScrollReveal className="text-center max-w-3xl mx-auto">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-orange)]/10 border border-[var(--color-orange)]/20 text-[var(--color-orange)] text-sm font-medium mb-4">
                            Case Studies
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                            Our <span className="text-gradient">Projects</span>
                        </h1>
                        <p className="text-lg text-[var(--foreground-muted)]">
                            See how we&apos;ve helped construction companies, contractors, and
                            developers complete their projects successfully.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 border-y border-white/5 bg-[var(--color-charcoal-dark)]/50">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: "500+", label: "Projects Completed" },
                            { value: "50+", label: "Industries Served" },
                            { value: "98%", label: "Client Satisfaction" },
                            { value: "10M+", label: "Equipment Hours" },
                        ].map((stat, index) => (
                            <ScrollReveal key={stat.label} delay={index * 0.1}>
                                <div className="text-center">
                                    <div className="text-3xl md:text-4xl font-black text-white mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-[var(--foreground-muted)]">
                                        {stat.label}
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-20">
                <div className="container-custom">
                    <div className="space-y-12">
                        {projectsData.map((project, index) => {
                            const equipmentUsed = project.equipmentUsed
                                .map((id) => getEquipmentById(id))
                                .filter(Boolean);

                            return (
                                <ScrollReveal
                                    key={project.id}
                                    animation={index % 2 === 0 ? "slideInLeft" : "slideInRight"}
                                    delay={0.1}
                                >
                                    <Card className="overflow-hidden" padding="none" hover={true}>
                                        <div className="grid lg:grid-cols-2">
                                            {/* Image */}
                                            <div
                                                className={`relative aspect-[4/3] lg:aspect-auto bg-gradient-to-br from-[var(--color-orange)]/20 to-[var(--color-steel)]/20 ${index % 2 === 1 ? "lg:order-2" : ""
                                                    }`}
                                            >
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <Building2 className="w-24 h-24 text-[var(--color-orange)]/30" />
                                                </div>

                                                {/* Industry Badge */}
                                                <div className="absolute top-6 left-6">
                                                    <Badge variant="orange">
                                                        {project.industry}
                                                    </Badge>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="p-8 lg:p-12 flex flex-col justify-center">
                                                <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--foreground-muted)] mb-4">
                                                    <div className="flex items-center gap-1.5">
                                                        <Calendar className="w-4 h-4" />
                                                        <span>
                                                            {new Date(project.date).toLocaleDateString("en-US", {
                                                                month: "long",
                                                                year: "numeric",
                                                            })}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-1.5">
                                                        <MapPin className="w-4 h-4" />
                                                        <span>{project.location}</span>
                                                    </div>
                                                </div>

                                                <h2 className="text-2xl md:text-3xl font-black text-white mb-2">
                                                    {project.name}
                                                </h2>
                                                <p className="text-[var(--foreground-muted)] mb-1">
                                                    Client: <span className="text-white">{project.client}</span>
                                                </p>

                                                <p className="text-[var(--foreground-muted)] mt-4 mb-6">
                                                    {project.challenge.substring(0, 200)}...
                                                </p>

                                                {/* Equipment Used */}
                                                <div className="mb-6">
                                                    <div className="flex items-center gap-2 text-sm text-[var(--foreground-muted)] mb-3">
                                                        <Truck className="w-4 h-4" />
                                                        <span>Equipment Used:</span>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2">
                                                        {equipmentUsed.map((eq) =>
                                                            eq ? (
                                                                <Link
                                                                    key={eq.id}
                                                                    href={`/equipment/${eq.slug}`}
                                                                    className="px-3 py-1 rounded-full bg-white/5 text-white text-sm hover:bg-[var(--color-orange)]/10 hover:text-[var(--color-orange)] transition-colors"
                                                                >
                                                                    {eq.name}
                                                                </Link>
                                                            ) : null
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Testimonial */}
                                                {project.testimonial && (
                                                    <div className="p-4 rounded-xl bg-white/5 border-l-4 border-[var(--color-orange)] mb-6">
                                                        <Quote className="w-6 h-6 text-[var(--color-orange)] mb-2" />
                                                        <p className="text-white italic text-sm mb-2">
                                                            &ldquo;{project.testimonial.quote.substring(0, 150)}...&rdquo;
                                                        </p>
                                                        <p className="text-xs text-[var(--foreground-muted)]">
                                                            — {project.testimonial.author}, {project.testimonial.role}
                                                        </p>
                                                    </div>
                                                )}

                                                <Link
                                                    href={`/projects/${project.slug}`}
                                                    className="inline-flex items-center gap-2 text-[var(--color-orange)] font-medium hover:gap-3 transition-all"
                                                >
                                                    Read Full Case Study
                                                    <ArrowRight className="w-4 h-4" />
                                                </Link>
                                            </div>
                                        </div>
                                    </Card>
                                </ScrollReveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-[var(--color-charcoal-dark)]">
                <div className="container-custom">
                    <ScrollReveal className="text-center">
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                            Ready to Start Your Project?
                        </h2>
                        <p className="text-lg text-[var(--foreground-muted)] max-w-xl mx-auto mb-8">
                            Let us help you complete your next project with our reliable
                            equipment and exceptional service.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact" className="btn btn-primary btn-lg">
                                Get a Quote
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
