import React, { ChangeEventHandler, MouseEventHandler, useState } from "react";
import { SlideSection } from "../../components/silde-section/slide-section.component";
import MainBg from "../../assets/backgrounds/media-coverage/media_coverage_main_bg.png";
import { Section } from "../../components/section/section.component";
import { News } from "./media-covarage.styles";
import { Divider } from "../../components/divider/divider.styles";
import { Wrap } from "../../components/wrap/wrap.component";
import { Input } from "../../components/inputs/input/input.component";
import { ButtonArrow } from "../../components/button-arrow/button-arrow.component";
import FormBg from "../../assets/backgrounds/lines_bg.png";
import { useMediaQuery } from "../../utils/use-media-query";
import { useNavigate } from "react-router-dom";
import { ArticleItem } from "./media-coverage.types";
import { previewData } from "../../mock-data/media-coverage";

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

export const MediaCoveragePage: React.FC = (): JSX.Element => {
  const [formData, setFormData] = useState<{ name: string; email: string }>({
    name: "",
    email: "",
  });

  const nav = useNavigate();

  const isMobile = useMediaQuery("sm");

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

  const handleClickItem =
    (articleId: string): MouseEventHandler<HTMLDivElement> =>
    () => {
      nav(`news/${articleId}`);
    };

  return (
    <>
      <SlideSection
        bgImage={MainBg}
        title={"Black Banx media and public relations"}
        titleAlign="center"
        titleWidth={"70%"}
        justify="center"
        m={"0 auto 8rem"}
        BgImageStyles={
          isMobile
            ? {
                backgroundPosition: "40%",
                backgroundSize: "180%",
                opacity: "0.8",
              }
            : {
                backgroundPosition: "50%",
                backgroundSize: "70rem",
              }
        }
      />
      <Section mainContent>
        {previewData.map((section, sectionIndex) => {
          const sizesMap = getSizeMap(sectionIndex);
          const isReverse = sectionIndex % 2 !== 0;

          return (
            <News.Root key={`media-covarage-news-${sectionIndex}`}>
              <News.Title.Root>
                <News.Title.Body>{section.title}</News.Title.Body>
                <Divider variant="dashed" />
              </News.Title.Root>
              <News.Articles.Root reverse={isReverse}>
                {section.items.map((article, articleIndex) => {
                  const { Root, Title, Date, Description } = News.Articles.Item;
                  return (
                    <Root
                      size={sizesMap.get(articleIndex)}
                      imgSrc={article.imgSrc}
                      key={`news-article-${articleIndex}`}
                      onClick={handleClickItem(article.id)}
                    >
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
      {!isMobile && (
        <Section h={"60rem"} m={"17rem auto 13rem"}>
          <Wrap
            sx={{
              display: "flex",
              position: "absolute",
              width: "100%",
              height: "57rem",
              background: `url(${FormBg})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "100%",
              opacity: "0.4",
            }}
          />

          <Section mainContent>
            <Wrap
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                background: "#0c0c0c",
                padding: "5rem 7rem",
                marginTop: "3rem",
              }}
            >
              <News.Title.Root>
                <News.Title.Body>LETS CONNECT</News.Title.Body>
                <Divider variant="dashed" />
              </News.Title.Root>
              <News.Form.Subtitle>Contact us</News.Form.Subtitle>
              <News.Form.Title>You have a question? Or just want to say hello...</News.Form.Title>
              <Wrap sx={{ display: "flex", width: "100%", marginBottom: "2rem" }}>
                <Input
                  fullWidth
                  value={formData.name}
                  onChange={handleInputChange}
                  label={"Name"}
                  name={"name"}
                  placeholder={"Please enter your full name"}
                />
              </Wrap>

              <Input
                fullWidth
                value={formData.email}
                onChange={handleInputChange}
                label={"Email"}
                name={"email"}
                placeholder={"Please enter your email"}
              />
              <Wrap sx={{ margin: "4rem auto" }}>
                <ButtonArrow onClick={handleSubmit}>Send</ButtonArrow>
              </Wrap>
            </Wrap>
          </Section>
        </Section>
      )}
      {isMobile && (
        <Section mainContent m={"0 auto 10rem !important"}>
          <News.Title.Root>
            <News.Title.Body>LET'S CONNECT</News.Title.Body>
            <Divider variant="dashed" />
          </News.Title.Root>
          <h5>For Media enquiries please contact: mediateam@blackbanx.com</h5>
        </Section>
      )}
    </>
  );
};
