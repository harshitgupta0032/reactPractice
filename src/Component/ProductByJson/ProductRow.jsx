const ProductRow = ({ productName, price, productStock }) => {

    const name = productStock ? productName : <span className="text-red-500">{productName}</span>

    return (
        <>
            <tr className="w-full flex justify-around my-3">
                <td>{name}</td>
                <td>{price}</td>
            </tr>
        </>
    )
}
export default ProductRow;