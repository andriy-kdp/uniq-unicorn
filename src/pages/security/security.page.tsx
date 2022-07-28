import React from "react";
import { SlideSection } from "../../components/silde-section/slide-section.component";
import MainBg from "../../assets/backgrounds/security/security_main_bg.png";
import PostPreviewImgData from "../../assets/backgrounds/security/data_mock.png";
import PostPreviewImgGlobal from "../../assets/backgrounds/security/global_mock.png";
import { Section } from "../../components/section/section.component";
import { SecPosts } from "./security.styles";
import { useMediaQuery } from "../../utils/use-media-query";
import { uiDataWebsiteText } from "../../redux/uiData/selectors";
import { useSelector } from "../../redux/store";

export const SecurityPage: React.FC = (): JSX.Element => {
  const { aboutUsSecurity } = useSelector(uiDataWebsiteText);
  const isMobile = useMediaQuery("sm");

  const posts: {
    title: string;
    description: string;
    subtitle: string;
    imgSrc: string;
  }[] = [
    {
      title: aboutUsSecurity.abtus_scrty_left_HeadOne,
      description: aboutUsSecurity.abtus_scrty_left_HeadOne_Paraone,
      subtitle: aboutUsSecurity.abtus_scrty_HeadTwoSub,
      imgSrc: PostPreviewImgGlobal,
    },
    {
      title: aboutUsSecurity.abtus_scrty_right_HeadOne,
      description: aboutUsSecurity.abtus_scrty_right_HeadOne_ParaOne,
      subtitle: "Black Banx protects your money with industry-leading security tools ",
      imgSrc: PostPreviewImgData,
    },
  ];
  return (
    <>
      <SlideSection
        bgImage={MainBg}
        title={aboutUsSecurity.abtus_scrty_headOne}
        bgVariant={"gradient"}
        justify={"center"}
        titleAlign={"center"}
        h={isMobile ? "40rem" : "57.8rem"}
        BgImageStyles={
          isMobile
            ? {
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "50% 10%",
              }
            : {
                backgroundPosition: "center",
                backgroundSize: "cover",
              }
        }
      />
      <Section mainContent m={isMobile ? "6rem auto 16rem" : "12rem auto 16rem"}>
        <SecPosts.Root>
          {posts.map((post, idx) => (
            <SecPosts.Item.Root key={`sec-post-${idx}`}>
              <SecPosts.Item.Title>{post.title}</SecPosts.Item.Title>
              <SecPosts.Item.Image src={post.imgSrc} />
              <SecPosts.Item.Subtitle>{post.subtitle}</SecPosts.Item.Subtitle>
              <SecPosts.Item.Descriptiotn>{post.description}</SecPosts.Item.Descriptiotn>
            </SecPosts.Item.Root>
          ))}
        </SecPosts.Root>
      </Section>
      ;
    </>
  );
};
