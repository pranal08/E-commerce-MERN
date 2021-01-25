import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Homescreen from "./screens/Homescreen";
import Productscreen from "./screens/Productscreen";
import CartScreen from "./screens/CartScreen";
import UserLoginScreen from "./screens/UserLoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={Homescreen} exact />
          <Route path="/page/:pageNumber" component={Homescreen} exact/>
          <Route path="/search/:keyword/page/:pageNumber" component={Homescreen} exact/>
          <Route path="/search/:keyword" component={Homescreen} exact/>
          <Route path="/admin/userlist" component={UserListScreen} />
          <Route path="/admin/user/:id/edit" component={UserEditScreen} />
          <Route path="/admin/productlist" component={ProductListScreen} exact/>
          <Route path="/admin/productlist/:pageNumber" component={ProductListScreen} exact/>
          <Route path="/admin/product/:id/edit" component={ProductEditScreen} />
          <Route path="/admin/orderlist" component={OrderListScreen} />
          <Route path="/product/:id" component={Productscreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/login" component={UserLoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/placeOrder" component={PlaceOrderScreen} />
          <Route path="/order/:id" component={OrderScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
