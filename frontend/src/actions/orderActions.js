import axios from "axios";

export const placeOrder =(token , subtotal) =>(dispatch , getState)=>{

     const currentUser = getState().loginReducer.currentUser
     const demoItems = getState().cartReducer.cartItems

     const cartItems = new Array();
     
     for(var i=0 ; i<demoItems.length ; i++) {

          var item ={
               name : demoItems[i].name ,
               quantity : demoItems[i].quantity,
               price : demoItems[i].price,
               _id : demoItems[i]._id
          }

          cartItems.push(item)

     }



     dispatch({type:'PLACE_ORDER_REQUEST'})

     axios.post('/api/orders/placeorder' , {token , subtotal , currentUser , cartItems}).then(res=>{

          dispatch({type:'PLACE_ORDER_SUCCESS'})
          console.log(res);

     }).catch(err=>{
         dispatch({type:'PLACE_ORDER_FAILED'})
     })


}

export const getOrdersByUserId=()=>(dispatch , getState)=>{

     const userid = getState().loginReducer.currentUser._id

      dispatch({type:'GET_ORDERSBYUSERID_REQUEST'})

      axios.post('/api/orders/getordersbyuserid' , {userid:userid}).then(res=>{

           dispatch({type:'GET_ORDERSBYUSERID_SUCCESS' , payload:res.data})
           console.log(res.data);

      }).catch(err=>{
          dispatch({type:'GET_ORDERSBYUSERID_FAILED' , payload:err})

      })


}

export const getOrdersById=(orderid)=>(dispatch , getState)=>{

     const userid = getState().loginReducer.currentUser._id

      dispatch({type:'GET_ORDERSBYID_REQUEST'})

      axios.post('/api/orders/getordersbyid' , {orderid:orderid}).then(res=>{

           dispatch({type:'GET_ORDERSBYID_SUCCESS' , payload:res.data})
           console.log(res.data);

      }).catch(err=>{
          dispatch({type:'GET_ORDERSBYID_FAILED' , payload:err})

      })
      

}