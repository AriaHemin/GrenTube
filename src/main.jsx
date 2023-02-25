import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import HomePage from './pages/landingPage/homePage'
import InfoPage from './pages/landingPage/infoPage'
import AboutPage from './pages/landingPage/aboutPage'
import ContactPage from './pages/landingPage/contactPage'
import './index.css'
import DashBoard from './pages/app/dashboard'
import VideoPage from './pages/app/videoPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>
  },
  {
    path: '/info',
    element: <InfoPage/>
  },
  {
    path: '/about',
    element: <AboutPage/>
  },
  {
    path: '/contact',
    element: <ContactPage/>
  },
  {
    path: '/dashboard',
    element: <DashBoard/>
  },
  {
    path: '/video',
    element: <VideoPage/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
