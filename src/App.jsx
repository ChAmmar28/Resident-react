import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/elements/Layout";
import HomePage from "./components/pages/HomePage";
import RealEstatePage from "./components/pages/RealEstatePage";
import ContactPage from "./components/pages/ContactPage";
import InterviewPage from "./components/pages/InterviewPage";
import ProductsPage from "./components/pages/ProductsPage";
import LuxuryVacationPage from "./components/pages/LuxuryVacationPage";
import AboutUsPage from "./components/pages/AboutUsPage";
import DesignPage from "./components/pages/DesignPage";
import ErrorPage from "./components/pages/ErrorPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" index element={<HomePage />} />
        <Route path="/RealEstatePage" element={<RealEstatePage />} />
        <Route path="/InterviewPage" element={<InterviewPage />} />
        <Route path="/ProductsPage" element={<ProductsPage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/LuxuryVacationPage" element={<LuxuryVacationPage />} />
        <Route path="/AboutUsPage" element={<AboutUsPage />} />
        <Route path="/DesignPage" element={<DesignPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default App;
