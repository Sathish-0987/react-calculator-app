
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calculator from './component/Calculator';
import './component/calc.css'
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';

function App() {
  return (
    <div className="App">
      <Calculator/>
      {/* <BrowserRouter>
      <Navbar/>
       <Routes>
        <Route path='/' element={<><Home/><About/><Contact/></>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
       </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
