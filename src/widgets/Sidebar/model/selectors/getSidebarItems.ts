import { getUserAuthData } from 'entities/User';
import { createSelector } from 'reselect';
import ArticleIcon from 'shared/assets/icons/article-20-20.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import ListIcon from 'shared/assets/icons/list.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import { RoutePath } from 'shared/config/AppRouter/AppRouter';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (user) => {
        const sidebarItemsList: SidebarItemType[] = [
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
        ];
        if (user) {
            sidebarItemsList.push(
                {
                    path: RoutePath.profile + user.id,
                    text: 'Profile page',
                    Icon: ProfileIcon,
                    authOnly: true,
                },
                {
                    path: RoutePath.articles,
                    text: 'Articles',
                    Icon: ArticleIcon,
                    authOnly: true,
                },
            );
        }
        return sidebarItemsList;
    },
);
