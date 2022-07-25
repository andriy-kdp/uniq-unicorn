type LanguagesListType = "language_id" | "language" | "language_code" | "country_flag";
type LanguagesList = Record<LanguagesListType, string>;
export type ResLanguagesList = { data: LanguagesList[] };

type SiteTextCommonType =
  | "hf_head_one_rt"
  | "hf_head_one_rt_subone"
  | "hf_head_one_rt_subone_sub"
  | "hf_head_one_rt_subtwo"
  | "hf_head_one_rt_subtwo_sub"
  | "hf_head_one_rt_subthree"
  | "hf_head_one_rt_subthree_sub"
  | "hf_head_two_rt"
  | "hf_head_two_rt__subone"
  | "hf_head_two_rt__subone_sub"
  | "hf_head_two_rt__subtwo"
  | "hf_head_two_rt__subtwo_sub"
  | "hf_head_two_rt_subthree"
  | "hf_head_two_rt_subthree_sub"
  | "hf_head_three_rt"
  | "hf_head_three_rt_subone"
  | "hf_head_three_rt_subone_sub"
  | "hf_head_three_rt__subtwo"
  | "hf_head_three_rt__subtwo_sub"
  | "hf_head_three_rt_subthree"
  | "hf_head_three_rt_subthree_sub"
  | "hf_head_four_lft"
  | "hf_head_five_lft"
  | "hf_foot_left_headOne"
  | "hf_foot_left_lineTwo"
  | "hf_foot_left_lineThree"
  | "hf_foot_mid_headOne"
  | "hf_foot_mid_lineOne"
  | "hf_foot_mid_lineTwo"
  | "hf_foot_mid_lineThree"
  | "hf_foot_right_headOne"
  | "hf_foot_cntryone"
  | "hf_foot_cntrytwo"
  | "hf_foot_cntrythree"
  | "hf_foot_cntryfour"
  | "hf_foot_cntryfive"
  | "hf_foot_cntrysix"
  | "hf_foot_cntryseven"
  | "hf_foot_cntryeight"
  | "hf_foot_right_lineTwo";
type SiteTextCommon = Record<SiteTextCommonType, string>;
export type ResSiteTextCommon = { data: SiteTextCommon[] };

type SiteTextHomeType =
  | "hp_sliderOne"
  | "hp_sliderTwo"
  | "hp_sliderThree"
  | "hp_head_left"
  | "hp_head_left_sub"
  | "hp_head_mid"
  | "hp_head_mid_sub"
  | "hp_head_right"
  | "hp_head_right_sub"
  | "hp_headTwo"
  | "hp_acop_txt"
  | "hp_acop_txt_link"
  | "hp_acop_lwr_sbhd"
  | "hp_apdwn_text"
  | "hp_apdwn_text_link";
type SiteTextHome = Record<SiteTextHomeType, string>;
export type ResSiteTextHome = { data: SiteTextHome[] };

type SiteTextAboutMissionType =
  | "abtus_misn_headOne"
  | "abtus_misn_subhead"
  | "abtus_misn_paraOne"
  | "abtus_misn_paraTwo"
  | "abtus_misn_paraThree"
  | "abtus_misn_paraFour"
  | "abtus_misn_paraFive";
type SiteTextAboutMission = Record<SiteTextAboutMissionType, string>;
export type ResSiteTextAboutMission = { data: SiteTextAboutMission[] };

type SiteTextAboutSecurityType =
  | "abtus_scrty_headOne"
  | "abtus_scrty_left_HeadOne"
  | "abtus_scrty_HeadTwoSub"
  | "abtus_scrty_HeadTwoSub"
  | "abtus_scrty_HeadTwoSub"
  | "abtus_scrty_HeadTwoSub"
  | "abtus_scrty_left_HeadOne_Paraone"
  | "abtus_scrty_right_HeadOne"
  | "abtus_scrty_right_HeadOne_ParaOne";
type AboutSecurity = Record<SiteTextAboutSecurityType, string>;
export type ResSiteTextAboutSecurity = { data: AboutSecurity[] };

type SiteTextAboutCareersType =
  | "abtus_cr_headone"
  | "abtus_cr_headtwo"
  | "abtus_cr_headtwoSub"
  | "abtus_cr_bxone_title"
  | "abtus_cr_bxone_plcehldr"
  | "abtus_cr_opone"
  | "abtus_cr_optwo"
  | "abtus_cr_opthree"
  | "abtus_cr_bxtwo_title"
  | "abtus_cr_bxthree_title"
  | "abtus_cr_bx_btnone"
  | "abtus_cr_bx_btntwo";
