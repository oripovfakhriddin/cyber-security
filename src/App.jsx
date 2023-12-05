import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import PublicLayout from "./components/layouts/public";
import PublicAboutPage from "./pages/public/about/index";
import PublicContactPage from "./pages/public/contact";
import PublicHomePage from "./pages/public/home/index";
import PublicLoginPage from "./pages/public/login";

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
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
