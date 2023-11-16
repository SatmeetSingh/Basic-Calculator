import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  function inputValue(value) {
    setInput((prevInput) => prevInput + value);
  }

  const handleCalculated = () => {
    try {
      const calculatedResult = Function(
        '"use strict"; return (' + input + ")"
      )();
      setResult(calculatedResult.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div>
      <Input input={input} setinput={setInput} result={result} />
      <Button
        inputValue={inputValue}
        handleClear={handleClear}
        handleCalculated={handleCalculated}
      />
    </div>
  );
}

export default App;
