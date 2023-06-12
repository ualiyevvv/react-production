import {render} from "react-dom";
import {Counter} from "./components/Counter";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import ThemeProvider from "./theme/ThemeProvider";

render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
)