export const uiDataLanguageList = (state) => state.uiDataSlice.languageList;
export const uiDataSelectedLanguageId = (state) => state.uiDataSlice.selectedLanguageId;
export const uiDataWebsiteText = (state) => state.uiDataSlice.websiteText;
export const uiDataFetching = (state) => state.uiDataSlice.loading;
export const uiDataCountryOfResidence = (state) => state.uiDataSlice.countryOfResidence;
export const uiDataMediaCenterNews = (state) => state.uiDataSlice.mediaCenterNewsData;
export const uiDataMediaCenterBlog = (state) => state.uiDataSlice.mediaCenterBlogData;
export const uiMediaCenterCoverage = (state) => state.uiDataSlice.mediaCenterCoverageData;
export const uiCareerDropDown = (state) => state.uiDataSlice.careerDropDown;
export const uiAboutUsLeadership = (state) => state.uiDataSlice.aboutUsLeadership;
export const uiAboutUsLeadershipPerson = (state) => state.uiDataSlice.aboutUsLeadershipPerson;
export const uiAboutUsFinanStats = (state) => state.uiDataSlice.aboutUsFinanStats;
export const uiCareerJobs = (state) => state.uiDataSlice.careerJobs;

const uiDataSelectors = {
  uiDataLanguageList,
  uiDataWebsiteText,
  uiDataSelectedLanguageId,
  uiDataCountryOfResidence,
  uiDataMediaCenterNews,
  uiDataMediaCenterBlog,
  uiMediaCenterCoverage,
  uiCareerDropDown,
  uiAboutUsLeadership,
  uiAboutUsLeadershipPerson,
  uiAboutUsFinanStats,
  uiCareerJobs,
};
export default uiDataSelectors;
