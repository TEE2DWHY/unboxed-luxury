// components
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
// HomePage sections
import Hero from './Hero'
import Brands from './Brands'
// styling
import './css/home.css'
// utils
import increment, { decrement } from '../../utils/quantity'

const Home = () => {

return (
   <>
        <Navbar/>
        <Hero/>
        <Brands/>
        {/* Collections */}
        <div className='container shoe-collection'>
            <h3 className='dress-shoe-header'>Dress Shoe Collections </h3>
            <div className='row'>
                <div className='collection-pc col-lg-3'>
                    <div className= 'collection-container'>
                        <img className='collection-shoe' src='./images/Alexander.png' alt='Alexander'/>
                        <p className='shoe-name'>Berlutti</p>
                        <p>Can be Won On Native </p>
                        <div className='collection-details'><span className='shoe-price'>₦20,000</span> <span>Size</span></div>
                        <div className='user-selection'><span className='quantity'><i class="fa-solid fa-circle-minus" style={{marginRight:"5px", cursor:"pointer", fontSize:"22px"}}
                        onClick={()=>{
                            decrement("berlutti");
                        }}
                        ></i> <span id='berlutti'>0</span> <i class="fa-solid fa-circle-plus" style={{margin:"5px", cursor:"pointer", fontSize:"22px"}} onClick={()=>{
                            increment("berlutti")
                        }}></i></span> <span><button className='add-to-bag'>
                            Add to Bag
                        </button></span> 
                        </div>
                     </div>
                    <div>
                    </div>
                </div>
                <div className='collection-pc col-lg-3'>
                    <div className= 'collection-container'>
                        <img className='collection-shoe' src='./images/D&G.png' alt='D&G'/>
                        <p className='shoe-name'>Dolce & Gabbana</p>
                        <p>Can be Won On Native </p>
                        <div className='collection-details'><span className='shoe-price'>₦20,000</span> <span>Size</span></div>
                        <div className='user-selection'><span className='quantity'><i class="fa-solid fa-circle-minus" style={{marginRight:"5px", cursor:"pointer"}}
                        onClick={()=>{
                            decrement("DandG")
                        }}
                        ></i> <span id='DandG'>0</span> <i class="fa-solid fa-circle-plus" style={{margin:"5px", cursor:"pointer"}}
                         onClick={()=>{
                            increment("DandG")
                        }}>
                        </i></span> <span><button className='add-to-bag'>
                            Add to Bag
                        </button></span> </div>
                     </div>
                    <div>
                    </div>
                </div>
                <div className='collection-pc col-lg-3'>
                    <div className= 'collection-container'>
                        <img className='collection-shoe' src='./images/D&G.png' alt='D&G'/>
                        <p className='shoe-name'>Dolce & Gabbana</p>
                        <p>Can be Won On Native </p>
                        <div className='collection-details'><span className='shoe-price'>₦20,000</span> <span>Size</span></div>
                        <div className='user-selection'><span className='quantity'><i class="fa-solid fa-circle-minus" style={{marginRight:"5px", cursor:"pointer"}}
                        onClick={()=>{
                            decrement("DandG1")
                        }}
                        ></i> <span id='DandG1'>0</span> <i class="fa-solid fa-circle-plus" style={{margin:"5px", cursor:"pointer"}}
                        onClick={()=>{
                            increment("DandG1")
                        }}
                        ></i></span> <span><button className='add-to-bag'>
                            Add to Bag
                        </button></span> </div>
                     </div>
                    <div>
                    </div>
                </div>
                <div className='collection-pc col-lg-3'>
                    <div className= 'collection-container'>
                        <img className='collection-shoe' src='./images/TomFord-shoe.png' alt='TomFord'/>
                        <p className='shoe-name'>TomFord</p>
                        <p>Can be Won On Native </p>
                        <div className='collection-details'><span className='shoe-price'>₦20,000</span> <span>Size</span></div>
                        <div className='user-selection'><span className='quantity'><i class="fa-solid fa-circle-minus" style={{marginRight:"5px", cursor:"pointer"}}
                        onClick={()=>{
                            decrement("TomFord")
                        }}
                        ></i> <span id='TomFord'>0</span> <i class="fa-solid fa-circle-plus" style={{margin:"5px", cursor:"pointer"}}
                        onClick={()=>{
                            increment("TomFord")
                        }}
                        ></i></span> <span><button className='add-to-bag'>
                            Add to Bag
                        </button></span> </div>
                     </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>

        {/* Latest Arrivals */}
        <div className='arrivals'>
        <div className='container'>
            <h1 className='arrival-header'>Latest Arrivals <i class="fa-solid fa-fire"></i></h1>
            <div className='row'>
                <div className='arrivals-container col-lg-4'>
                    <div className='arrivals-details'>
                        <img className='img-fluid arrival-img' src='./images/hero-img.png' alt=""/>
                        <div className='user-selection'><span className='quantity'><i class="fa-solid fa-circle-minus" style={{marginRight:"5px", cursor:"pointer"}}
                        onClick={()=>{
                            decrement("alexander-mcqueen")
                        }}
                        ></i> <span id='alexander-mcqueen'>0</span> <i class="fa-solid fa-circle-plus" style={{margin:"5px", cursor:"pointer"}}
                        onClick={()=>{
                            increment("alexander-mcqueen")
                        }}
                        ></i></span> <span><button className='add-to-bag-arrival'>
                        <i class="fa-solid fa-bag-shopping"></i> Add to Bag
                        </button></span> </div>
                        <h3 className='arrival-title'>Alexander Mcqueen</h3>
                        <p className='arrival-details'>2021 Black</p>
                        <p className='arrival-details'>Male</p>
                        <div className='arrival-price'><span className='shoe-price'>₦50,000</span> <span>Size</span></div>
                    </div>
                </div>
                <div className='arrivals-container col-lg-4'>
                    <div className='arrivals-details'>
                        <img className='img-fluid arrival-img' src='./images/Tornado.png' alt=""/>
                        <div className='user-selection'><span className='quantity'><i class="fa-solid fa-circle-minus" style={{marginRight:"5px", cursor:"pointer"}}></i> 0 <i class="fa-solid fa-circle-plus" style={{margin:"5px", cursor:"pointer"}}></i></span> <span><button className='add-to-bag-arrival'>
                        <i class="fa-solid fa-bag-shopping"></i> Add to Bag
                        </button></span> </div>
                        <h3 className='arrival-title'>Nike</h3>
                        <p className='arrival-details'>2021 Black</p>
                        <p className='arrival-details'>Male</p>
                        <div className='arrival-price'><span className='shoe-price'>₦45,000</span> <span>Size</span></div>
                    </div>
                </div>
                <div className='arrivals-container col-lg-4'>
                    <div className='arrivals-details'>
                        <img className='img-fluid arrival-img' src='./images/Nike.png' alt=""/>
                        <div className='user-selection'><span className='quantity'><i class="fa-solid fa-circle-minus" style={{marginRight:"5px", cursor:"pointer"}}></i> 0 <i class="fa-solid fa-circle-plus" style={{margin:"5px", cursor:"pointer"}}></i></span> <span><button className='add-to-bag-arrival'>
                        <i class="fa-solid fa-bag-shopping"></i> Add to Bag
                        </button></span> </div>
                        <h3 className='arrival-title'>Nike</h3>
                        <p className='arrival-details'>2021 Orange</p>
                        <p className='arrival-details'>Male</p>
                        <div className='arrival-price'><span className='shoe-price'>₦49,000</span> <span>Size</span></div>
                    </div>
                </div>
            </div>
            <hr/>
            <h2 className='footie-header'>Footie of the Week</h2>
            <div className='row'>
                <div className='col-lg-7'>
                    <h2 className='berluti'>Berluti</h2>
                    <h5 className='dress-shoe'>Dress Shoe</h5>
                    <div className='arrival-features'>
                        <span>Brand: Berluti Paris</span>   <span>Model: 2019</span>   <span>Color: Neutral</span>   <span>Price: ₦20,000</span>
                    </div>
                    <button className='shop-now'>  <i style={{marginRight:"10px", Color:"#49101F"}} class="fa-solid fa-arrow-right"></i>  Shop Now</button>
                </div>
                <div className='col-lg-5'>
                    <img className='img-fluid alexander-png' src='./images/Alexander.png' alt='Native Wear'/>
                    </div>
            </div>
            <br/> <br/>
        </div>
        </div>

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

        {/* Discount */}
        <div className='discount'>
            <div className='container'>
                <div className='row discount-container'>
                    <div className='col-lg-6'>
                        <h3>Discount Discount Discount!!!</h3>
                        <h4>25%</h4>
                        <h3 className='discount-paragraph'>Unboxed Luxury would be offering its first 100 online customers a 25% discount</h3>
                    </div>
                    <div className='col-lg-6 discount-2'>
                            <img className='discount-img' src='./images/Discount-img.png' alt='discount'/>
                            <button className='discount-btn'> <i class="fa-solid fa-arrow-right"></i> Take Advantage</button>
                     </div>
                </div>
            </div>
        </div>

        {/* Why Choose Us */}
        <div className='container why-us'>
            <h1 className='why-choose-us'>Why Choose Us</h1>
            <div className='row'>
                <div className='col-lg-6'>
                    <img className='img-fluid shopping' src="./images/Shopping bag.gif" alt="shopping-bag"/>
                </div>
                <div className='col-lg-6'>
                    <h1 className='why-patronize-header'>Why You Should Patronize Us</h1>
                    <p className='why-patronize-p'>Unboxed is a unique brand with its heel in true sense of style . we sell a nicely selected range of pre-owned & unboxed footwears. 
                        <br/> <br/>
                        Affordable , pocket friendly good quality sneakers, shoes & slides suitable for your favourite  occasssions , shoes that ease your feet from the tip of your toes to comfort soles . also, we offer stocks that are available as seen with nationwide delivery.
                    </p>
                </div>
            </div>
            <div className='features d-flex justify-content-between'>
                    <div> <i class="fa-solid fa-money-bill feature-icon"></i> Affordable and Pocket Friendly </div>
                    <div> <i class="fa-solid fa-truck feature-icon"></i> Fast Delivery</div>
                    <div> <i class="fa-solid fa-phone feature-icon"></i> Fast Customer Support</div>
            </div>
        </div>
        {/* Footer */}
        <Footer/>
   </>
  )
}

export default Home