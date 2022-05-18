import React, { ChangeEventHandler, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ButtonArrow } from "../../../components/button-arrow/button-arrow.component";
import { Input } from "../../../components/inputs/input/input.component";
import { Select } from "../../../components/inputs/select/select.component";
import { SelectHandler, SelectOption, SelectProps } from "../../../components/inputs/select/select.types";
import { Section } from "../../../components/section/section.component";
import { Wrap } from "../../../components/wrap/wrap.component";
import { Form, Register } from "./register.styles";
import * as yup from "yup";
import { parseYupError } from "../../../utils/parseYupError";
import { BusinessAccountFormType, FormFieldType, FormTypeKeys, PrivateAccountFormType } from "../auth.types";
import { businessForm, privateForm } from "../../../utils/form-configs";
import { InputProps } from "../../../components/inputs/input/input.types";

const initBusinessForm: BusinessAccountFormType = {
  address: "",
  businessActivity: "",
  businessAddress: "",
  businessName: "",
  cityOfIncorporation: "",
  countryOfIncorporation: null,
  countryOfResidence: null,
  dateOfBirth: "",
  dateOfIncorporation: "",
  fullName: "",
  industrySector: "",
  mobilePhoneNumber: "",
  nationality: null,
  passportNumber: "",
  phoneNumber: "",
  postCode: "",
  registrationNumber: "",
  url: "",
  validUntil: "",
  email: "",
  emailConfirm: "",
  password: "",
  passwordConfirm: "",
};

const initPrivateForm: PrivateAccountFormType = {
  accountCurrencyFirst: null,
  accountCurrencySecond: null,
  address: "",
  countryOfResidence: null,
  dateOfBirth: "",
  email: "",
  emailConfirm: "",
  fullName: "",
  mobilePhoneNumber: "",
  nationality: null,
  passportNumber: "",
  password: "",
  passwordConfirm: "",
  postCode: "",
  validUntil: "",
};

const FormField: React.FC<InputProps & SelectProps & { type: FormFieldType["type"] }> = (props): JSX.Element => {
  const { type, ...rest } = props;
  const Component: typeof Input | typeof Select = type === "select" ? Select : Input;
  return <Component {...rest} />;
};

