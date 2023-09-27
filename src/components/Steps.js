import { useState } from "react";
import "./Steps.css";

const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];

export default function Steps() {
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(true);

    function handlePrevious() {
        if (step > 1) setStep((step) => step - 1);
    }

    function handleNext() {
        if (step < 3) setStep((step) => step + 1);
    }

    function handleStepsView(event) {
        setIsOpen((isOpen) => !isOpen);
    }

    return (
        <article className="component component--steps">
            <h1>Steps</h1>
            <button className="component__close-btn" onClick={handleStepsView}>
                ✖
            </button>
            {isOpen && (
                <section className="component__steps">
                    <article className="steps__numbers">
                        <div className={step >= 1 ? "steps__active" : ""}>
                            <span>1</span>
                        </div>
                        <div className={step >= 2 ? "steps__active" : ""}>
                            <span>2</span>
                        </div>
                        <div className={step >= 3 ? "steps__active" : ""}>
                            <span>3</span>
                        </div>
                    </article>
                    <p className="steps__message">{messages[step - 1]}</p>
                    <article className="steps__btns">
                        <Button onClick={handlePrevious}>
                            <span>👈</span> Previous
                        </Button>
                        <Button onClick={handleNext}>
                            Next <span>👉</span>
                        </Button>
                    </article>
                </section>
            )}
        </article>
    );
}

function Button({ onClick, children }) {
    return <button onClick={onClick}>{children}</button>;
}
