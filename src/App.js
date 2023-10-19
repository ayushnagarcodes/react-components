import Steps from "./components/Steps.js";
import StarRating from "./components/StarRating.js";
import TextExpander from "./components/TextExpander.js";
import Flashcards from "./components/Flashcards.js";
import Accordion from "./components/Accordion.js";
import TipCalculator from "./components/TipCalculator.js";
import DateCounter from "./components/DateCounter.js";
import DateCounterV2 from "./components/DateCounterV2.js";
import CurrencyConverter from "./components/CurrencyConverter.js";

function ComponentLayout({ name, uniqueClass, children }) {
    return (
        <article className={`component ${uniqueClass}`}>
            <h2>{name}</h2>
            {children}
        </article>
    );
}

export default function App() {
    return (
        <main>
            <h1 className="main-heading"># React Mini Projects</h1>

            <ComponentLayout
                name="Currency Converter"
                uniqueClass="component--currency-converter"
            >
                <CurrencyConverter />
            </ComponentLayout>

            <ComponentLayout name="Steps" uniqueClass="component--steps">
                <Steps />
            </ComponentLayout>

            <ComponentLayout name="Stars" uniqueClass="component--stars">
                <StarRating />
            </ComponentLayout>

            <ComponentLayout
                name="Text Expander"
                uniqueClass="component--text-expander"
            >
                <TextExpander>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum laborum debitis vero doloribus incidunt, vel
                    perferendis, hic recusandae sit aut, beatae placeat quos
                    sequi rerum!
                </TextExpander>
                <TextExpander words={20} btnColor="#826600">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean.
                </TextExpander>
                <TextExpander state={true} btnColor="#008000">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart.
                </TextExpander>
            </ComponentLayout>

            <ComponentLayout
                name="Flashcards"
                uniqueClass="component--flashcards"
            >
                <Flashcards />
            </ComponentLayout>

            <ComponentLayout
                name="Accordion"
                uniqueClass="component--accordion"
            >
                <Accordion />
            </ComponentLayout>

            <ComponentLayout
                name="Tip Calculator"
                uniqueClass="component--tip-calculator"
            >
                <TipCalculator />
            </ComponentLayout>

            <ComponentLayout
                name="Date Counter"
                uniqueClass="component--date-counter"
            >
                <DateCounter />
            </ComponentLayout>

            <ComponentLayout
                name="Date Counter V2"
                uniqueClass="component--date-counter-v2"
            >
                <DateCounterV2 />
            </ComponentLayout>
        </main>
    );
}
