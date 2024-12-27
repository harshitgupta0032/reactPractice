import { useNavigate } from "react-router-dom";

const Todo = () => {
    const Navigate = useNavigate();
    const GoBack = () => {
        return Navigate(-1);
    }
    return <>
        <div className="min-h-screen h-fit w-full text-white flex justify-center items-center flex-col gap-6">
            <h1 className="text-xl sm:text-2xl font-bold">Todo</h1>
            <div className="flex flex-wrap gap-3 mt-8 text-white">
                <button onClick={GoBack} className="bg-slate-900 py-1 px-4 rounded-lg ">Go Back</button>
                <button className="bg-slate-900 py-1 px-4 rounded-lg"><a href="https://github.com/harshitgupta0032/reactPractice/tree/main/src/Component/Todo" className="w-full h-full">See Code</a></button>
            </div>
        </div>
    </>
}
export default Todo;