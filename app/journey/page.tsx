import type { Metadata } from "next";
import { JourneyStage } from "@/components/journey/JourneyStage";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { getTimelineContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "人生轨迹",
  description: "从深圳、县城到广州与云南，记录詹政一路走来的成长片段。",
};

export default function JourneyPage() {
  const timeline = getTimelineContent();
  const entryCount = timeline.stages.reduce((count, stage) => count + stage.entries.length, 0);

  return (
    <PageContainer environment="journey">
      <header className="grid gap-10 border-b border-[var(--color-line)] pb-16 lg:grid-cols-[7fr_5fr] lg:items-end lg:pb-24">
        <SectionTitle eyebrow="Life archive / 2005—Now" title="Journey" />
        <div className="max-w-md">
          <p className="type-caption">{timeline.stages.length} stages / {entryCount} moments</p>
          <p className="type-body mt-5 text-[var(--color-muted)]">
            城市、县城、校园与远方。它们不是履历上的节点，而是逐渐塑造我的生活现场。
          </p>
        </div>
      </header>

      <div className="section-stack pt-[var(--section-gap)]">
        {timeline.stages.map((stage, index) => (
          <JourneyStage key={stage.name} index={index} stage={stage} />
        ))}
      </div>
    </PageContainer>
  );
}
