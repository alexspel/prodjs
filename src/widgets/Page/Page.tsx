import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Page.module.scss';

interface PageProps {
    className?: string;
    children: React.ReactNode;
}

const Page = ({ className, children }: PageProps) => (
    <section className={classNames(cls.Page, {}, [className])}>
        {children}
    </section>
);

export default Page;
