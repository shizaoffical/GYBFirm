
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import "./Components/Components.css"
import "./Components/ComponentsQuery.css"
import "./Header/Header.css"
import "./Header/HeaderQuery.css"
import "./Home/Home.css"
import "./Home/HomeQuery.css"
import AnimatedPath from './AnimatedPath';
import "./Footer/Footer.css"
import "./Footer/FooterQuery.css"
import ScrollToTop from "./Components/ScrollToTop"
import "./Pages/About/About.css"
import "./Pages/About/AboutQuery.css"
import "./Pages/Extras/Extras.css"
import "./Pages/HowItWork/HowItWork.css"
import "./Header/DropDownElements/DropDownElement.css"
import "./Pages/Services/OtherServices/OtherServices.css"
import "./Pages/Services/OtherServices/OtherServicesQuery.css"
import "./Pages/Services/StartBusiness/StartBuisness.css"
import "./Authentication/Authentication.css"
import "./Pages/InformationLab/Information.css"
import "./Pages/InformationLab/InformationQuery.css"


function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <ScrollToTop/>
     <AnimatedPath/>
   </BrowserRouter>
    </div>
  );
}

export default App;
