import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classnames/classnames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to="/" className={cls.mainLink} theme={AppLinkTheme.PRIMARY}>{t('Main page')}</AppLink>
                <AppLink to="/about" theme={AppLinkTheme.PRIMARY}>{t('About page')}</AppLink>
            </div>
        </div>
    );
};