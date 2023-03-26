import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal';
import { ModalProps } from 'shared/ui/Modal/ui/Modal';
import LoginForm from '../LoginForm/LoginForm';
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
            <LoginForm />
        </Modal>
    );
};

export default LoginModal;
