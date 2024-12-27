import { useEffect, useState } from "react";
import products from "./Product.json"
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
const FilterableProduct = () => {
    const [filterText, setFilterText] = useState("");
    const [isStockProduct, setIsStockProduct] = useState(false);
    const handleInputText = (e) => {
        setFilterText(e.target.value);
    }
    const handleStockProduct = (e) => {
        setIsStockProduct(e.target.checked);
    }
    useEffect(()=>{

    },[filterText, isStockProduct])
    return (
        <>
            <SearchBar filterText={filterText} handleInputText={handleInputText} isStockProduct={isStockProduct} handleStockProduct={handleStockProduct} />
            <ProductTable products={products}  filterText={filterText} isStockProduct={isStockProduct} />
        </>
    )
}

export default FilterableProduct;