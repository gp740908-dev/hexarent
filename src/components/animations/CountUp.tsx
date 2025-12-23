"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
    end: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
    decimals?: number;
    className?: string;
}

export default function CountUp({
    end,
    duration = 2,
    prefix = "",
    suffix = "",
    decimals = 0,
    className = "",
}: CountUpProps) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (!isInView || hasAnimated.current) return;
        hasAnimated.current = true;

        const startTime = Date.now();
        const endTime = startTime + duration * 1000;

        const animate = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / (duration * 1000), 1);

            // Easing function (easeOutExpo)
            const easeProgress = 1 - Math.pow(2, -10 * progress);

            const currentValue = Math.floor(easeProgress * end);
            setCount(currentValue);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        requestAnimationFrame(animate);
    }, [isInView, end, duration]);

    const formattedValue = decimals > 0
        ? count.toFixed(decimals)
        : count.toLocaleString();

    return (
        <span ref={ref} className={className}>
            {prefix}
            {formattedValue}
            {suffix}
        </span>
    );
}
