import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavScrollExample from './components/navbar'
import Home from './components/home';
import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <NavScrollExample></NavScrollExample>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
