import { getUserAuthData } from 'entities/User';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { SidebarItemType } from '../../model/Items';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    // className?: string;
    item: SidebarItemType;
    collapsed: boolean;
}

const SidebarItem = memo((props: SidebarItemProps) => {
    const {
        item,
        collapsed,
    } = props;
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    if (item.authOnly && !authData) return null;

    return (
        <AppLink
            to={item.path}
            theme={AppLinkTheme.PRIMARY}
            className={
                classNames(cls.SidebarItem, {
                    [cls.collapsed]: collapsed,
                })
            }
        >
            <item.Icon className={cls.icon} />
            <span
                className={cls.link}
            >
                {t(item.text)}
            </span>
        </AppLink>
    );
});

export default SidebarItem;
