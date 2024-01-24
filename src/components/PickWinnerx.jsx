import React from 'react'

export default function PickWinnerx({winner}) {
  let pickedWinner = ""

    if(winner==1){
      pickedWinner = "User WINS!"
    }
    else if(winner==2){
      pickedWinner = "Computer WINS!"
    }
    else if(winner==3) pickedWinner = "Its a TIE"
  

  return (
    <div>
      <div><h3>{pickedWinner}</h3></div>
    </div>
  )
}
