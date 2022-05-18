export type ArticleItem = {
  id: string;
  imgSrc: string;
  date: string;
  title: string;
  description: string;
  size?: "big" | "small-top" | "small-bottom";
};

export type ArticlesSection = {
  title: string;
  items: ArticleItem[];
};
