import React from "react";
import {Mail, Github, Linkedin} from "lucide-react";
import { contactLinks } from '../data/contact';

const Contact = ({ hasAnimated }) => {
    const contactLinksWithIcons = contactLinks.map
    (link => ({
        ...link,
        icon: link.label === "Email Me" ? <Mail className="w-5 h-5 mr-2" /> : link.label === "Github" ? <Github className= "w-5 h-5 mr-2" /> : <Linkedin className="w-5 h-5 mr-2" /> 
    }));

    return (
        <section id="contact" className="py-16 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <div className={`transition-all duration-1000 delay-500 ${hasAnimated.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-4xl font-bold mb-8">Let's Work Together</h2>
                </div>
            </div>
        </section>
    )

}

export default Contact;
