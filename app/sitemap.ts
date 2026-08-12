import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

const routes = ["/", "/about", "/gallery", "/journey", "/interests", "/contact"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return routes.map((route) => ({
    url: new URL(route, siteUrl).toString(),
    changeFrequency: route === "/" ? "monthly" : "yearly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
