import { Suspense, useContext, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './styles/index.scss';

import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classnames/classnames';


const App = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={
            classNames(
                {
                    cls: "app",
                    mods: {
                        hovered: true,
                        selected: true
                    },
                    additional: [theme]
                }
            )
        }>
            <button onClick={toggleTheme}>THEME</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync />} />
                    <Route path={'/'} element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
