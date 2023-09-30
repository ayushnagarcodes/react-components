import Steps from "./components/Steps.js";
import StarRating from "./components/StarRating.js";
import TextExpander from "./components/TextExpander.js";
import Flashcards from "./components/Flashcards.js";
import Accordion from "./components/Accordion.js";
import AccordionV2 from "./components/AccordianV2.js";
import TipCalculator from "./components/TipCalculator.js";
import DateCounter from "./components/DateCounter.js";
import DateCounterV2 from "./components/DateCounterV2.js";

export default function App() {
    return (
        <main>
            <h1 className="main-heading"># React Mini Projects</h1>
            <Steps />
            <StarRating />
            <TextExpander />
            <Flashcards />
            <Accordion />
            <AccordionV2 />
            <TipCalculator />
            <DateCounter />
            <DateCounterV2 />
        </main>
    );
}
