import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Amin Akbari | Backend-first Full-Stack Developer",
    short_name: "Amin Akbari",
    description:
      "Amin Akbari - Backend-first full-stack developer focused on scalable software systems, robust APIs, and practical automation.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/public/favicon.ico",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/public/favicon.ico",
        sizes: "64x64",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: [
      "portfolio",
      "ai",
      "software engineering",
      "machine learning",
      "developer",
      "web development",
    ],
    lang: "en",
    dir: "ltr",
    scope: "/",
  };
}
