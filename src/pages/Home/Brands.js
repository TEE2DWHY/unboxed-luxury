// data
import brand from '../../data/Home'

const Brands = () => {
  return (
   <>
      {/* Brands */}
      <div className='brands'>
        <br/>
                <h1 className='brands-header'>Brands of Shoes in Stock</h1>
                <div className='container'>
                    <div className='row'>
                    {brand.map((items)=>(
                        <div className='col-lg-3' key={items.id}>
                            <img className='img-fluid brand-img' src={items.img} alt={items.alt}/>
                        </div>
                    ))}    
                    </div>
                </div>
        </div>
   </>
  )
}

export default Brands