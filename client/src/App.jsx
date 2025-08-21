import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Media from "./pages/Media"
import Transactions from "./pages/Transactions"
import Careers from "./pages/Careers"
import About from "./pages/About"
import Navbar from "./components/Navbar"
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Team from "./pages/Team"
import TransactionDetail from './components/TransactionDetail';
import Newsletter from './pages/Newsletter';
import Newsdetail
 from './components/Newsdetail';
import Investment from './pages/Investment';
import Strategic from './pages/Strategic';
import ScrollToTop from "./components/ScrollToTop";
import Award from './pages/Award';
import ScrollToTopButton from './components/ScrollToTopButton';
import SignIn from './pages/Signin';
import Admin from './pages/Admin';
import PrivateRoute from './components/PrivateRoute';
import Case from './pages/Case';
import NewsUpdates from './pages/NewsUpdates';
import Founders from "./components/Founders"
import PrivateBanking from './pages/PrivateBanking';
import Asset from './pages/Asset';
import AssetReports from './pages/ReportsAsset';
const App = () => {
  return (
     <BrowserRouter>
     <Navbar/>
     <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/media' element={<Media />} />
        <Route path='/about' element={<About />} />
        <Route path="/contact-us" element={<Contact/>}/>
        <Route path="/newsletter" element={<Newsletter/>}/>
        <Route path="/news/:slug" element={<Newsdetail />} />
        <Route path='/transactions' element={<Transactions />} />
         <Route path="/transaction/:id" element={<TransactionDetail />} />
         <Route path='/strategic-advisory' element={<Strategic/>}/>
        <Route path='/investment' element={<Investment/>}/>
        <Route path='/careers' element={<Careers />} />
        <Route path="/teams" element={<Team/>}/>
        <Route path="/member/:name" element={<Founders/>} />
        <Route path="/awards" element={<Award/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route element={<PrivateRoute/>}>
        </Route>
        <Route path="/admin-panel" element={<Admin/>}/>
        <Route path="/case_study" element={<Case/>}/>
        <Route path="/news" element={<NewsUpdates/>}/>
        <Route path="/private-banking" element={<PrivateBanking/>}/>
        <Route path="/asset-management" element={<Asset/>}/>
        <Route path="/reports" element={<AssetReports/>}/>
      </Routes>
     <ScrollToTopButton/>
    </BrowserRouter>
  )
}

export default App
