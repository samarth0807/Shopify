import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Homescree from './screen/Homescree';
import {BrowserRouter,Route} from 'react-router-dom'
import Productdescr from './screen/Productdescr';
import Cartscreen from './screen/Cartscreen';
import Register from './screen/Register';
import Loginscreen from './screen/Loginscreen';
import Orderscreen from './screen/Orderscreen';
import OrderInfo from './screen/OrderInfo';
import ProductsList from './screen/ProductsList';
import AddProduct from './screen/AddProduct';

// Put any other imports below so that CSS from your
// components takes precedence over default styles.
function App() {
  return (
    <div className="App">
     <NavBar/>
     <BrowserRouter>
     <Route path='/' component={Homescree} exact />
     <Route path='/product/:id' component={Productdescr}  />
     <Route path='/cart' component={Cartscreen}/>
     <Route path='/login' component={Loginscreen}/>
     <Route path='/register' component={Register}/>
     <Route path='/orders' component={OrderInfo}/>
     <Route path='/products' component={ProductsList}/>
     <Route path='/addproduct' component={AddProduct}/>


     <Route path='/orderinfo/:orderid' component={OrderInfo}/>
     </BrowserRouter>
    </div>
  );
}

export default App;
