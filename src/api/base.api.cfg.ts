import axiosMain from "axios";

export const baseURL = process.env.REACT_APP_API_URL;
export const userName = process.env.REACT_APP_API_USER_NAME;
export const password = process.env.REACT_APP_API_PASSWORD;

export const axios = axiosMain.create({
  baseURL,
  headers: { userName, password },
});

export const endpoints = {
  languageList: "/languageList/",
  websiteText: "/websiteText/",
  countryOfResidence: "/countryOfResidence/",
  mediaCenterCoverage: "/mediaCenterCoverage/",
  mediaCenterNews: "/mediaCenterNews/",
  mediaCenterBlog: "/mediaCenterBlog/",
  mediaCenterBlogData: "/mediaCenterBlogData/",
  careerDropDown: "/careerDropDown/",
  careerJobs: "/careerJobs/",
  careerJobDtls: "/careerJobDtls/",
};
