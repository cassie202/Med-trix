import { useRef, useEffect, useState } from "react";
import './App.css';
import { BrowserRouter, Routes, Route, Link  } from "react-router-dom";
import HomePage from "./components/home";
import AboutPage from "./components/about";
import FindCarePage from "./components/findCare";



export interface AppProps {}
 
const App: React.FunctionComponent<AppProps> = (props) => {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<HomePage />}/>
        <Route path="about" element = {<AboutPage />}/>
        <Route path="findCare" element = {<FindCarePage />}/>
      </Routes>
    </BrowserRouter>

   );
}
 
export default App;
