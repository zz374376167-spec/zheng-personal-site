import Image from "next/image";
import type { PhotoItem } from "@/lib/photos";

interface PhotoDisplayProps {
  photo: PhotoItem;
  index: number;
  priority?: boolean;
  className?: string;
}

export function PhotoDisplay({ photo, index, priority = false, className = "" }: PhotoDisplayProps) {
  return (
    <figure className={className}>
      <Image
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 68rem"
        className="h-auto w-full"
      />
      <figcaption className="mt-3 grid grid-cols-[3rem_1fr_auto] gap-3 border-t border-[var(--color-line)] pt-3">
        <span className="type-caption">{String(index + 1).padStart(2, "0")}</span>
        <span className="text-sm">{photo.title}</span>
        {photo.year ? <span className="type-caption">{photo.year}</span> : null}
      </figcaption>
    </figure>
  );
}
