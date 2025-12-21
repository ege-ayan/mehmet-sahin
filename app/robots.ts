import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://drmehmetsahin.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/", "/*.json$", "/*.xml$"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
