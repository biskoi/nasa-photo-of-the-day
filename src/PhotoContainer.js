import React from 'react';
import './PhotoContainer.css';
import {CardImg as ReactCard, CardText as ReactCardText, CardBody, CardTitle as ReactTitle, CardSubtitle,} from 'reactstrap';
import styled from 'styled-components';

const CardImg = styled(ReactCard)`
width: 40%;
margin: 3%;
border: solid white 1px;

    @media (max-width: 500px) {
        width: 90%;
    }

`;

const CardTitle = styled(ReactTitle)`
margin-top: 1%;
width: 100%;

@media (max-width: 500px){
    font-size: 1.3rem;
}

`;

const CardText = styled(ReactCardText)`
margin: auto;

    @media (max-width: 500px) {
        text-align: justify;
        width: 90%;
    }

`;

function PhotoContainer(props) {

    return (

        <div className = 'photoContainer'>
            <CardTitle tag = 'h2'>{props.data.title}, {props.data.date}</CardTitle>
            <CardImg src = {props.data.url} alt = 'A certain celestial body'/>
            <CardText>{props.data.explanation}</CardText>
        </div>

    )

    
}

export default PhotoContainer;