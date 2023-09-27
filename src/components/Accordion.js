import { useState } from "react";
import "./Accordion.css";

const faqs = [
    {
        title: "Where are these chairs assembled?",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
    },
    {
        title: "How long do I have to return my chair?",
        text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
    },
    {
        title: "Do you ship to countries outside the EU?",
        text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
    },
];

function Item({ num, title, text }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={isOpen ? "item open" : "item"}
            onClick={() => setIsOpen((isOpen) => !isOpen)}
        >
            <span className="number">{String(num).padStart(2, "0")}</span>
            <h2 className="title">{title}</h2>
            <span className="icon">{isOpen ? "-" : "+"}</span>
            {isOpen && <p className="content-box">{text}</p>}
        </div>
    );
}

export default function Accordion() {
    return (
        <article className="component component--accordion">
            <h1>Accordion</h1>
            <div className="accordion">
                {faqs.map((faq, i) => (
                    <Item
                        num={i + 1}
                        title={faq.title}
                        text={faq.text}
                        key={i + 1}
                    />
                ))}
            </div>
        </article>
    );
}
