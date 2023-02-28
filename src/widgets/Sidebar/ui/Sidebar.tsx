import { Bugton } from 'app/providers/ErrorBoundary';
import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ToggleButton } from 'shared/ui/ToggleButton/ToggleButton';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
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
            <ToggleButton
                data-testid="sidebar-toggle"
                collapsed={collapsed}
                onToggle={onToggle}
            />
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
                <Bugton />
            </div>
        </div>
    );
};
