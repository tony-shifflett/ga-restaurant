import './styles/App.css';
import Landing from './pages/Landing';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Testimonial from './pages/Testimonial';
import Footer from './pages/Footer';
import Branches from './pages/Branches';

function App() {
  return (
    <div className="App">
      <Landing/>
      <About/>
      <Gallery/>
      <Testimonial/>
      <Branches/>
      <Footer/>
    </div>
  );
}

export default App;
