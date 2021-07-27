import React, { useState, useEffect } from 'react';
import ChartConfig from './ChartConfig';

const App = () => {
  const [gender, setGender] = React.useState([]);
  const [age, setAge] = React.useState([]);
  const [location, setLocation] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const endpoint = "data.json";

  const myData = () => {
  // make AJAX request to JSON object
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        setGender(data.profiles[0]);
        setAge(data.profiles[1]);
        setLocation(data.profiles[2]);
        setLoading(false);
      });
  };
  
  // run myData function with initial render only
  React.useEffect(() => {
    myData();
  }, []);
  
  if (loading === true) {
    return <p>Loading...</p>;
  }
  
  return (
    <div>
      <ChartConfig data={gender}/>
      <ChartConfig data={age}/>
      <ChartConfig data={location}/>
    </div>
  );
}

export default App;