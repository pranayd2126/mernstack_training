import React from 'react'
import{Outlet} from 'react-router'
import Header from './Header'
import Footer from './Footer'

function RootLayout() {
  return (
    <div>
        <Header/>
        <div className='mx-80 text-red-300 text-2xl'>
            <Outlet/>
        </div>
        <Footer/>
      
    </div>
  )
}

export default RootLayout
