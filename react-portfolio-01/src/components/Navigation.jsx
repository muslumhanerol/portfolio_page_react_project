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

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${İsScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
            <div className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <div className={`text-xl font-bold transition-colors cursor-pointer hover:opacity-80 ${İsScrolled ? 'text-black' : 'text-black'}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        Portfolio
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">{navItems.map((item) => (
                        <a key={item.href} href={item.href} className={`transition-colors ${İsScrolled ? 'text-gray-600 hover:text-black' : 'text-black hover:text-gray-700'}`}>{item.label}</a>
                        {(e) =>{
                            e.preventDefault();
                        scrollToSection(item.href21);
                        }}
                    ))}</div>



                </div>
            </div>
        </nav>
    )



}

export default Navigation;