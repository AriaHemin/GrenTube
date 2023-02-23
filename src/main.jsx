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
import App from './pages/app/app'

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
    path: '/app',
    element: <App/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
