import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { getProductById } from "../actions/productActions";
import Loader from "../components/Loader";
import Error from "../components/Error";

export default function Productdescr({ match }) {
  const [qty, setquantity] = useState(1);
  const productid = match.params.id;
  const getproductbyidstate = useSelector(
    (state) => state.getProductByIdReducer
  );

  const { product, loading, error } = getproductbyidstate;
  const dispatch = useDispatch();
  function addtocart() {
    dispatch(addToCart(product, qty));
  }

  useEffect(() => {
    dispatch(getProductById(productid));
  }, []);

  return (
    <div>
      {loading ? (
        <Loader/>
      ) : error ? (
        <Error error ='Something went wrong...'/>

      ) : (
        <div className="row">
          <div className="col-md-6">
            <div className="card p-2 m-3">
              <h1>{product.name}</h1>
              <img src={product.image} className="img-fluid m-3 bigimg" />
              <p>{product.description}</p>
            </div>
          </div>

          <div className="col-md-6 text-left">
            <div className="m-2 card">
              <h1>Price:{product.price}</h1>
              <hr />

              <h1>Select Quatity:</h1>
              <select
                className="opt"
                value={qty}
                onChange={(e) => {
                  setquantity(e.target.value);
                }}
              >
                {[...Array(product.countInStock).keys()].map((x, i) => {
                  return <option value={i + 1}>{i + 1}</option>;
                })}
              </select>
              <hr />
              <hr />

              <button className="btn-dark button" onClick={addtocart}>
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
