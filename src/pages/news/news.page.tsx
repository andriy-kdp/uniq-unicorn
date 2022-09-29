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
import { uiDataMediaCenterNews, uiDataWebsiteText } from "../../redux/uiData/selectors";
import { useSelector } from "../../redux/store";
import { SiteContentMediaCenterNews } from "../../api/types/fetch.ui.types";

export const NewsPage: React.FC = (): JSX.Element => {
  const { mediaCenterNews } = useSelector(uiDataWebsiteText);
  const mediaCenterNewsData = useSelector(uiDataMediaCenterNews);
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
        title={mediaCenterNews.mc_nws_headone}
        justify={"center"}
        titleAlign={"center"}
        m={"auto auto 11rem"}
        BgImageStyles={
          isMobile
            ? { backgroundPosition: "90%", backgroundSize: "70rem", height: "37.5rem" }
            : { backgroundPosition: "30% 100%" }
        }
      />
      <Section mainContent>
        <News.Root>
          {mediaCenterNewsData ? (
            mediaCenterNewsData.map((item: SiteContentMediaCenterNews) => (
              <>
                <SocialTitle
                  date={item.mc_nws_date}
                  linkedInLink={item.mc_nws_linkedin}
                  title={item.mc_nws_link_txt}
                  twitterLink={item.mc_nws_twitter}
                />
                <News.Item.Root key={item.mc_news_id} onClick={handleClick(item.mc_news_id)}>
                  <News.Item.Preview multiImages={Array.isArray(item.mc_nws_img)}>
                    {item.mc_nws_img.length === 1 && (
                      <Wrap sx={{ gridArea: "image" }}>
                        <img src={item.mc_nws_img[0]} alt={"img-1"} style={{ position: "relative", width: "100%" }} />
                      </Wrap>
                    )}
                    {Array.isArray(item.mc_nws_img) &&
                      //@ts-ignore
                      item.mc_nws_img.map((image, idx) => (
                        <Wrap sx={{ gridArea: idx === 0 ? "image" : "image-secondary" }} key={image}>
                          <img src={image} alt={"img-1"} style={{ position: "relative", width: "100%" }} />
                        </Wrap>
                      ))}
                    {item.mc_nws_img.length > 1 && (
                      <Wrap sx={{ gridArea: "image" }} key={item.mc_nws_img}>
                        <img src={item.mc_nws_img} alt={"img-1"} style={{ position: "relative", width: "100%" }} />
                      </Wrap>
                    )}
                    {item.mc_nws_img.length <= 1 && <Divider variant="dashed" />}
                    <News.Item.Description>{item.mc_nws_paraone}</News.Item.Description>
                  </News.Item.Preview>
                </News.Item.Root>
              </>
            ))
          ) : (
            <></>
          )}
        </News.Root>
      </Section>
    </>
  );
};
