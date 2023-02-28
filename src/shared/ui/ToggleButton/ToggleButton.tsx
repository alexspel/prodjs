import {
    ButtonHTMLAttributes, FC, useEffect, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../Button/Button';

interface ToggleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    collapsed: boolean;
    onToggle?: () => void;
}

export const ToggleButton: FC<ToggleButtonProps> = (props) => {
    const { collapsed, onToggle, ...otherProps } = props;
    const { t } = useTranslation();
    const [label, setLabel] = useState('');
    useEffect(() => {
        setLabel(
            collapsed ? 'Untoggle' : 'Toggle',
        );
    }, [collapsed]);

    return (
        <Button onClick={onToggle} {...otherProps}>{t(label)}</Button>
    );
};
