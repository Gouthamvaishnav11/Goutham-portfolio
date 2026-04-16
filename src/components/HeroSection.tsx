import { useEffect, useState } from "react";
import { Code, Cpu, Zap, ChevronDown } from "lucide-react";
import Hero3DScene from "./hreo3dsense";

const HeroSection = () => {
  const [showName, setShowName] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowName(true), 500),
      setTimeout(() => setShowTitle(true), 1500),
      setTimeout(() => setShowSubtitle(true), 2500),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* 🔥 3D Background */}
      <div className="absolute inset-0 z-0">
        <Hero3DScene />
      </div>

      {/* Existing Background Effects (UNCHANGED) */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid animate-grid-flow opacity-20 z-0" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[100px] animate-pulse-glow z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[100px] animate-pulse-glow animation-delay-1000 z-0" />

      {/* Floating code */}
      <div className="absolute top-20 left-20 opacity-30 animate-float font-mono text-sm text-primary z-0">
        {'const developer = {'}
      </div>
      <div className="absolute top-32 left-24 opacity-20 animate-float animation-delay-200 font-mono text-sm text-primary z-0">
        {'  skills: ["AI", "Backend", "Cloud"]'}
      </div>
      <div className="absolute bottom-40 right-20 opacity-30 animate-float animation-delay-400 font-mono text-sm text-neon-purple z-0">
        {'async function buildFuture() {}'}
      </div>
      <div className="absolute bottom-60 right-32 opacity-20 animate-float animation-delay-600 font-mono text-sm text-neon-purple z-0">
        {'await deploy(innovation);'}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">

        {/* Icons */}
        <div className="flex justify-center gap-8 mb-8">
          <div className={`p-4 glass-card neon-border transition-all duration-700 ${showName ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <Code className="w-8 h-8 text-primary neon-glow" />
          </div>
          <div className={`p-4 glass-card neon-border transition-all duration-700 delay-200 ${showName ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <Cpu className="w-8 h-8 text-secondary neon-glow" />
          </div>
          <div className={`p-4 glass-card neon-border transition-all duration-700 delay-400 ${showName ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <Zap className="w-8 h-8 text-primary neon-glow" />
          </div>
        </div>

        {/* Name */}
        <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 transition-all duration-1000 ${showName ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <span className="neon-text text-glow">
            Goutham Vaishnav
          </span>
        </h1>

        {/* Title */}
        <div className={`transition-all duration-700 ${showTitle ? "opacity-100" : "opacity-0 translate-y-8"}`}>
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-foreground/90 mb-4">
            Full-Stack Developer & AI Agents Developer
          </p>
        </div>

        {/* Subtitle */}
        <div className={`transition-all duration-700 ${showSubtitle ? "opacity-100" : "opacity-0 translate-y-8"}`}>
          <p className="text-lg md:text-xl text-muted-foreground font-mono">
            <span className="text-primary">{">"}</span>{" "}
            Crafting Scalable, Intelligent & Secure Digital Solutions
            <span className="animate-blink ml-1">|</span>
          </p>
        </div>

        {/* Buttons */}
        <div className={`flex justify-center gap-4 mt-12 transition-all duration-700 delay-500 ${showSubtitle ? "opacity-100" : "opacity-0 translate-y-8"}`}>
          <a
            href="https://www.linkedin.com/in/goutham-vaishnav/"
            className="px-8 py-4 glass-card neon-border hover:scale-105 transition"
          >
            Explore My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-primary text-white rounded-xl hover:scale-105 transition"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <ChevronDown className="w-8 h-8 text-primary/50" />
      </div>
    </section>
  );
};

export default HeroSection;