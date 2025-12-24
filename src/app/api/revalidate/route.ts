import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

/**
 * This endpoint handles Prismic webhook revalidation.
 * Set up a webhook in Prismic to call this endpoint when content changes.
 */
export async function POST(request: NextRequest) {
    // Validate webhook secret (optional but recommended)
    const secret = request.headers.get("x-prismic-webhook-secret");
    const expectedSecret = process.env.PRISMIC_WEBHOOK_SECRET;

    if (expectedSecret && secret !== expectedSecret) {
        return NextResponse.json(
            { error: "Invalid webhook secret" },
            { status: 401 }
        );
    }

    try {
        // Parse the webhook body to determine which content type changed
        const body = await request.json().catch(() => ({}));
        const documentType = body?.documents?.[0]?.type;

        // Revalidate specific paths based on document type
        switch (documentType) {
            case "equipment":
                revalidatePath("/equipment", "layout");
                break;
            case "project":
                revalidatePath("/projects", "layout");
                break;
            case "homepage":
                revalidatePath("/", "layout");
                break;
            case "services_page":
                revalidatePath("/services", "layout");
                break;
            default:
                // Revalidate all pages
                revalidatePath("/", "layout");
        }

        return NextResponse.json({
            revalidated: true,
            documentType: documentType || "all",
            now: Date.now(),
        });
    } catch (err) {
        console.error("Revalidation error:", err);
        return NextResponse.json(
            { error: "Error revalidating" },
            { status: 500 }
        );
    }
}
