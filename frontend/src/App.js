import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Container } from "react-bootstrap";
import Homescreen from "./screens/Homescreen";
import Productscreen from "./screens/Productscreen";
import CartScreen from "./screens/CartScreen";
import UserLoginScreen from './screens/UserLoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={Homescreen} exact/>
          <Route path='/product/:id' component={Productscreen}/>
          <Route path='/cart/:id?' component={CartScreen}/>
          <Route path='/login' component={UserLoginScreen}/>
          <Route path='/register' component={RegisterScreen}/>
          <Route path='/profile' component={ProfileScreen}/>
          <Route path='/shipping' component={ShippingScreen}/>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
