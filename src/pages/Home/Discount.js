import React from 'react'

const Discount = () => {
  return (
    <>
         {/* Discount */}
         <div className='discount'>
            <div className='container'>
                <div className='row discount-container'>
                    <div className='col-lg-6'>
                        <h3>Discount Discount Discount!!!</h3>
                        <h4 className='twenty-five-percent'>25%</h4>
                        <h3 className='discount-paragraph'>Unboxed Luxury would be offering its first 100 online customers a 25% discount</h3>
                    </div>
                    <div className='col-lg-6 discount-2'>
                            <img className='discount-img' src='./images/Discount-img.png' alt='discount'/>
                            <button className='discount-btn'> <i class="fa-solid fa-arrow-right"></i> Take Advantage</button>
                     </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Discount