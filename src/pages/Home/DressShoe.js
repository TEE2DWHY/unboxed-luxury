import { dressShoeCollection } from '../../data/Home'
// utils
import increment, { decrement } from '../../utils/quantity'

const DressShoe = () => {
    const onSubmit = (e) =>{
        e.preventDefault()
        const NameElement = document.querySelector(".shoe-name");
        const shoeName = NameElement.innerHTML
        const detailsElement = document.querySelector(".item-details");
        const shoeDetails = detailsElement.innerHTML
        const priceElement = document.querySelector(".shoe-price");
        const shoePrice = priceElement.innerHTML
        const quantityElement = document.querySelector(".shoe-quantity");
        const shoeQuantity = quantityElement.innerHTML
        const phoneNumber = "+2349032533461";
        const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(`Name: ${shoeName}\nEmail: ${shoeDetails}\nMessage: ${shoeQuantity}\nPrice; ${shoePrice}`)}`;
        window.open(url);
    }

  return (
   <>
     {/* Collections */}
     <div className='container shoe-collection'>
            <h3 className='dress-shoe-header'>Dress Shoe Collections </h3>
            <div className='row'>
                  {dressShoeCollection.map((items)=>(
                    <div className='collection-pc col-lg-3'>
                        <div className= 'collection-container' key={items.id}>
                            <img className='collection-shoe' src={items.img} alt='Alexander'/>
                            <p className='shoe-name'>{items.title}</p>
                            <p className='item-details'>{items.details}</p>
                            <div className='collection-details'><span className='shoe-price'>{items.price}</span> <span>Size</span></div>
                            <div className='user-selection'><span className='quantity'><i class={items.minus} style={{marginRight:"5px", cursor:"pointer", fontSize:"22px"}}
                                onClick={()=>{
                                    decrement(items.ids);
                                }}
                                ></i> <span id={items.ids} className="shoe-quantity">0</span> <i class={items.addition} style={{margin:"5px", cursor:"pointer", fontSize:"22px"}} onClick={()=>{
                                    increment(items.ids)
                                }}></i></span> 
                                <button className='add-to-bag' type='button' onClick={onSubmit}>
                                    {items.buttonText}
                                </button>
                            </div>
                        </div>
                        <div>
                    </div>
                    </div>
                ))}        
            </div>
        </div>
   </>
  )
}

export default DressShoe