import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, Menu, X, Code, ChevronRight } from 'lucide-react';

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
        "Achieved 85% accuracy with under 2-second response times",
        "Collaborative filtering had 10% higher precision, content-based filtering was 75% faster",
        "Processed 2000+ movies and deployed web app using Flask for real-time recommendations"
      ],
      tech: ["Python", "Flask", "Scikit-learn", "Pandas", "Content-based Filtering", "Collaborative Filtering"]
    },
    {
      title: "Predictive Churn Modeling for Telecom Customers",
      category: "Machine Learning",
      description: "Built and compared churn prediction models using logistic regression, decision trees, and random forests to identify the most accurate approach.",
      highlights: [
        "Achieved 79.4% accuracy with tuned random forest model",
        "Improved accuracy by 4.3% using hyperparameter tuning and grid search cross-validation",
        "Analyzed data from 7,000+ customers, identifying key churn factors for retention strategies"
      ],
      tech: ["Python", "Scikit-learn", "Random Forest", "Logistic Regression", "Decision Trees", "Grid Search"]
    },
    {
      title: "Image Classification Using Convolutional Neural Networks (CNN)",
      category: "Deep Learning",
      description: "Developed a CNN model on the CIFAR-10 dataset with batch normalization and dropout techniques for robust image classification.",
      highlights: [
        "Achieved 89% accuracy using batch normalization and dropout",
        "Reduced training time to 150 seconds on GPU",
        "Processed 60,000+ images across 10 categories for scalable real-time classification"
      ],
      tech: ["Python", "TensorFlow", "Keras", "CNN", "GPU Computing", "CIFAR-10"]
    },
    {
      title: "Intelligent Customer Service Chatbot Using Machine Learning and LSTM",
      category: "Natural Language Processing",
      description: "Developed a chatbot using machine learning for intent detection and LSTM networks for generating contextual responses.",
      highlights: [
        "Achieved 90% accuracy in answering customer queries",
        "Reduced response times to less than 2 seconds",
        "Scaled to handle large volumes of customer interactions for order tracking, store hours, and product availability"
      ],
      tech: ["Python", "LSTM", "TensorFlow", "Keras", "NLP", "Machine Learning"]
    },
    {
      title: "Decision Support System for Drone Management",
      category: "Machine Learning & Web Development",
      description: "Developed a Random Forest model to recommend optimal drones based on 11 key parameters with real-time prediction capabilities.",
      highlights: [
        "Achieved 95% accuracy in drone recommendations",
        "Response times under 3 seconds using Flask and MongoDB integration",
        "Designed React interface for seamless real-time drone selection, optimized using PCA"
      ],
      tech: ["Python", "React.js", "Flask", "MongoDB", "Random Forest", "PCA"]
    }
  ];

  const skills = [
    { category: "Programming Languages", items: ["Python", "MATLAB", "C/C++", "JavaScript", "HTML", "CSS"] },
    { category: "Frameworks & Libraries", items: ["Flask", "React.js", "Scikit-learn", "TensorFlow", "Keras", "Pandas", "NumPy"] },
    { category: "ML/DL Techniques", items: ["Content-based Filtering", "Collaborative Filtering", "Logistic Regression", "Decision Trees", "Random Forests", "CNN", "LSTM"] },
    { category: "Databases & Tools", items: ["MongoDB", "SQL", "PCA", "Hyperparameter Tuning", "Grid Search CV"] },
    { category: "DevOps & Version Control", items: ["Git", "GitHub", "GitHub Actions", "Docker", "CI/CD"] }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-bold tracking-wider">
              <span className="text-white">KARTHIK</span>
              <span className="text-orange-500">.</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                    activeSection === item.toLowerCase() ? 'text-orange-500' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-2 bg-white text-black rounded-full font-medium hover:bg-orange-500 hover:text-white transition-all"
              >
                Get in Touch
              </button>
            </div>

            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800">
            {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-6 py-4 hover:bg-gray-900 transition-colors text-gray-300 hover:text-orange-500"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-cyan-500/10"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-6xl mx-auto text-left">
          <div className="mb-8">
            <div className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-6">
              <span className="text-orange-500 text-sm font-medium">Machine Learning Engineer</span>
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight">
            <span className="text-white">CODE.</span><br/>
            <span className="text-white">CREATE.</span><br/>
            <span className="text-orange-500">INNOVATE!</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl">
            Building intelligent ML solutions and scalable applications using deep learning, AI, and modern web technologies.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition-all flex items-center gap-2"
            >
              View My Work
              <ChevronRight size={20} />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-white/10 border border-white/20 text-white rounded-full font-medium hover:bg-white/20 transition-all"
            >
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-7xl font-bold mb-4">
              <span className="text-gray-700">About Me</span>
            </h2>
            <h3 className="text-4xl font-bold text-orange-500">About</h3>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-12">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              I'm a Computer Science Master's student at Blekinge Institute of Technology, Sweden, specializing in machine learning, deep learning, and artificial intelligence. With expertise in building intelligent systems using TensorFlow, Keras, and modern ML frameworks, I focus on creating scalable applications that solve real-world problems through data-driven approaches and innovative algorithms.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-black/50 p-6 rounded-xl border border-gray-800">
                <h4 className="text-orange-500 font-semibold mb-4">Education</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-white font-medium">Master's in Computer Science</p>
                    <p className="text-gray-400 text-sm">Blekinge Institute of Technology</p>
                    <p className="text-gray-500 text-xs mt-1">Jan 2024 - Present</p>
                    <p className="text-gray-400 text-sm mt-2">Software Security, Cloud Computing, AI, Malware Analysis, Research Methodology</p>
                  </div>
                  <div>
                    <p className="text-white font-medium">Bachelor's in Computer Science</p>
                    <p className="text-gray-400 text-sm">JNTU Hyderabad</p>
                    <p className="text-gray-500 text-xs mt-1">Aug 2020 - Nov 2023</p>
                    <p className="text-gray-400 text-sm mt-2">AI, Data Structures, Algorithms, Database Systems, Cloud Computing</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-black/50 p-6 rounded-xl border border-gray-800">
                <h4 className="text-orange-500 font-semibold mb-2">Contact</h4>
                <div className="flex items-center gap-2 text-gray-300 mb-2">
                  <Mail size={16} className="text-orange-500" />
                  <span className="text-sm">gkklucky7@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 mb-4">
                  <Phone size={16} className="text-orange-500" />
                  <span className="text-sm">0760502329</span>
                </div>
                <div className="mt-6">
                  <h4 className="text-orange-500 font-semibold mb-3">Location</h4>
                  <p className="text-gray-300">Karlskrona, Sweden</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-7xl font-bold mb-4">
              <span className="text-gray-700">Experience</span>
            </h2>
            <h3 className="text-4xl font-bold text-orange-500">Career</h3>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-10">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center">
                <Code size={32} className="text-orange-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-white mb-2">Machine Learning Intern</h3>
                <p className="text-orange-500 font-semibold text-lg mb-1">Agratas Edutech</p>
                <p className="text-gray-500 mb-6">Aug 2025 - Oct 2025</p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <ChevronRight size={20} className="text-orange-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-300">Completed structured internship focused on Python-based machine learning with hands-on experience in data preprocessing, feature engineering, and model training using real-world datasets.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <ChevronRight size={20} className="text-orange-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-300">Developed and evaluated supervised learning models, applying appropriate performance metrics to assess accuracy and improve model reliability.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <ChevronRight size={20} className="text-orange-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-300">Demonstrated strong analytical and problem-solving skills by applying machine learning concepts to practical scenarios, following industry-aligned workflows and best practices.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-7xl font-bold mb-4">
              <span className="text-gray-700">My Work</span>
            </h2>
            <h3 className="text-4xl font-bold text-orange-500">Projects</h3>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="p-10">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="inline-block px-3 py-1 bg-orange-500/10 border border-orange-500/30 rounded-full mb-4">
                        <span className="text-orange-500 text-sm font-medium">{project.category}</span>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-lg mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <ChevronRight size={20} className="text-orange-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-black border border-gray-700 rounded-lg text-sm text-orange-500 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-7xl font-bold mb-4">
              <span className="text-gray-700">Technical Skills</span>
            </h2>
            <h3 className="text-4xl font-bold text-orange-500">Skills</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8 hover:border-orange-500/50 transition-all duration-300"
              >
                <h4 className="text-xl font-bold text-orange-500 mb-6">{skill.category}</h4>
                <div className="flex flex-wrap gap-3">
                  {skill.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-black border border-gray-700 rounded-lg text-sm text-white hover:border-orange-500/50 transition-all"
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
      <section id="contact" className="py-32 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white">Let's Work Together</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, and collaborations. Get in touch and let's create something amazing.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a
              href="mailto:gkklucky7@gmail.com"
              className="flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl hover:border-orange-500/50 transition-all group"
            >
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-all">
                <Mail size={28} className="text-orange-500 group-hover:text-white" />
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Email</p>
                <p className="text-white font-medium">gkklucky7@gmail.com</p>
              </div>
            </a>

            <a
              href="https://github.com/karthikkumar09"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl hover:border-orange-500/50 transition-all group"
            >
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-all">
                <Github size={28} className="text-orange-500 group-hover:text-white" />
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">GitHub</p>
                <p className="text-white font-medium">karthikkumar09</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/karthik-kumar-781bb32b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl hover:border-orange-500/50 transition-all group"
            >
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-all">
                <Linkedin size={28} className="text-orange-500 group-hover:text-white" />
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">LinkedIn</p>
                <p className="text-white font-medium">Karthik Kumar</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-2xl font-bold">
              <span className="text-white">KARTHIK</span>
              <span className="text-orange-500">.</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-orange-500 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-orange-500 transition-colors">About</button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-400 hover:text-orange-500 transition-colors">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-400 hover:text-orange-500 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-400 hover:text-orange-500 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-orange-500 transition-colors">Contact</button>
            </div>
            
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/karthik-kumar-781bb32b4/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all">
                <Linkedin size={18} />
              </a>
              <a href="https://github.com/karthikkumar09" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all">
                <Github size={18} />
              </a>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            © 2026 Goriga Karthik Kumar. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;