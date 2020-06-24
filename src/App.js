import React, {useState} from 'react';
import './App.css';
import {Message} from './Message.js'

function App() {
  let [count,setCount] = useState(0)
  let [isNight,setNight] = useState(true)

  return (
    <div className={`${isNight ? 'boxlight':'box'}`}>
      <h1>Its Night : {isNight ? 'true' : 'False'}</h1>
      <Message counter={count} />
      <button onClick={()=> setCount(++count)}>UPDATE COUNTER</button>
      <button onClick={()=> setNight(!isNight)} >UPDATE NIGHT STATUS</button>
    </div>
  );
}

export default App

