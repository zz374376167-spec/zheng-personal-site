interface MarqueeBandProps {
  text: string;
}

export function MarqueeBand({ text }: MarqueeBandProps) {
  const content = `${text} ${text}`;

  return (
    <div className="marquee-band" aria-label={text.trim()}>
      <div className="marquee-track" aria-hidden="true">
        <span>{content}</span>
        <span>{content}</span>
      </div>
    </div>
  );
}
