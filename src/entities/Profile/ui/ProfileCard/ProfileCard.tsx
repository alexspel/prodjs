import { Country, CountrySelect } from 'entities/Country';
import { Currency, CurrencySelect } from 'entities/Currency';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar';
import { Input } from 'shared/ui/Input';
import { Loader } from 'shared/ui/Loader';
import { Text, TextTheme } from 'shared/ui/Text';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    loading?: boolean;
    readonly?: boolean;
    onChangeFirstName?: (value: string) => void;
    onChangeLastName?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeCurrency?: (value: Currency) => void;
    onChangeCountry?: (value: Country) => void;
}

const ProfileCard: FC<ProfileCardProps> = (props) => {
    const {
        className,
        data,
        loading = false,
        readonly = true,
        error = undefined,
        onChangeFirstName,
        onChangeLastName,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;
    const { t } = useTranslation('profile');

    if (loading) {
        return (
            <div className={
                classNames(
                    cls.ProfileCard,
                    {},
                    [className, cls.loading],
                )
            }
            >
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={
                classNames(
                    cls.ProfileCard,
                    {},
                    [className, cls.error],
                )
            }
            >
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Возникла ошибка при загрузке профиля')}
                    text={t('Возникла ошибка при загрузке профиля. Попробуйте обновить страницу')}
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            {data?.avatar && (
                <div className={cls.avatarWrapper}>
                    <Avatar size={100} alt="ava" src={data?.avatar} />
                </div>
            )}
            <Input
                value={data?.first}
                placeholder={t('Your first name')}
                onChange={onChangeFirstName}
                readOnly={readonly}
            />
            <Input
                value={data?.lastname}
                placeholder={t('Your last name')}
                onChange={onChangeLastName}
                readOnly={readonly}
            />
            <Input
                value={data?.age}
                placeholder={t('Your age')}
                onChange={onChangeAge}
                readOnly={readonly}
            />
            <Input
                value={data?.city}
                placeholder={t('Your city')}
                onChange={onChangeCity}
                readOnly={readonly}
            />
            <Input
                value={data?.username}
                placeholder={t('Your username')}
                onChange={onChangeUsername}
                readOnly={readonly}
            />
            <Input
                value={data?.avatar}
                placeholder={t('Your avatar')}
                onChange={onChangeAvatar}
                readOnly={readonly}
            />
            <CurrencySelect
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />
            <CountrySelect
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
            />
        </div>
    );
};

export default ProfileCard;
