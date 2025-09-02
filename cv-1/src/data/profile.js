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
  },
  {
  id: 6,
  title: "Leadership",
  icon: "👑",
  description: "Ability to guide, motivate, and inspire a team to achieve goals",
  examples: [
    "Leading a team project to successful completion",
    "Mentoring junior members or peers",
    "Delegating tasks effectively and ensuring collaboration"
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
    { name: "REST API", level: 70, category: "backend" },
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
    },
    {
      id: 2,
      degree: "Mathematics and English Program",
      school: "Assumption College Samutprakarn",
      period: "2019 - 2022",
      gpa: "3.0/4.0"
    }
  ],
  
  projects: [
    {
      id: 1,
      name: "ITBMS-SHOP Webapp(In-Progress)",
      tech: ["Vue.js", "Java", "MySql", "Rest API"],
      description: "online shopping platform for mobile phone",
      link: "https://github.com/codone1999/Chimpanzini-Bananini-NW3"
    },
    {
      id: 2,
      name: "Note webapp",
      tech: ["Vue.js", "Tailwind"],
      description: "Browser-based note",
      link: "https://github.com/Pratchaya-jamp/Vue-NoteApp"
    },
    {
      id: 3,
      name: "Battle meme game card",
      tech: ["Vue.js", "Tailwind","Json"],
      description: "2-player card battle webapp inspired by Final Fantasy Rebirth mini game",
      link: "https://github.com/Pratchaya-jamp/Meme-Blood"
    },
    {
      id: 4,
      name: "Battle meme game card(Online Version, In Progress)",
      tech: ["Vue.js", "Tailwind", "Java", "MySql", "Rest API"],
      description: "Rebuilt the card battle game with Spring Boot + MySQL backend",
      link: "https://github.com/codone1999/MemeBattle-inprogress"
    },
    {
      id: 5,
      name: "Dell website clone",
      tech: ["HTML", "CSS"],
      description: "Replicated Dell homepage layout using only HTML & CSS",
      link: "https://github.com/codone1999/Dell_website_clone"
    },
    {
      id: 6,
      name: "Interactive Resume",
      tech: ["Vue.js", "Tailwind","JavaScript"],
      description: "Interactive Resume",
      link: "https://github.com/codone1999/Interactive-Resume"
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