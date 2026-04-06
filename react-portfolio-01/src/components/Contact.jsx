import React from "react";
import {Mail, Github, Linkedin} from "lucide-react";
import { contactLinks } from '../data/contact';

const Contact = ({ hasAnimated }) => {
    const contactLinksWithIcons = contactLinks.map
    (link => ({
        ...link,
        icon: link.label === "Email Me" ? <Mail className="w-5 h-5 mr-2" /> : link.label === "Github" ? <Github className= "w-5 h-5 mr-2" /> 
    }))

}

export default Contact;
