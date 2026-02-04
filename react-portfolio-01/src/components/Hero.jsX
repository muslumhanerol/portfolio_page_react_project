import React, { useState, useEffect } from 'react';
import { AArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { heroData } from '../data/hero';


const Hero = ({ hasAnimated }) => {
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
        const currentRole = roles
        [currentTextIndex];

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
                <div className='absolute-bottom-40 -left-48 w-80 bg-gradient-to-br from-green-400 to-blue-600 rounded-full opacity-10 blur-3xl animate-pulse'></div>
                <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400 to-blue-600 rounded-full opacity-10 blur-3xl animate-pulse delay-1000'></div>
                <div className='absolute top-1/2 left-1/2 transform-translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-pink-400 to-orange-600 rounded-full opacity-5 blur-3xl animate-pulse delay-500'></div>

            </div>

            {/* Grid Pattern */}
            <div className='absolute inset-0 bg-[linear-gradient(rgba(0,0,0,02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,02)_1px,transparent_1px)] bg-[size:50px_50px]'></div>

            <div class="relative z-10  max-w-6xl mx-auto px-6 text-center h-full flex flex-col justify-center">
                <div className={`transition-all duration-1000 ${hasAnimated.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 id="hero"'}`}></div>
            </div>
        </section>
    )
}

export default Hero;