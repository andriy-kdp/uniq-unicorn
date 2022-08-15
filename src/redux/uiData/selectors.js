export const uiDataLanguageList = (state) => state.uiDataSlice.languageList;
export const uiDataSelectedLanguageId = (state) => state.uiDataSlice.selectedLanguageId;
export const uiDataWebsiteText = (state) => state.uiDataSlice.websiteText;
export const uiDataFetching = (state) => state.uiDataSlice.loading;
export const uiDataCountryOfResidence = (state) => state.uiDataSlice.countryOfResidence;
export const uiMediaCenterCoverage = (state) => state.uiDataSlice.countryOfResidence;

const uiDataSelectors = {
  uiDataLanguageList,
  uiDataWebsiteText,
  uiDataSelectedLanguageId,
  uiDataCountryOfResidence,
  uiMediaCenterCoverage,
};
export default uiDataSelectors;
