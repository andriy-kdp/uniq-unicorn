import { AppRouter } from "./components/app-router/app-router.component";
import { Layout } from "./components/main-layout/layout/layout.component";
import { Header } from "./components/main-layout/header/header.component";
import { MainContent } from "./components/main-layout/main-content/main-content.component";
import { Footer } from "./components/main-layout/footer/footer.component";
import { useMediaQuery } from "./utils/use-media-query";
import { useEffect } from "react";
import { useScrollToTop } from "./utils/use-scroll-to-top";
import { useDispatch, useSelector } from "./redux/store";
import operations from "./redux/uiData/operations";
import { uiDataFetching, uiDataSelectedLanguageId } from "./redux/uiData/selectors";
import Spinner from "./components/main-layout/spinner/spinner.component";
const App = () => {
  const language = useSelector(uiDataSelectedLanguageId);
  const loading = useSelector(uiDataFetching);
  const dispatch = useDispatch();
  const isMobile = useMediaQuery("xs");

  useEffect(() => {
    //  fix if mobile menu open and resolution changed
    if (!isMobile && document.body.style.overflow !== "auto") {
      document.body.style.overflow = "auto";
    }
  }, [isMobile]);

  useEffect(() => {
    dispatch(operations.getAllWebsiteText(language));
    dispatch(operations.getMediaCenterCoverage({ languageId: language }));
    dispatch(operations.getMediaCenterNews({ languageId: language }));
    dispatch(operations.getMediaCenterBlog(language));
    dispatch(operations.getMediaCenterSingleBlog({ languageId: language, blogId: "02" }));
    dispatch(operations.getCountryOfResidence());
    dispatch(operations.getCareerDropDown());
  }, [language]);
  useEffect(() => {
    dispatch(operations.getLanguages());
  }, []);

  useScrollToTop();
  return (
    <Layout>
      {loading && <Spinner />}
      <Header />
      <MainContent>
        <AppRouter />
      </MainContent>
      <Footer />
    </Layout>
  );
};

export default App;
