import React from 'react'
import { useCart } from 'react-use-cart'

const Cards = (props) => {
  const {addItem}=useCart();
  return (
   <>
     <div className='col-12 col-sm-12 col-lg-3'>
     <div className="card h-100 shadow">
        <img src={props.img} className='card-img-top img-fluid'/>
        <div className="card-body">
          <div className="row">
          <h5 className='card-title'>{props.title}</h5>
          </div>
         <div className=" d-flex justify-content-between">
         <div className="card-text">{props.desc}</div>
         <div className='fw-bold'> <span>${props.price}</span></div>
         </div>
          
           <div className="d-grid justify-content-end">
          <button onClick={()=>addItem(props.item)} className='btn btn-sm btn-outline-success'>Add to Cart</button>
          </div>
         
        </div>
     </div>
    </div>
 
  
   </>
  )
}

export default Cards