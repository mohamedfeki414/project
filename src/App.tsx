import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, GraduationCap, Globe, Smartphone, Database, Users, Clock, Target, Brain, Phone, MapPin, Award, Layers, Sparkles, Download, ChevronRight, Zap, Coffee, Gamepad2, Trophy } from 'lucide-react';
import { useState, useEffect } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  // Fonction pour télécharger le CV
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV_Feki_Mohamed.pdf';
    link.download = 'CV_Mohamed_Feki.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Détection de la section active
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['accueil', 'profil', 'compétences', 'projets', 'expériences', 'contact'];
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

  // Stats data with animations
  const stats = [
    { number: "10+", label: "Projets", icon: <Layers size={24} />, color: "from-blue-400 to-cyan-400" },
    { number: "14+", label: "Technologies", icon: <Code2 size={24} />, color: "from-purple-400 to-pink-400" },
    { number: "3+", label: "Certifications", icon: <Award size={24} />, color: "from-green-400 to-emerald-400" },
    { number: "100%", label: "Passion", icon: <Sparkles size={24} />, color: "from-orange-400 to-red-400" }
  ];

  const projects = [
    {
      title: "Application E-commerce Full Stack",
      description: "Plateforme complète de e-commerce avec panier, paiement et dashboard admin",
      tech: ["Spring Boot", "React", "Java", "MySQL"],
      link: "#",
      github: "#",
      date: "2024",
      icon: "🛒"
    },
    {
      title: "Système de Prescriptions Médicales",
      description: "Application sécurisée pour la délivrance de prescriptions électroniques",
      tech: ["ASP.NET Core", "C#", "SQL Server", "Entity Framework"],
      link: "#",
      github: "#",
      date: "2024",
      icon: "🏥"
    },
    {
      title: "Plateforme de Jeux Éducatifs",
      description: "Site web interactif avec jeux éducatifs pour l'apprentissage",
      tech: ["JavaScript", "HTML5", "CSS3", "Web APIs"],
      link: "#",
      github: "#",
      date: "2024",
      icon: "🎮"
    }
  ];

  const experiences = [
    {
      company: "SOPAL",
      position: "Stage de fin d'études",
      period: "Fév 2025 - Juin 2025",
      description: "Développement d'application web/mobile pour la gestion optimisée des livraisons",
      tech: ["ASP.NET Core", "Vue.js", ".NET MAUI", "SignalR"],
      location: "Sfax, Tunisie",
      logo: "🏢"
    },
    {
      company: "Institut International de Technologie",
      position: "Stage Développement Web",
      period: "Juillet 2024 - Août 2024",
      description: "Développement d'application web pour la gestion des rapports de stage",
      tech: ["PHP", "MySQL", "Laragon", "Bootstrap"],
      location: "Sfax, Tunisie",
      logo: "🎓"
    }
  ];

  const skills = [
    { 
      category: "Langages", 
      items: [
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "C#", level: 75 },
        { name: "PHP", level: 70 },
        { name: "HTML/CSS", level: 95 }
      ],
      icon: <Code2 size={24} />,
      color: "blue"
    },
    { 
      category: "Frameworks", 
      items: [
        { name: "Spring Boot", level: 85 },
        { name: "React", level: 80 },
        { name: "Vue.js", level: 75 },
        { name: "ASP.NET Core", level: 80 },
        { name: "Flutter", level: 70 }
      ],
      icon: <Globe size={24} />,
      color: "purple"
    },
    { 
      category: "Mobile & Web", 
      items: [
        { name: "Flutter", level: 70 },
        { name: ".NET MAUI", level: 65 },
        { name: "Responsive Design", level: 90 },
        { name: "REST APIs", level: 85 }
      ],
      icon: <Smartphone size={24} />,
      color: "green"
    },
    { 
      category: "Bases de données", 
      items: [
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 75 },
        { name: "MongoDB", level: 70 },
        { name: "SQLite", level: 80 }
      ],
      icon: <Database size={24} />,
      color: "orange"
    }
  ];

  const softSkills = [
    { name: "Communication", icon: <Users size={20} />, level: 90 },
    { name: "Travail d'équipe", icon: <Users size={20} />, level: 95 },
    { name: "Gestion du temps", icon: <Clock size={20} />, level: 85 },
    { name: "Résolution problèmes", icon: <Target size={20} />, level: 90 },
    { name: "Adaptabilité", icon: <Brain size={20} />, level: 95 },
    { name: "Leadership", icon: <Zap size={20} />, level: 80 }
  ];

  const languages = [
    { name: "Arabe", level: "Langue maternelle", percentage: 100 },
    { name: "Français", level: "Niveau B2", percentage: 75 },
    { name: "Anglais", level: "Niveau B2", percentage: 75 }
  ];

  const certifications = [
    { title: "Certification Scrum", date: "Mai 2024", issuer: "OpenClassrooms", icon: "📋" },
    { title: "Marketing Digital", date: "Mai 2024", issuer: "Google", icon: "📈" },
    { title: "Développement Web", date: "Mars 2022", issuer: "CSF", icon: "🌐" },
    { title: "PYTHON/SQL", date: "Juin 2020", issuer: "EDU SPAZIO", icon: "🐍" }
  ];

  const interests = [
    { name: "Technologie & Innovation", icon: <Zap className="text-blue-400" /> },
    { name: "Jeux Vidéo", icon: <Gamepad2 className="text-purple-400" /> },
    { name: "Sports", icon: <Trophy className="text-green-400" /> },
    { name: "Café & Code", icon: <Coffee className="text-orange-400" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      {/* Navigation - Glassmorphism */}
      <nav className="fixed w-full bg-gray-900/80 backdrop-blur-xl z-50 border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Animated */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300 group-hover:scale-110">
                  <Code2 className="text-white" size={22} />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity -z-10" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  MOHAMED
                </h1>
                <p className="text-xs text-gray-400 font-medium tracking-widest">FULL STACK DEVELOPER</p>
              </div>
            </div>
            
            {/* Desktop Navigation with Active State */}
            <div className="hidden md:flex gap-8">
              {['Accueil', 'Profil', 'Compétences', 'Projets', 'Expériences', 'Contact'].map((item) => {
                const sectionId = item.toLowerCase();
                const isActive = activeSection === sectionId;
                return (
                  <a 
                    key={item}
                    href={`#${sectionId}`}
                    className={`relative px-3 py-2 transition-all duration-300 ${
                      isActive 
                        ? 'text-blue-400 font-semibold' 
                        : 'text-gray-300 hover:text-blue-300'
                    }`}
                  >
                    {item}
                    {isActive && (
                      <>
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-sm" />
                      </>
                    )}
                  </a>
                );
              })}
            </div>
            
            {/* Contact Button */}
            <div className="hidden md:flex items-center">
              <a 
                href="#contact"
                className="relative px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium overflow-hidden group"
              >
                <span className="relative z-10">Me Contacter</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-20 group-hover:opacity-30 transition-opacity -z-10" />
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-800/50 transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X size={24} className="text-blue-400" />
              ) : (
                <Menu size={24} className="text-gray-300" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800/90 backdrop-blur-xl border-t border-gray-700/50">
            <div className="px-4 py-3 space-y-1">
              {['Accueil', 'Profil', 'Compétences', 'Projets', 'Expériences', 'Contact'].map((item) => {
                const sectionId = item.toLowerCase();
                const isActive = activeSection === sectionId;
                return (
                  <a 
                    key={item}
                    href={`#${sectionId}`}
                    className={`block py-3 px-4 rounded-lg transition font-medium ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-900/30 to-purple-900/30 text-blue-400'
                        : 'text-gray-300 hover:text-blue-400 hover:bg-gray-700/50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Creative Profile */}
      <section id="accueil" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900/20" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full mb-6 border border-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm text-gray-300">Disponible pour des opportunités</span>
                </div>
                
                <h1 className="text-5xl sm:text-7xl font-bold text-white mb-4 leading-tight">
                  <span className="block">MOHAMED</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient">
                    FEKI
                  </span>
                </h1>
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                  <span className="text-lg font-semibold text-gray-300">DÉVELOPPEUR FULL-STACK</span>
                  <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                </div>
                
                <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                  Passionné par la création de solutions innovantes et performantes. 
                  Titulaire d'une licence en Génie Logiciel et Systèmes d'Information.
                </p>
              </div>
              
              {/* Animated Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="relative group"
                    onMouseEnter={() => setHoveredSkill(index)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className={`bg-gray-800/30 backdrop-blur-sm p-4 rounded-xl border border-gray-700/50 transition-all duration-300 ${
                      hoveredSkill === index ? 'scale-105 border-blue-500/50 shadow-lg shadow-blue-500/20' : ''
                    }`}>
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`p-2 bg-gradient-to-br ${stat.color} rounded-lg`}>
                          {stat.icon}
                        </div>
                      </div>
                      <div className={`text-2xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-400 font-medium">
                        {stat.label}
                      </div>
                    </div>
                    {hoveredSkill === index && (
                      <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl blur -z-10" />
                    )}
                  </div>
                ))}
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-8">
                <a 
                  href="#projets"
                  className="relative group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity" />
                  <button className="relative px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                    <span>Voir mes Projets</span>
                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </a>
                
                <button
                  onClick={handleDownloadCV}
                  className="relative px-8 py-3.5 bg-gray-800/50 backdrop-blur-sm text-gray-300 rounded-lg border border-gray-700 font-medium flex items-center gap-2 hover:border-blue-500 hover:text-blue-400 transition-all duration-300 group"
                >
                  <Download size={18} className="group-hover:animate-bounce" />
                  <span>Télécharger CV</span>
                </button>
              </div>
            </div>
            
            {/* Creative Profile Photo Section */}
            <div className="relative">
              {/* Floating Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-gray-700/50 flex items-center justify-center animate-float">
                <Code2 size={32} className="text-blue-400" />
              </div>
              
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl backdrop-blur-sm border border-gray-700/50 flex flex-col items-center justify-center animate-float delay-1000">
                <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">2+</span>
                <span className="text-sm text-gray-300">Ans Exp.</span>
              </div>
              
              {/* Main Profile Container */}
              <div className="relative mx-auto">
                {/* Outer Glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-20 animate-pulse-glow" />
                
                {/* Profile Image Container */}
                <div className="relative w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl group hover-lift">
                  {/* Image with Gradient Overlay */}
                  <div className="relative w-full h-full">
                    <img 
                      src="/profile.jpg" 
                      alt="Mohamed Feki"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          const fallback = document.createElement('div');
                          fallback.className = 'absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center';
                          fallback.innerHTML = '<div class="text-white/90 text-4xl font-bold">MF</div>';
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  {/* Status Indicator */}
                  <div className="absolute top-4 right-4 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900 shadow-lg animate-pulse" />
                  
                  {/* Name Badge on Hover */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-bold text-center text-white">Mohamed Feki</h3>
                    <p className="text-sm text-gray-300 text-center">Développeur Full-Stack</p>
                  </div>
                </div>
                
                {/* Tech Stack Badges */}
                <div className="flex justify-center gap-2 mt-6">
                  {["React", "Spring", ".NET", "Flutter"].map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-800/50 backdrop-blur-sm rounded-full text-xs text-gray-300 border border-gray-700 hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Contact Info Cards */}
              <div className="mt-12 grid sm:grid-cols-2 gap-4">
                <div className="bg-gray-800/30 backdrop-blur-sm p-4 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group hover:scale-105">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-900/30 rounded-lg group-hover:bg-blue-900/50 transition-colors">
                      <Phone size={20} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Téléphone</p>
                      <p className="font-semibold text-white group-hover:text-blue-400 transition-colors">+216 27 752 903</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-800/30 backdrop-blur-sm p-4 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group hover:scale-105">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-900/30 rounded-lg group-hover:bg-purple-900/50 transition-colors">
                      <MapPin size={20} className="text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Localisation</p>
                      <p className="font-semibold text-white group-hover:text-purple-400 transition-colors">Sfax, Tunisie</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-16 pt-8 border-t border-gray-700/50">
            {[
              { icon: <Linkedin size={22} />, href: "https://linkedin.com/in/mohamed-feki-486918309", color: "hover:border-blue-500" },
              { icon: <Github size={22} />, href: "https://github.com/mohamedfeki414", color: "hover:border-gray-500" },
              { icon: <Mail size={22} />, href: "mailto:medfeki33@gmail.com", color: "hover:border-red-500" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700/50 transition-all duration-300 ${social.color} hover:scale-110`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Profil Section */}
      <section id="profil" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg">
              <Briefcase size={32} className="text-blue-400" />
            </div>
            <h2 className="text-4xl font-bold text-white">
              Profil <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">Professionnel</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education & Certifications */}
            <div className="space-y-6">
              <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-900/30 rounded-lg">
                    <GraduationCap size={24} className="text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Formation & Certifications</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-gray-900/30 rounded-xl hover:bg-gray-900/50 transition-colors">
                    <h4 className="text-xl font-semibold text-blue-400">Licence en Génie Logiciel et SI</h4>
                    <p className="text-gray-400">Institut International de Technologie</p>
                  </div>
                  
                  <div className="space-y-3">
                    {certifications.map((cert, index) => (
                      <div 
                        key={index} 
                        className="flex items-center gap-4 p-3 bg-gray-900/20 rounded-lg hover:bg-gray-900/40 transition-colors group/item"
                      >
                        <span className="text-2xl">{cert.icon}</span>
                        <div className="flex-1">
                          <span className="text-gray-300 group-hover/item:text-blue-300 transition-colors">
                            {cert.title}
                          </span>
                          <p className="text-sm text-gray-500">{cert.issuer}</p>
                        </div>
                        <span className="text-blue-400 text-sm">{cert.date}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Interests */}
              <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6">Centres d'intérêt</h3>
                <div className="grid grid-cols-2 gap-4">
                  {interests.map((interest, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-4 bg-gray-900/20 rounded-xl hover:bg-gray-900/40 transition-colors group"
                    >
                      {interest.icon}
                      <span className="text-gray-300 group-hover:text-white transition-colors">
                        {interest.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Skills & Languages */}
            <div className="space-y-6">
              {/* Soft Skills */}
              <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-green-500/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6">Soft Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  {softSkills.map((skill, index) => (
                    <div key={index} className="relative group">
                      <div className="p-4 bg-gray-900/20 rounded-xl hover:bg-gray-900/40 transition-colors">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="text-blue-400">
                            {skill.icon}
                          </div>
                          <span className="text-gray-300">{skill.name}</span>
                        </div>
                        <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-green-400 to-emerald-400 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Languages */}
              <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6">Langues</h3>
                <div className="space-y-6">
                  {languages.map((lang, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">{lang.name}</span>
                        <span className="text-blue-400 text-sm">{lang.level}</span>
                      </div>
                      <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full transition-all duration-1000"
                          style={{ width: `${lang.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compétences Section */}
      <section id="compétences" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Mes <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">Compétences</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Expertise technique accumulée au fil des projets et expériences
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <div 
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg">
                    <div className="text-blue-400">
                      {skillGroup.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white">{skillGroup.category}</h3>
                </div>
                <div className="space-y-4">
                  {skillGroup.items.map((skill, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-blue-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projets Section */}
      <section id="projets" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Mes <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">Projets</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Réalisations qui démontrent mes compétences et ma créativité
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Project Header */}
                <div className="h-48 relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-gray-900/80 backdrop-blur-sm text-blue-400 text-xs font-semibold px-3 py-1.5 rounded-full">
                      {project.date}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{project.icon}</span>
                      <div>
                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1.5 bg-gray-700/50 text-blue-300 text-xs rounded-lg font-medium hover:bg-gray-700 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                    <a 
                      href={project.link}
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold text-sm group/link"
                    >
                      <span>Voir le projet</span>
                      <ExternalLink size={16} className="transform group-hover/link:translate-x-1 transition-transform" />
                    </a>
                    
                    <a 
                      href={project.github}
                      className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-gray-700/50 transition-colors"
                      title="Code source"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expériences Section */}
      <section id="expériences" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Expériences <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">Professionnelles</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Parcours professionnel et contributions significatives
            </p>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="relative group"
              >
                {/* Timeline */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 lg:left-1/2 lg:transform lg:-translate-x-1/2" />
                <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full lg:left-1/2 lg:transform lg:-translate-x-1/2" />
                
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 ml-12 lg:ml-0 lg:w-5/6 lg:mx-auto lg:hover:scale-105">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{exp.logo}</span>
                        <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                          {exp.position}
                        </h3>
                      </div>
                      <p className="text-xl text-blue-400">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-start lg:items-end">
                      <span className="px-4 py-2 bg-gradient-to-r from-blue-900/30 to-purple-900/30 text-blue-300 rounded-full text-sm">
                        {exp.period}
                      </span>
                      <span className="text-gray-400 text-sm mt-2">{exp.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {exp.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-4 py-2 bg-gray-900/30 text-gray-300 rounded-lg text-sm border border-gray-700/50 hover:border-purple-500/50 transition-colors"
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Contactez-<span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">moi</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discutons de vos projets et opportunités
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Mail size={32} className="text-blue-400" />,
                title: "Email",
                content: "medfeki33@gmail.com",
                href: "mailto:medfeki33@gmail.com",
                color: "hover:border-blue-500/50"
              },
              {
                icon: <Smartphone size={32} className="text-purple-400" />,
                title: "Téléphone",
                content: "+216 27 752 903",
                href: "tel:+21627752903",
                color: "hover:border-purple-500/50"
              },
              {
                icon: <MapPin size={32} className="text-green-400" />,
                title: "Localisation",
                content: "Sfax, Tunisie",
                href: "#",
                color: "hover:border-green-500/50"
              }
            ].map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                className={`bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 ${contact.color} transition-all duration-300 hover:scale-105 text-center`}
              >
                <div className="inline-flex p-3 bg-gray-900/30 rounded-full mb-4">
                  {contact.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{contact.title}</h3>
                <p className="text-gray-400 hover:text-blue-400 transition-colors">
                  {contact.content}
                </p>
              </a>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="https://linkedin.com/in/mohamed-feki-486918309"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group w-full sm:w-auto"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity" />
              <div className="relative px-8 py-3 bg-gray-800 text-white rounded-lg font-medium flex items-center gap-2 justify-center group-hover:bg-blue-900 transition-colors">
                <Linkedin size={20} /> LinkedIn
              </div>
            </a>
            
            <a 
              href="https://github.com/mohamedfeki414"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group w-full sm:w-auto"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity" />
              <div className="relative px-8 py-3 bg-gray-800 text-white rounded-lg font-medium flex items-center gap-2 justify-center group-hover:bg-gray-700 transition-colors">
                <Github size={20} /> GitHub
              </div>
            </a>
            
            <button
              onClick={handleDownloadCV}
              className="relative group w-full sm:w-auto"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity" />
              <div className="relative px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium flex items-center gap-2 justify-center group-hover:from-blue-700 group-hover:to-purple-700 transition-all">
                <Download size={20} className="group-hover:animate-bounce" /> Télécharger CV
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/80 backdrop-blur-sm border-t border-gray-700/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Code2 className="text-white" size={22} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">MOHAMED FEKI</h3>
                  <p className="text-sm text-gray-400">Full Stack Developer</p>
                </div>
              </div>
              <p className="text-gray-400">
                Passionné par l'innovation et la création de solutions technologiques performantes.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Navigation</h3>
              <div className="grid grid-cols-2 gap-2">
                {['Accueil', 'Profil', 'Compétences', 'Projets', 'Expériences', 'Contact'].map((item) => (
                  <a 
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Réseaux</h3>
              <div className="flex gap-4">
                {[
                  { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/mohamed-feki-486918309", label: "LinkedIn" },
                  { icon: <Github size={20} />, href: "https://github.com/mohamedfeki414", label: "GitHub" },
                  { icon: <Mail size={20} />, href: "mailto:medfeki33@gmail.com", label: "Email" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors group"
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700/50 mt-8 pt-8 text-center">
            <p className="text-gray-500">
              © {new Date().getFullYear()} Mohamed Feki. Tous droits réservés.
            </p>
            <p className="text-gray-600 text-sm mt-2">
              Licence en Génie Logiciel et Systèmes d'Information
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;