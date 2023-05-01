import 'app/styles/index.scss';
import {
    ButtonHTMLAttributes,
    ReactNode, memo,
} from 'react';
import { TMods, classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_INVERTED = 'outlineInverted',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}
export enum ButtonSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    children?: ReactNode;
}

const Button = memo((props: ButtonProps) => {
    const {
        children,
        className,
        theme = ButtonTheme.OUTLINE,
        square = false,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    const mods: TMods = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
    };

    const classes = classNames(cls.Button, mods, [className]);

    return (
        <button
            data-testid="button"
            type="button"
            className={classes}
            {...otherProps}
        >
            {children}
        </button>
    );
});

export default Button;
