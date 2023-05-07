import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select';
import { SelectOption } from 'shared/ui/Select/ui/Select';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    onChange?: (value: Country) => void;
    value?: Country;
    readonly?: boolean;
}

const countryOptions: SelectOption[] = [
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

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            className={className}
            placeholder={t('Your country')}
            onChange={onChangeHandler}
            value={value}
            options={countryOptions}
            readonly={readonly}
        />
    );
});

export default CountrySelect;
