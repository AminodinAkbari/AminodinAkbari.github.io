import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate?: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
{
  id: "payment-affiliate-services",
  companyName: "Payment & Affiliate Services",
  type: "Professional",
  category: ["Backend", "Web Dev"],
  websiteLink: "https://appforlanguage.com/#products",
  shortDescription:
    "Backend services powering App For Language (FunFluen)'s Stripe payments and affiliate system, including subscriptions, referral tracking, commission logic, webhooks, and secure API access.",
  techStack: [
    "Python",
    "FastAPI",
    "Stripe",
    "MongoDB",
    "Redis",
    "JWT",
    "Docker",
    "Linux",
  ],
  startDate: new Date("2024-10-02"),
  endDate: new Date("2026-03-01"),
  companyLogoImg: "/projects/payment-service/stripe-desktop.webp",

  pagesInfoArr: [
    {
      title: "Payment Service",
      description:
        "Internal payment infrastructure for Stripe customer management, checkout sessions, subscription management, and webhook processing.",
      imgArr: ["/projects/payment-service/stripe-screenshot.png"],
    },
    {
      title: "Affiliate Service",
      description:
        "Referral and commission backend that tracks clicks, sign-ups, and purchases while integrating with Stripe webhooks and Redis-based rate limiting. (No screenshot for some security reasons!You can view further information after contacting me and obtaining permission from my former company).",
      imgArr: [],
    },
  ],

  descriptionDetails: {
    paragraphs: [
      "I developed and maintained backend services that powered App For Language (FunFluen)'s payment and affiliate infrastructure using FastAPI, MongoDB, Redis, and Stripe.",
      "The payment service centralized Stripe interactions such as customer creation, checkout sessions, subscription management, and webhook processing, while persisting subscription state in MongoDB for other services to consume.",
      "The affiliate service handled referral links, click tracking, sign-up and purchase attribution, and commission logic. It integrated with the payment flow through Stripe customer metadata and webhook events, allowing referral statistics to be updated without polling.",
      "Together, the services used centralized JWT authentication, Redis-based rate limiting, webhook-driven workflows, and Dockerized deployment as part of a multi-service backend architecture.",
    ],
    bullets: [
      "Built a layered FastAPI payment service that abstracted Stripe SDK operations behind reusable service-level functions.",
      "Implemented secure checkout and API authentication using cookie-based token refresh flows and header-based JWT authentication.",
      "Implemented Stripe webhook processing with signature verification and idempotent event handling for subscription and payment-related events.",
      "Built an affiliate backend for referral links, click tracking, sign-up and purchase attribution, and automated commission calculations.",
      "Connected affiliate attribution to the payment flow by storing affiliate codes in Stripe customer metadata and processing Stripe webhook events.",
      "Implemented Redis-based rate limiting for referral clicks to reduce bot and click-spam abuse.",
      "Used MongoDB for persistent payment and affiliate data and Redis for caching and rate-limiting workloads.",
      "Dockerized the services and their database environments for predictable development and deployment.",
    ],
  },
},
{
  id: "subtitle-translation-with-ai",
  companyName: "AI Subtitle Translation",
  type: "Professional",
  category: ["Backend", "NLP"],
  shortDescription:
    "Async FastAPI microservice that translates WebVTT subtitles between languages using Gemini through OpenRouter, with background job tracking and MongoDB persistence.",
  techStack: [
    "Python",
    "FastAPI",
    "OpenRouter",
    "Gemini",
    "MongoDB",
    "Docker",
    "Linux"
  ],
  startDate: new Date("2024-05-16"),
  endDate: new Date("2024-05-16"),
  companyLogoImg: "/projects/subtitle-translation/subtitle-translation.jpeg",

  pagesInfoArr: [
    {
      title: "AI Subtitle Translation API",
      description:
        "A production-oriented translation microservice that processes WebVTT subtitle files asynchronously while preserving subtitle IDs and timestamp alignment.",
      imgArr: [],
    },
  ],

  descriptionDetails: {
    paragraphs: [
      "I developed an asynchronous FastAPI microservice for translating WebVTT subtitle files between languages using Google's Gemini model through OpenRouter.",
      "The service processes translation jobs in the background, persists job state in MongoDB, and provides a polling-based workflow without blocking the API request.",
      "The implementation was designed around defensive AI integration, with strict structured prompting, duplicate-job prevention, output validation, and recovery from common LLM formatting issues.",
    ],
    bullets: [
      "Designed a structured LLM workflow that converts subtitle cues into a strict JSON array of [ID, text] and requires the model to preserve IDs exactly.",
      "Implemented asynchronous translation processing with FastAPI BackgroundTasks and a MongoDB-backed job lifecycle: pending → processing → completed/failed.",
      "Added idempotency checks to prevent duplicate translation jobs for the same video and language pair.",
      "Implemented defensive parsing and automatic recovery for common LLM output issues such as unexpected JSON formatting and markdown code fences.",
      "Validated subtitle IDs and failed jobs immediately when mismatches could corrupt timestamp alignment.",
      "Kept the service lightweight with FastAPI, OpenAI-compatible API access through OpenRouter, PyMongo, and standard Python libraries.",
    ],
  },
},
{
  id: "research-vault",
  companyName: "Research Vault (15 GitHub stars)",
  type: "Personal",
  category: ["Backend", "Web Dev", "AI"],
  githubLink: "https://github.com/AminodinAkbari/Research-vault",
  shortDescription:
    "Self-hosted research and knowledge management platform for collecting web research, reading articles distraction-free, taking notes, and using optional AI-powered research helpers.",
  techStack: [
    "Python",
    "FastAPI",
    "PostgreSQL",
    "SQLAlchemy",
    "Redis",
    "Celery",
    "SearXNG",
    "Jinja2",
    "Docker",
    "JWT",
  ],
  startDate: new Date("2025-04-23"),
  companyLogoImg: "/projects/research-vault/logo.jpeg",

  pagesInfoArr: [
    {
      title: "Website Content Extract",
      description:
        "When you save a web link, Research Vault automatically fetches the page in the background and strips away navigation bars, ads, sidebars, and other clutter—leaving just the main article text. This happens asynchronously via a Celery worker so you can keep working while extraction runs. The extracted content is stored alongside the link, making it searchable and available for the reader view even if the original site goes down or changes later. If extraction fails (paywall, network error, unusual markup), the link is simply marked as 'failed' and you can retry later.",
      imgArr: ["/projects/research-vault/articles-dashboared.png"],
    },
    {
      title:"Highlighting Text",
      description:"In the built-in reader mode, you can select any passage of an extracted article and mark it as a highlight. Each highlight can optionally carry a personal annotation—your own note about why that passage matters. Highlights are tied to the specific link and project, and they're included when you export a project to Markdown (rendered as blockquotes with annotations). This lets you build a personal collection of the most meaningful excerpts across all your saved sources without leaving the app.",
      imgArr : ["/projects/research-vault/article-with-highlights.png"]
    },
    {
      title:"How Search Works (Full-Text & Semantic)",
      description:"Full-text search uses PostgreSQL's built-in text search engine. It looks for your query words in note titles/contents and link titles/snippets/extracted text, ranking results by how prominently and frequently the terms appear. This is fast, requires no AI keys, and works entirely locally.\nSemantic search takes the top full-text matches (up to 10) and sends them to an AI model with your query. The model reorders them by meaning rather than keyword overlap—so a search for 'machine learning overfitting' can surface a note about 'regularization techniques' even if those exact words aren't in it. If no AI key is configured or the AI call fails, results fall back to the original full-text order automatically.",
      imgArr:["/projects/research-vault/search-feature.png"]
    }
  ],

  descriptionDetails: {
    paragraphs: [
      "I built Research Vault as a self-hosted research and knowledge management platform for collecting information from the web, organizing it into projects, and reading saved articles in a distraction-free environment.",
      "The application uses an asynchronous FastAPI backend with PostgreSQL, Redis, Celery, and SearXNG to handle authentication, article extraction, background processing, search, notes, tags, highlights, and reading-list workflows.",
      "AI features are optional and designed as one-shot helpers rather than a chatbot. They provide research roadmaps, article summaries, highlight explanations, tag suggestions, and semantic search while the application remains fully functional without an AI provider.",
    ],
    bullets: [
      "Built a complete async FastAPI backend with JWT authentication, user isolation, validation, and full CRUD workflows for research projects, notes, links, tags, and highlights.",
      "Implemented web research using self-hosted SearXNG with automatic background article extraction through Celery and Redis.",
      "Built a distraction-free reader with highlights, annotations, and reading-list states such as to_read, reading, done, and archived.",
      "Implemented PostgreSQL full-text search with relevance ranking across saved links and notes, with optional semantic reranking when AI providers are configured.",
      "Added Redis-backed rate limiting for authentication and AI endpoints to provide brute-force protection and reduce abuse.",
      "Integrated multiple optional AI providers through OpenRouter, Hugging Face, and Groq with a fallback strategy when one provider is unavailable.",
      "Implemented Markdown export to compile an entire research project, including notes, links, and highlights, into a downloadable document.",
      "Containerized the complete stack with Docker Compose, including FastAPI, PostgreSQL, Redis, SearXNG, and Celery.",
      "Covered the API with asynchronous integration tests and designed the application around a clean, extensible backend architecture.",
    ],
  },
},
{
  id: "sudo-explain",
  companyName: "Sudo Explain",
  type: "Personal",
  category: ["Full Stack", "Web Dev", "Backend"],
  githubLink: "https://github.com/AminodinAkbari/SudoExplainBlog-Back",
  shortDescription:
    "A bilingual full-stack blog platform built with Django REST Framework and React, featuring JWT authentication, typo-tolerant search, threaded comments, and a staff publishing dashboard.",
  techStack: [
    "Python",
    "Django",
    "Django REST Framework",
    "PostgreSQL",
    "React",
    "Vite",
    "Tailwind CSS",
    "Redis",
    "Celery",
    "SimpleJWT",
    "Axios",
    "Docker",
    "Gunicorn",
    "Bleach",
    "Pillow",
    "django-filter",
  ],
  startDate: new Date("2025-03-22"),
  endDate: new Date("2025-03-22"), // Replace with the actual end/latest development date
  companyLogoImg: "/projects/sudo-explain/logo.png",

  pagesInfoArr: [
    {
      title: "Homepage – Dark Theme",
      description:
        "Terminal-inspired post grid with search, skeleton loading, responsive layout, and dark/light theme support.",
      imgArr: ["/projects/sudo-explain/homepage.png"],
    },
    {
      title: "Post Detail – Bilingual Content",
      description:
        "Full article view with English/Persian content switching, tags, category, view count, and cover image.",
      imgArr: ["/projects/sudo-explain/post-detail.png"],
    },
    {
      title: "Threaded Comments",
      description:
        "Nested comment threads with replies, likes, moderation, and abuse-prevention mechanisms.",
      imgArr: ["/projects/sudo-explain/comments.png"],
    },
    {
      title: "Author Profile",
      description:
        "Public author page with profile information, statistics, and a paginated list of published posts.",
      imgArr: ["/projects/sudo-explain/author-profile.png"],
    },
    {
      title: "Staff Dashboard",
      description:
        "Staff-only publishing interface for creating and editing posts, uploading images, and managing tags and categories.",
      imgArr: ["/projects/sudo-explain/dashboard.png"],
    },
  ],

  descriptionDetails: {
    paragraphs: [
      "I built Sudo Explain as a bilingual full-stack blogging platform for technical content, combining a React frontend with a Django REST Framework backend and PostgreSQL. The platform supports paginated posts, full-text search, tag and category filtering, bilingual English/Persian content, threaded comments, public author profiles, and a dedicated staff publishing dashboard.",
      "The backend uses PostgreSQL full-text search with GIN indexes and trigram similarity to provide ranked and typo-tolerant search results. Security and data integrity are handled through JWT authentication, custom CORS and Content-Security-Policy middleware, HTML sanitization with Bleach, image validation with Pillow, soft deletion, request throttling, and user-scoped access control.",
      "The React frontend provides a terminal-inspired interface with dark/light themes, skeleton loading states, and authenticated workflows. Axios interceptors handle silent JWT refresh and retry concurrent requests after token expiration, while Redis and Celery are configured to support background processing such as AI-generated post summaries.",
    ],
    bullets: [
      "Implemented PostgreSQL full-text search using GIN indexes, SearchRank, and trigram similarity for ranked and typo-tolerant results.",
      "Built a bilingual content system with separate English and Persian post fields and a frontend language toggle.",
      "Designed a recursive threaded comment system with nested replies, edit timeouts, moderation, soft deletion, and per-user limits.",
      "Implemented comment likes with database uniqueness constraints, DRF throttling, and optimistic frontend updates.",
      "Built a view-tracking system using deduplication by IP and client-generated visitor ID, atomic F-expression updates, and rate limiting.",
      "Implemented JWT authentication with Axios-based silent token refresh and queued retry handling for concurrent 401 responses.",
      "Developed custom CORS and Content-Security-Policy middleware and added HTML sanitization and image validation to protect user-generated content.",
      "Created a staff-only dashboard for post CRUD operations, cover and inline image uploads, tag management, category selection, and soft deletion.",
      "Configured Celery and Redis for background processing, including support for AI-generated post summaries.",
      "Containerized the Django backend with Docker, Gunicorn, PostgreSQL, environment-based configuration, and WhiteNoise.",
    ],
  },
}
];

export const featuredProjects = Projects.slice(0, 3);
