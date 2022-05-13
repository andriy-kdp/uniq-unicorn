import React, { ChangeEventHandler, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ButtonArrow } from "../../../components/button-arrow/button-arrow.component";
import { Input } from "../../../components/inputs/input/input.component";
import { Select } from "../../../components/inputs/select/select.component";
import {
  SelectHandler,
  SelectOption,
} from "../../../components/inputs/select/select.types";
import { Section } from "../../../components/section/section.component";
import { Wrap } from "../../../components/wrap/wrap.component";
import { Form, Register } from "./register.styles";

type ProvateAccountFormType = {
  fullName: string;
  dateOfBirth: string;
  address: string;
  postCode: string;
  countryOfResidence: SelectOption | null;
  nationality: SelectOption | null;
  passportNumber: string;
  validUntil: string;
  accountCurrencyFirst: SelectOption | null;
  accountCurrencySecond: SelectOption | null;
  mobilePhoneNumber: string;
  email: string;
  emailConfirm: string;
  password: string;
  passwordConfirm: string;
};

type BusinessAccountFormType = Omit<
  ProvateAccountFormType,
  "accountCurrencyFirst" | "accountCurrencySecond"
> & {
  businessName: string;
  businessAddress: string;
  registrationNumber: string;
  dateOfIncorporation: string;
  countryOfIncorporation: SelectOption | null;
  cityOfIncorporation: string;
  phoneNumber: string;
  industrySector: string;
  businessActivity: string;
  url: string;
};

type FormFieldType<T> = {
  name: keyof T;
  label: string;
  placeholder: string;
  type: "text" | "select";
  selectOptions?: SelectOption[];
  helperText?: string;
};

type FormSection<T> = {
  fields: FormFieldType<T>[];
};

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

