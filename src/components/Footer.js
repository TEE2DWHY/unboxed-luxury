import React from 'react'

const Footer = () => {
  return (
        <>
            <div className='container footer d-flex justify-content-between'>
                  <div className='brand-details'>
                      <h3>Logo</h3>
                      <p>Unboxed Luxury is a footwear brand that sells branded shoes that have being opened from their box.
                          Unboxed Luxury provides quality shoes at pocket friendly rate.
                      </p>
                  </div>
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
        </>
  )
}

export default Footer