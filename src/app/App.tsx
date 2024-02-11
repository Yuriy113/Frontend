import { Link } from 'react-router-dom';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from './../shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';

import './styles/index.scss';

export const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to="/">Main page</Link>
            <Link to="/about">About page</Link>
            <AppRouter />

            <div>
                <button onClick={toggleTheme}>Change theme</button>
            </div>
        </div>
    );
};
