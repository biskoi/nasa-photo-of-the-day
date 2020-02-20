import React from 'react';
import './PhotoContainer.css';
import {CardImg as ReactCard, CardText as ReactCardText, CardBody, CardTitle as ReactTitle, CardSubtitle,} from 'reactstrap';
import styled from 'styled-components';

const CardImg = styled(ReactCard)`
width: 50%;
margin: 3%;
border: solid white 1px;
`;

const CardTitle = styled(ReactTitle)`
margin-top: 1%;
`;

const CardText = styled(ReactCardText)`
margin: 0 10%;
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