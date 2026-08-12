import type { PhotoItem } from "@/lib/photos";
import { Divider } from "@/components/ui/Divider";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PhotoDisplay } from "./PhotoDisplay";

interface GallerySectionProps {
  id: string;
  index: string;
  title: string;
  photos: readonly PhotoItem[];
  priority?: boolean;
}

const placements = [
  "lg:col-span-9",
  "lg:col-span-5 lg:col-start-8 lg:mt-28",
  "lg:col-span-7 lg:col-start-2 lg:mt-20",
  "lg:col-span-4 lg:col-start-9 lg:mt-36",
] as const;

export function GallerySection({ id, index, title, photos, priority = false }: GallerySectionProps) {
  return (
    <section aria-labelledby={id}>
      <SectionTitle eyebrow={`${index} / Archive`} id={id} level="section" title={title} />
      <Divider />
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0">
        {photos.map((photo, photoIndex) => (
          <PhotoDisplay
            key={photo.id}
            photo={photo}
            index={photoIndex}
            priority={priority && photoIndex === 0}
            className={placements[photoIndex % placements.length]}
          />
        ))}
      </div>
    </section>
  );
}
