import { useState } from "react";
import "./DateCounterV2.css";

export default function DateCounterV2() {
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);
    const date = new Date();
    date.setDate(date.getDate() + count);

    function handleReset() {
        setStep(() => 1);
        setCount(() => 0);
    }

    return (
        <article className="component component--date-counter-v2">
            <h1>Date Counter v2</h1>

            <div className="container container--steps">
                <input
                    type="range"
                    min={0}
                    max={10}
                    value={step}
                    onChange={(e) =>
                        setStep(() =>
                            Number(e.target.value) >= 1
                                ? Number(e.target.value)
                                : 1
                        )
                    }
                />
                <span>{step}</span>
            </div>

            <div className="container container--count">
                <button
                    className="container__btn"
                    onClick={() => setCount((count) => count - step)}
                >
                    <span>-</span>
                </button>
                <input
                    type="text"
                    value={count}
                    onChange={(e) =>
                        setCount(() =>
                            isNaN(e.target.value) ? "-" : Number(e.target.value)
                        )
                    }
                />
                <button
                    className="container__btn"
                    onClick={() => setCount((count) => count + step)}
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

            {(step !== 1 || count !== 0) && (
                <button className="reset-btn" onClick={handleReset}>
                    Reset
                </button>
            )}
        </article>
    );
}
