import { ChangeEvent, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T;
    label: number | string;
}

export interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    value: T;
    placeholder?: string;
    readonly?: boolean;
    options?: SelectOption<T>[];
    onChange?: (value: T) => void;
}

const Select = <T extends string>(props: SelectProps<T>) => {
    const {
        className,
        label,
        options = [],
        placeholder = undefined,
        readonly = false,
        value,
        onChange,
    } = props;

    const optionsList = useMemo(() => options?.map((opt) => (
        <option
            className={cls.option}
            key={opt.value}
            value={opt.value}
        >
            {opt.label}
        </option>
    )), [options]);
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    };
    return (
        <div className={classNames(cls.Wrapper, {}, [className])}>
            {label && <span className={cls.label}>{label}</span>}
            <select
                disabled={readonly}
                className={cls.Select}
                onChange={onChangeHandler}
                value={value}
            >
                {placeholder && <option className={cls.option} selected disabled>{placeholder}</option>}
                {optionsList}
            </select>
        </div>
    );
};

export default Select;
