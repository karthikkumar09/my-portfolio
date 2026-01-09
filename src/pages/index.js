import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, Menu, X, ArrowRight, Code2, Cpu, Database, Boxes } from 'lucide-react';

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
      title: "Personalised Movie Recommendation System",
      category: "Machine Learning",
      description: "Developed a recommendation system using content-based filtering and collaborative filtering to suggest movies based on features and user preferences.",
      highlights: [
        "85% accuracy with under 2-second response times",
        "10% higher precision with collaborative filtering",
        "Processed 2000+ movies with Flask deployment"
      ],
      tech: ["Python", "Flask", "Scikit-learn", "Pandas"],
      stats: { accuracy: "85%", speed: "<2s", scale: "2000+" }
    },
    {
      title: "Predictive Churn Modeling for Telecom",
      category: "Machine Learning",
      description: "Built and compared churn prediction models using logistic regression, decision trees, and random forests.",
      highlights: [
        "79.4% accuracy with tuned random forest model",
        "4.3% improvement through hyperparameter tuning",
        "Analyzed 7,000+ customer data points"
      ],
      tech: ["Python", "Scikit-learn", "Random Forest", "Grid Search"],
      stats: { accuracy: "79.4%", improvement: "+4.3%", data: "7K+" }
    },
    {
      title: "Image Classification Using CNN",
      category: "Deep Learning",
      description: "Developed a CNN model on the CIFAR-10 dataset with batch normalization and dropout techniques.",
      highlights: [
        "89% accuracy with optimized architecture",
        "150-second training time on GPU",
        "60,000+ images across 10 categories"
      ],
      tech: ["Python", "TensorFlow", "Keras", "CNN"],
      stats: { accuracy: "89%", time: "150s", images: "60K+" }
    },
    {
      title: "Customer Service Chatbot with LSTM",
      category: "Natural Language Processing",
      description: "Developed a chatbot using machine learning for intent detection and LSTM networks for response generation.",
      highlights: [
        "90% accuracy in query responses",
        "Sub-2-second response times",
        "Scalable for high-volume interactions"
      ],
      tech: ["Python", "LSTM", "TensorFlow", "NLP"],
      stats: { accuracy: "90%", response: "<2s", scale: "High" }
    },
    {
      title: "Decision Support System for Drones",
      category: "ML & Web Development",
      description: "Developed a Random Forest model to recommend optimal drones based on 11 key parameters with real-time predictions.",
      highlights: [
        "95% recommendation accuracy",
        "Under 3-second response times",
        "React interface with PCA optimization"
      ],
      tech: ["Python", "React", "Flask", "MongoDB"],
      stats: { accuracy: "95%", speed: "<3s", params: "11" }
    }
  ];

  const skills = [
    { 
      category: "Languages",
      icon: <Code2 size={24} />,
      items: ["Python", "MATLAB", "C/C++", "JavaScript", "HTML/CSS"] 
    },
    { 
      category: "ML/DL Frameworks",
      icon: <Cpu size={24} />,
      items: ["TensorFlow", "Keras", "Scikit-learn", "Pandas", "NumPy"] 
    },
    { 
      category: "Web Development",
      icon: <Boxes size={24} />,
      items: ["Flask", "React.js", "REST APIs", "MongoDB", "SQL"] 
    },
    { 
      category: "ML Techniques",
      icon: <Database size={24} />,
      items: ["CNN", "LSTM", "Random Forest", "Logistic Regression", "Decision Trees"] 
    },
    { 
      category: "Tools & DevOps",
      icon: <Code2 size={24} />,
      items: ["Git", "GitHub", "Docker", "CI/CD", "Grid Search CV"] 
    },
    { 
      category: "Data Science",
      icon: <Cpu size={24} />,
      items: ["PCA", "Feature Engineering", "Data Preprocessing", "Hyperparameter Tuning"] 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-blue-900/80 backdrop-blur-xl z-50 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <button onClick={() => scrollToSection('home')} className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Karthik Kumar
            </button>
            
            <div className="hidden md:flex items-center space-x-10">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-all ${
                    activeSection === item.toLowerCase() 
                      ? 'text-cyan-400' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 rounded-lg font-medium transition-all shadow-lg shadow-cyan-500/50"
              >
                Hire Me
              </button>
            </div>

            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-blue-900/95 backdrop-blur-xl border-t border-cyan-500/20">
            {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-6 py-4 hover:bg-cyan-500/10 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="relative max-w-6xl mx-auto text-center z-10">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-sm font-medium backdrop-blur-sm">
              Machine Learning Engineer
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent leading-tight">
            Goriga Karthik Kumar
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transforming data into intelligent solutions through cutting-edge machine learning and AI technologies
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 rounded-lg font-medium transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/50 group"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 rounded-lg font-medium transition-all"
            >
              Get in Touch
            </button>
          </div>


        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl">
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              I'm a Computer Science Master's student at Blekinge Institute of Technology, Sweden, specializing in machine learning, deep learning, and artificial intelligence. With expertise in building intelligent systems using TensorFlow, Keras, and modern ML frameworks, I focus on creating scalable applications that solve real-world problems through data-driven approaches and innovative algorithms.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-6 border border-cyan-500/20">
                <h3 className="text-xl font-semibold mb-6 text-cyan-400 flex items-center gap-2">
                  <Code2 size={24} />
                  Education
                </h3>
                <div className="space-y-6">
                  <div>
                    <p className="font-semibold text-white">Master's in Computer Science</p>
                    <p className="text-gray-400 text-sm">Blekinge Institute of Technology</p>
                    <p className="text-gray-500 text-sm mt-1">Jan 2024 - Present</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Bachelor's in Computer Science</p>
                    <p className="text-gray-400 text-sm">JNTU Hyderabad</p>
                    <p className="text-gray-500 text-sm mt-1">Aug 2020 - Nov 2023</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl p-6 border border-purple-500/20">
                <h3 className="text-xl font-semibold mb-6 text-cyan-400 flex items-center gap-2">
                  <Mail size={24} />
                  Contact Info
                </h3>
                <div className="space-y-4">
                  <a href="mailto:gkklucky7@gmail.com" className="flex items-center gap-3 hover:text-cyan-400 transition-colors">
                    <Mail size={18} className="text-cyan-400" />
                    <span className="text-gray-300 text-sm">gkklucky7@gmail.com</span>
                  </a>
                  <a href="tel:+460760502329" className="flex items-center gap-3 hover:text-cyan-400 transition-colors">
                    <Phone size={18} className="text-cyan-400" />
                    <span className="text-gray-300 text-sm">0760502329</span>
                  </a>
                  <div className="flex items-center gap-3">
                    <span className="text-cyan-400">📍</span>
                    <span className="text-gray-300 text-sm">Karlskrona, Sweden</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-32 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/50">
                <Cpu size={32} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Machine Learning Intern</h3>
                <p className="text-cyan-400 font-semibold mb-1">Agratas Edutech</p>
                <p className="text-gray-400 text-sm mb-6">Aug 2025 - Oct 2025</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-cyan-400 mt-1">▸</span>
                    <span>Completed structured internship focused on Python-based machine learning with hands-on experience in data preprocessing, feature engineering, and model training</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-cyan-400 mt-1">▸</span>
                    <span>Developed and evaluated supervised learning models, applying performance metrics to improve reliability</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-cyan-400 mt-1">▸</span>
                    <span>Applied ML concepts to practical scenarios following industry best practices</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-xs font-medium">
                    {project.category}
                  </span>
                  <div className="flex gap-3 text-xs">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <span key={key} className="text-gray-400">
                        <span className="text-cyan-400">{key}:</span> {value}
                      </span>
                    ))}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-300 hover:border-cyan-500/50 transition-all"
                    >
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
      <section id="skills" className="relative py-32 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-cyan-400 group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <h4 className="text-lg font-bold">{skill.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300">
              Open to new opportunities and collaborations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="mailto:gkklucky7@gmail.com"
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all group"
            >
              <Mail size={40} className="mx-auto mb-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              <p className="text-sm text-gray-400 mb-2">Email</p>
              <p className="text-sm font-medium">gkklucky7@gmail.com</p>
            </a>

            <a
              href="https://github.com/karthikkumar09"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all group"
            >
              <Github size={40} className="mx-auto mb-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              <p className="text-sm text-gray-400 mb-2">GitHub</p>
              <p className="text-sm font-medium">karthikkumar09</p>
            </a>

            <a
              href="https://www.linkedin.com/in/karthik-kumar-781bb32b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all group"
            >
              <Linkedin size={40} className="mx-auto mb-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              <p className="text-sm text-gray-400 mb-2">LinkedIn</p>
              <p className="text-sm font-medium">Karthik Kumar</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-white/10 bg-black/20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-400">© 2026 Goriga Karthik Kumar. All rights reserved.</p>
          
          <div className="flex gap-6">
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;