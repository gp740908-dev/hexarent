import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[var(--color-charcoal)] flex items-center justify-center">
            <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto">
                    {/* 404 Number */}
                    <div className="relative mb-8">
                        <span className="text-[180px] md:text-[250px] font-black text-white/5 leading-none select-none">
                            404
                        </span>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[var(--color-orange)]/10 flex items-center justify-center">
                                    <span className="text-4xl">🚧</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
                        Page Not Found
                    </h1>
                    <p className="text-lg text-[var(--foreground-muted)] mb-8">
                        Looks like this equipment has been moved to another location. Let&apos;s
                        get you back on track.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--color-orange)] to-[var(--color-yellow)] text-[var(--color-charcoal)] font-bold hover:shadow-lg hover:shadow-orange-500/25 transition-all"
                        >
                            <Home className="w-5 h-5" />
                            Go Home
                        </Link>
                        <button
                            onClick={() => window.history.back()}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-white/20 text-white font-bold hover:border-white/40 transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Go Back
                        </button>
                    </div>

                    {/* Quick Links */}
                    <div className="mt-12 pt-8 border-t border-white/10">
                        <p className="text-sm text-[var(--foreground-muted)] mb-4">
                            Or check out these pages:
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            {[
                                { name: "Equipment", href: "/equipment" },
                                { name: "Services", href: "/services" },
                                { name: "About Us", href: "/about" },
                                { name: "Contact", href: "/contact" },
                            ].map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-[var(--color-orange)] hover:underline"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
