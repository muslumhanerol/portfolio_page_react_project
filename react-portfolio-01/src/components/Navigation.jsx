import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
    const [IsMobilMenuOpen, setIsMobilMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobilMenuOpen(!IsMobilMenuOpen);
    };

}

export default Navigation;