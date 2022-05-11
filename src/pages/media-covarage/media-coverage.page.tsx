import React, { ChangeEventHandler, useState } from "react";
import { SlideSection } from "../../components/silde-section/slide-section.component";
import MainBg from "../../assets/images/backgrounds/media-coverage/media_coverage_main_bg.png";
import Section1Bg1 from "../../assets/images/backgrounds/media-coverage/sec_1_img_1.png";
import Section1Bg2 from "../../assets/images/backgrounds/media-coverage/sec_1_img_2.png";
import Section1Bg3 from "../../assets/images/backgrounds/media-coverage/sec_1_img_3.png";
import Section2Bg1 from "../../assets/images/backgrounds/media-coverage/sec_2_img_1.png";
import Section2Bg2 from "../../assets/images/backgrounds/media-coverage/sec_2_img_2.png";
import Section2Bg3 from "../../assets/images/backgrounds/media-coverage/sec_2_img_3.png";
import { Section } from "../../components/section/section.component";
import { News } from "./media-covarage.styles";
import { Divider } from "../../components/divider/divider.styles";
import { Wrap } from "../../components/wrap/wrap.component";
import { Input } from "../../components/inputs/input/input.component";
import { ButtonArrow } from "../../components/button-arrow/button-arrow.component";

export type ArticleItem = {
  imgSrc: string;
  date: string;
  title: string;
  description: string;
  size?: "big" | "small-top" | "small-bottom";
};

type ArticlesSection = {
  title: string;
  items: ArticleItem[];
};

const sizesMap = new Map<number, ArticleItem["size"]>([
  [0, "big"],
  [1, "small-top"],
  [2, "small-bottom"],
]);

const sizesMapReverse = new Map<number, ArticleItem["size"]>([
  [0, "small-top"],
  [1, "small-bottom"],
  [2, "big"],
]);

const previewData: ArticlesSection[] = [
  {
    title: "Banking",
    items: [
      {
        date: "November 27, 2017",
        description:
          "WB21 is the only financial institution in the world with digital account opening and instant money transfer to 180 countries.",
        imgSrc: Section1Bg1,
        title: "“Uber banking” arrives in Brazil",
      },
      {
        date: "August 31, 2017",
        description:
          "The ranks of blockchain geeks are joined by investment bankers, portfolio managers and family office directors yearning for high returns that have disappeared after the 2008 crisis and the introduction of the Dodd-Frank Act.",
        imgSrc: Section1Bg2,
        title: "Cryptobankers. Top managers of the investment banks transform to blockchain companies (Forbes Russia)",
      },
      {
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
        date: "September 1, 2021",
        description: "The business habits that helped Michael Gastauer make WB21 the legend it is today.",
        imgSrc: Section2Bg1,
        title: "How to build a fintech unicorn: Interview with WB21 founder ",
      },
      {
        date: "June 16, 2016",
        description: "WB21 announced that it has added Bitcoin as a method to transfer and deposit funds.",
        imgSrc: Section2Bg2,
        title:
          "What Lies Ahead for the Controversial Digital Currency Bitcoin? Bitcoin never fails to facilitate debate.",
      },
      {
        date: "April 14, 2016",
        description:
          "Bitcoin has been in the news for a number of reasons. I spoke to Michael Gastauer from the digital banking platform WB21 to find out what he thinks the ultimate fate of Bitcoin is, and what will happen to the world of online transactions in the future.",
        imgSrc: Section2Bg3,
        title: "Global digital bank wb21 starts accepting bitcoin deposits",
      },
    ],
  },
];

export const MediaCoveragePage: React.FC = (): JSX.Element => {
  const [formData, setFormData] = useState<{ name: string; email: string }>({
    name: "",
    email: "",
  });

  const getSizeMap = (index: number): Map<number, ArticleItem["size"]> => {
    return index % 2 === 0 ? sizesMap : sizesMapReverse;
  };

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <>
      <SlideSection
        bgImage={MainBg}
        title={"Black Banx media and public relations"}
        titleAlign="center"
        justify="center"
        BgRootProps={{ justifyContent: "center" }}
      />
      <Section mainContent>
        {previewData.map((section, sectionIndex) => {
          const sizesMap = getSizeMap(sectionIndex);
          const isReverse = sectionIndex % 2 !== 0;

          return (
            <News.Root>
              <News.Title.Root>
                <News.Title.Body>{section.title}</News.Title.Body>
                <Divider variant="dashed" />
              </News.Title.Root>
              <News.Articles.Root reverse={isReverse}>
                {section.items.map((article, articleIndex) => {
                  const { Root, Title, Date, Description } = News.Articles.Item;
                  return (
                    <Root size={sizesMap.get(articleIndex)} imgSrc={article.imgSrc}>
                      <Date>{article.date}</Date>
                      <Title>{article.title}</Title>
                      <Description>{article.description}</Description>
                    </Root>
                  );
                })}
              </News.Articles.Root>
            </News.Root>
          );
        })}
      </Section>
      <Section mainContent>
        <Wrap
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            background: "#0c0c0c",
            padding: "5rem 7rem",
          }}
        >
          <span>Contact us</span>
          <h3>You have a question? Or just want to say hello...</h3>
          <Input
            fullWidth
            value={formData.name}
            onChange={handleInputChange}
            label={"Name"}
            name={"name"}
            placeholder={"Please enter your full name"}
          />
          <Input
            fullWidth
            value={formData.email}
            onChange={handleInputChange}
            label={"Email"}
            name={"email"}
            placeholder={"Please enter your email"}
          />
          <ButtonArrow onClick={handleSubmit}>Send</ButtonArrow>
        </Wrap>
      </Section>
    </>
  );
};
