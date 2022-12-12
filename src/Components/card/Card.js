import React, {useState} from "react";
import './card.css';


function Card(props){


    const [buttonText, setButtonText] = useState('Дізнатися більше');
    const [buttonVariant, setButtonVariant] = useState('');

    const [buttonText2, setButtonText2] = useState('У вибране');
    const [buttonVariant2, setButtonVariant2] = useState('');


    const MoreAbout = () => {
      alert("Цю функцію необхідно реалізувати");
  }

  const ToSelected = () => {
      setButtonText2('Готово');
      setButtonVariant2('danger');
  }


    return(
     <div className='card'>
      <div className="description">
        <h3>{props.name}</h3>
        <p>{props.street}</p>
      </div>
      <div className="buttons">
        <button className="more btn" onClick={MoreAbout}>{buttonText}</button>
        <button className="selected btn" onClick={ToSelected}>{buttonText2}</button>
      </div>
     </div> 
    )
}

export default Card;