import {render} from "react-dom";
import {Counter} from "./components/Counter";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
)