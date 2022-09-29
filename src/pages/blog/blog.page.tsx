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
import { uiDataMediaCenterBlog } from "../../redux/uiData/selectors";
import { useSelector } from "../../redux/store";
import { SiteContentMediaCenterBlog } from "../../api/types/fetch.ui.types";

export const BlogPage: React.FC = (): JSX.Element => {
  const mediaCenterBlogData = useSelector(uiDataMediaCenterBlog);
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
        h={isMobile ? "37.5rem" : "auto"}
        m={"0 0 10rem 0"}
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
        {mediaCenterBlogData?.length > 1 &&
          mediaCenterBlogData.map((post: any) => {
            const { Preview } = Blog;
            return (
              <Preview.Root key={post.bId}>
                <SocialTitle
                  date={post.date}
                  title={post.title}
                  linkedInLink={"about:blank"}
                  twitterLink={"http://youtube.com"}
                />
                <Preview.Image.Root onClick={handlePreviewClick(post.bId)}>
                  <img src={post.image} alt={post.title} style={{ width: "100%" }} />
                </Preview.Image.Root>
                <Divider variant="dashed" />
                <Preview.Description onClick={handlePreviewClick(post.bId)}>{post.excerpt}</Preview.Description>
              </Preview.Root>
            );
          })}
      </Section>
    </>
  );
};
