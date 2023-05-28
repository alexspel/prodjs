import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text';
import { Comment } from '../../model/types/comment';
import CommentCard from '../CommentCard/CommentCard';
import cls from './CommentList.module.scss'; // 'entities/Comment/model/types/comment';

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
    const { t } = useTranslation();

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
                    : <Text text={t('Комментарии отсутствуют')} />
            }
        </div>
    );
});

export default CommentList;
