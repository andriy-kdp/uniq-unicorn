import { createSlice } from "@reduxjs/toolkit";
import {
  WebsiteTextType,
  SiteContentMediaCoverage,
  SiteContentMediaCenterNews,
  SiteContentMediaCenterBlog,
  SiteContentMediaCenterBlogData,
} from "../../api/types/fetch.ui.types";
import { SelectOptions } from "../../components/inputs/select/select.types";
import operations from "./operations";
import _ from "lodash";
import { Base64 } from "js-base64";

type InitialStateData = {
  loading: boolean;
  languageList: SelectOptions | null;
  countryOfResidence: {} | null;
  careerDropDown: Record<string, SelectOptions> | null;
  mediaCenterCoverageData: SiteContentMediaCoverage[] | null;
  mediaCenterNewsData: SiteContentMediaCenterNews[] | null;
  mediaCenterBlogData: SiteContentMediaCenterBlog[] | null;
  mediaCenterBlogSingleData: SiteContentMediaCenterBlogData[] | null;
  selectedLanguageId: number | null;
  websiteText: WebsiteTextType;
};
const initialState: InitialStateData = {
  loading: false,
  languageList: null,
  countryOfResidence: null,
  careerDropDown: { abtus_cr_day: null, abtus_cr_cntry: null },
  mediaCenterCoverageData: null,
  mediaCenterNewsData: null,
  mediaCenterBlogData: null,
  mediaCenterBlogSingleData: null,
  selectedLanguageId: null,
  websiteText: {
    common: {
      hf_head_one_rt: "",
      hf_head_one_rt_subone: "",
      hf_head_one_rt_subone_sub: "",
      hf_head_one_rt_subtwo: "",
      hf_head_one_rt_subtwo_sub: "",
      hf_head_one_rt_subthree: "",
      hf_head_one_rt_subthree_sub: "",
      hf_head_two_rt: "",
      hf_head_two_rt__subone: "",
      hf_head_two_rt__subone_sub: "",
      hf_head_two_rt__subtwo: "",
      hf_head_two_rt__subtwo_sub: "",
      hf_head_two_rt_subthree: "",
      hf_head_two_rt_subthree_sub: "",
      hf_head_three_rt: "",
      hf_head_three_rt_subone: "",
      hf_head_three_rt_subone_sub: "",
      hf_head_three_rt__subtwo: "",
      hf_head_three_rt__subtwo_sub: "",
      hf_head_three_rt_subthree: "",
      hf_head_three_rt_subthree_sub: "",
      hf_head_four_lft: "",
      hf_head_five_lft: "",
      hf_foot_left_headOne: "",
      hf_foot_left_lineTwo: "",
      hf_foot_mid_headOne: "",
      hf_foot_mid_headOne_lineOne: "",
      hf_foot_mid_headOne_lineTwo: "",
      hf_foot_mid_headOne_lineFour: "",
      hf_foot_right_headOne: "",
      hf_foot_right_lineTwo: "",
      hf_head_one_rt_subfour: "",
      hf_head_one_rt_subfour_sub: "",
      hf_head_one_rt_subfive: "",
      hf_head_one_rt_subfive_sub: "",
      hf_head_one_rt_subsix: "",
      hf_head_one_rt_subsix_sub: "",
      hf_head_one_rt_subseven: "",
      hf_head_one_rt_subseven_sub: "",
      hf_head_one_rt_subeight: "",
      hf_head_one_rt_subeight_sub: "",
      hf_head_one_rt_subnine: "",
      hf_head_one_rt_subnine_sub: "",
      hf_foot_left_lineFour: "",
      hf_foot_left_lineFive: "",
      hf_foot_left_lineSix: "",
      hf_foot_left_lineSeven: "",
      hf_foot_left_lineEight: "",
      hf_foot_left_lineNine: "",
      hf_foot_mid_headOne_lineThree: "",
      hf_foot_mid_headOne_lineFive: "",
      hf_foot_mid_headOne_lineSix: "",
      hf_foot_mid_headOne_lineSeven: "",
      hf_foot_mid_headOne_lineEight: "",
      hf_foot_mid_headOne_lineNine: "",
      hf_foot_mid_headTwo: "",
      hf_foot_right_lineThree: "",
      hf_foot_mid_headTwo_lineOne: "",
      hf_foot_mid_headTwo_lineTwo: "",
      hf_foot_mid_headTwo_lineThree: "",
      hf_foot_mid_headTwo_lineFour: "",
      hf_foot_left_lineOne: "",
      mu_login: "",
      mu_linkOne: "",
      mu_linkOne_subOne: "",
      mu_linkOne_subTwo: "",
      mu_linkOne_subThree: "",
      mu_linkOne_subFour: "",
      mu_linkOne_subFive: "",
      mu_linkOne_subSix: "",
      mu_linkOne_subSeven: "",
      mu_linkOne_subEight: "",
      mu_linkOne_subNine: "",
      mu_linkTwo: "",
      mu_linkTwo_subOne: "",
      mu_linkTwo_subTwo: "",
      mu_linkTwo_subThree: "",
      mu_linkThree: "",
      mu_linkThree_subOne: "",
      mu_linkThree_subTwo: "",
      mu_linkThree_subThree: "",
    },
    // common: {
    //   hf_head_one_rt: "",
    //   hf_head_one_rt_subone: "",
    //   hf_head_one_rt_subone_sub: "",
    //   hf_head_one_rt_subtwo: "",
    //   hf_head_one_rt_subtwo_sub: "",
    //   hf_head_one_rt_subthree: "",
    //   hf_head_one_rt_subthree_sub: "",
    //   hf_head_two_rt: "",
    //   hf_head_two_rt__subone: "",
    //   hf_head_two_rt__subone_sub: "",
    //   hf_head_two_rt__subtwo: "",
    //   hf_head_two_rt__subtwo_sub: "",
    //   hf_head_two_rt_subthree: "",
    //   hf_head_two_rt_subthree_sub: "",
    //   hf_head_three_rt: "",
    //   hf_head_three_rt_subone: "",
    //   hf_head_three_rt_subone_sub: "",
    //   hf_head_three_rt__subtwo: "",
    //   hf_head_three_rt__subtwo_sub: "",
    //   hf_head_three_rt_subthree: "",
    //   hf_head_three_rt_subthree_sub: "",
    //   hf_head_four_lft: "",
    //   hf_head_five_lft: "",
    //   hf_foot_left_headOne: "",
    //   hf_foot_left_lineTwo: "",
    //   hf_foot_left_lineThree: "",
    //   hf_foot_mid_headOne: "",
    //   hf_foot_mid_lineOne: "",
    //   hf_foot_mid_lineTwo: "",
    //   hf_foot_mid_lineThree: "",
    //   hf_foot_right_headOne: "",
    //   hf_foot_cntryone: "",
    //   hf_foot_cntrytwo: "",
    //   hf_foot_cntrythree: "",
    //   hf_foot_cntryfour: "",
    //   hf_foot_cntryfive: "",
    //   hf_foot_cntrysix: "",
    //   hf_foot_cntryseven: "",
    //   hf_foot_cntryeight: "",
    //   hf_foot_right_lineTwo: "",
    //   hf_foot_mid_headOne_lineFive: "",
    //   hf_foot_mid_headOne_lineSix: "",
    //   hf_foot_mid_headOne_lineSeven: "",
    //   hf_foot_mid_headOne_lineEight: "",
    //   hf_foot_mid_headOne_lineNine: "",
    //   hf_foot_mid_headTwo: "",
    //   hf_foot_right_lineThree: "",
    //   hf_foot_mid_headTwo_lineOne: "",
    //   hf_foot_mid_headTwo_lineTwo: "",
    //   hf_foot_mid_headTwo_lineThree: "",
    //   hf_foot_mid_headTwo_lineFour: "",
    //   hf_foot_left_lineOne: "",
    // },
    homePage: {
      hp_sliderOne: "",
      hp_sliderTwo: "",
      hp_sliderThree: "",
      hp_head_left: "",
      hp_head_left_sub: "",
      hp_head_mid: "",
      hp_head_mid_sub: "",
      hp_head_right: "",
      hp_head_right_sub: "",
      hp_headTwo: "",
      hp_acop_txt: "",
      hp_acop_txt_link: "",
      hp_acop_lwr_sbhd: "",
      hp_apdwn_text: "",
      hp_apdwn_text_link: "",
    },
    aboutUsMission: {
      abtus_misn_headOne: "",
      abtus_misn_subhead: "",
      abtus_misn_paraOne: "",
      abtus_misn_paraTwo: "",
      abtus_misn_paraThree: "",
      abtus_misn_paraFour: "",
      abtus_misn_paraFive: "",
    },
    aboutUsSecurity: {
      abtus_scrty_headOne: "",
      abtus_scrty_left_HeadOne: "",
      abtus_scrty_HeadTwoSub: "",
      abtus_scrty_left_HeadOne_Paraone: "",
      abtus_scrty_right_HeadOne: "",
      abtus_scrty_right_HeadOne_ParaOne: "",
    },
    aboutUsCareers: {
      abtus_cr_headone: "",
      abtus_cr_headtwo: "",
      abtus_cr_headtwoSub: "",
      abtus_cr_bxone_title: "",
      abtus_cr_bxone_plcehldr: "",
      abtus_cr_opone: "",
      abtus_cr_optwo: "",
      abtus_cr_opthree: "",
      abtus_cr_bxtwo_title: "",
      abtus_cr_bxthree_title: "",
      abtus_cr_bx_btnone: "",
      abtus_cr_bx_btntwo: "",
    },
    accountsBankAccounts: {
      ac_bnk_headOne: "",
      ac_bnk_hdtwo: "",
      ac_bnk_hdtwo_Subpara: "",
      ac_bnk_hdtwo_left: "",
      ac_bnk_hdtwo_left_subone: "",
      ac_bnk_hdtwo_left_subtwo: "",
      ac_bnk_hdtwo_left_pntone: "",
      ac_bnk_hdtwo_left_pnttwo: "",
      ac_bnk_hdtwo_left_pntthree: "",
      ac_bnk_hdtwo_left_pntfour: "",
      ac_bnk_hdtwo_left_pntfive: "",
      ac_bnk_hdtwo_left_pntsix: "",
      ac_bnk_hdtwo_left_pntseven: "",
      ac_bnk_hdtwo_left_pnteight: "",
      ac_bnk_hdtwo_left_pntnine: "",
      ac_bnk_hdtwo_mid: "",
      ac_bnk_hdtwo_mid_subone: "",
      ac_bnk_hdtwo_mid_subtwo: "",
      ac_bnk_hdtwo_mid_pntone: "",
      ac_bnk_hdtwo_mid_pnttwo: "",
      ac_bnk_hdtwo_mid_pntthree: "",
      ac_bnk_hdtwo_mid_pntfour: "",
      ac_bnk_hdtwo_mid_pntfive: "",
      ac_bnk_hdtwo_mid_pntsix: "",
      ac_bnk_hdtwo_mid_pntseven: "",
      ac_bnk_hdtwo_mid_pnteight: "",
      ac_bnk_hdtwo_mid_pntnine: "",
      ac_bnk_hdtwo_mid_pntten: "",
    },
    accountsCryptoCurrency: {
      acnt_crypt_headOne: "",
      acnt_crypt_headtwo: "",
      acnt_crypt_subhd_lnone_left: "",
      acnt_crypt_subhd_lnone_left_para: "",
      acnt_crypt_subhd_lnone_mid: "",
      acnt_crypt_subhd_lnone_mid_para: "",
      acnt_crypt_subhd_lnone_right: "",
      acnt_crypt_subhd_lnone_right_para: "",
      acnt_crypt_subhd_lntwo_left: "",
      acnt_crypt_subhd_lntwo_left_para: "",
      acnt_crypt_subhd_lntwo_mid: "",
      acnt_crypt_subhd_lntwo_mid_para: "",
      acnt_crypt_subhd_lntwo_right: "",
      acnt_crypt_subhd_lntwo_right_para: "",
      acnt_crypt_acnt_opnlink_text: "",
      acnt_crypt_acnt_opnlink: "",
    },
    accountsFees: {
      ac_fee_hdone: "",
      ac_fee_typslde_hdone: "",
      ac_fee_typslde_hdone_subhdone: "",
      ac_fee_typslde_hdone_subhdone_pone: "",
      ac_fee_typslde_hdone_subhdtwo: "",
      ac_fee_typslde_hdone_subhdtwo_pone: "",
      ac_fee_typslde_hdone_subhdtwo_ptwo: "",
      ac_fee_typslde_hdone_subhdtwo_pthree: "",
      ac_fee_typslde_hdone_subhdthree: "",
      ac_fee_typslde_hdone_subhdthree_pone: "",
      ac_fee_typslde_hdone_subhdthree_ptwo: "",
      ac_fee_typslde_hdone_subhdfour: "",
      ac_fee_typslde_hdone_subhdfour_pone: "",
      ac_fee_typslde_hdone_subhdfour_ptwo: "",
      ac_fee_typslde_hdone_subhdfive: "",
      ac_fee_typslde_hdone_subhdfive_pone: "",
      ac_fee_typslde_hdone_subhdSix: "",
      ac_fee_typslde_hdone_subhdsix_pone: "",
      ac_fee_typslde_hdone_subhdsix_ptwo: "",
      ac_fee_typslde_hdone_subhdsix_pthree: "",
      ac_fee_typslde_hdone_subhdsix_pfour: "",
      ac_fee_typslde_hdtwo: "",
      ac_fee_typslde_hdtwo_subhdone: "",
      ac_fee_typslde_hdtwo_subhdone_pone: "",
      ac_fee_typslde_hdtwo_subhdtwo: "",
      ac_fee_typslde_hdtwo_subhdtwo_pone: "",
      ac_fee_typslde_hdtwo_subhdtwo_ptwo: "",
      ac_fee_typslde_hdtwo_subhdtwo_pthree: "",
      ac_fee_typslde_hdtwo_subhdthree: "",
      ac_fee_typslde_hdtwo_subhdthree_pone: "",
      ac_fee_typslde_hdtwo_subhdthree_pthree: "",
      ac_fee_typslde_hdtwo_subhdfour: "",
      ac_fee_typslde_hdtwo_subhdfour_pone: "",
      ac_fee_typslde_hdtwo_subhdfour_pthree: "",
      ac_fee_typslde_hdtwo_subhdfive: "",
      ac_fee_typslde_hdtwo_subhdfive_pone: "",
      ac_fee_typslde_hdtwo_subhdfive_pthree: "",
      ac_fee_typslde_hdtwo_subhdsix: "",
      ac_fee_typslde_hdtwo_subhdSix_pone: "",
      ac_fee_typslde_hdtwo_subhdSix_ptwo: "",
      ac_fee_typslde_hdtwo_subhdSix_pthree: "",
      ac_fee_typslde_hdtwo_subhdSix_pfour: "",
      ac_fee_typslde_hdthree: "",
      ac_fee_typslde_hdthree_subhdone: "",
      ac_fee_typslde_hdthree_subhdone_pone: "",
      ac_fee_typslde_hdthree_subhdtwo: "",
      ac_fee_typslde_hdthree_subhdtwo_pone: "",
      ac_fee_typslde_hdthree_subhdtwo_ptwo: "",
      ac_fee_typslde_hdthree_subhdtwo_pthree: "",
      ac_fee_typslde_hdthree_subhdthree: "",
      ac_fee_typslde_hdthree_subhdthree_pone: "",
      ac_fee_typslde_hdthree_subhdthree_ptwo: "",
      ac_fee_typslde_hdthree_subhdthree_pthree: "",
      ac_fee_typslde_hdthree_subhdfour: "",
      ac_fee_typslde_hdthree_subhdfour_pone: "",
      ac_fee_typslde_hdthree_subhdfour_ptwo: "",
      ac_fee_typslde_hdthree_subhdfive: "",
      ac_fee_typslde_hdthree_subhdfive_pone: "",
      ac_fee_typslde_hdthree_subhdfive_ptwo: "",
      ac_fee_typslde_hdthree_subhdfive_pthree: "",
      ac_fee_typslde_hdthree_subhdsix: "",
      ac_fee_typslde_hdthree_subhdsix_pone: "",
      ac_fee_typslde_hdthree_subhdsix_ptwo: "",
      ac_fee_typslde_hdthree_subhdsix_pthree: "",
      ac_fee_typslde_hdthree_subhdsix_pfour: "",
      ac_fee_typslde_hdthree_subhdsix_pfive: "",
      ac_fee_typslde_hdthree_subhdsix_psix: "",
      ac_fee_typslde_hdfour: "",
      ac_fee_typslde_hdfour_subhdone: "",
      ac_fee_typslde_hdfour_subhdone_pone: "",
      ac_fee_typslde_hdfour_subhdtwo: "",
      ac_fee_typslde_hdfour_subhdtwo_pone: "",
      ac_fee_typslde_hdfour_subhdtwo_ptwo: "",
      ac_fee_typslde_hdfour_subhdtwo_pthree: "",
      ac_fee_typslde_hdfour_subhdthree: "",
      ac_fee_typslde_hdfour_subhdthree_pone: "",
      ac_fee_typslde_hdfour_subhdthree_ptwo: "",
      ac_fee_typslde_hdfour_subhdthree_pthree: "",
      ac_fee_typslde_hdfour_subhdthree_pfour: "",
      ac_fee_typslde_hdfour_subhdfour: "",
      ac_fee_typslde_hdfour_subhdfour_pone: "",
      ac_fee_typslde_hdfour_subhdfour_ptwo: "",
      ac_fee_typslde_hdfour_subhdfive: "",
      ac_fee_typslde_hdfour_subhdfive_pone: "",
      ac_fee_typslde_hdfour_subhdsix: "",
      ac_fee_typslde_hdfour_subhdsix_pone: "",
      ac_fee_typslde_hdfour_subhdsix_ptwo: "",
      ac_fee_typslde_hdfour_subhdsix_pthree: "",
      ac_fee_typslde_hdfour_subhdsix_pfour: "",
      ac_fee_typslde_hdfour_subhdsix_pfive: "",
      ac_fee_typslde_hdfour_subhdsix_pSix: "",
      ac_fee_lower_hdone: "",
      ac_fee_btmline: "",
      ac_fee_lower_drp_dflt_one: "",
      ac_fee_lower_drp_dflt_two: "",
      ac_fee_lower_drp_dflt_three: "",
      ac_fee_lower_drp_dflt_four: "",
      ac_fee_lower_drp_dflt_five: "",
    },
    mediaCenterMediaCoverage: {
      mc_mcov_headone: "",
      mc_mcov_art_rfa: "",
    },
    mediaCenterNews: {
      mc_nws_headone: "",
      mc_nws_shre_txt: "",
      mc_nws_intrvw_text: "",
    },
    mediaCenterBlog: {
      "": "",
    },
    contactBlackBanx: {
      cus_headone: "",
      cus_cntctus: "",
      cus_qstn: "",
      cus_qstn_nme: "",
      cus_qstn_eml: "",
      cus_qstn_sntbtn: "",
      cus_city_lndn: "",
      cus_city_mscw: "",
      cus_city_dbai: "",
      cus_city_tnto: "",
      cus_city_cptwn: "",
      cus_city_tkyo: "",
      cus_city_shghi: "",
      cus_city_saplo: "",
    },
    policiesTerms: {
      pt_headone: "",
      pt_headone_sub: "",
      pt_paraone: "",
      pt_paratwo: "",
      pt_subhd_one: "",
      pt_subhd_one_paraone: "",
      pt_subhd_two: "",
      pt_subhd_two_paraone: "",
      pt_subhd_three: "",
      pt_subhd_three_paraone: "",
      pt_subhd_three_paratwo: "",
      pt_subhd_four: "",
      pt_subhd_four_paraone: "",
      pt_subhd_four_paratwo: "",
      pt_subhd_four_parathree: "",
      pt_subhd_five: "",
      pt_subhd_five_paraone: "",
      pt_subhd_six: "",
      pt_subhd_six_paraone: "",
      pt_subhd_seven: "",
      pt_subhd_seven_paraone: "",
      pt_subhd_eight: "",
      pt_subhd_eight_paraone: "",
      pt_subhd_nine: "",
      pt_subhd_nine_paraone: "",
      pt_subhd_ten: "",
      pt_subhd_ten_paraone: "",
      pt_subhd_ten_paratwo: "",
      pt_subhd_eleven: "",
      pt_subhd_eleven_paraone: "",
      pt_subhd_eleven_paratwo: "",
      pt_subhd_eleven_parathree: "",
      pt_subhd_eleven_parafour: "",
      pt_subhd_twelve: "",
      pt_subhd_twelve_paraone: "",
      pt_subhd_thirtn: "",
      pt_subhd_thhirtn_paraone: "",
      pt_subhd_thhirtn_paratwo: "",
      pt_subhd_fourtn: "",
      pt_subhd_fourtn_paraone: "",
      pt_btmline: "",
    },
    privacyPolicy: {
      pp_headone: "",
      pp_headone_subhd: "",
      pp_paraone: "",
      pp_subhd_one: "",
      pp_subhd_one_paraone: "",
      pp_subhd_one_paratwo: "",
      pp_subhd_two: "",
      pp_subhd_two_paraone: "",
      pp_subhd_two_paratwo: "",
      pp_subhd_two_parathree: "",
      pp_subhd_three: "",
      pp_subhd_three_paraone: "",
      pp_subhd_three_paratwo: "",
      pp_subhd_three_parathree: "",
      pp_subhd_three_pntone: "",
      pp_subhd_three_pnttwo: "",
      pp_subhd_three_pntthree: "",
      pp_subhd_three_pntfour: "",
      pp_subhd_three_parafour: "",
      pp_subhd_four: "",
      pp_subhd_four_paraone: "",
      pp_subhd_four_paratwo: "",
      pp_subhd_four_parathree: "",
      pp_subhd_four_parafour: "",
      pp_subhd_four_parafive: "",
      pp_subhd_four_parasix: "",
      pp_subhd_five: "",
      pp_subhd_five_paraone: "",
      pp_subhd_five_paratwo: "",
      pp_subhd_five_parathree: "",
      pp_subhd_six: "",
      pp_subhd_six_paraone: "",
      pp_subhd_seven: "",
      pp_subhd_seven_paraone: "",
      pp_subhd_eight: "",
      pp_subhd_eight_paraone: "",
      pp_subhd_eight_paratwo: "",
      pp_subhd_nine: "",
      pp_subhd_nine_paraone: "",
      pp_subhd_ten: "",
      pp_subhd_ten_paraone: "",
      pp_subhd_ten_paraone_pntone: "",
      pp_subhd_ten_paraone_pnttwo: "",
      pp_subhd_ten_paraone_pntthree: "",
      pp_subhd_ten_paratwo: "",
      pp_subhd_ten_paratwo_lineone: "",
      pp_subhd_ten_paratwo_linetwo: "",
      pp_subhd_ten_paratwo_linethree: "",
      pp_subhd_ten_paratwo_linefour: "",
      pp_btmline: "",
    },
    codeOfConduct: {
      abtus_coc_mainhead: "",
      abtus_coc_mainhead_paraone: "",
      abtus_coc_mainhead_paratwo: "",
      abtus_coc_headone: "",
      abtus_coc_headone_paraone: "",
      abtus_coc_headtwo: "",
      abtus_coc_headtwo_paraone: "",
      abtus_coc_headtwo_hdone: "",
      abtus_coc_headtwo_txtone: "",
      abtus_coc_headtwo_hdtwo: "",
      abtus_coc_headtwo_txttwo: "",
      abtus_coc_headtwo_hdthree: "",
      abtus_coc_headtwo_txtthree: "",
      abtus_coc_headtwo_hdfour: "",
      abtus_coc_headtwo_txtfour: "",
      abtus_coc_headtwo_hdfive: "",
      abtus_coc_headtwo_txtfive: "",
      abtus_coc_headtwo_hdsix: "",
      abtus_coc_headtwo_txtsix: "",
      abtus_coc_headtwo_hdseven: "",
      abtus_coc_headtwo_txtseven: "",
      abtus_coc_headtwo_subheadone: "",
      abtus_coc_headtwo_subheadone_paraone: "",
      abtus_coc_headtwo_subheadone_paratwo: "",
      abtus_coc_headtwo_subheadone_parathree: "",
      abtus_coc_headtwo_subheadone_parafour: "",
      abtus_coc_headtwo_subheadone_parafive: "",
      abtus_coc_headtwo_subheadone_parasix: "",
      abtus_coc_headtwo_subheadone_paraseven: "",
      abtus_coc_headtwo_subheadone_paraeight: "",
      abtus_coc_headtwo_subheadtwo: "",
      abtus_coc_headtwo_subheadtwo_paraone: "",
      abtus_coc_headtwo_subheadthree: "",
      abtus_coc_headtwo_subheadthree_paraone: "",
      abtus_coc_headtwo_subheadthree_paratwo: "",
      abtus_coc_headtwo_subheadthree_parathree: "",
      abtus_coc_headtwo_subheadthree_parafour: "",
      abtus_coc_headtwo_subheadfour: "",
      abtus_coc_headtwo_subheadfour_paraone: "",
      abtus_coc_headtwo_subheadfour_paratwo: "",
      abtus_coc_headtwo_subheadfour_parathree: "",
      abtus_coc_headtwo_subheadfour_parafour: "",
      abtus_coc_headtwo_subheadfive: "",
      abtus_coc_headtwo_subheadfive_paraone: "",
      abtus_coc_headtwo_subheadfive_paratwo: "",
      abtus_coc_headtwo_subheadfive_parathree: "",
      abtus_coc_headtwo_subheadsix: "",
      abtus_coc_headtwo_subheadsix_paraone: "",
      abtus_coc_headtwo_subheadsix_paratwo: "",
      abtus_coc_headtwo_subheadsix_parathree: "",
      abtus_coc_headtwo_subheadseven: "",
      abtus_coc_headtwo_subheadseven_paraone: "",
      abtus_coc_headthree: "",
      abtus_coc_headthree_paraone: "",
      abtus_coc_headthree_paratwo: "",
      abtus_coc_headthree_parathree: "",
      abtus_coc_headthree_subheadone: "",
      abtus_coc_headthree_subheadone_paraone: "",
      abtus_coc_headthree_subheadone_paratwo: "",
      abtus_coc_headthree_subheadone_parathree: "",
      abtus_coc_headthree_subheadtwo: "",
      abtus_coc_headthree_subheadtwo_paraone: "",
      abtus_coc_headthree_subheadtwo_paratwo: "",
      abtus_coc_headthree_subheadtwo_parathree: "",
      abtus_coc_headthree_subheadtwo_parafour: "",
      abtus_coc_headthree_subheadthree: "",
      abtus_coc_headthree_subheadthree_paraone: "",
      abtus_coc_headthree_subheadthree_paratwo: "",
      abtus_coc_headthree_subheadthree_parathree: "",
      abtus_coc_headthree_subheadfour: "",
      abtus_coc_headthree_subheadfour_paraone: "",
      abtus_coc_headthree_subheadfive: "",
      abtus_coc_headthree_subheadfive_paraone: "",
      abtus_coc_headthree_subheadsix: "",
      abtus_coc_headthree_subheadsix_paraone: "",
      abtus_coc_headthree_subheadseven: "",
      abtus_coc_headthree_subheadseven_paraone: "",
      abtus_coc_headthree_subheadseven_paratwo: "",
      abtus_coc_headthree_subheadseven_parathree: "",
      abtus_coc_headthree_subheadseven_parafour: "",
      abtus_coc_headthree_subheadseven_parafive: "",
      abtus_coc_headthree_subheadseven_parasix: "",
      abtus_coc_headthree_subheadseven_paraseven: "",
      abtus_coc_headthree_subheadeight: "",
      abtus_coc_headthree_subheadeight_paraone: "",
      abtus_coc_headthree_subheadeight_paratwo: "",
      abtus_coc_headthree_subheadeight_parathree: "",
      abtus_coc_headthree_subheadeight_parafour: "",
      abtus_coc_headfour: "",
      abtus_coc_headfive: "",
      abtus_coc_headfive_paraone: "",
      abtus_coc_headfive_paratwo: "",
      abtus_coc_headfive_parathree: "",
      abtus_coc_headsix: "",
      abtus_coc_headsix_paraone: "",
      abtus_coc_headseven: "",
      abtus_coc_headseven_paraone: "",
      abtus_coc_headseven_paratwo: "",
      abtus_coc_headseven_parathree: "",
      abtus_coc_headeight: "",
      abtus_coc_headeight_paraone: "",
      abtus_coc_headeight_paratwo: "",
      abtus_coc_headnine: "",
      abtus_coc_headnine_paraone: "",
      abtus_coc_headten: "",
      abtus_coc_headten_paraone: "",
      abtus_coc_headten_paratwo: "",
      abtus_coc_headten_parathree: "",
      abtus_coc_headten_parafour: "",
    },
    culture: {
      abtus_cult_mainhead: "",
      abtus_cult_mainhead_paraone: "",
      abtus_cult_mainhead_paratwo: "",
      abtus_cult_mainhead_parathree: "",
      abtus_cult_mainhead_parafour: "",
      abtus_cult_headone: "",
      abtus_cult_headone_subheadone: "",
      abtus_cult_headone_subheadone_paraone: "",
      abtus_cult_headone_subheadtwo: "",
      abtus_cult_headone_subheadtwo_paraone: "",
      abtus_cult_headone_subheadthree: "",
      abtus_cult_headone_subheadtwo_parathree: "",
      abtus_cult_headone_subheadfour: "",
      abtus_cult_headone_subheadtwo_parafour: "",
    },
    governance: {
      abtus_gvrn_mainhead: "",
      abtus_gvrn_mainhead_paraone: "",
      abtus_gvrn_mainhead_paratwo: "",
      abtus_gvrn_headone: "",
      abtus_gvrn_headone_paraone: "",
      abtus_gvrn_headone_paratwo: "",
      abtus_gvrn_headone_parathree: "",
      abtus_gvrn_headtwo: "",
      abtus_gvrn_headtwo_paraone: "",
      abtus_gvrn_headtwo_paratwo: "",
      abtus_gvrn_headtwo_parathree: "",
      abtus_gvrn_headthree: "",
      abtus_gvrn_headthree_paraone: "",
      abtus_gvrn_headthree_paratwo: "",
      abtus_gvrn_headthree_parathree: "",
      abtus_gvrn_headthree_parafour: "",
      abtus_gvrn_headthree_parafive: "",
      abtus_gvrn_headfour: "",
      abtus_gvrn_headfour_paraone: "",
      abtus_gvrn_headfour_paratwo: "",
      abtus_gvrn_headfour_parathree: "",
      abtus_gvrn_headfour_parafour: "",
      abtus_gvrn_headfive: "",
      abtus_gvrn_headfive_paraone: "",
      abtus_gvrn_headfive_paratwo: "",
      abtus_gvrn_headfive_chartheadone: "",
      abtus_gvrn_headfive_chartheadone_leafone: "",
      abtus_gvrn_headfive_chartheadone_leaftwo: "",
      abtus_gvrn_headfive_chartheadone_leafthree: "",
      abtus_gvrn_headfive_chartheadone_leaffour: "",
      abtus_gvrn_headfive_hdone: "",
      abtus_gvrn_headfive_txtone: "",
      abtus_gvrn_headfive_hdtwo: "",
      abtus_gvrn_headfive_txttwo: "",
      abtus_gvrn_headfive_hdthree: "",
      abtus_gvrn_headfive_txtthree: "",
      abtus_gvrn_headfive_hdfour: "",
      abtus_gvrn_headfive_txtfour: "",
      abtus_gvrn_headsix: "",
      abtus_gvrn_headsix_paraone: "",
      abtus_gvrn_headsix_paratwo: "",
      abtus_gvrn_headseven: "",
      abtus_gvrn_headseven_paraone: "",
      abtus_gvrn_headseven_paratwo: "",
      abtus_gvrn_headseven_parathree: "",
      abtus_gvrn_headseven_parafour: "",
      abtus_gvrn_headseven_parafive: "",
      abtus_gvrn_headeight: "",
      abtus_gvrn_headeight_paraone: "",
      abtus_gvrn_headeight_paratwo: "",
      abtus_gvrn_headeight_parathree: "",
      abtus_gvrn_headeight_parafour: "",
      abtus_gvrn_headeight_parafive: "",
      abtus_gvrn_headnine: "",
      abtus_gvrn_headnine_paraone: "",
      abtus_gvrn_headnine_paratwo: "",
      abtus_gvrn_headnine_parathree: "",
      abtus_gvrn_headten: "",
      abtus_gvrn_headten_paraone: "",
      abtus_gvrn_headten_lefthead_rowone: "",
      abtus_gvrn_headten_lefthead_rowonetxt: "",
      abtus_gvrn_headten_midheadone_rowone: "",
      abtus_gvrn_headten_midheadone_rowonetxt: "",
      abtus_gvrn_headten_midheadtwo_rowone: "",
      abtus_gvrn_headten_midheadtwo_rowonetxt: "",
      abtus_gvrn_headten_righthead_rowone: "",
      abtus_gvrn_headten_righthead_rowonetxt: "",
      abtus_gvrn_headten_lefthead_rowtwo: "",
      abtus_gvrn_headten_lefthead_rowtwotxt: "",
      abtus_gvrn_headten_midheadone_rowtwo: "",
      abtus_gvrn_headten_midheadone_rowtwotxt: "",
      abtus_gvrn_headten_midheadtwo_rowtwo: "",
      abtus_gvrn_headten_midheadtwo_rowtwotxt: "",
      abtus_gvrn_headeleven: "",
      abtus_gvrn_headeleven_paraone: "",
      abtus_gvrn_headtwelve: "",
      abtus_gvrn_headtwelve_paraone: "",
      abtus_gvrn_headthirteen: "",
      abtus_gvrn_headthirteen_paraone: "",
      abtus_gvrn_headfourteen: "",
      abtus_gvrn_headfourteen_paraone: "",
      abtus_gvrn_headfifteen: "",
      abtus_gvrn_headfifteen_paraone: "",
      abtus_gvrn_headsixteen: "",
      abtus_gvrn_headsixteen_paraone: "",
      abtus_gvrn_headsixteen_paratwo: "",
      abtus_gvrn_headsixteen_parathree: "",
      abtus_gvrn_headseventeen: "",
      abtus_gvrn_headseventeen_paraone: "",
      abtus_gvrn_headseventeen_paratwo: "",
      abtus_gvrn_headeighteen: "",
      abtus_gvrn_headeighteen_paraone: "",
      abtus_gvrn_headeighteen_paratwo: "",
      abtus_gvrn_headeighteen_parathree: "",
      abtus_gvrn_headeighteen_parafour: "",
      abtus_gvrn_headeighteen_parafour_subtxtone: "",
      abtus_gvrn_headeighteen_parafour_subtxttwo: "",
      abtus_gvrn_headeighteen_parafour_subtxtthree: "",
      abtus_gvrn_headeighteen_parafive: "",
      abtus_gvrn_headeighteen_parasix: "",
      abtus_gvrn_headeighteen_paraseven: "",
    },
    leadership: { abtus_ldrshp_mainhead: "" },
    riskManagement: {
      abtus_rism_mainhead: "",
      abtus_rism_mainhead_paraone: "",
      abtus_rism_headone: "",
      abtus_rism_headone_paraone: "",
      abtus_rism_headone_paratwo: "",
      abtus_rism_headone_parathree: "",
      abtus_rism_headtwo: "",
      abtus_rism_headtwo_paraone: "",
      abtus_rism_headtwo_paratwo: "",
      abtus_rism_headtwo_parathree: "",
      abtus_rism_headthree: "",
      abtus_rism_headthree_paraone: "",
      abtus_rism_headthree_paratwo: "",
      abtus_rism_headthree_parathree: "",
      abtus_rism_headfour: "",
      abtus_rism_headfour_paraone: "",
      abtus_rism_headfour_paratwo: "",
      abtus_rism_headfour_parathree: "",
      abtus_rism_headfive: "",
      abtus_rism_headfive_paraone: "",
      abtus_rism_headfive_paratwo: "",
      abtus_rism_headsix: "",
      abtus_rism_headsix_paraone: "",
      abtus_rism_headsix_paratwo: "",
      abtus_rism_headseven: "",
      abtus_rism_headseven_paraone: "",
      abtus_rism_headseven_paratwo: "",
      abtus_rism_headeight: "",
      abtus_rism_headeight_paraone: "",
      abtus_rism_headeight_paratwo: "",
      abtus_rism_headeight_parathree: "",
    },
    sustainabilityCareers: {
      abtus_sust_headone: "",
      abtus_sust_headone_paraone: "",
      abtus_sust_headone_paratwo: "",
      abtus_sust_headone_subheadone: "",
      abtus_sust_headone_subheadone_paraone: "",
      abtus_sust_headone_subheadtwo: "",
      abtus_sust_headone_subheadtwo_paraone: "",
      abtus_sust_headone_subheadthree: "",
      abtus_sust_headone_subheadtwo_parathree: "",
      abtus_sust_headone_parathree: "",
      abtus_sust_headone_parafour: "",
      abtus_sust_headone_parafive: "",
      abtus_sust_headone_parasix: "",
      abtus_sust_headtwo: "",
      abtus_sust_headtwo_paraone: "",
      abtus_sust_headtwo_paratwo: "",
      abtus_sust_headtwo_columnhead_one: "",
      abtus_sust_headtwo_columnheadtxt_one: "",
      abtus_sust_headtwo_columnheadtxt_two: "",
      abtus_sust_headtwo_columnheadtxt_three: "",
      abtus_sust_headtwo_columnheadtxt_four: "",
      abtus_sust_headtwo_parathree: "",
      abtus_sust_headtwo_parafour: "",
      abtus_sust_headthree: "",
      abtus_sust_headthree_subheadone: "",
      abtus_sust_headthree_subheadone_next: "",
      abtus_sust_headthree_subheadone_paraone: "",
      abtus_sust_headthree_subheadone_paraone_next: "",
      abtus_sust_headthree_subheadone_paratwo: "",
      abtus_sust_headthree_scopeone_txt: "",
      abtus_sust_headthree_scopetwo_txt: "",
      abtus_sust_headthree_subheadtwo: "",
      //abtus_sust_headthree_subheadtwo: "",
      abtus_sust_headthree_subheadtwo_paraone: "",
      abtus_sust_headthree_subheadtwo_parathree: "",
      abtus_sust_headthree_tbl_colleft: "",
      abtus_sust_headthree_tbl_collefttxt: "",
      abtus_sust_headthree_tbl_colmidone: "",
      abtus_sust_headthree_tbl_colmidone_txtone: "",
      abtus_sust_headthree_tbl_colmidone_txttwo: "",
      abtus_sust_headthree_tbl_colmidone_txtthree: "",
      abtus_sust_headthree_tbl_colmidone_txtfour: "",
      abtus_sust_headthree_tbl_colmidone_txtfive: "",
      abtus_sust_headthree_tbl_colrightone: "",
      abtus_sust_headthree_tbl_colrightone_txtone: "",
      abtus_sust_headthree_tbl_colrightone_txttwo: "",
      abtus_sust_headthree_tbl_colrightone_txtthree: "",
      abtus_sust_headthree_tbl_colrightone_txtfour: "",
      abtus_sust_headthree_tbl_colrightone_txtfive: "",
      abtus_sust_headfour: "",
      abtus_sust_headfour_paraone: "",
      abtus_sust_headfour_subheadone: "",
      abtus_sust_headfour_subheadone_paraone: "",
      abtus_sust_headfour_subheadtwo: "",
      abtus_sust_headfour_subheadtwo_paraone: "",
      abtus_sust_headfour_subheadthree: "",
      abtus_sust_headfour_subheadthree_paraone: "",
      abtus_sust_headfour_subheadfour: "",
      abtus_sust_headfour_subheadfour_paraone: "",
      abtus_sust_headfour_subheadfive: "",
      abtus_sust_headfour_subheadfive_paraone: "",
      abtus_sust_headfour_subheadsix: "",
      abtus_sust_headfour_subheadsix_paraone: "",
      abtus_sust_headfour_subheadseven: "",
      abtus_sust_headfour_subheadseven_paraone: "",
      abtus_sust_headfour_subheadeight: "",
      abtus_sust_headfour_subheadeight_paraone: "",
      abtus_sust_headfour_subheadeight_paratwo: "",
      abtus_sust_headfour_subheadnine: "",
      abtus_sust_headfour_subheadnine_paraone: "",
      abtus_sust_mainhead: "",
      abtus_sust_headthree_subheadtwo_paratwo: "",
    },
    financialStatements: {
      abtus_finst_mainhead: "",
      abtus_finst_listone_hd: "",
      abtus_finst_listtwo_hd: "",
      abtus_finst_tbl_hdone: "",
      abtus_finst_tbl_hdtwo: "",
      abtus_finst_tbl_hdthree: "",
      abtus_finst_tbl_hdfour: "",
      abtus_finst_report_ftone: "",
      abtus_finst_report_fttwo: "",
    },
  },
};

