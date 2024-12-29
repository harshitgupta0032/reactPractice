import { useNavigate } from "react-router-dom"

const BackAndCodeButton = ({gitlink}) => {
    const Navigate = useNavigate();
    const GoBack = ()=>{
        return Navigate(-1);
    }
    return <>
        <div className="flex flex-wrap gap-3 mt-8 text-white">
            <button onClick={GoBack} className="bg-slate-900 py-1 px-4 rounded-lg ">Go Back</button>
            <button className="bg-slate-900 py-1 px-4 rounded-lg"><a href={gitlink} className="w-full h-full">See Code</a></button>
        </div>
    </>
}
export default BackAndCodeButton;