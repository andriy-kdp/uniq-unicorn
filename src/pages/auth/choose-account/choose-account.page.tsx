import React, { MouseEventHandler } from "react";
import { Accounts } from "./choose-account.styles";
import { ReactComponent as InstitutionalIcon } from "../../../assets/icons/choose-account/building.svg";
import { ReactComponent as PrivateIcon } from "../../../assets/icons/choose-account/card.svg";
import { ReactComponent as BusinessIcon } from "../../../assets/icons/choose-account/case.svg";
import { Wrap } from "../../../components/wrap/wrap.component";
import { Section } from "../../../components/section/section.component";
import { useNavigate } from "react-router-dom";
type AccountTypes = "private" | "business" | "institutional";

type AccountItem = {
  icon: React.ReactNode;
  title: string;
  value: AccountTypes;
};

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
  const navigate = useNavigate();
  const handleClick =
    (value: AccountTypes): MouseEventHandler<HTMLDivElement> =>
    () => {
      navigate(`/auth/register/${value}`);
    };

  return (
    <Section content>
      <Accounts.Root>
        <Accounts.Subtitle>Get started</Accounts.Subtitle>
        <h3>Open your Black Banx Account</h3>
        <Accounts.Variants.Root>
          {accountVariants.map((acc) => (
            <Wrap
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                alignItems: "center",
              }}
              onClick={handleClick(acc.value)}
            >
              <Accounts.Variants.Item.Icon.Root>
                {acc.icon}
              </Accounts.Variants.Item.Icon.Root>
              <Accounts.Variants.Item.Title>
                {acc.title}
              </Accounts.Variants.Item.Title>
            </Wrap>
          ))}
        </Accounts.Variants.Root>
      </Accounts.Root>
    </Section>
  );
};
