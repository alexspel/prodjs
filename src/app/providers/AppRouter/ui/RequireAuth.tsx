import { getUserAuthData } from 'entities/User';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/AppRouter/AppRouter';

interface RequireAuthProps {
    children: JSX.Element;
}

const RequireAuth = memo((props: RequireAuthProps) => {
    const {
        children,
    } = props;

    const auth = useSelector(getUserAuthData);
    const location = useLocation();

    if (!auth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }
    return children;
});

export default RequireAuth;
