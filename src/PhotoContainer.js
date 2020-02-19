import React from 'react';
import './PhotoContainer.css';

function PhotoContainer(props) {

    return (

        <div>
            <h3>{props.data.title}, {props.data.date}</h3>
            <img src = {props.data.url} alt = 'A certain celestial body'/>
            <p>{props.data.explanation}</p>
        </div>

    )

    
}

export default PhotoContainer;