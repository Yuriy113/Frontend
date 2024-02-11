import { useTheme } from './providers/ThemeProvider';
import { classNames } from './../shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';

import './styles/index.scss';
import { Navbar } from 'widgets/Navbar';

export const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <AppRouter />
            <div>
                <button onClick={toggleTheme}>Change theme</button>
            </div>
        </div>
    );
};
