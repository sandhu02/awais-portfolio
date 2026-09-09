export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  wireframeType: "polyhedron" | "octahedron" | "hourglass";
  summary: string;
  description: string;
  techStack: string[];
  playStoreUrl?: string;
  githubUrl: string;
  image: string;
  additionalImages?: string[];
  keyFeatures: string[];
  architectureNotes: string;
  metrics?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level: string }[];
}

export interface Service {
  id: string;
  title: string;
  bgColor: string;
  textColor: string;
  description: string;
  shapeType: "wave" | "stairs" | "loop";
}

export const PERSONAL_INFO = {
  name: "Muhammad Awais",
  fullName: "Muhammad Awais Amjad",
  title: "ANDROID DEVELOPER",
  roleHeadline: "Native Android & Full-Stack Mobile Engineer",
  tagline: "Your trusted web and mobile app developer for your startup business.",
  bio: "Hi! I'm Awais. I'm a software developer specializing in native Android and backend development. I build modern Android applications using Kotlin and Jetpack Compose, while also developing scalable server-side.",
  extendedBio: "Alongside native Android development, I bring professional experience as a Requirements & QA Engineer at Splenify, ensuring rock-solid software quality, intuitive UX, and clean architecture from specification to release. Currently pursuing BS in Computer Science at COMSATS University Islamabad.",
  phone: "+92 319 6137128",
  phoneFormatted: "+92-319-6137128",
  email: "awaissandhu1026r@gmail.com",
  location: "Islamabad, 45550, Pakistan",
  linkedin: "https://www.linkedin.com/in/awais02/",
  github: "https://github.com/sandhu02",
  googlePlay: "https://play.google.com/apps/testing/com.sandhu.jsonlauncher",
  whatsapp: "https://wa.me/923196137128",
};

