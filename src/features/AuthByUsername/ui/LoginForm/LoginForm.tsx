import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import Text, { TextTheme } from 'shared/ui/Text/ui/Text';
import {
    getLoginError, getLoginIsLoading, getLoginPassword, getLoginUsername,
} from '../..';
import { LoginByUsername } from '../../model/services/LoginByUsername/LoginByUsername';
import { LoginActions, LoginReducer } from '../../model/slice/LoginSlice';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
}

const inititalReducers: ReducersList = {
    loginForm: LoginReducer,
};

const LoginForm = memo((props: LoginFormProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(LoginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(LoginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(LoginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <DynamicModuleLoader
            reducers={inititalReducers}
        >
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('Auth form')} />
                {error && <Text theme={TextTheme.ERROR} text={t(error)} />}
                <Input
                    autofocus
                    type="text"
                    placeholder="Username"
                    onChange={onChangeUsername}
                    value={username}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    onChange={onChangePassword}
                    value={password}
                />
                <Button
                    theme={ButtonTheme.OUTLINE}
                    className={cls.loginButton}
                    onClick={onLoginClick}
                    disabled={isLoading}
                >
                    {t('Login')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
