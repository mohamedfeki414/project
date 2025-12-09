import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, GraduationCap, Globe, Smartphone, Database, Users, Clock, Target, Brain, Phone, MapPin, Award, Layers, Sparkles, Download, ChevronRight, Zap, Coffee, Gamepad2, Trophy, Home, User as UserIcon, Briefcase as BriefcaseIcon, Folder, Wrench, Eye, Palette, Cpu, Bell, Globe as GlobeIcon } from 'lucide-react';
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

// Interface pour les traductions
interface Translations {
  [key: string]: {
    nav: {
      home: string;
      about: string;
      experience: string;
      projects: string;
      skills: string;
      techWatch: string;
    };
    hero: {
      available: string;
      developer: string;
      description: string;
      viewProjects: string;
      downloadCV: string;
      contact: string;
      phone: string;
      location: string;
    };
    about: {
      title: string;
      intro1: string;
      intro2: string;
      education: string;
      certifications: string;
      degree: string;
      institution: string;
      graduated: string;
      interests: string;
      softSkills: string;
      languages: string;
      native: string;
      level: string;
      proficiency: string;
    };
    experience: {
      title: string;
      description: string;
      technologies: string;
      keyPoints: string[];
      stats: {
        years: string;
        projects: string;
        technologies: string;
        satisfaction: string;
      };
    };
    projects: {
      title: string;
      description: string;
      stats: {
        completed: string;
        functional: string;
        satisfaction: string;
      };
      project1: {
        title: string;
        description: string;
        stack: string;
        features: string[];
      };
      project2: {
        title: string;
        description: string;
        technologies: string;
        features: string[];
      };
      project3: {
        title: string;
        description: string;
        technologies: string;
        features: string[];
      };
      cta: {
        title: string;
        description: string;
        button: string;
        github: string;
        active: string;
      };
    };
    skills: {
      title: string;
      description: string;
      categories: {
        programming: string;
        frameworks: string;
        databases: string;
        devops: string;
        design: string;
        softSkills: string;
      };
      skillLevels: {
        beginner: string;
        intermediate: string;
        advanced: string;
        expert: string;
      };
      overall: string;
      radar: string;
    };
    techWatch: {
      title: string;
      description: string;
      process: {
        surveillance: string;
        analysis: string;
        experimentation: string;
        integration: string;
      };
      categories: {
        ai: string;
        cloud: string;
        blockchain: string;
        devops: string;
        mobile: string;
        security: string;
      };
    };
    contact: {
      title: string;
      description: string;
      available: string;
      response: string;
      email: string;
      phone: string;
      location: string;
      workOptions: string[];
      linkedin: string;
      github: string;
      download: string;
      finalCta: string;
    };
    footer: {
      description: string;
      navigation: string;
      quickLinks: string;
      connect: string;
      newsletter: string;
      rights: string;
      builtWith: string;
      thanks: string;
    };

    // 🔥 AJOUT POUR LE CHANGEMENT DE LANGUE
    languages: {
      fr: string;
      en: string;
    };
  };
}

