import { getAllPosts } from "@/utils/clientAction";

export default async function sitemap() {
  const { posts } = await getAllPosts();

  const data = [
    {
      url: process.env.NEXT_PUBLIC_URL,
      lastModified: "2024-04-18T11:03:58.254Z",
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}/about`,
      lastModified: "2024-04-18T11:03:58.254Z",
      changeFrequency: "Weekly",
      priority: 0.6,
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}/contact`,
      lastModified: "2024-04-18T11:03:58.254Z",
      changeFrequency: "Weekly",
      priority: 0.6,
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}/privacy-policy`,
      lastModified: "2024-04-18T11:03:58.254Z",
      changeFrequency: "Weekly",
      priority: 0.6,
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}/terms-of-service`,
      lastModified: "2024-04-18T11:03:58.254Z",
      changeFrequency: "Weekly",
      priority: 0.6,
    },
  ];
  posts.forEach((item) => {
    data.push({
      url: `${process.env.NEXT_PUBLIC_URL}/${item.slug}`,
      lastModified: new Date(item.created_at),
      changeFrequency: "daily",
      priority: 0.8,
    });
  });

  return data;
}
