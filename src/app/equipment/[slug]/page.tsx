import { Metadata } from "next";
import { notFound } from "next/navigation";
import { equipmentData, getEquipmentBySlug, getRelatedEquipment } from "@/lib/data";
import EquipmentDetailClient from "./EquipmentDetailClient";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return equipmentData.map((equipment) => ({
        slug: equipment.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const equipment = getEquipmentBySlug(slug);

    if (!equipment) {
        return {
            title: "Equipment Not Found",
        };
    }

    return {
        title: `${equipment.name} - Rental`,
        description: equipment.shortDescription,
        openGraph: {
            title: `${equipment.name} - HEXA Rent`,
            description: equipment.shortDescription,
            images: [equipment.heroImage],
        },
    };
}

export default async function EquipmentDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const equipment = getEquipmentBySlug(slug);

    if (!equipment) {
        notFound();
    }

    const relatedEquipment = getRelatedEquipment(equipment.id);

    return (
        <EquipmentDetailClient
            equipment={equipment}
            relatedEquipment={relatedEquipment}
        />
    );
}
