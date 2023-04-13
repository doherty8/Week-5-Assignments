import React, { useState } from "react";
import './App.css';

const Calculator = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleDigitClick = (digit) => {
    setExpression((prevExpression) => prevExpression + digit);
  };

  const handleOperationClick = (operator) => {
    const lastChar = expression.slice(-1);
    if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
      setExpression((prevExpression) => prevExpression.slice(0, -1) + operator);
    } else {
      setExpression((prevExpression) => prevExpression + operator);
    }
  };
  

  const handleEqualsClick = () => {
    try {
      const answer = eval(expression);
      setResult(answer);
    } catch (error) {
      setResult("Invalid expression");
    }
  };

  const handleClearClick = () => {
    setExpression("");
    setResult("");
  };

  return (
    <div className="calculator">
      <div className="calcContainer">
      <div className="display">{result || expression || "0"}</div>
      <div className="buttons">
        <div className="buttons1">
        <button onClick={() => handleDigitClick("7")}>7</button>
        <button onClick={() => handleDigitClick("8")}>8</button>
        <button onClick={() => handleDigitClick("9")}>9</button>
        <button onClick={() => handleOperationClick("+")}>+</button>
        </div>
        <div className="buttons2">
        <button onClick={() => handleDigitClick("4")}>4</button>
        <button onClick={() => handleDigitClick("5")}>5</button>
        <button onClick={() => handleDigitClick("6")}>6</button>
        <button onClick={() => handleOperationClick("-")}>-</button>
        </div>
        <div className="buttons3">
        <button onClick={() => handleDigitClick("1")}>1</button>
        <button onClick={() => handleDigitClick("2")}>2</button>
        <button onClick={() => handleDigitClick("3")}>3</button>
        <button onClick={() => handleOperationClick("*")}>*</button>
        </div>
        <div className="buttons4">
        <button onClick={() => handleDigitClick("0")}>0</button>
        <button onClick={() => handleOperationClick("/")}>/</button>
        <button onClick={handleClearClick}>C</button>
        <button onClick={handleEqualsClick}>=</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Calculator;
