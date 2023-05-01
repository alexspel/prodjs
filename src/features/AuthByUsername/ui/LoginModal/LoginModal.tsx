import { FC, Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader';
import { Modal } from 'shared/ui/Modal';
import { ModalProps } from 'shared/ui/Modal/ui/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import cls from './LoginModal.module.scss';

interface LoginModalProps extends ModalProps {
    className?: string;
}

const LoginModal: FC<LoginModalProps> = (props) => {
    const {
        className,
        isOpen = false,
        onClose,
        ...otherProps
    } = props;

    return (
        <Modal
            className={classNames(cls.LoginModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            {...otherProps}
        >
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
};

export default LoginModal;
