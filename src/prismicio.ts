import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";
import config from "../slicemachine.config.json";

/**
 * The project's Prismic repository name.
 */
export const repositoryName =
    process.env.NEXT_PUBLIC_PRISMIC_ENVIRONMENT || config.repositoryName;

/**
 * A list of Route Resolver objects that define how a document's `url` field is resolved.
 *
 * {@link https://prismic.io/docs/route-resolver#route-resolver}
 */
const routes: prismic.ClientConfig["routes"] = [
    // Homepage
    {
        type: "homepage",
        path: "/",
    },
    // Equipment pages
    {
        type: "equipment",
        path: "/equipment/:uid",
    },
    // Equipment category listing
    {
        type: "equipment_listing",
        path: "/equipment",
    },
    // Project/Case Study pages
    {
        type: "project",
        path: "/projects/:uid",
    },
    // Projects listing
    {
        type: "projects_listing",
        path: "/projects",
    },
    // Services page
    {
        type: "services_page",
        path: "/services",
    },
    // About page
    {
        type: "about_page",
        path: "/about",
    },
    // Contact page
    {
        type: "contact_page",
        path: "/contact",
    },
];

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * fetch content from the Prismic API.
 *
 * @param config - Configuration for the Prismic client.
 */
export const createClient = (clientConfig: prismicNext.CreateClientConfig = {}) => {
    const client = prismic.createClient(repositoryName, {
        routes,
        fetchOptions:
            process.env.NODE_ENV === "production"
                ? { next: { tags: ["prismic"] }, cache: "force-cache" }
                : { next: { revalidate: 5 } },
        ...clientConfig,
    });

    prismicNext.enableAutoPreviews({ client });

    return client;
};
