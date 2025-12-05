import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, GraduationCap, Globe, Smartphone, Database, Users, Clock, Target, Brain, Phone, MapPin, Award, Layers, Sparkles, Download, ChevronRight, Zap, Coffee, Gamepad2, Trophy, Home, User as UserIcon, Briefcase as BriefcaseIcon, Folder, Wrench, Eye, Palette, Cpu } from 'lucide-react';
import { useState, useEffect } from 'react';

// Composant TechCarousel pour les logos de technologies tournantes
const TechCarousel = () => {
  const [currentTech, setCurrentTech] = useState(0);
  
  const technologies = [
    { 
      name: "HTML5", 
      percentage: 100,
      color: "text-orange-500",
      bg: "bg-orange-900/30",
      border: "border-orange-700/50",
      icon: <Code2 size={32} className="text-orange-500" />
    },
    { 
      name: "CSS3", 
      percentage: 95,
      color: "text-blue-500",
      bg: "bg-blue-900/30",
      border: "border-blue-700/50",
      icon: <Palette size={32} className="text-blue-500" />
    },
    { 
      name: "JavaScript", 
      percentage: 90,
      color: "text-yellow-500",
      bg: "bg-yellow-900/30",
      border: "border-yellow-700/50",
      icon: <Zap size={32} className="text-yellow-500" />
    },
    { 
      name: "React", 
      percentage: 85,
      color: "text-cyan-500",
      bg: "bg-cyan-900/30",
      border: "border-cyan-700/50",
      icon: <Layers size={32} className="text-cyan-500" />
    },
    { 
      name: "Python", 
      percentage: 92,
      color: "text-emerald-500",
      bg: "bg-emerald-900/30",
      border: "border-emerald-700/50",
      icon: <Cpu size={32} className="text-emerald-500" />
    },
    { 
      name: "Java", 
      percentage: 87,
      color: "text-red-500",
      bg: "bg-red-900/30",
      border: "border-red-700/50",
      icon: <Coffee size={32} className="text-red-500" />
    },
  ];

  // Rotation automatique toutes les 2 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, [technologies.length]);

  return (
    <div className="absolute -top-8 -right-8 z-30 tech-simple-carousel hero-tech-animation">
      <div className={`tech-simple-card backdrop-blur-sm transition-all duration-500 ${technologies[currentTech].bg} ${technologies[currentTech].border}`}>
        <div className="flex flex-col items-center justify-center">
          <div className="mb-2">
            {technologies[currentTech].icon}
          </div>
          <div className={`tech-percentage ${technologies[currentTech].color} font-bold`}>
            {technologies[currentTech].percentage}%
          </div>
          <div className="tech-name">
            {technologies[currentTech].name}
          </div>
        </div>
        
        {/* Anneau animé */}
        <div className="absolute -inset-2 rounded-2xl border-2 border-transparent border-t-gray-500/30 animate-spin-slow"></div>
        
        {/* Effet de halo */}
        <div className="absolute -inset-3 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl -z-10"></div>
      </div>
    </div>
  );
};

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

  // Navigation items with creative dynamic icons
const navItems = [
  { 
    id: 'accueil', 
    label: 'Accueil', 
    icon: '🏠',
    color: 'from-blue-400 to-cyan-400',
    animation: 'animate-float'
  },
  { 
    id: 'profil', 
    label: 'Apropos', 
    icon: '👤',
    color: 'from-purple-400 to-pink-400',
    animation: 'animate-pulse'
  },
  { 
    id: 'experiences', 
    label: 'Experiences', 
    icon: '💼',
    color: 'from-green-400 to-emerald-400',
    animation: 'animate-bounce-slow'
  },
  { 
    id: 'projets', 
    label: 'Projets', 
    icon: '📁',
    color: 'from-yellow-400 to-orange-400',
    animation: 'animate-spin-slow'
  },
  { 
    id: 'compétences', 
    label: 'Compétences', 
    icon: '⚙️',
    color: 'from-red-400 to-rose-400',
    animation: 'animate-ping-slow'
  },
  { 
    id: 'veille', 
    label: 'Veille Tech', 
    icon: '👁️',
    color: 'from-indigo-400 to-violet-400',
    animation: 'animate-pulse-glow'
  },
];

  // Détection de la section active
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
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

  // Fonction pour obtenir les couleurs des centres d'intérêt
const getInterestColor = (index: number): string => {
  const colors = [
    'from-blue-400 to-cyan-400',
    'from-purple-400 to-pink-400',
    'from-green-400 to-emerald-400',
    'from-orange-400 to-yellow-400'
  ];
  return colors[index % colors.length];
};

// Mettez à jour le tableau des centres d'intérêt pour inclure des couleurs
const interests = [
  { 
    name: "Technologie & Innovation", 
    icon: <Zap className="text-blue-400" />,
    color: "from-blue-400 to-cyan-400"
  },
  { 
    name: "Jeux Vidéo", 
    icon: <Gamepad2 className="text-purple-400" />,
    color: "from-purple-400 to-pink-400"
  },
  { 
    name: "Sports", 
    icon: <Trophy className="text-green-400" />,
    color: "from-green-400 to-emerald-400"
  },
  { 
    name: "Café & Code", 
    icon: <Coffee className="text-orange-400" />,
    color: "from-orange-400 to-yellow-400"
  }
];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      {/* Navigation avec logos créatifs dynamiques */}
<nav className="fixed w-full bg-gray-900/95 backdrop-blur-xl z-50 border-b border-gray-700/50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row items-center justify-between py-3">
      {/* Logo Section */}
      <div className="flex items-center gap-4 mb-3 lg:mb-0 w-full lg:w-auto justify-center lg:justify-start">
        {/* Cercle avec initiales animé */}
        <div className="relative">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg animate-spin-slow">
            <span className="text-white font-bold text-lg">MF</span>
          </div>
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-30 -z-10 animate-pulse" />
        </div>
        
        {/* Nom et titre avec séparateurs */}
        <div className="text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-transparent rounded-full" />
            <h1 className="text-xl font-bold text-white tracking-wider">MOHAMED</h1>
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-purple-500 rounded-full" />
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-2 mt-1">
            <div className="w-4 h-0.5 bg-blue-500 rounded-full animate-pulse" />
            <p className="text-xs text-gray-300 font-medium tracking-[0.3em]">FULL STACK DEVELOPER</p>
            <div className="w-4 h-0.5 bg-purple-500 rounded-full animate-pulse delay-300" />
          </div>
        </div>
      </div>
      
      {/* Desktop Navigation - Logos créatifs dynamiques */}
      <div className="hidden lg:flex items-center gap-1 bg-gray-800/60 backdrop-blur-sm rounded-full px-1 py-1 border border-gray-700/50 shadow-lg">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a 
              key={item.id}
              href={`#${item.id}`}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 relative group ${
                isActive 
                  ? 'bg-gradient-to-r from-blue-900/40 to-purple-900/40 text-white shadow-inner' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700/30'
              }`}
            >
              {/* Logo créatif avec animation circulaire */}
              <div className="relative">
                {/* Cercle extérieur qui tourne */}
                <div className={`absolute -inset-2 bg-gradient-to-r ${item.color} rounded-full blur opacity-0 group-hover:opacity-20 transition-all duration-500 ${isActive ? 'opacity-20' : ''} ${item.animation}`}></div>
                
                {/* Cercle intérieur avec effet de halo */}
                <div className={`relative w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br ${item.color} bg-opacity-10 border ${
                  isActive 
                    ? 'border-blue-400/50 shadow-lg shadow-blue-500/20' 
                    : 'border-gray-600/50 group-hover:border-blue-400/30'
                } transition-all duration-300`}>
                  {/* Émoji/Logo principal */}
                  <span className={`text-lg ${item.animation} ${isActive ? 'scale-110' : ''} group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </span>
                  
                  {/* Points orbitaux (seulement au hover ou actif) */}
                  <div className="absolute inset-0">
                    {[...Array(3)].map((_, i) => (
                      <div 
                        key={i}
                        className={`absolute w-1.5 h-1.5 bg-gradient-to-r ${item.color} rounded-full opacity-0 ${
                          isActive ? 'opacity-70' : 'group-hover:opacity-70'
                        } transition-opacity duration-300`}
                        style={{
                          top: '50%',
                          left: '50%',
                          transform: `rotate(${i * 120}deg) translateX(16px) rotate(-${i * 120}deg)`,
                          animation: `orbit 2s linear infinite`,
                          animationDelay: `${i * 0.3}s`,
                          animationPlayState: isActive ? 'running' : 'paused'
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
                
                {/* Traînée lumineuse circulaire */}
                <div className={`absolute -inset-3 rounded-full border-2 border-transparent border-t-gray-500/30 opacity-0 ${
                  isActive ? 'opacity-100 animate-spin-slow' : 'group-hover:opacity-100'
                } transition-opacity duration-300`}></div>
              </div>
              
              {/* Texte */}
              <span className="text-sm font-medium tracking-wide">{item.label}</span>
              
              {/* Indicateur d'activité animé */}
              {isActive && (
                <>
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-ping" />
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
                </>
              )}
              
              {/* Effet de hover avec particules */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                {/* Particules volantes */}
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i}
                    className={`absolute w-0.5 h-0.5 bg-white rounded-full opacity-0 group-hover:opacity-40`}
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animation: `floatParticle 3s ease-in-out infinite`,
                      animationDelay: `${i * 0.6}s`,
                      animationPlayState: 'paused'
                    }}
                  ></div>
                ))}
              </div>
            </a>
          );
        })}
      </div>
      
      {/* Boutons droite */}
      <div className="hidden lg:flex items-center gap-3">
        {/* Bouton Contact - Style amélioré */}
        <a 
          href="#contact"
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
          <div className="relative flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105">
            <Mail size={16} className="group-hover:animate-bounce" />
            <span className="text-sm font-medium">Contact</span>
          </div>
        </a>
      </div>
      
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-lg hover:bg-gray-800/50 transition group"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="relative">
          {isMenuOpen ? (
            <>
              <X size={24} className="text-blue-400 animate-spin-once" />
              <div className="absolute -inset-2 bg-blue-500/20 rounded-full blur animate-pulse"></div>
            </>
          ) : (
            <>
              <Menu size={24} className="text-gray-300 group-hover:text-blue-400 transition-colors" />
              <div className="absolute -inset-2 bg-gray-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </>
          )}
        </div>
      </button>
    </div>
  </div>
  
  {/* Mobile Menu avec logos créatifs */}
  {isMenuOpen && (
    <div className="lg:hidden bg-gray-800/95 backdrop-blur-xl border-t border-gray-700/50">
      <div className="px-4 py-3">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a 
              key={item.id}
              href={`#${item.id}`}
              className={`flex items-center gap-3 py-3 px-4 rounded-lg transition font-medium group ${
                isActive
                  ? 'bg-gradient-to-r from-blue-900/30 to-purple-900/30 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {/* Logo mobile animé */}
              <div className="relative">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br ${item.color} bg-opacity-10 ${
                  isActive ? 'animate-pulse' : ''
                }`}>
                  <span className={`text-lg ${isActive ? 'scale-110' : ''} transition-transform duration-300`}>
                    {item.icon}
                  </span>
                </div>
                
                {/* Animation circulaire pour item actif */}
                {isActive && (
                  <div className="absolute -inset-2 border-2 border-blue-500/30 rounded-full animate-ping"></div>
                )}
              </div>
              
              <span className="flex-1">{item.label}</span>
              
              {/* Indicateur de page actuelle */}
              {isActive && (
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
              )}
            </a>
          );
        })}
        
        <div className="pt-4 border-t border-gray-700/50">
          <a 
            href="#contact"
            className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition group"
            onClick={() => setIsMenuOpen(false)}
          >
            <Mail size={16} className="group-hover:animate-bounce" />
            <span>Contact</span>
          </a>
        </div>
      </div>
    </div>
  )}
