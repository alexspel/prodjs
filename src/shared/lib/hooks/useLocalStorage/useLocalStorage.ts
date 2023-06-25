import { useCallback, useEffect, useState } from 'react';

export interface UseLocalStorage {
    defaultValue?: string;
    name: string;
}

export type UseLocalStorageResult = [string, (val: string) => void];

export function useLocalStorage(props: UseLocalStorage): UseLocalStorageResult {
    const {
        defaultValue = '',
        name,
    } = props;
    const [value, setValue] = useState(localStorage.getItem(name) || defaultValue);

    const SetValue = useCallback((val: string) => {
        setValue(val);
        localStorage.setItem(name, val as string);
    }, [name, setValue]);

    useEffect(() => {
        SetValue(value);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return [value, SetValue];
}
