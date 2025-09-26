import { useState } from "react";
import Header from "./component/Header";
import UserInput from "./component/UserInput";
import Results from "./component/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  function handleChange(inputIdentifier, value) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +value,
      };
    });
  }
  const inputIsValid = userInput.duration >= 1;
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && <p className="center">Enter a Valid Duration</p>}
      {inputIsValid && <Results userInput={userInput} />}
    </>
  );
}

export default App;
