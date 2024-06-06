import { useState, useEffect } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import "./InfiniteScroll.css";

function InfiniteScroll() {
    const [page, setPage] = useState(2); // we're fetching the 1st page on mount with useEffect
    const [data, setData] = useState([]);

    function handleFetch() {
        fetch(
            `https://jsonplaceholder.typicode.com/posts?_limit=2&_page=${page}`
        )
            .then((res) => res.json())
            .then((arr) => {
                setData((data) => [...data, ...arr]);
                setPage((page) => page + 1);
            });
    }

    // For Infinite Scrolling
    const intersectionRef = useIntersectionObserver(handleFetch);

    // To get the Initial Data (1st page)
    useEffect(() => {
        const controller = new AbortController();

        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=2&_page=1`, {
            signal: controller.signal,
        })
            .then((res) => res.json())
            .then((arr) => {
                setData((data) => [...data, ...arr]);
            })
            .catch((err) => console.error(err.message));

        return () => controller.abort();
    }, []);

    return (
        <div className="container">
            <div className="gridContainer">
                {data.map((el, index) => (
                    <div
                        key={el.id}
                        ref={index === data.length - 1 ? intersectionRef : null}
                    >
                        <span>{el.id}</span>
                        <h2>{el.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default InfiniteScroll;
