import React from "react"
import { useState } from "react"
import WelcomeScreen from "./WelcomeScreen"
import GameSequence from "./GameSequence"
import Info from "./Info"

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
          {/* <Info setShowImage={setShowImage} isSelected={showImage}></Info> */}
        </div>
      </header>
      {!gameSequence ? (
        <div>
          <WelcomeScreen startGame={startGame} />
          <input
            className="input"
            type="text"
            value={userNameS}
            onChange={(e) => setUserNameS(e.target.value)}
          ></input>
        </div>
      ) : (
        <GameSequence userName={userNameS} setUserName={setUserNameS} />
      )}
    </div>
  )
}
