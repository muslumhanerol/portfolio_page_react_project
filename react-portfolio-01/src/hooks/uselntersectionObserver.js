import { useState, useEffect } from "react";

export const useIntersectionObserver = () => {
    const [hasAnimated, setAnimated] = useState({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entries]) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated[entry.target.id]) {
                        setHasAnimated(prev => ({

                        }))
                    }
                })
            }
        )
    })
}