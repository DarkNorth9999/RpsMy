import React, { useEffect } from 'react'
import './PowerUpButtons.css'
import { IoShield } from "react-icons/io5";
import { FaFireAlt, FaQuestion } from "react-icons/fa";
import { MdOutlineSwapCalls } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PowerUpButtons({round,doublePoints, setDoublePoints,shield, setShield, elementBoost, setElementBoost, handlePrediction, predicted, handleSwap, swap,setSwap, rpsInfo}) {

    const notify = (message) => toast(message);
    const handleDoublePointsTouch = () => {
        setDoublePoints({active:true, noOfDoublePoints:doublePoints.noOfDoublePoints - 1})
        notify("Double Points Activated! : You will get x2 points in next win.")
    }

    const handleShieldTouch = () => {
        setShield({ active:true, noOfShield : shield.noOfShield - 1})
        notify("Shield Activated! : You will get 1 point on next loss.")
    }

    const handleElementBoostTouch = () => {
        setElementBoost({...elementBoost, active:true});
        notify("Element Boost Activated! : Next Selected Element will be undefeated.")
    }

    const handlePredictionTouch = () => {
        const predictedCode = handlePrediction();
        predicted.active = predictedCode;
        notify(`Computer's Next Move : ${rpsInfo[predictedCode]}`)
    }

    const handleSwapTouch = () => {
        if(round > 1){
            setSwap({active : 1, noOfSwaps : swap.noOfSwaps - 1});
            handleSwap();
            notify('Swap Activated! Make your move again.')
        }
        else{
            notify("Nothing to Swap. Play Atleast one round.")
        }
    }
   
    
  return (
    <div>

        <ToastContainer />

        <div className='buttonWrapper'>

            {
                (doublePoints.active)
                ?
                <div className='singlePowerUpButton singlePowerUpButtonBlur'
                    style={{borderColor:"#30b84d"}}
                >
                    <div className='x2'>
                        <div style={{color:"#30b84d" }}>x2</div>
                    </div>
                </div>
                :
                (doublePoints.noOfDoublePoints > 0) &&
                <div className='singlePowerUpButton' style={{borderColor:"#30b84d"}}>
                    <div className='x2 ' onClick={handleDoublePointsTouch}>
                        <div style={{color:"#30b84d" }}>x2</div>
                        
                    </div>
                    <div className='dot'>{doublePoints.noOfDoublePoints}</div>
                </div>
            }
        

            {
                (shield.active) 
                ?
                <div className='singlePowerUpButton singlePowerUpButtonBlur'
                    style={{borderColor:"#FFC300"}}
                >
                    <div >
                    <IoShield color='#FFC300' />
                    </div>
                </div>
                :
                (shield.noOfShield > 0) &&
                <div className='singlePowerUpButton' style={{borderColor:"#FFC300"}}>
                    <div onClick={handleShieldTouch}>
                    <IoShield color='#FFC300' />
                    </div>
                    <div className='dot'>{shield.noOfShield}</div>
                </div>
            }
       
            {
                (elementBoost.active) 
                ?
                <div className='singlePowerUpButton singlePowerUpButtonBlur' 
                    style={{borderColor:"#FF8C00"}}>
                    <div>
                        <FaFireAlt color='#FF8C00' />
                    </div>
                </div>
                :

                (elementBoost.noOfElementBoost > 0) && 
                <div className='singlePowerUpButton' style={{borderColor:"#FF8C00"}}>
                    <div onClick={handleElementBoostTouch}>
                        <FaFireAlt color='#FF8C00' />
                    </div>
                    <div className='dot'>{elementBoost.noOfElementBoost}</div>
                </div>
            }

        {
            (predicted.active && predicted.noOfPredicted > 0)
            ?
            <div className='singlePowerUpButton singlePowerUpButtonBlur'
               style={{borderColor:"#8e3fbf"}}
            >
                <div>
                <FaQuestion color={'#8e3fbf'}/>
                </div>
            </div>

            :
            (predicted.noOfPredicted > 0) &&
            <div className='singlePowerUpButton' style={{borderColor:"#8e3fbf"}}>
                <div onClick={handlePredictionTouch}>
                <FaQuestion color={'#8e3fbf'}/>
                </div>
                <div className='dot'>{predicted.noOfPredicted}</div>
            </div>
        }

        {
            (swap.active) 
            ?
            <div className='singlePowerUpButton singlePowerUpButtonBlur'
                style={{borderColor:"#3458eb"}}
            >
                <div>
                    <MdOutlineSwapCalls color='#3458eb' />
                </div>
            </div>    
            :
            (swap.noOfSwaps > 0) &&
            <div className='singlePowerUpButton' style={{borderColor:"#3458eb"}}>
                <div onClick={handleSwapTouch}>
                    <MdOutlineSwapCalls color='#3458eb' />
                </div>
                <div className='dot'>{swap.noOfSwaps}</div>
            </div>
        }

        
        </div>

    </div>
  )
}

export default PowerUpButtons