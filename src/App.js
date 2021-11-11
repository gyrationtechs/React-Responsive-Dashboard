import { Route, Switch } from "react-router";
import Home from "./components/pages/home/Home";
import NewProduct from "./components/pages/newProduct/NewProduct";
import NewUser from "./components/pages/newUser/NewUser";
import Product from "./components/pages/product/Product";
import ProductList from "./components/pages/productList/ProductList";
import User from "./components/pages/user/User";
import UserList from "./components/pages/userList/UserList";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";


function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newProduct">
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
