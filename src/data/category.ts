export interface Props {
  title: string;
  slug: string;
  color: "green" | "blue" | "orange" | "purple" | "pink";
  description: string;
}
export type Category = Props;

export const categories: Props[] = [
  {
    title: "Horneados",
    slug: "horneados",
    color: "blue",
    description:
      "",
  },
  {
    title: "Cafés Fríos",
    slug: "Bebidas",
    color: "orange",
    description:
      "",
  },
  {
    title: "Cafes Calientes",
    slug: "Repostreria",
    color: "green",
    description:
      "",
  },
  {
    title: "Extras",
    slug: "Licor",
    color: "pink",
    description:
      "",
  },
  {
    title: "Con Licor",
    slug: "Fritos",
    color: "purple",
    description:
      "",
  },
];
