import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar.jsx'
import Hero from "./components/Hero"
import ArtistsPage from './components/ArtistsPage.jsx'
import Footer from './components/Footer.jsx'
import Signup from './components/signup.jsx'
import CustomOrder from './components/CustomOrder.jsx'

function App() {
  const [activeTab, setActiveTab] = useState('ARTISTS') // Set 'ARTISTS' by default as shown in mockup

  if (activeTab === 'SIGNUP') {
    return <Signup onBackToGallery={() => setActiveTab('ARTISTS')} />
  }

  if (activeTab === 'CUSTOM ORDERS') {
    return <CustomOrder setActiveTab={setActiveTab} />
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* <Navbar/> */}
      
      <div className="flex-grow">
        {activeTab === 'ARTISTS' ? (
          <ArtistsPage />
        ) : (
          <Hero setActiveTab={setActiveTab} />
        )}
      </div>

      <Footer />
    </div>
  )
}

export default App

