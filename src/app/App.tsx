import { Link, Route, Routes } from 'react-router-dom';
import { AboutPage } from '../pages/AboutPage';
import { MainPage } from './../pages/MainPage';

import { Suspense } from 'react';
import './styles/index.scss';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from './../shared/lib/classNames/classNames';

export const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to="/">Main page</Link>
            <Link to="/about">About page</Link>
            <Suspense fallback={<div>loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </Suspense>
            <button onClick={toggleTheme}>Change theme</button>
        </div>
    );
};
