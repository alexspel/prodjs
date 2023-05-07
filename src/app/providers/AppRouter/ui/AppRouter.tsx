import { getUserAuthData } from 'entities/User';
import { Suspense, memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/AppRouter/AppRouter';
import PageLoader from 'widgets/PageLoader/ui/PageLoader';

const AppRouter = memo(() => {
    const authData = useSelector(getUserAuthData);
    const routes = useMemo(() => Object.values(routeConfig)
        .filter((r) => {
            if (r.authOnly && !authData) {
                return false;
            }
            return true;
        }), [authData]);
    return (
        <Routes>
            {routes.map(({ path, element }) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <Suspense fallback={<PageLoader />}>
                            <div className="page-wrapper">{element}</div>
                        </Suspense>
                    )}
                />
            ))}
        </Routes>
    );
});

export default AppRouter;
