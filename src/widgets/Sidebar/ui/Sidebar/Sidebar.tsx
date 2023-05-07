import { Bugton } from 'app/providers/ErrorBoundary';
import { memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { SidebarItemsList } from 'widgets/Sidebar/model/Items';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import SidebarItem from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    // const authData = useSelector(getUserAuthData);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    // const sidebarLinks = useMemo(() => SidebarItemsList.filter((x) => {
    //     if (x.authOnly && !authData) {
    //         return false;
    //     }
    //     return true;
    // }), [authData]);

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
                {
                    SidebarItemsList.map(
                        (item) => <SidebarItem key={item.path} collapsed={collapsed} item={item} />,
                    )
                }
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
                <Bugton short={collapsed} />
            </div>
            <Button
                data-testid="sidebar-toggle"
                className={classNames(cls.collapsedButton)}
                onClick={onToggle}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
        </div>
    );
});

export default Sidebar;
