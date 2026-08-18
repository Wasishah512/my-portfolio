export const PERSONAL = {
  name: "Syed Wasi Ul Hassan",
  role: "Full Stack Developer",
  headline: "Building modern cross-platform mobile applications , Web Applications with clean architecture, real-time features, and beautiful user experiences.",
  email: "wasishah7675@gmail.com",
  github: "https://github.com/wasishah512",
  linkedin: "https://www.linkedin.com/in/syed-wasi-965b51356/",
  whatsapp: "https://wa.me/03465384879",
  location: "Pakistan",
} as const;

export const ABOUT = {
  intro: "I'm a passionate Full Stack Developer and AI enthusiast focused on building modern, scalable, and intelligent digital experiences. I enjoy transforming complex ideas into polished, production-ready applications with clean architecture, intuitive interfaces, and seamless user experiences.",
  experience: "My experience spans Firebase, REST APIs, authentication, real-time chat, push notifications, WebSockets, state management, and mobile performance optimization. I also work with Next.js, PostgreSQL, backend integrations, AI APIs, Generative AI, AI agents, and automation, allowing me to build complete solutions across mobile, web, and intelligent applications.",
  learning: [
    "Agentic AI",
    "Generative AI",
    "AI Automation",
    "Workflow Automation",
    "AI-powered applications",
  ],
  closing: "I'm constantly learning emerging technologies to build smarter software powered by artificial intelligence.",
} as const;

export const SKILLS = [
  { name: "React Native", level: 80, category: "frontend" },
  { name: "Expo", level: 80, category: "frontend" },
  { name: "JavaScript", level: 90, category: "language" },
  { name: "TypeScript", level: 90, category: "language" },
  { name: "React", level: 50, category: "frontend" },
  { name: "Next.js", level: 75, category: "frontend" },
  { name: "Firebase", level: 85, category: "backend" },
  { name: "Firestore", level: 88, category: "backend" },
  { name: "Authentication", level: 90, category: "backend" },
  { name: "Cloudinary", level: 80, category: "backend" },
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Socket.io", level: 85, category: "backend" },
  { name: "REST APIs", level: 90, category: "backend" },
  { name: "Zustand", level: 82, category: "frontend" },
  { name: "Tailwind CSS", level: 77, category: "frontend" },
  { name: "Git", level: 88, category: "tools" },
  { name: "GitHub", level: 88, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "AI Automation", level: 50, category: "ai" },
  { name: "OpenAI APIs", level: 50, category: "ai" },
  { name: "Generative AI", level: 60, category: "ai" },
  { name: "Agentic AI", level: 40, category: "ai" },
  { name: "Prompt Engineering", level: 75, category: "ai" },
] as const;

