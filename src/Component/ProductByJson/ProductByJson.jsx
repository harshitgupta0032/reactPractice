import { useNavigate } from "react-router-dom";
import FilterableProduct from "./FilterableProduct";

const ProductByJson = () => {
    const Navigate = useNavigate();
    const GoBack = ()=>{
        return Navigate(-1);
    }
    return <>
        <div className="min-h-screen h-fit w-full flex justify-center items-center flex-col gap-6">
            <div className="w-fit h-fit flex flex-col gap-5 items-center bg-white px-3 sm:px-5 py-3">
                <FilterableProduct />
            </div>
            <div className="flex flex-wrap gap-3 mt-8 text-white">
                <button onClick={GoBack} className="bg-slate-900 py-1 px-4 rounded-lg ">Go Back</button>
                <button className="bg-slate-900 py-1 px-4 rounded-lg"><a href="https://github.com/harshitgupta0032/reactPractice/tree/main/src/Component/ProductByJson" className="w-full h-full">See Code</a></button>
            </div>
        </div>
    </>
}
export default ProductByJson;