const initPrivateForm: ProvateAccountFormType = {
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

const privateForm: FormSection<ProvateAccountFormType>[] = [
  {
    fields: [
      {
        name: "fullName",
        label: "Full name",
        placeholder: "Full name",
        type: "text",
      },
      {
        name: "dateOfBirth",
        label: "Date of birth",
        placeholder: "DD/MM/YYYY",
        type: "text",
      },
      {
        name: "address",
        label: "Address",
        placeholder: "Address",
        type: "text",
      },
      {
        name: "postCode",
        label: "Post code",
        placeholder: "Post code",
        type: "text",
      },
      {
        name: "countryOfResidence",
        label: "Country of residence",
        placeholder: "Country of residence",
        type: "select",
        selectOptions: [
          { id: "cor-1", label: "Country-1", value: "country_1" },
          { id: "cor-2", label: "Country-2", value: "country_2" },
          { id: "cor-3", label: "Country-3", value: "country_3" },
        ],
      },
      {
        name: "nationality",
        label: "Nationality",
        placeholder: "Nationality",
        type: "select",
        selectOptions: [
          { id: "cor-1", label: "Country-1", value: "country_1" },
          { id: "cor-2", label: "Country-2", value: "country_2" },
          { id: "cor-3", label: "Country-3", value: "country_3" },
        ],
      },
    ],
  },
  {
    fields: [
      {
        name: "passportNumber",
        label: "Passport ID / Number",
        placeholder: "Post code",
        type: "text",
      },
      {
        name: "validUntil",
        label: "Valid until",
        placeholder: "DD/MM/YYYY",
        type: "text",
      },
      {
        name: "accountCurrencyFirst",
        label: "Account currency 1st account",
        placeholder: "",
        type: "select",
        selectOptions: [
          { id: "cor-1", label: "Country-1", value: "country_1" },
          { id: "cor-2", label: "Country-2", value: "country_2" },
          { id: "cor-3", label: "Country-3", value: "country_3" },
        ],
      },
      {
        name: "accountCurrencySecond",
        label: "Account currency 2st account",
        placeholder: "",
        type: "select",
        selectOptions: [
          { id: "cor-1", label: "Country-1", value: "country_1" },
          { id: "cor-2", label: "Country-2", value: "country_2" },
          { id: "cor-3", label: "Country-3", value: "country_3" },
        ],
      },
      {
        name: "mobilePhoneNumber",
        label: "Mobile phone number",
        placeholder: "Mobile phone number",
        type: "text",
      },
    ],
  },
  {
    fields: [
      {
        name: "email",
        label: "Email address",
        placeholder: "Email address",
        type: "text",
      },
      {
        name: "emailConfirm",
        label: "Confirm email address",
        placeholder: "Confirm email address",
        type: "text",
      },
      {
        name: "password",
        label: "Password",
        placeholder: "Password",
        type: "text",
        helperText:
          "Password: must be at least 8 characters; min 1 x capital letter, 1 x lower case letter, 1 x number, 1 x special character.",
      },
      {
        name: "passwordConfirm",
        label: "Confirm Password",
        placeholder: "Confirm Password",
        type: "text",
      },
    ],
  },
];

const businessForm: FormSection<BusinessAccountFormType>[] = [
  {
    fields: [
      {
        name: "businessName",
        label: "Business name",
        placeholder: "Business name",
        type: "text",
      },
      {
        name: "businessAddress",
        label: "Business address",
        placeholder: "Business address",
        type: "text",
      },
      {
        name: "registrationNumber",
        label: "Registration number",
        placeholder: "Registration number",
        type: "text",
      },
      {
        name: "dateOfIncorporation",
        label: "Date Of Incorporation",
        placeholder: "DD/MM/YYYY",
        type: "text",
      },
      {
        name: "countryOfIncorporation",
        label: "Country Of Incorporation",
        placeholder: "Business name",
        type: "select",
        selectOptions: [
          { id: "cor-1", label: "Country-1", value: "country_1" },
          { id: "cor-2", label: "Country-2", value: "country_2" },
          { id: "cor-3", label: "Country-3", value: "country_3" },
        ],
      },
      {
        name: "cityOfIncorporation",
        label: "City Of Incorporation",
        placeholder: "City Of Incorporation",
        type: "select",
        selectOptions: [
          { id: "cor-1", label: "Country-1", value: "country_1" },
          { id: "cor-2", label: "Country-2", value: "country_2" },
          { id: "cor-3", label: "Country-3", value: "country_3" },
        ],
      },
    ],
  },
  {
    fields: [
      {
        name: "phoneNumber",
        label: "Phone Number",
        placeholder: "Phone number",
        type: "text",
      },
      {
        name: "industrySector",
        label: "Industry sector/business activity",
        placeholder: "Industry sector/business activity",
        type: "text",
      },
      {
        name: "url",
        label: "URL(s)",
        placeholder: "URL(s)",
        type: "text",
      },
    ],
  },
  {
    fields: [
      {
        name: "fullName",
        label: "Full Name",
        placeholder: "Full Name",
        type: "text",
      },
      {
        name: "dateOfBirth",
        label: "Date of Birth",
        placeholder: "DD/MM/YYYY",
        type: "text",
      },
      {
        name: "address",
        label: "Address",
        placeholder: "Address",
        type: "text",
      },
      {
        name: "postCode",
        label: "Postcode",
        placeholder: "Postcode",
        type: "text",
      },
      {
        name: "countryOfResidence",
        label: "Country of Residence",
        placeholder: "",
        type: "select",
        selectOptions: [
          { id: "cor-1", label: "Country-1", value: "country_1" },
          { id: "cor-2", label: "Country-2", value: "country_2" },
          { id: "cor-3", label: "Country-3", value: "country_3" },
        ],
      },
      {
        name: "nationality",
        label: "Nationality",
        placeholder: "",
        type: "select",
        selectOptions: [
          { id: "cor-1", label: "Country-1", value: "country_1" },
          { id: "cor-2", label: "Country-2", value: "country_2" },
          { id: "cor-3", label: "Country-3", value: "country_3" },
        ],
      },
    ],
  },
  {
    fields: [
      {
        name: "passportNumber",
        label: "Passport / ID Number",
        placeholder: "Passport / ID Number",
        type: "text",
      },
      {
        name: "validUntil",
        label: "Valid until",
        placeholder: "DD/MM/YYYY",
        type: "text",
      },
      {
        name: "businessActivity",
        label: "Business activities / Profession",
        placeholder: "Business activities / Profession",
        type: "text",
      },
      {
        name: "mobilePhoneNumber",
        label: "Mobile phone number",
        placeholder: "Mobile phone number",
        type: "text",
      },
    ],
  },
  {
    fields: [
      {
        name: "email",
        label: "Email address",
        placeholder: "Email address",
        type: "text",
      },
      {
        name: "emailConfirm",
        label: "Confirm email address",
        placeholder: "Confirm email address",
        type: "text",
      },
      {
        name: "password",
        label: "Password",
        placeholder: "Password",
        type: "text",
      },
      {
        name: "passwordConfirm",
        label: "Confirm Password",
        placeholder: "Confirm Password",
        type: "text",
      },
    ],
  },
];

export const RegisterPage = () => {
  const [currentSection, setCurrentSection] = useState<number>(0);
  const [formSections, setForomSections] = useState<
    typeof businessForm | typeof privateForm | null
  >([]);
  const { type } = useParams();
  const [formData, setFormData] = useState<
    typeof initBusinessForm | typeof initPrivateForm | null
  >(null);

  const handleClickNextSection = () => {
    if (formSections) {
      if (currentSection === formSections.length - 1) {
        return console.log("SUBMIT", formData);
      }
      setCurrentSection((prev) =>
        prev < formSections.length - 1 ? ++prev : prev,
      );
    }
  };

  const handleClickPrevSection = () =>
    setCurrentSection((prev) => (prev > 0 ? --prev : prev));

  const updateForm = (name: string, value: string | SelectOption) => {
    // @ts-ignore
    setFormData((prev) => ({ ...prev, [name]: value }));
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
      setForomSections(privateForm);
      return setFormData(initPrivateForm);
    }
    // @ts-ignore
    setForomSections(businessForm);
    setFormData(initBusinessForm);
  }, []);
  return (
    <Section mainContent>
      <Wrap sx={{ minHeight: "35rem", width: "100%" }}>
        {formSections?.length && formData && (
          <Form.Root>
            {/* @ts-ignore */}
            {formSections[currentSection].fields.map((field) => {
              const {
                type,
                label,
                name,
                placeholder,
                selectOptions,
                helperText,
              } = field;
              let input: React.ReactNode;
              if (type === "select") {
                input = (
                  <Select
                    name={name}
                    // @ts-ignore
                    value={formData[name] as SelectOption}
                    onSelect={handleSelect}
                    options={selectOptions as SelectOption[]}
                    optionsPosition={"top"}
                    label={label}
                    InputProps={{ placeholder, helperText }}
                    fullWidth
                  />
                );
              } else {
                input = (
                  <Input
                    // @ts-ignore
                    value={formData[name] as string}
                    onChange={handleInputChange}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                    helperText={helperText}
                    fullWidth
                    InputNativeProps={{
                      type:
                        name === "password" || name === "passwordConfirm"
                          ? "password"
                          : "text",
                    }}
                  />
                );
              }

              return (
                <Wrap
                  sx={{ display: "flex", width: "100%", marginTop: "3rem" }}
                  key={field.name}
                >
                  {input}
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
          <ButtonArrow
            direction="left"
            onClick={handleClickPrevSection}
            disabled={currentSection === 0}
          >
            Prev
          </ButtonArrow>
        </Wrap>

        <ButtonArrow
          onClick={handleClickNextSection}
          // @ts-ignore
        >
          {formSections && currentSection !== formSections?.length - 1
            ? "Next"
            : "Register"}
        </ButtonArrow>
      </Wrap>
      <Register.Help.Root>
        <Wrap sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <Register.Help.Title>Need help?</Register.Help.Title>
          <Register.Help.SubTitle>
            Contact us via support@blackbanx.comtle
          </Register.Help.SubTitle>
        </Wrap>
        <Input
          value={""}
          onChange={() => {}}
          helperText={"Or enter your email and we will contact you first!"}
          placeholder={"Email address"}
        />
      </Register.Help.Root>
    </Section>
  );
};
