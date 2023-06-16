"use client";

import { createContext, useContext, useMemo, useState } from "react";

export type Theme = "light" | "dark";

type State = {
  theme: Theme;
  updateTheme?: () => void;
};
const ThemeContext = createContext<State>({ theme: "light" });

export function ThemeProvider({ children }: { children: any }) {
  const [theme, setTheme] = useState<Theme>("light");

  const updateTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const value = useMemo(() => ({ theme, updateTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      <html className={theme} suppressHydrationWarning={true}>
        {children}
      </html>
    </ThemeContext.Provider>
  );
}

export function useThemeProvider() {
  return useContext(ThemeContext);
}
