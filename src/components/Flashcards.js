import { useState } from "react";
import "./Flashcards.css";

const questions = [
    {
        id: 3457,
        question: "What language is React based on?",
        answer: "JavaScript",
    },
    {
        id: 7336,
        question: "What are the building blocks of React apps?",
        answer: "Components",
    },
    {
        id: 8832,
        question:
            "What's the name of the syntax we use to describe a UI in React?",
        answer: "JSX",
    },
    {
        id: 1297,
        question: "How to pass data from parent to child components?",
        answer: "Props",
    },
    {
        id: 9103,
        question: "How to give components memory?",
        answer: "useState hook",
    },
    {
        id: 2002,
        question:
            "What do we call an input element that is completely synchronised with state?",
        answer: "Controlled element",
    },
];

export default function Flashcards() {
    const [selectedId, setSelectedId] = useState(null);

    function handleActive(id) {
        setSelectedId(id !== selectedId ? id : null);
    }

    return (
        <article className="component component--flashcards">
            <h1>Flashcards</h1>
            <div className="grid-container">
                {questions.map((obj) => (
                    <div
                        className={`container ${
                            selectedId === obj.id ? "active" : ""
                        }`}
                        data={obj}
                        onClick={() => handleActive(obj.id)}
                        key={obj.id}
                    >
                        <p>
                            {selectedId === obj.id ? obj.answer : obj.question}
                        </p>
                    </div>
                ))}
            </div>
        </article>
    );
}