import type { InterestSection } from "@/types/content";

interface InterestChapterProps {
  index: number;
  section: InterestSection;
}

export function InterestChapter({ index, section }: InterestChapterProps) {
  const chapterNumber = String(index + 1).padStart(2, "0");
  const headingId = `interest-${section.category.toLowerCase()}`;

  return (
    <section aria-labelledby={headingId} className="border-t border-[var(--color-ink)] pt-5">
      <div className="grid gap-10 lg:grid-cols-[4fr_8fr] lg:gap-16">
        <div>
          <p className="type-caption">{chapterNumber} / {section.category}</p>
          <h2 id={headingId} className="type-section-title mt-5 max-w-md">
            {section.category}
          </h2>
        </div>

        <div className="lg:pt-14">
          <h3 className="text-2xl font-medium tracking-tight sm:text-3xl">{section.title}</h3>
          <p className="type-body mt-7 max-w-[var(--reading-max)] text-[var(--color-muted)]">
            {section.description}
          </p>

          {section.items.length > 0 ? (
            <ol className="mt-12 border-t border-[var(--color-line)]">
              {section.items.map((item, itemIndex) => (
                <li
                  key={item}
                  className="grid grid-cols-[3rem_1fr] gap-5 border-b border-[var(--color-line)] py-4"
                >
                  <span className="type-caption">{String(itemIndex + 1).padStart(2, "0")}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          ) : (
            <p className="type-caption mt-12 border-t border-[var(--color-line)] pt-4">
              An open-ended practice
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
