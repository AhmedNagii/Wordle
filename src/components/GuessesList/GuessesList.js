import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessesList({ guessesList }) {
  return (
    <div class="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((_, index) => {
        return (
          <p key={index} class="guess">
            {range(0, 5).map((_, i) => {
              const currentWord = guessesList[index];
              const letter = currentWord ? currentWord.value[i] : "";
              return (
                <span key={i} className="cell">
                  {letter}
                </span>
              );
            })}
          </p>
        );
      })}
    </div>
  );
}

export default GuessesList;
