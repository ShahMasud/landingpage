import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Banner from './components/Banner';
import About from './components/About';
import Projects from './components/projects';
// import Carousel from './components/Carousel';
import Location from './components/Location';
import Layoutexample from './components/Layoutexample';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Map from './components/map';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <About/>
     <Projects/>
     {/* <Carousel/> */}
     <Location/>
     <Layoutexample/>
     <Map/>
     <Form/>
    </div>
  );
}

export default App;
