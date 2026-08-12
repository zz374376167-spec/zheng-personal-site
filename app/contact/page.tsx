import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "联系",
  description: "通过微信与詹政建立联系。",
};

const wechatId = "zhanzheng374376";

export default function ContactPage() {
  return (
    <PageContainer environment="contact">
      <header className="grid min-h-[66vh] items-end gap-16 border-b border-[var(--color-line)] pb-16 lg:grid-cols-[7fr_5fr] lg:pb-24">
        <SectionTitle eyebrow="Contact / A beginning" title="Let’s connect." />
        <div className="max-w-md lg:pb-2">
          <p className="type-caption">For those who want to know Zheng</p>
          <p className="mt-6 text-xl leading-relaxed sm:text-2xl">
            如果你也在认真生活、观察世界，或只是想多认识我一点，欢迎从这里开始。
          </p>
        </div>
      </header>

      <section
        aria-labelledby="wechat-contact-title"
        className="grid gap-12 py-[var(--section-gap)] lg:grid-cols-[4fr_8fr] lg:gap-16"
      >
        <div>
          <p className="type-caption">01 / WeChat</p>
          <h2 id="wechat-contact-title" className="type-section-title mt-5">
            微信
          </h2>
        </div>

        <div className="lg:pt-14">
          <p className="type-caption">WeChat ID</p>
          <p className="mt-5 break-all text-[clamp(2rem,6vw,5.5rem)] font-medium leading-none tracking-[-0.045em]">
            {wechatId}
          </p>
          <div className="mt-12 border-t border-[var(--color-line)] pt-5">
            <p className="max-w-lg text-sm leading-relaxed text-[var(--color-muted)]">
              请在微信中搜索以上账号添加好友。这是本站唯一公开的联系入口。
            </p>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
