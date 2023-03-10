import React from 'react'
import '../stylings/Home.css'
import { Link } from 'react-router-dom'
import img1 from '../images/Group 68.svg'
import img2 from '../images/Group 69.svg'

const Hero = () => {
  return (
    <div>
        <div className='hero-section'>
            <div className='container'>
            <div className='circle1'></div>
                <div className='circle2'></div>
                <div className='pt-5'>
                    <div className='text-white mt-4 pt-5 w-50 d-none d-lg-block'>
                        <h1>Buy, sell, monitor and manage your Stock on Forexx.</h1>
                    </div>
                    <div className='text-white mt-5 pt-4 d-block d-lg-none'>
                        <h1>Buy, sell and manage your Stock on Forexx.</h1>
                    </div>
                    <div className='text-white mt-4 d-none d-lg-block'>
                        <p>Easily Trade Stock like BTC, USDT, ETH,LTC & XRP <br /> with NGN</p>
                    </div>
                    <div className='text-white mt-4 d-block d-lg-none'>
                        <p>Easily Trade Stock like BTC, USDT, ETH,LTC & XRP with NGN</p>
                    </div>
                    <div className='mt-4 w-75'> 
                        <Link to='/Started'>
                                <button className='btn btn-secondary w-50 p-3 text-light bg-two'>
                                    Get Started
                                </button> 
                        </Link>                         
                    </div>  
                    <div className='mt-5 pt-5'>
                        <a href="/"><img src={img1} alt="" /></a>
                        <a href="/" className='ms-3'><img src={img2} alt="" /></a>
                    </div>
                </div>    
            </div>
        </div>
    </div>
  )
}

export default Hero