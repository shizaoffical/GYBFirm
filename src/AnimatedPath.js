import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from "./Components/Layout";
import { AnimatePresence } from 'framer-motion';
import Home from "./Home/Home";
import AboutUs from './Pages/About/AboutUs';
import TermCondition from './Pages/Extras/TermCondition';
import PrivacyPolicy from './Pages/Extras/PrivacyPolicy';
import HowItWork from './Pages/HowItWork/HowItWork';
import ChooseUs from "./Pages/About/ChooseUs"
import ContactUs from './Pages/About/ContactUs';
import NewClients from './Pages/About/NewClients';
import Testimonials from './Pages/About/Testimonials';
import Andement from './Pages/Services/OtherServices/Andement';
import CompanyNameChange from './Pages/Services/OtherServices/CompanyNameChange';
import RegisterAgent from './Pages/Services/OtherServices/RegisterAgent';
import VirtualAddress from './Pages/Services/OtherServices/VirtualAddress';
import EIN from "../src/Pages/Services/OtherServices/EIN"
import CertificateOfGoodStanding from './Pages/Services/OtherServices/CertificateOfGoodStanding';
import DoingBuisness from './Pages/Services/OtherServices/DoingBuisness';
import LLC from './Pages/Services/StartBusiness/LLC';
import Corporation from './Pages/Services/StartBusiness/Corporation';
import SCorporation from './Pages/Services/StartBusiness/SCorporation';
import NonProfit from './Pages/Services/StartBusiness/NonProfit';
import ForeignQualification from './Pages/Services/OtherServices/ForeignQualification';
import ChangeRegisterAgent from './Pages/Services/OtherServices/ChangeRegisterAgent';
import BuisnessLisenePremit from './Pages/Services/OtherServices/BuisnessLisenePremit';
import SubmitAnnualReport from './Pages/Services/OtherServices/SubmitAnnualReport';
import FreeTaxConsultation from './Pages/Services/OtherServices/FreeTaxConsultation';
import OrderCorporateLLCKit from './Pages/Services/OtherServices/OrderCorporateLLCKit';
import DissolveCompany from './Pages/Services/OtherServices/DissolveCompany';
import GetTradeMark from './Pages/Services/OtherServices/GetTradeMark';
import SCropElection from './Pages/Services/OtherServices/SCropElection';
import GetRestated from './Pages/Services/OtherServices/GetRestated';
import Login from './Authentication/Login';
import FinanceAccountion from './Pages/Services/OtherServices/FinanceAccountion';
import CompareBuisnessEntities from './Pages/InformationLab/CompareBuisnessEntities';
import { Link } from 'react-router-dom'
import NotFound from './Pages/NotFound';
import BuisnessNameGenerator from './Pages/InformationLab/BuisnessNameGenerator';
import BuisnessIndustryGuide from './Pages/InformationLab/BuisnessIndustryGuide';
import BuisnessNameSearchTool from './Pages/InformationLab/BuisnessNameSearchTool';
import BuisnessStartupGuide from './Pages/InformationLab/BuisnessStartupGuide';
import YourLLC from './Pages/InformationLab/YourLLC';
import LLCInformationState from './Pages/InformationLab/LLCInformationState';
import StateFilingFee from './Pages/InformationLab/StateFilingFee';

function AnimatedPath() {
    return (
        <>
            <AnimatePresence>
                <Link to="https://api.whatsapp.com/send/?phone=%2B923267647709&text&type=phone_number&app_absent=0"
                    target="_blank" className='whatsapp-contact'>
                    <span> <i class="fa-brands fa-whatsapp"></i></span>
                </Link>
                <Routes>
                    <Route exact path='/' element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="/about" element={<AboutUs />} />
                        <Route path="/term&conditions" element={<TermCondition />} />
                        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                        <Route path="/how-it-start" element={<HowItWork />} />
                        <Route path="/choose-gybfirm" element={<ChooseUs />} />
                        <Route path="/contact-us" element={<ContactUs />} />
                        <Route path='/new-sales' element={<NewClients />} />
                        <Route path="/testimonials" element={<Testimonials />} />
                        <Route path="/llc" element={<LLC />} />
                        <Route path="/amendement" element={<Andement />} />
                        <Route path='/company-name-change' element={<CompanyNameChange />} />
                        <Route path='/registered-agent' element={<RegisterAgent />} />
                        <Route path='/virtual-address' element={<VirtualAddress />} />
                        <Route path='tax-id-ein' element={<EIN />} />
                        <Route path="/certificate-of-good-standing" element={<CertificateOfGoodStanding />} />
                        <Route path="/file-dba" element={<DoingBuisness />} />
                        <Route path="/form-c-corporation" element={<Corporation />} />
                        <Route path="/form-s-corporation" element={<SCorporation />} />
                        <Route path="/start-a-nonprofit" element={<NonProfit />} />
                        <Route path="/us-tax-marketplace" element={<ForeignQualification />} />
                        <Route path="/change-of-registered-agent" element={<ChangeRegisterAgent />} />
                        <Route path="/business-license-research-package" element={<BuisnessLisenePremit />} />
                        <Route path="/annual-report" element={<SubmitAnnualReport />} />
                        <Route path="/business-accounting" element={<FreeTaxConsultation />} />
                        <Route path="/corporate-llc-kit" element={<OrderCorporateLLCKit />} />
                        <Route path="/business-finance-accounting" element={<FinanceAccountion />} />
                        <Route path="llc-s-corp-election" element={<SCropElection />} />
                        <Route path="/dissolution" element={<DissolveCompany />} />
                        <Route path="/trademark-name-search" element={<GetTradeMark />} />
                        <Route path="/reinstatement-order" element={<GetRestated />} />
                        <Route path="/business-entity-comparison" element={<CompareBuisnessEntities />} />
                        <Route path="/business-name-generator" element={<BuisnessNameGenerator />} />
                        <Route path="/start-a-business" element={<BuisnessIndustryGuide />} />
                        <Route path="/business-name-search" element={<BuisnessNameSearchTool />} />
                        <Route path="/guides-start-business" element={<BuisnessStartupGuide />} />
                        <Route path="/limited-liability-company" element={<YourLLC />} />
                        <Route path="/llc-state-information" element={<LLCInformationState />} />
                        <Route path="/state-filing-fees" element={<StateFilingFee />} />
                    </Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </AnimatePresence>
        </>
    )
}

export default AnimatedPath