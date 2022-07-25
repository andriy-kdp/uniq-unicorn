import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchCountryOfResidence,
  fetchLanguageList,
  fetchWebsiteText,
  fetchWebSiteTextAll,
} from "../../api/services/fetch.ui";
import { setUiDataFetching } from "./slice";

const getLanguages = createAsyncThunk("/languageList", async (credentials, { dispatch }) => {
  dispatch(setUiDataFetching(true));
  try {
    const { data } = await fetchLanguageList();
    dispatch(setUiDataFetching(false));
    return data.data;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
});
const getWebsiteText = createAsyncThunk(
  "/websiteText",
  async (credentials: { pageId: string; languageId: string }, { dispatch }) => {
    dispatch(setUiDataFetching(true));
    try {
      const { data } = await fetchWebsiteText(credentials);
      dispatch(setUiDataFetching(false));
      return data.data;
    } catch (err) {
      console.log(err);
      return Promise.reject(err);
    }
  },
);
const getAllWebsiteText = createAsyncThunk("/websiteText", async (credentials: string, { dispatch }) => {
  dispatch(setUiDataFetching(true));
  try {
    const data = await fetchWebSiteTextAll(credentials);
    dispatch(setUiDataFetching(false));
    return data;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
});
const getCountryOfResidence = createAsyncThunk("/countryOfResidence", async (credentials, { dispatch }) => {
  dispatch(setUiDataFetching(true));
  try {
    const { data } = await fetchCountryOfResidence();
    dispatch(setUiDataFetching(false));
    return data.data;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
});

const operations = { getLanguages, getWebsiteText, getAllWebsiteText };
export default operations;
