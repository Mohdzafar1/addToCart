import React from "react";
import { useCart } from "react-use-cart";
import  "../Style/Cart.css"

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty) return <h3 className="fw-bold text-center">My cart is Empty</h3>;
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
        <p className="text-center fw-bold display-5 text-decoration-underline">My Cart</p>
          <div className="col-12">
          <div className="d-flex justify-content-center shadow">
          <p className="position-relative fw-bold text-title fs-5">Cart <span className=" postition-absolute translate-middle rounded-pill badge bg-danger mx-1 fs-5 ">{totalUniqueItems}</span></p>
            <p className="fw-bolder text-title fs-5">total Items 
            <span className=" postition-absolute translate-middle rounded-pill badge bg-success mx-1 fs-5 ">{totalItems}</span>
            </p>
          </div>
          </div>
          <table className="table table-light table-hover m-0">
              <tbody>
                {items.map((item,index)=>{
                  return(
                    <tr key={index}>
                     <td><img src={item.img} className="img-thumbnail"/></td>
                     <td>{item.title}</td>
                     <td>${item.price}</td>
                     <td>Quantity:{item.quantity}</td> 
                     <td>
                      <button onClick={()=>{updateItemQuantity(item.id,item.quantity - 1)}} className="btn btn-success me-2">-</button>
                      <button onClick={()=>{updateItemQuantity(item.id,item.quantity + 1)}}  className="btn btn-success">+</button>
                      <button onClick={()=>{removeItem(item.id)}} className="btn btn-danger ms-3">Remove</button>
                       
                     </td>
                    </tr>
                  )
                })}
              </tbody>
          </table>
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <h3 >Total Price ${cartTotal}</h3>
        <button onClick={()=>emptyCart()} className="btn btn-outline-danger pt-3">ALL Clear</button>
      </div>
    </div>
  );
};

export default Cart;
