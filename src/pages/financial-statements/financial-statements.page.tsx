import React, { useEffect, useState } from "react";
import { SlideSection } from "../../components/silde-section/slide-section.component";
import MainBg from "../../assets/backgrounds/financialStatements/financialStatements_main_bg.png";
import { Section } from "../../components/section/section.component";
import { useMediaQuery } from "../../utils/use-media-query";
import { uiAboutUsFinanStats, uiDataSelectedLanguageId, uiDataWebsiteText } from "../../redux/uiData/selectors";
import { useDispatch, useSelector } from "../../redux/store";
import { Select } from "../../components/inputs/select/select.component";
import { Wrap } from "../../components/wrap/wrap.component";
import { SelectHandler, SelectOptions } from "../../components/inputs/select/select.types";
import operations from "../../redux/uiData/operations";

export const FinancialStatementsPage: React.FC = (): JSX.Element => {
  const { financialStatements } = useSelector(uiDataWebsiteText);
  const language = useSelector(uiDataSelectedLanguageId);
  const aboutUsFinanStats = useSelector(uiAboutUsFinanStats);
  const dispatch = useDispatch();
  const isMobile = useMediaQuery("sm");
  const dummyData: SelectOptions = [
    { id: "1", value: "All Filings", label: "All Filings" },
    { id: "2", value: "Annual Filings", label: "Annual Filings" },
    { id: "3", value: "Quarterly Filings", label: "Quarterly Filings" },
    { id: "4", value: "Proxy Filings", label: "Proxy Filings" },
  ];
  const dummyYearData: SelectOptions = [
    { id: "0", value: "All", label: "All" },
    { id: "1", value: "1900", label: "1900" },
    { id: "2", value: "2000", label: "2000" },
    { id: "3", value: "2100", label: "2100" },
    { id: "4", value: "2200", label: "2200" },
  ];
  const [formData, setFormData] = useState({ Filings: dummyData[0], year: dummyYearData[0] });

  const handleSelect: SelectHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  useEffect(() => {
    dispatch(operations.getAboutUsFinanStats({ languageId: language }));
  }, []);
  return (
    <>
      <SlideSection
        bgImage={MainBg}
        title={"financial statements"}
        bgVariant={"gradient"}
        titleAlign={"center"}
        justify={"center"}
        BgImageStyles={isMobile ? { backgroundSize: "cover", backgroundPosition: "40%" } : { backgroundSize: "cover" }}
      />

      <Section
        mainContent
        m={isMobile ? "0rem auto 20rem" : "0 auto"}
        style={{ overflow: "hidden", marginBottom: "15rem" }}
      >
        <Wrap sx={{ width: "100%", display: "flex" }}>
          <Wrap sx={{ marginRight: "9rem", width: "100%", height: "25rem" }}>
            <Select
              options={dummyData}
              value={formData.Filings}
              onSelect={handleSelect}
              optionsPosition={"bottom"}
              fullWidth
              noAdornment
              InputProps={{
                InputNativeProps: { style: { height: "9.4rem" } },
              }}
              name={"Filings"}
            ></Select>
          </Wrap>

          <Select
            options={dummyYearData}
            value={formData.year}
            onSelect={handleSelect}
            optionsPosition={"bottom"}
            fullWidth
            noAdornment
            InputProps={{
              InputNativeProps: { style: { height: "9.4rem" } },
            }}
            name={"year"}
          ></Select>
        </Wrap>
        {aboutUsFinanStats && (
          <Wrap
            sx={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: " 25% 25% 25% 25%",
              textAlign: "center",
              marginBottom: "3rem",
            }}
          >
            <h3>Filling</h3>
            <h3>Description</h3>
            <h3>Date</h3>
            <h3>Format</h3>
          </Wrap>
        )}
        {aboutUsFinanStats?.slice(2).map((el: any, idx: any) => (
          <Wrap
            sx={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: " 25% 25% 25% 25%",
              textAlign: "center",
              key: idx + "list",
              borderBottom: "0.1rem solid white",
              borderTop: "0.1rem solid white",
              padding: "1rem",
            }}
          >
            <div>{el.abtus_finst_report_colone}</div>
            <div>{el.abtus_finst_report_coltwo}</div>
            <div>{el.abtus_finst_report_colthree}</div>
            <div>
              <a href={el.abtus_finst_report_pdflink}>PDF </a>
              <a href={el.abtus_finst_report_rtflink}>RTF </a>
              <a href={el.abtus_finst_report_xlslink}>XLS </a>
            </div>
          </Wrap>
        ))}
      </Section>
    </>
  );
};
