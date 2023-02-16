import React from 'react'
import Navbar from '../components/Navbar'
import "../css/home.css"

const Home = () => {
  return (
   <>
        <Navbar/>
        {/* Hero-Section */}
        <div className='container hero-section'>
            <div className='row'>
                <div className='col-lg-6'>
                    <p className='hero-intro'>Feel Big and Unmatched</p>
                    <h1 className='hero-header'>Step into style with latest unboxed footwear trends</h1>
                    <p className='hero-paragraph'>Discover the perfect pair for every occasion from unboxed luxury , we always want you to step out in comfort and style. </p>
                    <button className='shop-now'> <i style={{marginRight:"10px", Color:"#49101F"}} class="fa-solid fa-arrow-right"></i> Shop Now</button>
                </div>

                <div className='col-lg-6'>
                    <img className='img-fluid zanotti' src='./images/g.zanotti image.png' alt="zanotti"/>
                    </div>
            </div>
        </div>
        {/* Brands */}
        <div className='brands'>
        <br/>
                <h1 className='brands-header'>Brands of Shoes in Stock</h1>
                <div className='container'>
                <div className='row'>
                <div className='col-lg-3'>
                <img className='img-fluid brand-img' src='./images/LV.png' alt='LV'/>
                </div>
                <div className='col-lg-3'>
                <img className='img-fluid brand-img' src='./images/TomFord.png' alt='TomFord'/>
                </div>
                <div className='col-lg-3'>
                <img className='img-fluid brand-img' src='./images/Puma.png' alt='Puma'/>
                </div>
                <div className='col-lg-3'>
                <img className='img-fluid brand-img' src='./images/swift.png' alt='Swift'/>
                </div>
                 
                
                 
                </div>
                </div>
        </div>
        {/* Collections */}
        <div className='container'>
            <h3>Dress Shoe Collections </h3>
            <div className='row' style={{padding:"5px"}}>
                <div className='col-lg-3 collection-container'>
                    <img className='collection-shoe' src='./images/Alexander.png' alt='Alexander'/>
                    <p>Berlutti</p>
                    <p>Can be Won On Native </p>
                   <div className='collection-details'><span>₦20,000</span> <span>Size</span></div>
                </div>
                <div className='col-lg-3 collection-container'>
                    <img className='collection-shoe' src='./images/Alexander.png' alt='Alexander'/>
                    <p>Berlutti</p>
                    <p>Can be Won On Native </p>
                   <div className='collection-details'><span>₦20,000</span> <span>Size</span></div>
                </div>
                <div className='col-lg-3 collection-container'>
                    <img className='collection-shoe' src='./images/Alexander.png' alt='Alexander'/>
                    <p>Berlutti</p>
                    <p>Can be Won On Native </p>
                   <div className='collection-details'><span>₦20,000</span> <span>Size</span></div>
                </div>
                <div className='col-lg-3 collection-container'>
                    <img className='collection-shoe' src='./images/Alexander.png' alt='Alexander'/>
                    <p>Berlutti</p>
                    <p>Can be Won On Native </p>
                   <div className='collection-details'><span>₦20,000</span> <span>Size</span></div>
                </div>
            </div>
        </div>

        {/* Latest Arrivals */}
        <div className='arrivals'>
        <div className='container'>
            <h1>Latest Arrivals</h1>
            <div className='row'>
                <div className='col-lg-4'>

                </div>
                <div className='col-lg-4'>
                    
                </div>
                <div className='col-lg-4'>
                    
                </div>
            </div>
            <h2>Footie of the Week</h2>
            <div className='row'>
                <div className='col-lg-8'>
                    <h2>Berluti</h2>
                    <h5>Dress Shoe</h5>
                    <div className='arrival-features'>
                        <span>Brand:Berluti Paris</span>   <span>Brand:Berluti Paris</span>   <span>Brand:Berluti Paris</span>   <span>Brand:Berluti Paris</span>
                    </div>
                    <button className='shop-now'>Shop Now</button>
                </div>
                <div className='col-lg-4'>
                    <img src='./images/Native Wear.png' alt='Native Wear'/>
                    </div>
            </div>
        </div>
        </div>

        {/* Why Choose Us */}
        <div className='container'>
            <h1>Why Choose Us</h1>
            <div className='row'>
                <div className='col-lg-6'>

                </div>
                <div className='col-lg-6'>
                    <h1>Why You Should Patronize Us</h1>
                    <p>unboxed is a unique brand with its heel in true sense of style . we sell a nicely selected range of pre-owned & unboxed footwears 
                        <br/> <br/>
                        affordable , pocket friendly good quality sneakers, shoes & slides suitable for your favourite  occasssions , shoes that ease your feet from the tip of your toes to comfort soles . also, we offer stocks that are available as seen with nationwide delivery.
                    </p>
                </div>
            </div>
        </div>
   </>
  )
}

export default Home