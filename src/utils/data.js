import digimartuser from "../assets/digiuser.png";
import digimartadmin from "../assets/Digiadmin.png";
import Music from "../assets/Screenshot 2025-02-25 115123.png";
import shirts from "../assets/shirts.png";
import chat from "../assets/Screenshot 2025-03-04 171819.png";
import moviewatch from "../assets/Screenshot 2025-07-04 124146.png";


export const navLinks = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const experiences = [
  {
    role: "MERN Stack Developer",
    company: "codesis technologies pvt ltd",
    duration: "APR 2024 - Present",
    description:
      "Led the development of enterprise applications using React, Node.js, and AWS. Implemented CI/CD pipelines and mentored junior developers.",
    
  },
  {
    role: "MERN Stack Developer",
    company: "Freelance",
    duration: "MAY 2023 - APR 2024",
    description:
      "Developed and maintained web applications using React, Express, and MongoDB. Collaborated with UX designers to implement responsive designs.",
   
  },
  {
    role: "QC Associate",
    company: "DSG-US",
    duration: "MAR 2022 - MAY 2023",
    description:
      "Developed and maintained web applications using React, Express, and MongoDB. Collaborated with UX designers to implement responsive designs.",
   
  },

];


export let projects = [
  {
    title: "Arlo AI",
    description: "Arlo Web App for Personal Messaging",
    image: chat,
    tags: ["Vite + React", "Tailwind CSS", "Antd", "node", "express"],
    link: "https://silver-mochi-69a5a4.netlify.app/",
    gitlink: "https://github.com/amarkumarprajapati/chatweb_webapp.git",
  },
  {
    title: "Digimart - User",
    description:
      "Developed an online grocery delivery platform for convenient shopping and delivery",
    image: digimartuser,
    tags: ["Vite + React", "Antd", "Tailwind CSS"],
    link: "https://digimartelectrolic.netlify.app/",
    gitlink: "https://github.com/amarkumarprajapati/Ecomm.git",
  },
   {
    title: "Digimart - Admin",
    description:
      "Developed an online grocery delivery platform for convenient shopping and delivery",
    image: digimartadmin,
    tags: ["Vite + React", "Antd", "Tailwind CSS"],
    link: "https://digimartadmin.netlify.app/login",
    gitlink: "https://github.com/amarkumarprajapati/Ecomm.git",
  },
  {
    title: "Music Player",
    description: "rontend - react, tailwind css, html and express , mongodb",
    image: Music,
    tags: ["Vite + React", "Tailwind CSS", "AWS"],
    link: "https://musicwebappplay.netlify.app/",
    gitlink: "https://github.com/amarkumarprajapati/music_Frontend.git",
  },
  {
    title: "T-shirt",
    description:
      "Crafted an interactive platform for customizing and ordering personalized T-shirts.",
    image: shirts,
    tags: ["Vite + React", "Tailwind CSS", "Three.js"],
    link: "https://tshirts123.netlify.app/",
    gitlink: "https://github.com/amarkumarprajapati/T-shirts_frontend.git",
  },
  {
    title: "Watch-Movies Online",
    description:
      "Crafted an interactive platform for customizing and ordering personalized T-shirts.",
    image: moviewatch,
    tags: ["Vite + React", "Tailwind CSS"],
    link: "https://spectacular-sawine-14a85f.netlify.app/",
    gitlink: "https://github.com/amarkumarprajapati/T-shirts_frontend.git",
  },
];

