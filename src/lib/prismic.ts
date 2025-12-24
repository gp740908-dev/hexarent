import { createClient } from "@/prismicio";
import * as prismic from "@prismicio/client";

/**
 * Fetch all equipment documents
 */
export async function getAllEquipment() {
    const client = createClient();

    const equipment = await client.getAllByType("equipment", {
        orderings: [
            { field: "my.equipment.equipment_name", direction: "asc" }
        ],
    });

    return equipment;
}

/**
 * Fetch equipment by category
 */
export async function getEquipmentByCategory(category: string) {
    const client = createClient();

    const equipment = await client.getAllByType("equipment", {
        filters: [
            prismic.filter.at("my.equipment.category", category)
        ],
        orderings: [
            { field: "my.equipment.equipment_name", direction: "asc" }
        ],
    });

    return equipment;
}

/**
 * Fetch single equipment by UID
 */
export async function getEquipmentByUID(uid: string) {
    const client = createClient();

    try {
        const equipment = await client.getByUID("equipment", uid);
        return equipment;
    } catch {
        return null;
    }
}

/**
 * Fetch featured equipment (available status, limited to count)
 */
export async function getFeaturedEquipment(count: number = 4) {
    const client = createClient();

    const equipment = await client.getAllByType("equipment", {
        filters: [
            prismic.filter.at("my.equipment.availability_status", "available")
        ],
        pageSize: count,
    });

    return equipment;
}

/**
 * Fetch all projects
 */
export async function getAllProjects() {
    const client = createClient();

    const projects = await client.getAllByType("project", {
        orderings: [
            { field: "my.project.project_date", direction: "desc" }
        ],
    });

    return projects;
}

/**
 * Fetch project by UID
 */
export async function getProjectByUID(uid: string) {
    const client = createClient();

    try {
        const project = await client.getByUID("project", uid);
        return project;
    } catch {
        return null;
    }
}

/**
 * Fetch projects by industry
 */
export async function getProjectsByIndustry(industry: string) {
    const client = createClient();

    const projects = await client.getAllByType("project", {
        filters: [
            prismic.filter.at("my.project.industry", industry)
        ],
        orderings: [
            { field: "my.project.project_date", direction: "desc" }
        ],
    });

    return projects;
}

/**
 * Fetch homepage content
 */
export async function getHomepage() {
    const client = createClient();

    try {
        const homepage = await client.getSingle("homepage");
        return homepage;
    } catch {
        return null;
    }
}

/**
 * Fetch site settings
 */
export async function getSettings() {
    const client = createClient();

    try {
        const settings = await client.getSingle("settings");
        return settings;
    } catch {
        return null;
    }
}

/**
 * Fetch services page
 */
export async function getServicesPage() {
    const client = createClient();

    try {
        const services = await client.getSingle("services_page");
        return services;
    } catch {
        return null;
    }
}

/**
 * Search equipment by query
 */
export async function searchEquipment(query: string) {
    const client = createClient();

    const equipment = await client.getAllByType("equipment", {
        filters: [
            prismic.filter.fulltext("document", query)
        ],
    });

    return equipment;
}

/**
 * Get equipment categories with counts
 */
export async function getEquipmentCategories() {
    const client = createClient();

    const allEquipment = await client.getAllByType("equipment");

    const categories: Record<string, number> = {};

    allEquipment.forEach((eq) => {
        const category = eq.data.category as string;
        if (category) {
            categories[category] = (categories[category] || 0) + 1;
        }
    });

    return categories;
}

/**
 * Get related equipment (same category, excluding current)
 */
export async function getRelatedEquipment(currentUID: string, category: string, count: number = 3) {
    const client = createClient();

    const equipment = await client.getAllByType("equipment", {
        filters: [
            prismic.filter.at("my.equipment.category", category),
            prismic.filter.not("my.equipment.uid", currentUID)
        ],
        pageSize: count,
    });

    return equipment;
}