type SiteTextAboutCareers = Record<SiteTextAboutCareersType, string>;
export type ResSiteTextAboutCareers = { data: SiteTextAboutCareers[] };

type SiteTextAccountsBankAccountsType =
  | "ac_bnk_headOne"
  | "ac_bnk_hdtwo"
  | "ac_bnk_hdtwo_Subpara"
  | "ac_bnk_hdtwo_left"
  | "ac_bnk_hdtwo_left_subone"
  | "ac_bnk_hdtwo_left_subtwo"
  | "ac_bnk_hdtwo_left_pntone"
  | "ac_bnk_hdtwo_left_pnttwo"
  | "ac_bnk_hdtwo_left_pntthree"
  | "ac_bnk_hdtwo_left_pntfour"
  | "ac_bnk_hdtwo_left_pntfive"
  | "ac_bnk_hdtwo_left_pntsix"
  | "ac_bnk_hdtwo_left_pntseven"
  | "ac_bnk_hdtwo_left_pnteight"
  | "ac_bnk_hdtwo_left_pntnine"
  | "ac_bnk_hdtwo_mid"
  | "ac_bnk_hdtwo_mid_subone"
  | "ac_bnk_hdtwo_mid_subtwo"
  | "ac_bnk_hdtwo_mid_pntone"
  | "ac_bnk_hdtwo_mid_pnttwo"
  | "ac_bnk_hdtwo_mid_pntthree"
  | "ac_bnk_hdtwo_mid_pntfour"
  | "ac_bnk_hdtwo_mid_pntfive"
  | "ac_bnk_hdtwo_mid_pntsix"
  | "ac_bnk_hdtwo_mid_pntseven"
  | "ac_bnk_hdtwo_mid_pnteight"
  | "ac_bnk_hdtwo_mid_pntnine"
  | "ac_bnk_hdtwo_mid_pntten";
type SiteTextAccountsBankAccounts = Record<SiteTextAccountsBankAccountsType, string>;
export type ResSiteTextAccountsBankAccounts = { data: SiteTextAccountsBankAccounts[] };

type SiteTextAccountsCryptoCurrencyType =
  | "acnt_crypt_headOne"
  | "acnt_crypt_headtwo"
  | "acnt_crypt_subhd_lnone_left"
  | "acnt_crypt_subhd_lnone_left_para"
  | "acnt_crypt_subhd_lnone_mid"
  | "acnt_crypt_subhd_lnone_mid_para"
  | "acnt_crypt_subhd_lnone_right"
  | "acnt_crypt_subhd_lnone_right_para"
  | "acnt_crypt_subhd_lntwo_left"
  | "acnt_crypt_subhd_lntwo_left_para"
  | "acnt_crypt_subhd_lntwo_mid"
  | "acnt_crypt_subhd_lntwo_mid_para"
  | "acnt_crypt_subhd_lntwo_right"
  | "acnt_crypt_subhd_lntwo_right_para"
  | "acnt_crypt_acnt_opnlink_text"
  | "acnt_crypt_acnt_opnlink";
type SiteTextAccountsCryptoCurrency = Record<SiteTextAccountsCryptoCurrencyType, string>;
export type ResSiteTextAccountsCryptoCurrency = { data: SiteTextAccountsCryptoCurrency[] };

