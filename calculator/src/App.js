import './App.css';
import { useState } from 'react';

function App() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  }

  const clear = () => {
    setResult("")
  }

  const back = () => {
    setResult(result.slice(0, result.length - 1));
  }

  const calculated = () => {
    try{
      setResult(eval(result).toString());
    } catch(err) {
      setResult("Error");
    }
  }
  return (
    <div>
      <h1>CALCULATOR</h1>
      <div className="container">
        <form>
          <input type="text" value={result}/>
        </form>
        <div className='keybutton'>
          <div className='row1'>
            <button onClick={clear} id="clear" >Clear</button>
            <button onClick={back} id="back" >C</button>
            <button name="/" onClick={handleClick}>/</button>
          </div>
          <div className='row2'>
            <button name="7" onClick={handleClick}>7</button>
            <button name="8" onClick={handleClick}>8</button>
            <button name="9" onClick={handleClick}>9</button>
            <button name="*" onClick={handleClick}>*</button>
          </div>
          <div className='row3'>
            <button name="4" onClick={handleClick}>4</button>
            <button name="5" onClick={handleClick}>5</button>
            <button name="6" onClick={handleClick}>6</button>
            <button name="-" onClick={handleClick}>-</button>
          </div>
          <div className='row4'>
            <button name="1" onClick={handleClick}>1</button>
            <button name="2" onClick={handleClick}>2</button>
            <button name="3" onClick={handleClick}>3</button>
            <button name="+" onClick={handleClick}>+</button>
          </div>
          <div className='row5'>
            <button name="0" onClick={handleClick}>0</button>
            <button name="." onClick={handleClick}>.</button>
            <button onClick={calculated} id="result">=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
