import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Tabs.module.scss';

export interface Tab<T extends string> {
    value: T;
    label: number | string;
}

interface TabsProps<T extends string> {
    className?: string;
    value?: T;
    onChange?: (tab: T) => void;
    tabs: Tab<T>[];
}

const Tabs = <T extends string>(props: TabsProps<T>) => {
    const {
        className,
        value,
        onChange,
        tabs,
    } = props;

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map((t) => (
                <div
                    key={t.value}
                    className={classNames(cls.tab, { [cls.selectedTab]: t.value === value })}
                    onClick={() => {
                        onChange?.(t.value);
                    }}
                >
                    {t.label}
                </div>
            ))}
        </div>
    );
};

export default Tabs;
