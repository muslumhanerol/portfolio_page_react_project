import { useState, useEffect } from "react";

export const useIntersectionObserver = () => {
    const [hasAnimated, setAnimated] = useState({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entries]) => {
                entries.forEach((entry) => {

                })
            }
        )
    })
}