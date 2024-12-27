const SearchBar = ({ filterText, handleInputText, isStockProduct, handleStockProduct }) => {
    return <>
        <div className="h-fit p-2 w-fit gap-4 bg-white flex flex-col justify-center items-center">
            <div>
                <input className="border-gray-400 border-2 px-3 py-1 rounded-xl outline-gray-600" placeholder="Search Item" value={filterText} onChange={handleInputText} type="text" />
            </div>
            <div className="flex gap-3">
                <input type="checkbox"  id="checkbox" checked={isStockProduct} onChange={handleStockProduct}/>
                <label htmlFor="checkbox">Only show products in stock</label>
            </div>
        </div>
    </>
}
export default SearchBar;