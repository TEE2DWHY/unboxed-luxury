import React from 'react'
import increment, { decrement } from '../utils/quantity'

const ShoeContainer = (props) => {
  return (
   <>
        <div className='shoe'>
        <div className='shoe-container'>
            <img className='img-fluid shoe-img' src={props.img} alt={props.alt}/>
            <div className='user-selection'><span className='quantity'><i class="fa-solid fa-circle-minus" style={{marginRight:"5px", cursor:"pointer"}}
            onClick={()=>{
                decrement(props.id)
            }}
            ></i> <span id={props.id}>0</span> <i class="fa-solid fa-circle-plus" style={{margin:"5px", cursor:"pointer"}}
            onClick={()=>{
                increment(props.id)
            }}
            ></i></span> <span><button className='add-to-bag-arrival'>
            <i class="fa-solid fa-bag-shopping"></i> {props.buttonText}
            </button></span> </div>
            <h3 className='shoe-title'>{props.title}</h3>
            <p className='shoe-details'>{props.detail1}</p>
            <p className='shoe-details'>{props.detail2}</p>
            <div className='arrival-price'><span className='shoe-price'>{props.price}</span> <span>Size</span></div>
        </div>
        </div>
   </>
  )
}

export default ShoeContainer