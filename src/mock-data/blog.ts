import MockBg1 from "../assets/backgrounds/blog/mock_blog_prev_1.png";
import MockBg2 from "../assets/backgrounds/blog/mock_blog_prev_2.png";

export const mockBlogItems: {
  bId: string | number;
  image: string;
  title: string;
  date: string;
  excerpt: string;
}[] = [
  {
    bId: 0,
    date: "Blog Wednesday, 18 July 2018",
    title: "Travel to fill your heart, but not with a filled wallet | WB21",
    excerpt:
      "Why do you travel? is a question regular travellers face from different people that come across their lives. Our life is a journey, people believe; but, nobody accepts the fact that travel is a necessary process in our lives.",
    image: MockBg1,
  },
  {
    bId: 1,
    date: "Blog Thursday, 24 May 2018",
    title: "WB21 : The Revolution of Cryptocurrencies - writes Forbes Mexico",
    excerpt:
      "Forbes Mexico featured WB21 in their issue calling it the revolution of cryptocurrencies. The article titled “WB21: LA REVOLUCIÓN DE LAS CRIPTOMONEDAS” says much about WB21, its operations and how it made cryptocurrencies bankable.",
    image: MockBg2,
  },
];
