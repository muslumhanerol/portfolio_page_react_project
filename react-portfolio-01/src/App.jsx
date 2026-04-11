import React from "react";
import Navigation from "./components/Navigation";
import { useIntersectionObserver } from "./hooks/uselntersectionObserver.js";
import { useScrollToTop } from "./hooks/useScrollToTop";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Hero from "./components/Hero.jsx";

const App = () => {
  const hasAnimated = useIntersectionObserver();
  const showScrollTop = useScrollToTop();

  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />      
      <Hero hasAnimated={hasAnimated} />
      <About hasAnimated={hasAnimated} />
      <Projects hasAnimated={hasAnimated} />
      <Skills hasAnimated={hasAnimated} />
      <Contact hasAnimated={hasAnimated} />
      <Footer />
      <ScrollToTop showScrollTop={showScrollTop}/>
    </div>
  );
};

export default App;