</nav>

      {/* Hero Section avec Carousel de Technologies */}
      <section id="accueil" className="pt-28 lg:pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
            
            {/* Creative Profile Photo Section avec Carousel */}
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
                
                {/* Carousel de Technologies */}
                <TechCarousel />
                
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
                
     {/* Tech Stack Badges - Version dynamique avec rotation */}
<div className="flex justify-center gap-3 mt-8">
  {[
    { 
      icon: <Layers size={18} className="text-cyan-400" />, 
      name: "React",
      color: "from-cyan-400 to-blue-500",
      bg: "hover:bg-gradient-to-br hover:from-cyan-900/40 hover:to-blue-900/40",
      rotation: "group-hover:rotate-12"
    },
    { 
      icon: <Coffee size={18} className="text-green-400" />, 
      name: "Spring",
      color: "from-green-400 to-emerald-500",
      bg: "hover:bg-gradient-to-br hover:from-green-900/40 hover:to-emerald-900/40",
      rotation: "group-hover:-rotate-12"
    },
    { 
      icon: <Code2 size={18} className="text-purple-400" />, 
      name: ".NET",
      color: "from-purple-400 to-violet-500",
      bg: "hover:bg-gradient-to-br hover:from-purple-900/40 hover:to-violet-900/40",
      rotation: "group-hover:rotate-12"
    },
    { 
      icon: <Smartphone size={18} className="text-blue-400" />, 
      name: "Flutter",
      color: "from-blue-400 to-cyan-500",
      bg: "hover:bg-gradient-to-br hover:from-blue-900/40 hover:to-cyan-900/40",
      rotation: "group-hover:-rotate-12"
    },
    { 
      icon: <Cpu size={18} className="text-yellow-400" />, 
      name: "Python",
      color: "from-yellow-400 to-orange-500",
      bg: "hover:bg-gradient-to-br hover:from-yellow-900/40 hover:to-orange-900/40",
      rotation: "group-hover:rotate-12"
    },
    { 
      icon: <Coffee size={18} className="text-red-400" />, 
      name: "Java",
      color: "from-red-400 to-pink-500",
      bg: "hover:bg-gradient-to-br hover:from-red-900/40 hover:to-pink-900/40",
      rotation: "group-hover:-rotate-12"
    }
  ].map((tech, index) => (
    <div 
      key={index}
      className="relative group"
    >
      {/* Cercle extérieur qui tourne */}
      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-30 blur-sm transition-all duration-500 group-hover:animate-spin-slow`}></div>
      
      {/* Badge principal */}
      <div 
        className={`relative p-3 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 ${tech.bg} transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl ${tech.rotation}`}
        title={tech.name}
      >
        {/* Icône avec halo */}
        <div className="relative">
          <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${tech.color} blur opacity-0 group-hover:opacity-30 animate-pulse`}></div>
          {tech.icon}
        </div>
        
        {/* Effet de particules */}
        <div className="absolute inset-0 overflow-hidden rounded-xl">
          <div className="absolute top-0 left-0 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-30 group-hover:animate-bounce" style={{ animationDelay: `${index * 0.1}s` }}></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-30 group-hover:animate-bounce" style={{ animationDelay: `${index * 0.1 + 0.2}s` }}></div>
        </div>
        
        {/* Tooltip élégant avec animation */}
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-1.5 bg-gray-900/90 backdrop-blur-sm text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-10 shadow-xl scale-0 group-hover:scale-100 origin-bottom">
          {tech.name}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900/90 rotate-45"></div>
        </div>
      </div>
      
      {/* Points orbitaux */}
      <div className="absolute -inset-2">
        {[...Array(3)].map((_, i) => (
          <div 
            key={i}
            className={`absolute w-1 h-1 bg-gradient-to-br ${tech.color} rounded-full opacity-0 group-hover:opacity-60`}
            style={{
              top: '50%',
              left: '50%',
              transform: `rotate(${i * 120}deg) translateX(20px) rotate(-${i * 120}deg)`,
              animation: `orbit 3s linear infinite`,
              animationDelay: `${i * 1}s`
            }}
          ></div>
        ))}
      </div>
    </div>
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
{/* Profil Section (Apropos) - DESIGN CRÉATIF ET DYNAMIQUE */}
<section id="profil" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
  {/* Arrière-plan animé */}
  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/10 to-purple-900/10"></div>
  <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
  
  <div className="max-w-7xl mx-auto relative">
    {/* En-tête créatif */}
    <div className="flex flex-col items-center mb-16">
      <div className="relative mb-8">
        {/* Cercle animé */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-20 animate-pulse-glow"></div>
        <div className="relative p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl border border-blue-500/30 backdrop-blur-sm">
          <UserIcon size={48} className="text-blue-400 animate-float" />
        </div>
        {/* Particules flottantes */}
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-500/20 rounded-full blur-sm animate-bounce"></div>
        <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-purple-500/20 rounded-full blur-sm animate-bounce delay-500"></div>
      </div>
      
      <div className="text-center">
        <h2 className="text-5xl font-bold text-white mb-4">
          À <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text animate-gradient">Propos</span>
        </h2>
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent to-purple-500 rounded-full"></div>
        </div>
        
        {/* Paragraphe d'introduction créatif */}
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-50"></div>
          <div className="relative bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                <span className="text-blue-400 font-semibold">Passionné par l'innovation</span> et la création de solutions technologiques 
                depuis toujours, je mets mon expertise en développement full-stack au service de projets 
                ambitieux. Mon parcours académique en <span className="text-purple-400 font-semibold">Génie Logiciel</span> et mes 
                multiples expériences pratiques m'ont forgé une vision holistique du développement, 
                alliant <span className="text-green-400 font-semibold">rigueur technique</span> et <span className="text-yellow-400 font-semibold">créativité</span>.
              </p>
            </div>
            
            <div className="mt-6 flex items-start gap-4">
              <div className="mt-1">
                <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse delay-300"></div>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                J'aime relever des défis complexes et transformer des idées en 
                <span className="text-pink-400 font-semibold"> applications performantes</span>. Mon approche combine 
                <span className="text-orange-400 font-semibold"> méthodologie Agile</span>, <span className="text-emerald-400 font-semibold">bonnes pratiques de code</span> 
                et une veille technologique constante pour toujours proposer des solutions 
                modernes et efficaces.
              </p>
            </div>
          </div>
          
          {/* Éléments décoratifs */}
          <div className="absolute -top-3 -left-3 w-6 h-6 border-2 border-blue-500/30 rounded-full animate-spin-slow"></div>
          <div className="absolute -bottom-3 -right-3 w-6 h-6 border-2 border-purple-500/30 rounded-full animate-spin-slow reverse"></div>
        </div>
      </div>
    </div>
    
    {/* Grille créative */}
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Colonne gauche - Formation & Centres d'intérêt */}
      <div className="space-y-8">
        {/* Formation - Carte créative */}
        <div className="relative group">
          {/* Effet de fond animé */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 group-hover:scale-[1.02]">
            {/* En-tête animé */}
            <div className="flex items-center gap-4 mb-8">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-20 animate-pulse"></div>
                <div className="relative p-3 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-xl">
                  <GraduationCap size={28} className="text-cyan-400 animate-float-slow" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  Formation & 
                  <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                    Certifications
                  </span>
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mt-2"></div>
              </div>
            </div>
            
            {/* Diplôme principal */}
            <div className="relative mb-8">
              <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                      Licence en Génie Logiciel et SI
                    </h4>
                    <p className="text-gray-400 mt-2">Institut International de Technologie</p>
                    <div className="flex items-center gap-2 mt-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-green-400 font-medium">Diplôme obtenu avec mention</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Liste des certifications avec animation */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-300 mb-4">Certifications obtenues :</h4>
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="relative group/item"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
                  <div className="relative flex items-center gap-4 p-4 bg-gray-900/30 rounded-xl hover:bg-gray-900/50 transition-all duration-300 group-hover/item:translate-x-2">
                    {/* Icône animée */}
                    <div className="relative">
                      <div className="absolute -inset-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-sm opacity-0 group-hover/item:opacity-100"></div>
                      <div className="relative w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform">
                        <span className="text-2xl">{cert.icon}</span>
                      </div>
                    </div>
                    
                    {/* Contenu */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300 group-hover/item:text-blue-300 transition-colors font-medium">
                          {cert.title}
                        </span>
                        <span className="text-sm bg-gradient-to-r from-blue-900/30 to-purple-900/30 text-blue-300 px-3 py-1 rounded-full">
                          {cert.date}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">{cert.issuer}</p>
                    </div>
                    
                    {/* Flèche indicatrice */}
                    <ChevronRight size={16} className="text-gray-500 group-hover/item:text-blue-400 group-hover/item:translate-x-1 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Centres d'intérêt - Design créatif */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-rose-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 group-hover:scale-[1.02]">
            {/* En-tête */}
            <div className="flex items-center gap-4 mb-8">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-20 animate-pulse delay-500"></div>
                <div className="relative p-3 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl">
                  <Sparkles size={28} className="text-pink-400 animate-pulse-slow" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  Centres d'
                  <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                    intérêt
                  </span>
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2"></div>
              </div>
            </div>
            
            {/* Grille d'intérêts animée */}
            <div className="grid grid-cols-2 gap-4">
              {interests.map((interest, index) => (
                <div 
                  key={index}
                  className="relative group/item"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="absolute -inset-2 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
                  <div className="relative p-4 bg-gray-900/30 rounded-xl hover:bg-gray-900/50 transition-all duration-300 group-hover/item:scale-105">
                    <div className="flex flex-col items-center text-center gap-3">
                      {/* Icône animée */}
                      <div className="relative">
                        <div className="absolute -inset-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur opacity-0 group-hover/item:opacity-50 transition-opacity"></div>
                        <div className={`p-3 rounded-full bg-gradient-to-br ${getInterestColor(index)} bg-opacity-20 group-hover/item:bg-opacity-30 transition-all duration-300`}>
                          {interest.icon}
                        </div>
                      </div>
                      
                      {/* Nom */}
                      <span className="text-gray-300 group-hover/item:text-white font-medium transition-colors">
                        {interest.name}
                      </span>
                      
                      {/* Points décoratifs */}
                      <div className="flex gap-1 mt-2">
                        {[...Array(3)].map((_, i) => (
                          <div 
                            key={i}
                            className="w-1 h-1 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover/item:opacity-70"
                            style={{ 
                              animation: `pulse 1.5s ease-in-out infinite ${i * 0.2}s`,
                              animationPlayState: 'paused'
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Barre décorative */}
            <div className="mt-8 pt-6 border-t border-gray-700/50">
              <div className="flex items-center justify-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Colonne droite - Compétences & Langues */}
      <div className="space-y-8">
        {/* Soft Skills - Design moderne */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-cyan-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-500 group-hover:scale-[1.02]">
            {/* En-tête */}
            <div className="flex items-center gap-4 mb-8">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full blur opacity-20 animate-pulse delay-300"></div>
                <div className="relative p-3 bg-gradient-to-br from-emerald-900/30 to-green-900/30 rounded-xl">
                  <Brain size={28} className="text-emerald-400 animate-bounce-slow" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  Soft 
                  <span className="text-transparent bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text">
                    Skills
                  </span>
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full mt-2"></div>
              </div>
            </div>
            
            {/* Grille de compétences avec barres créatives */}
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div 
                  key={index}
                  className="relative group/item"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-xl opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
                  <div className="relative p-4 bg-gray-900/30 rounded-xl hover:bg-gray-900/50 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-gradient-to-br from-emerald-900/20 to-green-900/20 rounded-lg">
                        {skill.icon}
                      </div>
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                    </div>
                    
                    {/* Barre de progression créative */}
                    <div className="relative">
                      <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-emerald-400 via-green-400 to-cyan-400 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      
                      {/* Points d'éclairage */}
                      <div className="absolute top-0 left-0 w-1 h-2 bg-white rounded-full blur-sm opacity-0 group-hover/item:opacity-100 animate-shine"></div>
                    </div>
                    
                    {/* Pourcentage animé */}
                    <div className="flex justify-between items-center mt-2">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                      <span className="text-sm font-bold text-transparent bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Légende */}
            <div className="mt-8 pt-6 border-t border-gray-700/50">
              <div className="flex items-center justify-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-400">Niveau de maîtrise</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Langues - Design élégant */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-orange-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-amber-500/50 transition-all duration-500 group-hover:scale-[1.02]">
            {/* En-tête */}
            <div className="flex items-center gap-4 mb-8">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full blur opacity-20 animate-pulse delay-700"></div>
                <div className="relative p-3 bg-gradient-to-br from-amber-900/30 to-yellow-900/30 rounded-xl">
                  <Globe size={28} className="text-amber-400 animate-spin-slow" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <span className="text-transparent bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text">
                    Langues
                  </span>
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full mt-2"></div>
              </div>
            </div>
            
            {/* Liste des langues avec barres créatives */}
            <div className="space-y-8">
              {languages.map((lang, index) => (
                <div 
                  key={index}
                  className="relative group/item"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-xl opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
                  <div className="relative">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full animate-pulse"></div>
                        <span className="text-gray-300 font-semibold text-lg">{lang.name}</span>
                      </div>
                      <span className="text-sm bg-gradient-to-r from-amber-900/30 to-yellow-900/30 text-amber-300 px-3 py-1 rounded-full">
                        {lang.level}
                      </span>
                    </div>
                    
                    {/* Barre de progression stylée */}
                    <div className="relative h-4">
                      <div className="absolute inset-0 bg-gray-700/30 rounded-full overflow-hidden">
                        <div 
                          className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${lang.percentage}%` }}
                        >
                          {/* Effet de brillance */}
                          <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-r from-white/30 to-transparent rounded-full"></div>
                        </div>
                      </div>
                      
                      {/* Marqueurs de pourcentage */}
                      <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-2">
                        {[0, 25, 50, 75, 100].map((mark) => (
                          <div 
                            key={mark}
                            className={`w-0.5 h-3 rounded-full ${
                              mark <= lang.percentage 
                                ? 'bg-amber-200/50' 
                                : 'bg-gray-600/30'
                            }`}
                          ></div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Étoiles d'évaluation */}
                    <div className="flex justify-end gap-1 mt-3">
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i}
                          className={`w-3 h-3 rounded-full ${
                            i < Math.floor(lang.percentage / 20)
                              ? 'bg-gradient-to-r from-amber-400 to-yellow-400'
                              : 'bg-gray-600/50'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Élément décoratif */}
            <div className="mt-8 flex justify-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-ping"></div>
                <span className="text-sm text-gray-400">Maîtrise linguistique</span>
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping delay-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  {/* Experiences Section - DESIGN CRÉATIF ET DYNAMIQUE */}
<section id="experiences" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
  {/* Arrière-plan animé */}
  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/10 to-blue-900/10"></div>
  <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
  
  <div className="max-w-6xl mx-auto relative">
    {/* En-tête créatif */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center justify-center relative mb-8">
        {/* Effet de halo */}
        <div className="absolute -inset-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-20 animate-pulse-glow"></div>
        
        <div className="relative p-5 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl border border-blue-500/30 backdrop-blur-sm">
          <div className="relative">
            <BriefcaseIcon size={48} className="text-blue-400 animate-float" />
            {/* Étoiles tournantes */}
            <div className="absolute -top-3 -right-3 w-4 h-4 bg-yellow-400 rounded-full blur-sm animate-spin-slow"></div>
            <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-cyan-400 rounded-full blur-sm animate-spin-slow reverse"></div>
          </div>
        </div>
        
        {/* Points décoratifs */}
        <div className="absolute -top-2 -left-2 w-3 h-3 bg-purple-500 rounded-full animate-ping"></div>
        <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-blue-500 rounded-full animate-ping delay-300"></div>
      </div>
      
      <h2 className="text-5xl font-bold text-white mb-4">
        Expériences 
        <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text animate-gradient">
          Professionnelles
        </span>
      </h2>
      
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></div>
        <div className="flex gap-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-150"></div>
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-300"></div>
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent to-purple-500 rounded-full"></div>
      </div>
      
      {/* Paragraphe d'introduction */}
      <div className="max-w-3xl mx-auto mb-12">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl blur-xl"></div>
          <div className="relative bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
            <p className="text-gray-300 text-lg text-center leading-relaxed">
              Mon parcours professionnel reflète ma <span className="text-blue-400 font-semibold">passion pour l'innovation</span> et mon 
              engagement à <span className="text-purple-400 font-semibold">relever des défis techniques</span>. Chaque expérience 
              a contribué à forger mon expertise et ma vision du développement moderne.
            </p>
          </div>
        </div>
      </div>
    </div>
    
    {/* Timeline créative */}
    <div className="relative">
      {/* Ligne de timeline principale avec animation */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full animate-shimmer" style={{ animationDuration: '3s' }}></div>
        
        {/* Points animés sur la timeline */}
        {experiences.map((_, index) => {
          const position = (index / (experiences.length - 1)) * 100;
          return (
            <div 
              key={index}
              className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-gray-900 bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse"
              style={{ top: `${position}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-ping"></div>
            </div>
          );
        })}
      </div>
      
      {/* Conteneur des expériences */}
      <div className="space-y-16 lg:space-y-24">
        {experiences.map((exp, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <div 
              key={index}
              className="relative group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Carte d'expérience - Design créatif */}
              <div className={`lg:w-5/6 mx-auto relative ${
                isEven ? 'lg:ml-auto' : 'lg:mr-auto'
              }`}>
                {/* Effet de fond animé */}
                <div className={`absolute -inset-6 bg-gradient-to-r ${
                  isEven 
                    ? 'from-blue-500/10 via-cyan-500/10 to-purple-500/10' 
                    : 'from-purple-500/10 via-pink-500/10 to-blue-500/10'
                } rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                
                {/* Carte principale */}
                <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-3xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 group-hover:scale-[1.02] overflow-hidden">
                  {/* En-tête avec gradient animé */}
                  <div className={`relative p-8 border-b border-gray-700/50 ${
                    isEven 
                      ? 'bg-gradient-to-r from-blue-900/20 to-purple-900/20' 
                      : 'bg-gradient-to-r from-purple-900/20 to-pink-900/20'
                  }`}>
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                      <div className="flex-1">
                        {/* Logo et titre */}
                        <div className="flex items-center gap-4 mb-4">
                          <div className="relative">
                            <div className="absolute -inset-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-20 animate-pulse"></div>
                            <div className="relative w-14 h-14 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl flex items-center justify-center border border-gray-700/50 group-hover:border-blue-500/50 transition-colors">
                              <span className="text-3xl">{exp.logo}</span>
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                              {exp.position}
                            </h3>
                            <p className="text-xl text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text font-semibold mt-1">
                              {exp.company}
                            </p>
                          </div>
                        </div>
                        
                        {/* Description */}
                        <p className="text-gray-300 leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                      
                      {/* Date et localisation */}
                      <div className="flex flex-col items-start lg:items-end gap-3">
                        <div className="relative">
                          <div className="absolute -inset-3 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity"></div>
                          <span className="relative px-5 py-2.5 bg-gradient-to-r from-blue-900/40 to-purple-900/40 text-blue-300 rounded-full text-sm font-semibold border border-blue-700/30">
                            {exp.period}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-gray-400">
                          <MapPin size={16} className="text-purple-400" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Contenu principal */}
                  <div className="p-8">
                    {/* Technologies utilisées */}
                    <div className="mb-8">
                      <div className="flex items-center gap-3 mb-6">
                        <Code2 size={24} className="text-cyan-400" />
                        <h4 className="text-xl font-bold text-gray-300">Technologies utilisées :</h4>
                      </div>
                      
                      <div className="flex flex-wrap gap-3">
                        {exp.tech.map((tech, i) => (
                          <div 
                            key={i}
                            className="relative group/tech"
                            style={{ animationDelay: `${i * 100}ms` }}
                          >
                            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover/tech:opacity-100 transition-opacity"></div>
                            <span className="relative px-5 py-2.5 bg-gray-900/50 text-gray-300 rounded-xl text-sm font-medium border border-gray-700/50 group-hover/tech:border-purple-500/50 group-hover/tech:text-purple-300 transition-all duration-300 group-hover/tech:scale-105">
                              {tech}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Points clés (ajout dynamique) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse"></div>
                          <span className="text-gray-300 font-medium">Développement Full Stack</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse delay-200"></div>
                          <span className="text-gray-300 font-medium">Architecture moderne</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse delay-400"></div>
                          <span className="text-gray-300 font-medium">Méthodologie Agile</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse delay-600"></div>
                          <span className="text-gray-300 font-medium">Collaboration d'équipe</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Barre de progression animée */}
                  <div className="px-8 pb-8">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-400">Niveau d'implication</span>
                      <span className="text-sm font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                        {index === 0 ? '100%' : '95%'}
                      </span>
                    </div>
                    <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: index === 0 ? '100%' : '95%' }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" style={{ animationDuration: '2s' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Éléments décoratifs */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-8 h-8 border-2 border-purple-500/30 rounded-full animate-spin-slow"></div>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                    <div className="w-6 h-6 border-2 border-blue-500/30 rounded-full animate-spin-slow reverse"></div>
                  </div>
                </div>
                
                {/* Connecteur de timeline pour mobile */}
                <div className="lg:hidden absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center border-4 border-gray-900">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 border-2 border-blue-500/30 rounded-full animate-ping"></div>
                </div>
              </div>
              
              {/* Année décorative */}
              <div className={`hidden lg:flex absolute top-1/2 transform -translate-y-1/2 items-center gap-4 ${
                isEven ? 'left-0 -translate-x-full' : 'right-0 translate-x-full'
              }`}>
                {isEven ? (
                  <>
                    <div className="text-6xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text opacity-20">
                      {exp.period.split(' ')[2]}
                    </div>
                    <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                  </>
                ) : (
                  <>
                    <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                    <div className="text-6xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text opacity-20">
                      {exp.period.split(' ')[2]}
                    </div>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
    
    {/* Statistiques en bas de section */}
    <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
      {[
        { value: "2+", label: "Années d'expérience", color: "from-blue-400 to-cyan-400" },
        { value: "10+", label: "Projets réalisés", color: "from-purple-400 to-pink-400" },
        { value: "15+", label: "Technologies maîtrisées", color: "from-green-400 to-emerald-400" },
        { value: "100%", label: "Satisfaction", color: "from-yellow-400 to-orange-400" },
      ].map((stat, index) => (
        <div 
          key={index}
          className="relative group"
          style={{ animationDelay: `${index * 150}ms` }}
        >
          <div className={`absolute -inset-3 bg-gradient-to-r ${stat.color} rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity`}></div>
          <div className="relative bg-gray-800/40 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 text-center group-hover:border-transparent transition-all duration-300 group-hover:scale-105">
            <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
              {stat.value}
            </div>
            <div className="text-sm text-gray-400 font-medium">
              {stat.label}
            </div>
            
            {/* Points décoratifs */}
            <div className="flex justify-center gap-1 mt-4">
              {[...Array(3)].map((_, i) => (
                <div 
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-70"
                  style={{ animationDelay: `${i * 0.2}s` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Projets Section */}
      <section id="projets" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg">
              <Folder size={32} className="text-blue-400" />
            </div>
            <h2 className="text-4xl font-bold text-white">
              Mes <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">Projets</span>
            </h2>
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

    {/* Compétences Section - DESIGN CRÉATIF ET DYNAMIQUE */}
<section id="compétences" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
  {/* Arrière-plan animé */}
  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/10 via-purple-900/10 to-cyan-900/10"></div>
  <div className="absolute top-0 -left-64 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 rounded-full blur-3xl animate-spin-slow"></div>
  <div className="absolute -bottom-64 -right-64 w-[800px] h-[800px] bg-gradient-to-r from-green-500/5 via-yellow-500/5 to-orange-500/5 rounded-full blur-3xl animate-spin-slow reverse"></div>
  
  <div className="max-w-7xl mx-auto relative">
    {/* En-tête créatif */}
    <div className="text-center mb-16 relative">
      <div className="inline-flex items-center justify-center relative mb-8">
        {/* Effets de particules */}
        <div className="absolute -inset-12">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-ping"
              style={{
                top: `${Math.sin(i * 0.785) * 50 + 50}%`,
                left: `${Math.cos(i * 0.785) * 50 + 50}%`,
                animationDelay: `${i * 0.2}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Icône centrale animée */}
        <div className="relative">
          <div className="absolute -inset-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-20 animate-pulse-glow"></div>
          <div className="relative p-6 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-3xl border border-gray-700/50">
            <Wrench size={52} className="text-blue-400 animate-spin-once" />
          </div>
          
          {/* Éléments orbitaux */}
          <div className="absolute -inset-6">
            {[...Array(6)].map((_, i) => (
              <div 
                key={i}
                className="absolute w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-0 animate-pulse"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${i * 60}deg) translateX(40px) rotate(-${i * 60}deg)`,
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: '2s'
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
      
      <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
        Mes <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text animate-gradient">Compétences</span>
      </h2>
      
      <div className="flex items-center justify-center gap-6 mb-8">
        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse delay-150"></div>
          <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse delay-300"></div>
        </div>
        <div className="w-32 h-1 bg-gradient-to-r from-transparent to-purple-500 rounded-full"></div>
      </div>
      
      {/* Introduction créative */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 rounded-2xl blur-xl opacity-50"></div>
          <div className="relative bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="md:w-1/3">
                <div className="inline-flex items-center gap-3 p-3 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl">
                  <Zap size={24} className="text-yellow-400 animate-pulse" />
                  <span className="text-gray-300 font-semibold">Expertise polyvalente</span>
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Je maîtrise un éventail complet de technologies modernes, allant du 
                  <span className="text-blue-400 font-semibold"> développement frontend </span>
                  au <span className="text-purple-400 font-semibold">backend</span>, en passant par 
                  <span className="text-green-400 font-semibold"> les bases de données </span>
                  et <span className="text-yellow-400 font-semibold"> les outils DevOps</span>. 
                  Mon approche combine <span className="text-cyan-400 font-semibold">rigueur technique</span> et 
                  <span className="text-pink-400 font-semibold"> créativité</span> pour créer des solutions innovantes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Grille de compétences interactive */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      {/* Catégorie 1: Langages & Programmation */}
      <div className="relative group" data-category="programming">
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-600/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 group-hover:scale-[1.02] overflow-hidden">
          {/* En-tête animé */}
          <div className="p-6 border-b border-gray-700/50 bg-gradient-to-r from-blue-900/20 to-cyan-900/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-20 animate-pulse"></div>
                <div className="relative p-3 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-xl">
                  <Code2 size={28} className="text-cyan-400 animate-float-slow" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Langages & <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">Programmation</span>
              </h3>
            </div>
            <div className="w-full h-0.5 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full"></div>
          </div>
          
          {/* Liste des compétences avec barres créatives */}
          <div className="p-6">
            {[
              { name: "HTML5", level: 95, color: "from-orange-400 to-red-400" },
              { name: "PHP", level: 85, color: "from-indigo-400 to-purple-400" },
              { name: "JavaScript", level: 90, color: "from-yellow-400 to-orange-400" },
              { name: "CSS3", level: 92, color: "from-blue-400 to-cyan-400" },
              { name: "TypeScript", level: 80, color: "from-cyan-400 to-blue-400" },
              { name: "Java", level: 88, color: "from-red-400 to-orange-400" },
              { name: "Python", level: 82, color: "from-emerald-400 to-green-400" },
            ].map((skill, index) => (
              <div key={index} className="mb-5 last:mb-0">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.color} animate-pulse`}></div>
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                  </div>
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-r ${skill.color} rounded-full blur opacity-0 group-hover:opacity-10"></div>
                    <span className={`relative text-sm font-bold px-3 py-1 rounded-full bg-gradient-to-r ${skill.color} bg-opacity-10 text-transparent bg-clip-text`}>
                      {skill.level}%
                    </span>
                  </div>
                </div>
                
                {/* Barre de progression créative */}
                <div className="relative h-3">
                  <div className="absolute inset-0 bg-gray-700/30 rounded-full overflow-hidden">
                    <div 
                      className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    >
                      {/* Effet de brillance */}
                      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-r from-white/20 to-transparent rounded-full"></div>
                      {/* Particules volantes */}
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full blur-sm animate-ping" style={{ animationDelay: `${index * 0.1}s` }}></div>
                    </div>
                  </div>
                  
                  {/* Points de repère */}
                  <div className="absolute inset-0 flex justify-between px-1">
                    {[0, 25, 50, 75, 100].map((point) => (
                      <div 
                        key={point}
                        className={`w-0.5 h-3 rounded-full ${
                          point <= skill.level 
                            ? 'bg-white/30' 
                            : 'bg-gray-600/20'
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
                
                {/* Étoiles de notation */}
                <div className="flex justify-end gap-1 mt-2">
                  {[...Array(5)].map((_, starIndex) => (
                    <div 
                      key={starIndex}
                      className={`w-2 h-2 rounded-full ${
                        starIndex < Math.floor(skill.level / 20)
                          ? `bg-gradient-to-r ${skill.color}`
                          : 'bg-gray-600/40'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Effet de particules au hover */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-40"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `floatParticle 3s ease-in-out infinite ${i * 0.3}s`,
                  animationPlayState: 'paused'
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Catégorie 2: Frameworks & Bibliothèques */}
      <div className="relative group" data-category="frameworks">
        <div className="absolute -inset-4 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-green-600/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-green-500/50 transition-all duration-500 group-hover:scale-[1.02] overflow-hidden">
          <div className="p-6 border-b border-gray-700/50 bg-gradient-to-r from-green-900/20 to-emerald-900/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur opacity-20 animate-pulse delay-300"></div>
                <div className="relative p-3 bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-xl">
                  <Layers size={28} className="text-emerald-400 animate-spin-slow" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Frameworks & <span className="text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text">Bibliothèques</span>
              </h3>
            </div>
            <div className="w-full h-0.5 bg-gradient-to-r from-green-400/30 to-emerald-400/30 rounded-full"></div>
          </div>
          
          <div className="p-6">
            {[
              { name: "Symfony", level: 78, color: "from-gray-400 to-black-400" },
              { name: "React", level: 85, color: "from-cyan-400 to-blue-400" },
              { name: "Tailwind CSS", level: 95, color: "from-cyan-400 to-teal-400" },
              { name: "Bootstrap", level: 88, color: "from-purple-400 to-pink-400" },
            ].map((skill, index) => (
              <div key={index} className="mb-6 last:mb-0">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-lg">
                      {index === 0 && "⚙️"}
                      {index === 1 && "⚛️"}
                      {index === 2 && "🎨"}
                      {index === 3 && "📱"}
                    </div>
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`text-sm font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                      {skill.level}%
                    </div>
                    <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                {/* Barre avec effets */}
                <div className="relative h-4 rounded-full overflow-hidden bg-gray-700/30">
                  <div 
                    className={`absolute inset-0 bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  >
                    {/* Effet de vague */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" style={{ animationDuration: '3s' }}></div>
                  </div>
                  
                  {/* Marqueurs */}
                  <div className="absolute inset-0 flex">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div 
                        key={i}
                        className={`flex-1 h-full border-r ${
                          (i + 1) * 10 <= skill.level 
                            ? 'border-green-500/20' 
                            : 'border-gray-600/10'
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
                
                {/* Badge de niveau */}
                <div className="flex justify-between items-center mt-2">
                  <div className="text-xs text-gray-500">
                    {skill.level >= 90 ? 'Expert' : skill.level >= 75 ? 'Avancé' : 'Intermédiaire'}
                  </div>
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div 
                        key={i}
                        className={`w-1.5 h-1.5 rounded-full ${
                          i < Math.floor(skill.level / 33.33)
                            ? 'bg-gradient-to-r from-green-400 to-emerald-400'
                            : 'bg-gray-600/40'
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Catégorie 3: Bases de données */}
      <div className="relative group" data-category="databases">
        <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-yellow-600/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-500 group-hover:scale-[1.02] overflow-hidden">
          <div className="p-6 border-b border-gray-700/50 bg-gradient-to-r from-yellow-900/20 to-orange-900/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full blur opacity-20 animate-pulse delay-600"></div>
                <div className="relative p-3 bg-gradient-to-br from-yellow-900/30 to-orange-900/30 rounded-xl">
                  <Database size={28} className="text-yellow-400 animate-bounce-slow" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Bases de <span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">Données</span>
              </h3>
            </div>
            <div className="w-full h-0.5 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 rounded-full"></div>
          </div>
          
          <div className="p-6">
            {[
              { name: "MySQL", level: 90, color: "from-blue-400 to-cyan-400", icon: "🐬" },
              { name: "MongoDB", level: 75, color: "from-green-400 to-emerald-400", icon: "🍃" },
            ].map((skill, index) => (
              <div key={index} className="mb-8 last:mb-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{skill.icon}</div>
                    <div>
                      <span className="text-gray-300 font-medium text-lg">{skill.name}</span>
                      <div className="text-xs text-gray-500">
                        {skill.name === "MySQL" ? "Relationnel" : "NoSQL"}
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute -inset-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur"></div>
                    <div className={`relative text-lg font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                      {skill.level}%
                    </div>
                  </div>
                </div>
                
                {/* Barre circulaire */}
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle 
                      cx="64" 
                      cy="64" 
                      r="60" 
                      stroke="url(#gradient)"
                      strokeWidth="8" 
                      fill="transparent"
                      strokeDasharray="376.8"
                      strokeDashoffset={376.8 - (376.8 * skill.level / 100)}
                      className="transition-all duration-1000 ease-out"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#fbbf24" />
                        <stop offset="100%" stopColor="#f97316" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className={`text-3xl font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                        {skill.level}%
                      </div>
                      <div className="text-sm text-gray-400">maîtrise</div>
                    </div>
                  </div>
                </div>
                
                {/* Points forts */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-300">Requêtes complexes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse delay-200"></div>
                    <span className="text-sm text-gray-300">Optimisation</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Catégorie 4: Outils & DevOps */}
      <div className="relative group" data-category="devops">
        <div className="absolute -inset-4 bg-gradient-to-r from-red-500/10 via-pink-500/10 to-red-600/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-red-500/50 transition-all duration-500 group-hover:scale-[1.02] overflow-hidden">
          <div className="p-6 border-b border-gray-700/50 bg-gradient-to-r from-red-900/20 to-pink-900/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full blur opacity-20 animate-pulse delay-900"></div>
                <div className="relative p-3 bg-gradient-to-br from-red-900/30 to-pink-900/30 rounded-xl">
                  <Zap size={28} className="text-pink-400 animate-pulse-slow" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Outils & <span className="text-transparent bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text">DevOps</span>
              </h3>
            </div>
            <div className="w-full h-0.5 bg-gradient-to-r from-red-400/30 to-pink-400/30 rounded-full"></div>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Git", level: 92, icon: "🐙", color: "from-orange-500 to-red-500" },
                { name: "Docker", level: 70, icon: "🐳", color: "from-blue-400 to-cyan-400" },
                { name: "Webpack", level: 65, icon: "📦", color: "from-yellow-400 to-orange-400" },
                { name: "CI/CD", level: 80, icon: "⚡", color: "from-green-400 to-emerald-400" },
              ].map((skill, index) => (
                <div key={index} className="group/item">
                  <div className="bg-gray-900/30 p-4 rounded-xl hover:bg-gray-900/50 transition-all duration-300 group-hover/item:scale-105">
                    <div className="flex flex-col items-center text-center">
                      <div className="text-3xl mb-2">{skill.icon}</div>
                      <span className="text-gray-300 font-medium mb-2">{skill.name}</span>
                      
                      {/* Mini barre */}
                      <div className="w-full h-2 bg-gray-700/50 rounded-full overflow-hidden mb-2">
                        <div 
                          className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      
                      <span className="text-xs font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Catégorie 5: Graphisme & Multimédia */}
      <div className="relative group" data-category="design">
        <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 via-violet-500/10 to-purple-600/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 group-hover:scale-[1.02] overflow-hidden">
          <div className="p-6 border-b border-gray-700/50 bg-gradient-to-r from-purple-900/20 to-violet-900/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full blur opacity-20 animate-pulse delay-1200"></div>
                <div className="relative p-3 bg-gradient-to-br from-purple-900/30 to-violet-900/30 rounded-xl">
                  <Sparkles size={28} className="text-purple-400 animate-pulse-glow" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Graphisme & <span className="text-transparent bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text">Multimédia</span>
              </h3>
            </div>
            <div className="w-full h-0.5 bg-gradient-to-r from-purple-400/30 to-violet-400/30 rounded-full"></div>
          </div>
          
          <div className="p-6">
            <div className="space-y-4">
              {[
                { name: "Adobe Suite", level: 85, tools: ["Photoshop", "Illustrator", "Premiere"] },
                { name: "Montage multimédia", level: 80, tools: ["Audio", "Vidéo", "Effets"] },
                { name: "Figma", level: 88, tools: ["UI/UX", "Prototypage", "Design"] },
                { name: "Vidéo professionnelle", level: 75, tools: ["Tournage", "Éclairage", "Cadrage"] },
                { name: "Édition vidéo", level: 82, tools: ["After Effects", "Premiere Pro", "Effets"] },
                { name: "Anglais technique", level: 78, tools: ["Documentation", "Communication", "Recherche"] },
              ].map((skill, index) => (
                <div key={index} className="group/item">
                  <div className="flex items-center justify-between p-3 bg-gray-900/20 rounded-lg hover:bg-gray-900/40 transition-all duration-300">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full animate-pulse"></div>
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                      <div className="flex gap-2">
                        {skill.tools.map((tool, i) => (
                          <span key={i} className="text-xs text-gray-500 bg-gray-800/50 px-2 py-1 rounded">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-lg font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                      {skill.level}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Catégorie 6: Compétences transversales */}
      <div className="relative group" data-category="soft-skills">
        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 via-teal-500/10 to-cyan-600/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 group-hover:scale-[1.02] overflow-hidden">
          <div className="p-6 border-b border-gray-700/50 bg-gradient-to-r from-cyan-900/20 to-teal-900/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full blur opacity-20 animate-pulse delay-1500"></div>
                <div className="relative p-3 bg-gradient-to-br from-cyan-900/30 to-teal-900/30 rounded-xl">
                  <Users size={28} className="text-cyan-400 animate-float" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Compétences <span className="text-transparent bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text">Transversales</span>
              </h3>
            </div>
            <div className="w-full h-0.5 bg-gradient-to-r from-cyan-400/30 to-teal-400/30 rounded-full"></div>
          </div>
          
          <div className="p-6">
            {[
              { name: "Travail d'équipe", level: 95, description: "Collaboration efficace" },
              { name: "Communication", level: 90, description: "Clarté et précision" },
              { name: "Gestion de projet", level: 85, description: "Organisation Agile" },
            ].map((skill, index) => (
              <div key={index} className="mb-6 last:mb-0">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    {index === 0 && "🤝"}
                    {index === 1 && "💬"}
                    {index === 2 && "📊"}
                    <div>
                      <span className="text-gray-300 font-medium text-lg">{skill.name}</span>
                      <div className="text-sm text-gray-500">{skill.description}</div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute -inset-3 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-full blur"></div>
                    <div className="relative text-2xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                      {skill.level}%
                    </div>
                  </div>
                </div>
                
                {/* Barre radiale */}
                <div className="relative h-20 flex items-center justify-center">
                  <div className="absolute w-20 h-20">
                    <div className="absolute inset-0 border-4 border-gray-700/30 rounded-full"></div>
                    <div 
                      className="absolute inset-0 border-4 border-transparent border-t-cyan-400 border-r-teal-400 rounded-full animate-spin-slow"
                      style={{ 
                        clipPath: `inset(0 ${100 - skill.level}% 0 0)`,
                        animationDuration: '4s'
                      }}
                    ></div>
                  </div>
                  <div className="relative z-10 text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                      {skill.level}%
                    </div>
                    <div className="text-xs text-gray-400">compétence</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    
    {/* Radar des compétences - Visualisation créative */}
    <div className="mt-20">
      <div className="relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-3xl border border-gray-700/50 p-8">
        <h3 className="text-3xl font-bold text-white text-center mb-8">
          <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
            Radar des Compétences
          </span>
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { category: "Langages", level: 88, color: "blue", skills: 7 },
            { category: "Frameworks", level: 85, color: "green", skills: 5 },
            { category: "Bases de données", level: 83, color: "yellow", skills: 2 },
            { category: "DevOps", level: 77, color: "red", skills: 4 },
            { category: "Design", level: 81, color: "purple", skills: 6 },
            { category: "Soft Skills", level: 90, color: "cyan", skills: 3 },
          ].map((item, index) => (
            <div key={index} className="relative group">
              <div className="bg-gray-900/40 p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group-hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full bg-${item.color}-400 animate-pulse`}></div>
                    <span className="text-gray-300 font-semibold">{item.category}</span>
                  </div>
                  <span className="text-sm text-gray-400">{item.skills} comp.</span>
                </div>
                
                {/* Jauge circulaire */}
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle 
                      cx="48" 
                      cy="48" 
                      r="42" 
                      stroke={`url(#${item.color}Gradient)`}
                      strokeWidth="6" 
                      fill="transparent"
                      strokeDasharray="263.76"
                      strokeDashoffset={263.76 - (263.76 * item.level / 100)}
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`text-2xl font-bold text-${item.color}-400`}>
                      {item.level}%
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-sm text-gray-400">Niveau moyen</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
    {/* Légende créative */}
    <div className="mt-12 relative">
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 rounded-3xl blur-xl"></div>
      <div className="relative bg-gray-800/30 backdrop-blur-sm p-8 rounded-3xl border border-gray-700/50">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-bold text-white mb-4">
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                Échelle de Maîtrise
              </span>
            </h4>
            <p className="text-gray-300 max-w-md">
              Les pourcentages reflètent ma confiance et mon expertise pratique dans chaque technologie, 
              basée sur des projets réels et une formation continue.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { level: "Débutant", range: "0-60%", color: "from-blue-400 to-cyan-400", icon: "🌱" },
              { level: "Intermédiaire", range: "61-80%", color: "from-green-400 to-emerald-400", icon: "🚀" },
              { level: "Avancé", range: "81-95%", color: "from-purple-400 to-violet-400", icon: "⭐" },
              { level: "Expert", range: "96-100%", color: "from-yellow-400 to-orange-400", icon: "🏆" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-gray-900/30 rounded-lg">
                <div className="text-2xl">{item.icon}</div>
                <div>
                  <div className={`text-sm font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                    {item.level}
                  </div>
                  <div className="text-xs text-gray-400">{item.range}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Barre de progression globale */}
        <div className="mt-8 pt-8 border-t border-gray-700/50">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-300 font-semibold">Niveau global de compétences</span>
            <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              85%
            </span>
          </div>
          <div className="h-3 bg-gray-700/30 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out" style={{ width: '85%' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

   {/* Veille Tech Section - DESIGN CRÉATIF ET DYNAMIQUE */}
<section id="veille" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
  {/* Arrière-plan animé futuriste */}
  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-900/10 to-violet-900/10"></div>
  
  {/* Éléments de fond animés */}
  <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
  
  {/* Grille de particules */}
  <div className="absolute inset-0 opacity-20">
    {[...Array(20)].map((_, i) => (
      <div 
        key={i}
        className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${i * 0.3}s`,
          animationDuration: `${2 + Math.random() * 3}s`
        }}
      ></div>
    ))}
  </div>
  
  <div className="max-w-7xl mx-auto relative">
    {/* En-tête créatif */}
    <div className="text-center mb-20 relative">
      <div className="inline-flex items-center justify-center relative mb-10">
        {/* Effet de halo cybernétique */}
        <div className="absolute -inset-12">
          <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-full animate-ping"></div>
          <div className="absolute inset-4 border-2 border-purple-500/30 rounded-full animate-ping delay-300"></div>
          <div className="absolute inset-8 border-2 border-blue-500/30 rounded-full animate-ping delay-600"></div>
        </div>
        
        {/* Icône centrale avec animation futuriste */}
        <div className="relative">
          <div className="absolute -inset-8 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse-glow"></div>
          
          <div className="relative p-6 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-3xl border border-cyan-500/30 shadow-lg shadow-cyan-500/10">
            <div className="relative">
              <Eye size={52} className="text-cyan-400 animate-pulse-slow" />
              
              {/* Animation de balayage */}
              <div className="absolute -inset-3">
                <div className="absolute inset-0 border-2 border-cyan-500/20 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-2 border-2 border-purple-500/20 rounded-full animate-spin-slow reverse"></div>
              </div>
            </div>
          </div>
          
          {/* Points orbitaux */}
          <div className="absolute -inset-6">
            {[...Array(6)].map((_, i) => (
              <div 
                key={i}
                className="absolute w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-70"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${i * 60}deg) translateX(48px) rotate(-${i * 60}deg)`,
                  animation: `orbit 4s linear infinite ${i * 0.5}s`
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
      
      <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
        Veille <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text animate-gradient">Technologique</span>
      </h2>
      
      <div className="flex items-center justify-center gap-6 mb-8">
        <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-transparent rounded-full"></div>
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-200"></div>
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-400"></div>
        </div>
        <div className="w-32 h-1 bg-gradient-to-r from-transparent to-purple-500 rounded-full"></div>
      </div>
      
      {/* Introduction créative */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-50"></div>
          
          <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/4">
                <div className="inline-flex items-center gap-3 p-4 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-xl border border-cyan-500/30">
                  <Zap size={28} className="text-cyan-400 animate-pulse" />
                  <span className="text-cyan-300 font-semibold">Innovation continue</span>
                </div>
              </div>
              
              <div className="md:w-3/4">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Je maintiens une veille active sur les technologies émergentes pour anticiper 
                  les <span className="text-cyan-400 font-semibold">tendances du marché</span> et 
                  intégrer les <span className="text-blue-400 font-semibold">meilleures pratiques</span>. 
                  Mon processus de veille inclut la surveillance des 
                  <span className="text-purple-400 font-semibold"> nouvelles versions</span>, 
                  l'étude des <span className="text-green-400 font-semibold">cas d'usage innovants</span> et 
                  l'expérimentation des <span className="text-yellow-400 font-semibold">outils prometteurs</span>.
                </p>
              </div>
            </div>
            
            {/* Indicateurs de veille */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-cyan-500/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-sm text-gray-400">Veille continue</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-2">50+</div>
                <div className="text-sm text-gray-400">Sources suivies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-2">100%</div>
                <div className="text-sm text-gray-400">À jour</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Grille des technologies surveillées */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Carte IA */}
      <div className="relative group" data-tech="ai">
        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 group-hover:scale-[1.02] overflow-hidden">
          {/* En-tête avec animation */}
          <div className="p-6 border-b border-gray-700/50 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute -inset-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur opacity-20 animate-pulse"></div>
                  <div className="relative text-3xl">🤖</div>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                  Intelligence Artificielle
                </h3>
              </div>
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
            </div>
            
            <div className="w-full h-0.5 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-full"></div>
          </div>
          
          {/* Contenu */}
          <div className="p-6">
            <p className="text-gray-300 mb-6 leading-relaxed">
              Suivi des avancées en IA et machine learning, modèles génératifs et applications pratiques.
            </p>
            
            {/* Badges de technologies */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Tendance actuelle</span>
                <span className="text-sm font-bold text-cyan-400">🔥 Haute</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {["ChatGPT & GPT-4", "AutoML", "Computer Vision", "LLMs", "Generative AI"].map((topic, i) => (
                  <div 
                    key={i}
                    className="relative group/topic"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur opacity-0 group-hover/topic:opacity-100 transition-opacity"></div>
                    <span className="relative px-4 py-2 bg-gray-900/50 text-cyan-300 text-xs rounded-full border border-cyan-500/30 group-hover/topic:border-cyan-400/50 group-hover/topic:bg-cyan-900/20 transition-all duration-300">
                      {topic}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Indicateur de progression */}
            <div className="mt-6 pt-6 border-t border-gray-700/50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Niveau de suivi</span>
                <span className="text-sm font-bold text-cyan-400">95%</span>
              </div>
              <div className="h-2 bg-gray-700/30 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000 ease-out" style={{ width: '95%' }}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" style={{ animationDuration: '2s' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Éléments décoratifs */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="w-8 h-8 border-2 border-cyan-500/30 rounded-full animate-spin-slow"></div>
          </div>
        </div>
      </div>

      {/* Carte Cloud Computing */}
      <div className="relative group" data-tech="cloud">
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 group-hover:scale-[1.02] overflow-hidden">
          <div className="p-6 border-b border-gray-700/50 bg-gradient-to-r from-blue-900/20 to-indigo-900/20">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute -inset-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur opacity-20 animate-pulse delay-300"></div>
                  <div className="relative text-3xl">☁️</div>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-indigo-400 group-hover:bg-clip-text transition-all duration-300">
                  Cloud Computing
                </h3>
              </div>
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-ping delay-200"></div>
            </div>
            <div className="w-full h-0.5 bg-gradient-to-r from-blue-400/30 to-indigo-400/30 rounded-full"></div>
          </div>
          
          <div className="p-6">
            <p className="text-gray-300 mb-6 leading-relaxed">
              Évolution des services cloud, serverless, conteneurisation et architectures microservices.
            </p>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {["AWS", "Azure", "GCP", "Kubernetes"].map((provider, i) => (
                  <div key={i} className="group/provider">
                    <div className="flex items-center gap-2 p-3 bg-gray-900/30 rounded-lg hover:bg-gray-900/50 transition-all duration-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-300">{provider}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="pt-4 border-t border-gray-700/30">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Expertise cloud</span>
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div 
                        key={i}
                        className="w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full animate-pulse"
                        style={{ animationDelay: `${i * 0.3}s` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carte Web 3.0 & Blockchain */}
      <div className="relative group" data-tech="blockchain">
        <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 via-violet-500/10 to-fuchsia-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 group-hover:scale-[1.02] overflow-hidden">
          <div className="p-6 border-b border-gray-700/50 bg-gradient-to-r from-purple-900/20 to-violet-900/20">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute -inset-3 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full blur opacity-20 animate-pulse delay-600"></div>
                  <div className="relative text-3xl">⛓️</div>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-violet-400 group-hover:bg-clip-text transition-all duration-300">
                  Web 3.0 & Blockchain
                </h3>
              </div>
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-ping delay-400"></div>
            </div>
            <div className="w-full h-0.5 bg-gradient-to-r from-purple-400/30 to-violet-400/30 rounded-full"></div>
          </div>
          
          <div className="p-6">
            <p className="text-gray-300 mb-6 leading-relaxed">
              Technologies décentralisées, smart contracts, DeFi et écosystème Web3.
            </p>
            
            <div className="space-y-3">
              {["Smart Contracts", "DeFi", "NFTs", "DAO", "dApps"].map((topic, i) => (
                <div key={i} className="flex items-center gap-3 group/topic">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-300 flex-1">{topic}</span>
                  <div className="text-xs text-purple-400 opacity-0 group-hover/topic:opacity-100 transition-opacity">
                    → Étudié
                  </div>
                </div>
              ))}
            </div>
            
            {/* Indicateur d'adoption */}
            <div className="mt-6">
              <div className="text-sm text-gray-400 mb-2">Niveau d'intérêt</div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-gray-700/30 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-violet-500 rounded-full" style={{ width: '80%' }}></div>
                </div>
                <span className="text-sm font-bold text-purple-400">80%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carte DevOps & CI/CD */}
      <div className="relative group" data-tech="devops">
        <div className="absolute -inset-4 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-green-500/50 transition-all duration-500 group-hover:scale-[1.02] overflow-hidden">
          <div className="p-6 border-b border-gray-700/50 bg-gradient-to-r from-green-900/20 to-emerald-900/20">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute -inset-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur opacity-20 animate-pulse delay-900"></div>
                  <div className="relative text-3xl">⚙️</div>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-emerald-400 group-hover:bg-clip-text transition-all duration-300">
                  DevOps & CI/CD
                </h3>
              </div>
              <div className="w-3 h-3 bg-green-400 rounded-full animate-ping delay-600"></div>
            </div>
            <div className="w-full h-0.5 bg-gradient-to-r from-green-400/30 to-emerald-400/30 rounded-full"></div>
          </div>
          
          <div className="p-6">
            <p className="text-gray-300 mb-6 leading-relaxed">
              Automatisation, pratiques DevOps, pipelines CI/CD et outils d'intégration continue.
            </p>
            
            <div className="grid grid-cols-3 gap-3 mb-4">
              {[
                { tool: "Docker", level: 85, color: "from-blue-400 to-cyan-400" },
                { tool: "GitHub Actions", level: 80, color: "from-gray-400 to-black-400" },
                { tool: "Terraform", level: 70, color: "from-purple-400 to-pink-400" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className={`text-lg font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                    {item.level}%
                  </div>
                  <div className="text-xs text-gray-400">{item.tool}</div>
                </div>
              ))}
            </div>
            
            {/* Timeline d'adoption */}
            <div className="pt-4 border-t border-gray-700/30">
              <div className="text-sm text-gray-400 mb-2">Progression d'adoption</div>
              <div className="h-1 bg-gray-700/30 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carte Mobile & PWA */}
      <div className="relative group" data-tech="mobile">
        <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-yellow-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-orange-500/50 transition-all duration-500 group-hover:scale-[1.02] overflow-hidden">
          <div className="p-6 border-b border-gray-700/50 bg-gradient-to-r from-orange-900/20 to-amber-900/20">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute -inset-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full blur opacity-20 animate-pulse delay-1200"></div>
                  <div className="relative text-3xl">📱</div>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-amber-400 group-hover:bg-clip-text transition-all duration-300">
                  Mobile & PWA
                </h3>
              </div>
              <div className="w-3 h-3 bg-orange-400 rounded-full animate-ping delay-800"></div>
            </div>
            <div className="w-full h-0.5 bg-gradient-to-r from-orange-400/30 to-amber-400/30 rounded-full"></div>
          </div>
          
          <div className="p-6">
            <p className="text-gray-300 mb-6 leading-relaxed">
              Développement mobile hybride, applications web progressives et expérience utilisateur.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">Flutter</span>
                </div>
                <span className="text-sm text-orange-400">Maîtrise: 70%</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full animate-pulse delay-200"></div>
                  <span className="text-gray-300">React Native</span>
                </div>
                <span className="text-sm text-orange-400">Maîtrise: 65%</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full animate-pulse delay-400"></div>
                  <span className="text-gray-300">PWA</span>
                </div>
                <span className="text-sm text-orange-400">Maîtrise: 85%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carte Cybersécurité */}
      <div className="relative group" data-tech="security">
        <div className="absolute -inset-4 bg-gradient-to-r from-red-500/10 via-rose-500/10 to-pink-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-red-500/50 transition-all duration-500 group-hover:scale-[1.02] overflow-hidden">
          <div className="p-6 border-b border-gray-700/50 bg-gradient-to-r from-red-900/20 to-rose-900/20">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute -inset-3 bg-gradient-to-r from-red-500 to-rose-500 rounded-full blur opacity-20 animate-pulse delay-1500"></div>
                  <div className="relative text-3xl">🔒</div>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-rose-400 group-hover:bg-clip-text transition-all duration-300">
                  Cybersécurité
                </h3>
              </div>
              <div className="w-3 h-3 bg-red-400 rounded-full animate-ping delay-1000"></div>
            </div>
            <div className="w-full h-0.5 bg-gradient-to-r from-red-400/30 to-rose-400/30 rounded-full"></div>
          </div>
          
          <div className="p-6">
            <p className="text-gray-300 mb-6 leading-relaxed">
              Sécurité des applications, bonnes pratiques OWASP, authentification et protection des données.
            </p>
            
            <div className="space-y-3">
              {["OWASP Top 10", "JWT/Auth", "Security Headers", "Encryption", "Pen Testing"].map((topic, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r from-red-400 to-rose-400 animate-pulse`} style={{ animationDelay: `${i * 0.2}s` }}></div>
                  <span className="text-gray-300 text-sm">{topic}</span>
                </div>
              ))}
            </div>
            
            {/* Indicateur d'importance */}
            <div className="mt-6 pt-4 border-t border-gray-700/30">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Priorité de sécurité</span>
                <span className="text-lg font-bold text-red-400">⚠️ Élevée</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Section Processus de Veille */}
    <div className="mt-20">
      <div className="relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-3xl border border-gray-700/50 p-8 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        
        <h3 className="text-3xl font-bold text-white text-center mb-8 relative">
          <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">
            Mon Processus de Veille
          </span>
        </h3>
        
        <div className="grid md:grid-cols-4 gap-6 relative">
          {[
            { step: "01", title: "Surveillance", desc: "Sources techniques et blogs", icon: "👁️", color: "from-cyan-400 to-blue-400" },
            { step: "02", title: "Analyse", desc: "Évaluation des tendances", icon: "📊", color: "from-blue-400 to-purple-400" },
            { step: "03", title: "Expérimentation", desc: "Tests et prototypes", icon: "🔬", color: "from-purple-400 to-pink-400" },
            { step: "04", title: "Intégration", desc: "Mise en pratique", icon: "⚡", color: "from-pink-400 to-rose-400" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="relative inline-flex mb-4">
                <div className={`absolute -inset-4 bg-gradient-to-r ${item.color} rounded-full blur opacity-20 animate-pulse`}></div>
                <div className="relative w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center border border-gray-700/50">
                  <div className="text-2xl">{item.icon}</div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-xs font-bold">
                  {item.step}
                </div>
              </div>
              
              <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.desc}</p>
              
              <div className="mt-4 flex justify-center">
                <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-ping" style={{ animationDelay: `${index * 0.3}s` }}></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Sources de veille */}
        <div className="mt-12 pt-8 border-t border-gray-700/50">
          <h4 className="text-2xl font-bold text-white text-center mb-6">
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
              Sources Principales
            </span>
          </h4>
          
          <div className="flex flex-wrap justify-center gap-4">
            {["GitHub", "Medium", "Dev.to", "Reddit", "Twitter/X", "Hacker News", "TechCrunch", "Stack Overflow"].map((source, i) => (
              <div 
                key={i}
                className="px-4 py-2 bg-gray-900/40 text-gray-300 rounded-full border border-gray-700/50 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300 hover:scale-105"
              >
                {source}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg">
              <Mail size={32} className="text-blue-400" />
            </div>
            <h2 className="text-4xl font-bold text-white">
              Contactez-<span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">moi</span>
            </h2>
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
                {navItems.map((item) => (
                  <a 
                    key={item.id}
                    href={`#${item.id}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {item.label}
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