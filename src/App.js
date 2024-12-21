import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavScrollExample from "./components/navBar/navbar";
import Home from "./components/home/home";
import Footer from "./components/footer/footer";
import Contact from "./components/contact/contact";
import Cart from "./components/cart/cart";
import Favorite from "./components/favorite/favorite";
import Shop from "./components/shop/shop";
import About from "./components/about/about";
import ProductDetails from './components/productDetails/productDetails'
import NotFound from "./components/notFound/notFound";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavScrollExample></NavScrollExample>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/favorite" element={<Favorite/>}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/droductDetails/:id" element={<ProductDetails />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
