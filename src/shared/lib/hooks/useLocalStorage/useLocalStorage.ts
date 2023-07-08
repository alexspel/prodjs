import { useCallback, useEffect, useState } from 'react';

export interface UseLocalStorage {
    name: string;
}

export type UseLocalStorageResult = [string | null, (val: string | null) => void];

export function useLocalStorage(props: UseLocalStorage): UseLocalStorageResult {
    const {
        name,
    } = props;
    const [value, setValue] = useState<string | null>(localStorage.getItem(name));

    const SetValue = useCallback((val: string | null) => {
        setValue(val);
        localStorage.setItem(name, val as string);
    }, [name, setValue]);

    useEffect(() => {
        SetValue(value);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return [value, SetValue];
}
