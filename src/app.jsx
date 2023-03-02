import './index.css'
import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import HomePage from './pages/landingPage/homePage'
import InfoPage from './pages/landingPage/infoPage'
import AboutPage from './pages/landingPage/aboutPage'
import ContactPage from './pages/landingPage/contactPage'
import DashBoard from './pages/app/dashboard'
import VideoPage from './pages/app/videoPage'
import SessionMake from './pages/app/sessionMaker'

function App () {
  const [session, setSession] = useState({
    notes: [
      {
        note: 'note',
        key: 'id of video',
        video: 'id of the video'
      }
    ],
    intention: 'intention',
    goal: 'understant intention or something',
    challenge: {
      timer: {
        active: false,
        data: 'time in ms'
      },
      videoLimit: {
        active: false,
        data: 'number'
      },
      reward: {
        active: false,
        data: 'string'
      },
      punishment: {
        active: false,
        data: 'string'
      },
      braindump: {
        active: false,
        data: 'string'
      }
    }
  })
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage session={session} />
    },
    {
      path: '/info',
      element: <InfoPage session={session} />
    },
    {
      path: '/about',
      element: <AboutPage session={session} />
    },
    {
      path: '/contact',
      element: <ContactPage session={session} />
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
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
