import {Link, Route, Routes} from 'react-router-dom';
import {AboutPage} from "./pages/AboutPage";
import {MainPage} from "./pages/MainPage";

export const App = () => {

    return (
        <div className={'app'}>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Routes>
                <Route path={'/'} element={<MainPage/>} />
                <Route path={'/about'} element={<AboutPage/>} />
            </Routes>
        </div>
    )

}