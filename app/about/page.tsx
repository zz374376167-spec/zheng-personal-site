import type { Metadata } from "next";
import { PersonalDetails } from "@/components/about/PersonalDetails";
import { StatementSection } from "@/components/about/StatementSection";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { getBioContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "关于我",
  description: "认识詹政，以及塑造他的经历、兴趣与生活态度。",
};

export default function AboutPage() {
  const bio = getBioContent();

  return (
    <PageContainer>
      <header className="grid gap-10 border-b border-[var(--color-line)] pb-16 lg:grid-cols-[7fr_5fr] lg:items-end lg:pb-24">
        <SectionTitle eyebrow="About / Personal archive" title="About" />
        <div>
          <p className="type-caption">Who is Zheng?</p>
          <p className="mt-4 max-w-md text-xl leading-relaxed">{bio.title}</p>
        </div>
      </header>

      <div className="section-stack pt-[var(--section-gap)]">
        <StatementSection
          eyebrow="01 / Statement"
          id="personal-statement-title"
          title="Personal Statement"
          blocks={bio.statement}
        />
        <StatementSection
          eyebrow="02 / Philosophy"
          id="life-philosophy-title"
          title="Life Philosophy"
          blocks={bio.philosophy}
        />
        <PersonalDetails details={bio.details} />
      </div>
    </PageContainer>
  );
}
