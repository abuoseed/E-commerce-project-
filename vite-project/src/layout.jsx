import Header from '../Components/header'
import Footer from '../Components/footer'
import { Outlet } from 'react-router-dom'
import './layout.css'

function Layout() {
  

  return (
    <>
   <Header/>
   <Outlet/>
   <Footer/>
    </>
  )
}

export default Layout
