import './stylings/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Learn from './page/Learn';
import Login from './page/Login';
import Navbar from './page/Navbar';
import Error from './page/Error';
import Instant from './page/Instant';
import Started from './page/Started';
import Buy from './page/Buy';
import Sell from './page/Sell';
import Individual from './page/Individual';
import Business from './page/Business';
import Mailing from './page/Mailing';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
          <Routes>
            <Route index element={<Home/>} />
            <Route path='instant' element={<Instant/>} />
            <Route path='learn' element={<Learn/>} />
            <Route path='login' element={<Login/>}/>
            <Route path='started' element={<Started/>}/>
            <Route path='buy' element={<Buy/>}/>
            <Route path='sell' element={<Sell/>}/>
            <Route path='individual' element={<Individual/>}/>
            <Route path='business' element={<Business/>}/>
            <Route path='mailing' element={<Mailing/>}/>
            
            <Route path='*' element={<Error/>} />
          </Routes>
      </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;
