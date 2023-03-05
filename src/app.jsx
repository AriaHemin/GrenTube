import './index.css'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import HomePage from './pages/landingPage/homePage'
import InfoPage from './pages/landingPage/infoPage'
import AboutPage from './pages/landingPage/aboutPage'
import ContactPage from './pages/landingPage/contactPage'
import DashBoard from './pages/app/dashboard'
import VideoPage from './pages/app/videoPage'
import { SessionContext } from './context/sessionContext'
import { useContext } from 'react'
function App () {
  const { session, setSession } = useContext(SessionContext)
  /* const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage session={session} setSession={setSession}/>
    },
    {
      path: '/info',
      element: <InfoPage session={session} setSession={setSession}/>
    },
    {
      path: '/about',
      element: <AboutPage session={session} setSession={setSession}/>
    },
    {
      path: '/contact',
      element: <ContactPage session={session} setSession={setSession}/>
    },
    {
      path: '/dashboard',
      element: <DashBoard session={session} setSession={setSession} />
    },
    {
      path: '/video/:videoid',
      element: <VideoPage session={session} setSession={setSession} />
    }
  ])
  */
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage session={session} setSession={setSession}/>} />
          <Route path='/info' element={<InfoPage session={session} setSession={setSession}/>} />
          <Route path='/about' element={<AboutPage session={session} setSession={setSession}/>} />
          <Route path='/contact' element={<ContactPage session={session} setSession={setSession}/>} />
          <Route path='/dashboard' element={<DashBoard session={session} setSession={setSession} />} />
          <Route path='/video/:videoid' element={<VideoPage session={session} setSession={setSession} />} />
        </Routes>
      </BrowserRouter>
      {
        // <RouterProvider router={router} />
      }
    </div>
  )
}

export default App
