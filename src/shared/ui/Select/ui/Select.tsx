import { ChangeEvent, memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption {
    value: number | string;
    label: number | string;
}

export interface SelectProps {
    className?: string;
    label?: string;
    value: string;
    placeholder?: string;
    readonly: boolean;
    options?: SelectOption[];
    onChange?: (value: string) => void;
}

const Select = memo((props: SelectProps) => {
    const {
        className,
        label,
        options = [],
        placeholder = undefined,
        readonly = true,
        value,
        onChange,
    } = props;

    const optionsList = useMemo(
        () => options?.map(
            (opt) => (
                <option
                    className={cls.option}
                    key={opt.value}
                    value={opt.value}
                >
                    {opt.label}
                </option>
            ),
        ),
        [options],
    );
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };
    return (
        <div className={classNames(cls.Wrapper, {}, [className])}>
            {label && <span className={cls.label}>{label}</span>}
            <select
                disabled={readonly}
                className={cls.Select}
                onChange={onChangeHandler}
                defaultValue={value}
            >
                {placeholder && <option className={cls.option} selected disabled>{placeholder}</option>}
                {optionsList}
            </select>
        </div>
    );
});

export default Select;
