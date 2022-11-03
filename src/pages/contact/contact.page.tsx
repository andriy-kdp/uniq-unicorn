import React, { ChangeEventHandler, useState } from "react";
import MainBg from "../../assets/backgrounds/contact/contact_main_bg.png";
import { ReactComponent as ContactIcon } from "../../assets/icons/contact/question_icon.svg";
import { SlideSection } from "../../components/silde-section/slide-section.component";
import { Section } from "../../components/section/section.component";
import { Wrap } from "../../components/wrap/wrap.component";
import { ContactForm } from "./contact.styles";
import { Input } from "../../components/inputs/input/input.component";
import { ButtonArrow } from "../../components/button-arrow/button-arrow.component";
import MaoMarkers from "../../assets/backgrounds/contact/map_bg.png";
import { uiDataWebsiteText } from "../../redux/uiData/selectors";
import { useDispatch, useSelector } from "../../redux/store";
import operations from "../../redux/uiData/operations";
import * as yup from "yup";
import { parseYupError } from "../../utils/parseYupError";

export const ContactPage: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const { contactBlackBanx } = useSelector(uiDataWebsiteText);
  const [formData, setFormData] = useState<{ name: string; email: string; message: string }>({
    name: "",
    email: "",
    message: "",
  });
  //-----------------
  const [errors, setErrors] = useState<{
    name: string | null;
    email: string | null;
    message: string | null;
  }>({ name: null, email: null, message: null });
  console.log(errors);
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const schema = yup.object().shape({
      name: yup.string().min(2, { name: "Enter contact name" }).required({ name: "The field is required" }),
      email: yup.string().email({ email: "Email must be correct" }).required({ email: "The field is required" }),
      message: yup
        .string()
        .min(5, { message: "The message must contain at least 80 characters" })
        .required({ message: "The field is required" }),
    });

    schema
      .validate(formData, { abortEarly: false })
      .then(() =>
        dispatch(
          operations.postSendCompanyMessage({
            destination: formData.email,
            subject: formData.name,
            mailContent: formData.message,
          }),
        ),
      )
      .then(() => setErrors({ name: null, email: null, message: null }))
      .catch((err) => {
        const errors = parseYupError(err);
        setErrors(errors as { name: string; email: string; message: string });
      });
    //----------
  };

  return (
    <>
      <SlideSection
        title={contactBlackBanx.cus_headone}
        bgImage={MainBg}
        titleAlign={"center"}
        titleWidth={"100%"}
        justify={"center"}
        bgVariant={"gradient"}
        BgImageStyles={{
          backgroundSize: "cover",
        }}
      />
      <Section mainContent m={"auto auto 16rem"}>
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
              <ContactForm.Title.SubTitle>{contactBlackBanx.cus_cntctus}</ContactForm.Title.SubTitle>
              <ContactForm.Title.Text>{contactBlackBanx.cus_qstn}</ContactForm.Title.Text>
            </ContactForm.Title.Root>
            <Wrap sx={{ display: "flex", marginBottom: "4rem", width: "100%" }}>
              <Wrap sx={{ maxWidth: "30rem", marginRight: "auto" }}>
                <ContactForm.Support.Title>Customer Support inquiries:</ContactForm.Support.Title>
                <Wrap sx={{ marginTop: "1rem", marginBottom: "2rem" }}>
                  <ContactForm.Support.Text href={"mailto:support@blackbanx.com"}>
                    support@blackbanx.com
                  </ContactForm.Support.Text>
                </Wrap>

                <Wrap sx={{ display: "flex" }}>
                  <ContactForm.Support.Text>Phone:</ContactForm.Support.Text>
                  <Wrap>
                    <ContactForm.Support.Phone href={"tel:+551145607888"}>+551145607888</ContactForm.Support.Phone>
                    <ContactForm.Support.Phone href={"tel:+44740392488"}>+44740392488 </ContactForm.Support.Phone>
                    <ContactForm.Support.Phone href={"tel:+27600702288"}>+27600702288</ContactForm.Support.Phone>
                    <ContactForm.Support.Phone href={"tel:+164749224488"}>+164749224488 </ContactForm.Support.Phone>
                  </Wrap>
                </Wrap>
              </Wrap>
              <Wrap sx={{ marginLeft: "3rem" }}>
                <ContactForm.Support.Title>PR/IR Contact inquiries:</ContactForm.Support.Title>
                <Wrap sx={{ marginTop: "1rem", marginBottom: "2rem" }}>
                  <ContactForm.Support.Text href={"mailto:ir@blackbanx.com"}>ir@blackbanx.com</ContactForm.Support.Text>
                </Wrap>

                <ContactForm.Support.Text href={"mailto:pr@blackbanx.com"}>pr@blackbanx.com</ContactForm.Support.Text>
              </Wrap>
            </Wrap>
            <ContactForm.Support.Title>Or leave a short message instead</ContactForm.Support.Title>
            <Wrap sx={{ marginBottom: "2rem", width: "100%" }}>
              <Input
                value={formData.name}
                onChange={handleInputChange}
                label={contactBlackBanx.cus_qstn_nme}
                name={"name"}
                placeholder="Please enter your full name"
                fullWidth
                error={Boolean(errors.name)}
                helperText={errors.name as string}
              />
            </Wrap>
            <Wrap sx={{ marginBottom: "1rem", width: "100%" }}>
              <Input
                value={formData.email}
                onChange={handleInputChange}
                label={contactBlackBanx.cus_qstn_eml}
                name={"email"}
                placeholder="Please enter your email"
                fullWidth
                error={Boolean(errors.email)}
                helperText={errors.email as string}
              />
            </Wrap>
            <Wrap sx={{ marginBottom: "5rem", width: "100%" }}>
              <Input
                value={formData.message}
                onChange={handleInputChange}
                name={"message"}
                placeholder="Please enter your message"
                fullWidth
                error={Boolean(errors.message)}
                helperText={errors.message as string}
              />
            </Wrap>
            <ButtonArrow onClick={handleSubmit}>{contactBlackBanx.cus_qstn_sntbtn}</ButtonArrow>
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
        <img src={MaoMarkers} alt="map" style={{ width: "100%", position: "relative" }} />
      </Section>
    </>
  );
};
