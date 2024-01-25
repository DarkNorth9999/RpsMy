import React from 'react'
import './Instructions.css'
import { IoShield } from "react-icons/io5";
import { FaFireAlt, FaQuestion } from "react-icons/fa";
import { MdOutlineSwapCalls } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

function Instuctions({setIbutton}) {
  return (
    <div className='instructions-container'>
      <div className='instruction-head'>
        <div className='instructions-title'> Power Ups</div>
        <div onClick={() => setIbutton(false)}>
          <div><RxCross1 size={40}  /> </div>
        </div>
      </div>

        <div style={{display:'flex', alignItems:'center', padding:10}}>
          <div className='singlePowerUpButton' style={{borderColor:"#30b84d"}}>
                <div className='x2 '>
                    <div style={{color:"#30b84d" }}>x2</div> 
                </div>
          </div>
          <div> <span style={{color:"#30b84d", fontWeight:600}}> Double Points </span> : Doubles the points in next win</div>
        </div>


        <div style={{display:'flex',  alignItems:'center', padding:10}}>
            <div className='singlePowerUpButton'style={{borderColor:"#FFC300"}}>
                    <div >
                     <IoShield color='#FFC300' />
                    </div>
                </div>
           <div> <span style={{color:"#FFC300", fontWeight:600}}> Shield </span> : Negates the effect of the next loss</div>
        </div>


        <div style={{display:'flex', alignItems:'center', padding:10}}>
            <div className='singlePowerUpButton' 
                    style={{borderColor:"#FF8C00"}}>
                    <div>
                        <FaFireAlt color='#FF8C00' />
                    </div>
            </div>
          <div> <span style={{color:"#FF8C00", fontWeight:600}}>Element boost </span> : Temporarily strengthens a chosen element, making it win against one additional element.</div>
        </div>

        <div style={{display:'flex', alignItems:'center', padding:10}}>
            <div className='singlePowerUpButton'
               style={{borderColor:"#8e3fbf"}}
            >
                <div>
                <FaQuestion color={'#8e3fbf'}/>
                </div>
            </div>
          <div> <span style={{color:"#8e3fbf", fontWeight:600}}> Predicton </span> : Reveals the computer's next choice.</div>
        </div>

        <div style={{display:'flex', alignItems:'center', padding:10}}>
            <div className='singlePowerUpButton'
                style={{borderColor:"#3458eb"}}
            >
                <div>
                    <MdOutlineSwapCalls color='#3458eb' />
                </div>
            </div>    
          <div> <span style={{color:"#3458eb", fontWeight:600}}> Element Swap</span> : Allows changing the chosen element after revealing the computer’s choice.</div>
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