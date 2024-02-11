import { classNames } from 'shared/lib/classNames/classNames';

import cls from './navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <ThemeSwitcher />
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/">Main page</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about">About page</AppLink>
            </div>
        </div>
    );
};
