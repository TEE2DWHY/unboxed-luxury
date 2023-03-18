import React from 'react'
import logo from "../assets/images/logo.png"
const Footer = () => {
  return (
        <>
            <div className='container footer d-flex justify-content-between'>
                  <div className='brand-details container'>
                      <img className='img-fluid' src={logo} alt="logo"/>
                      <br/> <br/>
                      <p className='footer-p'>Unboxed Luxury is a footwear brand that sells branded shoes that have being opened from their box. Unboxed luxury is a footwear brand that sells branded shoes that have being opened from their box.
                      </p>
                      <i class="fa-brands fa-square-whatsapp fa-2x" style={{padding:"20px"}}></i>
                      <i class="fa-brands fa-twitter fa-2x" style={{padding:"20px"}}></i>
                      <i class="fa-brands fa-square-instagram fa-2x" style={{padding:"20px"}}></i>
                      <i class="fa-brands fa-tiktok fa-2x" style={{padding:"20px"}}></i>
                      {/* <i class="fa-brands fa-facebook fa-2x"></i> */}
                  </div>
                  <div className='footer-content container'>
                    <div className='about'>
                        <h3>About</h3>
                        <p>Our Company</p>
                        <p>Customer Service</p>
                        <p>Discount and Promos</p>
                        <p>Terms and Policy</p>
                    </div>
                    <div className='product'>
                            <h3>Product</h3>
                            <p>Slides</p>
                            <p>Sandals</p>
                            <p>Shoes</p>
                            <p>Sneakers</p>
                        </div>
                  </div>    
            </div>
        </>
  )
}

export default Footer