import React from 'react'
import rock from '../Images/rock.png'
import paper from '../Images/paper.png'
import scissor from '../Images/scissor.png'

function ComputerChoiceImage({computerChoice}) {

    let choice = <div/>
    if(computerChoice == "Rock") choice = <img src={rock} height={150} width={150} />
    else if(computerChoice == "Paper") choice = <img src={paper} height={150} width={130} />
    else if(computerChoice == "Scissor") choice = <img src={scissor} height={150} width={120} />
    

  return (
    <div>
        {choice}
    </div>
  )
}

export default ComputerChoiceImage