import { AppRouter } from "./components/app-router/app-router.component";
import { Layout } from "./components/main-layout/layout/layout.component";
import { Header } from "./components/main-layout/header/header.component";
import { MainContent } from "./components/main-layout/main-content/main-content.component";
import { Footer } from "./components/main-layout/footer/footer.component";
import { useMediaQuery } from "./utils/use-media-query";
import { useEffect } from "react";
import { useScrollToTop } from "./utils/use-scroll-to-top";

const App = () => {
  const isMobile = useMediaQuery("xs");

  useEffect(() => {
    //  fix if mobile menu open and resolution changed
    if (!isMobile && document.body.style.overflow !== "auto") {
      document.body.style.overflow = "auto";
    }
  }, [isMobile]);

  useScrollToTop();

  return (
    <Layout>
      <Header />
      <MainContent>
        <AppRouter />
      </MainContent>
      <Footer />
    </Layout>
  );
};

export default App;
