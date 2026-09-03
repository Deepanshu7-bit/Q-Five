import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://qfive.in";

  const routes = [
    "",
    "/services",
    "/about",
    "/work",
    "/work/software-development",
    "/work/marketing",
    "/work/video-editing",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/work") ? 0.9 : 0.8,
  }));
}
