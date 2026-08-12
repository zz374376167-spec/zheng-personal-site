import type { PersonalDetail } from "@/types/content";
import { Divider } from "@/components/ui/Divider";
import { SectionTitle } from "@/components/ui/SectionTitle";

interface PersonalDetailsProps {
  details: readonly PersonalDetail[];
}

export function PersonalDetails({ details }: PersonalDetailsProps) {
  if (details.length === 0) return null;

  return (
    <section aria-labelledby="personal-details-title">
      <SectionTitle eyebrow="03 / Details" id="personal-details-title" level="section" title="Personal Details" />
      <Divider />
      <dl className="ml-auto max-w-[var(--reading-max)] border-t border-[var(--color-line)]">
        {details.map((detail, index) => (
          <div
            key={detail.label}
            className="grid grid-cols-[3rem_1fr_1fr] gap-4 border-b border-[var(--color-line)] py-5"
          >
            <dt className="contents">
              <span className="type-caption">{String(index + 1).padStart(2, "0")}</span>
              <span className="text-[var(--color-muted)]">{detail.label}</span>
            </dt>
            <dd>{detail.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
