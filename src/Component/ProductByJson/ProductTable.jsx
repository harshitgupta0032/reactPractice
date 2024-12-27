import ProductCategory from "./ProductCategory";
import ProductRow from "./ProductRow";

const ProductTable = ({ products, filterText, isStockProduct }) => {
    const Rows = [];
    let lastCategory = null;
    
    const filteredProducts = filterText ? products.filter((product) => product.name.toLowerCase().includes(filterText.toLowerCase())) 
    : products;
        
    filteredProducts.forEach((product) => {
        if (product.category !== lastCategory) {
            Rows.push(<ProductCategory category={product.category} />)
        }
        if (isStockProduct) {
            if (product.stocked) {
                Rows.push(<ProductRow productName={product.name} price={product.price} productStock={product.stocked} />)
                lastCategory = product.category;
            } else {
                return;
            }
        } else {
            Rows.push(<ProductRow productName={product.name} price={product.price} productStock={product.stocked} />)
            lastCategory = product.category;
        }
    })

    return (
        <>
            <table className=" h-72 w-72">
                <tr className="w-full flex justify-around">
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                <tr className="w-full  flex justify-around">
                    <td className="w-full">{Rows}</td>
                </tr>
            </table>
        </>
    )
}
export default ProductTable;