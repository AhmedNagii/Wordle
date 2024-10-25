import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import LetterCell from "../LetterCell/LetterCell";

function GuessesList({ guessesList, answer }) {
  return (
    <div class="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((_, index) => {
        const value = guessesList[index] ? guessesList[index].value : "";
        return <LetterCell key={index} guess={value} answer={answer} />;
      })}
    </div>
  );
}

export default GuessesList;
