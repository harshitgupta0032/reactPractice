import { useState } from "react";

const SeparatedCountButton = () => {
    const [count, setCount] = useState(0);
    const HandleButton = ()=>{
        setCount(count+1);
    }
    return <button className="bg-white active:bg-slate-200 text-black px-4 py-1 rounded-md" onClick={HandleButton}>Click : {count}</button>
}

export default SeparatedCountButton;