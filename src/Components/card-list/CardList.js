import React from "react";
import Card from "../card/Card"

import img1 from '../../Image/family.jpg';


function CardList(){

    
    const itemList = [
        {id: 1, name: 'Сімейна аптека', imgurl: img1, street: 'Вулиця Мазепи'},
        {id: 2, name: 'Подорожник', imgurl: img1, street: 'Вулиця Пулюя'},
        {id: 3, name: 'Здорова сім`я', imgurl: img1, street: 'Вулиця Довга'},
        {id: 4, name: 'Подорожник', imgurl: img1, street: 'Вулиця Коновальця'},
        {id: 5, name: 'Нова аптека', imgurl: img1, street: 'Вулиця Тичини'}
    ];



    return(
        
       itemList.map(item => {
        return (
             <Card card={item} key={item.id} name = {item.name} street = {item.street} />
        );
     })

    )
}

export default CardList;