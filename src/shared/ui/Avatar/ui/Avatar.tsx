import { CSSProperties, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
}

const Avatar = (props: AvatarProps) => {
    const {
        className,
        alt = '',
        src,
        size = 100,
    } = props;

    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);

    return (
        <img
            style={styles}
            className={classNames(cls.Avatar, {}, [className])}
            src={src}
            alt={alt}
        />
    );
};

export default Avatar;
