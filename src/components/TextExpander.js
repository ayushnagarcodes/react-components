import { useState } from "react";
import "./TextExpander.css";

export default function TextExpander({
    state = false,
    words = 5,
    btnColor = "#0b0b96",
    children,
}) {
    const [isOpen, setIsOpen] = useState(state);
    const wordArr = children.split(" ");
    if (wordArr.length < words) {
        words = wordArr.length;
    }

    return (
        <div className="container">
            <p>
                <span>
                    {isOpen
                        ? children
                        : wordArr.slice(0, words).join(" ") + "..."}
                </span>
                <button
                    style={{ color: btnColor }}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "Show less" : "Show more"}
                </button>
            </p>
        </div>
    );
}