type SiteTextAccountsFeesType =
  | "ac_fee_hdone"
  | "ac_fee_typslde_hdone"
  | "ac_fee_typslde_hdone_subhdone"
  | "ac_fee_typslde_hdone_subhdone_pone"
  | "ac_fee_typslde_hdone_subhdtwo"
  | "ac_fee_typslde_hdone_subhdtwo_pone"
  | "ac_fee_typslde_hdone_subhdtwo_ptwo"
  | "ac_fee_typslde_hdone_subhdtwo_pthree"
  | "ac_fee_typslde_hdone_subhdthree"
  | "ac_fee_typslde_hdone_subhdthree_pone"
  | "ac_fee_typslde_hdone_subhdthree_ptwo"
  | "ac_fee_typslde_hdone_subhdfour"
  | "ac_fee_typslde_hdone_subhdfour_pone"
  | "ac_fee_typslde_hdone_subhdfour_ptwo"
  | "ac_fee_typslde_hdone_subhdfive"
  | "ac_fee_typslde_hdone_subhdfive_pone"
  | "ac_fee_typslde_hdone_subhdSix"
  | "ac_fee_typslde_hdone_subhdsix_pone"
  | "ac_fee_typslde_hdone_subhdsix_ptwo"
  | "ac_fee_typslde_hdone_subhdsix_pthree"
  | "ac_fee_typslde_hdone_subhdsix_pfour"
  | "ac_fee_typslde_hdtwo"
  | "ac_fee_typslde_hdtwo_subhdone"
  | "ac_fee_typslde_hdtwo_subhdone_pone"
  | "ac_fee_typslde_hdtwo_subhdtwo"
  | "ac_fee_typslde_hdtwo_subhdtwo_pone"
  | "ac_fee_typslde_hdtwo_subhdtwo_ptwo"
  | "ac_fee_typslde_hdtwo_subhdtwo_pthree"
  | "ac_fee_typslde_hdtwo_subhdthree"
  | "ac_fee_typslde_hdtwo_subhdthree_pone"
  | "ac_fee_typslde_hdtwo_subhdthree_pthree"
  | "ac_fee_typslde_hdtwo_subhdfour"
  | "ac_fee_typslde_hdtwo_subhdfour_pone"
  | "ac_fee_typslde_hdtwo_subhdfour_pthree"
  | "ac_fee_typslde_hdtwo_subhdfive"
  | "ac_fee_typslde_hdtwo_subhdfive_pone"
  | "ac_fee_typslde_hdtwo_subhdfive_pthree"
  | "ac_fee_typslde_hdtwo_subhdsix"
  | "ac_fee_typslde_hdtwo_subhdSix_pone"
  | "ac_fee_typslde_hdtwo_subhdSix_ptwo"
  | "ac_fee_typslde_hdtwo_subhdSix_pthree"
  | "ac_fee_typslde_hdtwo_subhdSix_pfour"
  | "ac_fee_typslde_hdthree"
  | "ac_fee_typslde_hdthree_subhdone"
  | "ac_fee_typslde_hdthree_subhdone_pone"
  | "ac_fee_typslde_hdthree_subhdtwo"
  | "ac_fee_typslde_hdthree_subhdtwo_pone"
  | "ac_fee_typslde_hdthree_subhdtwo_ptwo"
  | "ac_fee_typslde_hdthree_subhdtwo_pthree"
  | "ac_fee_typslde_hdthree_subhdthree"
  | "ac_fee_typslde_hdthree_subhdthree_pone"
  | "ac_fee_typslde_hdthree_subhdthree_ptwo"
  | "ac_fee_typslde_hdthree_subhdthree_pthree"
  | "ac_fee_typslde_hdthree_subhdfour"
  | "ac_fee_typslde_hdthree_subhdfour_pone"
  | "ac_fee_typslde_hdthree_subhdfour_ptwo"
  | "ac_fee_typslde_hdthree_subhdfive"
  | "ac_fee_typslde_hdthree_subhdfive_pone"
  | "ac_fee_typslde_hdthree_subhdfive_ptwo"
  | "ac_fee_typslde_hdthree_subhdfive_pthree"
  | "ac_fee_typslde_hdthree_subhdsix"
  | "ac_fee_typslde_hdthree_subhdsix_pone"
  | "ac_fee_typslde_hdthree_subhdsix_ptwo"
  | "ac_fee_typslde_hdthree_subhdsix_pthree"
  | "ac_fee_typslde_hdthree_subhdsix_pfour"
  | "ac_fee_typslde_hdthree_subhdsix_pfive"
  | "ac_fee_typslde_hdthree_subhdsix_psix"
  | "ac_fee_typslde_hdfour"
  | "ac_fee_typslde_hdfour_subhdone"
  | "ac_fee_typslde_hdfour_subhdone_pone"
  | "ac_fee_typslde_hdfour_subhdtwo"
  | "ac_fee_typslde_hdfour_subhdtwo_pone"
  | "ac_fee_typslde_hdfour_subhdtwo_ptwo"
  | "ac_fee_typslde_hdfour_subhdtwo_pthree"
  | "ac_fee_typslde_hdfour_subhdthree"
  | "ac_fee_typslde_hdfour_subhdthree_pone"
  | "ac_fee_typslde_hdfour_subhdthree_ptwo"
  | "ac_fee_typslde_hdfour_subhdthree_pthree"
  | "ac_fee_typslde_hdfour_subhdthree_pfour"
  | "ac_fee_typslde_hdfour_subhdfour"
  | "ac_fee_typslde_hdfour_subhdfour_pone"
  | "ac_fee_typslde_hdfour_subhdfour_ptwo"
  | "ac_fee_typslde_hdfour_subhdfive"
  | "ac_fee_typslde_hdfour_subhdfive_pone"
  | "ac_fee_typslde_hdfour_subhdsix"
  | "ac_fee_typslde_hdfour_subhdsix_pone"
  | "ac_fee_typslde_hdfour_subhdsix_ptwo"
  | "ac_fee_typslde_hdfour_subhdsix_pthree"
  | "ac_fee_typslde_hdfour_subhdsix_pfour"
  | "ac_fee_typslde_hdfour_subhdsix_pfive"
  | "ac_fee_typslde_hdfour_subhdsix_pSix"
  | "ac_fee_lower_hdone"
  | "ac_fee_btmline"
  | "ac_fee_lower_drp_dflt_one"
  | "ac_fee_lower_drp_dflt_two"
  | "ac_fee_lower_drp_dflt_three"
  | "ac_fee_lower_drp_dflt_four"
  | "ac_fee_lower_drp_dflt_five";