// export const projects = [
//   {
//     title: "E-commerce Platform",
//     description:
//       "A full-featured online store with payment processing, inventory management, and admin dashboard.",
//     image:
//       "https://readdy.ai/api/search-image?query=Modern%20e-commerce%20website%20interface%20with%20clean%20design%2C%20showing%20product%20grid%20layout%20with%20high%20quality%20product%20images%2C%20minimalist%20navigation%2C%20shopping%20cart%20functionality%2C%20on%20a%20light%20background%20with%20subtle%20shadows%20and%20professional%20UI%20elements&width=600&height=400&seq=1&orientation=landscape",
//     techStack: ["React", "Node.js", "MongoDB", "Stripe API"],
//     github: "https://github.com",
//     demo: "https://demo.com",
//   },
//   {
//     title: "Task Management App",
//     description:
//       "A collaborative task management application with real-time updates, file sharing, and team communication.",
//     image:
//       "https://readdy.ai/api/search-image?query=Task%20management%20application%20interface%20showing%20kanban%20board%20with%20colorful%20task%20cards%2C%20progress%20tracking%2C%20team%20collaboration%20features%2C%20calendar%20view%2C%20with%20clean%20modern%20UI%20design%20on%20light%20background%20with%20subtle%20shadows&width=600&height=400&seq=2&orientation=landscape",
//     techStack: ["React", "Firebase", "Material UI", "Socket.io"],
//     github: "https://github.com",
//     demo: "https://demo.com",
//   },
//   {
//     title: "Fitness Tracker",
//     description:
//       "A mobile-responsive fitness tracking application with workout plans, progress charts, and social features.",
//     image:
//       "https://readdy.ai/api/search-image?query=Fitness%20tracking%20application%20interface%20showing%20workout%20statistics%2C%20progress%20charts%2C%20activity%20tracking%2C%20with%20clean%20modern%20UI%20design%2C%20health%20metrics%20visualization%2C%20on%20light%20background%20with%20subtle%20shadows%20and%20professional%20UI%20elements&width=600&height=400&seq=3&orientation=landscape",
//     techStack: ["React Native", "Express", "PostgreSQL", "Chart.js"],
//     github: "https://github.com",
//     demo: "https://demo.com",
//   },
//   {
//     title: "Weather Dashboard",
//     description:
//       "A weather forecasting application with interactive maps, historical data, and location-based alerts.",
//     image:
//       "https://readdy.ai/api/search-image?query=Weather%20dashboard%20application%20interface%20showing%20forecast%20data%2C%20temperature%20charts%2C%20weather%20maps%2C%20with%20clean%20modern%20UI%20design%2C%20meteorological%20visualizations%2C%20on%20light%20background%20with%20subtle%20shadows%20and%20professional%20UI%20elements&width=600&height=400&seq=4&orientation=landscape",
//     techStack: ["Vue.js", "Express", "OpenWeatherMap API", "D3.js"],
//     github: "https://github.com",
//     demo: "https://demo.com",
//   },
//   {
//     title: "Recipe Sharing Platform",
//     description:
//       "A community-driven recipe sharing platform with search, filtering, and user profiles.",
//     image:
//       "https://readdy.ai/api/search-image?query=Recipe%20sharing%20platform%20interface%20showing%20food%20photography%2C%20recipe%20cards%2C%20ingredient%20lists%2C%20cooking%20instructions%2C%20with%20clean%20modern%20UI%20design%2C%20culinary%20presentation%2C%20on%20light%20background%20with%20subtle%20shadows%20and%20professional%20UI%20elements&width=600&height=400&seq=5&orientation=landscape",
//     techStack: ["React", "GraphQL", "MongoDB", "AWS S3"],
//     github: "https://github.com",
//     demo: "https://demo.com",
//   },
//   {
//     title: "Portfolio Generator",
//     description:
//       "A tool for developers to create and deploy professional portfolios with customizable templates.",
//     image:
//       "https://readdy.ai/api/search-image?query=Portfolio%20website%20generator%20interface%20showing%20template%20selection%2C%20customization%20options%2C%20preview%20mode%2C%20with%20clean%20modern%20UI%20design%2C%20professional%20layout%20examples%2C%20on%20light%20background%20with%20subtle%20shadows%20and%20professional%20UI%20elements&width=600&height=400&seq=6&orientation=landscape",
//     techStack: ["Next.js", "Tailwind CSS", "Netlify API", "GitHub API"],
//     github: "https://github.com",
//     demo: "https://demo.com",
//   },
// ];

export const skills = [
  { name: "JavaScript", level: 90, icon: "fab fa-js" },
  { name: "React", level: 95, icon: "fab fa-react" },
  { name: "Node.js", level: 85, icon: "fab fa-node-js" },
  { name: "HTML5", level: 95, icon: "fab fa-html5" },
  { name: "CSS3", level: 90, icon: "fab fa-css3-alt" },
  { name: "Python", level: 30, icon: "fab fa-python" },
  // { name: "TypeScript", level: 85, icon: "fas fa-code" },
  { name: "MongoDB", level: 80, icon: "fas fa-database" },
  { name: "Git", level: 90, icon: "fab fa-git-alt" },
  // { name: "Docker", level: 75, icon: "fab fa-docker" },
  { name: "AWS", level: 70, icon: "fab fa-aws" },
  { name: "UI/UX Design", level: 80, icon: "fas fa-pencil-ruler" },
]; 