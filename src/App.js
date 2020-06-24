import React, {useState} from 'react';
import './App.css';
import {Message} from './Message.js'

function App() {
  let [count,setCount] = useState(0)
  let [isNight,setNight] = useState(true)

  return (
    <div className={` ${isNight ? 'boxlight' : 'box'}`}>
      <h1>Is Night : {isNight ? 'true':'False'}</h1>
      <Message className="message" counter={count} />
      <br/>
      <button onClick={()=> setCount(++count)}>UPDATE</button>
      <button onClick={()=>setNight(!isNight)}>UPDATE DAY STATUS</button>
    </div>
  );
}

export default App

