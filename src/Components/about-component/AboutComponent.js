import React from "react";
import './about-component.css'
import pharmPhoto1 from "../../Image/bg-photo.jpg"

function AboutComponent (props){
    return(
         <div className="about__content">
            <div className="about__title">
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
            </div>
            <img src={props.imgurl} alt="Головне фото"/>
        </div>
    )
}

export default AboutComponent;