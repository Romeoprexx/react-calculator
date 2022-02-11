import { useState } from 'react';

import './style.css'

function App() {
  
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const logicalOperators = ["!", "+", "-", "=", "*", ".", "/", "%"];

  const updateCalcInfo = value => {
   
    if (
      (logicalOperators.includes(value) && calc === "") ||
      (logicalOperators.includes(value) && logicalOperators.includes(calc.slice(-1)))
    ) {
        return;
      
    }

    setCalc(calc + value);

    if (!logicalOperators.includes(value)) {
      setResult(eval(calc + value).toString())
    }


    

  }

  const equalTo  = () => {
    setCalc(eval(calc).toString());
  }

  const backSpace = () => {
    if (calc === "") {
      return;
    }
  

    const value = calc.slice(0, -1);

    setCalc(value);
  }

  const clearData = ()=> {
    setCalc(calc === 0);
    setResult(result === 0)
  }
  
    return (
    <div className="App">
       <div className="calculator-row">
       <div className="output">
           <div className="upperOperator">{calc || "0"}</div>
           <div className="lowerOperator">{result || "0"}</div>
        </div>
        <div className="buttons">
          <button className="symbol" onClick={()=> updateCalcInfo("%")}>%</button>
          <button className="symbol" onClick={()=> updateCalcInfo("!")}>!</button>
          <button className="symbol" onClick={clearData}>AC</button>
          <button className="symbol" onClick={backSpace}>DEL</button>
          <button className="num" onClick={()=> updateCalcInfo(7)}>7</button>
          <button className="num"onClick={()=> updateCalcInfo(8)}>8</button>
          <button className="num"onClick={()=> updateCalcInfo(9)}>9</button>
          <button className="symbol" onClick={()=> updateCalcInfo("/")}>÷</button>
          <button className="num" onClick={()=> updateCalcInfo(4)}>4</button>
          <button className="num" onClick={()=> updateCalcInfo(5)}>5</button>
          <button className="num" onClick={()=> updateCalcInfo(6)}>6</button>
          <button className="symbol" onClick={()=> updateCalcInfo("*")}>×</button>
          <button className="num" onClick={()=> updateCalcInfo(1)}>1</button>
          <button  className="num" onClick={()=> updateCalcInfo(2)}>2</button>
          <button className="num" onClick={()=> updateCalcInfo(3)}>3</button>
          <button className="symbol" onClick={()=> updateCalcInfo("-")}>-</button>
          <button className="num"onClick={()=> updateCalcInfo(0)}>0</button>
          <button className="symbol" onClick={()=> updateCalcInfo(".")}>.</button>
          <button className="symbol1" onClick={equalTo}>=</button>
          <button className="symbol" onClick={()=> updateCalcInfo("+")}>+</button>
        </div>
       </div>
       <div><h4>Designed by Deno's Romeo Acuity</h4></div>
    </div>
  
  );
}

export default App;
