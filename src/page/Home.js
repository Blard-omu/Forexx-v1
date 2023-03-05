import React from 'react'
import Account from '../component/Account'
import Buyandsell from '../component/Buyandsell'
import Data from '../component/Data'
import Hero from '../component/Hero'
import Review from '../component/Review'
import Whycrypto from '../component/Whycrypto'
import Footer from '../component/Footer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Data/>
      <Whycrypto/>
      <Buyandsell/>
      <Account/>
      <Review/>
      <Footer/>
      
    </div>
  )
}

export default Home