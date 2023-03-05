import React from 'react'
import learnimg from '../images/blue-stock-chart-up-1600.webp'
import Footer from '../component/Footer'
import '../stylings/Learn.css'
import img3 from '../images/Group 28.svg'

const Learn = () => {
  return (
    <div>
      <div className='learn-page pt-5'>
        <div className='container pt-5 pb-5'>
          <div className='h1 text-center mt-5'>
            Learn More About Stock market
          </div>
          <div className='text-center mt-5'>
            <img src={learnimg} alt="" className='img-fluid' width={900} style={{borderRadius: 50}}/>
          </div>
          <div className='mt-5 h2'>
            What Is Stock Exchange?
          </div>
          <div className='mt-2 fs-5 learn-text'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum laboriosam sint, vitae enim consequuntur quis ipsam, esse recusandae nihil laborum nostrum quisquam similique blanditiis aliquam. Neque officia voluptates ab praesentium tempore? Voluptate aut quasi doloribus veritatis minus ipsam asperiores, nostrum, facilis mollitia cum ex maxime quisquam quis eveniet ab velit.
          </div>
          <div className='h2 mt-5'>Key Takeaways</div>
          <div className='mt-3 fs-5 learn-text'>
            <ul>
              <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum maxime molestiae voluptatum placeat autem non, dignissimos, recusandae ut maiores veniam dolor natus, saepe inventore modi voluptatem at expedita totam culpa.
              </li>
              <li className='mt-3'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima veniam neque reprehenderit facilis quis beatae, odit dolores velit cum culpa.
              </li>
              <li className='mt-3'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos nam sapiente ipsum perferendis vel magnam a consectetur dolorem? Sapiente, repudiandae!
              </li>
              <li className='mt-3'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum debitis mollitia cupiditate ipsa laudantium doloremque pariatur ipsam tenetur facere praesentium.
              </li>
            </ul>
          </div>
          <div className='mt-5'>
          <h1 className='text-center'>Why do people trade stock?</h1>
            <div className='row mt-5'>
                <div className='col-lg-4 mb-5'>
                        <div className='box p-5 text-center'>
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
                        <h2 className='mt-3'>Financial Freedom</h2>
                        <div className='mt-3'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, blanditiis omnis! Assumenda sapiente debitis, recusandae odit at totam! Laudantium, voluptas.
                        </div>
                    </div>
                    
                </div>
                <div className='col-lg-4 mb-5'>
                    <div className='box text-center p-5'>
                        <img src={img3} alt="" className='img-fluid' width={200}/>
                        <h2 className='mt-3'>Investment</h2>
                        <div className='mt-3'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, atque error non quae vitae eius!
                        </div>
                    </div> 
                </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Learn