export const profileData = {
  name: "Thiti Prasopsub",
  title: "Bachelor's degree student",
  email: "thiti17134@gmail.com",
  phone: "095-4725129",
  location: "Samut prakan, Thailand",
  email2: "auethiti@gmail.com",
  github: "https://github.com/codone1999",
  summary: "IT Bachelor’s degree student at King Mongkut's University of Technology Thonburi with strong skills in backend development. Experienced in Java, JavaScript, and frameworks such as Spring Boot, Vue.js, and Tailwind CSS. Proficient in database design and management with MySQL. Passionate about coding, problem-solving, and building scalable applications, with a focus on backend development.",
  
  softSkills: [
  {
    id: 1,
    title: "Problem Solving",
    icon: "🧩",
    description: "Strong analytical thinking and creative problem-solving abilities",
    examples: [
      "Breaking down complex coding challenges into manageable components",
      "Finding innovative solutions to technical roadblocks",
      "Debugging and troubleshooting application issues systematically"
    ]
  },
  {
    id: 2,
    title: "Communication",
    icon: "💬",
    description: "Effective verbal and written communication skills",
    examples: [
      "Explaining technical concepts to non-technical stakeholders",
      "Collaborating effectively in team environments",
      "Writing clear documentation and code comments"
    ]
  },
  {
    id: 3,
    title: "Adaptability",
    icon: "🔄",
    description: "Quick learner who adapts well to new technologies and environments",
    examples: [
      "Learning new programming languages and frameworks efficiently",
      "Adapting to changing project requirements and deadlines",
      "Embracing feedback and continuously improving skills"
    ]
  },
  {
    id: 4,
    title: "Time Management",
    icon: "⏰",
    description: "Excellent organizational skills and ability to prioritize tasks",
    examples: [
      "Balancing academic coursework with personal projects",
      "Meeting project deadlines consistently",
      "Efficiently managing multiple tasks and responsibilities"
    ]
  },
  {
    id: 5,
    title: "Critical Thinking",
    icon: "🎯",
    description: "Analytical mindset with attention to detail and logical reasoning",
    examples: [
      "Evaluating different approaches to solve technical problems",
      "Making data-driven decisions in project development",
      "Identifying potential issues before they become problems"
    ]
  }
],
  
  skills: [
    { name: "JavaScript", level: 60, category: "frontend" },
    { name: "Vue.js", level: 65, category: "frontend" },
    { name: "Node.js", level: 50, category: "backend" },
    { name: "MySql", level: 70, category: "database" },
    { name: "java", level: 70, category: "backend" },
    { name: "Docker", level: 55, category: "devops" },
    { name: "Git", level: 70, category: "tools" },
    { name: "Spring Boot", level: 70, category: "backend" },
    { name: "Wireshark", level: 60, category: "tools" },
    { name: "HTML", level: 75, category: "frontend" },
    { name: "CSS", level: 65, category: "frontend" },
    { name: "JSON", level: 75, category: "database" },
    { name: "XML", level: 60, category: "database" },
    { name: "Postman", level: 75, category: "tools" },
    { name: "Maven", level: 60, category: "tools" }
  ],
  
  education: [
    {
      id: 1,
      degree: "Bachelor of Information Technology",
      school: "King Mongkut's University of Technology Thonburi",
      period: "2023 - now",
      gpa: "2.29/4.0"
    }
  ],
  
  projects: [
    {
      id: 1,
      name: "E-Commerce Platform",
      tech: ["Vue.js", "Node.js", "MongoDB", "Stripe"],
      description: "Full-stack e-commerce solution with real-time inventory management",
      link: "#",
      image: "/api/placeholder/300/200"
    }
  ],
  projects: [
    {
      id: 1,
      name: "E-Commerce Platform",
      tech: ["Vue.js", "Node.js", "MongoDB", "Stripe"],
      description: "Full-stack e-commerce solution with real-time inventory management",
      link: "https://github.com/alexjohnson/ecommerce-platform",
      github: "https://github.com/alexjohnson/ecommerce-platform",
      demo: "https://ecommerce-demo.vercel.app"
    }
  ]
};

export const navigationSections = [
  { id: 'about', label: 'About', icon: '👋' },
  { id: 'softskills', label: 'Soft Skills', icon: '🌟' },
  { id: 'skills', label: 'Skills', icon: '🚀' },
  { id: 'projects', label: 'Projects', icon: '🔧' },
  { id: 'education', label: 'Education', icon: '🎓' }
];