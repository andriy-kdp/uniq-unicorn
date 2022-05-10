import React, { ChangeEventHandler, useState } from "react";

import MainBg from "../../assets/images/backgrounds/contact/contact_main_bg.png";
import { ReactComponent as ContactIcon } from "../../assets/icons/contact/question_icon.svg";
import { SlideSection } from "../../components/silde-section/slide-section.component";
import { Section } from "../../components/section/section.component";
import { Wrap } from "../../components/wrap/wrap.component";
import { ContactForm } from "./contact.styles";
import { Input } from "../../components/inputs/input/input.component";
import { ButtonArrow } from "../../components/button-arrow/button-arrow.component";
import MaoMarkers from "../../assets/images/backgrounds/contact/map_bg.png";
export const ContactPage: React.FC = (): JSX.Element => {
  const [formData, setFormData] = useState<{ name: string; email: string }>({
    name: "",
    email: "",
  });

  const handleInpuChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <>
      <SlideSection
        title={"Contact Black Banx"}
        bgImage={MainBg}
        titleAlign={"center"}
        titleWidth={"100%"}
        justify={"center"}
        bgVariant={"gradient"}
      />
      <Section content>
        <ContactForm.Root>
          <Wrap
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
            }}
          >
            <ContactForm.Title.Root>
              <ContactForm.Title.SubTitle>
                CONTACT US
              </ContactForm.Title.SubTitle>
              <ContactForm.Title.Text>Have a question?</ContactForm.Title.Text>
            </ContactForm.Title.Root>
            <Input
              value={formData.name}
              onChange={handleInpuChange}
              label={"Name"}
              name={"name"}
              fullWidth
            />
            <Input
              value={formData.name}
              onChange={handleInpuChange}
              label={"E-mail"}
              name={"email"}
              fullWidth
            />
            <ButtonArrow onClick={handleSubmit}>Send</ButtonArrow>
          </Wrap>
          <Wrap
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ContactIcon />
          </Wrap>
        </ContactForm.Root>
      </Section>
      <Section justify={"center"}>
        <img src={MaoMarkers} alt="map" />
      </Section>
    </>
  );
};
