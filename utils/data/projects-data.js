export const projectsData = [
  {
    id: 1,
    title: "Digitalizeo",
    des: "A citizen data center platform for civil registration and biometric identification in Madagascar, featuring fingerprint enrollment and facial recognition.",
    img: "/projects/digitalizeo.png",
    skills: ["React", "Node JS", "PostgreSQL", "Docker", "Nginx", "FastAPI", "ASP.NET", "MaterialUI"],
    link: "",
    details: {
      fullDescription: "Digitalizeo is a full-stack prototype platform designed to centralize and modernize civil registration and biometric citizen identification in Madagascar. It addresses a real-world problem: citizens often cannot retrieve official civil documents from their current place of residence because records remain stored only in their commune of birth. Digitalizeo introduces a secure and scalable citizen data center architecture allowing civil records to be accessed from any connected commune, with biometric fingerprint and facial recognition for identity verification.",
      features: [
        "Citizen and civil record management",
        "Biometric fingerprint enrollment and matching",
        "Facial recognition search system",
        "Role-based authentication and authorization",
        "Administrative dashboard and activity logs",
        "Centralized multi-region data access"
      ],
      technologies: ["React", "Vite", "Node.js", "Express", "Prisma ORM", "PostgreSQL", "Python", "FastAPI", "ASP.NET", "MaterialUI", "SourceAFIS", "DeepFace", "JWT", "Microservices"],
      context: "Developed as part of a Computer Science Bachelor's thesis at ADVANCEA — focused on the digital transformation of public services and citizen data management in Madagascar.",
      role: "Full-Stack Developer",
      year: "2025-2026"
    }
  },
  {
    id: 2,
    title: "Streaming Platform",
    des: "A full-featured live streaming platform with RTMP ingest, HLS adaptive delivery, and real-time viewer management powered by NGINX.",
    img: "/projects/streaming.svg",
    skills: ["Node JS", "Next JS", "Nginx", "Bootstrap", "PostgreSQL"],
    link: "",
    details: {
      fullDescription: "A complete live streaming infrastructure built from scratch. The platform handles RTMP stream ingestion, transcodes to HLS for adaptive bitrate delivery, and provides a real-time admin dashboard for managing streams and viewers. Includes secure RTMP authentication and automatic end-of-broadcast detection.",
      features: [
        "RTMP live stream ingest",
        "HLS adaptive bitrate delivery",
        "Real-time viewer count and management",
        "Admin dashboard with stream controls",
        "Secure RTMP authentication",
        "Auto end-of-broadcast handling"
      ],
      technologies: ["Next JS", "Node.js", "NGINX-RTMP", "FFmpeg", "HLS.js", "MongoDB", "Docker", "Socket.io"],
      context: "Built as a production-ready streaming solution for TV7FOI.",
      role: "Full-Stack Developer",
      year: "2025"
    }
  },
  {
    id: 3,
    title: "Real-Time Chat Application",
    des: "An instant messaging application featuring real-time WebSocket communication, typing indicators, and message persistence.",
    img: "/projects/chat.svg",
    skills: ["React", "Node JS", "ExpressJS", "MongoDB", "Tailwind"],
    link: "",
    details: {
      fullDescription: "A modern real-time chat application supporting instant messaging, group conversations, and presence indicators. Built with WebSocket technology for zero-latency message delivery, with full message history persistence and offline message queuing.",
      features: [
        "Real-time instant messaging",
        "Typing indicators and read receipts",
        "Group conversations",
        "Message persistence and history",
        "User presence and online status",
        "File and image sharing"
      ],
      technologies: ["React", "Node.js", "Express", "Socket.io", "MongoDB", "Tailwind CSS", "JWT"],
      context: "Personal project to explore real-time communication architectures.",
      role: "Full-Stack Developer",
      year: "2024"
    }
  },
  {
    id: 4,
    title: "Fleet Management System",
    des: "A vehicle fleet tracking and management system with real-time GPS positioning, route optimization, and performance analytics.",
    img: "/projects/fleet.svg",
    skills: ["React", "JAVA Spring Boot", "PostgreSQL", "Leaflet.js"],
    link: "",
    details: {
      fullDescription: "A comprehensive fleet management platform enabling real-time vehicle tracking, driver management, route optimization, and performance analytics. The system provides a centralized dashboard for fleet operators to monitor all vehicles, manage maintenance schedules, and generate operational reports.",
      features: [
        "Real-time GPS vehicle tracking",
        "Driver assignment and management",
        "Route planning and optimization",
        "Maintenance scheduling and alerts",
      ],
      technologies: ["React", "JAVA Spring Boot", "PostgreSQL", "Leaflet.js"],
      context: "Freelance project for a transport logistics company.",
      role: "Full-Stack Developer",
      year: "2025"
    }
  },
];