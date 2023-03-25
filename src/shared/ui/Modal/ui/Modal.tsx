import React, {
    FC, useCallback, useEffect,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
    parent?: HTMLElement;
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
}

const Modal: FC<ModalProps> = (props) => {
    const {
        parent = document.querySelector('.app'),
        className,
        children,
        onClose,
        isOpen,
    } = props;

    const closeHandler = useCallback(() => {
        if (onClose) {
            onClose();
        }
    }, [onClose]);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const classes = classNames(cls.Modal, {
        [cls.opened]: isOpen,
    }, [className]);

    return (
        <Portal element={parent}>
            <div className={classes}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div
                        className={classNames(cls.content, {
                            [cls.opened]: isOpen,
                        })}
                        onClick={onContentClick}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};

export default Modal;
