import React from 'react';
import {useEffect, useState} from 'react';
import "./index.css";

export default function App() {
  const [value, setValue] = useState();
  const [isinit, setInit] = useState();

  useEffect(() => {
    fetch("https://thefunkiestapiv999.azurewebsites.net/api/getscore?name=Harold", {
      method: "GET"
    })
    .then((res) => res.json())
    .then((res) => {
      setInit(true);
      setValue(res.data)
    })
  }, []);

  useEffect(() => {
    if (isinit === true) {
      fetch("https://thefunkiestapiv999.azurewebsites.net/api/updatescore?name=Harold", {
        method: "GET"
      })
      .then((res) => res.json())
      .then((res) => {
        setValue(res.data)
      });        
    }
  }, [value]);

  const increment = () => {
    console.log ("Increment Click");
    setValue(value + 1);
  };

  const decrement = () => {
    console.log ("Decrement Click");
    //setValue(value - 1);
  };

  const Button = (props) => {
    return <button onClick={props.handleClick}>{props.children}</button>
  }

  return (
    <div className='App'>    
      <h2>Hello! value {value}</h2>
      <Button handleClick={decrement}>Decrement</Button>
      <Button handleClick={increment}>Increment</Button>
    </div>
  )
}
