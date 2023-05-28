import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar';
import { Skeleton } from 'shared/ui/Skeleton';
import { Text } from 'shared/ui/Text';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment: Comment;
    loading?: boolean;
}

const CommentCard = memo((props: CommentCardProps) => {
    const {
        className,
        comment,
        loading = false,
    } = props;

    if (loading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton height={16} width={100} className={cls.username} />
                </div>
                <Skeleton className={cls.text} width="100%" height={50} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <div className={cls.header}>
                {comment.user.avatar && (
                    <Avatar
                        size={30}
                        src={comment.user.avatar}
                    />
                )}
                <Text
                    className={cls.userName}
                    title={comment.user.username}
                />
            </div>
            <Text
                text={comment.text}
            />
        </div>
    );
});

export default CommentCard;
