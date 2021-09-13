import { createContext,useState } from "react";
import Board3 from "./Board3"


const SquareContext =  createContext();
const XIsNextContext = createContext();
const WinnerContext = createContext();
const Game3 = ()=>{
    const [squares,setSquare] = useState(Array(9).fill(null));
    const [xIsNext,setNext] = useState(true);
    const [winner,setWinner] = useState(null);
    return (
        <div className="game">
            <div className="game-board">
                <SquareContext.Provider value={{squares,setSquare}}>
                    <XIsNextContext.Provider value={{xIsNext,setNext}}>
                        <WinnerContext.Provider value={{winner,setWinner}}>
                            <Board3></Board3>
                        </WinnerContext.Provider>
                    </XIsNextContext.Provider>
                    
                </SquareContext.Provider>
            </div>
        </div>
    )
}

export { Game3 , SquareContext,XIsNextContext,WinnerContext};
