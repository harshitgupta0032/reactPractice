import { useState } from "react";
import SeparatedCountButton from "./SeparatedCountButton";
import TogetherCountButton from "./TogetherCountButton";
import { useNavigate } from "react-router-dom";

const Counter = () => {
    const [count, setCount] = useState(0);
    const handleButton = ()=>{
        setCount(count+1);
    }
    const Navigate = useNavigate();
    const GoBack = ()=>{
        return Navigate(-1);
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
                <div className="flex flex-wrap gap-3 mt-8">
                    <button className="bg-slate-900 py-1 px-4 rounded-lg"><a href="https://github.com/harshitgupta0032/reactPractice/tree/main/src/Component/Counter" className="w-full h-full">See Code</a></button>
                    <button onClick={GoBack} className="bg-slate-900 py-1 px-4 rounded-lg">Go Back</button>
                </div>
            </div>
        </>
    )
}
export default Counter;