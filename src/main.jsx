import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./i18n";
import { Suspense } from "react";

const loadingMarkup = () => {
  <div>Loading...</div>;
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback={loadingMarkup}>
    <App />
  </Suspense>
);
