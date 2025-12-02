import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User, GraduationCap, Globe, Smartphone, Database, Users, Clock, Target, Brain, Phone, MapPin, Award, Layers, Sparkles, Download } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fonction pour télécharger le CV
  const handleDownloadCV = () => {
    // Créer un lien de téléchargement
    const link = document.createElement('a');
    
    // Si vous avez le fichier dans le dossier public
    link.href = '/CV_Feki_Mohamed.pdf';
    
    // Ou si vous voulez utiliser un lien externe
    // link.href = 'https://votre-domaine.com/CV_Feki_Mohamed(dernier_version).pdf';
    
    link.download = 'CV_Mohamed_Feki.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Stats data for Hero section
  const stats = [
    { number: "10+", label: "Projets", icon: <Layers size={20} /> },
    { number: "14+", label: "Technologies", icon: <Code2 size={20} /> },
    { number: "3+", label: "Etudes", icon: <Award size={20} /> },
    { number: "100%", label: "Passion", icon: <Sparkles size={20} /> }
  ];

  const projects = [
    {
      title: "Application E-commerce Full Stack",
      description: "Application complète de e-commerce avec gestion de produits, commandes et utilisateurs",
      tech: ["Spring Boot", "React", "Java", "MySQL"],
      link: "#",
      github: "#",
      date: "Novembre 2024"
    },
    {
      title: "Système de Prescriptions Électroniques",
      description: "Application de délivrance de prescriptions électroniques pour pharmaciens",
      tech: ["ASP.NET Core", "C#", "SQL Server", "Entity Framework"],
      link: "#",
      github: "#",
      date: "Mai 2024"
    },
    {
      title: "Plateforme de Jeux Interactifs",
      description: "Site web dynamique avec jeux interactifs développés en JavaScript",
      tech: ["JavaScript", "HTML5", "CSS3", "Web APIs"],
      link: "#",
      github: "#",
      date: "Février 2024"
    }
  ];

  const experiences = [
    {
      company: "SOPAL",
      position: "Stage de fin d'études",
      period: "18 février – 18 juin 2025",
      description: "Développement d'application web/mobile pour la gestion optimisée des livraisons",
      tech: ["ASP.NET Core", "Vue.js", ".NET MAUI", "SignalR"],
      location: "Sfax, Tunisie"
    },
    {
      company: "Institut International de Technologie",
      position: "Stage",
      period: "29 juillet – 29 août 2024",
      description: "Développement d'application web pour la gestion des rapports de stage",
      tech: ["PHP", "MySQL", "Laragon", "Bootstrap"],
      location: "Sfax, Tunisie"
    }
  ];

  const skills = [
    { 
      category: "Langages", 
      items: ["Python", "Java", "C", "C#", "PHP", "JavaScript", "HTML/CSS"],
      icon: <Code2 size={20} />
    },
    { 
      category: "Frameworks", 
      items: ["Spring Boot", "React", "Vue.js", "ASP.NET Core", "Flutter"],
      icon: <Globe size={20} />
    },
    { 
      category: "Mobile & Web", 
      items: ["Flutter", ".NET MAUI", "Responsive Design", "REST APIs"],
      icon: <Smartphone size={20} />
    },
    { 
      category: "Bases de données", 
      items: ["MySQL", "SQLite", "PostgreSQL", "MongoDB"],
      icon: <Database size={20} />
    }
  ];

  const softSkills = [
    { name: "Communication efficace", icon: <Users size={16} /> },
    { name: "Travail en équipe", icon: <Users size={16} /> },
    { name: "Gestion du temps", icon: <Clock size={16} /> },
    { name: "Résolution de problèmes", icon: <Target size={16} /> },
    { name: "Adaptabilité", icon: <Brain size={16} /> }
  ];

  const languages = [
    { name: "Arabe", level: "Langue maternelle", levelClass: "w-full" },
    { name: "Français", level: "Niveau B2", levelClass: "w-3/4" },
    { name: "Anglais", level: "Niveau B2", levelClass: "w-3/4" }
  ];

  const certifications = [
    { title: "Certification Scrum", date: "Mai 2024", issuer: "OpenClassrooms" },
    { title: "Marketing Digital", date: "Mai 2024", issuer: "Google Ateliers Numériques" },
    { title: "Développement Web", date: "Mars 2022", issuer: "Centre de formation CSF" },
    { title: "PYTHON/SQL/SQLITE", date: "Juin 2020", issuer: "EDU SPAZIO" }
  ];

  const interests = ["Technologie et innovation", "Jeux vidéo (gamification et créativité)", "Football (pratique et suivi)"];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation - Dark Version */}
      <nav className="fixed w-full bg-gray-900/95 backdrop-blur-lg z-50 shadow-xl border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Left Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Code2 className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">MOHAMED</h1>
                <p className="text-xs text-gray-400 font-medium tracking-widest">FULL STACK DEVELOPER</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-10">
              {['Accueil', 'Profil', 'Compétences', 'Projets', 'Expériences', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-blue-400 transition-all duration-300 font-medium relative group text-sm tracking-wide"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>
            
            {/* Contact Button */}
            <div className="hidden md:flex items-center gap-4">
              <a 
                href="#contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 font-medium text-sm hover:scale-105"
              >
                Me Contacter
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700 shadow-lg">
            <div className="px-4 py-3 space-y-1">
              {['Accueil', 'Profil', 'Compétences', 'Projets', 'Expériences', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-3 text-gray-300 hover:text-blue-400 hover:bg-gray-700 rounded-lg px-4 transition font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-700">
                <a 
                  href="#contact"
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-medium hover:bg-gradient-to-r hover:from-blue-700 hover:to-purple-700 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Me Contacter
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900/30" />
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-x-32 -translate-y-32" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl translate-x-32 translate-y-32" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl sm:text-7xl font-bold text-white mb-4 leading-tight">
                  <span className="block">MOHAMED</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    FEKI
                  </span>
                </h1>
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                  <span className="text-lg font-semibold text-gray-300">DÉVELOPPEUR FULL-STACK</span>
                </div>
                
                <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                  Titulaire d'une licence en Génie Logiciel et Systèmes d'Information. 
                  Passionné par la création de solutions innovantes et performantes.
                </p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700 hover:border-blue-500/50 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg">
                        <div className="text-blue-400">
                          {stat.icon}
                        </div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4 pt-8">
                <a 
                  href="#projets"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3.5 rounded-lg hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 transition-all duration-300 font-medium flex items-center gap-2"
                >
                  <span>Voir mes Projets</span>
                  <ExternalLink size={18} />
                </a>
                
                {/* Bouton de téléchargement du CV */}
                <button
                  onClick={handleDownloadCV}
                  className="border-2 border-gray-600 text-gray-300 px-8 py-3.5 rounded-lg hover:border-blue-500 hover:text-blue-400 hover:shadow-sm transition-all duration-300 font-medium flex items-center gap-2"
                >
                  <Download size={18} />
                  <span>Télécharger CV</span>
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full relative overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <User size={120} className="text-white/90" />
                  </div>
                </div>
                
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center shadow-lg border border-gray-700">
                  <Code2 size={28} className="text-blue-400 mb-2" />
                  <span className="text-sm font-bold text-white">Full Stack</span>
                </div>
                
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center shadow-lg border border-gray-700">
                  <div className="text-3xl font-bold text-gradient bg-gradient-to-r from-purple-400 to-pink-400">
                    2+
                  </div>
                  <span className="text-sm font-bold text-white">Années Exp.</span>
                </div>
              </div>
              
              <div className="mt-12 grid sm:grid-cols-2 gap-4">
                <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-900/30 rounded-lg">
                      <Phone size={20} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Téléphone</p>
                      <p className="font-semibold text-white">+216 27 752 903</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-900/30 rounded-lg">
                      <MapPin size={20} className="text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Localisation</p>
                      <p className="font-semibold text-white">Sfax, Tunisie</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center gap-6 mt-16 pt-8 border-t border-gray-700">
            <a 
              href="https://linkedin.com/in/mohamed-feki-486918309" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full shadow-sm hover:shadow-md hover:-translate-y-1 transition-all border border-gray-700 hover:border-blue-500"
            >
              <Linkedin size={20} className="text-blue-400" />
            </a>
            <a 
              href="https://github.com/mohamedfeki414" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full shadow-sm hover:shadow-md hover:-translate-y-1 transition-all border border-gray-700 hover:border-gray-500"
            >
              <Github size={20} className="text-white" />
            </a>
            <a 
              href="mailto:medfeki33@gmail.com"
              className="p-3 bg-gray-800 rounded-full shadow-sm hover:shadow-md hover:-translate-y-1 transition-all border border-gray-700 hover:border-red-500"
            >
              <Mail size={20} className="text-red-400" />
            </a>
          </div>
        </div>
      </section>

      {/* Profil Section */}
      <section id="profil" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase size={32} className="text-blue-400" />
            <h2 className="text-4xl font-bold text-white">Profil Professionnel</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <GraduationCap className="text-blue-400" />
                  Formation
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold text-blue-400">Licence en Génie Logiciel et Systèmes d'Information</h4>
                    <p className="text-gray-400">Institut International de Technologie</p>
                  </div>
                  <div className="space-y-3 pt-4 border-t border-gray-700">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <span className="text-gray-300">{cert.title}</span>
                          <p className="text-sm text-gray-500">{cert.issuer}</p>
                        </div>
                        <span className="text-blue-400 text-sm">{cert.date}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">Centres d'intérêt</h3>
                <div className="flex flex-wrap gap-3">
                  {interests.map((interest, index) => (
                    <span key={index} className="px-4 py-2 bg-gray-700/50 text-gray-300 rounded-full text-sm hover:bg-gray-600/50 transition">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6">Soft Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  {softSkills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition">
                      <div className="text-blue-400">
                        {skill.icon}
                      </div>
                      <span className="text-gray-300">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-yellow-500/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6">Langues</h3>
                <div className="space-y-4">
                  {languages.map((lang, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">{lang.name}</span>
                        <span className="text-blue-400 text-sm">{lang.level}</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className={`h-full bg-gradient-to-r from-blue-500 to-purple-500 ${lang.levelClass} transition-all duration-1000`} />
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
      <section id="compétences" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Compétences <span className="text-blue-400">Techniques</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 hover:scale-105 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg">
                    <div className="text-blue-400">
                      {skillGroup.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white">{skillGroup.category}</h3>
                </div>
                <div className="space-y-3">
                  {skillGroup.items.map((skill, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projets Section */}
      <section id="projets" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Mes <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projets</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Découvrez mes réalisations académiques et personnelles
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="h-48 relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-gray-900/80 backdrop-blur-sm text-blue-400 text-xs font-semibold px-3 py-1.5 rounded-full">
                      {project.date}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="w-10 h-10 bg-blue-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <Code2 size={20} className="text-blue-400" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className="bg-gray-700/50 text-blue-300 text-xs px-3 py-1.5 rounded-lg font-medium hover:bg-gray-700 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <a 
                      href={project.link} 
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold text-sm group/link"
                    >
                      <span>Voir le projet</span>
                      <ExternalLink size={16} className="transform group-hover/link:translate-x-1 transition-transform" />
                    </a>
                    
                    <a 
                      href={project.github} 
                      className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-gray-700 transition-colors"
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
      <section id="expériences" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Expériences <span className="text-purple-400">Professionnelles</span>
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {exp.position}
                    </h3>
                    <p className="text-xl text-blue-400 mt-1">{exp.company}</p>
                  </div>
                  <div className="flex flex-col items-start lg:items-end">
                    <span className="px-4 py-2 bg-gray-700/50 text-blue-300 rounded-full text-sm">
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
                      className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 rounded-lg text-sm border border-gray-700 hover:border-purple-500/50 transition"
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Contactez-<span className="text-blue-400">moi</span>
          </h2>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Intéressé par mon profil ? N'hésitez pas à me contacter pour discuter d'opportunités.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all hover:scale-105">
              <Mail size={32} className="text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <a href="mailto:medfeki33@gmail.com" className="text-gray-400 hover:text-blue-400 transition">
                medfeki33@gmail.com
              </a>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all hover:scale-105">
              <Smartphone size={32} className="text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Téléphone</h3>
              <a href="tel:+21627752903" className="text-gray-400 hover:text-purple-400 transition">
                +216 27 752 903
              </a>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all hover:scale-105">
              <Globe size={32} className="text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Localisation</h3>
              <p className="text-gray-400">Sfax, Tunisie</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="https://linkedin.com/in/mohamed-feki-486918309" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-blue-900 transition-all duration-300 font-medium flex items-center gap-2 hover:scale-105 w-full sm:w-auto justify-center"
            >
              <Linkedin size={20} /> LinkedIn
            </a>
            <a 
              href="https://github.com/mohamedfeki414" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-all duration-300 font-medium flex items-center gap-2 hover:scale-105 w-full sm:w-auto justify-center"
            >
              <Github size={20} /> GitHub
            </a>
            
            {/* Bouton de téléchargement du CV dans la section Contact */}
            <button
              onClick={handleDownloadCV}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium flex items-center gap-2 hover:scale-105 w-full sm:w-auto justify-center"
            >
              <Download size={20} /> Télécharger CV
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Code2 className="text-blue-400" />
                MOHAMED FEKI
              </h3>
              <p className="text-gray-400">
                Développeur Full Stack spécialisé en Génie Logiciel et Systèmes d'Information
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Navigation</h3>
              <div className="space-y-2">
                <a href="#accueil" className="block text-gray-400 hover:text-blue-400 transition">Accueil</a>
                <a href="#profil" className="block text-gray-400 hover:text-blue-400 transition">Profil</a>
                <a href="#compétences" className="block text-gray-400 hover:text-blue-400 transition">Compétences</a>
                <a href="#projets" className="block text-gray-400 hover:text-blue-400 transition">Projets</a>
                <a href="#expériences" className="block text-gray-400 hover:text-blue-400 transition">Expériences</a>
                <a href="#contact" className="block text-gray-400 hover:text-blue-400 transition">Contact</a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Réseaux sociaux</h3>
              <div className="flex gap-4">
                <a href="https://linkedin.com/in/mohamed-feki-486918309" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-lg hover:bg-blue-900/30 hover:scale-110 transition-all">
                  <Linkedin size={20} className="text-blue-400" />
                </a>
                <a href="https://github.com/mohamedfeki414" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 hover:scale-110 transition-all">
                  <Github size={20} className="text-white" />
                </a>
                <a href="mailto:medfeki33@gmail.com" className="p-3 bg-gray-800 rounded-lg hover:bg-red-900/30 hover:scale-110 transition-all">
                  <Mail size={20} className="text-red-400" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
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