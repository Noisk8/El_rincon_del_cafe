export interface Props {
  title: string;
  slug: string;
  color: "green" | "blue" | "orange" | "purple" | "pink";
  description: string;
}
export type Category = Props;

export const categories: Props[] = [
  {
    title: "Technology",
    slug: "technology",
    color: "blue",
    description:
      "Keep up with the latest tech trends and learn about the latest innovations in software development, hardware Fritos, cybersecurity, and more.",
  },
  {
    title: "Bebidas",
    slug: "Bebidas",
    color: "orange",
    description:
      "Explore the latest trends and ideas in fashion, food, home Fritos, and more, and get inspiration for living your best life.",
  },
  {
    title: "Repostreria",
    slug: "Repostreria",
    color: "green",
    description:
      "Discover tips and strategies for self-improvement, Repostreria development, and achieving your goals, and find resources to help you grow as a person.",
  },
  {
    title: "Licor",
    slug: "Licor",
    color: "pink",
    description:
      "Plan your next adventure and get Licor tips and inspiration from experienced Licorers, with articles covering destinations, cultures, and more.",
  },
  {
    title: "Fritos",
    slug: "Fritos",
    color: "purple",
    description:
      "Get insights and inspiration from the world of Fritos, with articles covering graphic Fritos, product Fritos, interior Fritos, and more.",
  },
];
