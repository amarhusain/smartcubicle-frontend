

import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import ArchivePage from "./pages/ArchivePage";
import SupportPage from "./pages/SupportPage";
import PageNotFound from "./pages/PageNotFound";
import { APP_ROUTES } from "./utils/constant";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path={APP_ROUTES.LOGIN} element={<LoginPage />} />
        {/* <Route element={<RequireAuth />}> */}
        <Route index element={<Dashboard />} />
        <Route path={APP_ROUTES.ARCHIVE} element={<ArchivePage />} />
        <Route path={APP_ROUTES.SUPPORT} element={<SupportPage />} />

        {/* </Route> */}
        {/* Catch All other path */}
        <Route path={"*"} element={<PageNotFound />} />

      </Route>
    </Routes>
  );
}

export default App;
