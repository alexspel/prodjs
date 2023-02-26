import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../Button/Button';

interface ToggleButtonProps {
    collapsed: boolean;
    onToggle?: () => void;
}

export const ToggleButton: FC<ToggleButtonProps> = (props) => {
    const { collapsed, onToggle } = props;
    const { t } = useTranslation();
    const [label, setLabel] = useState(null);
    useEffect(() => {
        setLabel(
            collapsed ? 'Untoggle' : 'Toggle',
        );
    }, [collapsed]);

    return (
        <Button onClick={onToggle}>{t(label)}</Button>
    );
};
