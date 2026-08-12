import Image from "next/image";
import Link from "next/link";
import { HeroPerspective } from "./HeroPerspective";

export function HomeHero() {
  return (
    <HeroPerspective className="hero-scene relative min-h-[76vh] border-b border-[var(--color-line)] pb-16 lg:min-h-[82vh] lg:pb-24">
      <div className="hero-scene-copy relative z-10 flex min-h-[68vh] flex-col justify-between pt-4 lg:w-[46%]">
        <p className="type-caption">Personal archive / 2026</p>
        <div className="mt-24 lg:mt-auto lg:pb-3">
          <h1 className="type-hero hero-monument-title">Zheng</h1>
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

      <figure className="hero-tilt-figure hero-scene-visual">
        <div className="hero-tilt-media hero-sword-mount">
          <Image
            src="/images/hero/monumental-sword-hero.png"
            alt="烟雾与定向光线中显现的巨型锻造金属剑结构"
            fill
            priority
            sizes="(max-width: 768px) 143vw, 108vw"
            className="hero-monumental-sword-image"
          />
          <span className="hero-sword-edge-fade" aria-hidden="true" />
        </div>
        <span className="hero-atmosphere hero-atmosphere-back" aria-hidden="true" />
        <span className="hero-atmosphere hero-atmosphere-front" aria-hidden="true" />
        <span className="hero-reflection-field" aria-hidden="true" />
      </figure>
    </HeroPerspective>
  );
}
