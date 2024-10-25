import React from "react";
import { range } from "../../utils";
import { checkGuess } from "./../../game-helpers";

function LetterCell({ guess, answer }) {
  const validValue = guess ? guess : undefined;
  const result = checkGuess(validValue, answer);

  return (
    <p className="guess">
      {range(0, 5).map((_, i) => {
        const className = result ? result[i]?.status : "";
        return (
          <span key={i} className={`cell ${className}`}>
            {validValue ? validValue[i] : null}
          </span>
        );
      })}
    </p>
  );
}

export default LetterCell;
