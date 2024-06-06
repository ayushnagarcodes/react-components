import DateCounter from "./components/DateCounter/DateCounter.js";
import DateCounterV2 from "./components/DateCounterV2/DateCounterV2.js";
import TipCalculator from "./components/TipCalculator/TipCalculator.js";
import Accordion from "./components/Accordion/Accordion.js";
import Flashcards from "./components/Flashcards/Flashcards.js";
import TextExpander from "./components/TextExpander/TextExpander.js";
import StarRating from "./components/StarRating/StarRating.js";
import Steps from "./components/Steps/Steps.js";
import BankAccount from "./components/BankAccount/BankAccount.js";
import Geolocator from "./components/Geolocator/Geolocator.js";
import CurrencyConverter from "./components/CurrencyConverter/CurrencyConverter.js";
import InfiniteScroll from "./components/InfiniteScroll/InfiniteScroll.js";

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
                name="Infinite Scroll"
                uniqueClass="component--infinite-scroll"
            >
                <InfiniteScroll />
            </ComponentLayout>

            <ComponentLayout
                name="Currency Converter"
                uniqueClass="component--currency-converter"
            >
                <CurrencyConverter />
            </ComponentLayout>

            <ComponentLayout
                name="Geolocator"
                uniqueClass="component--geolocator"
            >
                <Geolocator />
            </ComponentLayout>

            <ComponentLayout
                name="useReducer Bank Account"
                uniqueClass="component--bank-account"
            >
                <BankAccount />
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
                name="Date Counter V2"
                uniqueClass="component--date-counter-v2"
            >
                <DateCounterV2 />
            </ComponentLayout>

            <ComponentLayout
                name="Date Counter"
                uniqueClass="component--date-counter"
            >
                <DateCounter />
            </ComponentLayout>
        </main>
    );
}
