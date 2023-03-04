import Navbar from "../../components/Navbar"
import "./css/products.css"
import Footer from "../../components/Footer"
import ShoeContainer from "../../components/ShoeContainer"
// images
import imageCard from "./images/image-card.png"
import Berlutti from "./images/Berlutti.png"
import Nike from "./images/Nike.png"
import Gucci from "./images/Gucci.png"
import DandG from "./images/D&G.png"
import Balenciaga from "./images/Balenciga.png"

const Products = () => {
   
  return (
   <>
   {/* Navbar */}
    <Navbar/>
    {/* Img-Component */}
    <div className="container-fluid img-section">
        <img className="img-fluid payment" src={imageCard} alt="payment"/>
    </div>
    {/* UserPurchase */}
    <div className="container">
        <h3 className="header-purchase">What would you be buying from our store today?</h3>

        <div className="filter">
          <div className="left dropdown">
          <i class="fa-solid fa-filter" style={{marginRight:"20px"}}></i> 
          <span className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Filter</span>
          <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/#">Berlutti</a></li>
                <li><a class="dropdown-item" href="/#">Nike</a></li>
                <li><a class="dropdown-item" href="/#">Gucci</a></li>
         </ul>
          </div>
          <div className="left">
            Default Sorting
          </div>  
        </div>
        
        <div className="row shoe-section">
            <div className="col-lg-4">
                  <ShoeContainer
                    img={Berlutti}
                    alt="berlutti"
                    buttonText="Add to Bag"
                    title="Berlutti"
                    detail1="2021 Neutral"
                    detail2="Male"
                    price="₦77000"
                    id="berlutti"
                  />  
            </div>
            <div className="col-lg-4">
            <ShoeContainer
                    img={Nike}
                    alt="Nike"
                    buttonText="Add to Bag"
                    title="Nike"
                    detail1="2021 Neutral"
                    detail2="Male"
                    price="₦49000"
                    id="nike"
                  />
            </div>
            <div className="col-lg-4">
            <ShoeContainer
                    img={Gucci}
                    alt="gucci"
                    buttonText="Add to Bag"
                    title="Gucci"
                    detail1="2021 Neutral"
                    detail2="Male"
                    price="₦70000"
                    id="gucci"
                  />
                </div>
        </div>

        <div className="row shoe-section">
            <div className="col-lg-4">
                  <ShoeContainer
                    img={DandG}
                    alt="berlutti"
                    buttonText="Add to Bag"
                    title="Dolce and Gabbana"
                    detail1="2021 Neutral"
                    detail2="Male"
                    price="₦77000"
                    id="DandG"
                  />  
            </div>
            <div className="col-lg-4">
            <ShoeContainer
                    img={Balenciaga}
                    alt="Balenciaga"
                    buttonText="Add to Bag"
                    title="Balenciaga"
                    detail1="2021 Neutral"
                    detail2="Male"
                    price="₦49000"
                    id="Balenciaga"
                  />
            </div>
            <div className="col-lg-4">
            <ShoeContainer
                    img={Gucci}
                    alt="Nike"
                    buttonText="Add to Bag"
                    title="Nike"
                    detail1="2021 Neutral"
                    detail2="Male"
                    price="₦70000"
                    id="Nike2"
                  />
                </div>
        </div>

        <div className="row shoe-section">
            <div className="col-lg-4">
                  <ShoeContainer
                    img={Berlutti}
                    alt="berlutti"
                    buttonText="Add to Bag"
                    title="Berlutti"
                    detail1="2021 Neutral"
                    detail2="Male"
                    price="₦77000"
                    id="berlutti"
                  />  
            </div>
            <div className="col-lg-4">
            <ShoeContainer
                    img={Nike}
                    alt="berlutti"
                    buttonText="Add to Bag"
                    title="Berlutti"
                    detail1="2021 Neutral"
                    detail2="Male"
                    price="₦49000"
                    id="nike"
                  />
            </div>
            <div className="col-lg-4">
            <ShoeContainer
                    img={Gucci}
                    alt="berlutti"
                    buttonText="Add to Bag"
                    title="Berlutti"
                    detail1="2021 Neutral"
                    detail2="Male"
                    price="₦70000"
                    id="gucci"
                  />
                </div>
        </div>
        <hr/>
        <h3 className="products-sale">Check out sales offers from unboxed luxury</h3>
    </div>

    <Footer/>
   </>
  )
}

export default Products