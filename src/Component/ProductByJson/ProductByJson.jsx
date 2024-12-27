import FilterableProduct from "./FilterableProduct";

const ProductByJson = () => {
    return <>
        <div className="min-h-screen h-fit w-full flex justify-center items-center flex-col gap-6">
            <div className="w-fit h-fit flex flex-col gap-5 items-center bg-white px-3 sm:px-5 py-3">
                <FilterableProduct />
            </div>
        </div>
    </>
}
export default ProductByJson;