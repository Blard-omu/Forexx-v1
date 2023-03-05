import React from 'react'
import img3 from '../images/Group 28.svg'
import { Link } from 'react-router-dom'

const Whycrypto = () => {
  return (
    <div className='whycrypto-section pt-5 pb-5'>
        <div className='container'>
            <h1 className='text-center'>Why do people choose to trade with Forexx?</h1>
            <div className='row mt-5'>
                <div className='col-lg-4 mb-5'>
                        <div className='box p-5 text-center bg-one'>
                        <img src={img3} alt="" className='img-fluid' width={200}/>
                        <h2 className='mt-3'>Easy Mode of Payment</h2>
                        <div className='mt-3'>
                            People can now easily send and receive moeny from anywhere in the world to purchase goods and pay for services.
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 mb-5'>
                    <div className='box text-center p-5'>
                        <img src={img3} alt="" className='img-fluid' width={200}/>
                        <h2 className='mt-3'>Accuracy</h2>
                        <div className='mt-3'>
                            Our accuracy in prediction of stock trends and financial counsels has helped millions of our esteem customer make smart and informed decisions as regard stock trading.
                        </div>
                    </div>
                    
                </div>
                <div className='col-lg-4 mb-5'>
                    <div className='box text-center p-5'>
                        <img src={img3} alt="" className='img-fluid' width={200}/>
                        <h2 className='mt-3'>Investment</h2>
                        <div className='mt-3'>
                            The constant demand as made Forexx a Digital Hub used for alternative store of wealth on long term investments.
                        </div>
                    </div> 
                </div>
            </div>
            <div className='mt-3 text-center'>
                <Link to='/Learn'>
                    <button className='btn btn-secondary w-50 p-3 text-light bg-two'>
                    Learn More
                    </button>
                </Link>    
            </div>
        </div>
    </div>
  )
}

export default Whycrypto