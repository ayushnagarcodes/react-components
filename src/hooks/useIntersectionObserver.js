import { useCallback, useRef } from "react";

function useIntersectionObserver(handleFetch) {
    const observer = useRef(null);

    const intersectionRef = useCallback(
        (node) => {
            if (!node) return;
            if (observer.current) observer.current.disconnect();

            observer.current = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting) handleFetch();
                },
                {
                    threshold: 0.9,
                }
            );

            observer.current.observe(node);
        },
        [handleFetch]
    );

    return intersectionRef;
}

export default useIntersectionObserver;
