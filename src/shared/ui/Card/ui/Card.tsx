import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Card.module.scss';

interface CardProps {
    className?: string;
    title?: string | React.ReactNode;
    subtitle?: string | React.ReactNode;
    image?: string;
}

const Card = memo((props: CardProps) => {
    const {
        className,
        image,
        title = null,
        subtitle = null,
    } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Card, {}, [className])}>
            {image && (
                <div
                    className={cls.image}
                    style={{
                        backgroundImage: `url(${image})`,
                    }}
                />
            )}
            {title}
            {subtitle}
        </div>
    );
});

export default Card;
