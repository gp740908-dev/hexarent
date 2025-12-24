"use client";

import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

export function PrismicProvider({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
            <PrismicPreview repositoryName={repositoryName} />
        </>
    );
}
