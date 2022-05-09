import React, { MouseEventHandler } from "react";
import MockBg1 from "../../assets/images/backgrounds/blog/mock_blog_prev_1.png";
import MockBg2 from "../../assets/images/backgrounds/blog/mock_blog_prev_2.png";
import MainBg from "../../assets/images/backgrounds/blog/blog_main_bg.png";
import { SlideSection } from "../../components/silde-section/slide-section.component";
import { Section } from "../../components/section/section.component";
import { Divider } from "../../components/divider/divider.styles";
import { useNavigate } from "react-router-dom";
import { Blog } from "./blog.styles";
import TwitterIcon from "../../assets/icons/social/twitter_image_icon.png";
import LinkedInIcon from "../../assets/icons/social/linkedin_image_icon.png";
import { Wrap } from "../../components/wrap/wrap.component";
import { IconButton } from "../../components/icon-button/icon-button.component";
const mockBlogItems: {
  id: string | number;
  date: string;
  title: string;
  description: string;
  imgSrc: string;
}[] = [
  {
    id: 0,
    date: "Blog Wednesday, 18 July 2018",
    title: "Travel to fill your heart, but not with a filled wallet | WB21",
    description:
      "Why do you travel? is a question regular travellers face from different people that come across their lives. Our life is a journey, people believe; but, nobody accepts the fact that travel is a necessary process in our lives.",
    imgSrc: MockBg1,
  },
  {
    id: 1,
    date: "Blog Thursday, 24 May 2018",
    title: "WB21 : The Revolution of Cryptocurrencies - writes Forbes Mexico",
    description:
      "Forbes Mexico featured WB21 in their issue calling it the revolution of cryptocurrencies. The article titled “WB21: LA REVOLUCIÓN DE LAS CRIPTOMONEDAS” says much about WB21, its operations and how it made cryptocurrencies bankable.",
    imgSrc: MockBg2,
  },
];

export const BlogPage: React.FC = (): JSX.Element => {
  const goTo = useNavigate();
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
      />
      <Section content>
        {mockBlogItems.map((post) => {
          const { Preview } = Blog;
          return (
            <Preview.Root>
              <Preview.Title.Root>
                <Preview.Title.Date>{post.date}</Preview.Title.Date>
                <Preview.Title.Text>{post.title}</Preview.Title.Text>
                <Wrap
                  sx={{
                    display: "flex",
                    marginLeft: "auto",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <IconButton>
                    <img src={TwitterIcon} alt="Twitter icon" />
                  </IconButton>
                  <Wrap sx={{ marginBottom: "0.4rem", marginLeft: "2rem" }}>
                    <IconButton>
                      <img
                        src={LinkedInIcon}
                        alt="LinkedIn icon"
                        height={"100%"}
                      />
                    </IconButton>
                  </Wrap>
                </Wrap>
              </Preview.Title.Root>
              <Preview.Image.Root onClick={handlePreviewClick(post.id)}>
                <img src={post.imgSrc} alt={post.title} />
              </Preview.Image.Root>
              <Divider variant="dashed" />
              <Preview.Description onClick={handlePreviewClick(post.id)}>
                {post.description}
              </Preview.Description>
            </Preview.Root>
          );
        })}
      </Section>
    </>
  );
};
