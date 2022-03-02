import './styles/App.css';
import Landing from './pages/Landing';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Testimonial from './pages/Testimonial';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
      <Landing/>
      <About/>
      <Gallery/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;
