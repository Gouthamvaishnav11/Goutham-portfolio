import { useEffect, useRef, useState } from 'react';
import { Terminal, Server, Brain, Cloud } from 'lucide-react';

const AboutSection = () => {
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

  const features = [
    { icon: Terminal, label: 'Backend APIs', delay: 0 },
    { icon: Brain, label: 'AI Automation', delay: 200 },
    { icon: Server, label: 'Scalable Systems', delay: 400 },
    { icon: Cloud, label: 'Cloud Deploy', delay: 600 },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 px-4 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 circuit-bg" />
      
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Visual element */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Glowing ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-spin-slow" />
              <div className="absolute inset-4 rounded-full border border-secondary/20 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
              
              {/* Center content */}
              <div className="absolute inset-12 glass-card rounded-full flex items-center justify-center neon-border">
                <div className="text-center">
                  <div className="text-6xl font-bold neon-text mb-2">GV</div>
                  <div className="text-sm text-muted-foreground font-mono">Developer</div>
                </div>
              </div>

              {/* Floating icons around */}
              {features.map((feature, index) => {
                const angle = (index * 90) * (Math.PI / 180);
                const radius = 45;
                const x = 50 + radius * Math.cos(angle);
                const y = 50 + radius * Math.sin(angle);
                
                return (
                  <div
                    key={feature.label}
                    className="absolute glass-card p-3 rounded-xl animate-float"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: 'translate(-50%, -50%)',
                      animationDelay: `${feature.delay}ms`,
                    }}
                  >
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right side - Content */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-mono text-primary">About Me</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Hi there! <span className="inline-block animate-wave">👋</span> I'm <span className="neon-text">Goutham Vaishnav</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I'm from <span className="text-primary font-semibold">Hyderabad, India</span>. I build secure backend systems 
              with <span className="text-secondary">Flask & SQLAlchemy</span>, intelligent AI automations, and scalable 
              cloud workflows. My passion lies in creating systems that think, adapt, and scale.
            </p>

            {/* Terminal-style info box */}
            <div className="glass-card p-6 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-destructive/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-4 text-muted-foreground">terminal</span>
              </div>
              <div className="space-y-2">
                <p><span className="text-primary">$</span> whoami</p>
                <p className="text-muted-foreground pl-4">Full-Stack Developer & AI Engineer</p>
                <p><span className="text-primary">$</span> location</p>
                <p className="text-muted-foreground pl-4">📍 Hyderabad, India</p>
                <p><span className="text-primary">$</span> current_focus</p>
                <p className="text-muted-foreground pl-4">AI Automation • Backend Systems • Cloud Architecture</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
