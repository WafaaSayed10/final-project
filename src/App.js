import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavScrollExample from './components/navbar'
import Home from './components/home';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <NavScrollExample></NavScrollExample>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
