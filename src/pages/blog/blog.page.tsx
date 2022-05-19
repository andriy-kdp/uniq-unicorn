import React, { MouseEventHandler } from "react";
import MainBg from "../../assets/backgrounds/blog/blog_main_bg.png";
import { SlideSection } from "../../components/silde-section/slide-section.component";
import { Section } from "../../components/section/section.component";
import { Divider } from "../../components/divider/divider.styles";
import { useNavigate } from "react-router-dom";
import { Blog } from "./blog.styles";
import { SocialTitle } from "../../components/social-title/social-title.component";
import { useMediaQuery } from "../../utils/use-media-query";
import { mockBlogItems } from "../../mock-data/blog";

export const BlogPage: React.FC = (): JSX.Element => {
  const goTo = useNavigate();
  const isMobile = useMediaQuery("sm");
  const handlePreviewClick =
    (articleId: string | number): MouseEventHandler<HTMLDivElement> =>
    () =>
      goTo(`/blog/articles/${articleId}`);
  return (
    <>
      <SlideSection
        bgImage={MainBg}
        title={"BLACK BANX BLOG"}
        bgVariant={"gradient"}
        titleAlign={"center"}
        justify={"center"}
        h={isMobile ? "37.5rem" : "57.8rem"}
        BgImageStyles={
          isMobile
            ? {
                backgroundSize: "200% 37.5rem",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "70%",
              }
            : { backgroundSize: "100%" }
        }
      />
      <Section mainContent m={"auto auto 4rem"}>
        {mockBlogItems.map((post) => {
          const { Preview } = Blog;
          return (
            <Preview.Root key={post.id}>
              <SocialTitle
                date={post.date}
                title={post.title}
                linkedInLink={"about:blank"}
                twitterLink={"http://youtube.com"}
              />
              <Preview.Image.Root onClick={handlePreviewClick(post.id)}>
                <img src={post.imgSrc} alt={post.title} style={{ width: "100%" }} />
              </Preview.Image.Root>
              <Divider variant="dashed" />
              <Preview.Description onClick={handlePreviewClick(post.id)}>{post.description}</Preview.Description>
            </Preview.Root>
          );
        })}
      </Section>
    </>
  );
};
