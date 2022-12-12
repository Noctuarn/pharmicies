import './App.css';
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import CardList from './Components/card-list/CardList';
import Map from './Components/map/Map';
import MapList from './Components/map-list/MapList';

function App() {
  return (
    <div className="App">

     
      <Header/>

      <div className='main'>

      <div className='content'>
        <h2 className='content__title'>Аптеки Івано-Франківська</h2>
          <CardList/>
          <MapList/>
          <Footer/>
      </div>

      <Map/>

      </div>

      
    </div>
  );
}

export default App;
