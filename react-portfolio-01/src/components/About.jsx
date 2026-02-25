import React from "react";
import { Github, Linkedin, Mail, Code, Paletto, Smartphone, ExternalLink } from "lucide-react";

const About = ({ hasAnimated }) => {
    const features = [
        {
            icon: <Code className="w-8 h-8 mb-4 text-black" />,
            title: "Clean Code",
            description: "Writing maintainable, scalable code following best practices"
        },
        {
            icon: <Palette className="w-8 h-8 mb-4 text-black" />,
            title: "UI/UX",
            description: "Creating intuitive interfaces with attention to detail"
        },
        {
            icon: <Smartphone className="w-8 h-8 mb-4 text-black" />,
            title: "Responsive",
            description: "Mobile-first approach ensuring great experience on all devices"
        },
        {
            icon: <ExternalLink className="w-8 h-8 mb-4 text-black" />,
            title: "Performance",
            description: "Optimizing for fast load times and smooth interactions"
        },
    ];

    return (
        <section id="about" className={`py-16 px-6 bg-gray-50`}>
            <div className="max-w-6xl mx-auto">
                <div className={`transition-all duration-1000 delay-200 ${hasAnimated.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                </div>
            </div>
        </section>
    )
}

export default About;