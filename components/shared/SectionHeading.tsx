type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`
        max-w-2xl
        ${align === "center" ? "mx-auto text-center" : ""}
        ${className}
      `}
    >
      {eyebrow && <span className="eyebrow mb-5">{eyebrow}</span>}

      <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--text-secondary)]">
          {description}
        </p>
      )}
    </div>
  );
}
