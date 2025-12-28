import { useState, useEffect } from "react";

export const useScrollToTop = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (scrollPosition > 100) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [scrollPosition]);
};