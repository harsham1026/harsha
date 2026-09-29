// Portfolio data — all content in one place
// Only real, verified information. Placeholders where info is missing.

export const personalInfo = {
  name: "Harsha M",
  firstName: "Harsha",
  tagline: "Computer Science Engineer & Developer",
  subTagline: "I build software, solve problems, and turn ideas into useful products.",
  email: "harsha@example.com", // [UPDATE WITH REAL EMAIL]
  location: "Karnataka, India",
  social: {
    github: "#",    // [ADD REAL GITHUB LINK]
    linkedin: "#",  // [ADD REAL LINKEDIN LINK]
    leetcode: "#",  // [ADD REAL LEETCODE LINK]
    gfg: "#",       // [ADD REAL GFG LINK]
  },
  resumeUrl: "#",   // [ADD REAL RESUME LINK]
};

export const aboutCards = [
  { title: "CSE Student", desc: "B.E. Computer Science at PESITM, Shimoga" },
  { title: "Developer", desc: "Building full-stack apps and tools" },
  { title: "Data Enthusiast", desc: "Exploring analytics and data-driven insights" },
  { title: "Problem Solver", desc: "Competitive programming & algorithmic thinking" },
];

export const stats = [
  { label: "Projects", value: "03+", sublabel: "Completed" },
  { label: "Skills", value: "10+", sublabel: "Technologies" },
  { label: "Learning", value: "Always", sublabel: "Growing" },
];

export const skills = {
  Languages: [
    { name: "C" },
    { name: "C++" },
    { name: "Java" },
    { name: "Python" },
  ],
  Web: [
    { name: "HTML" },
    { name: "CSS" },
    { name: "JavaScript" },
  ],
  Database: [
    { name: "MySQL" },
    { name: "MongoDB" },
  ],
  Tools: [
    { name: "Git" },
    { name: "GitHub" },
    { name: "VS Code" },
  ],
};

export const projects = [
  {
    id: 1,
    number: "01",
    title: "Intelligent CPU Scheduling Optimizer",
    subtitle: "Algorithm Visualization & Performance Analysis",
    description:
      "An interactive platform to analyze and compare CPU scheduling algorithms like FCFS, SJF, Round Robin, and Priority using real-time performance metrics and animated Gantt charts.",
    longDescription:
      "This project provides a deep dive into operating system CPU scheduling. Users can input custom processes, select algorithms, and instantly see animated Gantt chart visualizations alongside computed metrics like Average Waiting Time, Turnaround Time, and CPU Utilization.",
    tags: ["Python", "Algorithms", "Data Structures", "OS Concepts"],
    features: [
      "Real-time Gantt chart visualization",
      "Multi-algorithm comparison",
      "Custom process input",
      "Performance metrics dashboard",
      "Comparative analysis charts",
    ],
    github: "#", // [ADD REAL GITHUB LINK]
    demo: null,
    accent: "#00D4FF",
  },
  {
    id: 2,
    number: "02",
    title: "Direct-Mapped CPU Cache Simulator",
    subtitle: "Computer Architecture Simulation",
    description:
      "A simulator that models direct-mapped cache behavior, demonstrating how data is stored, accessed, and evicted. Visualize cache hits, misses, and memory mapping in real time.",
    longDescription:
      "Built to help understand low-level computer architecture concepts, this simulator allows users to configure cache parameters and step through memory access sequences. It visually tracks cache state, tag comparisons, and reports hit/miss ratios for analysis.",
    tags: ["Python", "Computer Architecture", "Simulation"],
    features: [
      "Configurable cache parameters",
      "Step-by-step memory access simulation",
      "Hit/miss ratio tracking",
      "Visual cache state display",
      "Memory mapping visualization",
    ],
    github: "#", // [ADD REAL GITHUB LINK]
    demo: null,
    accent: "#8B5CF6",
  },
  {
    id: 3,
    number: "03",
    title: "AI Study Planner",
    subtitle: "Smart Scheduling & Productivity Tool",
    description:
      "An AI-powered study planner that helps students organize their learning schedule, prioritize subjects, and track study progress with intelligent recommendations.",
    longDescription:
      "This tool uses rule-based AI logic to create personalized study schedules. Students input their subjects, deadlines, and difficulty levels, and the planner generates an optimized timetable with break management and revision reminders.",
    tags: ["Python", "AI Logic", "Scheduling", "Productivity"],
    features: [
      "Personalized study schedule generation",
      "Subject priority management",
      "Break and revision reminders",
      "Progress tracking dashboard",
      "Deadline-aware planning",
    ],
    github: "#", // [ADD REAL GITHUB LINK]
    demo: null,
    accent: "#10B981",
  },
];

export const journey = [
  {
    year: "2022",
    title: "Started B.E. in Computer Science",
    org: "PESITM, Shimoga",
    desc: "Began my engineering journey — programming fundamentals, mathematics, and core CS concepts.",
  },
  {
    year: "2023–24",
    title: "Core Programming & Web Development",
    org: "Academics & Self-learning",
    desc: "Built proficiency in C, C++, Java, and Python. Started web development and database projects.",
  },
  {
    year: "2025–26",
    title: "Projects & Advanced Learning",
    org: "Independent Work",
    desc: "Building real-world projects, exploring data analytics, and preparing for industry-level development.",
  },
];

// Placeholder achievements — replace with verified information
export const achievements = [
  // Add real achievements here when available
  // Example format:
  // { title: "Achievement Title", desc: "Description", date: "2024", org: "Organization" },
];

// Placeholder certifications — replace with verified information
export const certifications = [
  // Add real certifications here when available
  // Example format:
  // { title: "Cert Name", org: "Issuing Org", year: "2024", color: "#3B82F6" },
];

export const currentFocus = [
  { num: "01", title: "Data Analytics", desc: "Pandas, NumPy, visualization & insights" },
  { num: "02", title: "Advanced DSA", desc: "Graphs, DP, advanced algorithms" },
  { num: "03", title: "Software Development", desc: "Clean architecture & design patterns" },
  { num: "04", title: "Real-world Projects", desc: "Building products people actually use" },
];

export const learningTerminal = [
  "Data Analytics",
  "Advanced DSA",
  "Software Development",
  "System Design Basics",
];
