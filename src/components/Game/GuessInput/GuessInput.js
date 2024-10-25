import React, { useState } from "react";

export default function GuessInput({ addGuesses, isDisabled }) {
  const [inputVal, setInputVal] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addGuesses(inputVal);
        setInputVal("");
      }}
      className="guess-input-wrapper"
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        value={inputVal}
        pattern=".{5,}"
        minLength={5}
        maxLength={5}
        onChange={(e) => {
          setInputVal(e.target.value.toUpperCase());
        }}
        id="guess-input"
        type="text"
        title="Input must be at least 5 characters long"
        disabled={isDisabled}
        required
      />
    </form>
  );
}
