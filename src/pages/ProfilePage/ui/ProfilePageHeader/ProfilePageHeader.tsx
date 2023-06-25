import {
    getProfileData, getProfileRaadonly, profileActions, updateProfileData,
} from 'entities/Profile';
import { getUserAuthData } from 'entities/User';
import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Text } from 'shared/ui/Text';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

const ProfilePageHeader: FC<ProfilePageHeaderProps> = (props) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const readonly = useSelector(getProfileRaadonly);
    const user = useSelector(getUserAuthData);
    const profile = useSelector(getProfileData);

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text
                title={t('Profile')}
            />
            {
                user?.id === profile?.id
                    ? (
                        <div className={cls.btnsWrapper}>
                            {readonly
                                ? (
                                    <Button
                                        theme={ButtonTheme.OUTLINE}
                                        onClick={onEdit}
                                    >
                                        {t('Edit')}
                                    </Button>
                                )
                                : (
                                    <>
                                        <Button
                                            theme={ButtonTheme.OUTLINE_RED}
                                            onClick={onSave}
                                        >
                                            {t('Save')}
                                        </Button>
                                        <Button
                                            theme={ButtonTheme.OUTLINE}
                                            onClick={onCancelEdit}
                                        >
                                            {t('Cancel')}
                                        </Button>
                                    </>
                                )}
                        </div>
                    )
                    : null
            }
        </div>
    );
};

export default ProfilePageHeader;
