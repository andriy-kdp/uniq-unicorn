import React, { useEffect } from "react";
import Placeholder from "../../../assets/backgrounds/person/placeholder.png";
import { useMediaQuery } from "../../../utils/use-media-query";
import { Wrap } from "../../../components/wrap/wrap.component";
import { Person } from "./person.styles";
import { uiAboutUsLeadershipPerson, uiDataSelectedLanguageId } from "../../../redux/uiData/selectors";
import { useDispatch, useSelector } from "../../../redux/store";
import operations from "../../../redux/uiData/operations";
import { useParams } from "react-router-dom";

export const PersonPage: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery("sm");
  const language = useSelector(uiDataSelectedLanguageId);
  const { id } = useParams();
  const data = useSelector(uiAboutUsLeadershipPerson);

  useEffect(() => {
    if (data === null) dispatch(operations.getAboutUsLeadership({ languageId: language, ldrId: id }));
  }, []);

  return (
    <>
      {data && (
        <>
          <Wrap
            sx={{
              background: `url(${data[0]?.abtus_ldr_art_img})`,
              height: isMobile ? "34rem" : "65rem",
              width: "100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <Person.Wrapper>
              <Person.Title>{data[0]?.abtus_ldr_name}</Person.Title>
              <Person.Subtitle>{data[0]?.abtus_ldr_jobdesc}</Person.Subtitle>
            </Person.Wrapper>
          </Wrap>
          <Person.Root>
            <Wrap>
              <Person.Description>{data[0]?.abtus_ldr_paraone}</Person.Description>
              <Person.Paragraph>{data[0]?.abtus_ldr_paraonetxt}</Person.Paragraph>
            </Wrap>
            <Wrap sx={{ marginLeft: "11.6rem" }}>
              <Person.Description>{data[0]?.abtus_ldr_paratwo}</Person.Description>
              <Person.Paragraph>{data[0]?.abtus_ldr_paratwotxt}</Person.Paragraph>
            </Wrap>
          </Person.Root>
        </>
      )}
    </>
  );
};
