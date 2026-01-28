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
        <section className='relative h-screen flex item-center justify-centernoverflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 pt-20'>
            {/* Background Element */}
            <div className='absolute inset-0 overflow-hidden'>
                <div class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-10 blur-3xl animate-pulse"></div>

            </div>
        </div>
        </section >
    )


}

export default Hero;