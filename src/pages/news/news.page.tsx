import React, { MouseEventHandler } from "react";
import MainBG from "../../assets/backgrounds/news/news_main_bg.png";
import { Section } from "../../components/section/section.component";
import { News } from "./news.styles";
import { SocialTitle } from "../../components/social-title/social-title.component";
import { Wrap } from "../../components/wrap/wrap.component";
import { Divider } from "../../components/divider/divider.styles";
import { SlideSection } from "../../components/silde-section/slide-section.component";
import { useMediaQuery } from "../../utils/use-media-query";
import { useNavigate } from "react-router-dom";
import { mockNews } from "../../mock-data/news";

export const NewsPage: React.FC = (): JSX.Element => {
  const isMobile = useMediaQuery("sm");
  const nav = useNavigate();

  const handleClick =
    (articleId: string | number): MouseEventHandler<HTMLDivElement> =>
    () => {
      nav(`/news/article/${articleId}`);
    };

  return (
    <>
      <SlideSection
        bgImage={MainBG}
        title={"Black Banx media center news"}
        justify={"center"}
        titleAlign={"center"}
        m={"auto auto 11rem"}
        BgImageStyles={isMobile ? { backgroundPosition: "90%", backgroundSize: "70rem", height: "37.5rem" } : {}}
      />
      <Section mainContent>
        <News.Root>
          {mockNews.map((item) => (
            <News.Item.Root key={item.id} onClick={handleClick(item.id)}>
              <SocialTitle date={item.date} linkedInLink="about:blank" title={item.title} twitterLink="about:blank" />
              <News.Item.Preview multiImages={item.images.length > 1}>
                {item.images.length === 1 && (
                  <Wrap sx={{ gridArea: "image" }}>
                    <img src={item.images[0]} alt={"img-1"} style={{ position: "relative", width: "100%" }} />
                  </Wrap>
                )}
                {item.images.length > 1 &&
                  item.images.map((image, idx) => (
                    <Wrap sx={{ gridArea: idx === 0 ? "image" : "image-secondary" }} key={image}>
                      <img src={image} alt={"img-1"} style={{ position: "relative", width: "100%" }} />
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
