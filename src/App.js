import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import {HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import YesPage from './yes'; 
import NoPage from './no';  


function App() {
const [count,setCount] = React.useState(0);
const[questionNumber, setQuestionNumber] = React.useState(0);
const questions = [
  "Are you cold?",
  "Would you?",
  "Yes/No?",
];

const [socketUrl] = React.useState('ws://192.46.211.58:60001');
const { lastMessage, sendJsonMessage } = useWebSocket(socketUrl);

  const handleIncrement = () => {
    setCount(prvObj=>prvObj+1);
  }

  const handleDecrement = () =>{
    setCount(prvObj=>prvObj-1);
  }
  
  const handleSendData = (message) => {
    const dataToSend = {
      message: message,
    };
    sendJsonMessage(dataToSend);
  };

  useEffect(() => {
    if (lastMessage !== null) {
      console.log(lastMessage);
      setQuestionNumber(prevQuestionNumber => prevQuestionNumber + 1);
    }
  }, [lastMessage]);

  
  return (
    <Router basename='/'>
    <div className="App">
      <Routes>
        <Route
            path='/'
            element={
              <div>
                <h1>Your Count is {count}</h1>
                <h1>{questions[questionNumber]}</h1>
                <button onClick={handleIncrement}>ADD</button>
                <button onClick={handleDecrement}>MINUS</button>
              </div>
            }
          />
        <Route path="/yes" element ={<YesPage handleSendData={handleSendData}  />}>
        </Route>
        <Route path="/no" element ={<NoPage handleSendData={handleSendData} />}>
        </Route>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
