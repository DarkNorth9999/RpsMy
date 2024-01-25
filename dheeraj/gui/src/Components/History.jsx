import React,{useState} from 'react'
import './History.css'


function History({userScore, computerScore , historyArray}) {

   const [historyInfoArray, setHistoryInfoArray] = useState(["Computer Won!", "User Won!", "It was a tie!"]);

   const SingleHistory = ({singleGame, index}) => {

     return (
        <div className='singleHistoryWrapper'>
            <div className='singleHistoryIndex'>{index+1}. </div>
            <div>{historyInfoArray[singleGame]}</div>
        </div>
     )
   }

  return (
    <div className='history-container'>
        <div className='historyTitle'> History</div>

        <div className='historyScoreContainer'>
          <div className='historyScoreContainerLeft'>
            <div className='yourScore'>Your Score</div>
            <div className='yourScoreNumber'>{userScore}</div>
          </div>

          <div className='historyScoreContainerLeft'>
            <div className='yourScore'>Computer's Score</div>
            <div className='yourScoreNumber'>{computerScore}</div>
          </div>
        </div>

        <div>
            {
                historyArray.map((singleGame, index) => (
                    <SingleHistory key={index} singleGame={singleGame} index={index} />
                ))
            }
        </div>
    </div>
  )
}

export default History