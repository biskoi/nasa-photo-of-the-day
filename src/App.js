import React, {useState, useEffect} from "react";
import "./App.css";
import PhotoContainer from './PhotoContainer';
import Axios from 'axios';
import dummyData from './dummydata';

function App() {

  const date = new Date();
  const today = date.getDay();
  console.log(`the date is ${date} and today is ${today}`);
  const [day, setDay] = useState(today);
  const [item, setItem] = useState(dummyData)


  useEffect(() => {
      Axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2020-02-${day}`)
      .then(res => {setItem(res.data)})
      .catch(err => {console.log('Fetch failed. ' + err)})
  }, [])

  function previousPhoto() {
    setDay(day - 1);
    console.log(day);
}



  return (
    <div className="App">
      <h1>Nasa Photo of the Day</h1>
      <PhotoContainer data = {item} />
      <button onClick = {() => previousPhoto()}>Previous Photo</button>
    </div>
  );
}

export default App;
