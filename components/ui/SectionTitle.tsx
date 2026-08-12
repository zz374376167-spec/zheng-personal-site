interface SectionTitleProps {
  eyebrow?: string;
  id?: string;
  level?: "page" | "section";
  title: string;
}

export function SectionTitle({ eyebrow, id, level = "page", title }: SectionTitleProps) {
  const Heading = level === "page" ? "h1" : "h2";

  return (
    <header>
      {eyebrow ? (
        <p className="type-caption">{eyebrow}</p>
      ) : null}
      <Heading id={id} className={`${level === "page" ? "type-page-title" : "type-section-title"} mt-3`}>
        {title}
      </Heading>
    </header>
  );
}
