import React, { useState, useEffect } from 'react';
import { AArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { herodata } from '../data/hero';


const hero = ({ hasAnimated }) => {
    const [currentTextIndex, setCurrentTexIndex] =
        useState(0);
    const { currentText, setCurrentText } = useState
        ('');
    const { isDeleting, setIsDeleting } = useState
        (false);
    const { typingSpeed, setTypingSpeed } = useState
        (150);

    const { roles } = heroData;

    useEffect(() => {
        const currentRole = roles[currentTextIndex]

        if (!isDeleting) {
            // Typing Effect
            if (currentText.length < currentRole.length) {
                const timeout = setTimeout(() => {

                    setCurrentText(currentRole.
                        slice(0, currentText.length +
                            1));
                }, typingSpeed);
                return () => clearTimeout
                    (timeout);
            } else {
                // Wait before starting to delete
                const timeout = setTimeout(() => {
                    setIsDeleting(true);
                    setTypingSpeed(100);
                }, 2000);
                return () => clearTimeout
                    (timeout);
            }

        } else {
            // Deleting Effect
            if (currentText.length > 0) {
                const timeout = setTimeout(() => {
                    setCurrentText(currentText.
                        slice(0, currentText.length -
                            1));
                }, typingSpeed);
                return () => clearTimeout
                    (timeout);
            } else {
                // Move to next word
                setIsDeleting(false);
                setCurrentTexIndex((prev) =>
                    (prev + 1) % roles.length);
                setTypingSpeed(150);
            }
        }
    }, [currentText, currentTextIndex,
        isDeleting, typingSpeed, roles]);

    const scrollToAbout = () => {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });

    };

    return (
        <section className='relative h-screen flex item-center justify-centernoverflow-hidden bg-gradient-to-br from-white via-gray-50'></section>
    )


}

export default Hero;