const uiDataSlice = createSlice({
  name: "uiData",
  initialState,
  reducers: {
    setUiDataFetching: (state, action) => {
      state.loading = action.payload;
    },
    setSelectedLanguage: (state, action) => {
      state.selectedLanguageId = action.payload.id;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(operations.getLanguages.fulfilled, (state, action) => {
        state.languageList = action.payload.map((el) => ({
          id: el.language_id,
          label: el.language,
          value: el.language,
          abbr: el.language_code.toUpperCase(),
          endIcon: el.country_flag,
          endIconBase64: true,
        }));
      })
      .addCase(operations.getCountryOfResidence.fulfilled, (state, action) => {
        state.countryOfResidence = action.payload;
      })
      .addCase(operations.getCareerDropDown.fulfilled, (state, action) => {
        const select: Record<string, SelectOptions> = {};
        const [payload] = action.payload;
        Object.entries(payload).forEach(([tab, options]) => {
          const option: SelectOptions = [];
          Object.entries(options).forEach(([key, val]) => {
            option.push({ id: key, label: val, value: val });
          });
          select[tab] = option;
        });
        state.careerDropDown = select;
      })
      .addCase(operations.getMediaCenterCoverage.fulfilled, (state, action) => {
        //@ts-ignore
        state.mediaCenterCoverageData = action.payload.data.DATA.map((el: SiteContentMediaCoverage) => ({
          id: el.mc_media_id,
          date: Base64.decode(el.mc_mcov_date),
          description: Base64.decode(el.mc_mcov_desc),
          title: Base64.decode(el.mc_mcov_art),
          img: el.mc_mcov_art_img,
          link: Base64.decode(el.mc_mcov_art_link),
          subheader: Base64.decode(el.mc_mcov_subheader),
        }));
      })
      .addCase(operations.getMediaCenterNews.fulfilled, (state, action) => {
        state.mediaCenterNewsData = action.payload.data.DATA.map((el: SiteContentMediaCenterNews) => {
          const object: any = {};
          Object.keys(el)
            .filter((elem: any) => elem !== "mc_news_id" && elem !== "mc_nws_img")
            //@ts-ignore
            .forEach((element: any) => (object[element] = Base64.decode(el[element])));
          return { mc_news_id: el.mc_news_id, mc_nws_img: el.mc_nws_img, ...object };
        });
      })
      .addCase(operations.getMediaCenterBlog.fulfilled, (state, action) => {
        state.mediaCenterBlogData = action.payload.data.data.map((el: SiteContentMediaCenterBlog) => {
          const object: any = {};
          Object.keys(el)
            .filter((elem: any) => elem !== "image" && elem !== "bId")
            //@ts-ignore
            .forEach((element: any) => (object[element] = Base64.decode(el[element])));
          return { bId: el.bId, image: el.image, ...object };
        });
      })
      .addCase(operations.getMediaCenterSingleBlog.fulfilled, (state, action) => {
        state.mediaCenterBlogSingleData = action.payload.data.map((el: SiteContentMediaCenterBlogData) => {
          const object: any = {};
          Object.keys(el)
            .filter((elem: any) => elem !== "image" && elem !== "bId")
            //@ts-ignore
            .forEach((element: any) => (object[element] = Base64.decode(el[element])));
          return { bId: el.bId, image: el.image, ...object };
        });
      })
      .addCase(operations.getAllWebsiteText.fulfilled, (state, action) => {
        const value: WebsiteTextType = _.cloneDeep(initialState.websiteText);
        action.payload.forEach((el) => {
          const { tab, data } = el;
          //@ts-ignore
          try {
            Object.entries(data).forEach(([key, val]) => {
              //@ts-ignore
              value[tab][key] = Base64.decode(val);
            });
          } catch (error) {
            console.log("ERROR WHEN TRY TO PARSE", tab, error);
          }
        });
        state.websiteText = value;
      });
  },
});

export const { setUiDataFetching, setSelectedLanguage } = uiDataSlice.actions;
export default uiDataSlice.reducer;