type SiteTextAccountsFees = Record<SiteTextAccountsFeesType, string>;
export type ResSiteTextAccountsFees = { data: SiteTextAccountsFees[] };

type SiteTextMediaCoverageType = "mc_mcov_headone" | "mc_mcov_art_rfa";
type SiteTextMediaCoverage = Record<SiteTextMediaCoverageType, string>;
export type ResSiteTextMediaCoverage = { data: SiteTextMediaCoverage[] };

type SiteTextMediaNewsType = "mc_nws_headone" | "mc_nws_shre_txt" | "mc_nws_intrvw_text";
type SiteTextMediaNews = Record<SiteTextMediaNewsType, string>;
export type ResSiteTextMediaNews = { data: SiteTextMediaNews[] };

type SiteTextMediaBlogType = "";
export type ResSiteTextMediaBlog = { data: SiteTextMediaBlogType[] };

type SiteTextContactType =
  | "cus_headone"
  | "cus_cntctus"
  | "cus_qstn"
  | "cus_qstn_nme"
  | "cus_qstn_eml"
  | "cus_qstn_sntbtn"
  | "cus_city_lndn"
  | "cus_city_mscw"
  | "cus_city_dbai"
  | "cus_city_tnto"
  | "cus_city_cptwn"
  | "cus_city_tkyo"
  | "cus_city_shghi"
  | "cus_city_saplo";
type SiteTextContact = Record<SiteTextContactType, string>;
export type ResSiteTextContact = { data: SiteTextContact[] };

type SiteTextPoliciesTermsType =
  | "pt_headone"
  | "pt_headone_sub"
  | "pt_paraone"
  | "pt_paratwo"
  | "pt_subhd_one"
  | "pt_subhd_one_paraone"
  | "pt_subhd_two"
  | "pt_subhd_two_paraone"
  | "pt_subhd_three"
  | "pt_subhd_three_paraone"
  | "pt_subhd_three_paratwo"
  | "pt_subhd_four"
  | "pt_subhd_four_paraone"
  | "pt_subhd_four_paratwo"
  | "pt_subhd_four_parathree"
  | "pt_subhd_five"
  | "pt_subhd_five_paraone"
  | "pt_subhd_six"
  | "pt_subhd_six_paraone"
  | "pt_subhd_seven"
  | "pt_subhd_seven_paraone"
  | "pt_subhd_eight"
  | "pt_subhd_eight_paraone"
  | "pt_subhd_nine"
  | "pt_subhd_nine_paraone"
  | "pt_subhd_ten"
  | "pt_subhd_ten_paraone"
  | "pt_subhd_ten_paratwo"
  | "pt_subhd_eleven"
  | "pt_subhd_eleven_paraone"
  | "pt_subhd_eleven_paratwo"
  | "pt_subhd_eleven_parathree"
  | "pt_subhd_eleven_parafour"
  | "pt_subhd_twelve"
  | "pt_subhd_twelve_paraone"
  | "pt_subhd_thirtn"
  | "pt_subhd_thhirtn_paraone"
  | "pt_subhd_thhirtn_paratwo"
  | "pt_subhd_fourtn"
  | "pt_subhd_fourtn_paraone"
  | "pt_btmline";
type SiteTextPoliciesTerms = Record<SiteTextPoliciesTermsType, string>;
export type ResSiteTextPoliciesTerms = { data: SiteTextPoliciesTerms[] };

