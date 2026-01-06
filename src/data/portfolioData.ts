export const personalInfo = {
  name: "Hamza El Mourabit",
  title: "Full Stack Developer — Final-Year Engineering Student",
  location: "Casablanca, Morocco",
  status: "Actively seeking a Final-Year Internship (PFE)",
  summary: "Engineering student in Software Development and Information Technologies (5th year), specialized in full-stack development with strong backend expertise. Experienced in modern web technologies, microservices architectures, enterprise Java platforms, DevOps pipelines, and database-driven systems. Motivated to contribute to real-world projects and grow within a technical team.",
  email: "hamzaelmourabit2003@gmail.com",
  github: "https://github.com/filsaw",
  linkedin: "https://www.linkedin.com/in/hamza-elmourabit2003/",
};

export const skills = {
  Frontend: [
    "React 18",
    "Vite",
    "Tailwind CSS",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "Angular",
    "React Router"
  ],
  Backend: [
    "Java",
    "Spring Boot",
    "PHP (Laravel)",
    "Python (Django)",
    "REST APIs",
    "JWT Authentication"
  ],
  Databases: [
    "MySQL",
    "ORM: Eloquent, Hibernate (Liferay Service Builder)",
    "Liquibase (schema migration)"
  ],
  "DevOps & Tools": [
    "Docker",
    "Docker Compose",
    "GitHub Actions (CI/CD)",
    "Kubernetes (Helm)",
    "Git",
    "GitHub",
    "Postman"
  ],
  "Architecture & Concepts": [
    "Microservices Architecture",
    "API Gateway",
    "Modular Architecture (OSGi)",
    "Service-Oriented Architecture (SOA)",
    "CI/CD Pipelines",
    "Secure API Design"
  ]
};

export const projects = [
  {
    id: 1,
    title: "Scalable E-Commerce Microservices Platform with ML Recommendations",
    featured: true,
    description: "A fully containerized, scalable e-commerce platform built with a microservices architecture. Core business logic is split into independent services (Users, Products, Orders, Interactions), accessed through a FastAPI API Gateway. The system includes a Machine Learning recommendation service using collaborative filtering to provide personalized product suggestions based on user behavior.",
    keyFeatures: [
      "Independent microservices with isolated databases",
      "FastAPI API Gateway with JWT authentication and routing",
      "ML recommendation engine (Scikit-learn)",
      "Modern React + Tailwind SPA frontend",
      "Docker & Docker Compose orchestration"
    ],
    techStack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "FastAPI",
      "Django REST Framework",
      "Flask",
      "MySQL",
      "Docker",
      "Scikit-learn",
      "Pandas"
    ],
    category: "Full Stack + ML"
  },
  {
    id: 2,
    title: "Syndic Management Backend System (Liferay DXP)",
    featured: true,
    description: "Enterprise-grade backend system for condominium/property management built on Liferay DXP 7.4. The application manages residences, owners, lots, and financial contributions using a modular OSGi-based architecture and exposes secure REST APIs for client consumption.",
    keyFeatures: [
      "Modular OSGi architecture (microservice-like modules)",
      "REST APIs with JAX-RS",
      "ORM & service layer via Liferay Service Builder",
      "Complex entity relationships modeling",
      "Gradle-based Liferay workspace"
    ],
    techStack: [
      "Java",
      "Liferay DXP 7.4",
      "OSGi",
      "JAX-RS",
      "Service Builder",
      "Gradle",
      "Tomcat",
      "MySQL"
    ],
    category: "Backend / Enterprise"
  },
  {
    id: 3,
    title: "Corporate Reservation System & ServiceNow Integration",
    featured: true,
    description: "A full-stack corporate reservation platform for managing rooms and resources. The system integrates securely with ServiceNow, acting as a proxy to retrieve metadata and audit logs. Built with a Laravel + React monolithic SPA using Inertia.js and supported by a full CI/CD and Kubernetes deployment workflow.",
    keyFeatures: [
      "Reservation conflict & availability logic",
      "Secure ServiceNow API proxy with caching",
      "SPA using Inertia.js (no separate API layer)",
      "Automated CI/CD pipeline with Jenkins",
      "Dockerized & deployed with Kubernetes (Helm)"
    ],
    techStack: [
      "Laravel 12",
      "PHP 8.2",
      "React 18",
      "Inertia.js",
      "Tailwind CSS",
      "MySQL",
      "Liquibase",
      "Docker",
      "Jenkins",
      "Kubernetes",
      "Nginx"
    ],
    category: "Full Stack / DevOps"
  }
];

export const experience = [
  {
    id: 1,
    title: "Web Developer Intern",
    company: "Fiduciaire Brighten",
    location: "Casablanca",
    period: "Internship",
    responsibilities: [
      "Built a corporate website (HTML, CSS, JavaScript)",
      "Developed pages: Home, Blog, Contact, Quote Request",
      "Responsive & multi-device optimization"
    ]
  },
  {
    id: 2,
    title: "Web Developer Intern",
    company: "Gwendolyn",
    location: "Casablanca",
    period: "Internship",
    responsibilities: [
      "Developed a parking management web application",
      "Backend development with Liferay",
      "Frontend development with Angular"
    ]
  }
];

export const education = [
  {
    id: 1,
    degree: "Engineering Degree (5th Year)",
    field: "Software Development & IT",
    institution: "Institut Supérieur du Génie Appliqué (IGA)",
    period: "2024–Present",
    current: true
  },
  {
    id: 2,
    degree: "Bachelor's Degree",
    field: "Information Systems",
    institution: "IGA",
    period: "2021–2024",
    current: false
  }
];
