import {
    Suspense, memo, useCallback,
} from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, routeConfig } from 'shared/config/AppRouter/AppRouter';
import PageLoader from 'widgets/PageLoader/ui/PageLoader';
import RequireAuth from './RequireAuth';

const AppRouter = memo(() => {
    const renderWithAuthWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                <div className="page-wrapper">{route.element}</div>
            </Suspense>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
            />
        );
    }, []);

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithAuthWrapper)}
        </Routes>
    );
});

export default AppRouter;
