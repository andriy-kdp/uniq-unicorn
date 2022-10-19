import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchCareerDropDown,
  fetchCareerJobs,
  fetchCountryOfResidence,
  fetchLanguageList,
  fetchMediaCenterBlog,
  fetchMediaCenterBlogData,
  fetchMediaCenterCoverage,
  fetchMediaCenterNews,
  fetchWebsiteText,
  fetchWebSiteTextAll,
} from "../../api/services/fetch.ui";
import { setUiDataFetching } from "./slice";

const getLanguages = createAsyncThunk("/languageList", async (credentials, { dispatch }) => {
  try {
    const { data } = await fetchLanguageList();
    return data.data;
  } catch (err) {
    return Promise.reject(err);
  }
});
const getCareerDropDown = createAsyncThunk("/careerDropDown", async (credentials, { dispatch }) => {
  try {
    const { data } = await fetchCareerDropDown();
    return data.data;
  } catch (err) {
    return Promise.reject(err);
  }
});
const getWebsiteText = createAsyncThunk(
  "/websiteText",
  async (credentials: { pageId: string; languageId: string }, { dispatch }) => {
    dispatch(setUiDataFetching(true));
    try {
      const { data } = await fetchWebsiteText(credentials);
      console.log(data.data);
      dispatch(setUiDataFetching(false));
      return data.data;
    } catch (err) {
      return Promise.reject(err);
    }
  },
);
const getCareerJobs = createAsyncThunk(
  "/careerJobs",
  async (
    credentials: { jobLocation: number; postedDays: number; keywords: string; jobKeywordMatch: number },
    { dispatch },
  ) => {
    try {
      console.log("careerJobs");
      const { data } = await fetchCareerJobs(credentials);
      console.log(data);
      return data;
    } catch (err) {
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
    return Promise.reject(err);
  }
});
const getCountryOfResidence = createAsyncThunk("/countryOfResidence", async (credentials, { dispatch }) => {
  try {
    const { data } = await fetchCountryOfResidence();
    return data.data;
  } catch (err) {
    return Promise.reject(err);
  }
});

const getMediaCenterCoverage = createAsyncThunk(
  "/mediaCenterCoverage",
  async (credentials: { languageId: string }, { dispatch }) => {
    try {
      const data = await fetchMediaCenterCoverage(credentials);
      return data;
    } catch (err) {
      return Promise.reject(err);
    }
  },
);

const getMediaCenterNews = createAsyncThunk(
  "/mediaCenterNews",
  async (credentials: { languageId: any; mnId?: any }, { dispatch }) => {
    try {
      const data = await fetchMediaCenterNews(credentials);
      return data;
    } catch (err) {
      return Promise.reject(err);
    }
  },
);
const getMediaCenterBlog = createAsyncThunk(
  "/mediaCenterBlog",
  async (credentials: { languageId: string }, { dispatch }) => {
    try {
      const data = await fetchMediaCenterBlog(credentials);
      return data;
    } catch (err) {
      return Promise.reject(err);
    }
  },
);
const getMediaCenterSingleBlog = createAsyncThunk(
  "/mediaCenterBlogData",
  async (credentials: { blogId: string; languageId: string }, { dispatch }) => {
    try {
      const { data } = await fetchMediaCenterBlogData(credentials);
      return data;
    } catch (err) {
      return Promise.reject(err);
    }
  },
);

const operations = {
  getLanguages,
  getWebsiteText,
  getAllWebsiteText,
  getCountryOfResidence,
  getMediaCenterCoverage,
  getMediaCenterNews,
  getMediaCenterBlog,
  getMediaCenterSingleBlog,
  getCareerDropDown,
  getCareerJobs,
};
export default operations;
