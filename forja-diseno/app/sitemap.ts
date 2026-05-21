import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://forja-diseno.vercel.app",

      lastModified: new Date(),
    },
  ];
}