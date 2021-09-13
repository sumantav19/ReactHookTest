import {useContext, useEffect} from 'react';
import { SquareContext, XIsNextContext, WinnerContext } from './Game3';
import  Square from "./Square";

function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

const Board3 = ()=> {
    const {squares,setSquare} = useContext(SquareContext);
    const {xIsNext,setNext} = useContext(XIsNextContext);
    const {winner,setWinner} = useContext(WinnerContext);
    let status;
    if (winner) {
        status = `Winner : ${winner}`
    } else {
        status = `Next Player : ${xIsNext ? 'X' : 'O'}`
    }
    const handleClick = (i) => {
        if (squares[i] === null && winner === null) {
            setSquare(squares => {
                const sq = squares.slice();
                sq[i] = xIsNext ? 'X' : 'O';
                return sq;
            })
            setNext(x => !x)
        }
    }

    const renderSquare= (i)=>{
        return <Square value={squares[i]} onClick={()=> handleClick(i)}/>
    }

    useEffect(()=>{    
        setWinner(calculateWinner(squares))
    },[squares,setWinner])

    
    return (
            <div>
                <div className="staus">{status}</div>
                <div className="board-row">
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className="board-row">
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className="board-row">
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
            </div>
    )
}

export default Board3;