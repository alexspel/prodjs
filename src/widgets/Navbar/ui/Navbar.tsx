import { Link } from "react-router-dom"
import { classNames } from "shared/lib/classnames/classnames"
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import cls from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to={'/'} className={cls.mainLink} theme={AppLinkTheme.SECONDARY}>Главная</AppLink>
                <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>О сайте</AppLink>
            </div>
        </div>
    )
}