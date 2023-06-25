import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Skeleton } from 'shared/ui/Skeleton';
import cls from './CommentCard.module.scss';

interface CommentCardSkeletonProps {
    className?: string;
}

const CommentCardSkeleton = memo((props: CommentCardSkeletonProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <div className={cls.header}>
                <Skeleton width={30} height={30} border="50%" />
                <Skeleton height={16} width={100} className={cls.username} />
            </div>
            <Skeleton className={cls.text} width="100%" height={50} />
        </div>
    );
});

export default CommentCardSkeleton;
