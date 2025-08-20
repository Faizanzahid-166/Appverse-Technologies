import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router'
import {Home, NFTDetails, NotFound, About, NFT_local, NFT_Gallery} from './pages/index.js'
import { NFTProvider } from "./context/NFTContext";
import './index.css'
import App from './App.jsx'

const routers = createBrowserRouter([
  {
    element: <App />,
    path:'/',
    children:[
      {
        element: <Home />,
        path:'/'
      },
      {
        element: <NFTDetails />,
        path:'/nft/:id'
      },
      {
        element: <NotFound />,
        path:'*' 
      },
      {
        element: <NFT_Gallery />,
        path:'/nft_gallery' 
      },
      {
        element: <NFT_local />,
        path:'/nft_local' 
      },
          {
        element: <About />,
        path:'/about' 
      },

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <NFTProvider>
        <RouterProvider router={routers} />
      </NFTProvider>
  </StrictMode>,
)
