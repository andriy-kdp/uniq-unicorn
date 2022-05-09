import React from "react";
import { SelectOption } from "../../../components/inputs/select/select.types";

type ProvateAccountFormType = {
  fullName: string;
  dateOfBirth: string;
  address: string;
  postCode: string;
  countryOfResidence: SelectOption;
  nationality: SelectOption;
  passportNumber: string;
  validUntil: string;
  accountCurrencyFirst: SelectOption;
  accountCurrencySecond: SelectOption;
  mobilePhoneNumber: string;
};

type BusinessAccountFormType = Omit<
  ProvateAccountFormType,
  "accountCurrencyFirst" | "accountCurrencySecond"
> & {
  businessName: string;
  businessAddress: string;
  registrationNumber: string;
  dateOfIncorporation: string;
  countryOfIncorporation: SelectOption;
  cityOfIncorporation: string;
  phoneNumber: string;
  industrySector: string;
  businessActivity: string;
  url: string;
};

type FormField<T> = {
  name: keyof T;
  label: string;
  placeholder: string;
  type: "text" | "select";
  selectOptions?: SelectOption[];
};

type FormSection<T> = {
  fields: FormField<T>[];
};

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
      },
      {
        name: "cityOfIncorporation",
        label: "Business name",
        placeholder: "Business name",
        type: "text",
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
];

//
const Form = () => {};

export const RegisterPage = () => {};
