import { useState, useEffect } from "react";

export const useScrollToTop = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        // Add smooth scrolling to html element
        docum
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