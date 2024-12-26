import { useState } from "react";
import SeparatedCountButton from "./SeparatedCountButton";
import TogetherCountButton from "./TogetherCountButton";

const Counter = () => {
    const [count, setCount] = useState(0);
    const handleButton = ()=>{
        setCount(count+1);
    }
    return (
        <>
            <div className="min-h-screen h-fit w-full text-white flex justify-center items-center flex-col gap-6">
                <h1 className="text-xl sm:text-2xl font-bold">1. Counters that update separately</h1>
                <div className=" flex gap-4 flex-wrap">
                    <SeparatedCountButton />
                    <SeparatedCountButton />
                </div>
                <h1 className="text-xl sm:text-2xl font-bold">2. Counters that update together : {count}</h1>
                <div className=" flex gap-4 flex-wrap">
                    <TogetherCountButton onClick={handleButton} count={count}/>
                    <TogetherCountButton onClick={handleButton} count={count}/>
                </div>
            </div>
        </>
    )
}
export default Counter;