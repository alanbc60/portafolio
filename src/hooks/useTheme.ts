import { useCallback, useEffect, useState } from "react";
import type { Theme } from "@app-types/typesPortfolio";

/** Tema claro/oscuro: parte de la preferencia del sistema y se aplica en <html data-theme>. */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggle = useCallback(() => setTheme((t) => (t === "dark" ? "light" : "dark")), []);
  return { theme, toggle };
}
