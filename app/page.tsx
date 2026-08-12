import { HomeHero } from "@/components/home/HomeHero";
import { SelectedMoments } from "@/components/home/SelectedMoments";
import { TextLink } from "@/components/home/TextLink";
import { PageContainer } from "@/components/layout/PageContainer";
import { Divider } from "@/components/ui/Divider";
import { SectionTitle } from "@/components/ui/SectionTitle";

const journeyMoments = [
  ["2005", "深圳"],
  ["2017", "回到县城"],
  ["2023", "来到广州"],
  ["2025", "第一次去云南"],
] as const;

const interests = ["音乐", "健身", "电影", "阅读", "摄影", "游戏"] as const;

export default function Home() {
  return (
    <PageContainer>
      <HomeHero />

      <div className="section-stack">
        <section className="editorial-grid items-start" aria-labelledby="home-about-title">
          <SectionTitle eyebrow="01 / About" id="home-about-title" level="section" title="关于我" />
          <div className="reading-column lg:pt-12">
            <p className="type-body text-xl sm:text-2xl">
              我在深圳、小县城和广州之间长大，也在照片、音乐与一次次出发里认识生活。这里收录我看见的风景、走过的阶段，以及仍在发生的自己。
            </p>
            <div className="mt-10">
              <TextLink href="/about">继续认识我</TextLink>
            </div>
          </div>
        </section>

        <section aria-labelledby="selected-moments-title">
          <div className="flex items-end justify-between gap-6">
            <SectionTitle eyebrow="02 / Archive" id="selected-moments-title" level="section" title="Selected Moments" />
            <TextLink href="/gallery">查看照片集</TextLink>
          </div>
          <Divider />
          <SelectedMoments />
        </section>

        <section className="editorial-grid items-start" aria-labelledby="journey-preview-title">
          <div>
            <SectionTitle eyebrow="03 / Journey" id="journey-preview-title" level="section" title="从这里，到那里" />
            <div className="mt-10">
              <TextLink href="/journey">查看人生轨迹</TextLink>
            </div>
          </div>
          <div className="border-t border-[var(--color-line)]">
            {journeyMoments.map(([year, place]) => (
              <div
                key={year}
                className="grid grid-cols-[5rem_1fr] gap-5 border-b border-[var(--color-line)] py-5"
              >
                <span className="type-caption">{year}</span>
                <span>{place}</span>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="interests-preview-title">
          <SectionTitle eyebrow="04 / Interests" id="interests-preview-title" level="section" title="喜欢的事物，构成了我" />
          <Divider />
          <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
            {interests.map((interest, index) => (
              <div key={interest} className="flex items-baseline justify-between border-b border-[var(--color-line)] pb-4">
                <span className="text-xl">{interest}</span>
                <span className="type-caption">0{index + 1}</span>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <TextLink href="/interests">查看兴趣审美</TextLink>
          </div>
        </section>

        <section className="border-y border-[var(--color-ink)] py-16 sm:py-24" aria-labelledby="contact-cta-title">
          <p className="type-caption">05 / Contact</p>
          <div className="mt-7 grid items-end gap-10 lg:grid-cols-[8fr_4fr]">
            <h2 id="contact-cta-title" className="type-section-title max-w-4xl">
              如果你也在记录生活，欢迎来认识我。
            </h2>
            <div className="lg:text-right">
              <TextLink href="/contact">通过微信联系</TextLink>
            </div>
          </div>
        </section>
      </div>
    </PageContainer>
  );
}
