import { useEffect } from 'react'
// components
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
// HomePage sections
import Hero from './Hero'
import Brands from './Brands'
import DressShoe from './DressShoe'
import ChooseUs from './ChooseUs'
import LatestArrivals from './LatestArrivals'
import Discount from './Discount'
// styling
import './css/mobile.css'
import './css/home.css'
// libs
import Slider, { animate } from '../../libs/Slider'


const Home = () => {
    useEffect(()=>{
        Slider()
    })

return (
   <>
        <Navbar/>
        <div data-aos="zoom-in"><Hero/></div>
        <div data-aos={animate}><Brands/></div>
        <div data-aos={animate}><DressShoe/></div>
        <div data-aos={animate}><LatestArrivals/></div>
        {/* Sneakers Collections */}
        <div className='container sneakers-collection'>
        <div className='container shoe-collection'>
            <h3 className='dress-shoe-header'>Sneakers Collections </h3>
            <div className='row'>
                <div className='collection-pc col-lg-3'>
                    <div className= 'collection-container'>
                        <img className='collection-shoe' src='./images/Alexander-Mcqueen1.png' alt='Alexander'/>
                        <p className='shoe-name'>Berlutti</p>
                        <p>Can be Won On Native </p>
                        <div className='collection-details'><span className='shoe-price'>₦20,000</span> <span>Size</span></div>
                        <div className='user-selection'><span className='quantity'><i class="fa-solid fa-circle-minus" style={{marginRight:"5px", cursor:"pointer"}}></i> <span id='quantity'>0</span> <i class="fa-solid fa-circle-plus" style={{margin:"5px", cursor:"pointer"}}></i></span> <span><button className='add-to-bag'>
                            Add to Bag
                        </button></span> </div>
                     </div>
                    <div>
                    </div>
                </div>
                <div className='collection-pc col-lg-3'>
                    <div className= 'collection-container'>
                        <img className='collection-shoe' src='./images/Gucci.png' alt='gucci'/>
                        <p className='shoe-name'>Gucci</p>
                        <p>Can be Won On Native </p>
                        <div className='collection-details'><span className='shoe-price'>₦20,000</span> <span>Size</span></div>
                        <div className='user-selection'><span className='quantity'><i class="fa-solid fa-circle-minus" style={{marginRight:"5px", cursor:"pointer"}}></i> <span id='quantity'>0</span> <i class="fa-solid fa-circle-plus" style={{margin:"5px", cursor:"pointer"}}></i></span> <span><button className='add-to-bag'>
                            Add to Bag
                        </button></span> </div>
                     </div>
                    <div>
                    </div>
                </div>
                <div className='collection-pc col-lg-3'>
                    <div className= 'collection-container'>
                        <img className='collection-shoe' src='./images/Balenciaga.png' alt='balenciaga'/>
                        <p className='shoe-name'>Balenciaga</p>
                        <p>Can be Won On Native </p>
                        <div className='collection-details'><span className='shoe-price'>₦20,000</span> <span>Size</span></div>
                        <div className='user-selection'><span className='quantity'><i class="fa-solid fa-circle-minus" style={{marginRight:"5px", cursor:"pointer"}}></i> <span id='quantity'>0</span> <i class="fa-solid fa-circle-plus" style={{margin:"5px", cursor:"pointer"}}></i></span> <span><button className='add-to-bag'>
                            Add to Bag
                        </button></span> </div>
                     </div>
                    <div>
                    </div>
                </div>
                <div className='collection-pc col-lg-3'>
                    <div className= 'collection-container'>
                        <img className='collection-shoe' src='./images/G-zanotti.png' alt='G.zanotti'/>
                        <p className='shoe-name'>G.Zanotti</p>
                        <p>Can be Won On Native </p>
                        <div className='collection-details'><span className='shoe-price'>₦20,000</span> <span>Size</span></div>
                        <div className='user-selection'><span className='quantity'><i class="fa-solid fa-circle-minus" style={{marginRight:"5px", cursor:"pointer"}}></i> <span id='quantity'>0</span> <i class="fa-solid fa-circle-plus" style={{margin:"5px", cursor:"pointer"}}></i></span> <span><button className='add-to-bag'>
                            Add to Bag
                        </button></span> </div>
                     </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
        </div>

         {/* Slides Collections */}
         <div className='container'>
        <div className='container shoe-collection'>
            <h3 className='dress-shoe-header'>Sneakers Collections </h3>
            <div className='row'>
                <div className='collection-pc col-lg-3'>
                    <div className= 'collection-container'>
                        <img className='collection-shoe' src='./images/Alexander-Mcqueen1.png' alt='Alexander'/>
                        <p className='shoe-name'>Berlutti</p>
                        <p>Can be Won On Native </p>
                        <div className='collection-details'><span className='shoe-price'>₦20,000</span> <span>Size</span></div>
                        <div className='user-selection'><span className='quantity'><i class="fa-solid fa-circle-minus" style={{marginRight:"5px", cursor:"pointer"}}></i> <span id='quantity'>0</span> <i class="fa-solid fa-circle-plus" style={{margin:"5px", cursor:"pointer"}}></i></span> <span><button className='add-to-bag'>
                            Add to Bag
                        </button></span> </div>
                     </div>
                    <div>
                    </div>
                </div>
                <div className='collection-pc col-lg-3'>
                    <div className= 'collection-container'>
                        <img className='collection-shoe' src='./images/Gucci.png' alt='gucci'/>
                        <p className='shoe-name'>Gucci</p>
                        <p>Can be Won On Native </p>
                        <div className='collection-details'><span className='shoe-price'>₦20,000</span> <span>Size</span></div>
                        <div className='user-selection'><span className='quantity'><i class="fa-solid fa-circle-minus" style={{marginRight:"5px", cursor:"pointer"}}></i> <span id='quantity'>0</span> <i class="fa-solid fa-circle-plus" style={{margin:"5px", cursor:"pointer"}}></i></span> <span><button className='add-to-bag'>
                            Add to Bag
                        </button></span> </div>
                     </div>
                    <div>
                    </div>
                </div>
                <div className='collection-pc col-lg-3'>
                    <div className= 'collection-container'>
                        <img className='collection-shoe' src='./images/Balenciaga.png' alt='balenciaga'/>
                        <p className='shoe-name'>Balenciaga</p>
                        <p>Can be Won On Native </p>
                        <div className='collection-details'><span className='shoe-price'>₦20,000</span> <span>Size</span></div>
                        <div className='user-selection'><span className='quantity'><i class="fa-solid fa-circle-minus" style={{marginRight:"5px", cursor:"pointer"}}></i> <span id='quantity'>0</span> <i class="fa-solid fa-circle-plus" style={{margin:"5px", cursor:"pointer"}}></i></span> <span><button className='add-to-bag'>
                            Add to Bag
                        </button></span> </div>
                     </div>
                    <div>
                    </div>
                </div>
                <div className='collection-pc col-lg-3'>
                    <div className= 'collection-container'>
                        <img className='collection-shoe' src='./images/G-zanotti.png' alt='G.zanotti'/>
                        <p className='shoe-name'>G.Zanotti</p>
                        <p>Can be Won On Native </p>
                        <div className='collection-details'><span className='shoe-price'>₦20,000</span> <span>Size</span></div>
                        <div className='user-selection'><span className='quantity'><i class="fa-solid fa-circle-minus" style={{marginRight:"5px", cursor:"pointer"}}></i> <span id='quantity'>0</span> <i class="fa-solid fa-circle-plus" style={{margin:"5px", cursor:"pointer"}}></i></span> <span><button className='add-to-bag'>
                            Add to Bag
                        </button></span> </div>
                     </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
        </div>

         {/* Sandals Collections */}
         <div className='container'>
        <div className='container shoe-collection'>
            <h3 className='dress-shoe-header'>Sneakers Collections </h3>
            <div className='row'>
                <div className='collection-pc col-lg-3'>
                    <div className= 'collection-container'>
                        <img className='collection-shoe' src='./images/Alexander-Mcqueen1.png' alt='Alexander'/>
                        <p className='shoe-name'>Berlutti</p>
                        <p>Can be Won On Native </p>
                        <div className='collection-details'><span className='shoe-price'>₦20,000</span> <span>Size</span></div>
                        <div className='user-selection'><span className='quantity'><i class="fa-solid fa-circle-minus" style={{marginRight:"5px", cursor:"pointer"}}></i> <span id='quantity'>0</span> <i class="fa-solid fa-circle-plus" style={{margin:"5px", cursor:"pointer"}}></i></span> <span><button className='add-to-bag'>
                            Add to Bag
                        </button></span> </div>
                     </div>
                    <div>
                    </div>
                </div>
                <div className='collection-pc col-lg-3'>
                    <div className= 'collection-container'>
                        <img className='collection-shoe' src='./images/Gucci.png' alt='gucci'/>
                        <p className='shoe-name'>Gucci</p>
                        <p>Can be Won On Native </p>
                        <div className='collection-details'><span className='shoe-price'>₦20,000</span> <span>Size</span></div>
                        <div className='user-selection'><span className='quantity'><i class="fa-solid fa-circle-minus" style={{marginRight:"5px", cursor:"pointer"}}></i> <span id='quantity'>0</span> <i class="fa-solid fa-circle-plus" style={{margin:"5px", cursor:"pointer"}}></i></span> <span><button className='add-to-bag'>
                            Add to Bag
                        </button></span> </div>
                     </div>
                    <div>
                    </div>
                </div>
                <div className='collection-pc col-lg-3'>
                    <div className= 'collection-container'>
                        <img className='collection-shoe' src='./images/Balenciaga.png' alt='balenciaga'/>
                        <p className='shoe-name'>Balenciaga</p>
                        <p>Can be Won On Native </p>
                        <div className='collection-details'><span className='shoe-price'>₦20,000</span> <span>Size</span></div>
                        <div className='user-selection'><span className='quantity'><i class="fa-solid fa-circle-minus" style={{marginRight:"5px", cursor:"pointer"}}></i> <span id='quantity'>0</span> <i class="fa-solid fa-circle-plus" style={{margin:"5px", cursor:"pointer"}}></i></span> <span><button className='add-to-bag'>
                            Add to Bag
                        </button></span> </div>
                     </div>
                    <div>
                    </div>
                </div>
                <div className='collection-pc col-lg-3'>
                    <div className= 'collection-container'>
                        <img className='collection-shoe' src='./images/G-zanotti.png' alt='G.zanotti'/>
                        <p className='shoe-name'>G.Zanotti</p>
                        <p>Can be Won On Native </p>
                        <div className='collection-details'><span className='shoe-price'>₦20,000</span> <span>Size</span></div>
                        <div className='user-selection'><span className='quantity'><i class="fa-solid fa-circle-minus" style={{marginRight:"5px", cursor:"pointer"}}></i> <span id='quantity'>0</span> <i class="fa-solid fa-circle-plus" style={{margin:"5px", cursor:"pointer"}}></i></span> <span><button className='add-to-bag'>
                            Add to Bag
                        </button></span> </div>
                     </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <Discount/>
        <ChooseUs/>
        <Footer/>
   </>
  )
}

export default Home