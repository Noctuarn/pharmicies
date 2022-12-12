import React from "react";
import Card from "../card/Card"




function CardList(){

    
    const itemList = [
        {id: 1, name: 'Сімейна аптека',  street: 'Вулиця Мазепи'},
        {id: 2, name: 'Подорожник', street: 'Вулиця Пулюя'},
        {id: 3, name: 'Здорова сім`я', street: 'Вулиця Довга'},
        {id: 4, name: 'Подорожник',  street: 'Вулиця Коновальця'},
        {id: 5, name: 'Нова аптека', street: 'Вулиця Тичини'}
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