export const PROJECTS = [
  {
    id: 1,
    title: "Van Pooling App",
    description:
      "A cross-platform transportation management application for schools that allows parents to monitor children's pickups and drop-offs in real time.",
    features: [
      "Live vehicle tracking",
      "Parent dashboard",
      "Driver management",
      "Student verification",
      "Secure authentication",
      "Attendance tracking",
      "Notifications",
      "Real-time updates",
      "Firebase backend",
      "Modern UI",
    ],
    tech: ["React Native", "PostgreSQL", "Socket.io", "Expo", "Node.js"],
    image: "images/Login-page.png",
    github: "#",
    demo: "vedios/vanPooling.mp4",
    color: "from-violet-500/20 to-cyan-500/20",
  },
  {
    id: 2,
    title: "Social Connect",
    description:
      "A modern social media application built with React Native featuring real-time communication and social engagement.",
    features: [
      "Authentication",
      "Create posts",
      "Like & comment",
      "Real-time notifications",
      "Live chat",
      "Socket.io messaging",
      "Image uploads",
      "User profiles",
      "Cloudinary integration",
      "Firebase backend",
    ],
    tech: [
      "React Native",
      "Firebase",
      "Firestore",
      "Socket.io",
      "Cloudinary",
      "Expo",
    ],
    image: "/images/SocialConnect.jpeg",
    github: "https://github.com/Wasishah512/SocialConnect_app_frontend",
    demo: "vedios/SocialConnectApp.mp4",
    color: "from-pink-500/20 to-violet-500/20",
  },
  {
    id: 3,
    title: "Quote Generator",
    description:
      "A beautiful motivational quote application with modern animations and category-based inspirational content.",
    features: [
      "Thousands of quotes",
      "Random quote generator",
      "Favorites",
      "Categories",
      "Share quotes",
      "Smooth animations",
      "Elegant UI",
      "Offline support",
    ],
    tech: ["React Native", "Expo", "Async Storage"],
    image: "/images/QuoteGen.jpeg",
    github: "https://github.com/Wasishah512/codealpha_task2",
    demo: "vedios/QuoteGenerator.mp4",
    color: "from-amber-500/20 to-pink-500/20",
  },
  {
    id: 4,
    title: "Quiz Flip Card App",
    description:
      "An interactive quiz application where users answer questions by flipping animated cards.",
    features: [
      "Flip card animation",
      "Multiple categories",
      "Score tracking",
      "Progress indicator",
      "Beautiful transitions",
      "Responsive design",
      "Interactive learning experience",
    ],
    tech: ["React Native", "Expo", "Animated API"],
    image: "/images/FlipCardQuiz.jpeg",
    github: "https://github.com/Wasishah512/codealpha_task01",
    demo: "vedios/FlipCardQuiz.mp4",
    color: "from-cyan-500/20 to-green-500/20",
  },
  {
    id: 5,
    title: "Sluuni AI Chatbot",
    description:
      "A modern AI chatbot platform built with Next.js featuring a beautiful landing page, secure authentication, an interactive chat system, and complete database handling for users and chat data.",
    features: [
      "Beautiful landing page",
      "AI chatbot",
      "Secure authentication",
      "Interactive chat system",
      "Real-time chat experience",
      "Chat history",
      "User management",
      "Database integration",
      "PostgreSQL database",
      "Better Auth authentication",
      "Drizzle ORM",
      "Responsive design",
      "Modern UI",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "React",
      "PostgreSQL",
      "Drizzle ORM",
      "Better Auth",
      "AI API",
      "Tailwind CSS",
    ],
    image: "images/sluuni.png",
    github: "https://github.com/Wasishah512/anthropic_chatbot",
    demo: "https://anthropic-chatbot-two.vercel.app/",
    color: "from-blue-500/20 to-cyan-500/20",
  },
] as const;

export const SERVICES = [
  {
    title: "Mobile App Development",
    description: "Building high-performance, cross-platform mobile applications with React Native that deliver native-like experiences.",
    icon: "smartphone",
  },
  {
    title: "Cross Platform Apps",
    description: "Single codebase for iOS and Android with optimized performance, native modules, and platform-specific customizations.",
    icon: "layers",
  },
  {
    title: "Firebase Integration",
    description: "Full-stack mobile development with Firebase authentication, Firestore, cloud functions, and push notifications.",
    icon: "flame",
  },
  {
    title: "Real-Time Applications",
    description: "Building live chat, real-time tracking, and collaborative features using Socket.io and WebSocket protocols.",
    icon: "zap",
  },
  {
    title: "REST API Integration",
    description: "Connecting mobile apps with backend services, third-party APIs, and microservices architectures.",
    icon: "code",
  },
  {
    title: "AI Automation",
    description: "Integrating AI capabilities, LLMs, and automation workflows into applications for smarter user experiences.",
    icon: "brain",
  },
  {
    title: "Next.js Web Apps",
    description: "Modern web applications with server-side rendering, API routes, and optimized performance using Next.js.",
    icon: "globe",
  },
] as const;

export const EXPERIENCE = [
  {
    title: "React Native Developer",
    description:
      "Developed cross-platform mobile applications using React Native and Expo, implementing real-time features, authentication, APIs, Firebase services, and modern responsive interfaces.",
    period: "Present",
    type: "work" as const,
  },
  {
    title: "Next.js Developer",
    description:
      "Building modern full-stack web applications with Next.js and TypeScript, focusing on responsive interfaces, authentication, database integration, APIs, and scalable application architecture.",
    period: "Present",
    type: "work" as const,
  },
  {
    title: "AI & Automation",
    description:
      "Expanding expertise in Generative AI, Large Language Models, Agentic AI, AI-powered applications, workflow automation, and intelligent systems.",
    period: "Ongoing",
    type: "learning" as const,
    items: [
      "Generative AI",
      "Large Language Models LLM",
      "Agentic AI",
      "AI Applications",
      "Workflow Automation",
      "AI Agents",
      "Automation",
    ],
  },
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;
