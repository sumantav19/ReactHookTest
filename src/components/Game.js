// import React,{useState} from 'react';
// import Board from './Board';

// function calculateWinner(squares) {
//         const lines = [
//             [0, 1, 2],
//             [3, 4, 5],
//             [6, 7, 8],
//             [0, 3, 6],
//             [1, 4, 7],
//             [2, 5, 8],
//             [0, 4, 8],
//             [2, 4, 6],
//         ];
//         for (let i = 0; i < lines.length; i++) {
//             const [a, b, c] = lines[i];
//             if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//                 return squares[a];
//             }
//         }
//         return null;
//     }

// const Game = () => {

//     const { history, setHistory } = useState([{ squares: Array(9).fill(null) }]);
//     const { xIsNext, setNext } = useState(true);

//     const handleClick = (i) => {
//         const current = history[history.length - 1];
//         const squares = current.squares.slice();
//         if (calculateWinner(squares) || squares[i]) {
//             return;
//         }
//         squares[i] =  xIsNext ? 'X' : 'O';
//         setHistory(h=>h.concat([{ squares: squares }]));
//         setNext(next=>!next);

//     }

//     const curr = history[history.length - 1];
//     const winner = calculateWinner(curr.squares);
//     let status;
//     if (winner) {
//         status = `Winner : ${winner}`
//     } else {
//         status = `Next Player : ${this.xIsNext ? 'X' : 'O'}`
//     }
//     return (
//         <div className="game">
//             <div className="game-board">
//                 <Board squares={curr.squares}
//                     handleClick={handleClick} />
//             </div>
//             <div className="game-info">
//                 <div>{status}</div>
//                 <ol>{ }</ol>
//             </div>
//         </div>
//     )

// }

// export default Game;