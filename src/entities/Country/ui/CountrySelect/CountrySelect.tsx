import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Select, SelectOption } from 'shared/ui/Select';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    onChange?: (value: Country) => void;
    value?: Country;
    readonly?: boolean;
}

const countryOptions: SelectOption<Country>[] = [
    { value: Country.RUSSIA, label: Country.RUSSIA },
    { value: Country.BELARUS, label: Country.BELARUS },
    { value: Country.UKRAINE, label: Country.UKRAINE },
    { value: Country.ARMENIA, label: Country.ARMENIA },
    { value: Country.KAZAKHSTAN, label: Country.KAZAKHSTAN },
];

const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        className,
        onChange,
        value = Country.RUSSIA,
        readonly = true,
    } = props;

    const { t } = useTranslation();

    return (
        <Select
            className={className}
            placeholder={t('Your country')}
            onChange={onChange}
            value={value}
            options={countryOptions}
            readonly={readonly}
        />
    );
});

export default CountrySelect;
