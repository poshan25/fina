import React from 'react'
import Nav from './Nav'
import UserProducts from './UserProducts'
import Verify from '../components/Verify'
import TabooOrganics from './TabooOrganics'
import User from '../components/User'
import Footer from './Footer'
import BestSelling from '../components/BestSelling'

// import BestSelling from '../components/BestSelling'

const Home = () => {
  return (
    <div >
        {/* <Nav/> */}
        {/* <UserProducts/> */}

        <TabooOrganics/>
        <BestSelling/>
        <User/>
        {/* <BestSelling/> */}
        <Footer/>
        {/* <Verify/> */}
    </div>
  )
}

export default Home