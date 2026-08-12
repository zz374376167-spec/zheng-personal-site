import type { Metadata } from "next";
import { GallerySection } from "@/components/gallery/GallerySection";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { getPhotosByCategory, selectedPhotos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "照片集",
  description: "詹政记录的旅行、人物与日常影像。",
};

const sections = [
  { id: "selected", index: "01", title: "Selected", photos: selectedPhotos },
  { id: "travel", index: "02", title: "Travel", photos: getPhotosByCategory("travel") },
  { id: "portrait", index: "03", title: "Portrait", photos: getPhotosByCategory("portrait") },
  { id: "life", index: "04", title: "Life", photos: getPhotosByCategory("life") },
] as const;

export default function GalleryPage() {
  return (
    <PageContainer environment="gallery">
      <header className="grid gap-10 border-b border-[var(--color-line)] pb-16 lg:grid-cols-[7fr_5fr] lg:items-end lg:pb-24">
        <SectionTitle eyebrow="Photographic archive" title="Gallery" />
        <p className="type-body max-w-md text-[var(--color-muted)]">
          旅行、人物与日常。照片不是事件的证明，而是我与生活相遇时留下的切片。
        </p>
      </header>

      <nav aria-label="照片分类" className="border-b border-[var(--color-line)] py-5">
        <ol className="type-caption flex flex-wrap gap-x-8 gap-y-3">
          {sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`}>{section.index} {section.title}</a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="section-stack pt-[var(--section-gap)]">
        {sections.map((section, index) => (
          <GallerySection
            key={section.id}
            {...section}
            priority={index === 0}
          />
        ))}
      </div>
    </PageContainer>
  );
}
