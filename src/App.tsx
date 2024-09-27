import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Hero from "./pages/Hero/Hero";
import PrivacyPolicy from "./pages/Hero/Policy";

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </>
  );
}

export default App;
