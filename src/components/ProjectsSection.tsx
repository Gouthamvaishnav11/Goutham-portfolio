import { useEffect, useRef, useState } from 'react';
import { Bot, Layout, Shield, Stethoscope, UtensilsCrossed, Code, ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  icon: typeof Bot;
  tags: string[];
  color: string;
  delay: number;
  github: string;
}

const projects: Project[] = [
  {
    title: 'AI Agents & Automations',
    description: 'Intelligent n8n workflows & AI agents for automated tasks like PoetAI, Churn Prediction, and incident resolution.',
    icon: Bot,
    tags: ['n8n', 'AI Agents', 'Automation', 'ChatGPT', 'APIS', 'Javascript'],
    color: 'from-primary to-secondary',
    delay: 0,
    github: "https://github.com/Gouthamvaishnav11/Ai-Agents-Automations",
  },
  {
    title: 'AuricDefence',
    description: 'AI-powered incident reporting & automation with intelligent threat detection.',
    icon: Shield,
    tags: ['Flask Backend', 'AI Agents', 'Security', 'Automation'],
    color: 'from-secondary to-neon-purple',
    delay: 100,
    github: "https://github.com/Gouthamvaishnav11/AuricDefence",
  },
  {
    title: 'Aeloria',
    description: 'A modern cloud platform for easy deployment of full-stack applications with automated GitHub workflows.',
    icon: Layout,
    tags: ['Frontend', 'UI/UX', 'React', 'Modern Design'],
    color: 'from-neon-purple to-primary',
    delay: 200,
    github: "https://github.com/Gouthamvaishnav11/Aeloria",
  },
  {
    title: 'AI-Powered Healthcare Chatbot',
    description: 'AI healthcare assistant for rural India providing guidance & medical support.',
    icon: Stethoscope,
    tags: ['Healthcare', 'AI Chatbot', 'NLP', 'Python', 'WhatsApp API'],
    color: 'from-primary to-accent',
    delay: 300,
    github: "https://github.com/Gouthamvaishnav11/Hackathon-AI-chatbot-healthcare-",
  },
  {
    title: 'Restaurant Management System',
    description: 'Python backend system for end-to-end restaurant operations.',
    icon: UtensilsCrossed,
    tags: ['Python', 'SQLAlchemy', 'REST APIs', 'Backend'],
    color: 'from-accent to-secondary',
    delay: 400,
    github: "https://github.com/Gouthamvaishnav11/Restaurant-management-system",
  },
  {
    title: 'GitHub Projects',
    description: 'DSA, DevOps automation, full-stack apps, and clean architectures.',
    icon: Code,
    tags: ['DSA', 'DevOps', 'C++', 'Clean Code'],
    color: 'from-secondary to-primary',
    delay: 500,
    github: "https://github.com/Gouthamvaishnav11",
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
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
      <div className="absolute inset-0 rounded-2xl border border-border group-hover:border-primary/50 transition-colors duration-500" />
      <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${project.color} rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700`} />

      <div className="relative z-10">
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} p-3 mb-4`}>
          <Icon className="w-full h-full text-white" />
        </div>

        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

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

        {/* FIXED: GitHub icon is now clickable */}
        <div className="absolute top-6 right-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="p-2 glass-card rounded-lg hover:bg-primary/20 transition-colors">
            <ExternalLink className="w-4 h-4 text-primary" />
          </div>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 glass-card rounded-lg hover:bg-primary/20 transition-colors"
          >
            <Github className="w-4 h-4 text-primary" />
          </a>
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
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 neural-network opacity-20" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} isVisible={isVisible} />
          ))}
        </div>

        <div className={`mt-12 flex flex-wrap justify-center gap-3 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {['Flask Backend', 'SQLAlchemy', 'AI Agents', 'DevOps', 'Scalable APIs', 'Clean Code', 'APIs', 'AI Tools'].map((tag) => (
            <span key={tag} className="px-4 py-2 glass-card rounded-full text-sm font-mono text-primary border border-primary/30">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
