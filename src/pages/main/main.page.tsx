import React, { useState } from "react";
import { BenefitItemsType } from "../../components/benefits/benefits.types";
import { Benefits } from "../../components/benefits/benefits.component";
import { ButtonArrow } from "../../components/button-arrow/button-arrow.component";
import MainBg from "../../assets/backgrounds/home-page/home_bg.png";
import MapImage from "../../assets/backgrounds/home-page/map_image.png";
import MockVideo from "../../assets/backgrounds/home-page/mock_video.jpg";
import { Section } from "../../components/section/section.component";
import { Wrap } from "../../components/wrap/wrap.component";
import { ReactComponent as FastIcon } from "../../assets/icons/benefits-main/fast.svg";
import { ReactComponent as GlobalIcon } from "../../assets/icons/benefits-main/global.svg";
import { ReactComponent as SafeIcon } from "../../assets/icons/benefits-main/safe.svg";
import { SlideSection } from "../../components/silde-section/slide-section.component";
import SmartMockupBg from "../../assets/backgrounds/home-page/smart-mockup.png";
import { DownloadAppHeader, VideoCover, VideoFrame } from "./main.styles";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "../../utils/use-media-query";
import { ReactComponent as PlayButton } from "../../assets/icons/play_btn.svg";
import { uiDataWebsiteText } from "../../redux/uiData/selectors";
import { useSelector } from "../../redux/store";

export const MainPage: React.FC = (): JSX.Element => {
  const { homePage } = useSelector(uiDataWebsiteText);
  const [showVideoContent, setShowVideoContent] = useState(false);
  const nav = useNavigate();
  const isMobile = useMediaQuery("sm");
  const handleClickDownloadApp = () => {
    window.open(homePage.hp_sectionThree_textlink, "noopener norefferer");
  };

  const handleClickRegister = () => {
    nav("/auth/register");
  };

  const handleClickCover = () => {
    setShowVideoContent(true);
  };
  const benefitsList: BenefitItemsType = [
    {
      title: homePage.hp_head_left,
      description: homePage.hp_head_left_sub,
      icon: <SafeIcon />,
    },
    {
      title: homePage.hp_head_mid,
      description: homePage.hp_head_mid_sub,
      icon: <FastIcon />,
    },
    {
      title: homePage.hp_head_right,
      description: homePage.hp_head_right_sub,
      icon: <GlobalIcon />,
    },
  ];
  return (
    <>
      <SlideSection
        bgImage={MainBg}
        m={isMobile ? "4rem auto 9rem" : "4rem auto 4rem"}
        button={{
          title: homePage.hp_sectionOne_text,
          onClick: handleClickRegister,
        }}
        title={homePage.hp_sectionOne_head}
        mobile={isMobile}
        titleWidth={isMobile ? "100%" : "50%"}
        BgImageStyles={
          !isMobile
            ? { backgroundSize: "cover", backgroundPosition: "right" }
            : {
                backgroundSize: "80rem",
                backgroundPosition: "100%",
              }
        }
      />
      <Section mainContent m={isMobile ? "10.5rem auto 0" : "8rem auto 8rem"}>
        <Benefits items={benefitsList} vertical={isMobile} />
      </Section>

      {/* <Section mainContent m={"8rem auto 0"}>
        {showVideoContent ? (
          <VideoFrame
            src="https://www.youtube.com/embed/RLSQqb9hcXU?autoplay=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <VideoCover bgImage={MockVideo} onClick={handleClickCover}>
            <PlayButton />
          </VideoCover>
        )}
      </Section> */}

      <Section mainContent m={"8rem auto 0"}>
        <Wrap sx={{ textTransform: "uppercase" }}>
          <h2>{homePage.hp_sectionTwo_head}</h2>
        </Wrap>
        {!isMobile && (
          <Wrap sx={{ width: "100%" }}>
            <img src={MapImage} alt={"Map"} style={{ position: "relative", width: "100%" }} />
          </Wrap>
        )}
        <Wrap sx={{ marginLeft: "auto", marginBottom: "6rem" }}>
          <ButtonArrow onClick={handleClickRegister}>{homePage.hp_sectionTwo_text}</ButtonArrow>
        </Wrap>
      </Section>
      {!isMobile && (
        <Section mainContent m={"8rem auto 12rem"}>
          <img src={SmartMockupBg} alt={"Download mobile app"} style={{ position: "relative", width: "100%" }} />
          <Wrap
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              maxWidth: !isMobile ? "55%" : "100%",
              position: "absolute",
              justifyContent: "space-between",
              padding: !isMobile ? "4.7rem 9.2rem" : "2rem",
            }}
          >
            <DownloadAppHeader>{homePage.hp_sectionThree_head}</DownloadAppHeader>
            <ButtonArrow onClick={handleClickDownloadApp}>{homePage.hp_sectionThree_text}</ButtonArrow>
          </Wrap>
        </Section>
      )}
    </>
  );
};
