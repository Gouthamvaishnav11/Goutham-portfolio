import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Sparkles } from 'lucide-react';

const FooterSection = () => {
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

  // ✅ Correct Social Links
  const socialLinks = [
    { 
      icon: Github, 
      label: 'GitHub', 
      href: 'https://github.com/Gouthamvaishnav11' 
    },
    { 
      icon: Linkedin, 
      label: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/goutham-vaishnav/' 
    },
    { 
      icon: Mail, 
      label: 'Email', 
      href: 'mailto:gouthamvaishnav8@gmail.com' 
    },
  ];

  return (
    <footer
      id="contact"
      ref={sectionRef}
      className="relative py-32 px-4 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-primary/10 via-primary/5 to-transparent blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Main CTA */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-mono text-primary">Let's Build Something Amazing</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Building intelligent systems
            <br />
            <span className="neon-text text-glow">that think, adapt, and scale.</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-10">
            Ready to transform your ideas into reality? Let's connect.
          </p>

          {/* CTA Button — FIXED */}
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=gouthamvaishnav8@gmail.com"
             target="_blank"
             rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-semibold rounded-2xl hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_hsl(var(--neon-cyan)/0.5)] group"
          >
            Get In Touch
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Social Links */}
        <div className={`flex justify-center gap-4 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass-card rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
              aria-label={link.label}
            >
              <link.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          ))}
        </div>

        {/* Footer bottom */}
        <div className={`text-center pt-8 border-t border-border/50 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-muted-foreground font-mono text-sm">
            <span className="text-primary">{'</'}</span>
            Designed & Built by Goutham Vaishnav
            <span className="text-primary">{'>'}</span>
          </p>
          <p className="text-muted-foreground/50 text-xs mt-2">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>

      </div>

      {/* Particle fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </footer>
  );
};

export default FooterSection;
