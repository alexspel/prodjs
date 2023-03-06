import { Bugton } from 'app/providers/ErrorBoundary';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/router';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { ToggleButton } from 'shared/ui/ToggleButton/ToggleButton';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import HomeIcon from 'shared/assets/icons/home.svg';
import ListIcon from 'shared/assets/icons/list.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={
                classNames(
                    cls.Sidebar,
                    { [cls.collapsed]: collapsed },
                    [className],
                )
            }
        >
            <div className={cls.items}>
                <AppLink
                    to={RoutePath.main}
                    theme={AppLinkTheme.PRIMARY}
                    className={cls.item}
                >
                    <HomeIcon className={cls.icon} />
                    <span
                        className={cls.link}
                    >
                        {t('Main page')}
                    </span>
                </AppLink>
                <AppLink
                    to={RoutePath.about}
                    theme={AppLinkTheme.PRIMARY}
                    className={cls.item}
                >
                    <ListIcon className={cls.icon} />
                    <span
                        className={cls.link}
                    >
                        {t('About page')}
                    </span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
                <Bugton short={collapsed} />
            </div>
            <ToggleButton
                data-testid="sidebar-toggle"
                collapsed={collapsed}
                onToggle={onToggle}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            />
        </div>
    );
};
