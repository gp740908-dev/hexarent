import { exitPreview } from "@prismicio/next";

/**
 * This endpoint exits preview mode.
 */
export function GET() {
    return exitPreview();
}
