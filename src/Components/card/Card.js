import React from "react";
import './card.css';


function Card(){
    return(
     <div className='card'>
      <div className="description">
        <h3>Назва аптеки</h3>
        <p>вулиця</p>
      </div>
      <div className="buttons">
        <button className="more btn">Дізнатися більше</button>
        <button className="selected btn">В збереженне</button>
      </div>
     </div> 
    )
}

export default Card;