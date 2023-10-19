import { useEffect, useState } from "react";
import "./CurrencyConverter.css";

export default function CurrencyConverter() {
    const [amount1, setAmount1] = useState(0);
    const [currency1, setCurrency1] = useState("USD");
    const [amount2, setAmount2] = useState(0);
    const [currency2, setCurrency2] = useState("INR");

    function handleSetAmount(e, setterFunc) {
        const value = Number(e.target.value);
        isNaN(value) ? setterFunc(0) : setterFunc(Number(value));
    }

    function handleSetCurrency(e, setterFunc) {
        setterFunc(e.target.value);
    }

    // fetch & set amount2 when amount1 or currency1 or currency2 is changed
    useEffect(
        function () {
            if (currency1 === currency2) {
                setAmount2(amount1);
                return;
            }

            const controller = new AbortController();

            async function fetchCurrency() {
                try {
                    const response = await fetch(
                        `https://api.frankfurter.app/latest?amount=${amount1}&from=${currency1}&to=${currency2}`,
                        { signal: controller.signal }
                    );

                    if (!response.ok) throw new Error("Fetch failed!");

                    const data = await response.json();

                    setAmount2(data.rates[currency2]);
                } catch (err) {
                    if (err.name !== "AbortError") console.error(err.message);
                }
            }

            amount1 > 0 ? fetchCurrency() : setAmount2(0);

            return function () {
                controller.abort();
            };
        },
        [amount1, currency1, currency2]
    );

    return (
        <div className="container">
            <input
                type="text"
                value={amount1}
                onChange={(e) => handleSetAmount(e, setAmount1)}
            />
            <select
                value={currency1}
                onChange={(e) => handleSetCurrency(e, setCurrency1)}
            >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="CAD">CAD</option>
                <option value="INR">INR</option>
            </select>

            <input
                className="disabled"
                type="text"
                disabled={true}
                value={amount2}
            />
            <select
                value={currency2}
                onChange={(e) => handleSetCurrency(e, setCurrency2)}
            >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="CAD">CAD</option>
                <option value="INR">INR</option>
            </select>
        </div>
    );
}
