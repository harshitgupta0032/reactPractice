const TogetherCountButton = ({ onClick,count}) => {
    
    return <button onClick={onClick} className="bg-white active:bg-slate-200 text-black px-4 py-1 rounded-md">Click : {count}</button>
}

export default TogetherCountButton;