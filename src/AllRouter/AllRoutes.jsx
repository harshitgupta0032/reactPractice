import { Route, Routes } from "react-router-dom";
import Home from "../Component/Home";
import Counter from "../Component/Counter/Counter";

const AllRouters = ()=>{
    return<>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/counter" element={<Counter/>}/>
    </Routes>
    </>
}
export default AllRouters;