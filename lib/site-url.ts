const localSiteUrl = "http://localhost:3000";

export function getSiteUrl() {
  return new URL(process.env.NEXT_PUBLIC_SITE_URL ?? localSiteUrl);
}
