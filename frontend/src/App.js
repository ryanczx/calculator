import { useState } from 'react';

function App() {

  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [result, setResult] = useState(0);
  
  function handleClick(type) {
    const body = "type" + "=" + type + "&" 
    + "firstNumber" + "=" + (firstNumber ? firstNumber : 0) + "&"
    + "secondNumber" + "=" + (secondNumber ? secondNumber: 0);

    fetch("http://localhost:5000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body
    }).then((res, req) => res.json()).then((data) => {setResult(data.result)});
  }

  function changeFirstNumber(event) {
    setFirstNumber(event.target.value);
  }

  function changeSecondNumber(event) {
    setSecondNumber(event.target.value);
  }

  return (
    <div>
        <input 
          data-testid={"firstInput"}
          onChange={changeFirstNumber}
          value={firstNumber} />

        <input
          data-testid={"secondInput"}
          onChange={changeSecondNumber}
          value={secondNumber} />

        <button data-testid={"add"} onClick={() => handleClick("add")}>Add</button>

        <button onClick={() => handleClick("subtract")}>Subtract</button>

        <p data-testid={"result"}>{"result: " + result}</p>
    </div>
  );
}

export default App;
