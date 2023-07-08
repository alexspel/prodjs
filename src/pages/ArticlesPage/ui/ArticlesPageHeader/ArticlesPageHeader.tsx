import {
    memo
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import ArticlesFilters from '../ArticlesPageFilters/ArticlesPageFilters';
import ArticlesPageSearchBar from '../ArticlesPageSearchBar/ArticlesPageSearchBar';
import ArticlesPageTabs from '../ArticlesPageTabs/ArticlesPageTabs';
import ListViewSelector from '../ListViewSelector/ListViewSelector';
import cls from './ArticlesPageHeader.module.scss';

interface ArticlesPageHeaderProps {
    className?: string;
}

const ArticlesPageHeader = memo((props: ArticlesPageHeaderProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.ArticlesPageHeader, {}, [className])}>
            <div className={cls.ArticlesPageHeaderRow}>
                <ArticlesFilters />
                <ListViewSelector />
            </div>
            <div className={cls.ArticlesPageHeaderRow}>
                <ArticlesPageSearchBar />
            </div>
            <div className={cls.ArticlesPageHeaderRow}>
                <ArticlesPageTabs />
            </div>
        </div>
    );
});

export default ArticlesPageHeader;
