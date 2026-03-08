export interface Project {
    id: number;
    title: string;
    category: string;
    year: string;
    description: string;
    longDescription: string;
    image: string; // Used as cover
    screenshots: string[];
    technologies: string[];
    features: string[];
}

export const projects: Project[] = [
    {
        id: 1,
        title: "E-Office / Surat Digital",
        category: "Web Development, Dashboard",
        year: "2026",
        description: "A public dashboard for digital correspondence tracking and management.",
        longDescription: "A comprehensive dashboard designed for tracking digital correspondence in a public office setting. It provides real-time updates, status tracking, and efficient management of incoming and outgoing letters.",
        image: "/assets/projects/Eoffice/screencapture-192-168-100-10-surat-digital-public-dashboard-2026-02-18-11_20_19.png",
        screenshots: [
            "/assets/projects/Eoffice/screencapture-192-168-100-10-surat-digital-public-dashboard-2026-02-18-11_20_19.png"
        ],
        technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
        features: ["Real-time Dashboard", "Digital Correspondence Tracking", "Status Management", "Public View Interface"]
    },
    {
        id: 2,
        title: "CuanChat",
        category: "Web App, Real-time Chat, Fintech",
        year: "2026",
        description: "A personal finance application with a chat-based interface using Natural Language Processing.",
        longDescription: "CuanChat is a personal finance application that allows users to record expenses as naturally as chatting on WhatsApp. It features automatic receipt scanning (OCR) and voice notes (speech-to-text) to make financial tracking effortless.",
        image: "/assets/projects/Cuanchat/screencapture-cuan-chat-vercel-app-chat-2026-02-18-11_04_21.png",
        screenshots: [
            "/assets/projects/Cuanchat/screencapture-cuan-chat-vercel-app-chat-2026-02-18-11_04_21.png"
        ],
        technologies: ["Next.js", "Express.js", "SQLite", "Tesseract.js", "Web Speech API"],
        features: [
            "Natural Language Transaction Recording",
            "Receipt Scanning (OCR)",
            "Voice Note Support",
            "Multi-Wallet Management",
            "Budget Tracking & Dashboard"
        ]
    },
    {
        id: 3,
        title: "Doka Tawa Tana",
        category: "Web Development, Cultural Heritage",
        year: "2026",
        description: "Official website for Sanggar Doka Tawa Tana, showcasing weaving traditions of Sikka.",
        longDescription: "The official website for Sanggar Doka Tawa Tana, a center for cultural preservation in Sikka, NTT. Designed with a 'Luxury Minimalist' aesthetic, it highlights the beauty of Tenun Ikat and offers an immersive experience into the local traditions.",
        image: "/assets/projects/Dokatawatana/Doka_tawa_tana_cover.png",
        screenshots: [
            "/assets/projects/Dokatawatana/screencapture-192-168-56-1-8080-2026-02-18-11_01_42.png"
        ],
        technologies: ["Vite", "React", "TypeScript", "Tailwind CSS", "Shadcn UI", "Framer Motion"],
        features: [
            "Luxury Minimalist Design",
            "Interactive Product Gallery",
            "Cinematic Animations",
            "Cultural Storytelling",
            "Direct Reservation Integration"
        ]
    },
    {
        id: 4,
        title: "Visa Travels",
        category: "Web Design, Travel Agency",
        year: "2026",
        description: "A luxury minimalist travel agency website concept focusing on curated experiences.",
        longDescription: "A personal exploration in UI/UX design for a fictional travel agency. Visa Travels focuses on delivering a premium user experience for travelers seeking curated and exclusive journeys.",
        image: "/assets/projects/Visatravels/Visa_travels_cover.png",
        screenshots: [
            "/assets/projects/Visatravels/screencapture-localhost-8080-2026-02-18-11_09_20.png"
        ],
        technologies: ["Next.js", "React", "Framer Motion", "Tailwind CSS"],
        features: [
            "Premium UI/UX Design",
            "Curated Travel Packages",
            "Immersive Visuals",
            "Smooth Micro-interactions"
        ]
    }
];
