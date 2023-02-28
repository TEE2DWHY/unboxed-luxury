import React from 'react'

const ChooseUs = () => {
  return (
   <>
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
            <div className='features'>
                    <div className='my-3'> <i class="fa-solid fa-money-bill feature-icon"></i> Affordable and Pocket Friendly </div>
                    <div className='my-3'> <i class="fa-solid fa-truck feature-icon"></i> Fast Delivery</div>
                    <div className='my-3'> <i class="fa-solid fa-phone feature-icon"></i> Fast Customer Support</div>
            </div>
        </div>
   </>
  )
}

export default ChooseUs