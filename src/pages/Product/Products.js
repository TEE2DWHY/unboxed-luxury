import Navbar from "../../components/Navbar"
import "./css/products.css"
// images
import imageCard from "./images/image-card.png"

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
          <div className="left">
          <i class="fa-solid fa-filter"></i> Filter
          </div>
          <div className="left">
            Default Sorting
          </div>  
        </div>
        
        <div className="row">
            <div className="col-lg-4">

            </div>

            <div className="col-lg-4">
                
            </div>

            <div className="col-lg-4">
                
                </div>
        </div>
    </div>
   </>
  )
}

export default Products