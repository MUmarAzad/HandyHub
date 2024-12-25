import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import '../styles/globals.css'
import '../styles/home.css'
import '../styles/auth.css'
import '../styles/categories.css'
import App from './App.jsx'
import Home from '../pages/Home.jsx'
import Categories from '../pages/categories.jsx'
import HowItWorks from '../pages/how-it-works.jsx'
import AboutUs from '../pages/about-us.jsx'
import Contact from '../pages/contact.jsx'
import SignUp from '../pages/signup.jsx'
import SignIn from '../pages/SignIn.jsx'
import Category from '../pages/categories/services.jsx'
import Services from '../pages/service-page.jsx'
import { Layout } from '../components/layout.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: 
      <Layout>
        <Home />
      </Layout>,
  },
  {
    path: "categories",
    element:
      <Layout>
        <Categories />
      </Layout>,
  },
  {
    path: "how-it-works",
    element:
      <Layout>
        <HowItWorks />
      </Layout>,
  },{
    path: "about-us",
    element:
      <Layout>
        <AboutUs />
      </Layout>,
  },{
    path: "contact",
    element:
      <Layout>
        <Contact />
      </Layout>,
  },{
    path: "signup",
    element:
      <Layout>
        <SignUp />
      </Layout>,
  },{
    path: "signin",
    element:
      <Layout>
        <SignIn />
      </Layout>,
  },{
    path: "services/:serviceId",
    element:
      <Layout>
        <Services />
      </Layout>,
  },{
    path: "categories/:category",
    element:
      <Layout>
        <Category />
      </Layout>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

  //   {/* <App /> */}
  //   <Layout>
  //     <Home />
  //   </Layout>