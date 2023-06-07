import React, {useState} from "react";

function UseIncrement() {
    const [count, setCount] = useState(0);

    function increase(addAmount) {
        setCount(count + addAmount);
    }

    return [count, increase];
}

export function Counter() {
    const [count1, increase1] = UseIncrement();
    const [count2, increase2] = UseIncrement();

    return (
        <>
            <h2>Count: {count1}</h2>
            <button onClick={() => increase1(1)}>Add 1</button>

            <h2>Count: {count2}</h2>
            <button onClick={() => increase2(2)}>Add 2</button>
        </>
    );
}