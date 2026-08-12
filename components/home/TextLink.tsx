import Link from "next/link";

interface TextLinkProps {
  href: string;
  children: string;
}

export function TextLink({ href, children }: TextLinkProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center border-b border-[var(--color-ink)] pb-2 text-sm"
    >
      {children}
      <span aria-hidden="true" className="ml-8">↗</span>
    </Link>
  );
}
