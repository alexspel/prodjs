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
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components';
import { useAppDispatch } from 'shared/lib/hooks';
import { Text, TextTheme } from 'shared/ui/Text';
import ProfilePageHeader from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = {
    profile: profileReducer,
};

// interface ProfilePageProps {
//     className?: string;
// }

const ProfilePage = () => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
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
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader
            reducers={reducers}
            autoRemoveReducer
        >
            <ProfilePageHeader />
            <div>
                {validationErrors?.length && validationErrors.map((err) => (
                    <Text
                        theme={TextTheme.ERROR}
                        key={err}
                        text={validationErrorsTranslates[err]}
                    />
                ))}
            </div>
            <ProfileCard
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
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
