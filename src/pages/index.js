import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, ChevronDown, Menu, X, Code, Server, Database, Cloud } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const projects = [
    {
      title: "System Performance Monitoring & Analytics Platform",
      description: "Python-based monitoring system collecting CPU, memory, disk I/O, and network metrics with 99% reliability.",
      highlights: [
        "Built time-series analytics pipeline using InfluxDB and Grafana",
        "Developed REST APIs with sub-second response time",
        "Reduced metric noise by 30% through data normalization"
      ],
      tech: ["Python", "InfluxDB", "Grafana", "REST API"]
    },
    {
      title: "Automated Hardware Benchmarking Tool",
      description: "Framework to evaluate CPU, memory, disk, and network performance across heterogeneous platforms.",
      highlights: [
        "Achieved 5% variance across benchmark runs",
        "Reduced manual benchmarking effort by 70%",
        "Improved hardware selection precision for capacity planning"
      ],
      tech: ["Python", "sysbench", "fio", "iperf"]
    },
    {
      title: "Kubernetes Configuration Validation Tool",
      description: "Validation engine analyzing Helm charts and YAML configurations for inconsistencies.",
      highlights: [
        "90% precision in detecting misconfigurations",
        "Reduced deployment instability by 25%",
        "Integrated pre-deployment validation workflows"
      ],
      tech: ["Python", "Kubernetes", "Helm", "YAML"]
    },
    {
      title: "AI-Assisted Deployment Recommendation System",
      description: "Rule-based system recommending optimal deployment configurations based on workload patterns.",
      highlights: [
        "Reduced over/under-provisioning by 20%",
        "Human-in-the-loop approval mechanism",
        "Version-controlled deployment templates"
      ],
      tech: ["Python", "Docker", "Kubernetes", "CI/CD"]
    }
  ];

  const skills = {
    "Programming & Scripting": ["Python", "Bash/Shell", "REST API", "YAML", "JSON"],
    "Systems & Performance": ["Performance Monitoring", "Benchmarking", "Capacity Planning", "System Optimization"],
    "Monitoring & Analytics": ["InfluxDB", "Grafana", "Prometheus", "Time-series Analysis"],
    "DevOps & Cloud": ["Docker", "Kubernetes", "Helm", "CI/CD", "Configuration Management"],
    "Tools & Platforms": ["Git", "GitHub", "Linux", "VS Code", "Ubuntu", "CentOS"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Karthik Kumar
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-cyan-400'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-6 py-3 hover:bg-slate-700 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Goriga Karthik Kumar
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            Systems Performance Engineer | DevOps Specialist | ML Enthusiast
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="mailto:gkklucky7@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition-colors">
              <Mail size={20} />
              Contact Me
            </a>
            <a href="https://github.com/karthikkumar09" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">
              <Github size={20} />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/karthik-kumar-781bb32b4/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce"
          >
            <ChevronDown size={32} className="text-cyan-400" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm border border-slate-700">
            <p className="text-lg text-slate-300 mb-6">
              I'm a Computer Science Master's student at Blekinge Institute of Technology, Sweden, specializing in systems performance engineering, DevOps automation, and cloud technologies. With a strong foundation in Python programming and a passion for optimizing system performance, I focus on building reliable, scalable infrastructure solutions.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">Education</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">Master's in Computer Science</p>
                    <p className="text-slate-400">Blekinge Institute of Technology</p>
                    <p className="text-sm text-slate-500">Jan 2024 - Present</p>
                  </div>
                  <div>
                    <p className="font-semibold">Bachelor's in Computer Science</p>
                    <p className="text-slate-400">JNTU Hyderabad</p>
                    <p className="text-sm text-slate-500">Aug 2020 - Nov 2023</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">Contact</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-slate-300">
                    <MapPin size={18} className="text-cyan-400" />
                    Karlskrona, Sweden
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Mail size={18} className="text-cyan-400" />
                    gkklucky7@gmail.com
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Phone size={18} className="text-cyan-400" />
                    0760502329
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
          <div className="bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm border border-slate-700">
            <div className="flex items-start gap-4">
              <div className="bg-cyan-500/20 p-3 rounded-lg">
                <Code size={24} className="text-cyan-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">Machine Learning Intern</h3>
                <p className="text-cyan-400 mb-1">Agratas Edutech</p>
                <p className="text-sm text-slate-400 mb-4">Aug 2025 - Oct 2025</p>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Completed structured internship focused on Python-based machine learning with hands-on experience in data preprocessing, feature engineering, and model training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Developed and evaluated supervised learning models, applying performance metrics to assess accuracy and improve reliability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Demonstrated strong analytical and problem-solving skills by applying ML concepts to practical scenarios following industry best practices</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm border border-slate-700 hover:border-cyan-500 transition-all hover:transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">{project.title}</h3>
                <p className="text-slate-300 mb-4">{project.description}</p>
                <ul className="space-y-2 mb-4">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                      <span className="text-cyan-400 mt-1">→</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-700 rounded-full text-xs text-cyan-400">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm border border-slate-700">
                <h3 className="text-lg font-semibold mb-4 text-cyan-400">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-700 rounded-lg text-sm text-slate-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-xl text-slate-300 mb-12">
            I'm always open to discussing new opportunities, projects, or collaborations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:gkklucky7@gmail.com" className="flex items-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition-colors text-lg">
              <Mail size={24} />
              Email Me
            </a>
            <a href="https://github.com/karthikkumar09" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors text-lg">
              <Github size={24} />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/karthik-kumar-781bb32b4/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors text-lg">
              <Linkedin size={24} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>© 2026 Goriga Karthik Kumar. Built with Gatsby & deployed on Netlify.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;