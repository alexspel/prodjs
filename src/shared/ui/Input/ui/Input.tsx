import React, {
    InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    label?: string;
    readOnly?: boolean;
    allowClear?: boolean;
}

const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        autofocus = false,
        label,
        readOnly = false,
        allowClear = false,
        ...otherProps
    } = props;

    const [isFocused, setIsFocused] = useState(false);
    const ref = useRef<HTMLInputElement>(null);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    return (
        <div className={classNames(cls.InputWrapper, {
            [cls.clearable]: allowClear,
        })}
        >
            {label && <span>{label}</span>}
            <input
                data-testid="input"
                className={classNames(
                    cls.Input,
                    {
                        [cls.focused]: isFocused,
                        [cls.readonly]: readOnly,
                    },
                    [className],
                )}
                ref={ref}
                type={type}
                value={value}
                onChange={onChangeHandler}
                onFocus={onFocus}
                onBlur={onBlur}
                readOnly={readOnly}
                {...otherProps}
            />
        </div>
    );
});

export default Input;
