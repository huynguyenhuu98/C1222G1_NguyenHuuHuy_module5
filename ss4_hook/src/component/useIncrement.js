import {useState} from "react";

export function useIncrement() {
    const [count, setCount] = useState(0);

    function increase(addAmount) {
        setCount(count + addAmount);
    }

    return [count, increase];
}