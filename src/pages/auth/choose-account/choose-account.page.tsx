import React, { MouseEventHandler } from "react";
import MainBg from "../../../assets/backgrounds/auth/choose_account_main_bg.png";
import { Accounts } from "./choose-account.styles";
import { ReactComponent as InstitutionalIcon } from "../../../assets/icons/choose-account/building.svg";
import { ReactComponent as PrivateIcon } from "../../../assets/icons/choose-account/card.svg";
import { ReactComponent as BusinessIcon } from "../../../assets/icons/choose-account/case.svg";
import { Wrap } from "../../../components/wrap/wrap.component";
import { Section } from "../../../components/section/section.component";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "../../../utils/use-media-query";
import { AccountItem, AccountTypes } from "../auth.types";

const accountVariants: AccountItem[] = [
  { icon: <PrivateIcon />, title: "Private account", value: "private" },
  { icon: <BusinessIcon />, title: "Business account", value: "business" },
  {
    icon: <InstitutionalIcon />,
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
    <Section m={"auto auto 16rem"}>
      <Wrap
        sx={{
          display: "flex",
          position: "absolute",
          width: "100%",
          height: "80rem",
          background: `url(${MainBg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          opacity: "0.4",
          zIndex: "-1",
          top: 0,
        }}
      />
      <Section mainContent>
        <Accounts.Root>
          <Accounts.Subtitle>Get started</Accounts.Subtitle>
          <h3>Open your Black Banx Account</h3>
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
                <Accounts.Variants.Item.Icon.Root>{acc.icon}</Accounts.Variants.Item.Icon.Root>
                <Accounts.Variants.Item.Title>{acc.title}</Accounts.Variants.Item.Title>
              </Wrap>
            ))}
          </Accounts.Variants.Root>
        </Accounts.Root>
      </Section>
    </Section>
  );
};
