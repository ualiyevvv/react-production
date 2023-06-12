import {Link, Route, Routes} from 'react-router-dom';
import {Suspense} from "react";
import './styles/index.scss';

import {classNames} from "shared/lib/helpers/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AboutPageAsync} from "pages/AboutPage";
import {MainPageAsync} from "pages/MainPage";

export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>change theme</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<AboutPageAsync/>} />
                    <Route path={'/about'} element={<MainPageAsync/>} />
                </Routes>
            </Suspense>
        </div>
    )

}