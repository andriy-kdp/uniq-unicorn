import { SelectOption } from "../../components/inputs/select/select.types";
import React from "react";

export type AccountTypes = "private" | "business" | "institutional";

export type AccountItem = {
  icon: React.ReactNode;
  title: string;
  value: AccountTypes;
};

export type PrivateAccountFormType = {
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

export type BusinessAccountFormType = Omit<PrivateAccountFormType, "accountCurrencyFirst" | "accountCurrencySecond"> & {
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

export type FormTypeKeys = keyof BusinessAccountFormType | keyof PrivateAccountFormType;

export type FormFieldType<T = {}> = {
  name: keyof T;
  label: string;
  placeholder: string;
  type: "text" | "select";
  selectOptions?: SelectOption[];
  helperText?: string;
};

export type FormSection<T> = {
  fields: FormFieldType<T>[];
};
