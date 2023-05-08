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
        // const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        let newTheme: Theme;

        switch (theme) {
        case Theme.DARK:
            newTheme = Theme.LIGHT;
            break;
        case Theme.LIGHT:
            newTheme = Theme.NIGHT;
            break;
        default:
            newTheme = Theme.DARK;
            break;
        }
        setTheme?.(newTheme);
        localStorage.setItem(THEME_LOCALSTORAGE_KEY, newTheme);
    };

    return {
        toggleTheme,
        theme: theme || Theme.LIGHT,
    };
}
