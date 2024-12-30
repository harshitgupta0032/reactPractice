import { useState } from "react";
import BackAndCodeButton from "../BackAndCodeButton";
import SearchButton from "./SearchButton";
import TodoListComponent from "./TodoListComponent";

const Todo = () => {
    const [inputText, setInputText] = useState("");
    const [inputList, setInputList] = useState([]);
    const [count, setCount] = useState(0);

    const handleInput = (e) => {
        setInputText(e.target.value);
    }
    const SubmitText = () => {
        setInputList([...inputList, { text: inputText, id: count}]);
        setInputText("");
        setCount(count+1);
    }

    const deleteInput = (id) => {
        const newList = inputList.filter((list, i) => {
            return list.id !== id;
        })
        return setInputList(newList);
    }
    return <>
        <div className="min-h-screen h-fit w-full text-white flex pt-8 items-center flex-col gap-5">
            <h1 className="text-xl sm:text-2xl font-bold">Todo</h1>
            <div className="flex flex-col w-fit gap-5">
                <SearchButton onClick={SubmitText} inputText={inputText} handleInput={handleInput} />
                <TodoListComponent inputList={inputList} deleteInput={deleteInput} />
            </div>
            {/* <BackAndCodeButton gitlink="https://github.com/harshitgupta0032/reactPractice/tree/main/src/Component/Todo" /> */}
        </div>
    </>
}
export default Todo;