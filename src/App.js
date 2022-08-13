import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import AllCountries from './pages/AllCountries';
import DeatilCountry from './pages/DeatilCountry';

function App() {
  return (
    <div className="App">
<BrowserRouter>
<Routes>
  <Route path="/" element= {<AllCountries/>}/>
  <Route path="/name/:name" element= {<DeatilCountry/>}/>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
