import React from "react";
import MainBG from "../../assets/images/backgrounds/news/news_main_bg.png";
import Img1 from "../../assets/images/backgrounds/news/mock_news_1.png";
import Img21 from "../../assets/images/backgrounds/news/mock_news_2_1.png";
import Img22 from "../../assets/images/backgrounds/news/mock_news_2_2.png";
import Img3 from "../../assets/images/backgrounds/news/mock_news_3.png";
import { Section } from "../../components/section/section.component";
import { News } from "./news.styles";
import { SocialTitle } from "../../components/social-title/social-title.component";
import { Wrap } from "../../components/wrap/wrap.component";
import { Divider } from "../../components/divider/divider.styles";
import { SlideSection } from "../../components/silde-section/slide-section.component";

const mockNews: {
  id: string | number;
  images: string[];
  title: string;
  date: string;
  preview: string;
}[] = [
  {
    id: "1",
    images: [Img1],
    date: "News August 1, 2018",
    title: "WB21 launched Crypto Currency Trading System",
    preview:
      "The future of blockchain technology is a bright one, thus WB21 announced today the launch of its Cryptocurrency trading system which enables customers to enjoy seamless integration of cryptocurrency with the features of online banking. The new feature that joined WB21’s array of services is giving every customer the opportunity to buy, sell, hold and transfer Bitcoins without limitation on amounts. It further enables customers to do an instant conversion of their cryptocurrency holdings into any of the 28 fiat currencies that WB21 is offering.",
  },
  {
    id: "2",
    images: [Img21, Img22],
    date: "News April 22, 2018",
    title: 'Global Banker Award 2018 awarded WB21 as "Best Innovation in Retail Banking"',
    preview:
      "Frankfurt a. M., April 22, 2018: WB21, being one of the most prominent names in the global FinTech sector was awarded the Global Banker Award 2018 in the category 'Best Innovation in Retail Banking' in an event held in Frankfurt a. M., Germany. The award is given to exceptional Financial Institutions for revolutionary achievements in the industry. Witnessing the growth and innovation, this year, it was awarded to WB21.Since its establishment, WB21 has implemented innovations in the banking sector making banking operations simple and efficient. WB21's trademarked innovations ATAP and IRTP which facilitates fastest money transfer across the globe and its proprietary real time customer identification software Global KYC, allowing the company to identify clients from 180 countries when opening their bank accounts, in less than 8 minutes, has received a tremendous welcome from the world making the FinTech company evaluated at 9.8 Billion USD.'",
  },
  {
    id: "3",
    images: [Img3],
    date: "News  May 28, 2018",
    title: "5 Million Lives Redefined - WB21 acquires five Million customers in less than 3 years.",
    preview:
      "Singapore, May 28, 2018: Creating a new history in the global financial sector, WB21 has acquired its 5 millionth customer. Working as a digital bank, the FinTech company which is currently evaluated at 9.8 Billion USD started its services in December 2015 and completed this milestone in less than 3 years. WB21 offers international bank accounts to individuals and businesses in 180 countries for 28 different currencies. Fastest cross-border payments and lowest banking fees are the two unique factors that enabled the company to have the fastest momentum of growth.",
  },
];

export const NewsPage: React.FC = (): JSX.Element => {
  return (
    <>
      <SlideSection
        bgImage={MainBG}
        title={"Black Banx media center news"}
        justify={"center"}
        titleAlign={"center"}
        m={"auto auto 11rem"}
        BgRootProps={{ justifyContent: "center", transform: "translate(-10%)" }}
      />
      <Section mainContent>
        <News.Root>
          {mockNews.map((item) => (
            <News.Item.Root key={item.id}>
              <SocialTitle date={item.date} linkedInLink="about:blank" title={item.title} twitterLink="about:blank" />
              <News.Item.Preview multiImages={item.images.length > 1}>
                {item.images.length === 1 && (
                  <Wrap sx={{ gridArea: "image" }}>
                    <img src={item.images[0]} alt={"img-1"} />
                  </Wrap>
                )}
                {item.images.length > 1 &&
                  item.images.map((image, idx) => (
                    <Wrap sx={{ gridArea: idx === 0 ? "image" : "image-secondary" }} key={image}>
                      <img src={image} alt={"img-1"} />
                    </Wrap>
                  ))}
                {item.images.length <= 1 && <Divider variant="dashed" />}
                <News.Item.Description>{item.preview}</News.Item.Description>
              </News.Item.Preview>
            </News.Item.Root>
          ))}
        </News.Root>
      </Section>
    </>
  );
};
