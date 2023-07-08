import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import {
    ProfileCard,
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileLoading,
    getProfileRaadonly,
    getProfileValidationErrors,
    profileActions,
    profileReducer,
} from 'entities/Profile';
import { ValidationProfileError } from 'entities/Profile/model/types/profile';
import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components';
import { useAppDispatch } from 'shared/lib/hooks';
import { Text, TextTheme } from 'shared/ui/Text';
import { Page } from 'widgets/Page';
import ProfilePageHeader from '../ProfilePageHeader/ProfilePageHeader';
import cls from './ProfilePage.module.scss';

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = () => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const { id } = useParams<{ id: string }>();
    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const loading = useSelector(getProfileLoading);
    const readonly = useSelector(getProfileRaadonly);
    const validationErrors = useSelector(getProfileValidationErrors);

    const validationErrorsTranslates = {
        [ValidationProfileError.SERVER_ERROR]: t('SERVER ERROR'),
        [ValidationProfileError.INCORRECT_COUNTRY]: t('INCORRECT COUNTRY'),
        [ValidationProfileError.NO_DATA]: t('NO DATA'),
        [ValidationProfileError.INCORRECT_USER_DATA]: t('INCORRECT USER DATA'),
        [ValidationProfileError.INCORRECT_AGE]: t('INCORRECT AGE'),
    };

    const onChangeFirstName = useCallback(
        (first: string) => {
            dispatch(profileActions.updateProfile({ first }));
        },
        [dispatch],
    );

    const onChangeLastName = useCallback(
        (lastname: string) => {
            dispatch(profileActions.updateProfile({ lastname }));
        },
        [dispatch],
    );

    const onChangeAge = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
        },
        [dispatch],
    );

    const onChangeCity = useCallback(
        (city: string) => {
            dispatch(profileActions.updateProfile({ city }));
        },
        [dispatch],
    );

    const onChangeUsername = useCallback(
        (username: string) => {
            dispatch(profileActions.updateProfile({ username }));
        },
        [dispatch],
    );

    const onChangeAvatar = useCallback(
        (avatar: string) => {
            dispatch(profileActions.updateProfile({ avatar }));
        },
        [dispatch],
    );

    const onChangeCurrency = useCallback(
        (currency: Currency) => {
            dispatch(profileActions.updateProfile({ currency }));
        },
        [dispatch],
    );

    const onChangeCountry = useCallback(
        (country: Country) => {
            dispatch(profileActions.updateProfile({ country }));
        },
        [dispatch],
    );

    useEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    }, [dispatch, id]);

    return (
        <DynamicModuleLoader
            reducers={reducers}
            autoRemoveReducer
        >
            <Page>
                <ProfilePageHeader />
                {validationErrors?.length && validationErrors.map((err) => (
                    <Text
                        theme={TextTheme.ERROR}
                        key={err}
                        text={validationErrorsTranslates[err]}
                    />
                ))}
                <ProfileCard
                    className={cls.profileCard}
                    data={formData}
                    error={error}
                    loading={loading}
                    readonly={readonly}
                    onChangeFirstName={onChangeFirstName}
                    onChangeLastName={onChangeLastName}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
