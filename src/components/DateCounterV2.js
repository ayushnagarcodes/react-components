import { useReducer } from "react";
import "./DateCounterV2.css";

const initialState = { count: 0, step: 1 };

function reducer(state, action) {
    switch (action.type) {
        case "increase":
            return { ...state, count: state.count + state.step };
        case "decrease":
            return { ...state, count: state.count - state.step };
        case "setCount":
            return { ...state, count: action.payload };
        case "setStep":
            return { ...state, step: action.payload };
        case "reset":
            return initialState;
        default:
            throw new Error("Unknown action!");
    }
}

export default function DateCounterV2() {
    const [{ count, step }, dispatch] = useReducer(reducer, initialState);
    const date = new Date();
    date.setDate(date.getDate() + count);

    return (
        <>
            <div className="container container--steps">
                <input
                    type="range"
                    min={0}
                    max={10}
                    value={step}
                    onChange={(e) =>
                        dispatch({
                            type: "setStep",
                            payload:
                                Number(e.target.value) >= 1
                                    ? Number(e.target.value)
                                    : 1,
                        })
                    }
                />
                <span>{step}</span>
            </div>

            <div className="container container--count">
                <button
                    className="container__btn"
                    onClick={() => dispatch({ type: "decrease" })}
                >
                    <span>-</span>
                </button>

                <input
                    type="text"
                    value={count}
                    onChange={(e) =>
                        dispatch({
                            type: "setCount",
                            payload: isNaN(e.target.value)
                                ? "-"
                                : Number(e.target.value),
                        })
                    }
                />

                <button
                    className="container__btn"
                    onClick={() => dispatch({ type: "increase" })}
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
                <button
                    className="reset-btn"
                    onClick={() => dispatch({ type: "reset" })}
                >
                    Reset
                </button>
            )}
        </>
    );
}
