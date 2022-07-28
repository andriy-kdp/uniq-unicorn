import React from "react";
import { Divider } from "../../components/divider/divider.styles";
import { Section } from "../../components/section/section.component";
import { Policies } from "./privacy-policy-terms.styles";
import { uiDataWebsiteText } from "../../redux/uiData/selectors";
import { useSelector } from "../../redux/store";

const { Body, Header } = Policies;
export const PolicesTermsPage: React.FC = (): JSX.Element => {
  const { policiesTerms } = useSelector(uiDataWebsiteText);
  return (
    <Section mainContent>
      <Header.Root>
        <Header.Title>{policiesTerms.pt_headone}</Header.Title>
        <Header.SubTitle>{policiesTerms.pt_headone_sub}</Header.SubTitle>
      </Header.Root>
      <Body.Root>
        <Body.Text>{policiesTerms.pt_paraone}</Body.Text>
        <Body.Text>{policiesTerms.pt_paratwo}</Body.Text>
      </Body.Root>
      <Divider />
      <Body.Root>
        <Body.Title>{policiesTerms.pt_subhd_one}</Body.Title>
        <Body.Text>{policiesTerms.pt_subhd_one_paraone}</Body.Text>
      </Body.Root>
      <Body.Root>
        <Body.Title>{policiesTerms.pt_subhd_two}</Body.Title>
        <Body.Text>{policiesTerms.pt_subhd_two_paraone}</Body.Text>
      </Body.Root>
      <Body.Root>
        <Body.Title>{policiesTerms.pt_subhd_three}</Body.Title>
        <Body.Text>{policiesTerms.pt_subhd_three_paraone}</Body.Text>
        <Body.Text>{policiesTerms.pt_subhd_three_paratwo}</Body.Text>
      </Body.Root>
      <Divider />
      <Body.Root>
        <Body.Title>{policiesTerms.pt_subhd_four}</Body.Title>
        <Body.Text>{policiesTerms.t_subhd_four_paraone}</Body.Text>
        <Body.Text>{policiesTerms.pt_subhd_four_paratwo}</Body.Text>
        <Body.Text>{policiesTerms.pt_subhd_four_parathree}</Body.Text>
      </Body.Root>
      <Body.Root>
        <Body.Title>{policiesTerms.pt_subhd_five}</Body.Title>
        <Body.Text>{policiesTerms.pt_subhd_five_paraone}</Body.Text>
      </Body.Root>
      <Body.Root>
        <Body.Title>{policiesTerms.pt_subhd_six}</Body.Title>
        <Body.Text>{policiesTerms.pt_subhd_six_paraone}</Body.Text>
      </Body.Root>
      <Body.Root>
        <Body.Title>{policiesTerms.pt_subhd_seven}</Body.Title>
        <Body.Text>{policiesTerms.pt_subhd_seven_paraone}</Body.Text>
      </Body.Root>
      <Divider />
      <Body.Root>
        <Body.Title>{policiesTerms.pt_subhd_eight}</Body.Title>
        <Body.Text>{policiesTerms.pt_subhd_eight_paraone}</Body.Text>
      </Body.Root>
      <Body.Root>
        <Body.Title>{policiesTerms.pt_subhd_nine}</Body.Title>
        <Body.Text>{policiesTerms.pt_subhd_nine_paraone}</Body.Text>
      </Body.Root>
      <Body.Root>
        <Body.Title>{policiesTerms.pt_subhd_ten}</Body.Title>
        <Body.Text>{policiesTerms.pt_subhd_ten_paraone}</Body.Text>
        <Body.Text>{policiesTerms.pt_subhd_ten_paratwo}</Body.Text>
      </Body.Root>
      <Divider />
      <Body.Root>
        <Body.Title>{policiesTerms.pt_subhd_eleven}</Body.Title>
        <Body.Text>{policiesTerms.pt_subhd_eleven_paraone}</Body.Text>
        <Body.Text>{policiesTerms.pt_subhd_eleven_paratwo}</Body.Text>
        <Body.Text>{policiesTerms.pt_subhd_eleven_parathree}</Body.Text>
        <Body.Text>{policiesTerms.pt_subhd_eleven_parafour}</Body.Text>
      </Body.Root>
      <Body.Root>
        <Body.Title>{policiesTerms.pt_subhd_twelve}</Body.Title>
        <Body.Text>{policiesTerms.pt_subhd_twelve_paraone}</Body.Text>
      </Body.Root>
      <Body.Root>
        <Body.Title>{policiesTerms.pt_subhd_thirtn}</Body.Title>
        <Body.Text>{policiesTerms.pt_subhd_thhirtn_paraone}</Body.Text>
        <Body.Text>{policiesTerms.pt_subhd_thhirtn_paratwo}</Body.Text>
      </Body.Root>
      <Body.Root>
        <Body.Title>{policiesTerms.pt_subhd_fourtn}</Body.Title>
        <Body.Text>{policiesTerms.pt_subhd_fourtn_paraone}</Body.Text>
        <Body.Text>{policiesTerms.pt_btmline}</Body.Text>
      </Body.Root>
    </Section>
  );
};
