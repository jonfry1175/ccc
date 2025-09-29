import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  eyebrowClassName,
  titleClassName,
  descriptionClassName
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-4",
        align === "center" ? "text-center mx-auto" : "text-left",
        description ? "max-w-3xl" : "max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-flex items-center rounded-full bg-primaryRed/10 px-4 py-1 text-sm font-semibold uppercase tracking-widest text-primaryRed",
            eyebrowClassName
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl font-semibold leading-tight text-textBlack md:text-4xl",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-base text-darkGray/80 md:text-lg",
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
