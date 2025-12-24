import { PrismicNextImage, PrismicNextImageProps } from "@prismicio/next";
import clsx from "clsx";

interface PrismicImageProps extends Omit<PrismicNextImageProps, "field"> {
    field: PrismicNextImageProps["field"];
    className?: string;
    imgClassName?: string;
    aspectRatio?: "auto" | "square" | "video" | "4/3";
}

const aspectRatioClasses = {
    auto: "",
    square: "aspect-square",
    video: "aspect-video",
    "4/3": "aspect-[4/3]",
};

export default function PrismicImage({
    field,
    className,
    imgClassName,
    aspectRatio = "auto",
    ...props
}: PrismicImageProps) {
    if (!field?.url) {
        return null;
    }

    return (
        <div
            className={clsx(
                "relative overflow-hidden",
                aspectRatioClasses[aspectRatio],
                className
            )}
        >
            <PrismicNextImage
                field={field}
                className={clsx(
                    "object-cover",
                    aspectRatio !== "auto" && "absolute inset-0 w-full h-full",
                    imgClassName
                )}
                {...props}
            />
        </div>
    );
}
