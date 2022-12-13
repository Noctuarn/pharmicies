import React from "react";
import Map from "../../Components/map/Map";
import MapList from "../../Components/map-list/MapList";
import CardList from "../../Components/card-list/CardList";
import Footer from "../../Components/footer/Footer";
import './main.css';

function Main(){
    return (
        <div className="main"> 
            <div className='content'>
            <h2 className='content__title'>Аптеки Івано-Франківська</h2>
              <CardList/>
              <MapList/>
              <Footer/>
          </div>
    
          <Map/>
        </div>
    )
}

export default Main;