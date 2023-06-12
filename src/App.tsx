import {Link, Route, Routes} from 'react-router-dom';
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {Suspense, useContext, useState} from "react";
import './styles/index.scss';
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";

export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={`app ${theme}`}>
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