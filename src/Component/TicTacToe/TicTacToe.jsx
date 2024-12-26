import { useState } from "react";
import SquareButton from "./SquareButton";

const TicTacToe = () => {
    const [square, setSquare] = useState(Array(9).fill(null));
    const HandleSquare = (i) => {
        const newSquare = [...square];
        if (newSquare[i]) {

            newSquare[i] = null;
        } else {
            newSquare[i] = "X";
        }
        setSquare(newSquare);
    }
    return (
        <>
            <div className="min-h-screen h-fit w-full text-white flex justify-center items-center flex-col gap-6">
                <h1 className="font-bold text-xl  text-white sm:text-2xl">Tic Tac Toe</h1>
                <div className="grid grid-cols-3">
                    <SquareButton value={square[0]} onClick={() => HandleSquare(0)} />
                    <SquareButton value={square[1]} onClick={() => HandleSquare(1)} />
                    <SquareButton value={square[2]} onClick={() => HandleSquare(2)} />
                    <SquareButton value={square[3]} onClick={() => HandleSquare(3)} />
                    <SquareButton value={square[4]} onClick={() => HandleSquare(4)} />
                    <SquareButton value={square[5]} onClick={() => HandleSquare(5)} />
                    <SquareButton value={square[6]} onClick={() => HandleSquare(6)} />
                    <SquareButton value={square[7]} onClick={() => HandleSquare(7)} />
                    <SquareButton value={square[8]} onClick={() => HandleSquare(8)} />
                </div>
            </div>
        </>
    )
}
export default TicTacToe;