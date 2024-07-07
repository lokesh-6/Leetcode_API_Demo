import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/ContactUs/Contact.jsx'
import User from './components/User/User.jsx'
import Profile, { leetcodeInfoLoader } from './components/Profile/Profile.jsx'

// const route =createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:'',
//         element:<Home/>
//       },
//       {
//         path:'about',
//         element:<About/>,
//       },
//       {
//         path:'contactUs',
//         element:<Contact/>,
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contactUs' element={<Contact />} />
      <Route path='user/:id' element={<User />} />
      <Route 
      loader={leetcodeInfoLoader}
      path='leetcode' 
      element={<Profile/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
