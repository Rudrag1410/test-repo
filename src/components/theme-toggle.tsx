import { IconSun, IconMoon } from "@tabler/icons-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="rounded-md p-2 hover:bg-muted/50 transition-colors relative flex items-center justify-center w-10 h-10"
      aria-label="Toggle theme"
    >
      <IconSun className="h-5 w-5 absolute transition-all rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
      <IconMoon className="h-5 w-5 absolute transition-all rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
