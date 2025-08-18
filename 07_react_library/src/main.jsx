import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider,createBrowserRouter} from 'react-router'
import {Drama, Marvel, Home, Card, Cartoon, VideoGallery} from './pages/index.js'
import './index.css'
import App from './App.jsx'

const  routers = createBrowserRouter([
   {
    path: "/",
    element:  <App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/marvel",
        element:<Marvel/>
      },
      {
        path:"/dramas",
        element:<Drama />
      },
      {
        path:"/cards",
        element:<Card />
      },
      {
        path:"/cartoon",
        element:<Cartoon />
      },
      {
        path:"/video",
        element:<VideoGallery />
      },
    ]
  }]) 

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={routers} />
  </StrictMode>,
)
