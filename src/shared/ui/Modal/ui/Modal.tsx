import React, {
    FC, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames, TMods } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal';
import cls from './Modal.module.scss';

export interface ModalProps {
    parent?: HTMLElement;
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const Modal: FC<ModalProps> = (props) => {
    const {
        parent = document.querySelector('.app'),
        children,
        onClose,
        isOpen,
        lazy = false,
        className,
    } = props;

    const [isMounted, setIsMounted] = useState(false);
    const [isOpening, setIsOpening] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [isOpened, setIsOpened] = useState(false);
    const [modalMods, setModalMods] = useState<TMods>({});
    const closingTimerRef = useRef<number>();
    const openingTimerRef = useRef<number>();

    const closeHandler = useCallback(() => {
        setIsClosing(true);

        closingTimerRef.current = window.setTimeout(() => {
            setIsOpened(false);
            setIsClosing(false);
            if (onClose) {
                onClose();
            }
        }, 100);
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

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
            setIsOpening(true);
            openingTimerRef.current = window.setTimeout(() => {
                setIsOpening(false);
                setIsOpened(true);
            }, 100);
        }
        return () => {
            clearTimeout(openingTimerRef.current);
            clearTimeout(closingTimerRef.current);
        };
    }, [isOpen]);

    useEffect(() => {
        setModalMods({
            [cls.opening]: isOpening,
            [cls.closing]: isClosing,
            [cls.opened]: isOpened,
        });
    }, [isOpening, isOpened, isClosing]);

    if (lazy && !isMounted) return null;

    return (
        <Portal element={parent}>
            <div className={classNames(cls.Modal, modalMods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div
                        className={cls.content}
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
