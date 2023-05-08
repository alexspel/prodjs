import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleTextBlock.module.scss';

interface ArticleTextBlockProps {
    className?: string;
}

const ArticleTextBlock = memo((props: ArticleTextBlockProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticleTextBlock, {}, [className])}>
            -
        </div>
    );
});

export default ArticleTextBlock;
