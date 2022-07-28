import { Divider } from "../../components/divider/divider.styles";
import { Section } from "../../components/section/section.component";
import { Policies } from "./privacy-policy-terms.styles";
import { uiDataWebsiteText } from "../../redux/uiData/selectors";
import { useSelector } from "../../redux/store";
const { Header, Body, List } = Policies;

export const PrivacyPolicyPage: React.FC = (): JSX.Element => {
  const { privacyPolicy } = useSelector(uiDataWebsiteText);
  return (
    <Section mainContent>
      <Header.Root>
        <Header.Title>{privacyPolicy.pp_headone}</Header.Title>
        <Header.SubTitle>{privacyPolicy.pp_headone_subhd}</Header.SubTitle>
      </Header.Root>

      <Body.Root>
        <Body.Text>{privacyPolicy.pp_paraone}</Body.Text>
      </Body.Root>

      <Divider />

      <Body.Root>
        <Body.Title>{privacyPolicy.pp_subhd_one}</Body.Title>

        <Body.Text>{privacyPolicy.pp_subhd_one_paraone}</Body.Text>

        <Body.Text>{privacyPolicy.pp_subhd_one_paratwo}</Body.Text>
      </Body.Root>

      <Body.Root>
        <Body.Title>{privacyPolicy.pp_subhd_two}</Body.Title>
        <Body.Text>{privacyPolicy.pp_subhd_two_paraone}</Body.Text>

        <Body.Text>{privacyPolicy.pp_subhd_two_paratwo}</Body.Text>

        <Body.Text>{privacyPolicy.pp_subhd_two_parathree}</Body.Text>
      </Body.Root>

      <Body.Root>
        <Body.Title>{privacyPolicy.pp_subhd_three}</Body.Title>

        <Body.Text>{privacyPolicy.pp_subhd_three_paraone}</Body.Text>

        <Body.Text>{privacyPolicy.pp_subhd_three_paratwo}</Body.Text>

        <Body.Text>{privacyPolicy.pp_subhd_three_parathree}</Body.Text>

        <List.Root>
          <List.Item>{privacyPolicy.pp_subhd_three_pntone}</List.Item>
          <List.Item>{privacyPolicy.pp_subhd_three_pnttwo}</List.Item>
          <List.Item>{privacyPolicy.pp_subhd_three_pntthree}</List.Item>
          <List.Item>{privacyPolicy.pp_subhd_three_pntfour}</List.Item>
        </List.Root>

        <Body.Text>{privacyPolicy.pp_subhd_three_parafour}</Body.Text>
      </Body.Root>

      <Divider />

      <Body.Root>
        <Body.Title>{privacyPolicy.pp_subhd_four}</Body.Title>

        <Body.Text>{privacyPolicy.pp_subhd_four_paraone}</Body.Text>

        <Body.Text>{privacyPolicy.pp_subhd_four_paratwo}</Body.Text>

        <Body.Text>{privacyPolicy.pp_subhd_four_parathree}</Body.Text>

        <Body.Text>{privacyPolicy.pp_subhd_four_parafour}</Body.Text>

        <Body.Text>{privacyPolicy.pp_subhd_four_parafive}</Body.Text>

        <Body.Text>{privacyPolicy.pp_subhd_four_parasix}</Body.Text>
      </Body.Root>

      <Body.Root>
        <Body.Title>{privacyPolicy.pp_subhd_five}</Body.Title>

        <Body.Text>{privacyPolicy.pp_subhd_five_paraone}</Body.Text>

        <Body.Text>{privacyPolicy.pp_subhd_five_paratwo}</Body.Text>

        <Body.Text>{privacyPolicy.pp_subhd_five_parathree}</Body.Text>
      </Body.Root>

      <Body.Root>
        <Body.Title>{privacyPolicy.pp_subhd_six}</Body.Title>

        <Body.Text>{privacyPolicy.pp_subhd_six_paraone}</Body.Text>
      </Body.Root>

      <Body.Root>
        <Body.Title>{privacyPolicy.pp_subhd_seven}</Body.Title>

        <Body.Text>{privacyPolicy.pp_subhd_seven_paraone}</Body.Text>
      </Body.Root>

      <Divider />

      <Body.Root>
        <Body.Title>{privacyPolicy.pp_subhd_eight}</Body.Title>

        <Body.Text>{privacyPolicy.pp_subhd_eight_paraone}</Body.Text>
        <Body.Text>{privacyPolicy.pp_subhd_eight_paratwo}</Body.Text>
      </Body.Root>

      <Body.Root>
        <Body.Title>{privacyPolicy.pp_subhd_nine}</Body.Title>
        <Body.Text>{privacyPolicy.pp_subhd_nine_paraone}</Body.Text>
      </Body.Root>

      <Divider />

      <Body.Root>
        <Body.Title>{privacyPolicy.pp_subhd_ten}</Body.Title>

        <Body.Text>{privacyPolicy.pp_subhd_ten_paraone}</Body.Text>

        <List.Root>
          <List.Item>{privacyPolicy.pp_subhd_ten_paraone_pntone}</List.Item>
          <List.Item>{privacyPolicy.pp_subhd_ten_paraone_pnttwo}</List.Item>
          <List.Item>{privacyPolicy.pp_subhd_ten_paraone_pntthree}</List.Item>
        </List.Root>

        <Body.Text>{privacyPolicy.pp_subhd_ten_paratwo}</Body.Text>

        <List.Root>
          <List.Item>{privacyPolicy.pp_subhd_ten_paratwo_lineone}</List.Item>
          <List.Item>{privacyPolicy.pp_subhd_ten_paratwo_linetwo}</List.Item>
          <List.Item>{privacyPolicy.pp_subhd_ten_paratwo_linethree} </List.Item>
          <List.Item>{privacyPolicy.pp_subhd_ten_paratwo_linefour}</List.Item>
          <List.Item>{privacyPolicy.pp_btmline}</List.Item>
        </List.Root>
      </Body.Root>
    </Section>
  );
};
