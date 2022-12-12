import React from "react";
import MapComponent from "../map-component/MapComponent";
import slidePhoto1 from '../../Image/family.jpg';


function MapList (){

    const itemList = [
        {id: 1, title: 'Сімейна аптека', imgurl: slidePhoto1, street: 'Мазепи, Пулюя, Шевченка', description: 'Ця аптека вже довгий час дарує для нас хороші ліки. Купуйте тут усе, ніколи не пошкодуєте'}
        
    ];




    return(
        
        itemList.map(item => {
         return (
              <MapComponent map={item} imgurl = {item.imgurl} title = {item.title} street = {item.street} description = {item.description} />
         );
      })
 
     )
}

export default MapList;