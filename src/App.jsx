import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import PublicLayout from "./components/layouts/public";
import UserLayout from "./components/layouts/user";
import PublicAboutPage from "./pages/public/about/index";
import PublicContactPage from "./pages/public/contact";
import PublicHomePage from "./pages/public/home/index";
import PublicLoginPage from "./pages/public/login";
import UserDashboardPage from "./pages/user/dashboard";
import UserDeshifrRsaPage from "./pages/user/deshifr-rsa";
import UserDeshifrVernamPage from "./pages/user/deshifr-vernam";
import UserRsaPage from "./pages/user/rsa";
import VernamPage from "./pages/user/vernam";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<PublicHomePage />} />
            <Route path="/about" element={<PublicAboutPage />} />
            <Route path="/contact" element={<PublicContactPage />} />
            <Route path="/login" element={<PublicLoginPage />} />
          </Route>
          <Route element={<UserLayout />}>
            <Route path="/dashboard" element={<UserDashboardPage />} />
            <Route path="/rsa" element={<UserRsaPage />} />
            <Route path="/rsa-deshifr" element={<UserDeshifrRsaPage />} />
            <Route path="/vernam" element={<VernamPage />} />
            <Route path="/deshifr-vernam" element={<UserDeshifrVernamPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
