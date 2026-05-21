import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",

      allow: "/",
    },

    sitemap:
      "https://forja-diseno.vercel.app/sitemap.xml",
  };
}