export const SERVICES: Service[] = [
  {
    id: "native-android",
    title: "Native Android\nDevelopment",
    bgColor: "#169458", // Brand Green
    textColor: "#ffffff",
    description: "Modern, reactive Android applications crafted with Kotlin, Jetpack Compose, Clean Architecture, and seamless system API integrations.",
    shapeType: "wave",
  },
  {
    id: "front-end",
    title: "Front End\nDevelopment",
    bgColor: "#0C2340", // Deep Navy
    textColor: "#ffffff",
    description: "Responsive, dynamic web and mobile interfaces built with modern web technologies, accessible design systems, and fluid animations.",
    shapeType: "stairs",
  },
  {
    id: "back-end",
    title: "Back End\nDevelopment",
    bgColor: "#2F54EB", // Royal Blue
    textColor: "#ffffff",
    description: "Scalable RESTful APIs, real-time WebSockets with Socket.IO, WebRTC signaling, Node.js/Express, Firebase, and secure cloud microservices.",
    shapeType: "loop",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Android & Mobile Core",
    description: "Modern Android ecosystem and Jetpack toolchain",
    skills: [
      { name: "Kotlin", level: "Expert" },
      { name: "Jetpack Compose", level: "Expert" },
      { name: "Coroutines & Flow", level: "Advanced" },
      { name: "Navigation Compose", level: "Advanced" },
      { name: "Material You / 3", level: "Advanced" },
      { name: "Android Studio", level: "Expert" },
    ],
  },
  {
    title: "Architecture & System APIs",
    description: "Scalable structures, deep OS integration & QA rigor",
    skills: [
      { name: "MVVM / Clean Arch", level: "Expert" },
      { name: "Hilt Dependency Inj.", level: "Advanced" },
      { name: "LauncherApps API", level: "Specialist" },
      { name: "NotificationListener", level: "Specialist" },
      { name: "Glance AppWidgets", level: "Advanced" },
      { name: "WorkManager", level: "Advanced" },
    ],
  },
  {
    title: "Backend & Real-Time",
    description: "Server-side services, databases & communication",
    skills: [
      { name: "Node.js & Express", level: "Advanced" },
      { name: "Socket.IO", level: "Advanced" },
      { name: "WebRTC Audio/Video", level: "Intermediate" },
      { name: "Firebase & FCM", level: "Advanced" },
      { name: "MongoDB & MySQL", level: "Advanced" },
      { name: "Cloudinary CDN", level: "Advanced" },
    ],
  },
  {
    title: "Testing, DevOps & Process",
    description: "Quality engineering, SDLC & store deployment",
    skills: [
      { name: "Google Play Console", level: "Alpha / Prod" },
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Docker", level: "Intermediate" },
      { name: "QA & Integration Test", level: "Professional" },
      { name: "Agile / Scrum / SDLC", level: "Professional" },
      { name: "Requirements (SRS)", level: "Professional" },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "json-launcher",
    title: "JsonLauncher",
    subtitle: "Minimalist Android Launcher with JSON Architecture",
    category: "Native Android App",
    wireframeType: "polyhedron",
    summary: "Lightweight Android launcher with a unique JSON-inspired interface focused on speed, minimalism, and power-user ergonomics.",
    description: "JsonLauncher rethinks the mobile home screen from the ground up for developers and digital minimalists. Designed with Jetpack Compose and MVVM architecture, it treats the Android device state as a live declarative JSON document, offering lightning-fast fuzzy app search, notification previews, system telemetry, and zero battery bloat.",
    techStack: [
      "Kotlin",
      "Jetpack Compose",
      "MVVM",
      "Hilt",
      "Coroutines",
      "LauncherApps API",
      "NotificationListenerService",
    ],
    playStoreUrl: "https://play.google.com/apps/testing/com.sandhu.jsonlauncher",
    githubUrl: "https://github.com/sandhu02/JsonLauncher",
    image: "/images/json_launcher.jpg",
    additionalImages: [
      "/images/json_launcher.jpg",
      "/images/json_clock.svg",
    ],
    keyFeatures: [
      "Distinctive JSON-syntax home screen rendering battery, network, memory, and time in real-time.",
      "Asynchronous app discovery with instant multi-query search powered by Kotlin Coroutines and caching.",
      "Direct integration with Android LauncherApps API for quick app shortcuts and app info deep-links.",
      "NotificationListenerService for clean inline notification counters and privacy-respecting summaries.",
      "Modular MVVM codebase with full Dagger Hilt dependency injection for rock-solid testability.",
    ],
    architectureNotes: "Engineered using Jetpack Compose with unidirectional data flow (UDF). State is encapsulated inside StateFlows within ViewModel layer, with background package indexing handled via IO Coroutine dispatchers to prevent any main thread jank.",
    metrics: "Currently undergoing Google Play Alpha Testing with over 99.8% crash-free sessions across Android 12 through 15.",
  },
  {
    id: "signstream",
    title: "Signstream",
    subtitle: "Real-time Social Media & WebRTC Calling App",
    category: "Full-Stack Android & Cloud",
    wireframeType: "octahedron",
    summary: "Modern Android social application for short video sharing, real-time messaging, and peer-to-peer audio calling.",
    description: "Signstream brings together high-performance mobile video consumption and low-latency communication. Built with Jetpack Compose for the mobile front-end and a custom Node.js/Express.js backend, it features real-time bidirectional messaging via Socket.IO, WebRTC peer audio connectivity, and Cloudinary media optimization.",
    techStack: [
      "Kotlin",
      "Jetpack Compose",
      "Express.js",
      "Socket.IO",
      "JWT",
      "WebRTC",
      "Cloudinary",
      "MongoDB",
    ],
    githubUrl: "https://github.com/sandhu02/Signstream",
    playStoreUrl: "https://github.com/sandhu02/Signstream",
    image: "/images/signstream.svg",
    additionalImages: [
      "/images/signstream.svg",
    ],
    keyFeatures: [
      "High-frame-rate vertical video feed player with gesture controls and smooth memory caching.",
      "Real-time bidirectional messaging and typing indicators with Socket.IO connection manager.",
      "Peer-to-peer audio calling subsystem implemented with WebRTC signaling over secure WebSockets.",
      "Secure custom Express.js backend with JWT authentication and token refresh cycles.",
      "Direct Cloudinary SDK integration for fast client-side video uploads and adaptive stream delivery.",
    ],
    architectureNotes: "Clean Architecture pattern separating Domain, Data, and Presentation layers. WebRTC peer connection events are bridged into Kotlin StateFlow streams for reactive Compose UI updates.",
    metrics: "Sub-100ms real-time messaging latency and seamless peer-to-peer audio streaming over cellular & Wi-Fi.",
  },
  {
    id: "json-clock",
    title: "JsonClock",
    subtitle: "Customizable Glance Android Home Screen Widget",
    category: "Android Glance Widget",
    wireframeType: "hourglass",
    summary: "Customizable Android home screen widget that displays current time, date, and battery percentage in a clean JSON format.",
    description: "JsonClock brings the developer aesthetic to the Android home screen. Built using the modern Jetpack Compose Glance framework, it provides battery-friendly, glanceable real-time updates and automatically synchronizes with the system's light/dark modes and Material You palette.",
    techStack: [
      "Kotlin",
      "Jetpack Compose",
      "Glance API",
      "WorkManager",
      "Material 3",
    ],
    githubUrl: "https://github.com/sandhu02/JsonClock",
    playStoreUrl: "https://github.com/sandhu02/JsonClock",
    image: "/images/json_clock.svg",
    additionalImages: [
      "/images/json_clock.svg",
    ],
    keyFeatures: [
      "Declarative UI built exclusively with modern Jetpack Glance, eliminating legacy RemoteViews XML.",
      "Real-time JSON key-value formatting of hour, minute, second, day, month, and battery level.",
      "Intelligent power management with optimized broadcast receivers to prevent unnecessary battery drain.",
      "Zero-latency day/night mode adaptation based on device system settings.",
      "Configurable styling options including indentation, syntax coloring, and optional telemetry keys.",
    ],
    architectureNotes: "Uses GlanceAppWidget and GlanceAppWidgetReceiver with a lightweight state definition to handle updates efficiently on the Android AppWidget host without waking CPU cores unnecessarily.",
    metrics: "Ultra-low footprint (<2MB APK) and minimal battery impact (<0.1% daily consumption).",
  },
];
