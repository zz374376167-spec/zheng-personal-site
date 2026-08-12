import Image from "next/image";
import Link from "next/link";
import { HeroPerspective } from "./HeroPerspective";

export function HomeHero() {
  return (
    <HeroPerspective className="grid min-h-[76vh] items-end gap-12 border-b border-[var(--color-line)] pb-16 lg:grid-cols-[5fr_7fr] lg:gap-20 lg:pb-24">
      <div className="flex h-full flex-col justify-between pt-4">
        <p className="type-caption">Personal archive / 2026</p>
        <div className="mt-24 lg:mt-auto lg:pb-3">
          <h1 className="type-hero hero-title-block">Zheng</h1>
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
        <div className="hero-tilt-media relative ml-auto aspect-[4/3] w-full overflow-hidden">
          <Image
            src="/images/hero/metal-eye-sword-v2.png"
            alt="黑白金属剑身之间显现的一双眼睛"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="hero-metal-eye-image object-cover"
          />
          <div className="hero-image-vignette absolute inset-0" aria-hidden="true" />
        </div>
        <figcaption className="type-caption mt-3 flex justify-between gap-4">
          <span>Metal study / Eye</span>
          <span>01</span>
        </figcaption>
      </figure>
    </HeroPerspective>
  );
}
