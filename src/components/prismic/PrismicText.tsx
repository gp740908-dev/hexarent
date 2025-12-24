import { PrismicRichText as BasePrismicRichText } from "@prismicio/react";
import type { RichTextField, RTLinkNode } from "@prismicio/client";
import Link from "next/link";
import clsx from "clsx";
import type { ReactNode } from "react";

interface PrismicTextProps {
    field: RichTextField;
    className?: string;
}

/**
 * Custom serializers for Prismic Rich Text
 */
const defaultComponents = {
    heading1: ({ children }: { children: ReactNode }) => (
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6">{children}</h1>
    ),
    heading2: ({ children }: { children: ReactNode }) => (
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">{children}</h2>
    ),
    heading3: ({ children }: { children: ReactNode }) => (
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{children}</h3>
    ),
    heading4: ({ children }: { children: ReactNode }) => (
        <h4 className="text-xl md:text-2xl font-semibold text-white mb-3">{children}</h4>
    ),
    heading5: ({ children }: { children: ReactNode }) => (
        <h5 className="text-lg md:text-xl font-semibold text-white mb-2">{children}</h5>
    ),
    heading6: ({ children }: { children: ReactNode }) => (
        <h6 className="text-base md:text-lg font-semibold text-white mb-2">{children}</h6>
    ),
    paragraph: ({ children }: { children: ReactNode }) => (
        <p className="text-[var(--foreground-muted)] leading-relaxed mb-4">{children}</p>
    ),
    preformatted: ({ children }: { children: ReactNode }) => (
        <pre className="bg-[var(--color-charcoal-dark)] rounded-lg p-4 overflow-x-auto mb-4">
            <code className="text-sm font-mono text-white">{children}</code>
        </pre>
    ),
    strong: ({ children }: { children: ReactNode }) => (
        <strong className="font-bold text-white">{children}</strong>
    ),
    em: ({ children }: { children: ReactNode }) => (
        <em className="italic">{children}</em>
    ),
    listItem: ({ children }: { children: ReactNode }) => (
        <li className="text-[var(--foreground-muted)] mb-2 pl-2">{children}</li>
    ),
    oListItem: ({ children }: { children: ReactNode }) => (
        <li className="text-[var(--foreground-muted)] mb-2 pl-2">{children}</li>
    ),
    list: ({ children }: { children: ReactNode }) => (
        <ul className="list-disc list-inside mb-4 space-y-1">{children}</ul>
    ),
    oList: ({ children }: { children: ReactNode }) => (
        <ol className="list-decimal list-inside mb-4 space-y-1">{children}</ol>
    ),
    hyperlink: ({
        children,
        node,
    }: {
        children: ReactNode;
        node: RTLinkNode;
    }) => {
        const url = "url" in node.data ? node.data.url : "#";
        return (
            <Link
                href={url || "#"}
                className="text-[var(--color-orange)] hover:underline"
            >
                {children}
            </Link>
        );
    },
};

export default function PrismicText({
    field,
    className,
}: PrismicTextProps) {
    if (!field) {
        return null;
    }

    return (
        <div className={clsx("prismic-content", className)}>
            <BasePrismicRichText
                field={field}
                components={defaultComponents}
            />
        </div>
    );
}

/**
 * Simple text extraction from Rich Text field
 */
export function asText(field: RichTextField): string {
    if (!field) return "";

    return field
        .map((block) => {
            if ("text" in block) {
                return block.text;
            }
            return "";
        })
        .join(" ");
}
