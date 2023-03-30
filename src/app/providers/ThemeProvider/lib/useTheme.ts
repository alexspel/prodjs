import { useContext } from 'react';
import { THEME_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { Theme, ThemeContext } from './ThemeContext';

export interface useThemeResult {
    toggleTheme: () => void;
    theme: Theme
}

export function useTheme(): useThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        setTheme(newTheme);
        localStorage.setItem(THEME_LOCALSTORAGE_KEY, newTheme);
    };

    return {
        toggleTheme,
        theme,
    };
}
