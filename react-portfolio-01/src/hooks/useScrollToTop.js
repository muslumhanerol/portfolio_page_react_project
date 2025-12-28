import { useState, useEffect } from "react";

export const useScrollToTop = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        // Add smooth scrolling to html element
        document.documentElement.style.scrollBehavior = "smooth";


    })

};