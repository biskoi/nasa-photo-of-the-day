import React, {useState, useEffect} from "react";
import "./App.css";
import PhotoContainer from './PhotoContainer';
import Axios from 'axios';
// import dummyData from './dummydata';

function App() {

  const date = new Date();
  const today = date.getDate();
  const [day, setDay] = useState(today);
  const [item, setItem] = useState([]);

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

      <h1>Nasa Photo of the Day</h1>
      <PhotoContainer data = {item} />

      <div>
        <button onClick = {() => photoHandler(0)}>Previous Photo</button>
        <button onClick = {() => photoHandler(1)}>Next Photo</button>
      </div>

    </div>
  );

}

export default App;
