import { Link } from 'react-router-dom'
import TypeWriter from '../../libs/TypeWriter'
import Spring from '../../libs/Spring'
// images
import Shopping from "../../assets/images/Ecommerce checkout.avif"


const Hero = () => {
   
  return (
   <>
      <div className='container hero-section'>
            <div className='row'>
                <div className='col-lg-6'>
                    <p className='hero-intro'>Feel Bigger and 
                        <span style={{marginLeft:"5px", color:"#C27664", fontWeight:"bold"}}>
                            <TypeWriter/>
                        </span> 
                    </p>
                    <h1 className='hero-header'>Step into style with latest <span className='unboxed'>unboxed footwear</span> trends.</h1>
                    <p className='hero-paragraph'>Discover the perfect pair <i class="fa-solid fa-shoe-prints"></i> for every occasion from unboxed luxury , we always want you to step out in comfort and style. </p>
                    <Link to='/products'><button className='shop-now'> <i style={{marginRight:"10px", Color:"#49101F"}} class="fa-solid fa-arrow-right"></i> Shop Now</button></Link>
                    {/* Statistics */}
                         <span className='statistics'>
                         <span> <Spring n={100}/>
                             <span className='stats-p'>Brands<sup>+</sup></span>
                         </span>
                         <span> <Spring n={546}/>
                            <span className='stats-p'>Sold Shoes<sup>+</sup></span>
                         </span> 
                         <span> <Spring n={1000}/>
                             <span className='stats-p'>Shoes Stocked<sup>+</sup></span>
                         </span>
                         </span> 
                </div>

                <div className='col-lg-6 hero-img'>
                    <img className='img-fluid zanotti' src={Shopping} alt="zanotti"/>
                </div>
            </div>
        </div>
      
   </>
  )
}

export default Hero