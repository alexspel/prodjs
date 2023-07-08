import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Select, SelectOption } from 'shared/ui/Select';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    onChange?: (value: Currency) => void;
    value?: Currency;
    readonly?: boolean;
}

const currencyOptions: SelectOption<Currency>[] = [
    { value: Currency.RUB, label: Currency.RUB },
    { value: Currency.EUR, label: Currency.EUR },
    { value: Currency.USD, label: Currency.USD },
];

const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {
        className,
        onChange,
        value = Currency.RUB,
        readonly = true,
    } = props;

    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <Select
            className={className}
            placeholder={t('Your currency')}
            onChange={onChangeHandler}
            value={value}
            options={currencyOptions}
            readonly={readonly}
        />
    );
});

export default CurrencySelect;
