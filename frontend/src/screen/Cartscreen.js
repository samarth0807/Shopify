import React from "react";
import { useState, useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../actions/cartActions";

export default function Cartscreen() {
  const cartreducerstate = useSelector((state) => state.cartReducer);
  const { cartItems } = cartreducerstate;
  var subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const dispatch = useDispatch();
  return (
    <div>
      <div className="row mt-3 justify-content-center">
        <div className="col-md-8 table-bordered card text-center">
          <h2 className="text-center m-5">MY CART</h2>
          <table className="table table-bordered table-responsives-sm">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => {
                return (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>
                      <select
                        value={item.quantity}
                        onChange={(e) =>
                          dispatch(addToCart(item, e.target.value))
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x, i) => {
                          return <option value={i + 1}>{i + 1}</option>;
                        })}
                      </select>
                    </td>
                    <td>{item.price * item.quantity}</td>
                    <td>
                      <i
                        class="fas fa-trash-alt"
                        onClick={() => {
                          dispatch(deleteFromCart(item));
                        }}
                      ></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <hr />
          <h2 className="text-center">SubTotal : {subtotal} RS/-</h2>

          <div className=' p-3'>
          <button className='btn'>Pay Now</button>
          </div>
        
        </div>
      </div>
    </div>
  );
}
