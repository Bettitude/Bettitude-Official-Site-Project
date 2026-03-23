import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import ScrollToTop from './Components/ScrollToTop'

// Eagerly load Home since it's the landing page
import Home from './Pages/Home'

// Lazy load all other routes - they split into separate chunks
const About = lazy(() => import('./Pages/About'))
const Service = lazy(() => import('./Pages/Service'))
const Contact = lazy(() => import('./Pages/Contact'))
const Career = lazy(() => import('./Components/Career'))
const TeamPage = lazy(() => import('./Components/Team'))
const NotFound = lazy(() => import('./Pages/NotFound'))
const Appointment = lazy(() => import('./Components/Appointment'))
const Cookies = lazy(() => import('./Components/Cookies'))
const PrivacyPolicy = lazy(() => import('./Components/PrivacyPolicy'))
const TOS = lazy(() => import('./Components/TOS'))
const Legal = lazy(() => import('./Components/Legal'))
const Newsletters = lazy(() => import('./Components/Newsletters'))
const Feedback = lazy(() => import('./Components/Feedback'))
const Partner = lazy(() => import('./Pages/Partner'))
const FooterService = lazy(() => import('./Pages/FooterService'))
const Sitemap = lazy(() => import('./Pages/Sitemap'))
const Advertisement = lazy(() => import('./Pages/Advertisement'))
const Sponsorship = lazy(() => import('./Pages/Sponsorship'))
const ServicesPage = lazy(() => import('./Pages/ServicesPage'))
const News = lazy(() => import('./Pages/News'))


// Minimal loading fallback that matches the site's dark theme
const PageLoader = () => (
  <div className="min-h-screen bg-[#0B0F19] flex items-center justify-center">
    <div className="w-10 h-10 border-4 border-[#0057B8] border-t-[#FFC527] rounded-full animate-spin"></div>
  </div>
)

const App = () => {
  return (
    <>
      <Navbar/>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/product' element={<Service/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/careers' element={<Career/>} />
          <Route path='/team' element={<TeamPage/>} />
          <Route path='/legal' element={<Legal/>} />
          <Route path='/newsletter' element={<Newsletters/>} />
          <Route path='/feedback' element={<Feedback/>} />
          <Route path='/terms-of-service' element={<TOS/>} />
          <Route path='/news/:slug' element={<News/>} />
          <Route path='/news' element={<News/>} />
          <Route path='/appointment' element={<Appointment/>} />
          <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
          <Route path='/cookies-policy' element={<Cookies/>} />
          <Route path='/partner' element={<Partner/>} />
          <Route path='/services' element={<FooterService/>} />
          <Route path='/sitemap' element={<Sitemap/>} />
          <Route path='/advertisment' element={<Advertisement/>} />
          <Route path='/sponsorship' element={<Sponsorship/>} />
          <Route path='/our-services' element={<ServicesPage/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Suspense>
      <Footer/>
      <ScrollToTop />
    </>
  )
}

export default App
