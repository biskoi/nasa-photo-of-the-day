import React, {useState, useEffect} from "react";
import "./App.css";
import PhotoContainer from './PhotoContainer';
import Axios from 'axios';
import styled from 'styled-components';
import {Collapse, Navbar as ReactNavbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Card, Jumbotron as ReactJumbotron, Button as ReactButton, ButtonGroup as ReactButtonGroup} from 'reactstrap';
// import dummyData from './dummydata';

const Navbar = styled(ReactNavbar)`
justify-content: space-evenly;
`;

const PhotoCard = styled(Card)`
padding: 1% 0;
  background-color: black;
  color: white;

  @media (max-width: 500px) {
    padding: 5% 0;
  }

`;

const Button = styled(ReactButton)`
margin: 2% 0;
`;

const Jumbotron = styled(ReactJumbotron)`
background: black;
color: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0;
margin: 2% 2%;
border-bottom: solid 1px grey;

  @media (max-width: 500px) {

    padding: 5% 0;

    h1{
      font-size: 2rem;
    }

    p{
      font-size: 1rem;
      text-align: center
    }
  }

`;

const NavImg = styled.img`
width: 3.5rem;
margin: 0;
`;

const ButtonGroup = styled(ReactButtonGroup)`
width: 30%;
margin-top: 2%;

  Button{
    width: 50%;
    border-radius: 20px;
  }

  p{
    margin: 0.5%;
  }

  @media (max-width: 500px) {
    width: 80%;
  }

`;

function App() {

  const date = new Date();
  const today = date.getDate();
  const [day, setDay] = useState(today);
  const [item, setItem] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
      Axios.get(`https://api.nasa.gov/planetary/apod?api_key=tPqDzEjAJP8NZZruR315gRAp8E4u1Y5EjirNk2Hb&date=2020-02-${day}`)
      .then(res => {setItem(res.data)})
      .catch(err => {alert('Fetch failed. ' + err)})
      console.log('API called.');
  }, [day])


  useEffect(() => {
    console.log(`requested day: ${day} today's date: ${today}`);
  }, [item])

  function photoHandler(arg) {
    if (arg === 0)  {
      setDay(day - 1);
    } else {
      setDay(day + 1);
    } 

    console.log(`button ${arg} clicked`);

  }

  return (
    <div className="App">

        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="https://www.nasa.gov/"><NavImg src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1280px-NASA_logo.svg.png'/></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="https://biskoi.github.io/site">My Website</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.nasa.gov/">NASA Actual</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Don't
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Theres
                  </DropdownItem>
                  <DropdownItem>
                    Nothing
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Here
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>

        <Jumbotron>
        <h1 className="display-3">Picture of the Day</h1>
        <p className="lead">Each day, a new image will be shown here. You can also press the buttons below the image to look at past images.</p>
      </Jumbotron>

      <div className = 'PhotoContainer' id = 'PhotoContainer'>

        <PhotoCard>
        <PhotoContainer data = {item}/>
        <div className = 'buttons'>
          <ButtonGroup>
          <Button color = 'secondary' onClick = {() => photoHandler(0)}>Left</Button>
          <p/>
          <Button color = 'secondary' onClick = {() => photoHandler(1)}>Right</Button>
          </ButtonGroup>
        </div>
        </PhotoCard>

      </div>

    </div>
  );

}

export default App;
