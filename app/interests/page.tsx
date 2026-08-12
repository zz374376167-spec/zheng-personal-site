import type { Metadata } from "next";
import { InterestChapter } from "@/components/interests/InterestChapter";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { getInterestsContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "兴趣审美",
  description: "从音乐、电影、摄影、健身和游戏，认识詹政关注与喜欢的事物。",
};

export default function InterestsPage() {
  const interests = getInterestsContent();

  return (
    <PageContainer environment="interests">
      <header className="grid gap-10 border-b border-[var(--color-line)] pb-16 lg:grid-cols-[7fr_5fr] lg:items-end lg:pb-24">
        <SectionTitle eyebrow="Inner archive / Preferences" title="Interests" />
        <div className="max-w-md">
          <p className="type-caption">{String(interests.sections.length).padStart(2, "0")} chapters</p>
          <p className="type-body mt-5 text-[var(--color-muted)]">
            喜欢的声音、故事与生活方式，构成了我理解世界的一部分。
          </p>
        </div>
      </header>

      <nav aria-label="兴趣章节" className="border-b border-[var(--color-line)] py-5">
        <ol className="type-caption flex flex-wrap gap-x-8 gap-y-3">
          {interests.sections.map((section, index) => (
            <li key={section.category}>
              <a href={`#interest-${section.category.toLowerCase()}`}>
                {String(index + 1).padStart(2, "0")} {section.category}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="section-stack pt-[var(--section-gap)]">
        {interests.sections.map((section, index) => (
          <InterestChapter key={section.category} index={index} section={section} />
        ))}
      </div>
    </PageContainer>
  );
}
