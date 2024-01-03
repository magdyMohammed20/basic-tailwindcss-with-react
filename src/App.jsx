import "./App.css";
import WebFont from "webfontloader";
import { useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Features from "./components/features/Features";
import Brands from "./components/brands/Brands";
import TechFirst from "./components/tech_first/TechFirst";
import Pie from "./components/pie/Pie";
import Fans from "./components/fans/Fans";
import GetStarted from "./components/getStarted/GetStarted";
import Articles from "./components/articles/Articles";
import Footer from "./components/footer/Footer";
function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto"],
      },
    });
  }, []);

  return (
    <div className="font-loader bg-gradient-to-r dark:from-slate-900 dark:via-slate-800 dark:via-slate-900 dark:to-slate-950 transition-all duration-1000 from-gray-100 via-gray-200 via-gray-300 to-gray-400 ">
      <Navbar />
      <Home />
      <Features />
      <Brands />
      <TechFirst />
      <Pie />
      <Fans />
      <GetStarted />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
