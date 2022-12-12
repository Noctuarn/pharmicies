import React from "react";
import slidePhoto1 from '../../Image/family.jpg';
import './map-component.css';

function MapComponent (props){

    return(
        <div className="elem_content">
            <div className="article">
                <img src={props.imgurl} alt = "Аптека"/>
                <h2 className="title">{props.title}</h2>
                <p>Знаходиться на вулицях: <br/> <span> {props.street} </span></p>
                <p>{props.description}</p>
            </div>
        </div>
    )

}

export default MapComponent;