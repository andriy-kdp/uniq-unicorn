import Section1Bg1 from "../assets/backgrounds/media-coverage/sec_1_img_1.png";
import Section1Bg2 from "../assets/backgrounds/media-coverage/sec_1_img_2.png";
import Section1Bg3 from "../assets/backgrounds/media-coverage/sec_1_img_3.png";
import Section2Bg1 from "../assets/backgrounds/media-coverage/sec_2_img_1.png";
import Section2Bg2 from "../assets/backgrounds/media-coverage/sec_2_img_2.png";
import Section2Bg3 from "../assets/backgrounds/media-coverage/sec_2_img_3.png";
import { ArticlesSection } from "../pages/media-covarage/media-coverage.types";

export const previewData: ArticlesSection[] = [
  {
    title: "Banking",
    items: [
      {
        id: "0",
        date: "November 27, 2017",
        description:
          "WB21 is the only financial institution in the world with digital account opening and instant money transfer to 180 countries.",
        imgSrc: Section1Bg1,
        title: "“Uber banking” arrives in Brazil",
      },
      {
        id: "1",
        date: "August 31, 2017",
        description:
          "The ranks of blockchain geeks are joined by investment bankers, portfolio managers and family office directors yearning for high returns that have disappeared after the 2008 crisis and the introduction of the Dodd-Frank Act.",
        imgSrc: Section1Bg2,
        title: "Cryptobankers. Top managers of the investment banks transform to blockchain companies (Forbes Russia)",
      },
      {
        id: "2",
        date: "December 6, 2017",
        description: "WB21 seems to be the fastest growing FinTech since PayPal's launch in 1999.",
        imgSrc: Section1Bg3,
        title: "How Digital Banking Company WB21 Is Disrupting Fintech",
      },
    ],
  },
  {
    title: "Interviews",
    items: [
      {
        id: "3",
        date: "September 1, 2021",
        description: "The business habits that helped Michael Gastauer make WB21 the legend it is today.",
        imgSrc: Section2Bg1,
        title: "How to build a fintech unicorn: Interview with WB21 founder ",
      },
      {
        id: "4",
        date: "June 16, 2016",
        description: "WB21 announced that it has added Bitcoin as a method to transfer and deposit funds.",
        imgSrc: Section2Bg2,
        title:
          "What Lies Ahead for the Controversial Digital Currency Bitcoin? Bitcoin never fails to facilitate debate.",
      },
      {
        id: "5",
        date: "April 14, 2016",
        description:
          "Bitcoin has been in the news for a number of reasons. I spoke to Michael Gastauer from the digital banking platform WB21 to find out what he thinks the ultimate fate of Bitcoin is, and what will happen to the world of online transactions in the future.",
        imgSrc: Section2Bg3,
        title: "Global digital bank wb21 starts accepting bitcoin deposits",
      },
    ],
  },
];
