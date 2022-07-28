export const uiDataLanguageList = (state) => state.uiDataSlice.languageList;
export const uiDataSelectedLanguageId = (state) => state.uiDataSlice.selectedLanguageId;
export const uiDataWebsiteText = (state) => state.uiDataSlice.websiteText;
export const uiDataFetching = (state) => state.uiDataSlice.loading;

const uiDataSelectors = {
  uiDataLanguageList,
  uiDataWebsiteText,
  uiDataSelectedLanguageId,
};
export default uiDataSelectors;
