import { LoginModal } from 'features/AuthByUsername';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const openModal = useCallback(() => {
        setIsOpen(true);
    }, [setIsOpen]);

    const onCloseModal = useCallback(() => {
        setIsOpen(false);
    }, [setIsOpen]);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={openModal}>{t('Login')}</Button>
            </div>

            <LoginModal onClose={onCloseModal} isOpen={isOpen} lazy />
        </div>
    );
};
