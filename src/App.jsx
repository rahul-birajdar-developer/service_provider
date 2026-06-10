import './App.css'
// import Provider from './Provider Component/provider'
import AppFooter from './Component/AppFooter'
import AppNavbar from './Component/AppNavbar'
import BookingForm from './Component/BookingForm'
import FeedBack from './Component/FeedBack'
import HomePage from './Component/HomePage'
import SearchProvider from './Component/SearchProvider'
import TopRatedProvider from './Component/TopRatedProvider'
import ProvidedService from './ProvidedServices'
import UserProfile from './Component/Profile'
import UserBookingPage from './Component/UserBookingPage'
import { Route, Routes } from 'react-router-dom'
import SignUpForm from './Component/signUpForm'
import { useState } from 'react'

function App() {
  const [showSignup, setShowSignup] = useState(false);


  return (
    <>
      {/* User Page Logic */}
      {
        showSignup ? (
          <Routes>
            <Route path='signup' element={<SignUpForm />} />
          </Routes>
        ) : (
          <>
            <AppNavbar setShowSignup={setShowSignup} />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/search" element={<SearchProvider />} />
              <Route path="/services" element={<ProvidedService />} />
              <Route path="/booking" element={<BookingForm />} />
              <Route path="/feedback" element={<FeedBack />} />
              <Route path="/providers" element={<TopRatedProvider />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/viewbookings" element={<UserBookingPage />} />
            </Routes>
            <AppFooter />
          </>
        )
      }

      {/* Provider Page Logic */}
      {/* <Provider /> */}
    </>
  )
}

export default App
