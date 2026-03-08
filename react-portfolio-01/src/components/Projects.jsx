import React from "react";
import { projects } from "../data/projects";

const Projects = ({ hasAnimated }) => {
    return (
        <section id="projects" className={`py-16 px-6`}>
            <div className="max-w-6xl mx-auto">
                <div className={`transition-all duration-1000 delay-300 ${hasAnimated.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2>1.05.50</h2>
                </div>
            </div>
        </section>
    )

}

export default Projects;