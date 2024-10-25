import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessesList from "../GuessesList";
import GuessInput from "./GuessInput/GuessInput";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessesList, setGuessesList] = React.useState([]);

  function addGuesses(word) {
    setGuessesList([...guessesList, { value: word, id: Math.random() }]);
  }

  return (
    <>
      <GuessesList guessesList={guessesList} answer={answer} />
      <GuessInput addGuesses={addGuesses} />
    </>
  );
}

export default Game;
