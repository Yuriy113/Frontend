import { classNames } from 'shared/lib/classNames/classNames';
import cls from './button.module.scss';
import { type ButtonHTMLAttributes, type FC } from 'react';

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const { className, children, theme, ...otherProps } = props;
    const themeClass = (theme !== null && theme !== undefined) ? cls[theme] : '';

    return <button className={classNames(cls.button, {}, [className, cls[themeClass]])} {...otherProps}>
        {children}
    </button>;
};
