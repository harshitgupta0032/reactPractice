import { useState } from "react";
import SquareButton from "./SquareButton";
import CalculateWinner from "./CalculateWinner";
import BackAndCodeButton from "../BackAndCodeButton";
const TicTacToe = () => {
    const [square, setSquare] = useState(Array(9).fill(null));
    const [xIsNext, setXInNext] = useState(true);
    const HandleSquare = (i) => {
        if (square[i] || CalculateWinner(square)) return;

        const newSquare = [...square];

        newSquare[i] = xIsNext ? "X" : "O";

        setSquare(newSquare);
        setXInNext(!xIsNext);
    }

    const winner = CalculateWinner(square);
    let status;
    if (winner) {
        status = 'Win Player  ' + (winner === "X" ? "A" :"B" ) +" 🎉 🎊 ";
        
    } else {
        status = 'Turn of  Player ' + (xIsNext ? 'A' : 'B');
    }

    const ResetGame = ()=>{
        setSquare(Array(9).fill(null));
        setXInNext(true);
    }
    return (
        <>
            <div className="min-h-screen h-fit w-full text-white flex justify-center items-center flex-col gap-6">
                <h1 className="font-bold text-xl  text-white sm:text-2xl">Tic Tac Toe</h1>
                <div className="grid grid-cols-3">
                    <SquareButton  value={square[0]} onClick={() => HandleSquare(0)} />
                    <SquareButton  value={square[1]} onClick={() => HandleSquare(1)} />
                    <SquareButton  value={square[2]} onClick={() => HandleSquare(2)} />
                    <SquareButton  value={square[3]} onClick={() => HandleSquare(3)} />
                    <SquareButton  value={square[4]} onClick={() => HandleSquare(4)} />
                    <SquareButton  value={square[5]} onClick={() => HandleSquare(5)} />
                    <SquareButton  value={square[6]} onClick={() => HandleSquare(6)} />
                    <SquareButton  value={square[7]} onClick={() => HandleSquare(7)} />
                    <SquareButton  value={square[8]} onClick={() => HandleSquare(8)} />
                </div>
                <div className="font-bold text-lg  text-white sm:text-xl">{status}</div>
                <button onClick={ResetGame} className="bg-slate-900 py-1 px-4 rounded-lg">Reset Game</button>
                <BackAndCodeButton gitlink="https://github.com/harshitgupta0032/reactPractice/tree/main/src/Component/TicTacToe"/>
            </div>
        </>
    )
}
export default TicTacToe;