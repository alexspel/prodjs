import React from 'react';
import HomeIcon from 'shared/assets/icons/home.svg';
import ListIcon from 'shared/assets/icons/list.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import { RoutePath } from 'shared/config/AppRouter/AppRouter';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        text: 'Main page',
        Icon: HomeIcon,
    },
    {
        path: RoutePath.about,
        text: 'About page',
        Icon: ListIcon,
    },
    {
        path: RoutePath.profile,
        text: 'Profile page',
        Icon: ProfileIcon,
        authOnly: true,
    },
];
