import { useState } from "react";
import "./StarRating.css";

export default function StarRating() {
    const [numStars, setNumStars] = useState(3);
    const [rating, setRating] = useState(0);
    const [tempRating, setTempRating] = useState(0);

    return (
        <div className="container">
            <div className="input">
                <label>Enter number of stars to display: </label>
                <input
                    type="number"
                    value={numStars}
                    min={1}
                    max={20}
                    onChange={(e) => {
                        setNumStars(
                            Number(e.target.value) > 20
                                ? 20
                                : Number(e.target.value)
                        );
                        setRating(0);
                        setTempRating(0);
                    }}
                />
            </div>

            <div className="stars">
                {Array.from({ length: numStars }, (_, i) => (
                    <div
                        key={i + 1}
                        onClick={() => setRating(i + 1)}
                        onMouseEnter={() => setTempRating(i + 1)}
                        onMouseLeave={() => setTempRating(rating)}
                    >
                        {i + 1 <= tempRating ? <FullStar /> : <EmptyStar />}
                    </div>
                ))}
                <span>{tempRating}</span>
            </div>
        </div>
    );
}

function FullStar() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="#ffd500"
            stroke="#ffd500"
        >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
    );
}

function EmptyStar() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#ffd500"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="{2}"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
        </svg>
    );
}
