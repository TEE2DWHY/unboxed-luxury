import { latestArrivals } from '../../data/Home'
// utils
import increment, { decrement } from '../../utils/quantity'

const LatestArrivals = () => {

  return (
    <>
    <div className='arrivals'>
        <div className='container'>
         <h1 className='arrival-header'>Latest Arrivals <i class="fa-solid fa-fire"></i></h1>
            <div className='row'>
            {latestArrivals.map((items) =>(
                <div className='arrivals-container col-lg-4' key={items.id}>
                    <div className='arrivals-details'>
                        <img className='img-fluid arrival-img' src={items.img} alt={items.alt}/>
                        <div className='user-selection'><span className='quantity'><i class={items.minus} style={{marginRight:"5px", cursor:"pointer"}}
                        onClick={()=>{
                            decrement(items.ids)
                        }}
                        ></i> <span id={items.ids}>0</span> <i class={items.plus} style={{margin:"5px", cursor:"pointer"}}
                        onClick={()=>{
                            increment(items.ids)
                        }}
                        ></i></span> <span><button className='add-to-bag-arrival'>
                        <i class="fa-solid fa-bag-shopping"></i> {items.buttonText}
                        </button></span> </div>
                        <h3 className='arrival-title'>{items.title}</h3>
                        <p className='arrival-details'>{items.detail1}</p>
                        <p className='arrival-details'>{items.detail2}</p>
                        <div className='arrival-price'><span className='shoe-price'>{items.price}</span> <span>Size</span></div>
                    </div>
                </div>
            ))}
            </div>
            <hr/>
            <h2 className='footie-header'>Footie of the Week</h2>
            <div className='row'>
                <div className='col-lg-7'>
                    <h2 className='berluti'>Berluti</h2>
                    <h5 className='dress-shoe'>Dress Shoe</h5>
                    <div className='arrival-features'>
                        <span>Brand: Berluti Paris</span>   <span>Model: 2019</span>   <span>Color: Neutral</span>   <span>Price: ₦20,000</span>
                    </div>
                    <button className='shop-now'>  <i style={{marginRight:"10px", Color:"#49101F"}} class="fa-solid fa-arrow-right"></i>  Shop Now</button>
                </div>
                <div className='col-lg-5'>
                    <img className='img-fluid alexander-png' src='./images/Alexander.png' alt='Native Wear'/>
                    </div>
            </div>
            <br/> <br/>
        </div>
        </div>
    </>
  )
}

export default LatestArrivals