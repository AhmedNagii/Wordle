import React, { useState } from "react";

export default function InputFom() {
  const [inputVal, setInputVal] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
         setInputVal("");
      }}
      class="guess-input-wrapper"
    >
      <label for="guess-input">Enter guess:</label>
      <input
        value={inputVal}
        pattern=".{5,}"
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
        id="guess-input"
        type="text"
        title="Input must be at least 5 characters long"
        required
      />
    </form>
  );
}
