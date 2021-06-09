import './App.css';
import React, { useReducer } from 'react';

function App() {
  const operators = ['+', '-', 'x', '÷'];

  /*
    State = {
      input : string,
      decimalAdded : bool
    }

    ActionInput = {
      type : "InputChange" | "InputAdd"  // po tym rozróżnia się w reducerze
      input : string,
      decimalAdded : bool
    }
  */
  const [state, dispatch] = useReducer((oldState, action) => {
    switch (action.type) {
      case "InputChange":
        return { ...oldState
               , input: action.input
               , decimalAdded: action.decimalAdded
               }
      case "InputAdd":
        return { ...oldState
               , input: oldState.input + action.input
               , decimalAdded: action.decimalAdded
              }
      default: return oldState
    }
  }, { input: "", decimalAdded: false })

  // Char -> ReactEvent -> Void
  const onCommonClick = keyVal => e => {
    e.preventDefault()
    // Dodajcie jakąś tam logikę i ostatniego ifa z cal i "-"
    const decimalAdded = keyVal === '.'; // nie wiem, jak tu zmieniacie
    dispatch({
      type: "InputAdd",
      input: keyVal,
      decimalAdded
    })
  }

  // ReactEvent -> Void
  const onClearClick = e => {
    e.preventDefault()
    dispatch({
      type: "InputChange",
      input: "",
      decimalAdded: false
    })
  }

  // ReactEvent -> Void
  const onCalcClick = e => {
    e.preventDefault()

    var equation = state.input;
    var lastChar = equation[equation.length - 1];

    // Replace all instances of x and ÷ with * and / respectively. This can be done easily using regex and the 'g' tag which will replace all instances of the matched character/substring
    equation = equation.replace(/x/g, '*').replace(/÷/g, '/');

    // Final thing left to do is checking the last character of the equation. If it's an operator or a decimal, remove it
    if(operators.indexOf(lastChar) > -1 || lastChar == '.')
      equation = equation.replace(/.$/, '');

    if(equation)
      dispatch({
        type: "InputChange",
        input: String(eval(equation)),
        decimalAdded: state.decimalAdded
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Dominik Kaczorkiewicz</p>
        <p>105733</p>
        <p>grupa 2</p>
        </header>
        <header className="App-kalkulator">
              <div id="calculator">
        {/* Screen and clear key */}
        <div className="top">
          <span className="clear" onClick={onClearClick}>C</span>
          <div className="screen">{state.input}</div>
        </div>
        <div className="keys">
        {/* operators and other keys */}
          <span onClick={onCommonClick('7')}>7</span>
          <span onClick={onCommonClick('8')}>8</span>
          <span onClick={onCommonClick('9')}>9</span>
          <span className="operator" onClick={onCommonClick('+')}>+</span>
          <span onClick={onCommonClick('4')}>4</span>
          <span onClick={onCommonClick('5')}>5</span>
          <span onClick={onCommonClick('6')}>6</span>
          <span className="operator" onClick={onCommonClick('-')}>-</span>
          <span onClick={onCommonClick('1')}>1</span>
          <span onClick={onCommonClick('2')}>2</span>
          <span onClick={onCommonClick('3')}>3</span>
          <span className="operator" onClick={onCommonClick('/')}>÷</span>
          <span onClick={onCommonClick('0')}>0</span>
          <span onClick={onCommonClick('.')}>.</span>
          <span className="eval" onClick={onCalcClick}>=</span>
          <span className="operator" onClick={onCommonClick('x')}>x</span>
        </div>
      </div>
        </header>

    </div>
  );
}



export default App;
