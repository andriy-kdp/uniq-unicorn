import React from "react";
import { SlideSection } from "../../components/silde-section/slide-section.component";
import MainBg from "../../assets/backgrounds/leadership/leadership_main_bg.png";
import Placeholder from "../../assets/backgrounds/leadership/placeholder.png";
import { Section } from "../../components/section/section.component";
import { useMediaQuery } from "../../utils/use-media-query";
import { uiDataWebsiteText } from "../../redux/uiData/selectors";
import { useSelector } from "../../redux/store";
import { Card } from "./leadership.styles";
import { useNavigate } from "react-router-dom";

export const LeadershipPage: React.FC = (): JSX.Element => {
  const { accountsFees } = useSelector(uiDataWebsiteText);
  const isMobile = useMediaQuery("sm");
  const dummyData: any = [
    { img: Placeholder, name: "Alexa", description: "best assistant", id: "1" },
    { img: Placeholder, name: "Alexa", description: "best assistant", id: "2" },
    { img: Placeholder, name: "Alexa", description: "best assistant", id: "3" },
    { img: Placeholder, name: "Alexa", description: "best assistant", id: "4" },
    { img: Placeholder, name: "Alexa", description: "best assistant", id: "5" },
    { img: Placeholder, name: "Alexa", description: "best assistant", id: "6" },
  ];
  const nav = useNavigate();

  const handleClick = (id: any) => {
    nav(`/leadership/${id}`);
  };

  return (
    <>
      <SlideSection
        bgImage={MainBg}
        title={"leadership and governance"}
        bgVariant={"gradient"}
        titleAlign={"center"}
        justify={"center"}
        BgImageStyles={isMobile ? { backgroundSize: "cover", backgroundPosition: "40%" } : { backgroundSize: "cover" }}
      />

      <Section mainContent m={isMobile ? "0rem auto 20rem" : "15rem auto"} style={{ overflow: "hidden" }}>
        <Card.Item>
          {dummyData.map((data: any) => (
            <Card.Root key={data.name + data.id} onClick={() => handleClick(data.id)}>
              <Card.Img src={data.img} alt={data.name} />
              <Card.Wrapper>
                <Card.Title>{data.name}</Card.Title>
                <Card.Description>{data.description}</Card.Description>
              </Card.Wrapper>
            </Card.Root>
          ))}
        </Card.Item>
      </Section>
    </>
  );
};