type SiteTextPrivacyPolicyType =
  | "pp_headone"
  | "pp_headone_subhd"
  | "pp_paraone"
  | "pp_subhd_one"
  | "pp_subhd_one_paraone"
  | "pp_subhd_one_paratwo"
  | "pp_subhd_two"
  | "pp_subhd_two_paraone"
  | "pp_subhd_two_paratwo"
  | "pp_subhd_two_parathree"
  | "pp_subhd_three"
  | "pp_subhd_three_paraone"
  | "pp_subhd_three_paratwo"
  | "pp_subhd_three_parathree"
  | "pp_subhd_three_pntone"
  | "pp_subhd_three_pnttwo"
  | "pp_subhd_three_pntthree"
  | "pp_subhd_three_pntfour"
  | "pp_subhd_three_parafour"
  | "pp_subhd_four"
  | "pp_subhd_four_paraone"
  | "pp_subhd_four_paratwo"
  | "pp_subhd_four_parathree"
  | "pp_subhd_four_parafour"
  | "pp_subhd_four_parafive"
  | "pp_subhd_four_parasix"
  | "pp_subhd_five"
  | "pp_subhd_five_paraone"
  | "pp_subhd_five_paratwo"
  | "pp_subhd_five_parathree"
  | "pp_subhd_six"
  | "pp_subhd_six_paraone"
  | "pp_subhd_seven"
  | "pp_subhd_seven_paraone"
  | "pp_subhd_eight"
  | "pp_subhd_eight_paraone"
  | "pp_subhd_eight_paratwo"
  | "pp_subhd_nine"
  | "pp_subhd_nine_paraone"
  | "pp_subhd_ten"
  | "pp_subhd_ten_paraone"
  | "pp_subhd_ten_paraone_pntone"
  | "pp_subhd_ten_paraone_pnttwo"
  | "pp_subhd_ten_paraone_pntthree"
  | "pp_subhd_ten_paratwo"
  | "pp_subhd_ten_paratwo_lineone"
  | "pp_subhd_ten_paratwo_linetwo"
  | "pp_subhd_ten_paratwo_linethree"
  | "pp_subhd_ten_paratwo_linefour"
  | "pp_btmline";
type SiteTextPrivacyPolicy = Record<SiteTextPrivacyPolicyType, string>;
export type ResSiteTextPrivacyPolicy = { data: SiteTextPrivacyPolicy[] };

export type WebsiteTextType = {
  common: Record<SiteTextCommonType, string>;
  homePage: Record<SiteTextHomeType, string>;
  aboutUsMission: Record<SiteTextAboutMissionType, string>;
  aboutUsSecurity: Record<SiteTextAboutSecurityType, string>;
  aboutUsCareers: Record<SiteTextAboutCareersType, string>;
  accountsBankAccounts: Record<SiteTextAccountsBankAccountsType, string>;
  accountsCryptoCurrency: Record<SiteTextAccountsCryptoCurrencyType, string>;
  accountsFees: Record<SiteTextAccountsFeesType, string>;
  mediaCenterMediaCoverage: Record<SiteTextMediaCoverageType, string>;
  mediaCenterNews: Record<SiteTextMediaNewsType, string>;
  mediaCenterBlog: Record<SiteTextMediaBlogType, string>;
  contactBlackBanx: Record<SiteTextContactType, string>;
  policiesTerms: Record<SiteTextPoliciesTermsType, string>;
  privacyPolicy: Record<SiteTextPrivacyPolicyType, string>;
};
export type WebsiteTextGroups =
  | "common"
  | "homePage"
  | "aboutUsMission"
  | "aboutUsSecurity"
  | "aboutUsCareers"
  | "accountsBankAccounts"
  | "accountsCryptoCurrency"
  | "accountsFees"
  | "mediaCenterMediaCoverage"
  | "mediaCenterNews"
  | "mediaCenterBlog"
  | "contactBlackBanx"
  | "policiesTerms"
  | "privacyPolicy";
// type TextTest = Record<TabType, SiteTextCommonType>;
// const a: TextTest = { name: "hf_foot_cntryeight" };

export type ResGetSiteTextData =
  | ResSiteTextCommon
  | ResSiteTextHome
  | ResSiteTextAboutMission
  | ResSiteTextAboutSecurity
  | ResSiteTextAboutCareers
  | ResSiteTextAccountsBankAccounts
  | ResSiteTextAccountsCryptoCurrency
  | ResSiteTextAccountsFees
  | ResSiteTextMediaCoverage
  | ResSiteTextMediaNews
  | ResSiteTextMediaBlog
  | ResSiteTextContact
  | ResSiteTextPoliciesTerms
  | ResSiteTextPrivacyPolicy;