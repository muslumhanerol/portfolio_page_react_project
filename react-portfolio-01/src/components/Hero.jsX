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

                }, typingSpeed);
            }
        }
    })
}

export default Hero;