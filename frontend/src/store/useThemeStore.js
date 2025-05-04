import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("mingo-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("mingo-theme", theme);
    set({ theme });
  },
}));
