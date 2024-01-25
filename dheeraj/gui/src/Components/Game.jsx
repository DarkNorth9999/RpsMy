import React, {useEffect, useState} from 'react'
import rock from '../Images/rock.png'
import paper from '../Images/paper.png'
import scissor from '../Images/scissor.png'
import { RxCross1 } from "react-icons/rx";
import './Game.css'
import History from './History'
import ComputerChoiceImage from './ComputerChoiceImage';
import Exit from './Exit'
import PowerUpButtons from './PowerUpButtons';
import { ToastContainer, toast } from 'react-toastify';
import Instructions from './Instuctions'


function Game({name, setIsGameOn}) {

    const [round, setRound] = useState(1);
    const [rpsInfo, setRpsInfo] = useState({0 : "Rock", 1 : "Paper", 2 : "Scissor"});
    const [userChoice, setUserChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [winner, setWinner] = useState(null);
    const [userScore, setUserScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [resultArray] = useState(["COMPUTER WON", "YOU WON !", "Its A TIE !"])
    const [historyArray, setHistoryArray] = useState([]);
    const [historyActivated, setHistoryActivated] = useState(false);
    const [isExitActivated, setIsExitActivated] = useState(false);
    const [userName, setUserName] = useState("User");
    const [computerInputCode, setcomputerInputCode] = useState(null);
    const [consecutiveWins, setConsecutiveWins] = useState(0);
    const [consecutiveLosses, setConsecutiveLosses] = useState(0);
    const [count, setCount] = useState(0);
    const [iButton, setIbutton] = useState(false);

    // POWER UPS
    const [doublePoints, setDoublePoints] = useState({active:false , noOfDoublePoints:1});
    const [shield , setShield] = useState({active:false , noOfShield:1});
    const [elementBoost, setElementBoost] = useState({active:false, noOfElementBoost:1});
    const [predicted, setPredicted] = useState({active:null, noOfPredicted:1});
    const [swap, setSwap] = useState({active:null, noOfSwaps:2});
   
   

    useEffect(() => {
        if(name.length > 0)
        setUserName(name)
    },[]);

    useEffect(() => {
        if(consecutiveWins == 3){
            setConsecutiveWins(0);
            setDoublePoints({active:doublePoints.active , noOfDoublePoints:doublePoints.noOfDoublePoints+1 });
            toast("Yay! 3 consecutive Wins. Double Points Earned.");
        }   
        
        if(consecutiveLosses == 3){
            setConsecutiveLosses(0);
            setShield({active:shield.active, noOfShield : shield.noOfShield+1});
            toast("3 Consecutive Loseses. Shield for your help.");
        }
    },[consecutiveWins, consecutiveLosses])


    useEffect(() => {
        
        const timeoutId = setTimeout(() => {
    
          setCount(count + 1);
          const random = Math.floor(Math.random() * 5);

          if(random == 0){
            setDoublePoints({...doublePoints , noOfDoublePoints:doublePoints.noOfDoublePoints + 1 });
            toast("Double Points Earned!");
          }
          else if(random == 1){
            setShield({...shield, noOfShield : shield.noOfShield + 1});
            toast("Shield Earned!");
          }
          else if(random == 2){
            setElementBoost({...elementBoost, noOfElementBoost: elementBoost.noOfElementBoost + 1 });
            toast("Element Boost Earned!");
          }
          else if(random == 3){
            setPredicted({...predicted, noOfPredicted: predicted.noOfPredicted + 1});
            toast("Prediction Earned!");
          }
          else if(random == 4){
            setSwap({...swap, noOfSwaps : swap.noOfSwaps + 1})
            toast("Swap Earned!");
          }
        }, 60000);
        
        return () => clearTimeout(timeoutId);
      }, [count]); 


    const handleDoublePoints = () => {
        setDoublePoints({...doublePoints, active:false });
        setUserScore((userScore) => userScore + 1);
    }

    const handleShield = () => {
        setShield({...shield, active:false});
        setUserScore((userScore) => userScore + 1);
    }
    
    const handleElementBoost = () => {
        setElementBoost({active:false, noOfElementBoost: elementBoost.noOfElementBoost-1 });
    }

    const handlePrediction = () => {
        const computerInputCode = Math.floor(Math.random() * 3);
        setPredicted({active : computerInputCode, noOfPredicted: predicted.noOfPredicted - 1});
        return computerInputCode;
    }
    
    const handleSwap = () => {

        setRound((round) => round - 1);
        setUserChoice(null);
        setWinner(null);

        let lastScore = historyArray[historyArray.length-1];
        if(lastScore == 0){
            setComputerScore((computerScore) => computerScore - 1);
        }
        else if(lastScore == 1){
            setUserScore((userScore) => userScore - 1);
        }

        setHistoryArray((arr) => arr.slice(0,-1));
    setPredicted({...predicted, active: computerInputCode});
    }

    

    const start = (userInputCode) => {

        if(round%10 == 0){
            setElementBoost({...elementBoost, noOfElementBoost: elementBoost.noOfElementBoost + 1 });
            toast("10 more rounds completed. Element Boost Earned!")
        }

        if(swap.active){
            setSwap({active:null, noOfSwaps : swap.noOfSwaps});
        }

        setRound((round) => round+1);
        let computerInputCode = Math.floor(Math.random() * 3);
        if(predicted.active != null){ // null for a reason
            computerInputCode = predicted.active;
            setPredicted({...predicted, active:null});
        }

        setComputerChoice(rpsInfo[computerInputCode]);
        setUserChoice(rpsInfo[userInputCode]);
        setcomputerInputCode(computerInputCode);
        

        if(userInputCode == computerInputCode){
            setWinner(2);
            setHistoryArray((arr) => [...arr, 2]);
            if(elementBoost.active){
                handleElementBoost();
            }
            setConsecutiveLosses(0); setConsecutiveWins(0);
            return;
        }

           // User Selected Rock
        if(userInputCode == 0){
            if(computerInputCode == 1){

                if(elementBoost.active){
                    setUserScore(userScore + 1);
                    setHistoryArray((arr) => [...arr, 1]);
                    setWinner(1);
                    handleElementBoost();
                    setConsecutiveWins((consecutiveWins) => consecutiveWins + 1);
                    setConsecutiveLosses(0);
                }
                else{
                    
                    setComputerScore((computerScore) => computerScore+1);
                    setHistoryArray((arr) => [...arr, 0]);
                    setWinner(0);
                    setConsecutiveLosses((consecutiveLosses) => (consecutiveLosses + 1));
                    setConsecutiveWins(0);
                }

                if(shield.active){
                    handleShield();
                }
            }
            else if(computerInputCode == 2){
                setUserScore(userScore + 1);
                setHistoryArray((arr) => [...arr, 1]);
                setWinner(1);
                setConsecutiveWins((consecutiveWins) => (consecutiveWins + 1))
                setConsecutiveLosses(0);

                if(doublePoints.active){
                    handleDoublePoints();
                }
            }

            
        }

        // User Selcected Paper 
        if(userInputCode == 1){
            if(computerInputCode == 0){
                setUserScore(userScore + 1);
                setHistoryArray((arr) => [...arr, 1]);
                setWinner(1);
                setConsecutiveWins((consecutiveWins) => (consecutiveWins + 1))
                setConsecutiveLosses(0);

                if(doublePoints.active){
                    handleDoublePoints();
                }
            }
            else if(computerInputCode == 2){

                if(elementBoost.active){
                    setUserScore(userScore + 1);
                    setHistoryArray((arr) => [...arr, 1]);
                    setWinner(1);
                    handleElementBoost();
                    setConsecutiveWins((consecutiveWins) => (consecutiveWins + 1));
                    setConsecutiveLosses(0);
                }
                else{
                    setComputerScore(computerScore+1);
                    setHistoryArray((arr) => [...arr, 0]);
                    setWinner(0);
                    setConsecutiveLosses((consecutiveLosses) => (consecutiveLosses + 1));
                    setConsecutiveWins(0);
                }

                if(shield.active){
                    handleShield();
                }
            }
        }

        // User Selected Scissor
        if(userInputCode == 2){
            if(computerInputCode == 0){

                if(elementBoost.active){
                    setUserScore(userScore + 1);
                    setHistoryArray((arr) => [...arr, 1]);
                    setWinner(1);
                    handleElementBoost();
                    setConsecutiveWins((consecutiveWins) => (consecutiveWins + 1));
                    setConsecutiveLosses(0);
                }
                else{
                    setComputerScore(computerScore+1);
                    setHistoryArray((arr) => [...arr, 0]);
                    setWinner(0);
                    setConsecutiveLosses((consecutiveLosses) => (consecutiveLosses + 1));
                    setConsecutiveWins(0);
                }

                if(shield.active){
                    handleShield();
                }
            }
            else if(computerInputCode == 1){
                setUserScore(userScore + 1);
                setHistoryArray((arr) => [...arr, 1]);
                setWinner(1);
                setConsecutiveWins((consecutiveWins) => (consecutiveWins + 1));
                setConsecutiveLosses(0);

                if(doublePoints.active){
                    handleDoublePoints();
                }
            }
        }     
        
    }


   

    return (
        <div>         

            {
                (isExitActivated) 
                && 
                <Exit name={userName} userScore={userScore} computerScore={computerScore} setIsGameOn={setIsGameOn} />
            }
            <div className='roundWrapper'>Round : {round}</div>


            <div className='i-button' onClick={() => setIbutton((iButton) => !iButton)}>
                <div >
                    {
                        (iButton) ? <div> <RxCross1/> </div> :  <div> i </div>
                    }
                </div>
            </div>

            {
                (iButton)
                &&
                <Instructions/>
            }

            <div className='exit-button' onClick={() => setIsExitActivated((isExitActivated ) => !isExitActivated)}>
                <div >
                    EXIT
                </div>
            </div>

           
            <div className='history-button' onClick={() => setHistoryActivated((historyActivated) => !historyActivated)}>
                <div >
                    {
                        (historyActivated) ? <div> <RxCross1/> </div> :  <div> History </div>
                    }
                </div>
            </div>

            {
                (historyActivated)
                &&
                <History userScore={userScore} computerScore={computerScore} historyArray={historyArray}/>
            }


            <PowerUpButtons 
                round={round}
                doublePoints={doublePoints}
                setDoublePoints={setDoublePoints}
                handleDoublePoints={handleDoublePoints}
                shield={shield}
                setShield={setShield}
                elementBoost={elementBoost}
                setElementBoost={setElementBoost}
                handlePrediction={handlePrediction}
                predicted={predicted}
                setPredicted={setPredicted}
                swap={swap}
                handleSwap={handleSwap}
                setSwap={setSwap}
                rpsInfo={rpsInfo}
            />
            

            <div className='gameWrapper'>
               
                <div className='userWrapper'>
                    <div className='score'>{userScore}</div>
                    <div className='userOptions'>
                        <div className='singleUserOption' onClick={() => start(0)}>
                            <img src={rock} height={150} width={150} />
                            <div className='optionStyle'>
                                <div>{rpsInfo[0]}</div>
                            </div>
                        </div>
                        <div className='singleUserOption' onClick={() => start(1)}>
                            <img src={paper} height={150} width={130} />
                            <div className='optionStyle'>
                                <div>{rpsInfo[1]}</div>
                            </div>
                        </div>
                        <div className='singleUserOption' onClick={() => start(2)}>
                            <img src={scissor} height={150} width={120} />
                            <div className='optionStyle'>
                                <div>{rpsInfo[2]}</div>
                            </div>
                        </div>
                        
                    </div>
                </div> 
                <div className='computerWrapper'>
                    <div className='score score-right'>{computerScore}</div>
                    <div className='computerOptions'>   
                        <div>
                            {
                                (computerChoice)
                                && <ComputerChoiceImage computerChoice={computerChoice} />
                            }
                        </div>
                    </div>
                </div>
            </div>


            <div className='choiceStateOption'>
                <div className='left-option'>
                    {
                        (userChoice && 
                            <div>{userName} Choose : {userChoice} </div>
                        )
                    }
                </div>

                <div>
                    {
                        (computerChoice && 
                            <div>Computer Choose : {computerChoice} </div>
                        )
                    }
                </div>
            </div>

            <div>
                {
                    (winner != null) &&
                    <div className='bottom'>
                        <div className='result '>{resultArray[winner]}</div>
                    </div>
                }
            </div>
            
        </div>
    )
}

export default Game