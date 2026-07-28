const projects = [
  {
    id: 1,
    title: "Face Recognition Attendance System",
    category: "Academic",
    description:
      "A real-time attendance system that leverages computer vision to identify faces and record attendance automatically.",
    longDescription:
      "This project automates attendance tracking by detecting and recognizing faces in real time. It reduces manual effort and improves accuracy by storing attendance data directly in a database.",
    tech: ["Python", "OpenCV", "Tkinter", "MySQL"],
    github: "https://github.com/gaurichavan/face-recognition-attendance",
    features: [
      "Real-time face detection and recognition",
      "Attendance record storage in MySQL",
      "Tkinter-based desktop UI",
      "Automated login and attendance tracking",
    ],
    outcome:
      "Delivered an automated attendance solution that significantly reduced manual effort and improved tracking reliability.",
  },
  {
    id: 2,
    title: "Mess Management System",
    category: "Academic",
    description:
      "A Java-based management application for handling mess operations, meal records, and user data efficiently.",
    longDescription:
      "The system streamlines mess operations by managing meal entries, customer information, and database operations through a simple desktop-based workflow.",
    tech: ["Java", "JDBC", "MySQL", "HTML5", "CSS3"],
    github: "https://github.com/gaurichavan/mess-management-system",
    features: [
      "CRUD operations for mess records",
      "JDBC-based database integration",
      "Customer and meal data management",
      "Simple and structured UI workflow",
    ],
    outcome:
      "Provided a practical solution for automating daily mess operations and maintaining records more efficiently.",
  },
  {
    id: 3,
    title: "SeerAgro",
    category: "Professional",
    description:
      "Built backend modules for crop, plantation, fertilizer, and pest management using Spring Boot and PostgreSQL.",
    longDescription:
      "Developed secure REST APIs and business logic for multiple agricultural management modules while ensuring clean architecture and maintainable service layers.",
    tech: ["Spring Boot", "PostgreSQL", "REST APIs", "Swagger"],
    github: "https://github.com/gaurichavan/seeragro",
    features: [
      "Secure CRUD API development",
      "Layered architecture with services and repositories",
      "Swagger documentation support",
      "Database optimization for agricultural modules",
    ],
    outcome:
      "Enabled scalable backend support for important agricultural operations and simplified API management.",
  },
  {
    id: 4,
    title: "Swagger Tool",
    category: "Professional",
    description:
      "Developed a custom API documentation and testing platform with React.js and Spring Boot.",
    longDescription:
      "Built an interactive platform that allows developers to create, document, and test APIs with a structured workflow and database-backed metadata storage.",
    tech: ["React.js", "Spring Boot", "PostgreSQL", "Axios"],
    github: "https://github.com/gaurichavan/swagger-tool",
    features: [
      "API Builder with GET, POST, PUT, PATCH, and DELETE support",
      "Interactive API documentation UI",
      "PostgreSQL metadata storage",
      "Frontend-backend workflow integration",
    ],
    outcome:
      "Created a practical internal tool that improved how API documentation and testing were managed.",
  },
];

export default projects;
