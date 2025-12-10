import { useEffect, useRef, useState } from 'react';
import { 
  Code, Database, Cloud, Terminal, GitBranch, 
  Brain, Workflow, Server, Container, Shield,
  Globe, Cpu
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ElementType;
}

interface SkillCategory {
  title: string;
  color: string;
  skills: Skill[];
}

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      title: 'Backend',
      color: 'primary',
      skills: [
        { name: 'Flask', icon: Server },
        { name: 'SQLAlchemy', icon: Database },
        { name: 'REST APIs', icon: Globe },
      ],
    },
    {
      title: 'AI & Automation',
      color: 'secondary',
      skills: [
        { name: 'ChatGPT', icon: Brain },
        { name: 'n8n', icon: Workflow },
        { name: 'Omnidim.io', icon: Cpu },
      ],
    },
    {
      title: 'DevOps',
      color: 'primary',
      skills: [
        { name: 'Docker', icon: Container },
        { name: 'CI/CD', icon: Shield },
        { name: 'Linux', icon: Terminal },
        { name: 'Cloud', icon: Cloud },
      ],
    },
    {
      title: 'Programming',
      color: 'secondary',
      skills: [
        { name: 'Python', icon: Code },
        { name: 'C/C++', icon: Terminal },
        { name: 'DSA', icon: Cpu },
      ],
    },
    {
      title: 'Web',
      color: 'primary',
      skills: [
        { name: 'HTML', icon: Code },
        { name: 'CSS', icon: Code },
        { name: 'JavaScript', icon: Code },
      ],
    },
    {
      title: 'Version Control',
      color: 'secondary',
      skills: [
        { name: 'Git', icon: GitBranch },
        { name: 'GitHub', icon: GitBranch },
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-32 px-4 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-mono text-primary">Skills & Technologies</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="neon-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent, scalable solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`glass-card p-6 transition-all duration-700 hover:scale-[1.02] hover:shadow-[0_0_40px_hsl(var(--neon-cyan)/0.2)] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${categoryIndex * 100}ms` }}
            >
              <h3 className={`text-lg font-semibold mb-4 ${category.color === 'primary' ? 'text-primary' : 'text-secondary'}`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group`}
                    style={{ animationDelay: `${(categoryIndex * 100) + (skillIndex * 50)}ms` }}
                  >
                    <skill.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Problem Solving highlight */}
        <div className={`mt-12 glass-card p-8 neon-border transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20">
              <Brain className="w-12 h-12 text-primary neon-glow" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Problem-Solving Excellence</h3>
              <p className="text-muted-foreground">
                Strong foundation in Data Structures & Algorithms using C++, delivering clean, 
                scalable, and efficient solutions to complex technical challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
