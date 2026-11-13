import "@styles/tag.css";

interface TagProps {
  children: string;
  tone?: "accent" | "neutral";
}

export function Tag({ children, tone = "neutral" }: TagProps) {
  return <span className={`tag tag--${tone}`}>{children}</span>;
}
