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
    <div className="font-loader bg-gradient-to-r from-slate-900 via-slate-800 via-slate-900 to-slate-950">
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
