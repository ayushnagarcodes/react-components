import { useState } from "react";
import "./TextExpander.css";

export default function TextExpander() {
    const [isOpen, setIsOpen] = useState(false);
    const btnStyles = {
        color: "rgb(11, 11, 150)",
    };
    const textStyles = {
        width: "30ch",
    };

    return (
        <article className="component component--text-expander">
            <h1>Text Expander</h1>

            <div className={`container ${isOpen ? "" : "active"}`}>
                <p>
                    <span style={textStyles}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestias perspiciatis, qui ab sint ipsa asperiores
                        nostrum rerum soluta eveniet voluptate!
                    </span>
                    <button
                        style={btnStyles}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? "Show less" : "Show more"}
                    </button>
                </p>
            </div>
        </article>
    );
}
