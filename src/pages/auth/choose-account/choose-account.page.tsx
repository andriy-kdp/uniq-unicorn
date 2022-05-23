import React, { MouseEventHandler } from "react";
import { Accounts } from "./choose-account.styles";
import { Wrap } from "../../../components/wrap/wrap.component";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "../../../utils/use-media-query";
import { AccountItem, AccountTypes } from "../auth.types";
import CaseImg from "../../../assets/icons/choose-account/png/case.png";
import CardImg from "../../../assets/icons/choose-account/png/card.png";
import BuildingImg from "../../../assets/icons/choose-account/png/building.png";
import StarRightImg from "../../../assets/icons/choose-account/png/star_right.png";
import StarLeftImg from "../../../assets/icons/choose-account/png/star_left.png";

const accountVariants: AccountItem[] = [
  { icon: CardImg, title: "Private account", value: "private" },
  { icon: CaseImg, title: "Business account", value: "business" },
  {
    icon: BuildingImg,
    title: "Institutional Account",
    value: "institutional",
  },
];

export const ChooseAccountPage: React.FC = (): JSX.Element => {
  const isMobile = useMediaQuery("sm");
  const navigate = useNavigate();
  const handleClick =
    (value: AccountTypes): MouseEventHandler<HTMLDivElement> =>
    () => {
      navigate(`/auth/register/${value}`);
    };

  return (
    <Wrap sx={{ display: "flex", height: !isMobile ? "70vh" : "auto", width: "100%" }}>
      {!isMobile && (
        <Wrap
          sx={{
            height: "100%",
            position: "absolute",
            left: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            top: "7rem",
          }}
        >
          <img src={StarLeftImg} alt="start left" style={{ marginBottom: "7rem" }} />
        </Wrap>
      )}

      <Accounts.Root>
        <Wrap
          sx={{
            alignSelf: "flex-start",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <Accounts.Subtitle>Get started</Accounts.Subtitle>
          <h3>Open your Black Banx Account</h3>
        </Wrap>

        <Accounts.Variants.Root>
          {accountVariants.map((acc) => (
            <Wrap
              key={acc.value}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: isMobile ? "row-reverse" : "column",
                width: "100%",
                alignItems: "center",
                maxWidth: isMobile ? "50rem" : "auto",
                margin: "8rem auto 0",
              }}
              onClick={handleClick(acc.value)}
            >
              <Accounts.Variants.Item.Icon.Root>
                <img src={acc.icon} style={{ width: "100%" }} alt={acc.value} />
              </Accounts.Variants.Item.Icon.Root>
              <Accounts.Variants.Item.Title>{acc.title}</Accounts.Variants.Item.Title>
            </Wrap>
          ))}
        </Accounts.Variants.Root>
      </Accounts.Root>
      {!isMobile && (
        <Wrap
          sx={{
            position: "absolute",
            right: "0",
            top: "7rem",
            height: "100%",
            display: "flex",
            alignItems: "flex-start",
            zIndex: "-1",
          }}
        >
          <img src={StarRightImg} alt="start right" />
        </Wrap>
      )}
    </Wrap>
  );
};
