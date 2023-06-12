import {useIncrement} from "./UseIncrement";
import React from "react";

export function Counter1() {
    const [count, increase] = useIncrement()
    return (
        <>
            <h3>Count: {count}</h3>
            <button onClick={() => increase(1)}>Add 1</button>
        </>
    )
}