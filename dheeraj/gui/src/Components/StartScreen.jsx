import React,{useState} from 'react'
import './StartScreen.css'

function StartScreen({startGame, setName, name}) {

  return (
    <div className='startScreenWrapper'>
        <div className='heading'>Welcome to Rock, Paper and Scissor</div>
        <input
          className='input'
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className='main'  onClick={startGame} >
            <div className='startGame'>START GAME</div>
        </div>
    </div>
  )
}

export default StartScreen