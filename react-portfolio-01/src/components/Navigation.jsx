import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
    const [IsMobilMenuOpen, setIsMobilMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobilMenuOpen(!IsMobilMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobilMenuOpen(false);
    }

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            const navHeight = 60;
            const elementPosition = element.offsetTop - navHeight;
            window.scrollTo({
                top: elementPosition,
                behavior: "smooth"
            });
        }
        closeMobileMenu(); //Close mobile menu after clicking.
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener
            ("scroll", handleScroll);

    }, []);

    const navItems = [
        { href: "#about", label: "About" },
        { href: "#projects", label: "Projects" },
        { href: "#skills", label: "Skills" },
        { href: "#contact", label: "Contact" },
    ];





}

export default Navigation;