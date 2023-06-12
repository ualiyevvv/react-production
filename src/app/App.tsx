import {Link} from 'react-router-dom';
import './styles/index.scss';

import {classNames} from "shared/lib/helpers/classNames";
import {useTheme} from "app/providers/ThemeProvider";

export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>change theme</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
        </div>
    )

}