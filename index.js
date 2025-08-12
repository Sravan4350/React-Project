import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import HeaderComponent from "./src/components/HeaderComponent";
import MainContent from "./src/components/MainContent";
// import FooterComponent from "./FooterComponent";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <HeaderComponent />
      <MainContent />
      {/* <FooterComponent /> */}
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
