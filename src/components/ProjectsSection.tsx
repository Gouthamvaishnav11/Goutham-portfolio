import { useEffect, useRef, useState } from 'react';
import { Bot, Layout, Shield, Stethoscope, UtensilsCrossed, Code, ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  icon: typeof Bot;
  tags: string[];
  color: string;
  delay: number;
}

const projects: Project[] = [
  {
    title: 'AI Agents & Automations',
    description: 'Intelligent n8n workflows & AI agents for automated tasks like customer feedback, churn prediction, and incident resolution.',
    icon: Bot,
    tags: ['n8n', 'AI Agents', 'Automation', 'ChatGPT'],
    color: 'from-primary to-secondary',
    delay: 0,
  },
  {
    title: 'AuricDefence',
    description: 'AI-powered incident reporting & automation system with intelligent threat detection and response.',
    icon: Shield,
    tags: ['Flask Backend', 'AI Agents', 'Security', 'Automation'],
    color: 'from-secondary to-neon-purple',
    delay: 100,
  },
  {
    title: 'Aeloria',
    description: 'Modern frontend project demonstrating cutting-edge UI design and seamless web interaction.',
    icon: Layout,
    tags: ['Frontend', 'UI/UX', 'React', 'Modern Design'],
    color: 'from-neon-purple to-primary',
    delay: 200,
  },
  {
    title: 'Healthcare AI Chatbot',
    description: 'Hackathon-winning AI-powered healthcare chatbot solution for patient assistance and medical guidance.',
    icon: Stethoscope,
    tags: ['Healthcare', 'AI Chatbot', 'NLP', 'Python'],
    color: 'from-primary to-accent',
    delay: 300,
  },
  {
    title: 'Restaurant Management System',
    description: 'Comprehensive Python backend application for streamlined restaurant operations and management.',
    icon: UtensilsCrossed,
    tags: ['Python', 'SQLAlchemy', 'REST APIs', 'Backend'],
    color: 'from-accent to-secondary',
    delay: 400,
  },
  {
    title: 'GitHub Projects',
    description: 'DSA solutions in C++, DevOps scripts, full-stack code examples, and clean architectural patterns.',
    icon: Code,
    tags: ['DSA', 'DevOps', 'C++', 'Clean Code'],
    color: 'from-secondary to-primary',
    delay: 500,
  },
];

const ProjectCard = ({ project, isVisible }: { project: Project; isVisible: boolean }) => {
  const Icon = project.icon;
  
  return (
    <div
      className={`group relative glass-card p-6 rounded-2xl overflow-hidden transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${project.delay}ms` }}
    >
      {/* Gradient background on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
      
      {/* Animated border */}
      <div className="absolute inset-0 rounded-2xl border border-border group-hover:border-primary/50 transition-colors duration-500" />
      
      {/* Glowing orb effect */}
      <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${project.color} rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700`} />
      
      <div className="relative z-10">
        {/* Icon */}
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} p-3 mb-4 group-hover:shadow-lg group-hover:shadow-primary/20 transition-shadow duration-500`}>
          <Icon className="w-full h-full text-white" />
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        
        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {project.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Hover action */}
        <div className="absolute top-6 right-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="p-2 glass-card rounded-lg hover:bg-primary/20 cursor-pointer transition-colors">
            <ExternalLink className="w-4 h-4 text-primary" />
          </div>
          <div className="p-2 glass-card rounded-lg hover:bg-primary/20 cursor-pointer transition-colors">
            <Github className="w-4 h-4 text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
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

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-32 px-4 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 neural-network opacity-20" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-6">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span className="text-sm font-mono text-secondary">Featured Work</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Projects & <span className="text-secondary">Innovations</span>
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of intelligent systems, AI automations, and scalable solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} isVisible={isVisible} />
          ))}
        </div>
        
        {/* Bottom highlight tags */}
        <div className={`mt-12 flex flex-wrap justify-center gap-3 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {['Flask Backend', 'SQLAlchemy', 'AI Agents', 'DevOps', 'Scalable Secure APIs', 'Clean Code'].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 glass-card rounded-full text-sm font-mono text-primary border border-primary/30"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
