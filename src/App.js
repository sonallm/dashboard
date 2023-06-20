import { useState } from 'react';
import './App.css';
import Game from './components/Game';

function Button1() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count+1);
  }
  return (
    <button onClick={handleClick}>Clicked {count} times</button>
  );
}

function Button2({bothCount, handleEitherClick}) {
  return (
    <button onClick={handleEitherClick}>Clicked {bothCount} times</button>
  );
}

function App() {
  const [bothCount, setBothCount] = useState(0);
  function handleEitherClick () {
    setBothCount(bothCount + 1)
  }

  return (
    <div className="App">
      <div className="Section">
        <h5>Counters that update separately</h5>
        <Button1/>
        <Button1/>
      </div>
      <div className="space"></div>
      <div className="Section">
        <h5>Counters that update together</h5>
        <Button2 bothCount={bothCount} handleEitherClick={handleEitherClick}/>
        <Button2 bothCount={bothCount} handleEitherClick={handleEitherClick}/>
      </div>
      <div className="space"></div>
      <div className="Section">
        <h5>Tic Tac Toe</h5>
        <Game/>
      </div>
    </div>
  );
}

export default App;
