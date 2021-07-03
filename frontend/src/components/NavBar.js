import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../actions/userAction";

export default function NavBar() {
  const cartReducer = useSelector((state) => state.cartReducer);
  const { cartItems } = cartReducer;
const dispatch = useDispatch()
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  return (
    <div>
      <nav class="navbar navbar-expand-lg ">
        <a class="navbar-brand p-4 " href="/">
          Shopify
        </a>
        <button
          class="navbar-toggler "
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
    <div className="navbar-nav ms-auto">  
        {currentUser ? (
            <div class="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle "
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false" 
              >
                  <i style={{color:'white'}} className="fa fa-user" aria-hidden="true"></i> {currentUser.name}
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="/profile">
                  Profile
                </a>
                <a className="dropdown-item" href="/orders">
                  Orders
                </a>
                <li className="dropdown-item" onClick={()=>{dispatch(logoutUser())}} >
                  Log Out
                </li>
              </div>
            </div>
          ) : (
            <li class="nav-item p-1">
              <a class="nav-link " href="/login">
                Login
              </a>
            </li>
          )}
           <li class="nav-item p-1 ">
              <a class="nav-link " href="/cart">
                <i class="fas fa-shopping-cart cart fa-2x"></i>
                <span className="cartnum">{cartItems.length}</span>
              </a>
            </li>
            </div>
          
           
          
        </div>
      </nav>
    </div>
  );
}
