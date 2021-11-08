import "./App.css";
import MainNavBar from "./components/MainNavBar/MainNavBar";
import NavBar from "./components/navBar/NavBar";
import HeaderImage from "./components/headerImage/HeaderImage";
import MainSlider from "./components/mainSlider/MainSlider";
import FooterSection from "./components/footerSection/FooterSection";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <MainNavBar />
      <HeaderImage />
      <NavBar />
      <MainSlider />
      <FooterSection />
    </div>
  );
}

export default App;
