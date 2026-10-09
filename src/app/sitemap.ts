import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.mijnbespaarradar.nl";

  const routes = [
    "",
    "/vergelijken/energie",
    "/vergelijken/internet",
    "/vergelijken/sim-only",
    "/vergelijken/abonnementen",
    "/over-ons",
    "/contact",
    "/privacy",
    "/disclaimer",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : route.startsWith("/vergelijken") ? 0.8 : 0.3,
  }));
}
