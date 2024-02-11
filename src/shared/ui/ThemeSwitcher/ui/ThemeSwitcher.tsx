import { classNames } from 'shared/lib/classNames/classNames';
import cls from './themeSwitcher.module.scss'
import { useTheme } from 'app/providers/ThemeProvider';
import DarkTheme from 'shared/assets/icons/theme-dark.svg'
import LightTheme from 'shared/assets/icons/theme-light.svg'
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { toggleTheme, theme } = useTheme();

    return (
        <Button theme={ThemeButton.CLEAR} className={classNames(cls.themeSwitcher)} onClick={toggleTheme}>
            {theme === Theme.DARK ? <LightTheme /> :<DarkTheme />}
        </Button>
    );
};
