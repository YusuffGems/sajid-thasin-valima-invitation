interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  script?: boolean;
}

export function SectionTitle({ eyebrow, title, script = true }: SectionTitleProps) {
  return (
    <header className="section-title">
      {eyebrow && <p className="section-title__eyebrow">{eyebrow}</p>}
      <h2 className={script ? "script-title" : "caps-title"}>{title}</h2>
    </header>
  );
}
