import type { ContentBlock } from "@/types/content";
import { Divider } from "@/components/ui/Divider";
import { SectionTitle } from "@/components/ui/SectionTitle";

interface StatementSectionProps {
  eyebrow: string;
  id: string;
  title: string;
  blocks: readonly ContentBlock[];
}

export function StatementSection({ eyebrow, id, title, blocks }: StatementSectionProps) {
  return (
    <section aria-labelledby={id}>
      <SectionTitle eyebrow={eyebrow} id={id} level="section" title={title} />
      <Divider />
      <div className="ml-auto max-w-[var(--reading-max)]">
        {blocks.map((block, index) => (
          <article
            key={block.heading}
            className="grid gap-5 border-b border-[var(--color-line)] py-10 sm:grid-cols-[3rem_1fr] sm:gap-8"
          >
            <span className="type-caption">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h3 className="text-xl font-medium">{block.heading}</h3>
              {block.paragraphs.map((paragraph) => (
                <p key={paragraph} className="type-body mt-5 text-[var(--color-muted)]">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
