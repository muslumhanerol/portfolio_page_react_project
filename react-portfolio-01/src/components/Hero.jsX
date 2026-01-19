import React, { useState, useEffect } from 'react';
import { AArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { herodata } from '../data/hero';


const hero = ({ hasAnimated }) => {
    const [currentIndex, setCurrentIndex] =
        useState(0);
    const { currentText, setCurrentText } = useState
        ('');
    const { isDeleting, setIsDeleting } = useState
        (false);
    const { typingSpeed, setTypingSpeed } = useState
        (150);


}

export default Hero;