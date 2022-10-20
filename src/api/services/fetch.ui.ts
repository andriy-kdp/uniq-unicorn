import { axios, endpoints } from "../base.api.cfg";
import { AxiosPromise } from "axios";
import {
  ResLanguagesList,
  ResGetSiteTextData,
  WebsiteTextGroups,
  ResSiteContentMediaCoverage,
  ResSiteContentMediaCenterNews,
  ResSiteContentMediaCenterBlogData,
  ResSiteContentMediaCenterBlog,
  ResCareerDropdownOptions,
  ResAboutUsLeadership,
  ResAboutUsFinanStats,
  ResCareerJobs,
} from "../types/fetch.ui.types";
import FD from "../../utils/object-to-form-data";

export const fetchLanguageList = (): AxiosPromise<ResLanguagesList> => axios.post(endpoints.languageList);

export const fetchCareerDropDown = (): AxiosPromise<ResCareerDropdownOptions> => axios.post(endpoints.careerDropDown);

export const fetchCountryOfResidence = (): AxiosPromise<ResLanguagesList> => axios.post(endpoints.countryOfResidence);

export const fetchCareerJobs = (credentials?: {
  languageId?: string;
  jobLocation?: number;
  postedDays?: number;
  keywords?: string;
  jobKeywordMatch?: number;
}): AxiosPromise<ResCareerJobs> => {
  const data = new FD(credentials).get();
  return axios({
    method: "POST",
    url: endpoints.careerJobs,
    data,
  });
};
export const fetchCareerJobDtls = (credentials: { jobId: string }): AxiosPromise<any> => {
  const data = new FD(credentials).get();
  return axios({
    method: "POST",
    url: endpoints.careerJobDtls,
    data,
  });
};
export const fetchMediaCenterCoverage = (credentials: {
  languageId: string;
  mcId?: string;
}): AxiosPromise<ResSiteContentMediaCoverage> => {
  const data = new FD(credentials).get();
  return axios({
    method: "POST",
    url: endpoints.mediaCenterCoverage,
    data,
  });
};
export const fetchMediaCenterNews = (credentials: {
  languageId: any;
  mnid?: any;
}): AxiosPromise<ResSiteContentMediaCenterNews> => {
  const data = new FD(credentials).get();
  return axios({
    method: "POST",
    url: endpoints.mediaCenterNews,
    data,
  });
};
export const fetchMediaCenterBlog = (credentials: {
  languageId: string;
}): AxiosPromise<ResSiteContentMediaCenterBlog> => {
  const data = new FD({ languageId: credentials }).get();
  return axios({
    method: "POST",
    url: endpoints.mediaCenterBlog,
    data,
  });
};
export const fetchMediaCenterBlogData = (credentials: {
  blogId: string;
  languageId: string;
}): AxiosPromise<ResSiteContentMediaCenterBlogData> => {
  const data = new FD(credentials).get();
  return axios({
    method: "POST",
    url: endpoints.mediaCenterBlogData,
    data,
  });
};
export const fetchWebsiteText = (credentials: {
  pageId: string;
  languageId: string;
}): AxiosPromise<ResGetSiteTextData> => {
  const data = new FD(credentials).get();
  return axios({
    method: "POST",
    url: endpoints.websiteText,
    data,
  });
};

export const fetchAboutUsLeadership = (credentials: {
  ldrId?: string;
  languageId: string;
}): AxiosPromise<ResAboutUsLeadership> => {
  const data = new FD(credentials).get();
  return axios({
    method: "POST",
    url: endpoints.aboutUsLeadership,
    data,
  });
};
export const fetchAboutUsFinanStats = (credentials: {
  languageId: string;
  finDataId?: string;
}): AxiosPromise<ResAboutUsFinanStats> => {
  const data = new FD(credentials).get();
  return axios({
    method: "POST",
    url: endpoints.aboutUsFinanStats,
    data,
  });
};

export const fetchWebSiteTextAll = async (languageId: string) => {
  const namesMap = new Map();
  namesMap.set(1, "common");
  namesMap.set(2, "homePage");
  namesMap.set(3, "aboutUsMission");
  namesMap.set(4, "aboutUsSecurity");
  namesMap.set(5, "aboutUsCareers");
  namesMap.set(6, "accountsBankAccounts");
  namesMap.set(7, "accountsCryptoCurrency");
  namesMap.set(8, "accountsFees");
  namesMap.set(9, "mediaCenterMediaCoverage");
  namesMap.set(10, "mediaCenterNews");
  namesMap.set(11, "mediaCenterBlog");
  namesMap.set(12, "contactBlackBanx");
  namesMap.set(13, "policiesTerms");
  namesMap.set(14, "privacyPolicy");
  namesMap.set(15, "codeOfConduct");
  namesMap.set(16, "culture");
  namesMap.set(17, "governance");
  namesMap.set(18, "leadership");
  namesMap.set(19, "riskManagement");
  namesMap.set(20, "sustainabilityCareers");
  namesMap.set(21, "financialStatements");

  const max = 21;
  const requests: { tab: WebsiteTextGroups; data: ResGetSiteTextData }[] = [];
  for (let i = 1; i <= max; i++) {
    const tab = namesMap.get(i);
    const dummyObj: Record<string, string> = {};

    const values = await fetchWebsiteText({ pageId: i.toString(), languageId });
    values.data.data.forEach((el) => {
      const [obj] = Object.entries(el);
      const [key, value] = obj;
      dummyObj[key] = value;
    });
    //@ts-ignore
    requests.push({ tab, data: dummyObj });
  }

  return await Promise.all(requests);
};
