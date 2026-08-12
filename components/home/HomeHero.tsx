import Image from "next/image";
import Link from "next/link";
import { getPhotoById } from "@/lib/photos";
import { HeroPerspective } from "./HeroPerspective";

const heroPhoto = getPhotoById("portrait-guangzhou");

export function HomeHero() {
  return (
    <HeroPerspective className="grid min-h-[76vh] items-end gap-12 border-b border-[var(--color-line)] pb-16 lg:grid-cols-[5fr_7fr] lg:gap-20 lg:pb-24">
      <div className="flex h-full flex-col justify-between pt-4">
        <p className="type-caption">Personal archive / 2026</p>
        <div className="mt-24 lg:mt-auto lg:pb-3">
          <h1 className="type-hero hero-metallic-title">Zheng</h1>
          <p className="mt-7 max-w-md text-xl leading-relaxed sm:text-2xl">
            詹政，一个记录人生的人。
          </p>
          <Link
            href="/about"
            className="mt-10 inline-flex border-b border-[var(--color-ink)] pb-2 text-sm"
          >
            进入网站 <span aria-hidden="true" className="ml-8">↗</span>
          </Link>
        </div>
      </div>

      <figure className="hero-tilt-figure">
        <div className="hero-tilt-media relative ml-auto aspect-[3/4] w-full max-w-[42rem] overflow-hidden bg-[var(--color-line)]">
          <Image
            src={heroPhoto.src}
            alt={heroPhoto.alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover"
          />
        </div>
        <figcaption className="type-caption mt-3 flex justify-between gap-4">
          <span>Portrait / Guangzhou</span>
          <span>01</span>
        </figcaption>
      </figure>
    </HeroPerspective>
  );
}
