import { StateSchema } from 'app/providers/StoreProvider';
import {
    MutableRefObject, ReactNode,
    UIEvent,
    useRef,
} from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    useAppDispatch, useInfiniteScroll, useInitialEffect, useThrottle,
} from 'shared/lib/hooks';
import { getScrollByPathname } from '../model/selectors/getScrollByPathname';
import { scrollActions } from '../model/slices/ScrollSlice';
import cls from './Page.module.scss';

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

const Page = (props: PageProps) => {
    const {
        className,
        children,
        onScrollEnd,
    } = props;

    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    const scrollPosition = useSelector(
        (state: StateSchema) => getScrollByPathname(state, pathname),
    );

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(scrollActions.setScroll({
            position: e.currentTarget.scrollTop,
            path: pathname,
        }));
    }, 500);

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    return (
        <section
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
            onScroll={onScroll}
        >
            {children}
            <div ref={triggerRef} />
        </section>
    );
};

export default Page;
