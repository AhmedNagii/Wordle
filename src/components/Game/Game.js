import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessesList from "../GuessesList";
import GuessInput from "./GuessInput/GuessInput";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [guessesList, setGuessesList] = React.useState([]);
  const [gameResult, setGameResult] = React.useState(null);
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
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
  console.info({ answer });

  return (
    <>
      {gameResult !== null && (
        <button
          onClick={() => {
            setGuessesList([]);
            setGameResult(null);
            setAnswer(sample(WORDS));
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
