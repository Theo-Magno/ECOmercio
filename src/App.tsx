import "./css/styles.css";
import Breadcrumbs from "./components/MainPgBody/Breadcrumbs";
import MainSection from "./components/Header/MainSection";
import Navigation from "./components/Header/Navigation";
import TopBar from "./components/Header/TopBar";
import ProductPage from "./components/MainPgBody/ProductPage";

function App() {
  return (
    <>
      <TopBar />
      <MainSection />
      <Navigation />
      <Breadcrumbs />
      <ProductPage />
    </>
  );
}

export default App;
