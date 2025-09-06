'use client';
// import { Router } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";


type Theme = "light" | "dark";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export function ThemeProvider({children}: {children: React.ReactNode}) {
    // useState to manage theme and mounted state
    const [theme, setThemeState] = useState<Theme>("light");
    const [mounted, setMounted] = useState(false);
// update the theme and mounted state
    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    }

    // toggle the theme between light and dark
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    }

    // initialize the theme based on localStorage or system preference
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as Theme |null;
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        const initialTheme = savedTheme || systemTheme;
        setTheme(initialTheme);
        document.documentElement.classList.toggle("dark", initialTheme === "dark");
        setMounted(true);
    }, []);

    //prevent flash of wrong theme on initial render
    if (!mounted) {
        return null;
    }
    return (
        <ThemeContext.Provider value={{theme, toggleTheme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

//use custom hook to access the theme context
export function useTheme() {
    const context = useContext(ThemeContext);
    if(context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
