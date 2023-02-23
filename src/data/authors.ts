export interface Props {
  name: string;
  slug: string;
  image: string;
  bio: string;
}

export type Author = Props;

export const authors: Props[] = [
  {
    name: "Paula Garcia",
    slug: "paula-garcia",
    image: "./src/assets/authors/mario.webp",
    bio: "Emprendedora profesional con más de 10 años de xperiencia en el area administrativo y contable",
  },
  {
    name: "Juan David Magrigal",
    slug: "juan-david-magrigal",
    image: "./src/assets/authors/joshua.webp",
    bio: "Emprendedor profesional, chef con experiencia en catering",
  },
  
 
];
