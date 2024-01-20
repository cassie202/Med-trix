import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/home";
import AboutPage from "./components/about";
import FindCarePage from "./components/findCare";
import SignupPage from "./authenticate/SignUp";
import LoginPage from "./authenticate/Login";
import HowItWorks from "./components/howItWorks";
import HospitalDetails from "./components/hospitalDetail";

export interface AppProps {}

const App: React.FunctionComponent<AppProps> = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/findCare" element={<FindCarePage />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/hospital/:hospitalName" element={<HospitalDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
