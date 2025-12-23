import Link from "next/link";
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Youtube,
    ArrowUpRight,
    Truck,
} from "lucide-react";

const footerLinks = {
    equipment: [
        { name: "Excavators", href: "/equipment?category=excavators" },
        { name: "Cranes", href: "/equipment?category=cranes" },
        { name: "Bulldozers", href: "/equipment?category=bulldozers" },
        { name: "Loaders", href: "/equipment?category=loaders" },
        { name: "Dump Trucks", href: "/equipment?category=dump-trucks" },
        { name: "All Equipment", href: "/equipment" },
    ],
    services: [
        { name: "Equipment Rental", href: "/services#rental" },
        { name: "Operated Equipment", href: "/services#operated" },
        { name: "Transport & Logistics", href: "/services#transport" },
        { name: "Maintenance & Support", href: "/services#maintenance" },
        { name: "Project Consultation", href: "/services#consultation" },
    ],
    company: [
        { name: "About Us", href: "/about" },
        { name: "Our Projects", href: "/projects" },
        { name: "Careers", href: "/careers" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
    ],
    legal: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
    ],
};

const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com" },
];

export default function Footer() {
    return (
        <footer className="bg-[var(--color-charcoal-dark)] border-t border-white/5">
            {/* Main Footer Content */}
            <div className="container-custom py-16 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
                    {/* Brand Column */}
                    <div className="lg:col-span-4">
                        <Link href="/" className="flex items-center gap-3 mb-6">
                            <div className="relative">
                                <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-orange)] to-[var(--color-yellow)] rounded-xl flex items-center justify-center">
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

                        <p className="text-[var(--foreground-muted)] mb-6 max-w-sm">
                            Your trusted partner for heavy equipment rental. We provide
                            reliable machinery and exceptional service for construction
                            projects of all sizes.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-4">
                            <a
                                href="tel:+1234567890"
                                className="flex items-center gap-3 text-white hover:text-[var(--color-orange)] transition-colors group"
                            >
                                <div className="w-10 h-10 rounded-lg bg-[var(--color-orange)]/10 flex items-center justify-center group-hover:bg-[var(--color-orange)]/20 transition-colors">
                                    <Phone className="w-5 h-5 text-[var(--color-orange)]" />
                                </div>
                                <div>
                                    <div className="text-xs text-[var(--foreground-muted)]">
                                        24/7 Hotline
                                    </div>
                                    <div className="font-semibold">+1 (234) 567-890</div>
                                </div>
                            </a>

                            <a
                                href="mailto:info@hexarent.com"
                                className="flex items-center gap-3 text-white hover:text-[var(--color-orange)] transition-colors group"
                            >
                                <div className="w-10 h-10 rounded-lg bg-[var(--color-orange)]/10 flex items-center justify-center group-hover:bg-[var(--color-orange)]/20 transition-colors">
                                    <Mail className="w-5 h-5 text-[var(--color-orange)]" />
                                </div>
                                <div>
                                    <div className="text-xs text-[var(--foreground-muted)]">
                                        Email Us
                                    </div>
                                    <div className="font-semibold">info@hexarent.com</div>
                                </div>
                            </a>

                            <div className="flex items-start gap-3 text-[var(--foreground-muted)]">
                                <div className="w-10 h-10 rounded-lg bg-[var(--color-orange)]/10 flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5 text-[var(--color-orange)]" />
                                </div>
                                <div>
                                    <div className="text-xs">Headquarters</div>
                                    <div className="text-white">
                                        1234 Industrial Blvd
                                        <br />
                                        Houston, TX 77001
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Equipment Links */}
                    <div className="lg:col-span-2">
                        <h4 className="text-white font-semibold mb-5">Equipment</h4>
                        <ul className="space-y-3">
                            {footerLinks.equipment.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-[var(--foreground-muted)] hover:text-[var(--color-orange)] transition-colors text-sm flex items-center gap-1 group"
                                    >
                                        {link.name}
                                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div className="lg:col-span-2">
                        <h4 className="text-white font-semibold mb-5">Services</h4>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-[var(--foreground-muted)] hover:text-[var(--color-orange)] transition-colors text-sm flex items-center gap-1 group"
                                    >
                                        {link.name}
                                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className="lg:col-span-2">
                        <h4 className="text-white font-semibold mb-5">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-[var(--foreground-muted)] hover:text-[var(--color-orange)] transition-colors text-sm flex items-center gap-1 group"
                                    >
                                        {link.name}
                                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="lg:col-span-2">
                        <h4 className="text-white font-semibold mb-5">Stay Updated</h4>
                        <p className="text-[var(--foreground-muted)] text-sm mb-4">
                            Subscribe for equipment updates and special offers.
                        </p>
                        <form className="space-y-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="input text-sm"
                                required
                            />
                            <button type="submit" className="btn btn-primary w-full btn-sm">
                                Subscribe
                            </button>
                        </form>

                        {/* Business Hours */}
                        <div className="mt-6 pt-6 border-t border-white/10">
                            <div className="flex items-center gap-2 text-sm text-[var(--foreground-muted)] mb-2">
                                <Clock className="w-4 h-4" />
                                <span>Business Hours</span>
                            </div>
                            <p className="text-sm text-white">
                                Mon - Fri: 7:00 AM - 6:00 PM
                                <br />
                                Sat: 8:00 AM - 4:00 PM
                                <br />
                                <span className="text-[var(--color-orange)]">
                                    24/7 Emergency Service
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5">
                <div className="container-custom py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        {/* Copyright */}
                        <div className="text-[var(--foreground-muted)] text-sm text-center md:text-left">
                            © {new Date().getFullYear()} HEXA Rent. All rights reserved.
                        </div>

                        {/* Legal Links */}
                        <div className="flex items-center gap-6">
                            {footerLinks.legal.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-[var(--foreground-muted)] hover:text-white transition-colors text-sm"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-[var(--foreground-muted)] hover:bg-[var(--color-orange)] hover:text-white transition-all"
                                    aria-label={social.name}
                                >
                                    <social.icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