// Données de traduction
const translations: Translations = {
  fr: {
    nav: {
      home: "Accueil",
      about: "Apropos",
      experience: "Experiences",
      projects: "Projets",
      skills: "Compétences",
      techWatch: "Veille Tech",
    },
    hero: {
      available: "Disponible pour des opportunités",
      developer: "DÉVELOPPEUR FULL-STACK",
      description:
        "Passionné par la création de solutions innovantes et performantes. Titulaire d'une licence en Génie Logiciel et Systèmes d'Information.",
      viewProjects: "Voir mes Projets",
      downloadCV: "Télécharger CV",
      contact: "Contact",
      phone: "Téléphone",
      location: "Localisation",
    },
    about: {
      title: "À Propos",
      intro1:
        "Passionné par l'innovation et la création de solutions technologiques depuis toujours, je mets mon expertise en développement full-stack au service de projets ambitieux. Mon parcours académique en Génie Logiciel et mes multiples expériences pratiques m'ont forgé une vision holistique du développement, alliant rigueur technique et créativité.",
      intro2:
        "J'aime relever des défis complexes et transformer des idées en applications performantes. Mon approche combine méthodologie Agile, bonnes pratiques de code et une veille technologique constante pour toujours proposer des solutions modernes et efficaces.",
      education: "Formation & Certifications",
      certifications: "Certifications obtenues :",
      degree: "Licence en Génie Logiciel et SI",
      institution: "Institut International de Technologie",
      graduated: "Diplôme obtenu avec mention",
      interests: "Centres d'intérêt",
      softSkills: "Soft Skills",
      languages: "Langues",
      native: "Langue maternelle",
      level: "Niveau B2",
      proficiency: "Maîtrise linguistique",
    },
    experience: {
      title: "Expériences Professionnelles",
      description:
        "Mon parcours professionnel reflète ma passion pour l'innovation et mon engagement à relever des défis techniques. Chaque expérience a contribué à forger mon expertise et ma vision du développement moderne.",
      technologies: "Technologies utilisées :",
      keyPoints: [
        "Développement Full Stack",
        "Architecture moderne",
        "Méthodologie Agile",
        "Collaboration d'équipe",
      ],
      stats: {
        years: "Années d'expérience",
        projects: "Projets réalisés",
        technologies: "Technologies maîtrisées",
        satisfaction: "Satisfaction",
      },
    },
    projects: {
      title: "Mes Projets",
      description:
        "Je transforme des concepts en solutions fonctionnelles. Chaque projet représente une solution technique innovante, alliant design moderne et performance optimale.",
      stats: {
        completed: "Projets réalisés",
        functional: "Fonctionnels",
        satisfaction: "Satisfaction client",
      },
      project1: {
        title: "Application E-commerce",
        description:
          "Plateforme de e-commerce complète avec système de panier, paiement sécurisé, dashboard administrateur et gestion des utilisateurs en temps réel.",
        stack: "Stack technique :",
        features: [
          "Authentification sécurisée",
          "Interface responsive",
          "Paiements en ligne",
        ],
      },
      project2: {
        title: "MOGAMES",
        description:
          "Collection de jeux éducatifs et divertissants développés avec des technologies web modernes pour une expérience utilisateur immersive.",
        technologies: "Technologies :",
        features: ["Interface ludique", "Responsive design", "Animations fluides"],
      },
      project3: {
        title: "Système Médical",
        description:
          "Application sécurisée pour la délivrance et le suivi de prescriptions médicales électroniques avec chiffrement des données et authentification avancée.",
        technologies: "Technologies :",
        features: ["Sécurité HIPAA", "Chiffrement des données", "Interface intuitive"],
      },
      cta: {
        title: "Vous avez un projet en tête ?",
        description:
          "Je suis toujours ouvert à de nouveaux défis et collaborations. Discutons de votre idée et voyons comment je peux vous aider à la concrétiser.",
        button: "Discutons de votre projet",
        github: "Plus de projets sur",
        active: "Projets actifs",
      },
    },
    skills: {
      title: "Mes Compétences",
      description:
        "Je maîtrise un éventail complet de technologies modernes, allant du développement frontend au backend, en passant par les bases de données et les outils DevOps. Mon approche combine rigueur technique et créativité pour créer des solutions innovantes.",
      categories: {
        programming: "Langages & Programmation",
        frameworks: "Frameworks & Bibliothèques",
        databases: "Bases de Données",
        devops: "Outils & DevOps",
        design: "Graphisme & Multimédia",
        softSkills: "Compétences Transversales",
      },
      skillLevels: {
        beginner: "Débutant",
        intermediate: "Intermédiaire",
        advanced: "Avancé",
        expert: "Expert",
      },
      overall: "Niveau global de compétences",
      radar: "Radar des Compétences",
    },
    techWatch: {
      title: "Veille Technologique",
      description:
        "Je maintiens une veille active sur les technologies émergentes pour anticiper les tendances du marché et intégrer les meilleures pratiques. Mon processus de veille inclut la surveillance des nouvelles versions, l'étude des cas d'usage innovants et l'expérimentation des outils prometteurs.",
      process: {
        surveillance: "Surveillance",
        analysis: "Analyse",
        experimentation: "Expérimentation",
        integration: "Intégration",
      },
      categories: {
        ai: "Intelligence Artificielle",
        cloud: "Cloud Computing",
        blockchain: "Web 3.0 & Blockchain",
        devops: "DevOps & CI/CD",
        mobile: "Mobile & PWA",
        security: "Cybersécurité",
      },
    },
    contact: {
      title: "Travaillons Ensemble",
      description:
        "Vous avez un projet passionnant en tête ? Je suis disponible pour discuter de vos idées, collaborer sur des défis techniques ou rejoindre votre équipe. N'hésitez pas à me contacter !",
      available: "Disponible immédiatement",
      response: "Réponse sous 24h",
      email: "Pour les discussions détaillées et collaborations",
      phone: "Pour les échanges directs et urgents",
      location: "Zone géographique et déplacements",
      workOptions: ["Présentiel", "Hybride", "Full Remote", "Freelance"],
      linkedin: "Connectons-nous sur LinkedIn",
      github: "Découvrez mes projets GitHub",
      download: "Télécharger mon CV complet",
      finalCta: "Prêt à collaborer ?",
    },
    footer: {
      description:
        "Passionné par l'innovation et la création de solutions technologiques performantes. Toujours à la recherche de nouveaux défis et opportunités.",
      navigation: "Navigation",
      quickLinks: "Liens rapides",
      connect: "Connectons-nous",
      newsletter: "Pour les mises à jour de portfolio",
      rights: "Tous droits réservés",
      builtWith: "Construit avec",
      thanks: "Merci de votre visite !",
    },

    // 🔥 Ajout pour le sélecteur de langue
    languages: {
      fr: "Français",
      en: "Anglais",
    },
  },

  // ===================== ENGLISH VERSION =========================

  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      techWatch: "Tech Watch",
    },
    hero: {
      available: "Available for opportunities",
      developer: "FULL-STACK DEVELOPER",
      description:
        "Passionate about creating innovative and high-performance solutions. Holder of a degree in Software Engineering and Information Systems.",
      viewProjects: "View my Projects",
      downloadCV: "Download CV",
      contact: "Contact",
      phone: "Phone",
      location: "Location",
    },
    about: {
      title: "About Me",
      intro1:
        "Passionate about innovation and creating technological solutions, I use my full-stack development expertise to bring ambitious projects to life. My academic background in Software Engineering and practical experiences have shaped a holistic vision of development, combining technical rigor and creativity.",
      intro2:
        "I enjoy tackling complex challenges and transforming ideas into high-performance applications. My approach combines Agile methodology, best coding practices, and continuous tech watch to deliver modern and effective solutions.",
      education: "Education & Certifications",
      certifications: "Obtained certifications:",
      degree: "Bachelor's in Software Engineering and IS",
      institution: "International Institute of Technology",
      graduated: "Degree obtained with honors",
      interests: "Interests",
      softSkills: "Soft Skills",
      languages: "Languages",
      native: "Native language",
      level: "Level B2",
      proficiency: "Language proficiency",
    },
    experience: {
      title: "Professional Experience",
      description:
        "My professional journey reflects my passion for innovation and commitment to solving technical challenges. Each experience strengthened my expertise and vision of modern development.",
      technologies: "Technologies used:",
      keyPoints: [
        "Full Stack Development",
        "Modern Architecture",
        "Agile Methodology",
        "Team Collaboration",
      ],
      stats: {
        years: "Years of experience",
        projects: "Projects completed",
        technologies: "Technologies mastered",
        satisfaction: "Satisfaction",
      },
    },
    projects: {
      title: "My Projects",
      description:
        "I transform concepts into functional solutions. Each project represents an innovative technical solution, combining modern design and optimal performance.",
      stats: {
        completed: "Projects completed",
        functional: "Functional",
        satisfaction: "Client satisfaction",
      },
      project1: {
        title: "E-commerce Application",
        description:
          "Full e-commerce platform with shopping cart, secure payment system, admin dashboard, and real-time user management.",
        stack: "Tech stack:",
        features: ["Secure authentication", "Responsive interface", "Online payments"],
      },
      project2: {
        title: "MOGAMES",
        description:
          "Collection of educational and entertaining games built with modern web technologies for an immersive user experience.",
        technologies: "Technologies:",
        features: ["Playful interface", "Responsive design", "Smooth animations"],
      },
      project3: {
        title: "Medical System",
        description:
          "Secure application for issuing and tracking electronic medical prescriptions with data encryption and advanced authentication.",
        technologies: "Technologies:",
        features: ["HIPAA security", "Data encryption", "Intuitive interface"],
      },
      cta: {
        title: "Have a project in mind?",
        description:
          "I am always open to new challenges and collaborations. Let's discuss your idea and explore how I can help bring it to life.",
        button: "Let's discuss your project",
        github: "More projects on",
        active: "Active projects",
      },
    },
    skills: {
      title: "My Skills",
      description:
        "I master a complete range of modern technologies, from frontend to backend development, including databases and DevOps tools. My approach combines technical rigor and creativity to build innovative solutions.",
      categories: {
        programming: "Languages & Programming",
        frameworks: "Frameworks & Libraries",
        databases: "Databases",
        devops: "Tools & DevOps",
        design: "Graphics & Multimedia",
        softSkills: "Cross-functional Skills",
      },
      skillLevels: {
        beginner: "Beginner",
        intermediate: "Intermediate",
        advanced: "Advanced",
        expert: "Expert",
      },
      overall: "Overall skill level",
      radar: "Skills Radar",
    },
    techWatch: {
      title: "Technology Watch",
      description:
        "I keep an active watch on emerging technologies to anticipate market trends and integrate best practices. My process includes monitoring new versions, studying innovative use cases, and testing promising tools.",
      process: {
        surveillance: "Surveillance",
        analysis: "Analysis",
        experimentation: "Experimentation",
        integration: "Integration",
      },
      categories: {
        ai: "Artificial Intelligence",
        cloud: "Cloud Computing",
        blockchain: "Web 3.0 & Blockchain",
        devops: "DevOps & CI/CD",
        mobile: "Mobile & PWA",
        security: "Cybersecurity",
      },
    },
    contact: {
      title: "Let's Work Together",
      description:
        "Have an exciting project in mind? I am available to discuss ideas, collaborate on technical challenges, or join your team. Feel free to reach out!",
      available: "Available immediately",
      response: "Response within 24h",
      email: "For detailed discussions and collaborations",
      phone: "For direct and urgent communication",
      location: "Geographical area and travel",
      workOptions: ["On-site", "Hybrid", "Full Remote", "Freelance"],
      linkedin: "Connect on LinkedIn",
      github: "Discover my GitHub projects",
      download: "Download my complete CV",
      finalCta: "Ready to collaborate?",
    },
    footer: {
      description:
        "Passionate about innovation and building high-performance technological solutions. Always looking for new challenges and opportunities.",
      navigation: "Navigation",
      quickLinks: "Quick Links",
      connect: "Let's Connect",
      newsletter: "For portfolio updates",
      rights: "All rights reserved",
      builtWith: "Built with",
      thanks: "Thank you for your visit!",
    },

    // 🔥 Ajout pour le sélecteur de langue
    languages: {
      fr: "French",
      en: "English",
    },
  },
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const [language, setLanguage] = useState<"fr" | "en">("fr");
  const [isTranslating, setIsTranslating] = useState(false);

  const t = translations[language];

  // Fonction pour changer de langue avec animation
  const toggleLanguage = () => {
    setIsTranslating(true);
    setTimeout(() => {
      setLanguage((prev) => (prev === "fr" ? "en" : "fr"));
      setIsTranslating(false);
    }, 300);
  };

  // Fonction pour télécharger le CV
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV_Feki_Mohamed.pdf';
    link.download = language === 'fr' ? 'CV_Mohamed_Feki.pdf' : 'CV_Mohamed_Feki_English.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Navigation items with creative dynamic icons
  const navItems = [
    { 
      id: 'accueil', 
      label: t.nav.home, 
      icon: '🏠',
      color: 'from-blue-400 to-cyan-400',
      animation: 'animate-float'
    },
    { 
      id: 'profil', 
      label: t.nav.about, 
      icon: '👤',
      color: 'from-purple-400 to-pink-400',
      animation: 'animate-pulse'
    },
    { 
      id: 'experiences', 
      label: t.nav.experience, 
      icon: '💼',
      color: 'from-green-400 to-emerald-400',
      animation: 'animate-bounce-slow'
    },
    { 
      id: 'projets', 
      label: t.nav.projects, 
      icon: '📁',
      color: 'from-yellow-400 to-orange-400',
      animation: 'animate-spin-slow'
    },
    { 
      id: 'compétences', 
      label: t.nav.skills, 
      icon: '⚙️',
      color: 'from-red-400 to-rose-400',
      animation: 'animate-ping-slow'
    },
    { 
      id: 'veille', 
      label: t.nav.techWatch, 
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
      title: language === 'fr' ? "Application E-commerce Full Stack" : "Full Stack E-commerce Application",
      description: t.projects.project1.description,
      tech: ["Spring Boot", "React", "Java", "MySQL"],
      link: "#",
      github: "#",
      date: "2024",
      icon: "🛒"
    },
    {
      title: language === 'fr' ? "Système de Prescriptions Médicales" : "Medical Prescription System",
      description: t.projects.project3.description,
      tech: ["ASP.NET Core", "C#", "SQL Server", "Entity Framework"],
      link: "#",
      github: "#",
      date: "2024",
      icon: "🏥"
    },
    {
      title: "MOGAMES",
      description: t.projects.project2.description,
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
      position: language === 'fr' ? "Stage de fin d'études" : "End of Studies Internship",
      period: language === 'fr' ? "Fév 2025 - Juin 2025" : "Feb 2025 - Jun 2025",
      description: language === 'fr' ? "Développement d'application web/mobile pour la gestion optimisée des livraisons" : "Development of web/mobile application for optimized delivery management",
      tech: ["ASP.NET Core", "Vue.js", ".NET MAUI", "SignalR"],
      location: "Sfax, Tunisie",
      logo: "🏢"
    },
    {
      company: "Institut International de Technologie",
      position: language === 'fr' ? "Stage Développement Web" : "Web Development Internship",
      period: language === 'fr' ? "Juillet 2024 - Août 2024" : "July 2024 - Aug 2024",
      description: language === 'fr' ? "Développement d'application web pour la gestion des rapports de stage" : "Development of web application for internship report management",
      tech: ["PHP", "MySQL", "Laragon", "Bootstrap"],
      location: "Sfax, Tunisie",
      logo: "🎓"
    }
  ];

  const skills = [
    { 
      category: t.skills.categories.programming, 
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
      category: t.skills.categories.frameworks, 
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
      category: t.skills.categories.databases, 
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
    { name: language === 'fr' ? "Communication" : "Communication", icon: <Users size={20} />, level: 90 },
    { name: language === 'fr' ? "Travail d'équipe" : "Teamwork", icon: <Users size={20} />, level: 95 },
    { name: language === 'fr' ? "Gestion du temps" : "Time Management", icon: <Clock size={20} />, level: 85 },
    { name: language === 'fr' ? "Résolution problèmes" : "Problem Solving", icon: <Target size={20} />, level: 90 },
    { name: language === 'fr' ? "Adaptabilité" : "Adaptability", icon: <Brain size={20} />, level: 95 },
    { name: language === 'fr' ? "Leadership" : "Leadership", icon: <Zap size={20} />, level: 80 }
  ];

  const languages = [
  { name: language === 'fr' ? "Arabe" : "Arabic", level: language === 'fr' ? "Langue maternelle" : "Native", percentage: 100 },
  { name: language === 'fr' ? "Français" : "French", level: "B2", percentage: 75 },
  { name: language === 'fr' ? "Anglais" : "English", level: "B2", percentage: 75 }
];

  const certifications = [
    { title: language === 'fr' ? "Certification Scrum" : "Scrum Certification", date: "Mai 2024", issuer: "OpenClassrooms", icon: "📋" },
    { title: language === 'fr' ? "Marketing Digital" : "Digital Marketing", date: "Mai 2024", issuer: "Google", icon: "📈" },
    { title: language === 'fr' ? "Développement Web" : "Web Development", date: "Mars 2022", issuer: "CSF", icon: "🌐" },
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
      name: language === 'fr' ? "Technologie & Innovation" : "Technology & Innovation", 
      icon: <Zap className="text-blue-400" />,
      color: "from-blue-400 to-cyan-400"
    },
    { 
      name: language === 'fr' ? "Jeux Vidéo" : "Video Games", 
      icon: <Gamepad2 className="text-purple-400" />,
      color: "from-purple-400 to-pink-400"
    },
    { 
      name: language === 'fr' ? "Sports" : "Sports", 
      icon: <Trophy className="text-green-400" />,
      color: "from-green-400 to-emerald-400"
    },
    { 
      name: language === 'fr' ? "Café & Code" : "Coffee & Code", 
      icon: <Coffee className="text-orange-400" />,
      color: "from-orange-400 to-yellow-400"
    }
  ];

  return (
   <div className={`min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 transition-opacity duration-300 ${isTranslating ? 'opacity-50' : 'opacity-100'}`}>
 
  {/* Navigation  */}
  <nav className="fixed w-full bg-gray-900/90 backdrop-blur-xl z-40 border-b border-gray-700/50 shadow-lg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center justify-between py-3">

        {/* Logo Section */}
        <div className="flex items-center gap-4 mb-3 lg:mb-0 w-full lg:w-auto justify-center lg:justify-start">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg transition-transform duration-500 hover:scale-110">
              <span className="text-white font-bold text-lg">MF</span>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <h1 className="text-xl font-bold text-white tracking-wide">MOHAMED</h1>
            <p className="text-xs text-gray-300 font-medium tracking-wider">FULL STACK DEVELOPER</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-2 bg-gray-800/60 backdrop-blur-sm rounded-full px-2 py-1 border border-gray-700/50">
          {navItems.map(item => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700/30'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Boutons droite - AVEC TRADUCTION */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Bouton Traduction - Intégré dans la navigation */}
          <button
            onClick={toggleLanguage}
            className="relative group"
            title={language === 'fr' ? 'Switch to English' : 'Passer au Français'}
            disabled={isTranslating}
          >
            {/* Effet de halo */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            
            {/* Bouton principal */}
            <div className={`relative flex items-center gap-2 px-3 py-2 bg-gray-800/70 backdrop-blur-sm text-gray-300 rounded-xl font-medium border border-gray-700/50 hover:border-blue-500/50 hover:text-white transition-all duration-300 group-hover:scale-105 ${isTranslating ? 'opacity-50 cursor-not-allowed' : ''}`}>
              {/* Icône Globe */}
              <div className="relative">
                <GlobeIcon size={18} className="text-blue-400 group-hover:text-cyan-400 transition-colors" />
                {/* Badge de langue */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-[8px] font-bold text-white">
                    {language === 'fr' ? 'FR' : 'EN'}
                  </span>
                </div>
              </div>
              
              {/* Texte */}
              <span className="text-sm font-medium">
                {language === 'fr' ? 'FR' : 'EN'}
              </span>
              
              {/* Flèche animée */}
              <ChevronRight size={14} className="text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
            </div>
            
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900/90 backdrop-blur-sm text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl">
              {language === 'fr' ? 'Switch to English' : 'Passer au Français'}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900/90 rotate-45"></div>
            </div>
          </button>

          {/* Bouton Contact */}
          <a
            href="#contact"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <Mail size={16} />
            {t.hero.contact}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-lg hover:bg-gray-800/50 transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} className="text-blue-400" /> : <Menu size={24} className="text-gray-300" />}
        </button>
      </div>
    </div>

    {/* Mobile Menu */}
    {isMenuOpen && (
      <div className="lg:hidden bg-gray-800/95 backdrop-blur-xl border-t border-gray-700/50">
        {/* Bouton traduction mobile */}
        <div className="px-4 py-3 border-b border-gray-700/50">
          <button
            onClick={toggleLanguage}
            className="flex items-center justify-between w-full p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all group"
            disabled={isTranslating}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <GlobeIcon size={20} className="text-blue-400" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-[8px] font-bold text-white">
                    {language === 'fr' ? 'FR' : 'EN'}
                  </span>
                </div>
              </div>
              <span className="text-gray-300 font-medium">
                {language === 'fr' ? 'Français' : 'English'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-blue-300 font-medium">
                {language === 'fr' ? 'FR' : 'EN'}
              </span>
              <ChevronRight size={14} className="text-gray-500 group-hover:text-blue-400 transition-colors" />
            </div>
          </button>
        </div>
        
        <div className="px-4 py-3 flex flex-col gap-2">
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`flex items-center gap-3 py-3 px-4 rounded-lg font-medium transition ${
                activeSection === item.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            <Mail size={16} />
            {t.hero.contact}
          </a>
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
                  <span className="text-sm text-gray-300">{t.hero.available}</span>
                </div>
                
                <h1 className="text-5xl sm:text-7xl font-bold text-white mb-4 leading-tight">
                  <span className="block">MOHAMED</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient">
                    FEKI
                  </span>
                </h1>
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                  <span className="text-lg font-semibold text-gray-300">{t.hero.developer}</span>
                  <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                </div>
                
                <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                  {t.hero.description}
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
                    <span>{t.hero.viewProjects}</span>
                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </a>
                
                <button
                  onClick={handleDownloadCV}
                  className="relative px-8 py-3.5 bg-gray-800/50 backdrop-blur-sm text-gray-300 rounded-lg border border-gray-700 font-medium flex items-center gap-2 hover:border-blue-500 hover:text-blue-400 transition-all duration-300 group"
                >
                  <Download size={18} className="group-hover:animate-bounce" />
                  <span>{t.hero.downloadCV}</span>
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
                <span className="text-sm text-gray-300">{language === 'fr' ? 'Ans Exp.' : 'Years Exp.'}</span>
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
                    <p className="text-sm text-gray-300 text-center">{t.hero.developer}</p>
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
                      <p className="text-sm text-gray-400">{t.hero.phone}</p>
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
                      <p className="text-sm text-gray-400">{t.hero.location}</p>
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
                {language === 'fr' ? 'À ' : ''}<span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text animate-gradient">{t.about.title}</span>
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
                      {t.about.intro1}
                    </p>
                  </div>
                  
                  <div className="mt-6 flex items-start gap-4">
                    <div className="mt-1">
                      <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse delay-300"></div>
                    </div>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {t.about.intro2}
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
                        {t.about.education}
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
                            {t.about.degree}
                          </h4>
                          <p className="text-gray-400 mt-2">{t.about.institution}</p>
                          <div className="flex items-center gap-2 mt-3">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm text-green-400 font-medium">{t.about.graduated}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Liste des certifications avec animation */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-300 mb-4">{t.about.certifications}</h4>
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
                        {t.about.interests}
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
                        {t.about.softSkills}
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
                        <span className="text-gray-400">{language === 'fr' ? 'Niveau de maîtrise' : 'Proficiency level'}</span>
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
                          {t.about.languages}
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
                      <span className="text-sm text-gray-400">{t.about.proficiency}</span>
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
              {t.experience.title}
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
                    {t.experience.description}
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
                              <h4 className="text-xl font-bold text-gray-300">{t.experience.technologies}</h4>
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
                                <span className="text-gray-300 font-medium">{t.experience.keyPoints[0]}</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse delay-200"></div>
                                <span className="text-gray-300 font-medium">{t.experience.keyPoints[1]}</span>
                              </div>
                            </div>
                            <div className="space-y-3">
                              <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse delay-400"></div>
                                <span className="text-gray-300 font-medium">{t.experience.keyPoints[2]}</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse delay-600"></div>
                                <span className="text-gray-300 font-medium">{t.experience.keyPoints[3]}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Barre de progression animée */}
                        <div className="px-8 pb-8">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-sm text-gray-400">{language === 'fr' ? 'Niveau d\'implication' : 'Involvement level'}</span>
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
              { value: "2+", label: t.experience.stats.years, color: "from-blue-400 to-cyan-400" },
              { value: "10+", label: t.experience.stats.projects, color: "from-purple-400 to-pink-400" },
              { value: "15+", label: t.experience.stats.technologies, color: "from-green-400 to-emerald-400" },
              { value: "100%", label: t.experience.stats.satisfaction, color: "from-yellow-400 to-orange-400" },
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

      {/* Projets Section - DESIGN CRÉATIF ET DYNAMIQUE */}
      <section id="projets" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Arrière-plan animé */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/10 via-purple-900/10 to-cyan-900/10"></div>
        
        {/* Éléments de fond décoratifs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Grid de particules */}
        <div className="absolute inset-0">
          {[...Array(16)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"
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
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center relative mb-10">
              {/* Animation de halo */}
              <div className="absolute -inset-12">
                <div className="absolute inset-0 border-2 border-blue-500/20 rounded-full animate-ping"></div>
                <div className="absolute inset-4 border-2 border-purple-500/20 rounded-full animate-ping delay-300"></div>
                <div className="absolute inset-8 border-2 border-cyan-500/20 rounded-full animate-ping delay-600"></div>
              </div>
              
              {/* Icône centrale interactive */}
              <div className="relative">
                <div className="absolute -inset-8 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full blur-2xl opacity-20 animate-pulse-glow"></div>
                
                <div className="relative p-6 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-3xl border border-blue-500/30 group hover:border-purple-500/50 transition-all duration-500">
                  <Folder size={52} className="text-blue-400 group-hover:text-purple-400 transition-colors duration-300" />
                  
                  {/* Animation de dossier qui s'ouvre */}
                  <div className="absolute -top-3 -right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center animate-pulse">
                      <ExternalLink size={16} className="text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Points orbitaux */}
                <div className="absolute -inset-6">
                  {[...Array(6)].map((_, i) => (
                    <div 
                      key={i}
                      className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-70 transition-opacity"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `rotate(${i * 60}deg) translateX(48px) rotate(-${i * 60}deg)`,
                        animation: `orbit 3s linear infinite ${i * 0.2}s`,
                        animationPlayState: 'paused'
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {t.projects.title}
            </h2>
            
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-150"></div>
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse delay-300"></div>
              </div>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent to-purple-500 rounded-full"></div>
            </div>
            
            {/* Introduction créative */}
            <div className="max-w-3xl mx-auto mb-16">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-2xl blur-xl opacity-50"></div>
                
                <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/4">
                      <div className="inline-flex items-center gap-3 p-4 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-xl border border-blue-500/30">
                        <Layers size={28} className="text-blue-400 animate-float-slow" />
                        <span className="text-blue-300 font-semibold">{language === 'fr' ? 'Réalisations concrètes' : 'Concrete achievements'}</span>
                      </div>
                    </div>
                    
                    <div className="md:w-3/4">
                      <p className="text-lg text-gray-300 leading-relaxed">
                        {t.projects.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Statistiques */}
                  <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-blue-500/20">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400 mb-2">10+</div>
                      <div className="text-sm text-gray-400">{t.projects.stats.completed}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400 mb-2">100%</div>
                      <div className="text-sm text-gray-400">{t.projects.stats.functional}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">95%</div>
                      <div className="text-sm text-gray-400">{t.projects.stats.satisfaction}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Grille des projets */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Projet 1: PROJET */}
            <div className="relative group" data-project="projet">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-600/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 group-hover:scale-[1.02] overflow-hidden">
                {/* En-tête du projet avec gradient */}
                <div className="h-56 relative overflow-hidden">
                  {/* Gradient animé */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-cyan-900/30 animate-gradient"></div>
                  
                  {/* Effet de particules */}
                  <div className="absolute inset-0">
                    {[...Array(8)].map((_, i) => (
                      <div 
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-float"
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          animationDelay: `${i * 0.3}s`,
                          animationDuration: `${3 + Math.random() * 2}s`
                        }}
                      ></div>
                    ))}
                  </div>
                  
                  {/* Badge de date */}
                  <div className="absolute top-4 right-4">
                    <div className="relative">
                      <div className="absolute -inset-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-20 animate-pulse"></div>
                      <span className="relative bg-gray-900/90 backdrop-blur-sm text-blue-300 text-xs font-bold px-4 py-2 rounded-full border border-blue-500/30">
                        {projects[0]?.date || "2024"}
                      </span>
                    </div>
                  </div>
                  
                  {/* Icône et titre */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-20"></div>
                        <div className="relative text-4xl">🛒</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-1">{projects[0].title}</h3>
                        <p className="text-sm text-blue-300">{language === 'fr' ? 'Plateforme complète Full Stack' : 'Complete Full Stack Platform'}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Contenu du projet */}
                <div className="p-6">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {projects[0].description}
                  </p>
                  
                  {/* Technologies utilisées */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Code2 size={20} className="text-cyan-400" />
                      <h4 className="text-lg font-semibold text-gray-300">{t.projects.project1.stack}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["Spring Boot", "React", "Java", "MySQL", "REST API", "JWT"].map((tech, i) => (
                        <div key={i} className="relative group/tech">
                          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg blur opacity-0 group-hover/tech:opacity-100 transition-opacity"></div>
                          <span className="relative px-3 py-1.5 bg-gray-900/50 text-blue-300 text-xs rounded-lg border border-blue-500/30 group-hover/tech:border-cyan-500/50 group-hover/tech:text-cyan-300 transition-all duration-300">
                            {tech}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Points clés */}
                  <div className="space-y-3 mb-6">
                    {t.projects.project1.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse" style={{ animationDelay: `${index * 200}ms` }}></div>
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Boutons d'action */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-700/50">
                    <a 
                      href="https://mohamedfeki414.github.io/PROJET/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group/link"
                    >
                      <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg blur opacity-0 group-hover/link:opacity-100 transition-opacity"></div>
                      <div className="relative flex items-center gap-2 text-blue-400 hover:text-cyan-300 font-semibold text-sm transition-colors">
                        <span>{language === 'fr' ? 'Voir la démo live' : 'View live demo'}</span>
                        <ExternalLink size={16} className="group-hover/link:translate-x-1 group-hover/link:rotate-12 transition-all" />
                      </div>
                    </a>
                    
                    <a 
                      href="https://github.com/mohamedfeki414/PROJET"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group/github"
                    >
                      <div className="absolute -inset-2 bg-gray-800/50 rounded-full blur opacity-0 group-hover/github:opacity-100 transition-opacity"></div>
                      <div className="relative p-2 rounded-lg bg-gray-900/30 text-gray-400 hover:text-white hover:bg-gray-800/50 transition-all duration-300 group-hover/github:scale-110">
                        <Github size={18} />
                      </div>
                    </a>
                  </div>
                </div>
                
                {/* Éléments décoratifs */}
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-6 h-6 border-2 border-blue-500/30 rounded-full animate-spin-slow"></div>
                </div>
              </div>
            </div>

            {/* Projet 2: MOGAMES */}
            <div className="relative group" data-project="mogames">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-600/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 group-hover:scale-[1.02] overflow-hidden">
                <div className="h-56 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-pink-900/30 to-rose-900/30 animate-gradient" style={{ animationDuration: '4s' }}></div>
                  
                  {/* Effet de jeu */}
                  <div className="absolute inset-0">
                    {[...Array(6)].map((_, i) => (
                      <div 
                        key={i}
                        className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-30 animate-float"
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          animationDelay: `${i * 0.4}s`,
                          animationDuration: `${2 + Math.random() * 2}s`
                        }}
                      ></div>
                    ))}
                  </div>
                  
                  <div className="absolute top-4 right-4">
                    <div className="relative">
                      <div className="absolute -inset-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-20 animate-pulse delay-300"></div>
                      <span className="relative bg-gray-900/90 backdrop-blur-sm text-purple-300 text-xs font-bold px-4 py-2 rounded-full border border-purple-500/30">
                        {projects[1]?.date || "2024"}
                      </span>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-20"></div>
                        <div className="relative text-4xl">🎮</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-1">{projects[1].title}</h3>
                        <p className="text-sm text-purple-300">{language === 'fr' ? 'Plateforme de jeux interactifs' : 'Interactive games platform'}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {projects[1].description}
                  </p>
                  
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Gamepad2 size={20} className="text-pink-400" />
                      <h4 className="text-lg font-semibold text-gray-300">{t.projects.project2.technologies}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["JavaScript", "HTML5", "CSS3", "Canvas API", "Web Audio", "Animations"].map((tech, i) => (
                        <div key={i} className="relative group/tech">
                          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg blur opacity-0 group-hover/tech:opacity-100 transition-opacity"></div>
                          <span className="relative px-3 py-1.5 bg-gray-900/50 text-purple-300 text-xs rounded-lg border border-purple-500/30 group-hover/tech:border-pink-500/50 group-hover/tech:text-pink-300 transition-all duration-300">
                            {tech}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {t.projects.project2.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse" style={{ animationDelay: `${index * 200}ms` }}></div>
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-gray-700/50">
                    <a 
                      href="https://mohamedfeki414.github.io/MOGAMES/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group/link"
                    >
                      <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg blur opacity-0 group-hover/link:opacity-100 transition-opacity"></div>
                      <div className="relative flex items-center gap-2 text-purple-400 hover:text-pink-300 font-semibold text-sm transition-colors">
                        <span>{language === 'fr' ? 'Jouer maintenant' : 'Play now'}</span>
                        <ExternalLink size={16} className="group-hover/link:translate-x-1 group-hover/link:rotate-12 transition-all" />
                      </div>
                    </a>
                    
                    <a 
                      href="https://github.com/mohamedfeki414/MOGAMES"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group/github"
                    >
                      <div className="absolute -inset-2 bg-gray-800/50 rounded-full blur opacity-0 group-hover/github:opacity-100 transition-opacity"></div>
                      <div className="relative p-2 rounded-lg bg-gray-900/30 text-gray-400 hover:text-white hover:bg-gray-800/50 transition-all duration-300 group-hover/github:scale-110">
                        <Github size={18} />
                      </div>
                    </a>
                  </div>
                </div>
                
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                  <div className="w-6 h-6 border-2 border-purple-500/30 rounded-full animate-spin-slow reverse"></div>
                </div>
              </div>
            </div>

            {/* Projet 3: Système Médical */}
            <div className="relative group" data-project="medical">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-green-600/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-green-500/50 transition-all duration-500 group-hover:scale-[1.02] overflow-hidden">
                <div className="h-56 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-emerald-900/30 to-teal-900/30 animate-gradient" style={{ animationDuration: '5s' }}></div>
                  
                  {/* Effet médical */}
                  <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-8 h-8 border-2 border-green-500/30 rounded-full animate-ping"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-6 h-6 border-2 border-emerald-500/30 rounded-full animate-ping delay-300"></div>
                  </div>
                  
                  <div className="absolute top-4 right-4">
                    <div className="relative">
                      <div className="absolute -inset-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur opacity-20 animate-pulse delay-600"></div>
                      <span className="relative bg-gray-900/90 backdrop-blur-sm text-green-300 text-xs font-bold px-4 py-2 rounded-full border border-green-500/30">
                        {projects[2]?.date || "2024"}
                      </span>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur opacity-20"></div>
                        <div className="relative text-4xl">🏥</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-1">{projects[2].title}</h3>
                        <p className="text-sm text-green-300">{language === 'fr' ? 'Gestion de prescriptions' : 'Prescription management'}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {projects[2].description}
                  </p>
                  
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Database size={20} className="text-emerald-400" />
                      <h4 className="text-lg font-semibold text-gray-300">{t.projects.project3.technologies}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["ASP.NET Core", "C#", "SQL Server", "Entity Framework", "React", "JWT"].map((tech, i) => (
                        <div key={i} className="relative group/tech">
                          <div className="absolute -inset-1 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg blur opacity-0 group-hover/tech:opacity-100 transition-opacity"></div>
                          <span className="relative px-3 py-1.5 bg-gray-900/50 text-green-300 text-xs rounded-lg border border-green-500/30 group-hover/tech:border-emerald-500/50 group-hover/tech:text-emerald-300 transition-all duration-300">
                            {tech}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {t.projects.project3.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse" style={{ animationDelay: `${index * 200}ms` }}></div>
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-gray-700/50">
                    <a 
                      href="#"
                      className="relative group/link"
                    >
                      <div className="absolute -inset-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg blur opacity-0 group-hover/link:opacity-100 transition-opacity"></div>
                      <div className="relative flex items-center gap-2 text-green-400 hover:text-emerald-300 font-semibold text-sm transition-colors">
                        <span>{language === 'fr' ? 'Détails du projet' : 'Project details'}</span>
                        <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                      </div>
                    </a>
                    
                    <a 
                      href="#"
                      className="relative group/github"
                    >
                      <div className="absolute -inset-2 bg-gray-800/50 rounded-full blur opacity-0 group-hover/github:opacity-100 transition-opacity"></div>
                      <div className="relative p-2 rounded-lg bg-gray-900/30 text-gray-400 hover:text-white hover:bg-gray-800/50 transition-all duration-300 group-hover/github:scale-110">
                        <Github size={18} />
                      </div>
                    </a>
                  </div>
                </div>
                
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-600">
                  <div className="w-6 h-6 border-2 border-green-500/30 rounded-full animate-spin-slow"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA pour plus de projets */}
          <div className="mt-20 text-center">
            <div className="relative inline-block">
              <div className="absolute -inset-6 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-3xl blur-xl"></div>
              
              <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
                <h3 className="text-3xl font-bold text-white mb-4">
                  {t.projects.cta.title}
                </h3>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  {t.projects.cta.description}
                </p>
                
                <a 
                  href="#contact"
                  className="relative group inline-flex"
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
                  
                  <div className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold flex items-center gap-3 group-hover:from-blue-700 group-hover:to-purple-700 transition-all duration-500 group-hover:scale-105">
                    <span>{t.projects.cta.button}</span>
                    <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    
                    {/* Animation */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full animate-ping"></div>
                  </div>
                </a>
              </div>
            </div>
            
            {/* Indicateur GitHub */}
            <div className="mt-12 flex items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <Github size={20} className="text-gray-400" />
                <span className="text-gray-400">{t.projects.cta.github}</span>
                <a 
                  href="https://github.com/mohamedfeki414"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-purple-400 font-semibold transition-colors"
                >
                  GitHub
                </a>
              </div>
              
              <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
              
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-400">{t.projects.cta.active}</span>
              </div>
            </div>
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
              {t.skills.title}
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
                        <span className="text-gray-300 font-semibold">{language === 'fr' ? 'Expertise polyvalente' : 'Versatile expertise'}</span>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <p className="text-lg text-gray-300 leading-relaxed">
                        {t.skills.description}
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
                      {t.skills.categories.programming}
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
                      {t.skills.categories.frameworks}
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
                          {skill.level >= 90 ? t.skills.skillLevels.expert : skill.level >= 75 ? t.skills.skillLevels.advanced : t.skills.skillLevels.intermediate}
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
                      {t.skills.categories.databases}
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
                              {skill.name === "MySQL" ? (language === 'fr' ? "Relationnel" : "Relational") : "NoSQL"}
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
                            <div className="text-sm text-gray-400">{language === 'fr' ? 'maîtrise' : 'mastery'}</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Points forts */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse"></div>
                          <span className="text-sm text-gray-300">{language === 'fr' ? 'Requêtes complexes' : 'Complex queries'}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse delay-200"></div>
                          <span className="text-sm text-gray-300">{language === 'fr' ? 'Optimisation' : 'Optimization'}</span>
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
                      {t.skills.categories.devops}
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
                      {t.skills.categories.design}
                    </h3>
                  </div>
                  <div className="w-full h-0.5 bg-gradient-to-r from-purple-400/30 to-violet-400/30 rounded-full"></div>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4">
                    {[
                      { name: language === 'fr' ? "Adobe Suite" : "Adobe Suite", level: 85, tools: ["Photoshop", "Illustrator", "Premiere"] },
                      { name: language === 'fr' ? "Montage multimédia" : "Multimedia Editing", level: 80, tools: ["Audio", "Vidéo", "Effets"] },
                      { name: "Figma", level: 88, tools: ["UI/UX", "Prototypage", "Design"] },
                      { name: language === 'fr' ? "Vidéo professionnelle" : "Professional Video", level: 75, tools: ["Tournage", "Éclairage", "Cadrage"] },
                      { name: language === 'fr' ? "Édition vidéo" : "Video Editing", level: 82, tools: ["After Effects", "Premiere Pro", "Effets"] },
                      { name: language === 'fr' ? "Anglais technique" : "Technical English", level: 78, tools: ["Documentation", "Communication", "Recherche"] },
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
                      {t.skills.categories.softSkills}
                    </h3>
                  </div>
                  <div className="w-full h-0.5 bg-gradient-to-r from-cyan-400/30 to-teal-400/30 rounded-full"></div>
                </div>
                
                <div className="p-6">
                  {[
                    { name: language === 'fr' ? "Travail d'équipe" : "Teamwork", level: 95, description: language === 'fr' ? "Collaboration efficace" : "Effective collaboration" },
                    { name: language === 'fr' ? "Communication" : "Communication", level: 90, description: language === 'fr' ? "Clarté et précision" : "Clarity and precision" },
                    { name: language === 'fr' ? "Gestion de projet" : "Project Management", level: 85, description: language === 'fr' ? "Organisation Agile" : "Agile organization" },
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
                          <div className="text-xs text-gray-400">{language === 'fr' ? 'compétence' : 'skill'}</div>
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
                  {t.skills.radar}
                </span>
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { category: t.skills.categories.programming, level: 88, color: "blue", skills: 7 },
                  { category: t.skills.categories.frameworks, level: 85, color: "green", skills: 5 },
                  { category: t.skills.categories.databases, level: 83, color: "yellow", skills: 2 },
                  { category: t.skills.categories.devops, level: 77, color: "red", skills: 4 },
                  { category: t.skills.categories.design, level: 81, color: "purple", skills: 6 },
                  { category: t.skills.categories.softSkills, level: 90, color: "cyan", skills: 3 },
                ].map((item, index) => (
                  <div key={index} className="relative group">
                    <div className="bg-gray-900/40 p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group-hover:scale-105">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full bg-${item.color}-400 animate-pulse`}></div>
                          <span className="text-gray-300 font-semibold">{item.category}</span>
                        </div>
                        <span className="text-sm text-gray-400">{item.skills} {language === 'fr' ? 'comp.' : 'skills'}</span>
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
                        <div className="text-sm text-gray-400">{language === 'fr' ? 'Niveau moyen' : 'Average level'}</div>
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
                      {language === 'fr' ? 'Échelle de Maîtrise' : 'Mastery Scale'}
                    </span>
                  </h4>
                  <p className="text-gray-300 max-w-md">
                    {language === 'fr' 
                      ? 'Les pourcentages reflètent ma confiance et mon expertise pratique dans chaque technologie, basée sur des projets réels et une formation continue.'
                      : 'Percentages reflect my confidence and practical expertise in each technology, based on real projects and continuous training.'}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { level: t.skills.skillLevels.beginner, range: "0-60%", color: "from-blue-400 to-cyan-400", icon: "🌱" },
                    { level: t.skills.skillLevels.intermediate, range: "61-80%", color: "from-green-400 to-emerald-400", icon: "🚀" },
                    { level: t.skills.skillLevels.advanced, range: "81-95%", color: "from-purple-400 to-violet-400", icon: "⭐" },
                    { level: t.skills.skillLevels.expert, range: "96-100%", color: "from-yellow-400 to-orange-400", icon: "🏆" },
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
                  <span className="text-gray-300 font-semibold">{t.skills.overall}</span>
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
              {t.techWatch.title}
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
                        <span className="text-cyan-300 font-semibold">{language === 'fr' ? 'Innovation continue' : 'Continuous innovation'}</span>
                      </div>
                    </div>
                    
                    <div className="md:w-3/4">
                      <p className="text-lg text-gray-300 leading-relaxed">
                        {t.techWatch.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Indicateurs de veille */}
                  <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-cyan-500/20">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">24/7</div>
                      <div className="text-sm text-gray-400">{language === 'fr' ? 'Veille continue' : 'Continuous monitoring'}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400 mb-2">50+</div>
                      <div className="text-sm text-gray-400">{language === 'fr' ? 'Sources suivies' : 'Sources tracked'}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400 mb-2">100%</div>
                      <div className="text-sm text-gray-400">{language === 'fr' ? 'À jour' : 'Up to date'}</div>
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
                        {t.techWatch.categories.ai}
                      </h3>
                    </div>
                    <div className="w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
                  </div>
                  
                  <div className="w-full h-0.5 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-full"></div>
                </div>
                
                {/* Contenu */}
                <div className="p-6">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {language === 'fr' 
                      ? 'Suivi des avancées en IA et machine learning, modèles génératifs et applications pratiques.'
                      : 'Tracking AI and machine learning advancements, generative models and practical applications.'}
                  </p>
                  
                  {/* Badges de technologies */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">{language === 'fr' ? 'Tendance actuelle' : 'Current trend'}</span>
                      <span className="text-sm font-bold text-cyan-400">🔥 {language === 'fr' ? 'Haute' : 'High'}</span>
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
                      <span className="text-sm text-gray-400">{language === 'fr' ? 'Niveau de suivi' : 'Monitoring level'}</span>
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
                        {t.techWatch.categories.cloud}
                      </h3>
                    </div>
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-ping delay-200"></div>
                  </div>
                  <div className="w-full h-0.5 bg-gradient-to-r from-blue-400/30 to-indigo-400/30 rounded-full"></div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {language === 'fr' 
                      ? 'Évolution des services cloud, serverless, conteneurisation et architectures microservices.'
                      : 'Evolution of cloud services, serverless, containerization and microservices architectures.'}
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
                        <span className="text-sm text-gray-400">{language === 'fr' ? 'Expertise cloud' : 'Cloud expertise'}</span>
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
                        {t.techWatch.categories.blockchain}
                      </h3>
                    </div>
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-ping delay-400"></div>
                  </div>
                  <div className="w-full h-0.5 bg-gradient-to-r from-purple-400/30 to-violet-400/30 rounded-full"></div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {language === 'fr' 
                      ? 'Technologies décentralisées, smart contracts, DeFi et écosystème Web3.'
                      : 'Decentralized technologies, smart contracts, DeFi and Web3 ecosystem.'}
                  </p>
                  
                  <div className="space-y-3">
                    {["Smart Contracts", "DeFi", "NFTs", "DAO", "dApps"].map((topic, i) => (
                      <div key={i} className="flex items-center gap-3 group/topic">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full animate-pulse"></div>
                        <span className="text-gray-300 flex-1">{topic}</span>
                        <div className="text-xs text-purple-400 opacity-0 group-hover/topic:opacity-100 transition-opacity">
                          → {language === 'fr' ? 'Étudié' : 'Studied'}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Indicateur d'adoption */}
                  <div className="mt-6">
                    <div className="text-sm text-gray-400">{language === 'fr' ? 'Niveau d\'intérêt' : 'Interest level'}</div>
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
                        {t.techWatch.categories.devops}
                      </h3>
                    </div>
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-ping delay-600"></div>
                  </div>
                  <div className="w-full h-0.5 bg-gradient-to-r from-green-400/30 to-emerald-400/30 rounded-full"></div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {language === 'fr' 
                      ? 'Automatisation, pratiques DevOps, pipelines CI/CD et outils d\'intégration continue.'
                      : 'Automation, DevOps practices, CI/CD pipelines and continuous integration tools.'}
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
                    <div className="text-sm text-gray-400 mb-2">{language === 'fr' ? 'Progression d\'adoption' : 'Adoption progression'}</div>
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
                        {t.techWatch.categories.mobile}
                      </h3>
                    </div>
                    <div className="w-3 h-3 bg-orange-400 rounded-full animate-ping delay-800"></div>
                  </div>
                  <div className="w-full h-0.5 bg-gradient-to-r from-orange-400/30 to-amber-400/30 rounded-full"></div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {language === 'fr' 
                      ? 'Développement mobile hybride, applications web progressives et expérience utilisateur.'
                      : 'Hybrid mobile development, progressive web applications and user experience.'}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full animate-pulse"></div>
                        <span className="text-gray-300">Flutter</span>
                      </div>
                      <span className="text-sm text-orange-400">{language === 'fr' ? 'Maîtrise' : 'Mastery'}: 70%</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full animate-pulse delay-200"></div>
                        <span className="text-gray-300">React Native</span>
                      </div>
                      <span className="text-sm text-orange-400">{language === 'fr' ? 'Maîtrise' : 'Mastery'}: 65%</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full animate-pulse delay-400"></div>
                        <span className="text-gray-300">PWA</span>
                      </div>
                      <span className="text-sm text-orange-400">{language === 'fr' ? 'Maîtrise' : 'Mastery'}: 85%</span>
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
                        {t.techWatch.categories.security}
                      </h3>
                    </div>
                    <div className="w-3 h-3 bg-red-400 rounded-full animate-ping delay-1000"></div>
                  </div>
                  <div className="w-full h-0.5 bg-gradient-to-r from-red-400/30 to-rose-400/30 rounded-full"></div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {language === 'fr' 
                      ? 'Sécurité des applications, bonnes pratiques OWASP, authentification et protection des données.'
                      : 'Application security, OWASP best practices, authentication and data protection.'}
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
                      <span className="text-sm text-gray-400">{language === 'fr' ? 'Priorité de sécurité' : 'Security priority'}</span>
                      <span className="text-lg font-bold text-red-400">⚠️ {language === 'fr' ? 'Élevée' : 'High'}</span>
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
                  {language === 'fr' ? 'Mon Processus de Veille' : 'My Monitoring Process'}
                </span>
              </h3>
              
              <div className="grid md:grid-cols-4 gap-6 relative">
                {[
                  { step: "01", title: t.techWatch.process.surveillance, desc: language === 'fr' ? 'Sources techniques et blogs' : 'Technical sources and blogs', icon: "👁️", color: "from-cyan-400 to-blue-400" },
                  { step: "02", title: t.techWatch.process.analysis, desc: language === 'fr' ? 'Évaluation des tendances' : 'Trends evaluation', icon: "📊", color: "from-blue-400 to-purple-400" },
                  { step: "03", title: t.techWatch.process.experimentation, desc: language === 'fr' ? 'Tests et prototypes' : 'Tests and prototypes', icon: "🔬", color: "from-purple-400 to-pink-400" },
                  { step: "04", title: t.techWatch.process.integration, desc: language === 'fr' ? 'Mise en pratique' : 'Practical implementation', icon: "⚡", color: "from-pink-400 to-rose-400" },
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
                    {language === 'fr' ? 'Sources Principales' : 'Main Sources'}
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

      {/* Contact Section - DESIGN CRÉATIF ET DYNAMIQUE */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Arrière-plan animé avec effet de particules */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/10 via-purple-900/10 to-pink-900/10"></div>
        
        {/* Éléments de fond décoratifs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Particules flottantes */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="max-w-6xl mx-auto relative">
          {/* En-tête créatif */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center relative mb-10">
              {/* Animation de cercle concentrique */}
              <div className="absolute -inset-12">
                <div className="absolute inset-0 border-2 border-blue-500/20 rounded-full animate-ping"></div>
                <div className="absolute inset-4 border-2 border-purple-500/20 rounded-full animate-ping delay-300"></div>
                <div className="absolute inset-8 border-2 border-pink-500/20 rounded-full animate-ping delay-600"></div>
              </div>
              
              {/* Icône centrale interactive */}
              <div className="relative">
                <div className="absolute -inset-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-20 animate-pulse-glow"></div>
                
                <div className="relative p-6 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-3xl border border-blue-500/30 group hover:border-purple-500/50 transition-all duration-500 cursor-pointer">
                  <Mail size={52} className="text-blue-400 group-hover:text-purple-400 transition-colors duration-300" />
                  
                  {/* Animation de notification */}
                  <div className="absolute -top-2 -right-2">
                    <div className="relative">
                      <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity"></div>
                      <div className="relative w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Points orbitaux */}
                <div className="absolute -inset-6">
                  {[...Array(8)].map((_, i) => (
                    <div 
                      key={i}
                      className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `rotate(${i * 45}deg) translateX(40px) rotate(-${i * 45}deg)`,
                        animation: `orbit 3s linear infinite ${i * 0.2}s`,
                        animationPlayState: 'paused'
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {t.contact.title}
            </h2>
            
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-150"></div>
                <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse delay-300"></div>
              </div>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent to-purple-500 rounded-full"></div>
            </div>
            
            {/* Message d'introduction */}
            <div className="max-w-3xl mx-auto mb-16">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-xl opacity-50"></div>
                
                <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
                  <p className="text-xl text-gray-300 text-center leading-relaxed">
                    {t.contact.description}
                  </p>
                  
                  {/* Indicateur de disponibilité */}
                  <div className="flex items-center justify-center gap-3 mt-6">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-green-400 font-medium">{t.contact.available}</span>
                    </div>
                    <div className="text-gray-500">•</div>
                    <div className="text-sm text-gray-400">{t.contact.response}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Cartes de contact créatives */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Carte Email */}
            <a
              href="mailto:medfeki33@gmail.com"
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-600/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 group-hover:scale-[1.02] overflow-hidden">
                <div className="p-8">
                  {/* Icône animée */}
                  <div className="relative inline-flex mb-6">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-20 animate-pulse"></div>
                    <div className="relative p-4 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                      <Mail size={32} className="text-cyan-400" />
                    </div>
                    
                    {/* Animation de notification */}
                    <div className="absolute -top-2 -right-2">
                      <div className="relative">
                        <div className="absolute -inset-2 bg-blue-500/30 rounded-full animate-ping"></div>
                        <div className="relative w-5 h-5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">Email</h3>
                  <p className="text-gray-400 mb-6">{t.contact.email}</p>
                  
                  {/* Adresse email avec effet */}
                  <div className="relative group/email">
                    <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl blur opacity-0 group-hover/email:opacity-100 transition-opacity"></div>
                    <div className="relative p-4 bg-gray-900/30 rounded-xl border border-gray-700/50 group-hover/email:border-cyan-500/50 transition-colors">
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-mono text-gray-300 group-hover/email:text-cyan-300 transition-colors">
                          medfeki33@gmail.com
                        </span>
                        <ChevronRight size={18} className="text-gray-500 group-hover/email:text-cyan-400 group-hover/email:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Statistique */}
                  <div className="mt-6 pt-6 border-t border-gray-700/50">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">{language === 'fr' ? 'Temps de réponse moyen' : 'Average response time'}</span>
                      <span className="text-sm font-bold text-cyan-400">2-4 {language === 'fr' ? 'heures' : 'hours'}</span>
                    </div>
                  </div>
                </div>
                
                {/* Effet de particules */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-8 h-8 border-2 border-cyan-500/30 rounded-full animate-spin-slow"></div>
                </div>
              </div>
            </a>

            {/* Carte Téléphone */}
            <a
              href="tel:+21627752903"
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 via-violet-500/10 to-purple-600/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 group-hover:scale-[1.02] overflow-hidden">
                <div className="p-8">
                  <div className="relative inline-flex mb-6">
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full blur opacity-20 animate-pulse delay-300"></div>
                    <div className="relative p-4 bg-gradient-to-br from-purple-900/30 to-violet-900/30 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                      <Smartphone size={32} className="text-purple-400" />
                    </div>
                    
                    {/* Animation d'appel */}
                    <div className="absolute -top-2 -right-2">
                      <div className="relative">
                        <div className="absolute -inset-2 bg-purple-500/30 rounded-full animate-ping delay-200"></div>
                        <div className="relative w-5 h-5 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center animate-pulse">
                          <Phone size={10} className="text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{t.hero.phone}</h3>
                  <p className="text-gray-400 mb-6">{t.contact.phone}</p>
                  
                  <div className="relative group/phone">
                    <div className="absolute -inset-3 bg-gradient-to-r from-purple-500/10 to-violet-500/10 rounded-xl blur opacity-0 group-hover/phone:opacity-100 transition-opacity"></div>
                    <div className="relative p-4 bg-gray-900/30 rounded-xl border border-gray-700/50 group-hover/phone:border-purple-500/50 transition-colors">
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-mono text-gray-300 group-hover/phone:text-purple-300 transition-colors">
                          +216 27 752 903
                        </span>
                        <ChevronRight size={18} className="text-gray-500 group-hover/phone:text-purple-400 group-hover/phone:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Disponibilité */}
                  <div className="mt-6 pt-6 border-t border-gray-700/50">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">{language === 'fr' ? 'Disponibilité' : 'Availability'}</span>
                        <span className="text-sm font-bold text-green-400">✅ {language === 'fr' ? 'Maintenant' : 'Now'}</span>
                      </div>
                      <div className="text-xs text-gray-500">{language === 'fr' ? 'Lun-Ven: 9h-18h' : 'Mon-Fri: 9am-6pm'}</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                  <div className="w-8 h-8 border-2 border-purple-500/30 rounded-full animate-spin-slow reverse"></div>
                </div>
              </div>
            </a>

            {/* Carte Localisation */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-green-600/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-green-500/50 transition-all duration-500 group-hover:scale-[1.02] overflow-hidden">
                <div className="p-8">
                  <div className="relative inline-flex mb-6">
                    <div className="absolute -inset-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur opacity-20 animate-pulse delay-600"></div>
                    <div className="relative p-4 bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                      <MapPin size={32} className="text-emerald-400" />
                    </div>
                    
                    {/* Animation de localisation */}
                    <div className="absolute -top-2 -right-2">
                      <div className="relative">
                        <div className="absolute -inset-2 bg-green-500/30 rounded-full animate-ping delay-400"></div>
                        <div className="relative w-5 h-5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{t.hero.location}</h3>
                  <p className="text-gray-400 mb-6">{t.contact.location}</p>
                  
                  <div className="relative group/location">
                    <div className="absolute -inset-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl blur opacity-0 group-hover/location:opacity-100 transition-opacity"></div>
                    <div className="relative p-4 bg-gray-900/30 rounded-xl border border-gray-700/50 group-hover/location:border-emerald-500/50 transition-colors">
                      <div className="text-center">
                        <span className="text-xl font-bold text-gray-300 group-hover/location:text-emerald-300 transition-colors">
                          Sfax, Tunisie
                        </span>
                        <div className="text-sm text-gray-500 mt-2">{language === 'fr' ? 'Disponible pour déplacement' : 'Available for travel'}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Options de travail */}
                  <div className="mt-6 pt-6 border-t border-gray-700/50">
                    <div className="grid grid-cols-2 gap-3">
                      {t.contact.workOptions.map((option, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                          <span className="text-sm text-gray-300">{option}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-600">
                  <div className="w-8 h-8 border-2 border-emerald-500/30 rounded-full animate-spin-slow"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Boutons d'action - Design amélioré */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            {/* Bouton LinkedIn */}
            <a 
              href="https://linkedin.com/in/mohamed-feki-486918309"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group w-full sm:w-auto"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
              
              <div className="relative px-10 py-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl font-medium flex items-center gap-3 justify-center group-hover:from-blue-900 group-hover:to-blue-800 transition-all duration-500 group-hover:scale-105 overflow-hidden">
                {/* Effet de brillance */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <Linkedin size={24} className="text-blue-400 group-hover:animate-bounce" />
                <span className="text-lg font-semibold text-white">{t.contact.linkedin}</span>
                
                {/* Flèche animée */}
                <ExternalLink size={18} className="text-blue-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
              
              {/* Points décoratifs */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-blue-400 rounded-full blur-sm opacity-0 group-hover:opacity-70 animate-pulse"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-blue-400 rounded-full blur-sm opacity-0 group-hover:opacity-70 animate-pulse delay-300"></div>
            </a>
            
            {/* Bouton GitHub */}
            <a 
              href="https://github.com/mohamedfeki414"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group w-full sm:w-auto"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-gray-600 to-gray-800 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
              
              <div className="relative px-10 py-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl font-medium flex items-center gap-3 justify-center group-hover:from-gray-700 group-hover:to-gray-800 transition-all duration-500 group-hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <Github size={24} className="text-gray-300 group-hover:text-white group-hover:animate-pulse-slow" />
                <span className="text-lg font-semibold text-white">{t.contact.github}</span>
                <ExternalLink size={18} className="text-gray-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </a>
          </div>
          
          {/* Bouton Télécharger CV - Design premium */}
          <div className="text-center">
            <button
              onClick={handleDownloadCV}
              className="relative group mx-auto"
            >
              <div className="absolute -inset-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-1000"></div>
              
              <div className="relative px-12 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl font-bold flex items-center gap-3 justify-center group-hover:from-blue-700 group-hover:via-purple-700 group-hover:to-pink-700 transition-all duration-500 group-hover:scale-105 overflow-hidden">
                {/* Effet de particules */}
                <div className="absolute inset-0">
                  {[...Array(8)].map((_, i) => (
                    <div 
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-40 animate-float"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.2}s`,
                        animationDuration: `${2 + Math.random() * 2}s`
                      }}
                    ></div>
                  ))}
                </div>
                
                {/* Effet de brillance */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <Download size={24} className="group-hover:animate-bounce" />
                <span className="text-xl font-semibold">{t.contact.download}</span>
                <ChevronRight size={20} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
              </div>
              
              {/* Animation autour du bouton */}
              <div className="absolute -inset-8">
                <div className="absolute inset-0 border-2 border-blue-500/30 rounded-3xl animate-ping"></div>
                <div className="absolute inset-2 border-2 border-purple-500/30 rounded-3xl animate-ping delay-200"></div>
                <div className="absolute inset-4 border-2 border-pink-500/30 rounded-3xl animate-ping delay-400"></div>
              </div>
            </button>
            
            <p className="text-gray-400 mt-6 text-sm">
              PDF {language === 'fr' ? 'détaillé' : 'detailed'} • {language === 'fr' ? 'Mis à jour régulièrement' : 'Regularly updated'} • {language === 'fr' ? 'Disponible en français' : 'Available in French'}
            </p>
          </div>
          
          {/* CTA Final */}
          <div className="mt-20 pt-12 border-t border-gray-700/50">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-6">
                {t.contact.finalCta}
              </h3>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">{t.contact.available}</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-200"></div>
                  <span className="text-gray-300">{t.contact.response}</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-400"></div>
                  <span className="text-gray-300">{language === 'fr' ? 'Première consultation gratuite' : 'First free consultation'}</span>
                </div>
              </div>
              
              {/* Message final */}
              <div className="mt-10 max-w-2xl mx-auto">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl blur-xl"></div>
                  <div className="relative bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
                    <p className="text-gray-300 text-lg">
                      {language === 'fr' 
                        ? '"Chaque grand projet commence par une simple conversation. Prenons le temps d\'échanger sur vos besoins et comment je peux vous aider à les réaliser."'
                        : '"Every great project starts with a simple conversation. Let\'s take the time to discuss your needs and how I can help you achieve them."'}
                    </p>
                    <div className="flex items-center justify-center gap-2 mt-4">
                      <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                      <span className="text-sm text-gray-400">Mohamed Feki</span>
                      <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - DESIGN CRÉATIF ET DYNAMIQUE */}
      <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900/10 to-purple-900/10 border-t border-gray-700/30 pt-16 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Arrière-plan animé */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
        
        {/* Éléments décoratifs animés */}
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Particules flottantes */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-0.5 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          {/* Section principale du footer */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Logo et description */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute -inset-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-20 animate-pulse"></div>
                  <div className="relative w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Code2 className="text-white" size={28} />
                  </div>
                  {/* Points orbitaux */}
                  <div className="absolute -inset-4">
                    {[...Array(3)].map((_, i) => (
                      <div 
                        key={i}
                        className="absolute w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-50"
                        style={{
                          top: '50%',
                          left: '50%',
                          transform: `rotate(${i * 120}deg) translateX(24px) rotate(-${i * 120}deg)`,
                          animation: `orbit 4s linear infinite ${i * 0.5}s`
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-3xl font-bold text-white tracking-tight">
                    MOHAMED <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">FEKI</span>
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-3 h-0.5 bg-blue-400 rounded-full"></div>
                    <p className="text-sm text-gray-300 font-medium">FULL STACK DEVELOPER</p>
                    <div className="w-3 h-0.5 bg-purple-400 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-400 leading-relaxed">
                {t.footer.description}
              </p>
              
              {/* Badge de disponibilité */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-full border border-blue-500/30">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-400 font-medium">{t.hero.available}</span>
              </div>
            </div>
            
            {/* Navigation rapide */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse"></div>
                {t.footer.navigation}
                <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-500/30 to-transparent rounded-full ml-3"></div>
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {navItems.map((item, index) => (
                  <a 
                    key={item.id}
                    href={`#${item.id}`}
                    className="group flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2"
                  >
                    <div className="relative">
                      <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative w-8 h-8 bg-gray-800/50 rounded-lg flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-blue-900/30 group-hover:to-purple-900/30 transition-all duration-300">
                        <span className="text-sm group-hover:scale-110 transition-transform">{item.icon}</span>
                      </div>
                    </div>
                    <span className="font-medium">{item.label}</span>
                  </a>
                ))}
              </div>
              
              {/* Bouton retour en haut */}
              <div className="mt-8">
                <a 
                  href="#accueil"
                  className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-400 transition-colors group/back"
                >
                  <div className="w-6 h-6 rounded-full border border-gray-700/50 flex items-center justify-center group-hover/back:border-blue-500/50 group-hover/back:bg-blue-900/20 transition-all">
                    <ChevronRight size={14} className="transform -rotate-90 text-gray-500 group-hover/back:text-blue-400" />
                  </div>
                  <span>{language === 'fr' ? 'Retour en haut' : 'Back to top'}</span>
                </a>
              </div>
            </div>
            
            {/* Liens rapides */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse delay-300"></div>
                {t.footer.quickLinks}
                <div className="flex-1 h-0.5 bg-gradient-to-r from-purple-500/30 to-transparent rounded-full ml-3"></div>
              </h3>
              
              <div className="space-y-4">
                {[
                  { label: language === 'fr' ? 'Mon CV complet' : 'My full CV', icon: <Download size={16} />, action: handleDownloadCV },
                  { label: language === 'fr' ? 'Projets GitHub' : 'GitHub Projects', icon: <Github size={16} />, href: "https://github.com/mohamedfeki414" },
                  { label: language === 'fr' ? 'Contact direct' : 'Direct contact', icon: <Mail size={16} />, href: "mailto:medfeki33@gmail.com" },
                  { label: language === 'fr' ? 'Portfolio' : 'Portfolio', icon: <Folder size={16} />, href: "#projets" },
                ].map((link, index) => {
                  const content = link.href ? (
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 p-3 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-all duration-300 hover:scale-[1.02]"
                    >
                      <div className="text-blue-400 group-hover:text-purple-400 transition-colors">
                        {link.icon}
                      </div>
                      <span className="text-gray-300 group-hover:text-white font-medium flex-1">
                        {link.label}
                      </span>
                      <ChevronRight size={14} className="text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                    </a>
                  ) : (
                    <button
                      onClick={link.action}
                      className="group flex items-center gap-3 p-3 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-all duration-300 hover:scale-[1.02] w-full text-left"
                    >
                      <div className="text-blue-400 group-hover:text-purple-400 transition-colors">
                        {link.icon}
                      </div>
                      <span className="text-gray-300 group-hover:text-white font-medium flex-1">
                        {link.label}
                      </span>
                      <ChevronRight size={14} className="text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                    </button>
                  );
                  
                  return <div key={index}>{content}</div>;
                })}
              </div>
            </div>
            
            {/* Réseaux sociaux */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse delay-600"></div>
                {t.footer.connect}
                <div className="flex-1 h-0.5 bg-gradient-to-r from-cyan-500/30 to-transparent rounded-full ml-3"></div>
              </h3>
              
              <div className="space-y-4 mb-8">
                {[
                  { 
                    platform: "LinkedIn", 
                    icon: <Linkedin size={20} />, 
                    href: "https://linkedin.com/in/mohamed-feki-486918309",
                    color: "from-blue-500 to-blue-700",
                    hover: "hover:from-blue-600 hover:to-blue-800"
                  },
                  { 
                    platform: "GitHub", 
                    icon: <Github size={20} />, 
                    href: "https://github.com/mohamedfeki414",
                    color: "from-gray-600 to-gray-800",
                    hover: "hover:from-gray-700 hover:to-gray-900"
                  },
                  { 
                    platform: "Email", 
                    icon: <Mail size={20} />, 
                    href: "mailto:medfeki33@gmail.com",
                    color: "from-red-500 to-pink-600",
                    hover: "hover:from-red-600 hover:to-pink-700"
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-transparent transition-all duration-500 hover:scale-[1.02]"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`relative p-3 bg-gradient-to-br ${social.color} rounded-lg ${social.hover} transition-all duration-300`}>
                        {social.icon}
                        <div className="absolute -inset-2 bg-gradient-to-br ${social.color} rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity"></div>
                      </div>
                      <div>
                        <div className="text-white font-semibold">{social.platform}</div>
                        <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                          {social.platform === "Email" ? t.contact.response : language === 'fr' ? 'Profil actif' : 'Active profile'}
                        </div>
                      </div>
                    </div>
                    
                    <ExternalLink size={16} className="text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </div>
              
              {/* Abonnement newsletter (optionnel) */}
              <div className="relative group">
                <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative p-4 bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl border border-gray-700/50">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Bell size={16} className="text-white" />
                    </div>
                    <p className="text-sm text-gray-400">
                      {t.footer.newsletter}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Séparateur décoratif */}
          <div className="relative my-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="px-6 bg-gradient-to-br from-gray-900 to-gray-800">
                <div className="flex items-center gap-3">
                  {[...Array(3)].map((_, i) => (
                    <div 
                      key={i}
                      className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"
                      style={{ animationDelay: `${i * 0.3}s` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Bas de footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-gray-500">
                © {new Date().getFullYear()} <span className="text-gray-400 font-semibold">Mohamed Feki</span>. {t.footer.rights}
              </p>
              <p className="text-gray-600 text-sm mt-2">
                <span className="text-gray-500">{language === 'fr' ? 'Licence en ' : 'Degree in '}</span>
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-medium">
                  {language === 'fr' ? 'Génie Logiciel et Systèmes d\'Information' : 'Software Engineering and Information Systems'}
                </span>
              </p>
            </div>
            
            {/* Mentions légales */}
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors text-sm">
                {language === 'fr' ? 'Mentions légales' : 'Legal notice'}
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors text-sm">
                {language === 'fr' ? 'Politique de confidentialité' : 'Privacy policy'}
              </a>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-500">Version 2.0</span>
              </div>
            </div>
            
            {/* Bouton retour en haut flottant */}
            <a 
              href="#accueil"
              className="fixed bottom-8 right-8 z-40 group/backtop"
              style={{ display: activeSection !== 'accueil' ? 'block' : 'none' }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur opacity-0 group-hover/backtop:opacity-100 transition-opacity"></div>
              
              <div className="relative w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center border border-gray-700/50 group-hover/backtop:border-blue-500/50 transition-all duration-300 group-hover/backtop:scale-110 shadow-lg">
                <ChevronRight size={20} className="transform -rotate-90 text-gray-400 group-hover/backtop:text-blue-400 transition-colors" />
                
                {/* Animation de cercle */}
                <div className="absolute -ins-2 border-2 border-blue-500/30 rounded-full animate-ping opacity-0 group-hover/backtop:opacity-100"></div>
              </div>
              
              <div className="absolute -bottom-10 right-0 bg-gray-900/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs text-gray-400 opacity-0 group-hover/backtop:opacity-100 transition-opacity whitespace-nowrap">
                {language === 'fr' ? 'Retour en haut' : 'Back to top'}
              </div>
            </a>
          </div>
          
          {/* Message de fin */}
          <div className="mt-12 pt-8 border-t border-gray-700/30 text-center">
            <p className="text-gray-600 text-sm">
              {t.footer.builtWith} <span className="text-red-400">vite</span> {language === 'fr' ? 'et' : 'and'}
              <span className="text-blue-400 font-semibold mx-1">React</span> + 
              <span className="text-cyan-400 font-semibold mx-1">Tailwind CSS</span>
            </p>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
              <div className="text-xs text-gray-500">{t.footer.thanks}</div>
              <div className="w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse delay-300"></div>
            </div>
          </div>
        </div>
        
        {/* Animation de fond en continu */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-shimmer"></div>
      </footer>
    </div>
  );
}

export default App;