import { useCallback, useMemo, useState } from 'react';

export interface UseHoverBind {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

export type UseHoverResult = [boolean, UseHoverBind];

export const useHover = (): UseHoverResult => {
    const [isHover, setIsHover] = useState(false);

    const onMouseEnter = useCallback(() => {
        setIsHover(true);
    }, [setIsHover]);

    const onMouseLeave = useCallback(() => {
        setIsHover(false);
    }, [setIsHover]);

    const result = useMemo<UseHoverResult>(() => [
        isHover,
        {
            onMouseEnter,
            onMouseLeave,
        },
    ], [isHover, onMouseEnter, onMouseLeave]);

    return result;
};
