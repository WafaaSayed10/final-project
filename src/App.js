import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavScrollExample from './components/navbar'
import Home from './components/home';
import Footer from './components/footer';
import Contact from './components/contact/contact';
import Cart from './components/cart/cart';
import Favorite from './components/favorite/favorite';
import Shop from './components/shop/shop';
import About from './components/about/about';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <NavScrollExample></NavScrollExample>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/favorite" element={<Favorite></Favorite>}></Route>
        <Route path="/shop" element={<Shop></Shop>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
