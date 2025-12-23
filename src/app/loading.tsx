export default function Loading() {
    return (
        <div className="min-h-screen bg-[var(--color-charcoal)] flex items-center justify-center">
            <div className="text-center">
                {/* Animated Logo */}
                <div className="relative w-20 h-20 mx-auto mb-6">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[var(--color-orange)] to-[var(--color-yellow)] animate-pulse" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[var(--color-charcoal)] font-black text-2xl">H</span>
                    </div>
                    {/* Spinning ring */}
                    <div className="absolute -inset-2 rounded-xl border-2 border-dashed border-[var(--color-orange)]/30 animate-spin" style={{ animationDuration: '3s' }} />
                </div>

                <h2 className="text-xl font-bold text-white mb-2">Loading</h2>
                <p className="text-[var(--foreground-muted)]">
                    Preparing your equipment...
                </p>

                {/* Loading dots */}
                <div className="flex items-center justify-center gap-1 mt-4">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-orange)] animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 rounded-full bg-[var(--color-orange)] animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 rounded-full bg-[var(--color-orange)] animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
            </div>
        </div>
    );
}
