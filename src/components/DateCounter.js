import { useState } from "react";
import "./DateCounter.css";

export default function DateCounter() {
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);
    const date = new Date();
    date.setDate(date.getDate() + count);

    return (
        <article className="component component--date-counter">
            <h1>Date Counter</h1>
            <div className="container container--steps">
                <button
                    className="container__btn"
                    onClick={() => {
                        if (step > 1) setStep((s) => s - 1);
                    }}
                >
                    <span>-</span>
                </button>
                <p>
                    Step: <span>{step}</span>
                </p>
                <button
                    className="container__btn"
                    onClick={() => setStep((s) => s + 1)}
                >
                    <span>+</span>
                </button>
            </div>

            <div className="container container--count">
                <button
                    className="container__btn"
                    onClick={() => setCount((c) => c - step)}
                >
                    <span>-</span>
                </button>
                <p>
                    Count: <span>{count}</span>
                </p>
                <button
                    className="container__btn"
                    onClick={() => setCount((c) => c + step)}
                >
                    <span>+</span>
                </button>
            </div>
            <p className="output">
                {count > 0 &&
                    `${count} ${count === 1 ? "day" : "days"} from today is `}
                {count < 0 &&
                    `${Math.abs(count)} ${
                        count === -1 ? "day" : "days"
                    } ago was `}
                {count === 0 && `Today is `}
                <span>{date.toDateString()}</span>
            </p>
        </article>
    );
}
