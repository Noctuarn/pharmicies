import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import CardList from './Components/card-list/CardList';
import Map from './Components/map/Map';
import MapList from './Components/map-list/MapList';
import About from './Pages/about/About';
import Selected from './Pages/selected/Selected';
import Main from './Pages/main/Main';

function App() {
  return (
    <div className="App">

     <div className='menu'>
        <Header/>
     </div>

      <div>
      <Routes>
        <Route path='/main' element = {<Main/>}/> 
        <Route path='/about' element = {<About/>}/>
        <Route path='/selected' element = {<Selected/>}/> 
      </Routes>

      {/* <div className='content'>
        <h2 className='content__title'>Аптеки Івано-Франківська</h2>
          <CardList/>
          <MapList/>
          <Footer/>
      </div>

      <Map/> */}

      </div>

      
    </div>
  );
}

export default App;
