import { useState } from "react";
import Header from "./component/Header";
import UserInput from "./component/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 2000,
    expectedReturn: 6,
    duration: 10,
  });
  function handleChange(inputIdentifier, value) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: value,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
    </>
  );
}

export default App;
