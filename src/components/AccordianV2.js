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

function Item({ num, title, selectedId, onItemClick, children }) {
    const isOpen = num === selectedId;

    return (
        <div
            className={isOpen ? "item open" : "item"}
            onClick={() => onItemClick(num)}
        >
            <span className="number">{String(num).padStart(2, "0")}</span>
            <h2 className="title">{title}</h2>
            <span className="icon">{isOpen ? "-" : "+"}</span>
            {isOpen && <p className="content-box">{children}</p>}
        </div>
    );
}

export default function AccordionV2() {
    const [selectedId, setSelectedId] = useState(null);

    function handleItemClick(id) {
        selectedId === id ? setSelectedId(null) : setSelectedId(id);
    }

    return (
        <article className="component component--accordion">
            <h1>Accordion V2</h1>
            <p>(Only 1 can be selected at a time)</p>
            <div className="accordion">
                {faqs.map((faq, i) => (
                    <Item
                        num={i + 1}
                        title={faq.title}
                        selectedId={selectedId}
                        onItemClick={handleItemClick}
                        key={i + 1}
                    >
                        {faq.text}
                    </Item>
                ))}
            </div>
        </article>
    );
}
