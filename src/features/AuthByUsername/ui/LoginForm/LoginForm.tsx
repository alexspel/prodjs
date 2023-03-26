import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

type LoginFormData = {
    name: string;
    password: string;
}

const LoginForm: FC<LoginFormProps> = (props) => {
    const {
        className,
    } = props;
    const [formData, setFormData] = useState<LoginFormData>({ name: '', password: '' });
    const { t } = useTranslation();

    const handleChange = (value: string) => {
        setFormData(
            {
                ...formData,
                name: value,
            },
        );
    };

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                autofocus
                type="text"
                placeholder="login"
            />
            <Input
                type="password"
                placeholder="password"
            />
            <Button className={cls.loginButton}>{t('Login')}</Button>
        </div>
    );
};

export default LoginForm;
