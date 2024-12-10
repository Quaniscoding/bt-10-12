/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'

export default function Bai2() {
    const [counter, setCounter] = useState(0);

    const tang = () => {
        setCounter(counter + 1);
    };

    const giam = () => {
        setCounter((prev) => (prev > 0 ? prev - 1 : 0));
    };
    const reset = () => {
        setCounter(0);
    };
    const style = {
        fontSize: "60%",
        margin: "10px",
        padding: "10px",
        backgroundColor: "green",
        borderRadius: "8%",
        color: counter > 0 ? 'yellow' : counter < 0 ? 'red' : 'black',
    }


    return (
        <div>
            {/* bai2 */}
            <div
            >
                Counter App
                <div
                >
                    {counter}
                </div>
                <div className="buttons">
                    <button
                        style={style}
                        onClick={tang}
                    >
                        Increment
                    </button>
                    <button
                        style={style}
                        onClick={giam}
                    >
                        Decrement
                    </button>
                    <button
                        style={style}
                        onClick={reset}
                    >
                        Reset
                    </button>
                </div>
            </div>

        </div>
    )
}
