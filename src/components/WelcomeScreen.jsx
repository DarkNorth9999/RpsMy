import React from "react"

export default function WelcomeScreen({ startGame }) {
  return (
    <div onClick={startGame}>
      <section id="gameChoices">
        <menu>
          <div id="rps-logoDiv">
            <img
              id="rps-logo"
              src="RPSLogo.png"
              alt="Rock Paper Scissors Logo Here"
            ></img>
          </div>
          <button class="inBlockElement">Start Game</button>
        </menu>
      </section>
    </div>
  )
}
