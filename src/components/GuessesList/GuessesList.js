import React from "react";

function GuessesList({ guessesList }) {
  return (
    <div class="guess-results">
      {guessesList.map((guess) => {
        return (
          <p key={guess.id} className="guess">
            {guess.value}
          </p>
        );
      })}
    </div>
  );
}

export default GuessesList;
