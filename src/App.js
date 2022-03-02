import './styles/App.css';
import {Routes, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import About from './pages/About';
import Gallery from './pages/Gallery';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/gallery" element ={<Gallery/>}/>
        <Route exact path="testimonial"/>
      </Routes>
    </div>
  );
}

export default App;
