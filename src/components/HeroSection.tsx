import { useEffect, useState } from 'react';
import { Code, Cpu, Zap, ChevronDown } from 'lucide-react';

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
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid animate-grid-flow opacity-20" />
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[100px] animate-pulse-glow animation-delay-1000" />
      
      {/* Floating code elements */}
      <div className="absolute top-20 left-20 opacity-30 animate-float font-mono text-sm text-primary">
        {'const developer = {'}
      </div>
      <div className="absolute top-32 left-24 opacity-20 animate-float animation-delay-200 font-mono text-sm text-primary">
        {'  skills: ["AI", "Backend", "Cloud"]'}
      </div>
      <div className="absolute bottom-40 right-20 opacity-30 animate-float animation-delay-400 font-mono text-sm text-neon-purple">
        {'async function buildFuture() {}'}
      </div>
      <div className="absolute bottom-60 right-32 opacity-20 animate-float animation-delay-600 font-mono text-sm text-neon-purple">
        {'await deploy(innovation);'}
      </div>

      {/* Neural network lines SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <defs>
          <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(187 100% 42%)" />
            <stop offset="100%" stopColor="hsl(270 60% 50%)" />
          </linearGradient>
        </defs>
        {[...Array(5)].map((_, i) => (
          <path
            key={i}
            d={`M ${100 + i * 200} 0 Q ${200 + i * 150} ${300 + i * 50} ${300 + i * 200} 600`}
            fill="none"
            stroke="url(#neural-gradient)"
            strokeWidth="1"
            strokeDasharray="10 5"
            className="animate-neural"
            style={{ animationDelay: `${i * 0.5}s` }}
          />
        ))}
      </svg>

      <div className="relative z-10 text-center px-4">
        {/* Decorative icons */}
        <div className="flex justify-center gap-8 mb-8">
          <div className={`p-4 glass-card neon-border transition-all duration-700 ${showName ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Code className="w-8 h-8 text-primary neon-glow" />
          </div>
          <div className={`p-4 glass-card neon-border transition-all duration-700 delay-200 ${showName ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Cpu className="w-8 h-8 text-secondary neon-glow" />
          </div>
          <div className={`p-4 glass-card neon-border transition-all duration-700 delay-400 ${showName ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Zap className="w-8 h-8 text-primary neon-glow" />
          </div>
        </div>

        {/* Name with typewriter effect */}
        <h1 
          className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 transition-all duration-1000 ${showName ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <span className="neon-text text-glow">Goutham Vaishnav</span>
        </h1>

        {/* Title */}
        <div className={`transition-all duration-700 ${showTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-xl md:text-2xl lg:text-3xl font-display font-light text-foreground/90 mb-4">
            Full-Stack Developer & AI Agents Developer
          </p>
        </div>

        {/* Subtitle with typing cursor */}
        <div className={`transition-all duration-700 ${showSubtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-lg md:text-xl text-muted-foreground font-mono">
            <span className="text-primary">{'>'}</span> Crafting Scalable, Intelligent & Secure Digital Solutions
            <span className="animate-blink text-primary ml-1">|</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className={`flex justify-center gap-4 mt-12 transition-all duration-700 delay-500 ${showSubtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a 
            href="https://www.linkedin.com/in/goutham-vaishnav/" 
            className="px-8 py-4 glass-card neon-border text-foreground font-medium hover:bg-primary/10 transition-all duration-300 hover:scale-105"
          >
            Explore My Work
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--neon-cyan)/0.5)]"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary/50" />
      </div>
    </section>
  );
};

export default HeroSection;
