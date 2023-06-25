import { ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

export interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme,
    children?: ReactNode;
    underline?: boolean;
}

const AppLink = (props: AppLinkProps) => {
    const {
        children,
        to,
        className,
        underline = true,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;
    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            style={{ textDecoration: underline ? 'underline' : 'none' }}
            {...otherProps}
        >
            {children}
        </Link>
    );
};

export default AppLink;
