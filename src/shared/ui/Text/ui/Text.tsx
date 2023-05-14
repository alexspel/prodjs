// import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { TMods, classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}
export enum TextAlign {
    LEFT = 'left',
    CENTER = 'center',
    RIGHT = 'right',
}
export enum TextSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface TextProps {
    className?: string;
    text?: string;
    title?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
}

const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        size = TextSize.M,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
    } = props;
    const mods: TMods = {
        [cls[theme]]: true,
        [cls[size]]: true,
    };

    return (
        <div className={classNames('', mods, [className, align, size])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});

export default Text;
