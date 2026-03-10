/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Palette, 
  Terminal, 
  Cpu,
  ChevronRight,
  Menu,
  X,
  ArrowUpRight
} from 'lucide-react';

// --- Types ---
interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
}

// --- Data ---
const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Lumina Dashboard",
    description: "A high-performance analytics platform for modern SaaS teams.",
    tags: ["React", "TypeScript", "D3.js", "Tailwind"],
    image: "https://picsum.photos/seed/dashboard/800/600",
    link: "#"
  },
  {
    id: 2,
    title: "Aura Mobile App",
    description: "Meditation and wellness application with immersive audio experiences.",
    tags: ["React Native", "Motion", "Firebase"],
    image: "https://picsum.photos/seed/mobile/800/600",
    link: "#"
  },
  {
    id: 3,
    title: "Nexus Protocol",
    description: "Decentralized finance protocol explorer and transaction visualizer.",
    tags: ["Next.js", "Web3.js", "GraphQL"],
    image: "https://picsum.photos/seed/crypto/800/600",
    link: "#"
  }
];

const SKILLS: Skill[] = [
  { name: "Frontend Architecture", icon: <Code2 className="w-5 h-5" />, level: 95 },
  { name: "UI/UX Design", icon: <Palette className="w-5 h-5" />, level: 88 },
  { name: "Backend Systems", icon: <Terminal className="w-5 h-5" />, level: 82 },
  { name: "Cloud Infrastructure", icon: <Cpu className="w-5 h-5" />, level: 75 }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tighter"
        >
          MS<span className="text-brand-accent">.</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium hover:text-brand-accent transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="px-5 py-2 bg-brand-ink text-white rounded-full text-sm font-medium hover:bg-brand-accent transition-colors">
            Resume
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-black/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-block px-3 py-1 bg-brand-accent/10 text-brand-accent rounded-full text-xs font-bold uppercase tracking-widest mb-6">
          Available for new projects
        </span>
        <h1 className="text-display text-6xl md:text-8xl lg:text-9xl mb-8">
          Crafting <br />
          <span className="italic text-brand-accent">Digital</span> <br />
          Experiences.
        </h1>
        <p className="max-w-xl text-lg text-black/60 leading-relaxed mb-10">
          I'm a full-stack engineer and designer focused on building polished, 
          user-centric applications that solve real-world problems with elegant code.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="group px-8 py-4 bg-brand-ink text-white rounded-full font-medium flex items-center gap-2 hover:bg-brand-accent transition-all">
            View My Work
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
          <div className="flex items-center gap-4 px-4">
            <a href="#" className="p-2 hover:text-brand-accent transition-colors"><Github className="w-6 h-6" /></a>
            <a href="#" className="p-2 hover:text-brand-accent transition-colors"><Linkedin className="w-6 h-6" /></a>
            <a href="#" className="p-2 hover:text-brand-accent transition-colors"><Mail className="w-6 h-6" /></a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <h2 className="text-display text-5xl mb-4">Selected Works</h2>
          <p className="text-black/50 max-w-md">A collection of projects that define my approach to design and development.</p>
        </div>
        <a href="#" className="text-sm font-bold border-b-2 border-brand-ink pb-1 hover:text-brand-accent hover:border-brand-accent transition-all">
          View all projects
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl mb-6">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <ExternalLink className="w-5 h-5" />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.map(tag => (
                <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-black/40 border border-black/10 px-2 py-0.5 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-accent transition-colors">{project.title}</h3>
            <p className="text-black/60 text-sm leading-relaxed">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-brand-ink text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-display text-5xl mb-8">Technical <br /> Expertise</h2>
            <p className="text-white/60 mb-12 max-w-md">
              I specialize in building robust applications using modern technologies. 
              My focus is on performance, accessibility, and maintainable architecture.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {SKILLS.map((skill) => (
                <div key={skill.name} className="p-6 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors">
                  <div className="text-brand-accent mb-4">{skill.icon}</div>
                  <h4 className="font-bold mb-1">{skill.name}</h4>
                  <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      className="bg-brand-accent h-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-full border border-white/10 flex items-center justify-center p-12">
              <div className="aspect-square w-full rounded-full border border-white/20 flex items-center justify-center p-12">
                <div className="aspect-square w-full rounded-full bg-brand-accent/20 flex items-center justify-center">
                  <Terminal className="w-24 h-24 text-brand-accent" />
                </div>
              </div>
            </div>
            {/* Floating badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-0 right-0 bg-white text-brand-ink px-4 py-2 rounded-xl font-bold text-sm shadow-xl"
            >
              React 19
            </motion.div>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute bottom-10 left-0 bg-brand-accent text-white px-4 py-2 rounded-xl font-bold text-sm shadow-xl"
            >
              TypeScript
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="glass-card p-12 md:p-20 text-center">
        <h2 className="text-display text-5xl md:text-7xl mb-8">Let's build something <br /> <span className="italic text-brand-accent">extraordinary</span>.</h2>
        <p className="text-black/60 max-w-xl mx-auto mb-12 text-lg">
          Currently seeking new opportunities and interesting collaborations. 
          Whether you have a question or just want to say hi, my inbox is always open.
        </p>
        <a 
          href="mailto:hello@example.com" 
          className="inline-flex items-center gap-3 px-10 py-5 bg-brand-ink text-white rounded-full font-bold text-xl hover:bg-brand-accent transition-all transform hover:scale-105"
        >
          Say Hello
          <Mail className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-black/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-bold">MS<span className="text-brand-accent">.</span></div>
        <div className="text-sm text-black/40">
          © {new Date().getFullYear()} Creative Portfolio. Built with React & Tailwind.
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-sm font-medium hover:text-brand-accent">Twitter</a>
          <a href="#" className="text-sm font-medium hover:text-brand-accent">GitHub</a>
          <a href="#" className="text-sm font-medium hover:text-brand-accent">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="antialiased">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
