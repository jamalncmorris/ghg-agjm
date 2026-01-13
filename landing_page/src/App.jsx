import { BrowserRouter, Routes, Route } from "react-router"

import LandingPage from "./pages/LandingPage"
import SignUpPage from "./pages/SignUpPage"
import CaseContactPage from "./pages/CaseContactPage"
import SignInPage from "./pages/SignInPage"
import PrivacyPage from "./pages/PrivacyPage"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/contact" element={<CaseContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
