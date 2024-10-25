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
  const [gameResult, setGameResult] = React.useState(null);
  function addGuesses(word) {
    const newList = [...guessesList, { value: word, id: Math.random() }];
    const finalRes =
      word === answer
        ? "CORRECT"
        : newList.length === 6 && gameResult === null
        ? "WRONG"
        : null;
    setGameResult(finalRes);
    setGuessesList(newList);
  }

  return (
    <>
      {gameResult !== null && (
        <button
          onClick={() => {
            setGuessesList([]);
            setGameResult(null);
          }}
          className={"restart-Btn"}
        >
          Restart
        </button>
      )}
      <GuessesList guessesList={guessesList} answer={answer} />
      <GuessInput addGuesses={addGuesses} isDisabled={gameResult !== null} />
      {gameResult === "CORRECT" && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>{guessesList.length} guesses</strong>.
          </p>
        </div>
      )}{" "}
      {gameResult === "WRONG" && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default Game;
