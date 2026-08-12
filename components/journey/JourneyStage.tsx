import type { TimelineStage } from "@/types/content";

interface JourneyStageProps {
  index: number;
  stage: TimelineStage;
}

export function JourneyStage({ index, stage }: JourneyStageProps) {
  const stageNumber = String(index + 1).padStart(2, "0");

  return (
    <section aria-labelledby={`journey-stage-${stageNumber}`}>
      <header className="grid gap-4 border-t border-[var(--color-ink)] pt-5 sm:grid-cols-[5rem_1fr]">
        <p className="type-caption">{stageNumber}</p>
        <h2 id={`journey-stage-${stageNumber}`} className="type-section-title">
          {stage.name}
        </h2>
      </header>

      <div className="mt-14 space-y-20 sm:ml-20 lg:mt-24 lg:space-y-32">
        {stage.entries.map((entry, entryIndex) => (
          <article
            key={`${entry.year}-${entry.title}`}
            className="grid gap-8 lg:grid-cols-[4fr_8fr] lg:gap-16"
          >
            <div className="flex items-start justify-between gap-5 border-t border-[var(--color-line)] pt-4 lg:block">
              <p className="type-caption">{entry.year}</p>
              <p className="mt-0 text-sm text-[var(--color-muted)] lg:mt-5">{entry.location}</p>
            </div>
            <div>
              <p className="type-caption">{stageNumber}.{String(entryIndex + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 text-2xl font-medium tracking-tight sm:text-3xl">{entry.title}</h3>
              <p className="type-body mt-7 max-w-[var(--reading-max)] text-[var(--color-muted)]">
                {entry.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
