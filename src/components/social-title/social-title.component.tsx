import React, { MouseEventHandler } from "react";
import { IconButton } from "../icon-button/icon-button.component";
import { Wrap } from "../wrap/wrap.component";
import { SocT } from "./social-title.styles";
import TwitterIcon from "../../assets/icons/social/twitter_image_icon.png";
import LinkedInIcon from "../../assets/icons/social/linkedin_image_icon.png";
import { SocialTitleProps } from "./social-title.types";
import { useMediaQuery } from "../../utils/use-media-query";

export const SocialTitle: React.FC<SocialTitleProps> = (props): JSX.Element => {
  const { date, twitterLink, linkedInLink, title } = props;
  const isMobile = useMediaQuery("sm");
  const handleSocialClick =
    (link: string): MouseEventHandler<HTMLDivElement> =>
    () => {
      window.open(link, "_blank", "noopener noreferrer");
    };

  return (
    <SocT.Root>
      <Wrap sx={{ display: "flex", alignItems: "center", margin: isMobile ? "2rem 0" : "0.7rem 0" }}>
        {!isMobile && <SocT.Date>{date}</SocT.Date>}
        <SocT.Text>{title}</SocT.Text>
      </Wrap>

      <Wrap
        sx={{
          display: "flex",
          marginLeft: "auto",
          alignItems: "center",
          width: isMobile ? "100%" : "auto",
          justifyContent: "space-between",
        }}
      >
        {isMobile && <SocT.Date>{date}</SocT.Date>}

        <Wrap sx={{ marginLeft: "auto" }}>
          <IconButton>
            <img src={TwitterIcon} alt="Twitter icon" onClick={handleSocialClick(twitterLink)} />
          </IconButton>
        </Wrap>

        <Wrap sx={{ marginBottom: "0.4rem", marginLeft: "2rem" }}>
          <IconButton>
            <img src={LinkedInIcon} alt="LinkedIn icon" height={"100%"} onClick={handleSocialClick(linkedInLink)} />
          </IconButton>
        </Wrap>
      </Wrap>
    </SocT.Root>
  );
};
