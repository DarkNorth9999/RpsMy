import React from "react"
import { useState } from "react"
import WelcomeScreen from "./WelcomeScreen"
import GameSequence from "./GameSequence"
import InfoIcon from "./InfoIcon"
import InformationCard from "./InformationCard"

export default function Home() {
  const [gameSequence, setGameSequence] = useState()
  const [userNameS, setUserNameS] = useState()
  const [showImage, setShowImage] = useState(false)

  const startGame = () => {
    setGameSequence(true)
  }

  function selectImage() {
    if (showImage === true) setShowImage(false)
    else setShowImage(true)
    console.log("its working")
  }

  return (
    <div>
      <header id="headContent">
        <h1>Rock Paper Scissors Game</h1>
        <div>
          {showImage && <InformationCard></InformationCard>}
          <InfoIcon
            isSelected={showImage}
            showImage={() => selectImage()}
          ></InfoIcon>
        </div>
      </header>
      {!gameSequence ? (
        <div>
          {/* Welcome Screen */}
          <div className="centered-div">
            <div id="rps-logoDiv">
              <img
                id="rps-logo"
                src="RPSLogo.png"
                alt="Rock Paper Scissors Logo Here"
              ></img>
            </div>
          </div>
          <br />
          <div className="centered-div">
            <div>
              <h3>
                <pre>Enter your Name: </pre>
              </h3>
            </div>
            <input
              className="input"
              type="text"
              value={userNameS}
              onChange={(e) => setUserNameS(e.target.value)}
            ></input>
          </div>
          <WelcomeScreen startGame={() => startGame()} />
        </div>
      ) : (
        <GameSequence userName={userNameS} setUserName={setUserNameS} />
      )}
    </div>
  )
}
