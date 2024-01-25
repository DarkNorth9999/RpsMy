import React from 'react'
import './Instructions.css'
import { IoShield } from "react-icons/io5";
import { FaFireAlt, FaQuestion } from "react-icons/fa";
import { MdOutlineSwapCalls } from "react-icons/md";

function Instuctions() {
  return (
    <div className='instructions-container'>
      <div className='instructions-title'> Power Ups</div>

        <div style={{display:'flex', justifyContent:'center', alignItems:'center', padding:10}}>
          <div className='singlePowerUpButton' style={{borderColor:"#30b84d"}}>
                <div className='x2 '>
                    <div style={{color:"#30b84d" }}>x2</div> 
                </div>
          </div>
          <div>Double Points : Doubles the points in next win</div>
        </div>


        <div style={{display:'flex', justifyContent:'center', alignItems:'center', padding:10}}>
            <div className='singlePowerUpButton'style={{borderColor:"#FFC300"}}>
                    <div >
                     <IoShield color='#FFC300' />
                    </div>
                </div>
           <div>Shield : Negates the effect of the next loss</div>
        </div>


        <div style={{display:'flex', justifyContent:'center', alignItems:'center', padding:10}}>
            <div className='singlePowerUpButton' 
                    style={{borderColor:"orange"}}>
                    <div>
                        <FaFireAlt color='orange' />
                    </div>
            </div>
          <div>Element boost: Temporarily strengthens a chosen element, making it win against one additional element.</div>
        </div>

        <div style={{display:'flex', justifyContent:'center', alignItems:'center', padding:10}}>
            <div className='singlePowerUpButton'
               style={{borderColor:"#8e3fbf"}}
            >
                <div>
                <FaQuestion color={'#8e3fbf'}/>
                </div>
            </div>
          <div>Predicton : Reveals the computer's next choice.</div>
        </div>

        <div style={{display:'flex', justifyContent:'center', alignItems:'center', padding:10}}>
            <div className='singlePowerUpButton'
                style={{borderColor:"#3458eb"}}
            >
                <div>
                    <MdOutlineSwapCalls color='#3458eb' />
                </div>
            </div>    
          <div>Element Swap : Allows changing the chosen element after revealing the computer’s choice.</div>
        </div>

      <div>
        <div className='instructions-title'>Rules</div>
        <div className='single-instruction'>
            <div># Afer 3 consecutive wins, 'Double Points' is earned.</div>
        </div>
        <div className='single-instruction'>
            <div># Afer 3 consecutive losses, 'Shield' is earned.</div>
        </div>
        <div className='single-instruction'>
            <div># Afer 10 rounds, 'Element Boost' is Earned.</div>
        </div>
        <div className='single-instruction'>
            <div># Every Minute, one random power up is earned. </div>
        </div>
        </div>
    </div>
  )
}

export default Instuctions 