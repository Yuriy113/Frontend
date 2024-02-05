import { Link, Route, Routes } from 'react-router-dom';
// import { AboutPage } from './pages/AboutPage/AboutPage';
import { AboutPageAsync } from './pages/AboutPage/AboutPageAsync';
import { MainPage } from './pages/MainPage/MainPage';

import './index.scss';
import { Suspense } from 'react';

export const App = () => {
    return (
        <div className="app">
            <Link to={'/'}>Main page</Link>
            <Link to={'/about'}>About page</Link>
            <Suspense fallback="loading...">
                <Routes>
                    <Route path={'/'} element={<MainPage />} />
                    <Route path={'/about'} element={<AboutPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};
