import React, {useState} from "react";

export function Counter() {
    function UseIncrement() {
        const [count, setCount] = useState(0);

        function increase(addAmount) {
            setCount(count + addAmount);
        }

        return [count, increase];
    }

    function Counter1() {
        const [count, increase] = UseIncrement()
        return (
            <>
                <h3>Count: {count}</h3>
                <button onClick={() => increase(1)}>Add 1</button>
            </>
        )
    }

    function Counter2() {
        const [count, increase] = UseIncrement()
        return (
            <>
                <h3>Count: {count}</h3>
                <button onClick={() => increase(2)}>Add 2</button>
            </>
        )
    }

    return (
        <>
            <Counter1/>
            <Counter2/>
        </>
    )
}
