import React from "react";
import { useState } from 'react';

import StartScreen from "./StartScreen";
import Game from "./Game";

export default function Home() {

    const [isGameOn, setIsGameOn] = useState(false);
    const [name, setName] = useState("User");

    const startGame = () => {
        setIsGameOn(true);
    }

    return(
        <div>
           {
            (!isGameOn) 
            ?
             <StartScreen startGame={startGame} name={name} setName={setName} />
             :

             <Game name={name} setIsGameOn={setIsGameOn}  />
           }
        </div>
    )
}