import {
    FC,
    useEffect,
    useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    Button,
    ButtonProps,
} from '../Button/Button';
import cls from './ToggleButton.module.scss';

interface ToggleButtonProps extends ButtonProps {
    collapsed: boolean;
    onToggle?: () => void;
}

export const ToggleButton: FC<ToggleButtonProps> = (props) => {
    const {
        className,
        collapsed,
        onToggle,
        ...otherProps } = props;
    const { t } = useTranslation();
    const [label, setLabel] = useState('');
    useEffect(() => {
        setLabel(
            collapsed ? '>' : '<',
        );
    }, [collapsed]);

    return (
        <Button
            className={classNames(cls.ToggleButton, {}, [className])}
            onClick={onToggle}
            {...otherProps}
        >
            {t(label)}
        </Button>
    );
};
