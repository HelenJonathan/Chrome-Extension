import './App.css'
import LandingPage from './pages/LandingPage'
import {Routes, Route} from 'react-router-dom'
import ReadyVideo from './pages/ReadyVideo'
import Login from './pages/LogIn-Page/Login'
import VideosList from './pages/VideosList'
import AddToChrome from './pages/AddToChrome'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/ready-video" element={<ReadyVideo />} />
      <Route path="/sign-up" element={<Login />} />
      <Route path="/videos-list" element={<VideosList />} />
      <Route path="/add-to-chrome" element={<AddToChrome />} />
    </Routes>
    </>
  )
}

export default App
