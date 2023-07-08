import { ArticleListType } from 'entities/Article';
import { articlesPageActions } from 'pages/ArticlesPage/model/slices/ArticlesPageSlice';
import { memo } from 'react';
import ListIcon from 'shared/assets/icons/list-24-24.svg';
import GridIcon from 'shared/assets/icons/tiled-24-24.svg';
import { VIEW_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks';
import { useLocalStorage } from 'shared/lib/hooks/useLocalStorage/useLocalStorage';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon';
import cls from './ListViewSelector.module.scss';

const ListViewSelector = memo(() => {
    const [view, setView] = useLocalStorage({ name: VIEW_LOCALSTORAGE_KEY });

    const dispatch = useAppDispatch();

    const onChangeView = (view: ArticleListType) => {
        setView(view);
        dispatch(articlesPageActions.setView(view));
    };

    return (
        <div className={cls.ListViewSelector}>
            <Button
                className={classNames(cls.listView, { [cls.selectedListView]: view !== ArticleListType.GRID })}
                theme={ButtonTheme.CLEAR}
                onClick={() => {
                    onChangeView(ArticleListType.GRID);
                }}
            >
                <Icon Svg={GridIcon} />
            </Button>
            <Button
                className={classNames(cls.listView, { [cls.selectedListView]: view !== ArticleListType.LIST })}
                theme={ButtonTheme.CLEAR}
                onClick={() => {
                    onChangeView(ArticleListType.LIST);
                }}
            >
                <Icon Svg={ListIcon} />
            </Button>
        </div>
    );
});

export default ListViewSelector;
