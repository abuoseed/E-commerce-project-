
import './index.css'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//route pages 
import Layout from './layout.jsx';
import Home from '../pages/home.jsx';
import Contact from '../pages/contact.jsx';
import About from '../pages/about.jsx';


//create routes my pages
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {index:true,element:<Home/>},
      {
        path:'contact',
        element:<Contact/>
      },
      {
        path:'about',
        element:<About/>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
 <>
      <RouterProvider router={router} />
 </>
)
