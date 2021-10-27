export const addToCart=(product,qty)=>(dispatch,getState)=>{


const cartItem = {
name: product.name ,
_id : product._id,
price: product.price,
countInStock:product.countInStock,
quantity:qty

}

dispatch({type :'ADD_TO_CART' , payload :cartItem})
localStorage.setItem('cartItems',JSON.stringify(getState().cartReducer.cartItems))
}


export const deleteFromCart = (item)=>dispatch=>{
  dispatch ({type :'DELETE_FROM_CART' , payload:item})
}