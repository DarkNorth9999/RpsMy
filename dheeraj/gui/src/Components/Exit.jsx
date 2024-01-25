import React from 'react'
import './Exit.css'
import './StartScreen.css'


function Exit({userScore, computerScore, name, setIsGameOn}) {

    let resultInfo;
    if(userScore > computerScore) resultInfo = <div>Congratulations! {name} Won by {userScore - computerScore}</div>
    else if(userScore < computerScore) resultInfo = <div>Computer Won by {computerScore - userScore}</div>
    else if(userScore == computerScore) resultInfo = <div>Scores are Tie.</div>

  return (
    <div className='exitContainer'>
        <div>
            <div className='resultScoreContainer'>
            <div className='historyScoreContainerLeft'>
                <div className='yourScore'>{name}'s Score</div>
                <div className='yourScoreNumber'>{userScore}</div>
            </div>
            

            <div className='historyScoreContainerLeft'>
                <div className='yourScore'>Computer's Score</div>
                <div className='yourScoreNumber'>{computerScore}</div>
            </div>
            </div>
        </div>

        <div className='resultInfo'>
            <div>{resultInfo}
            </div>
        </div>

        <div onClick={() => setIsGameOn(false)} >
            <div className='main' >
                <div className='startGame'>Play Again</div>
            </div>
        </div>
    </div>
  )
}

export default Exit