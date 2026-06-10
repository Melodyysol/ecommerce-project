export type Theme = "winter" | "dracula";
export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void
}
