import { useSearchParams } from "react-router-dom";
import "./App.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/header/Header";
import ProductPage from "./pages/Products/ProductPage";

function App() {
  const [searchParams] = useSearchParams();

  const code = searchParams.get("code"); // "GBF"
  const debugMode = searchParams.get("debugMode"); // "true"
  console.log(code, debugMode);
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* <ProductPage /> */}
        <div className="flex items-center gap-4 rounded-lg bg-white p-6 shadow-md outline outline-black/5 dark:bg-gray-800">
          <span className="inline-flex shrink-0 rounded-full border border-pink-300 bg-pink-100 p-2 dark:border-pink-300/10 dark:bg-pink-400/10">
            <svg className="size-6 stroke-pink-700 dark:stroke-pink-500"></svg>
          </span>
          <div>
            <p className="text-gray-700 dark:text-gray-400">
              <span className="font-medium text-gray-950 dark:text-white">
                Tom Watson
              </span>{" "}
              mentioned you in
              <span className="font-medium text-gray-950 dark:text-white">
                Logo redesign
              </span>
            </p>
            <time className="mt-1 block text-gray-500">9:37am</time>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
          <div>
            <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
              <svg className="h-6 w-6 stroke-white"></svg>
            </span>
          </div>
          <h3 className="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">
            Writes upside-down
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
            The Zero Gravity Pen can be used to write in any orientation,
            including upside-down. It even works in outer space.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
