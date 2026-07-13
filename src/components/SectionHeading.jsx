import Reveal from "./Reveal";

/**
 * Consistent section header: small eyebrow label + big title + optional subtitle.
 */
function SectionHeading({ eyebrow, title, highlight, subtitle, align = "center" }) {
  const alignment =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col ${alignment} mb-12 md:mb-16`}>
      {eyebrow && (
        <Reveal direction="up">
          <span className="eyebrow">
            <span className="h-px w-6 bg-brand-400/70" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05} direction="up">
        <h2 className="font-display mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          {title} {highlight && <span className="text-gradient">{highlight}</span>}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1} direction="up">
          <p
            className={`mt-4 max-w-2xl text-base text-slate-400 sm:text-lg ${
              align === "center" ? "mx-auto" : ""
            }`}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}

export default SectionHeading;
