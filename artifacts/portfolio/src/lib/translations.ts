export type Language = 'en' | 'fr';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      portfolio: 'Portfolio',
      skills: 'Skills',
      contact: 'Contact',
    },
    hero: {
      welcome: 'Welcome to my digital space',
      name: "I'm Mustapha Bounnit",
      roles: ['Full-Stack Developer', 'React Developer', 'Node.js Developer'],
      tagline:
        'Building exceptional, scalable, and responsive digital experiences. Passionate about clean code and modern web technologies.',
      viewWork: 'View My Work',
      downloadCv: 'Download CV',
      projects: 'Projects',
      technologies: 'Technologies',
      services: 'Services',
      scroll: 'Scroll',
    },
    about: {
      title: 'About Me',
      para1:
        "I'm Mustapha Bounnit, a motivated computer science student and full-stack web developer with a profound passion for building modern, scalable web applications.",
      para2:
        'My journey in tech is driven by curiosity and a commitment to continuous learning. I thrive on solving complex problems and turning ideas into elegant code. Whether I am designing a database architecture or fine-tuning CSS animations, I care deeply about the craft.',
      birthday: 'Birthday:',
      birthdayValue: 'March 28, 2005',
      github: 'GitHub:',
      status: 'Status:',
      statusValue: 'Open to opportunities',
      downloadCv: 'Download CV',
      projects: 'Projects',
      technologies: 'Technologies',
    },
    services: {
      title: 'What I Do',
      subtitle:
        'I offer a complete range of web development services, turning complex problems into elegant, performant solutions.',
      items: [
        {
          title: 'Frontend Development',
          description:
            'Building responsive, accessible, and highly interactive user interfaces using modern frameworks like React and Next.js.',
        },
        {
          title: 'Backend Development',
          description:
            'Designing scalable APIs and robust server-side architectures using Node.js, Express, and modern databases.',
        },
        {
          title: 'Full-Stack Web Apps',
          description:
            'End-to-end development of complex web applications with seamless integration between frontend and backend.',
        },
        {
          title: 'UI/UX Implementation',
          description:
            'Translating design mockups into pixel-perfect, beautifully animated web experiences with a focus on craft.',
        },
      ],
    },
    projects: {
      title: 'Featured Projects',
      subtitle:
        'A selection of my recent work. Real-world applications built with modern technologies.',
      comingSoon: 'Coming Soon',
      viewMore: 'View more on GitHub',
      github: 'GitHub Repository',
      demo: 'Live Demo',
      items: [
        {
          title: 'Products Store Website',
          description:
            'A full-featured e-commerce website for browsing and purchasing products online, with a shopping cart, user authentication, order management, and an admin panel for inventory control.',
        },
        {
          title: 'Commercial Store System',
          description:
            'A desktop-style management system for retail shops, covering product catalog, stock tracking, sales recording, supplier management, and daily/monthly financial reports.',
        },
        {
          title: 'Veterinary Clinic Website',
          description:
            'A complete web platform for a veterinary clinic, featuring appointment booking, patient animal records, owner profiles, treatment history, and a contact section for emergencies.',
        },
        {
          title: 'AI-Powered Task Manager',
          description:
            'A smart productivity application that leverages AI to help users organize tasks, prioritize work, and auto-generate project timelines. Currently in active development.',
        },
      ],
    },
    skills: {
      title: 'Tech Stack',
      subtitle: 'The tools and technologies I use to bring ideas to life.',
      categories: {
        frontend: 'Frontend Development',
        backend: 'Backend Development',
        databases: 'Databases',
        versionControl: 'Version Control & Collaboration',
        other: 'Other Skills',
      },
    },
    contact: {
      title: 'Contact',
      subtitle:
        "Don't hesitate to contact me. I'm currently open to new opportunities.",
      connect: 'Connect With Me',
      email: 'Send an Email',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      form: {
        fullName: 'Full Name',
        fullNamePlaceholder: 'John Doe',
        email: 'Email Address',
        emailPlaceholder: 'john@example.com',
        message: 'Message',
        messagePlaceholder: 'How can I help you?',
        send: 'Send Message',
        sending: 'Sending...',
        successTitle: 'Message Sent Successfully!',
        successDescription:
          "Thanks for reaching out. I'll get back to you soon.",
        errorTitle: 'Failed to Send Message',
        errorDescription:
          'Something went wrong. Please try again or email me directly.',
      },
    },
    footer: {
      rights: 'All rights reserved.',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      services: 'Services',
      portfolio: 'Portfolio',
      skills: 'Compétences',
      contact: 'Contact',
    },
    hero: {
      welcome: 'Bienvenue dans mon espace numérique',
      name: "Je suis Mustapha Bounnit",
      roles: ['Développeur Full-Stack', 'Développeur React', 'Développeur Node.js'],
      tagline:
        "Je crée des expériences numériques exceptionnelles, évolutives et réactives. Passionné par un code propre et les technologies web modernes.",
      viewWork: 'Voir mes travaux',
      downloadCv: 'Télécharger le CV',
      projects: 'Projets',
      technologies: 'Technologies',
      services: 'Services',
      scroll: 'Défiler',
    },
    about: {
      title: 'À propos de moi',
      para1:
        "Je suis Mustapha Bounnit, étudiant en informatique et développeur web full-stack, passionné par la création d'applications web modernes et évolutives.",
      para2:
        "Mon parcours dans la tech est motivé par la curiosité et un engagement envers l'apprentissage continu. Je m'épanouis en résolvant des problèmes complexes et en transformant des idées en code élégant. Que je conçoive une architecture de base de données ou que j'affine des animations CSS, je me soucie profondément du travail bien fait.",
      birthday: 'Anniversaire :',
      birthdayValue: '28 mars 2005',
      github: 'GitHub :',
      status: 'Statut :',
      statusValue: 'Ouvert aux opportunités',
      downloadCv: 'Télécharger le CV',
      projects: 'Projets',
      technologies: 'Technologies',
    },
    services: {
      title: 'Ce que je fais',
      subtitle:
        "J'offre une gamme complète de services de développement web, transformant des problèmes complexes en solutions élégantes et performantes.",
      items: [
        {
          title: 'Développement Frontend',
          description:
            "Création d'interfaces utilisateur réactives, accessibles et hautement interactives avec des frameworks modernes comme React et Next.js.",
        },
        {
          title: 'Développement Backend',
          description:
            "Conception d'API évolutives et d'architectures serveur robustes avec Node.js, Express et des bases de données modernes.",
        },
        {
          title: 'Applications Web Full-Stack',
          description:
            "Développement de bout en bout d'applications web complexes avec une intégration transparente entre le frontend et le backend.",
        },
        {
          title: 'Implémentation UI/UX',
          description:
            "Transformation de maquettes en expériences web pixel-perfect et magnifiquement animées, avec un accent sur le savoir-faire.",
        },
      ],
    },
    projects: {
      title: 'Projets phares',
      subtitle:
        'Une sélection de mes travaux récents. Des applications réelles construites avec des technologies modernes.',
      comingSoon: 'Bientôt disponible',
      viewMore: 'Voir plus sur GitHub',
      github: 'Dépôt GitHub',
      demo: 'Démo en direct',
      items: [
        {
          title: 'Site Web de Boutique de Produits',
          description:
            "Un site de commerce électronique complet pour parcourir et acheter des produits en ligne, avec panier, authentification utilisateur, gestion des commandes et panneau d'administration.",
        },
        {
          title: "Système de Gestion Commerciale",
          description:
            "Un système de gestion de type desktop pour les magasins de détail : catalogue produits, suivi des stocks, enregistrement des ventes, gestion des fournisseurs et rapports financiers quotidiens/mensuels.",
        },
        {
          title: 'Site Web de Clinique Vétérinaire',
          description:
            "Une plateforme web complète pour une clinique vétérinaire : prise de rendez-vous, dossiers des animaux, profils des propriétaires, historique des traitements et section contact d'urgence.",
        },
        {
          title: 'Gestionnaire de Tâches IA',
          description:
            "Une application de productivité intelligente qui utilise l'IA pour organiser les tâches, prioriser le travail et générer automatiquement des calendriers de projet. Actuellement en développement actif.",
        },
      ],
    },
    skills: {
      title: 'Stack Technique',
      subtitle:
        "Les outils et technologies que j'utilise pour donner vie aux idées.",
      categories: {
        frontend: 'Développement Frontend',
        backend: 'Développement Backend',
        databases: 'Bases de données',
        versionControl: 'Contrôle de version & Collaboration',
        other: 'Autres compétences',
      },
    },
    contact: {
      title: 'Contact',
      subtitle:
        "N'hésitez pas à me contacter. Je suis actuellement ouvert à de nouvelles opportunités.",
      connect: 'Connectez-vous avec moi',
      email: 'Envoyer un e-mail',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      form: {
        fullName: 'Nom complet',
        fullNamePlaceholder: 'Jean Dupont',
        email: 'Adresse e-mail',
        emailPlaceholder: 'jean@exemple.com',
        message: 'Message',
        messagePlaceholder: 'Comment puis-je vous aider ?',
        send: 'Envoyer le message',
        sending: 'Envoi en cours...',
        successTitle: 'Message envoyé avec succès !',
        successDescription:
          "Merci de m'avoir contacté. Je vous répondrai bientôt.",
        errorTitle: "Échec de l'envoi",
        errorDescription:
          "Une erreur s'est produite. Veuillez réessayer ou m'écrire directement par e-mail.",
      },
    },
    footer: {
      rights: 'Tous droits réservés.',
    },
  },
} as const;

// Recursively converts literal string types into plain `string`
// so both the `en` and `fr` translation shapes are interchangeable.
export type DeepStringify<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? readonly DeepStringify<U>[]
    : T extends object
      ? { readonly [K in keyof T]: DeepStringify<T[K]> }
      : T;

export type Translation = DeepStringify<(typeof translations)['en']>;

