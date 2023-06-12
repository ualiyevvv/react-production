import {useState} from "react";
import './counter.scss'
export const Counter = () => {
    const [counter, setCounter] = useState(0);

    function onClick() {
        setCounter(counter+1);
    }


    return (<>
        <h2>{counter}</h2>
        <button onClick={onClick}>increment</button>
    </>)
}