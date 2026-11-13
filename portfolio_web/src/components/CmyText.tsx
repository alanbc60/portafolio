import type { ElementType } from "react";
import "@styles/cmyText.css";

interface CmykTextProps {
  text: string;
  /** Elemento HTML que contiene el texto (h1, h2, span…). */
  as?: ElementType;
  /** "head": titulares · "num": numerales grandes. */
  variant?: "head" | "num";
  className?: string;
}

/** Texto impreso como placas de proceso CMY desalineadas (el texto real va en .paper). */
export function CmykText({ text, as: Tag = "span", variant = "head", className = "" }: CmykTextProps) {
  const root = variant === "num" ? "cmyk-num" : "cmyk-head";
  return (
    <Tag className={`${root} ${className}`.trim()}>
      <span className="paper">{text}</span>
      <span className="plate plate-c" aria-hidden="true">{text}</span>
      <span className="plate plate-m" aria-hidden="true">{text}</span>
      <span className="plate plate-y" aria-hidden="true">{text}</span>
    </Tag>
  );
}
