import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
  id: "app-for-language",
  position: "Backend Engineer",
  company: "App For Language / FunFluen",
  location: "Remote",
  startDate: new Date("2023-01-01"),
  endDate: new Date("2026-03-01"),
  logo: "/experience/afl/afl-logo.png",
  description: [
    "Maintained, debugged, deployed, and updated backend services running in production environments.",
    "Designed and implemented new backend services and REST APIs while extending existing codebases with new product features.",
    "Managed Dockerized applications and Linux-based servers, including troubleshooting and production support.",
    "Wrote and maintained automated tests to improve software quality and reliability.",
  ],
  achievements: [
    "Developed and maintained production backend services using Python and FastAPI.",
    "Built new backend services and APIs for product features across App For Language and FunFluen.",
    "Worked with PostgreSQL, MongoDB, Redis, Docker, and Linux in a multi-service backend environment.",
    "Implemented payment and affiliate services integrating Stripe, webhooks, subscription management, referral tracking, and commission workflows.",
    "Handled production troubleshooting, deployments, bug fixes, and ongoing maintenance of backend systems.",
  ],
  skills: [
    "Python",
    "FastAPI",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Docker",
    "Linux",
    "Git",
  ],
  companyUrl: "https://appforlanguage.com",
}
];
