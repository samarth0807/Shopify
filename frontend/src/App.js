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

     </BrowserRouter>
    </div>
  );
}

export default App;
