import React, { useEffect } from "react";
import { SlideSection } from "../../components/silde-section/slide-section.component";
import MainBg from "../../assets/backgrounds/leadership/leadership_main_bg.png";
import { Section } from "../../components/section/section.component";
import { useMediaQuery } from "../../utils/use-media-query";
import { uiAboutUsLeadership, uiDataSelectedLanguageId } from "../../redux/uiData/selectors";
import { useDispatch, useSelector } from "../../redux/store";
import { Card } from "./leadership.styles";
import { useNavigate } from "react-router-dom";
import operations from "../../redux/uiData/operations";
import { setUsLeadershipPerson } from "../../redux/uiData/slice";

export const LeadershipPage: React.FC = (): JSX.Element => {
  const language = useSelector(uiDataSelectedLanguageId);
  const aboutUsLeadership = useSelector(uiAboutUsLeadership);
  const isMobile = useMediaQuery("sm");
  const dispatch = useDispatch();
  const nav = useNavigate();

  const handleClick = (id: any, value: any) => {
    nav(`/leadership/${id}`);
    dispatch(setUsLeadershipPerson([value]));
  };
  useEffect(() => {
    dispatch(operations.getAboutUsLeadership({ languageId: language }));
  }, []);

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
          {aboutUsLeadership?.map((data: any, idx: any) => (
            <Card.Root
              key={data.abtus_ldr_name + data.abtus_ldr_id}
              onClick={() => handleClick(data.abtus_ldr_id, aboutUsLeadership[idx])}
            >
              <Card.Img src={data.abtus_ldr_art_img} alt={data.abtus_ldr_name} />
              <Card.Wrapper>
                <Card.Title>{data.abtus_ldr_name}</Card.Title>
                <Card.Description>{data.abtus_ldr_jobdesc}</Card.Description>
              </Card.Wrapper>
            </Card.Root>
          ))}
        </Card.Item>
      </Section>
    </>
  );
};
