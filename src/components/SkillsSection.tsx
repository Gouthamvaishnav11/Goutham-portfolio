import { useEffect, useRef, useState } from 'react';
import cssLogo from '/images/css.png';
import vscodelogo from '/images/vscode.png';


const allSkills = [
  { name: 'HTML', src: 'https://cdn.simpleicons.org/html5', color: '#E34F26' },
  { name: 'CSS', src: cssLogo, color: '#1572B6' },
  { name: 'JavaScript', src: 'https://cdn.simpleicons.org/javascript', color: '#F7DF1E' },
  { name: 'React', src: 'https://cdn.simpleicons.org/react', color: '#61DAFB' },
  { name: 'Flask', src: 'https://cdn.simpleicons.org/flask/ffffff', color: '#000000' },
  { name: 'Python', src: 'https://cdn.simpleicons.org/python', color: '#3776AB' },

  { name: 'Docker', src: 'https://cdn.simpleicons.org/docker', color: '#2496ED' },
  { name: 'Git', src: 'https://cdn.simpleicons.org/git', color: '#F05032' },
  { name: 'GitHub', src: 'https://cdn.simpleicons.org/github/ffffff', color: '#181717' },
  { name: 'MongoDB', src: 'https://cdn.simpleicons.org/mongodb', color: '#47A248' },
  { name: 'MySQL', src: 'https://cdn.simpleicons.org/mysql', color: '#4479A1' },

  { name: 'Postman', src: 'https://cdn.simpleicons.org/postman', color: '#FF6C37' },
  { name: 'Firebase', src: 'https://cdn.simpleicons.org/firebase', color: '#FFCA28' },
  { name: 'Linux', src: 'https://cdn.simpleicons.org/linux', color: '#FCC624' },
  { name: 'VS Code', src: vscodelogo, color: '#007ACC' },
];
const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // cursor tracking for subtle parallax
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 .. 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 .. 0.5
      setMouse({ x, y });
    };

    el.addEventListener('mousemove', handleMove);
    return () => el.removeEventListener('mousemove', handleMove);
  }, []);

  // Reverse pyramid rows: 5,4,3,2,1
  const rows = [5, 4, 3, 2, 1];
  let index = 0;

  return (
    <section ref={sectionRef} className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Tech <span className="text-primary">Stack</span>
        </h2>
        <p className="text-muted-foreground mb-8 text-sm">
          Modern tools & technologies I use
        </p>

        <div ref={containerRef} className="flex flex-col items-center gap-6">
          {rows.map((count, rowIndex) => {
            const items = allSkills.slice(index, index + count);
            index += count;

            return (
              <div
                key={rowIndex}
                className={`flex justify-center gap-7 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${rowIndex * 100}ms` }}
              >
                {items.map((skill, i) => {
                  // parallax + floating
                  const depth = (rowIndex + 1) * 2; // deeper rows move slightly more
                  const tx = mouse.x * depth * 6; // px
                  const ty = mouse.y * depth * 6; // px

                  return (
                    <div
                      key={i}
                      className="group relative p-6 rounded-xl border border-border/30 transition-all duration-300 hover:scale-110"
                      style={{
                        background: `${skill.color}12`,
                        boxShadow: `0 0 10px ${skill.color}55`,
                        transform: `translate(${tx}px, ${ty}px)`,
                        animation: `float ${3 + (i % 3)}s ease-in-out ${i * 0.1}s infinite`
                      }}
                    >
                      {/* Tooltip */}
                      <div className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition text-[10px] bg-black/80 px-2 py-1 rounded">
                        {skill.name}
                      </div>

                      <img
                        src={skill.src}
                        alt={skill.name}
                        className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-125"
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      {/* floating keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;