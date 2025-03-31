import { useSearchParams } from "react-router-dom";
import "./App.css";
// import Footer from "./components/layout/Footer";
import Header from "./components/layout/header/Header";
import ProductPage from "./pages/Products/ProductPage";

function App() {
  const [searchParams] = useSearchParams();

  const code = searchParams.get("code"); // "GBF"
  const debugMode = searchParams.get("debugMode"); // "true"
  console.log(code, debugMode);
  return (
    <><Header />
      <ProductPage />
      {/* 
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
        </main>
        <Footer />
      </div> */}
    </>
  );
}

export default App;
