import { AppRouter } from "./components/app-router/app-router.component";
import { Layout } from "./components/main-layout/layout/layout.component";
import { Header } from "./components/main-layout/header/header.component";
import { MainContent } from "./components/main-layout/main-content/main-content.component";
import { Footer } from "./components/main-layout/footer/footer.component";

const App = () => {
  return (
    <Layout>
      <Header />
      <MainContent>
        <AppRouter />
      </MainContent>
      {/*<Footer />*/}
    </Layout>
  );
};

export default App;
