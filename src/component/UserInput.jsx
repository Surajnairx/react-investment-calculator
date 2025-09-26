import { useState } from "react";
const UserInput = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 2000,
    expectedReturn: 8,
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
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input
            type="number"
            name="initialInvestment"
            value={userInput.initialInvestment}
            required
            onChange={(e) => handleChange("initialInvestment", e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            required
            onChange={(e) => handleChange("annualInvestment", e.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Expected Return</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            required
            onChange={(e) => handleChange("expectedReturn", e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            value={userInput.duration}
            required
            onChange={(e) => handleChange("duration", e.target.value)}
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
