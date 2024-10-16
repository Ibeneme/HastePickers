import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Hero from "./pages/Hero/Hero";
import PrivacyPolicy from "./pages/Hero/Policy";
import TermsOfUse from "./pages/Hero/TermsOfUse";
import AboutUsAndFAQs from "./pages/Hero/AboutUsAndFAQs";
import ScrollingBanner from "./pages/Hero/ScrollingBanner";

function App() {
  return (
    <>
      <ScrollToTop />
      <ScrollingBanner />
      <Routes>

        <Route path="/" element={<Hero />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/faqs" element={<AboutUsAndFAQs />} />
    
      </Routes>
    </>
  );
}

export default App;
