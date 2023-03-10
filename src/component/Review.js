import React from 'react'
import '../stylings/Home.css'
import img7 from '../images/Union 1.svg'
import img8 from '../images/Group 8699.svg'
import lhary from '../images/lhary.JPG'

const Review = () => {
  return (
    <div className='review-section pt-5 pb-5'>
        <div className='container'>
            <h2 className='text-center'>Customer's Review</h2>

            <div className='row mt-5 pt-0 pt-lg-5'>
                <div className='col-lg position-relative'>
                    <img src={img7} className='img-fluid card-img' alt="" />
                    <div className=' review-text1'>
                        <img src={img8} className='img-fluid ms-3' alt="" />
                        <p className='text-center w-75 ms-5 text-white'>Trading on Forexx mobile & web platforms has been a smooth  experience for me quite easy to navigate.</p>
                    </div>
                    <div className='d-inline-flex ms-4 mt-2'>
                        <img src={lhary} className='review-img' alt="" />
                        <div className='ms-2'>
                            <p><b>Adunni</b> <br />Nigeria</p>
                            
                        </div>
                    </div>
                </div>
                <div className='col-lg position-relative mt-5 mt-lg-0'>
                    <img src={img7} className='img-fluid card-img' alt="" />
                    <div className=' review-text2'>
                        <img src={img8} className='img-fluid ms-3' alt="" />
                        <p className='text-center w-75 ms-5 text-white'>They have the best rate compared to other platforms with fast payout.</p>
                    </div>
                    <div className='d-inline-flex ms-4 mt-2'>
                        <img src={lhary} className='review-img' alt="" />
                        <div className='ms-2'>
                            <p><b>Adams</b> <br />USA</p>
                        </div>
                    </div>

                </div>
                <div className='col-lg position-relative mt-5 mt-lg-0'>
                    <img  src={img7} className='img-fluid card-img' alt="" />
                    <div className=' review-text3'>
                        <img src={img8} className='img-fluid ms-3' alt="" />
                        <p className='text-center w-75 ms-5 text-white'>Easy to fund wallet and withdrawals on their platform, I will definitely trade with them again.</p>
                    </div>
                    <div className='d-inline-flex ms-4 mt-2'>
                        <img src={lhary} className='review-img' alt="" />
                        <div className='ms-2'>
                            <p><b>Surahj</b> <br />India</p>
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Review