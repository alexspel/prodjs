import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar';
import { Text } from 'shared/ui/Text';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';
import CommentCardSkeleton from './CommentCardSkeleton';

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
            <CommentCardSkeleton
                className={className}
            />
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
