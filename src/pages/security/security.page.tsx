import React from "react";
import { SlideSection } from "../../components/silde-section/slide-section.component";
import MainBg from "../../assets/backgrounds/security/security_main_bg.png";
import PostPreviewImgData from "../../assets/backgrounds/security/data_mock.png";
import PostPreviewImgGlobal from "../../assets/backgrounds/security/global_mock.png";
import { Section } from "../../components/section/section.component";
import { SecPosts } from "./security.styles";
import { useMediaQuery } from "../../utils/use-media-query";

const posts: {
  title: string;
  description: string;
  subtitle: string;
  imgSrc: string;
}[] = [
  {
    title: "Based on Global diversification",
    description:
      "We've developed strong relationships with the leading Banks in the world to ensure your funds are always safe. Our client's money is never held at one Bank in one country. We provide the highest level of protection by keeping segregated accounts at the leading Banks, in various countries. As a result your money is globally diversified and protected by multiple jurisdictions. ",
    subtitle: "Black banx protects your money with our global diversification concept",
    imgSrc: PostPreviewImgGlobal,
  },
  {
    title: "Data protection",
    description:
      "Black Banx is fully PCI DSS 3.2 certified. We comply with the highest Data Security Standards and have a Team of Security experts paying utmost attention to protect your data. Our Servers are located in ISO certified Data Centers, complying with the highest of standards in the banking industry. Our payment software uses encrypted and secured ISO 20022 certified messaging schemes for payment execution and data transfers.",
    subtitle: "Black Banx protects your money with industry-leading security tools ",
    imgSrc: PostPreviewImgData,
  },
];

export const SecurityPage: React.FC = (): JSX.Element => {
  const isMobile = useMediaQuery("sm");
  return (
    <>
      <SlideSection
        bgImage={MainBg}
        title={"Black Banx fund protection"}
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
