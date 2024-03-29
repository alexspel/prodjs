import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text';
import { Comment } from '../../model/types/comment';
import CommentCard from '../CommentCard/CommentCard';
import cls from './CommentList.module.scss';

interface CommentListProps {
    className?: string;
    comments: Comment[];
    loading?: boolean;
}

const CommentList = memo((props: CommentListProps) => {
    const {
        className,
        loading = false,
        comments = [],
    } = props;
    const { t } = useTranslation('comments');

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {
                comments.length
                    ? comments?.map((c) => (
                        <CommentCard
                            className={cls.comment}
                            key={c.id}
                            comment={c}
                            loading={loading}
                        />
                    ))
                    : <Text text={t('No comments')} />
            }
        </div>
    );
});

export default CommentList;
