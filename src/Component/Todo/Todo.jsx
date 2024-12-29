import BackAndCodeButton from "../BackAndCodeButton";

const Todo = () => {
    return <>
        <div className="min-h-screen h-fit w-full text-white flex justify-center items-center flex-col gap-6">
            <h1 className="text-xl sm:text-2xl font-bold">Todo</h1>
            <BackAndCodeButton gitlink ="https://github.com/harshitgupta0032/reactPractice/tree/main/src/Component/Todo"/>
        </div>
    </>
}
export default Todo;