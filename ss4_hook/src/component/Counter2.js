import {useIncrement} from "./UseIncrement";
import React from "react";

export function Counter2() {
    const [count, increase] = useIncrement()
    return (
        <>
            <h3>Count: {count}</h3>
            <button onClick={() => increase(2)}>Add 2</button>
        </>
    )
}