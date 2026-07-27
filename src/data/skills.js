import * as SiIcons from "react-icons/si";
import { FaLightbulb } from "react-icons/fa";

const iconOrFallback = (name) => SiIcons[name] || FaLightbulb;

const skills = [
  {
    id: 1,
    category: "Frontend",
    description: "Building responsive and polished user interfaces.",
    items: [
      { name: "React.js", icon: iconOrFallback("SiReact"), featured: true },
      { name: "Material UI", icon: iconOrFallback("SiMaterialui"), featured: true },
      { name: "JavaScript", icon: iconOrFallback("SiJavascript"), featured: true },
      { name: "HTML5", icon: iconOrFallback("SiHtml5") },
      { name: "CSS3", icon: iconOrFallback("SiCss3") },
      { name: "Axios", icon: iconOrFallback("SiAxios") },
    ],
  },
  {
    id: 2,
    category: "Backend",
    description: "Developing scalable REST APIs and enterprise backend modules.",
    items: [
      { name: "Java", icon: iconOrFallback("SiJava"), featured: true },
      { name: "Spring Boot", icon: iconOrFallback("SiSpringboot"), featured: true },
      { name: "Spring MVC", icon: iconOrFallback("SiSpring") },
      { name: "Spring Data JPA", icon: iconOrFallback("SiDatabase") },
      { name: "REST APIs", icon: iconOrFallback("SiSwagger") },
      { name: "JWT", icon: iconOrFallback("SiJsonwebtokens") },
    ],
  },
  {
    id: 3,
    category: "Database",
    description: "Managing relational data with reliable SQL databases.",
    items: [
      { name: "PostgreSQL", icon: iconOrFallback("SiPostgresql"), featured: true },
      { name: "MySQL", icon: iconOrFallback("SiMysql") },
      { name: "SQL Server", icon: iconOrFallback("SiMicrosoftsqlserver") },
    ],
  },
  {
    id: 4,
    category: "Tools",
    description: "Tools I use to ship code and collaborate effectively.",
    items: [
      { name: "Git", icon: iconOrFallback("SiGit") },
      { name: "GitHub", icon: iconOrFallback("SiGithub") },
      { name: "Maven", icon: iconOrFallback("SiMaven") },
      { name: "Postman", icon: iconOrFallback("SiPostman") },
      { name: "Swagger", icon: iconOrFallback("SiSwagger") },
      { name: "Keycloak", icon: iconOrFallback("SiKeycloak") },
    ],
  },
  {
    id: 5,
    category: "Core Concepts",
    description: "Foundational software engineering principles I apply daily.",
    items: [
      { name: "OOP", icon: FaLightbulb },
      { name: "Collections", icon: FaLightbulb },
      { name: "Exception Handling", icon: FaLightbulb },
      { name: "Multithreading", icon: FaLightbulb },
      { name: "JDBC", icon: FaLightbulb },
      { name: "SDLC", icon: FaLightbulb },
      { name: "Clean Architecture", icon: FaLightbulb },
    ],
  },
];

export default skills;