export const RegisterPage = () => {
  const [currentSection, setCurrentSection] = useState<number>(0);
  const [formSections, setFormSections] = useState<typeof businessForm | typeof privateForm | null>([]);
  const [helpForm, setHelpForm] = useState({ value: "", error: "" });
  const { type } = useParams();
  const [formData, setFormData] = useState<BusinessAccountFormType | PrivateAccountFormType | null>(null);

  const [formErrors, setFormErrors] = useState<Record<FormTypeKeys, string> | null>(null);

  const handleClickNextSection = () => {
    if (formSections) {
      if (currentSection === formSections.length - 1) {
        setFormErrors(null);
        const prevalidationErrors: Record<string, any> = {};
        const { email, password, emailConfirm, passwordConfirm } = formData as any;
        if (email !== emailConfirm) {
          const message = "Emails not match";
          prevalidationErrors.email = message;
          prevalidationErrors.emailConfirm = message;
        }
        if (password !== passwordConfirm) {
          console.log(password, passwordConfirm);
          const message = "Passwords not match";
          prevalidationErrors.password = message;
          prevalidationErrors.passwordConfirm = message;
        }
        if (Object.entries(prevalidationErrors).length) {
          return setFormErrors(prevalidationErrors);
        }

        const errorMessages = {
          email: "Email must be correct (example@mail.com)",
          password: "Password is too short (6 symbols min)",
          required: "The field is required",
        };
        console.log("FD", formData);
        const schema = yup.object().shape({
          email: yup.string().email({ email: errorMessages.email }).required({ email: errorMessages.required }),
          emailConfirm: yup
            .string()
            .email({ emailConfirm: errorMessages.email })
            .required({ emailConfirm: errorMessages.required }),
          password: yup
            .string()
            .min(6, { password: errorMessages.password })
            .required({ password: errorMessages.required }),
          passwordConfirm: yup
            .string()
            .min(6, { passwordConfirm: errorMessages.password })
            .required({ passwordConfirm: errorMessages.required }),
        });

        schema
          .validate(formData, { abortEarly: false })
          .then(() => {
            return console.log("SUBMIT", formData);
          })
          .catch((err) => {
            const errors = parseYupError(err);
            setFormErrors(errors);
          });
      }
      setCurrentSection((prev) => (prev < formSections.length - 1 ? ++prev : prev));
    }
  };

  const handleChangeHelpInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    setHelpForm((prev) => ({ ...prev, error: "" }));
    setHelpForm((prev) => ({ ...prev, value }));
  };

  const handleSubmitHelpForm = () => {
    setHelpForm((prev) => ({ ...prev, error: "" }));
    const schema = yup.object().shape({
      value: yup.string().email("Email must be correct (example@mail.com)").required("Email is required"),
    });
    schema
      .validate(helpForm)
      .then(() => {
        console.log(helpForm);
      })
      .catch((err) => {
        const [error] = err.errors;
        setHelpForm((prev) => ({ ...prev, error }));
      });
  };

  const handleClickPrevSection = () => setCurrentSection((prev) => (prev > 0 ? --prev : prev));

  const updateForm = (name: string, value: string | SelectOption) => {
    if (formData) {
      setFormErrors((prev) => ({ ...prev, [name]: null }));
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    updateForm(name, value);
  };

  const handleSelect: SelectHandler = (e) => {
    const { name, value } = e.target;
    updateForm(name as string, value);
  };

  useEffect(() => {
    if (type === "private") {
      setFormSections(privateForm);
      return setFormData(initPrivateForm);
    }
    setFormSections(businessForm);
    setFormData(initBusinessForm);
  }, []);

  return (
    <Section mainContent>
      <Wrap sx={{ minHeight: "35rem", width: "100%" }}>
        {formSections?.length && formData && (
          <Form.Root>
            {formSections[currentSection].fields.map((field) => {
              return (
                <Wrap sx={{ display: "flex", width: "100%", marginTop: "3rem" }} key={field.name}>
                  <FormField
                    {...field}
                    // @ts-ignore
                    value={formData[field.name] || (formData[field.name] as SelectOption)}
                    options={field.selectOptions || [{ id: "none", value: "", label: "" }]}
                    onSelect={handleSelect}
                    onChange={handleInputChange}
                    fullWidth
                    error={!!formErrors?.[field.name]}
                    helperText={formErrors?.[field.name]}
                  />
                </Wrap>
              );
            })}
          </Form.Root>
        )}
      </Wrap>

      <Wrap
        sx={{
          display: "grid",
          columnGap: "4rem",
          width: "100%",
          gridTemplateColumns: "1fr 1fr",
          marginTop: "8rem",
        }}
      >
        <Wrap sx={{ marginLeft: "auto" }}>
          <ButtonArrow direction="left" onClick={handleClickPrevSection} disabled={currentSection === 0}>
            Prev
          </ButtonArrow>
        </Wrap>

        <ButtonArrow
          onClick={handleClickNextSection}
          // @ts-ignore
        >
          {formSections && currentSection !== formSections?.length - 1 ? "Next" : "Register"}
        </ButtonArrow>
      </Wrap>
      <Register.Help.Root>
        <Wrap sx={{ display: "flex", flexDirection: "column", width: "100%", justifyContent: "flex-start" }}>
          <Register.Help.Title>Need help?</Register.Help.Title>
          <Register.Help.SubTitle>Contact us via support@blackbanx.comtle</Register.Help.SubTitle>
        </Wrap>
        <Wrap sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <Input
            value={helpForm.value}
            onChange={handleChangeHelpInput}
            helperText={helpForm.error || "Or enter your email and we will contact you first!"}
            error={Boolean(helpForm.error)}
            placeholder={"Email address"}
            fullWidth
          />
          <Wrap sx={{ display: "flex", marginTop: "2rem" }}>
            <ButtonArrow onClick={handleSubmitHelpForm}>Send</ButtonArrow>
          </Wrap>
        </Wrap>
      </Register.Help.Root>
    </Section>
  );
};
