import React from 'react';
import Square from './Square';

const Board = ({handleClick,squares}) => {
    console.log(handleClick,"out",squares);
    const renderSquare = (i) => {
        console.log(handleClick,"in");
        return (
            <Square
                // value={this.props.squares[i]}
                value=''
                onClick={() => handleClick(i)} />);
    }
    return (
        <div>
            {/* <div className="staus">{status}</div> */}
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
    );

}

export default Board;