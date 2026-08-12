export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--color-line)]">
      <div className="site-shell type-caption flex items-center justify-between gap-4 py-6">
        <p>Zheng Personal Website</p>
        <p>© {new Date().getFullYear()} Zheng</p>
      </div>
    </footer>
  );
}
