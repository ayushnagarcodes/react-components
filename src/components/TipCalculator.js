import { useState } from "react";
import "./TipCalculator.css";

function SelectInput({ percentTip, children, onSelectTip }) {
    return (
        <div className="input-container">
            <label>{children}</label>
            <select value={percentTip} onChange={(e) => onSelectTip(e)}>
                <option value={0}>Dissatisfied (0%)</option>
                <option value={5}>It was okay (5%)</option>
                <option value={10}>It was good (10%)</option>
                <option value={20}>Absolutely amazing! (20%)</option>
            </select>
        </div>
    );
}

function Output({ total, percentTip, friendPercentTip, onReset }) {
    const totalTip = (total * ((percentTip + friendPercentTip) / 2)) / 100;
    return (
        <div className="output">
            <p>{`You pay $${
                total + totalTip
            } ($${total} + $${totalTip} tip)`}</p>
            <button onClick={onReset}>Reset</button>
        </div>
    );
}

export default function TipCalculator() {
    const [total, setTotal] = useState(0);
    const [percentTip, setPercentTip] = useState(0);
    const [friendPercentTip, setFriendPercentTip] = useState(0);

    function handleReset() {
        setTotal(0);
        setPercentTip(0);
        setFriendPercentTip(0);
    }

    return (
        <article className="component component--tip-calculator">
            <h1>Tip Calculator</h1>

            <div className="container">
                <div className="input-container">
                    <label>How much was the bill?</label>
                    <input
                        type="text"
                        value={total}
                        onChange={(e) =>
                            setTotal(() =>
                                isNaN(e.target.value)
                                    ? 0
                                    : Number(e.target.value)
                            )
                        }
                    />
                </div>
                <SelectInput
                    percentTip={percentTip}
                    onSelectTip={(e) => setPercentTip(Number(e.target.value))}
                >
                    How did you like the service?
                </SelectInput>
                <SelectInput
                    percentTip={friendPercentTip}
                    onSelectTip={(e) =>
                        setFriendPercentTip(Number(e.target.value))
                    }
                >
                    How did your friend like the service?
                </SelectInput>

                {total > 0 && (
                    <Output
                        total={total}
                        percentTip={percentTip}
                        friendPercentTip={friendPercentTip}
                        onReset={handleReset}
                    />
                )}
            </div>
        </article>
    );
}
