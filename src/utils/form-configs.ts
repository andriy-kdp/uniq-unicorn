import { BusinessAccountFormType, FormSection, PrivateAccountFormType } from "../pages/auth/auth.types";

export const privateForm: FormSection<PrivateAccountFormType>[] = [
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

export const businessForm: FormSection<BusinessAccountFormType>[] = [
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
