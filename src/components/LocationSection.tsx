import { useEffect, useRef, useState } from 'react';
import { MapPin, Globe2 } from 'lucide-react';

const LocationSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="location"
      ref={sectionRef}
      className="relative py-24 px-4 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        <div className={`glass-card p-8 md:p-12 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Globe visualization */}
            <div className="relative">
              <div className="w-48 h-48 rounded-full border-2 border-primary/30 relative overflow-hidden">
                {/* Globe grid lines */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Globe2 className="w-32 h-32 text-primary/20 animate-spin-slow" />
                </div>
                
                {/* Location pin */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20" />
                    <MapPin className="w-10 h-10 text-primary drop-shadow-[0_0_10px_hsl(var(--neon-cyan))]" />
                  </div>
                </div>

                {/* Orbiting dots */}
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-secondary rounded-full"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `rotate(${i * 120}deg) translateX(80px)`,
                      animation: `spin 10s linear infinite`,
                      animationDelay: `${i * 0.5}s`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Location info */}
            <div className="text-center md:text-left flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-4">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-mono text-primary">Available for Work</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-2">
                <span className="neon-text">Hyderabad</span>, India
              </h3>
              <p className="text-muted-foreground text-lg mb-6">
                Working remotely with clients worldwide
              </p>

              {/* Time zone info */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <div className="glass-card px-4 py-2 rounded-lg">
                  <span className="text-sm text-muted-foreground">Timezone</span>
                  <p className="font-mono text-primary">IST (UTC+5:30)</p>
                </div>
                <div className="glass-card px-4 py-2 rounded-lg">
                  <span className="text-sm text-muted-foreground">Availability</span>
                  <p className="font-mono text-primary">Flexible Hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
