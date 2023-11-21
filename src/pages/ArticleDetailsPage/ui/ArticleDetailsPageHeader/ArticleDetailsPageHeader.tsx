import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/AppRouter/AppRouter';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import cls from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();
    const navigate = useNavigate();

    const onBackToArticles = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    return (
        <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
            <Button
                theme={ButtonTheme.OUTLINE}
                onClick={onBackToArticles}
            >
                {t('Back')}
            </Button>
        </div>
    );
});

export default ArticleDetailsPageHeader;
