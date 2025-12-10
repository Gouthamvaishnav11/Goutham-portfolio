import { useEffect, useRef, useState } from 'react';
import { Layers, Workflow, Rocket, Sparkles } from 'lucide-react';

const SummarySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const summaryPoints = [
    {
      icon: Layers,
      title: 'Backend Development',
      description: 'Building robust APIs using Flask & SQLAlchemy with clean architecture',
    },
    {
      icon: Workflow,
      title: 'AI Automation',
      description: 'Creating intelligent workflows with n8n, ChatGPT, and custom AI agents',
    },
    {
      icon: Rocket,
      title: 'Cloud Deployment',
      description: 'Deploying scalable solutions using Docker, CI/CD, and modern DevOps practices',
    },
  ];

  return (
    <section
      id="summary"
      ref={sectionRef}
      className="relative py-32 px-4 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute top-1/2 right-0 w-1/2 h-px bg-gradient-to-l from-transparent via-secondary/30 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-mono text-primary">Professional Summary</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What I <span className="neon-text">Deliver</span>
          </h2>
        </div>

        {/* Data nodes visualization */}
        <div className="relative">
          {/* Connection lines SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
            <defs>
              <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(187 100% 42% / 0.3)" />
                <stop offset="50%" stopColor="hsl(270 60% 50% / 0.3)" />
                <stop offset="100%" stopColor="hsl(187 100% 42% / 0.3)" />
              </linearGradient>
            </defs>
          </svg>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {summaryPoints.map((point, index) => (
              <div
                key={point.title}
                className={`relative group transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Glowing background on hover */}
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative glass-card p-8 h-full hover:border-primary/30 transition-all duration-300">
                  {/* Icon with glow */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl" />
                    <div className="relative p-4 glass-card rounded-2xl inline-block">
                      <point.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3">{point.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{point.description}</p>

                  {/* Node connection indicator */}
                  <div className="absolute -right-4 top-1/2 w-8 h-px bg-gradient-to-r from-primary/50 to-transparent hidden md:block" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main quote */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <blockquote className="glass-card p-8 inline-block max-w-3xl">
            <p className="text-xl md:text-2xl font-light italic text-muted-foreground">
              "I build robust backend systems using Flask and SQLAlchemy, design intelligent automation workflows powered by AI agents, and deploy scalable solutions using modern DevOps practices.

Over the past year, I have developed multiple real-world applications—including event management platforms, restaurant systems, AI-powered resume analyzers, and workflow automation tools. Each project reflects a blend of creativity, performance, and engineering excellence.

Driven by curiosity and innovation, I combine software development with AI-driven automation to create systems that don’t just function but think, adapt, and scale intelligently.

My expertise lies in transforming ideas into high-impact, high-performance applications using Python, Flask, automation frameworks, and AI agents—always with a focus on speed, reliability, and security."
                </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default SummarySection;
