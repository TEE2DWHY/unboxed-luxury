import { useState } from "react"

const Products = (props) => {
    const [orderDetails, setOrderDetails] = useState(
            <p className="description">
                This brand of gucci  has a thick sole, was released in the year 2022 .comes with a pair of a lace , 
                has padded inners ,double soles which aid movement , it can also be used for sports( running, jogging and any other sporting activity)
            </p>
    )
  return (
    <>
    <div className="container product-header">
            <h3>Product Details</h3>
    </div>
    <div className="container product-page">
        <div className="row">
            <div className="col-lg-6">
                <img className="img-fluid img-product" src={props.img} alt={props.alt}/>
            </div>
            <div className="col-lg-6">
                <p className="dress-shoe">Dress Shoes Collection</p>
                <h1 className="shoe-header">{props.header}</h1>
                <h5 className="shoe-price">{props.price}</h5>
                <p className="shoe-text">{props.paragraph}</p>
                <div className="d-flex justify-content-between shoe-size-container">
                <button className="shoe-size">{props.size1}</button>
                <button className="shoe-size">{props.size2}</button>
                <button className="shoe-size">{props.size3}</button>
                <button className="shoe-size">{props.size4}</button>
                </div>
                <br/>
                <p>Available Size</p>
                <hr/>
                <div className="quantity">
                <span>
                <i class="fa-solid fa-circle-minus" style={{marginRight:"5px", cursor:"pointer"}}/>
                <span>0</span>
                <i class="fa-solid fa-circle-plus" style={{marginLeft:"5px", cursor:"pointer"}}/>
                </span>
                <span>
                    <button className="add-to-cart"><i class="fa-solid fa-bag-shopping"></i> Add to Cart</button>
                </span>
                </div>
                <hr/>
            </div>
            <div className="order-details"> 
            {/* Description */}
            <span className="description-text" onClick={()=>{   
                setOrderDetails(
            <p className="detail-container">
                This brand of gucci  has a thick sole, was released in the year 2022 .comes with a pair of a lace , 
                has padded inners ,double soles which aid movement , it can also be used for sports( running, jogging and any other sporting activity).
            </p>
                )
            }}>Description</span>
            {/* Additional Information */}
             <span className="description-text" onClick={()=>{   
                setOrderDetails(
            <p className="detail-container">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
             irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
            </p>
                )
            }}>Additional Information</span>
            {/* Reviews */}
             <span className="description-text" onClick={()=>{   
                setOrderDetails(
            <p className="detail-container">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
             irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
            </p>
                )
            }}>Reviews</span>
            </div>
            {orderDetails}
        </div>
        <h4 className="bold">Related Product</h4>
    </div>
    </>
  )
}

export default Products