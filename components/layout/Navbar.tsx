import Link from "next/link";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Journey", href: "/journey" },
  { label: "Gallery", href: "/gallery" },
  { label: "Interests", href: "/interests" },
  { label: "Contact", href: "/contact" },
] as const;

export function Navbar() {
  return (
    <header className="border-b border-[var(--color-line)]">
      <div className="site-shell flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="font-medium" aria-label="Zheng Personal Website 首页">
          Zheng
        </Link>
        <nav aria-label="主要导航">
          <ul className="type-caption flex flex-wrap gap-x-5 gap-y-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
