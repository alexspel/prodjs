import { getNewCommentText } from 'features/AddNewComment/model/selectors/getNewCommentText';
import { addNewCommentActions, addNewCommentReducer } from 'features/AddNewComment/model/slices/AddNewCommentSlice';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components';
import { useAppDispatch } from 'shared/lib/hooks';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import cls from './AddNewCommentForm.module.scss';

interface AddNewCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}
const AddNewCommentFormReducers: ReducersList = {
    addNewComment: addNewCommentReducer,
};

const AddNewCommentForm = memo((props: AddNewCommentFormProps) => {
    const {
        className,
        onSendComment,
    } = props;
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    const comment = useSelector(getNewCommentText);

    const onInputComment = useCallback((text: string) => {
        dispatch(addNewCommentActions.setNewCommentText(text));
    }, [dispatch]);

    const handleSendComment = useCallback(() => {
        onSendComment(comment);
        dispatch(addNewCommentActions.setNewCommentText(''));
    }, [dispatch, comment, onSendComment]);

    return (
        <DynamicModuleLoader
            reducers={AddNewCommentFormReducers}
            autoRemoveReducer
        >
            <div className={classNames(cls.AddNewCommentForm, {}, [className])}>
                <Input
                    value={comment}
                    onChange={onInputComment}
                />
                <Button
                    theme={ButtonTheme.OUTLINE}
                    disabled={comment.trim() === ''}
                    onClick={handleSendComment}
                >
                    {t('Send comment')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default AddNewCommentForm;
