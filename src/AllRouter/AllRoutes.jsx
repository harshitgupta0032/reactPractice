import { Route, Routes } from "react-router-dom";
import Home from "../Component/Home";
import Counter from "../Component/Counter/Counter";
import TicTacToe from "../Component/TicTacToe/TicTacToe";
import ProductByJson from "../Component/ProductByJson/ProductByJson";

const AllRouters = () => {
    return <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/tictacteo" element={<TicTacToe />} />
            <Route path="/productjson" element={<ProductByJson />} />
        </Routes>
    </>
}
export default AllRouters;